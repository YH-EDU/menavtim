import type { LetterEvents } from '../data/types';

// שכבת תקשורת: מול השרת (PHP) כשהתלמיד מחובר לכיתה,
// ומצב "אורח" (localStorage בלבד) כשמתרגלים בלי קוד כיתה.

import { API_BASE } from './basePath';

const API = API_BASE;

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
}

export interface ProgressData {
  letters: Record<string, { c: number; w: number }>;
  completed: Record<string, { score: number; max: number }>; // לפי activity id
  freeNav?: boolean;
  mapPos?: MapPosition;
}

const SS_SESSION = 'aramit_session';
const LS_LAST_ROUTE = 'aramit_last_route';
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

async function post<T>(path: string, body: unknown, token?: string): Promise<T> {
  const res = await fetch(`${API}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((data as { error?: string }).error || 'שגיאת שרת');
  return data as T;
}

async function get<T>(path: string, token?: string): Promise<T> {
  const res = await fetch(`${API}/${path}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((data as { error?: string }).error || 'שגיאת שרת');
  return data as T;
}

// ─── תלמיד ───

export async function joinClass(code: string, nickname: string, emoji: string): Promise<StudentSession> {
  const r = await post<{ token: string; classId: number; className: string; freeNav: boolean }>(
    'student.php?a=join',
    { code, nickname, emoji }
  );
  const s: StudentSession = {
    token: r.token, nickname, emoji,
    classId: r.classId, className: r.className, freeNav: r.freeNav,
  };
  saveSession(s);
  return s;
}

export function guestSession(nickname: string, emoji: string): StudentSession {
  const trimmed = nickname.trim();
  const idEmoji = emoji.trim();
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
  return get<ProgressData>('student.php?a=progress', s.token);
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
  await post('student.php?a=attempt', { activityId, unitId, score, max, letters }, s.token);
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
  await post('student.php?a=map_pos', pos, s.token);
}

// ─── מורה ───

export interface TeacherSession {
  token: string;
  name: string;
  email: string;
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

export async function teacherRegister(name: string, email: string, password: string): Promise<TeacherSession> {
  const r = await post<{ token: string; name: string; email: string }>('teacher.php?a=register', {
    name,
    email,
    password,
  });
  saveTeacher(r);
  return r;
}

export async function teacherLogin(email: string, password: string): Promise<TeacherSession> {
  const r = await post<{ token: string; name: string; email: string }>('teacher.php?a=login', {
    email,
    password,
  });
  saveTeacher(r);
  return r;
}

export interface ClassInfo {
  id: number;
  name: string;
  code: string;
  freeNav: boolean;
  students: number;
}

export async function setClassFree(t: TeacherSession, classId: number, free: boolean): Promise<void> {
  await post('teacher.php?a=set_free', { classId, free }, t.token);
}

export async function fetchClasses(t: TeacherSession): Promise<ClassInfo[]> {
  const r = await get<{ classes: ClassInfo[] }>('teacher.php?a=classes', t.token);
  return r.classes;
}

export async function createClass(t: TeacherSession, name: string): Promise<ClassInfo> {
  return post<ClassInfo>('teacher.php?a=create_class', { name }, t.token);
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
  const r = await get<{ students: HeatmapStudent[] }>(`teacher.php?a=heatmap&class=${classId}`, t.token);
  return r.students;
}
