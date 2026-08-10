import type { ProgressData } from './api';
import { PHASER_MISSIONS } from '../game/phaser/stations';
import { starsFor } from '../games/ui';
import { isSkipped } from './progressUtil';

/** Final path mission — Aramaic cipher escape (not a regular GameHost activity). */
export const ESCAPE_UNIT_ID = 'escape';
export const ESCAPE_ACTIVITY_ID = 'escape-beit-midrash';
/** Player-facing mission name (last station on the journey). */
export const ESCAPE_LABEL = 'הצופן הארמי';
/** Short blurb under the mission name on map / station cards. */
export const ESCAPE_BLURB = 'מנעול · דלת · חדר סודי מחכה…';

/** Stars awarded when the letter finale is completed. */
export const ESCAPE_STAR_SCORE = 3;
export const ESCAPE_STAR_MAX = 3;

export const ESCAPE_MSG_SOURCE = 'escape-room-beit-midrash';
export const ESCAPE_MSG_COMPLETE = 'escape-complete';
export const ESCAPE_MSG_READY = 'escape-ready';
export const ESCAPE_MSG_JOURNEY_STARS = 'escape-journey-stars';
export const ESCAPE_MSG_FULLSCREEN_TOGGLE = 'escape-fullscreen-toggle';

export function missionsCompleted(progress: ProgressData): boolean {
  return PHASER_MISSIONS.every((m) => !!progress.completed[m.activityId]);
}

export function escapeCompleted(progress: ProgressData): boolean {
  return !!progress.completed[ESCAPE_ACTIVITY_ID];
}

/** Unlocked after all prior stations, or always in free play / teacher preview. */
export function escapeUnlocked(progress: ProgressData): boolean {
  if (progress.freeNav) return true;
  return missionsCompleted(progress);
}

/** Full journey including escape-room letter finale. */
export function journeyFullyComplete(progress: ProgressData): boolean {
  return missionsCompleted(progress) && escapeCompleted(progress);
}

export function isEscapeCompleteMessage(data: unknown): boolean {
  if (!data || typeof data !== 'object') return false;
  const msg = data as { source?: string; type?: string };
  return msg.source === ESCAPE_MSG_SOURCE && msg.type === ESCAPE_MSG_COMPLETE;
}

export function isEscapeReadyMessage(data: unknown): boolean {
  if (!data || typeof data !== 'object') return false;
  const msg = data as { source?: string; type?: string };
  return msg.source === ESCAPE_MSG_SOURCE && msg.type === ESCAPE_MSG_READY;
}

export function isEscapeFullscreenToggleMessage(data: unknown): boolean {
  if (!data || typeof data !== 'object') return false;
  const msg = data as { source?: string; type?: string };
  return msg.source === ESCAPE_MSG_SOURCE && msg.type === ESCAPE_MSG_FULLSCREEN_TOGGLE;
}

/**
 * Stars from completed stations excluding the escape activity itself
 * (so a replay does not double-count prior escape stars on the victory UI).
 */
export function journeyStarsBeforeEscape(progress: ProgressData): number {
  let stars = 0;
  for (const [activityId, rec] of Object.entries(progress.completed)) {
    if (activityId === ESCAPE_ACTIVITY_ID) continue;
    if (isSkipped(progress, activityId)) continue;
    stars += starsFor(rec.score, rec.max);
  }
  return stars;
}
