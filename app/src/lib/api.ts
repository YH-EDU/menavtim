import type { LetterEvents } from '../data/types';

// שכבת תקשורת: Supabase כשהתלמיד מחובר לכיתה,
// ומצב "אורח" (localStorage בלבד) כשמתרגלים בלי קוד כיתה.
// קבצי api/*.php לא בשימוש.

import { clearEphemeralPlayState, LS_LAST_ROUTE, SS_SESSION } from './playStorage';
import {
  supabase,
  isTeacherBackendConfigured,
  TEACHER_OFFLINE_MSG,
  teacherOAuthRedirectTo,
} from './supabase';

export { isTeacherBackendConfigured, TEACHER_OFFLINE_MSG };

export interface StudentSession {
  token: string;       // 'guest' במצב אורח
  nickname: string;
  emoji: string;       // "הסיסמה הקטנה" — מזהה את התלמיד יחד עם השם
  classId?: number;
  className?: string;
  freeNav?: boolean;   // מסלול חופשי (ללא נעילת פעילויות)
}

/** מיקום השחקן על מפת המסע — נשמר בין סשנים */
export interface MapPosition {
  x: number;
  y: number;
  faceX?: number;
  faceY?: number;
  pathIndex?: number;
  /** אינדקס מפת השלב (0–2). נשמר כדי לחזור לאותו שלב אחרי רענון. */
  stageIndex?: number;
}

export interface ProgressData {
  letters: Record<string, { c: number; w: number }>;
  completed: Record<string, { score: number; max: number }>; // לפי activity id
  freeNav?: boolean;
  mapPos?: MapPosition;
}

const LS_GUEST_REGISTRY = 'aramit_guest_registry';
const LS_GUEST_MIGRATED = 'aramit_guest_migrated_v2';

/** נתיבי משחק ששומרים לסשן — לרענון בלי חזרה למסך הבית */
const PERSISTABLE_ROUTES = new Set(['map', 'unit', 'play', 'progress', 'escape']);

/** מפתח יציב לשם — לא תלוי רישיות/רווחים */
export function normalizeNickname(nickname: string): string {
  return nickname.trim().replace(/\s+/g, ' ').toLowerCase();
}

/** התקדמות אורח נשמרת לפי שם+אימוג'י מזהה — כמה תלמידים יכולים לחלוק מחשב */
export function guestProgressKey(nickname: string, emoji: string): string {
  const n = encodeURIComponent(normalizeNickname(nickname));
  const e = encodeURIComponent(emoji.trim());
  return `aramit_guest_${n}__${e}`;
}

function guestKey(s: StudentSession): string {
  return guestProgressKey(s.nickname, s.emoji);
}

type GuestRegistry = Record<string, string[]>;

function loadGuestRegistry(): GuestRegistry {
  migrateGuestStorage();
  try {
    const raw = localStorage.getItem(LS_GUEST_REGISTRY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, string | string[]>;
    const out: GuestRegistry = {};
    for (const [nick, val] of Object.entries(parsed)) {
      if (Array.isArray(val)) out[nick] = val.filter((e) => typeof e === 'string' && e.trim());
      else if (typeof val === 'string' && val.trim()) out[nick] = [val.trim()];
    }
    return out;
  } catch {
    return {};
  }
}

function saveGuestRegistry(reg: GuestRegistry): void {
  localStorage.setItem(LS_GUEST_REGISTRY, JSON.stringify(reg));
}

/** סריקה חד-פעמית של מפתחות ישנים (name_emoji) + רישום במאגר */
function migrateGuestStorage(): void {
  if (localStorage.getItem(LS_GUEST_MIGRATED)) return;
  const registry: GuestRegistry = {};
  try {
    const raw = localStorage.getItem(LS_GUEST_REGISTRY);
    if (raw) {
      const parsed = JSON.parse(raw) as Record<string, string | string[]>;
      for (const [nick, val] of Object.entries(parsed)) {
        if (Array.isArray(val)) registry[nick] = [...val];
        else if (typeof val === 'string') registry[nick] = [val];
      }
    }
  } catch { /* ignore */ }

  const keys: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k?.startsWith('aramit_guest_') && k !== LS_GUEST_REGISTRY) keys.push(k);
  }

  const addEmoji = (nick: string, emoji: string) => {
    const n = normalizeNickname(nick);
    if (!n || !emoji) return;
    const list = registry[n] ?? [];
    if (!list.includes(emoji)) list.push(emoji);
    registry[n] = list;
  };

  for (const key of keys) {
    if (key.includes('__')) {
      const rest = key.slice('aramit_guest_'.length);
      const sep = rest.indexOf('__');
      if (sep > 0) {
        try {
          const nick = decodeURIComponent(rest.slice(0, sep));
          const emoji = decodeURIComponent(rest.slice(sep + 2));
          addEmoji(nick, emoji);
        } catch { /* ignore */ }
      }
      continue;
    }
    const rest = key.slice('aramit_guest_'.length);
    const lastUnderscore = rest.lastIndexOf('_');
    if (lastUnderscore <= 0) continue;
    const nick = rest.slice(0, lastUnderscore);
    const emoji = rest.slice(lastUnderscore + 1);
    if (!nick || !emoji) continue;
    addEmoji(nick, emoji);
    const newKey = guestProgressKey(nick, emoji);
    if (newKey !== key) {
      const data = localStorage.getItem(key);
      if (data) {
        localStorage.setItem(newKey, data);
        localStorage.removeItem(key);
      }
    }
  }

  saveGuestRegistry(registry);
  localStorage.setItem(LS_GUEST_MIGRATED, '1');
}

/** האימוג'ים הרשומים לשם במכשיר (יכולים להיות כמה — שם+אימוג'י שונה = שחקן אחר) */
export function getRegisteredIdentityEmojis(nickname: string): string[] {
  const reg = loadGuestRegistry();
  return reg[normalizeNickname(nickname)] ?? [];
}

/** @deprecated השתמשו ב־getRegisteredIdentityEmojis — שם יכול להופיע עם כמה אימוג'ים */
export function getRegisteredIdentityEmoji(nickname: string): string | null {
  const list = getRegisteredIdentityEmojis(nickname);
  return list.length === 1 ? list[0]! : null;
}

export type GuestIdentityCheck = 'new' | 'match';

/** בדיקת זהות — ייחודיות לפי שם+אימוג'י (אותו שם עם אימוג'י אחר מותר) */
export function checkGuestIdentity(nickname: string, emoji: string): GuestIdentityCheck {
  const e = emoji.trim();
  if (!e) return 'new';
  if (hasGuestProgress(nickname, e)) return 'match';
  const registered = getRegisteredIdentityEmojis(nickname);
  if (registered.includes(e)) return 'match';
  return 'new';
}

export function hasGuestProgress(nickname: string, emoji: string): boolean {
  const raw = localStorage.getItem(guestProgressKey(nickname, emoji));
  if (!raw) return false;
  try {
    const p = JSON.parse(raw) as ProgressData;
    return Object.keys(p.completed ?? {}).length > 0 || Object.keys(p.letters ?? {}).length > 0;
  } catch {
    return false;
  }
}

function registerGuestIdentity(nickname: string, emoji: string): void {
  const reg = loadGuestRegistry();
  const n = normalizeNickname(nickname);
  const e = emoji.trim();
  const list = reg[n] ?? [];
  if (!list.includes(e)) list.push(e);
  reg[n] = list;
  saveGuestRegistry(reg);
}

/**
 * סשן פעיל — sessionStorage + localStorage.
 * localStorage שומר רענון/חזרה ללשונית; sessionStorage לסנכרון מיידי באותה לשונית.
 */
export function loadSession(): StudentSession | null {
  try {
    const raw = sessionStorage.getItem(SS_SESSION) || localStorage.getItem(SS_SESSION);
    if (!raw) return null;
    const s = JSON.parse(raw) as StudentSession;
    // סנכרון בין המחסנים (למשל אחרי רענון ששמר רק ב-localStorage)
    try {
      sessionStorage.setItem(SS_SESSION, raw);
      localStorage.setItem(SS_SESSION, raw);
    } catch { /* ignore */ }
    return s;
  } catch {
    return null;
  }
}

/** מנקה את הסשן הפעיל — ההתקדמות לפי שם+אימוג'י נשארת ב-localStorage */
export function clearActiveSession(): void {
  saveSession(null);
  clearLastRoute();
  clearEphemeralPlayState();
}

/** סשן תקין — שם ואימוג'י (דמות) חובה לפני כניסה למסע */
export function isCompleteSession(s: StudentSession | null | undefined): s is StudentSession {
  return !!s?.nickname?.trim() && !!s?.emoji?.trim();
}

export function saveSession(s: StudentSession | null): void {
  if (s) {
    const raw = JSON.stringify(s);
    try { sessionStorage.setItem(SS_SESSION, raw); } catch { /* ignore */ }
    try { localStorage.setItem(SS_SESSION, raw); } catch { /* ignore */ }
  } else {
    try { sessionStorage.removeItem(SS_SESSION); } catch { /* ignore */ }
    try { localStorage.removeItem(SS_SESSION); } catch { /* ignore */ }
  }
}

/** שומר את מסך המשחק האחרון (map/play/…) לשחזור אחרי רענון */
export function saveLastRoute(hashPath: string): void {
  const clean = hashPath.replace(/^#\/?/, '').replace(/^\//, '');
  const head = clean.split('/').filter(Boolean)[0] || '';
  if (!PERSISTABLE_ROUTES.has(head)) return;
  try {
    localStorage.setItem(LS_LAST_ROUTE, clean);
  } catch { /* ignore */ }
}

export function loadLastRoute(): string | null {
  try {
    const raw = localStorage.getItem(LS_LAST_ROUTE);
    if (!raw) return null;
    const head = raw.split('/').filter(Boolean)[0] || '';
    return PERSISTABLE_ROUTES.has(head) ? raw : null;
  } catch {
    return null;
  }
}

export function clearLastRoute(): void {
  try {
    localStorage.removeItem(LS_LAST_ROUTE);
  } catch { /* ignore */ }
}

function asBackendError(error: { message?: string } | null, fallback = TEACHER_OFFLINE_MSG): Error {
  const msg = (error?.message ?? '').trim();
  if (/[\u0590-\u05FF]/.test(msg)) return new Error(msg);
  if (/invalid login|invalid credentials|email not confirmed/i.test(msg)) {
    return new Error('אימייל או סיסמה שגויים');
  }
  if (/already registered|already been registered|user already/i.test(msg)) {
    return new Error('כתובת האימייל כבר רשומה — נסו להתחבר');
  }
  if (/password/i.test(msg) && /short|least|6/i.test(msg)) {
    return new Error('סיסמה קצרה מדי (לפחות 6 תווים)');
  }
  if (/provider is not enabled|unsupported provider/i.test(msg)) {
    return new Error('כניסת גוגל עדיין לא הופעלה באתר זה');
  }
  if (/jwt|session missing|auth session/i.test(msg)) {
    return new Error('יש להתחבר מחדש');
  }
  if (!msg || /fetch|network|failed|404|405|json|not found/i.test(msg)) {
    return new Error(TEACHER_OFFLINE_MSG);
  }
  return new Error(fallback);
}

async function requireBackend() {
  if (!supabase || !isTeacherBackendConfigured()) throw new Error(TEACHER_OFFLINE_MSG);
  return supabase;
}

async function runBackend<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (ex) {
    if (ex instanceof Error && /[\u0590-\u05FF]/.test(ex.message)) throw ex;
    throw new Error(TEACHER_OFFLINE_MSG);
  }
}

// ─── תלמיד ───

export async function joinClass(code: string, nickname: string, emoji: string): Promise<StudentSession> {
  clearEphemeralPlayState();
  const sb = await requireBackend();
  const s = await runBackend(async () => {
    const { data, error } = await sb.rpc('join_class', {
      p_code: code,
      p_nickname: nickname,
      p_emoji: emoji,
    });
    if (error) throw asBackendError(error);
    const row = (data ?? {}) as {
      token?: string;
      classId?: number;
      className?: string;
      freeNav?: boolean;
    };
    if (!row.token) throw new Error(TEACHER_OFFLINE_MSG);
    const session: StudentSession = {
      token: row.token,
      nickname,
      emoji,
      classId: Number(row.classId),
      className: row.className,
      freeNav: !!row.freeNav,
    };
    return session;
  });
  saveSession(s);
  return s;
}

export function guestSession(nickname: string, emoji: string): StudentSession {
  const trimmed = nickname.trim();
  const idEmoji = emoji.trim();
  clearEphemeralPlayState();
  registerGuestIdentity(trimmed, idEmoji);
  const s: StudentSession = { token: 'guest', nickname: trimmed, emoji: idEmoji };
  saveSession(s);
  return s;
}

/** תצוגת מורה — כל השלבים פתוחים, בלי נעילה, נשמר מקומית בלבד */
export function teacherPreviewSession(): StudentSession {
  const s: StudentSession = {
    token: 'teacher-preview',
    nickname: 'מורה',
    emoji: '👩‍🏫',
    freeNav: true,
  };
  saveSession(s);
  return s;
}

export function isLocalSession(s: StudentSession): boolean {
  return s.token === 'guest' || s.token === 'teacher-preview';
}

/** אורח: הפעלת/כיבוי מסלול חופשי — נשמר בסשן */
export function setGuestFreeNav(s: StudentSession, free: boolean): StudentSession {
  const next = { ...s, freeNav: free };
  saveSession(next);
  return next;
}

function loadGuestProgress(s: StudentSession): ProgressData {
  try {
    const raw = localStorage.getItem(guestKey(s));
    const p = raw ? JSON.parse(raw) : { letters: {}, completed: {} };
    // תצוגת מורה תמיד בלי נעילה
    p.freeNav = s.token === 'teacher-preview' ? true : !!s.freeNav;
    return p;
  } catch {
    return {
      letters: {},
      completed: {},
      freeNav: s.token === 'teacher-preview' ? true : !!s.freeNav,
    };
  }
}

export async function fetchProgress(s: StudentSession): Promise<ProgressData> {
  if (isLocalSession(s)) return loadGuestProgress(s);
  const sb = await requireBackend();
  return runBackend(async () => {
    const { data, error } = await sb.rpc('student_progress', { p_token: s.token });
    if (error) throw asBackendError(error);
    const row = (data ?? {}) as {
      letters?: ProgressData['letters'];
      completed?: ProgressData['completed'];
      freeNav?: boolean;
      mapPos?: MapPosition | null;
    };
    const progress: ProgressData = {
      letters: row.letters && !Array.isArray(row.letters) ? row.letters : {},
      completed: row.completed && !Array.isArray(row.completed) ? row.completed : {},
      freeNav: !!row.freeNav,
    };
    if (row.mapPos && typeof row.mapPos === 'object' && Number.isFinite(row.mapPos.x) && Number.isFinite(row.mapPos.y)) {
      progress.mapPos = row.mapPos;
    }
    return progress;
  });
}

function writeGuestProgress(s: StudentSession, p: ProgressData): void {
  delete p.freeNav;
  registerGuestIdentity(s.nickname, s.emoji);
  localStorage.setItem(guestKey(s), JSON.stringify(p));
}

export async function reportAttempt(
  s: StudentSession,
  activityId: string,
  unitId: string,
  score: number,
  max: number,
  letters: LetterEvents
): Promise<void> {
  if (isLocalSession(s)) {
    const p = loadGuestProgress(s);
    for (const [l, e] of Object.entries(letters)) {
      if (!p.letters[l]) p.letters[l] = { c: 0, w: 0 };
      p.letters[l].c += e.c;
      p.letters[l].w += e.w;
    }
    const prev = p.completed[activityId];
    if (!prev || score / max > prev.score / prev.max) {
      p.completed[activityId] = { score, max };
    }
    writeGuestProgress(s, p);
    return;
  }
  const sb = await requireBackend();
  await runBackend(async () => {
    const { error } = await sb.rpc('student_attempt', {
      p_token: s.token,
      p_activity_id: activityId,
      p_unit_id: unitId,
      p_score: score,
      p_max: max,
      p_letters: letters ?? {},
    });
    if (error) throw asBackendError(error);
  });
}

/** שמירת מיקום השחקן על המפה — אורח ב-localStorage, כיתה בשרת */
export async function saveMapPosition(s: StudentSession, pos: MapPosition): Promise<void> {
  if (s.token === 'teacher-preview') return;
  if (!Number.isFinite(pos.x) || !Number.isFinite(pos.y)) return;

  if (isLocalSession(s)) {
    const p = loadGuestProgress(s);
    p.mapPos = pos;
    writeGuestProgress(s, p);
    return;
  }
  const sb = await requireBackend();
  await runBackend(async () => {
    const { error } = await sb.rpc('student_map_pos', { p_token: s.token, p_pos: pos });
    if (error) throw asBackendError(error);
  });
}

// ─── מורה ───

export interface TeacherSession {
  token: string;
  id?: string;
  name: string;
  email: string;
  isAdmin?: boolean;
}

const LS_TEACHER = 'aramit_teacher';

export function loadTeacher(): TeacherSession | null {
  try {
    const raw = localStorage.getItem(LS_TEACHER);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveTeacher(t: TeacherSession | null): void {
  if (t) localStorage.setItem(LS_TEACHER, JSON.stringify(t));
  else localStorage.removeItem(LS_TEACHER);
}

async function profileFromAuth(): Promise<TeacherSession> {
  const sb = await requireBackend();
  const { data: userData, error: userErr } = await sb.auth.getUser();
  if (userErr || !userData.user) throw asBackendError(userErr, 'יש להתחבר מחדש');
  const user = userData.user;
  let data: { name: string; email: string; is_admin: boolean } | null = null;
  let error: { message?: string } | null = null;
  // הטריגר על auth.users יוצר את השורה. נסיון קצר נוסף אם הכניסה מגוגל הקדימה את הקריאה.
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await sb
      .from('profiles')
      .select('name, email, is_admin')
      .eq('id', user.id)
      .maybeSingle();
    data = res.data;
    error = res.error;
    if (error || data) break;
    await new Promise((resolve) => window.setTimeout(resolve, 400));
  }
  if (error || !data) throw asBackendError(error, 'הפרופיל לא נמצא. נסו להירשם שוב.');
  const session: TeacherSession = {
    token: user.id,
    id: user.id,
    name: data.name || user.email || '',
    email: data.email || user.email || '',
    isAdmin: !!data.is_admin,
  };
  saveTeacher(session);
  return session;
}

/** אחרי רענון או חזרה מגוגל — משחזר מורה אם יש סשן סופאבייס. */
export async function restoreTeacherSession(): Promise<TeacherSession | null> {
  if (!supabase || !isTeacherBackendConfigured()) return null;
  const { data, error } = await supabase.auth.getSession();
  if (error || !data.session) return null;
  return await profileFromAuth();
}

export async function teacherRegister(name: string, email: string, password: string): Promise<TeacherSession> {
  const sb = await requireBackend();
  return runBackend(async () => {
    const { data, error } = await sb.auth.signUp({
      email: email.trim(),
      password,
      options: { data: { name: name.trim() } },
    });
    if (error) throw asBackendError(error);
    if (!data.session) {
      throw new Error('נשלח קישור לאימייל. אשרו אותו ואז התחברו. אפשר גם לכבות אישור אימייל בהגדרות סופאבייס.');
    }
    return profileFromAuth();
  });
}

export async function teacherLogin(email: string, password: string): Promise<TeacherSession> {
  const sb = await requireBackend();
  return runBackend(async () => {
    const { error } = await sb.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    if (error) throw asBackendError(error);
    return profileFromAuth();
  });
}

/** מעביר לגוגל. אחרי האישור הדפדפן חוזר לאתר והסשן נשמר. */
export async function teacherGoogle(): Promise<void> {
  const sb = await requireBackend();
  await runBackend(async () => {
    const { error } = await sb.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: teacherOAuthRedirectTo() },
    });
    if (error) throw asBackendError(error, 'כניסת גוגל עדיין לא הופעלה באתר זה');
  });
}

export async function teacherLogout(): Promise<void> {
  saveTeacher(null);
  if (!supabase) return;
  try {
    await supabase.auth.signOut();
  } catch {
    /* היציאה המקומית כבר בוצעה */
  }
}

export interface ClassInfo {
  id: number;
  name: string;
  code: string;
  freeNav: boolean;
  students: number;
}

export interface AdminClassInfo extends ClassInfo {
  teacherName: string;
  teacherEmail: string;
}

async function classStudentCounts(): Promise<Map<number, number>> {
  const sb = await requireBackend();
  const { data, error } = await sb.from('students').select('class_id');
  if (error) throw asBackendError(error);
  const counts = new Map<number, number>();
  for (const row of data ?? []) {
    const id = Number(row.class_id);
    counts.set(id, (counts.get(id) ?? 0) + 1);
  }
  return counts;
}

export async function setClassFree(t: TeacherSession, classId: number, free: boolean): Promise<void> {
  const sb = await requireBackend();
  if (!t.id) throw new Error('יש להתחבר מחדש');
  await runBackend(async () => {
    const { error } = await sb.from('classes').update({ free_nav: free }).eq('id', classId).eq('teacher_id', t.id);
    if (error) throw asBackendError(error);
  });
}

export async function fetchClasses(t: TeacherSession): Promise<ClassInfo[]> {
  const sb = await requireBackend();
  if (!t.id) throw new Error('יש להתחבר מחדש');
  return runBackend(async () => {
    const { data, error } = await sb
      .from('classes')
      .select('id, name, code, free_nav')
      .eq('teacher_id', t.id)
      .order('id', { ascending: false });
    if (error) throw asBackendError(error);
    const counts = await classStudentCounts();
    return (data ?? []).map((c) => ({
      id: Number(c.id),
      name: c.name,
      code: c.code,
      freeNav: !!c.free_nav,
      students: counts.get(Number(c.id)) ?? 0,
    }));
  });
}

export async function fetchAdminClasses(t: TeacherSession): Promise<AdminClassInfo[]> {
  const sb = await requireBackend();
  if (!t.isAdmin) throw new Error('אין הרשאת מנהל');
  return runBackend(async () => {
    const { data, error } = await sb
      .from('classes')
      .select('id, name, code, free_nav, teacher_id')
      .order('id', { ascending: false });
    if (error) throw asBackendError(error);
    const { data: profiles, error: pErr } = await sb.from('profiles').select('id, name, email');
    if (pErr) throw asBackendError(pErr);
    const counts = await classStudentCounts();
    const byId = new Map((profiles ?? []).map((p) => [p.id as string, p]));
    return (data ?? []).map((c) => {
      const prof = byId.get(c.teacher_id as string);
      return {
        id: Number(c.id),
        name: c.name as string,
        code: c.code as string,
        freeNav: !!c.free_nav,
        students: counts.get(Number(c.id)) ?? 0,
        teacherName: (prof?.name as string) ?? '',
        teacherEmail: (prof?.email as string) ?? '',
      };
    });
  });
}

export async function createClass(t: TeacherSession, name: string): Promise<ClassInfo> {
  const sb = await requireBackend();
  if (!t.id) throw new Error('יש להתחבר מחדש');
  return runBackend(async () => {
    const { data, error } = await sb
      .from('classes')
      .insert({ teacher_id: t.id, name })
      .select('id, name, code, free_nav')
      .single();
    if (error || !data) throw asBackendError(error, 'לא הצלחנו ליצור כיתה');
    return {
      id: Number(data.id),
      name: data.name,
      code: data.code,
      freeNav: !!data.free_nav,
      students: 0,
    };
  });
}

export interface HeatmapStudent {
  id: number;
  nickname: string;
  emoji: string;
  lastSeen: string | null;
  activitiesDone: number;
  letters: Record<string, { c: number; w: number }>;
}

export async function fetchHeatmap(t: TeacherSession, classId: number): Promise<HeatmapStudent[]> {
  const sb = await requireBackend();
  void t;
  return runBackend(async () => {
    const { data: students, error } = await sb
      .from('students')
      .select('id, nickname, emoji, last_seen')
      .eq('class_id', classId)
      .order('nickname');
    if (error) throw asBackendError(error);
    const list = students ?? [];
    if (list.length === 0) return [];
    const ids = list.map((s) => Number(s.id));
    const { data: letters, error: lErr } = await sb
      .from('letter_stats')
      .select('student_id, letter, correct, wrong')
      .in('student_id', ids);
    if (lErr) throw asBackendError(lErr);
    const { data: attempts, error: aErr } = await sb
      .from('attempts')
      .select('student_id, activity_id')
      .in('student_id', ids);
    if (aErr) throw asBackendError(aErr);

    const lettersByStudent = new Map<number, Record<string, { c: number; w: number }>>();
    for (const row of letters ?? []) {
      const sid = Number(row.student_id);
      const bag = lettersByStudent.get(sid) ?? {};
      bag[row.letter] = { c: Number(row.correct), w: Number(row.wrong) };
      lettersByStudent.set(sid, bag);
    }
    const actsByStudent = new Map<number, Set<string>>();
    for (const row of attempts ?? []) {
      const sid = Number(row.student_id);
      const bag = actsByStudent.get(sid) ?? new Set<string>();
      bag.add(row.activity_id);
      actsByStudent.set(sid, bag);
    }

    return list.map((s) => {
      const sid = Number(s.id);
      return {
        id: sid,
        nickname: s.nickname,
        emoji: s.emoji,
        lastSeen: s.last_seen,
        activitiesDone: actsByStudent.get(sid)?.size ?? 0,
        letters: lettersByStudent.get(sid) ?? {},
      };
    });
  });
}
