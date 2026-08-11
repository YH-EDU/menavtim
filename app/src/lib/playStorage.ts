/**
 * מאגר מפתחות שמירה — סדר אחיד למניעת דליפות בין שחקנים.
 *
 * per-user (localStorage):
 *   aramit_guest_{nick}__{emoji}     — התקדמות + mapPos
 *   aramit_avatar__{nick}__{emoji}   — דמות מסע
 *
 * active session (session + local):
 *   aramit_session                   — מי מחובר עכשיו
 *
 * ephemeral / tab (sessionStorage) — לפי משתמש, או ניקוי בהחלפה:
 *   aramit_phaser_pos__{id}
 *   aramit_focus_act__{id}
 *   aramit_fly_stars                 — אנימציה חד-פעמית אחרי משימה
 *
 * device prefs (לא תלוי שחקן):
 *   aramit_tts, aramit_sound, aramit_map_view, …
 */

export const SS_SESSION = 'aramit_session';
export const LS_LAST_ROUTE = 'aramit_last_route';
export const LS_FLY_STARS = 'aramit_fly_stars';

function normalizeNickname(nickname: string): string {
  return nickname.trim().replace(/\s+/g, ' ').toLowerCase();
}

/** מזהה יציב לשם+אימוג'י */
export function identitySlug(nickname: string, emoji: string): string {
  const n = encodeURIComponent(normalizeNickname(nickname));
  const e = encodeURIComponent(emoji.trim());
  return `${n}__${e}`;
}

export function avatarStorageKey(nickname: string, emoji: string): string {
  return `aramit_avatar__${identitySlug(nickname, emoji)}`;
}

export function phaserPosKey(identity: string): string {
  return `aramit_phaser_pos__${identity}`;
}

export function focusActKey(identity: string): string {
  return `aramit_focus_act__${identity}`;
}

/** ניקוי מצב זמני בלשונית — לא מוחק התקדמות לפי שם+אימוג'י */
export function clearEphemeralPlayState(): void {
  try {
    sessionStorage.removeItem(LS_FLY_STARS);
    sessionStorage.removeItem('aramit_phaser_pos'); // legacy
    sessionStorage.removeItem('aramit_focus_act'); // legacy
    sessionStorage.removeItem('aramit_avatar'); // active cache
    const toRemove: string[] = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const k = sessionStorage.key(i);
      if (!k) continue;
      if (k.startsWith('aramit_phaser_pos') || k.startsWith('aramit_focus_act')) {
        toRemove.push(k);
      }
    }
    for (const k of toRemove) sessionStorage.removeItem(k);
  } catch {
    /* ignore */
  }
}
