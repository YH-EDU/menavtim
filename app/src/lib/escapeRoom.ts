import type { ProgressData } from './api';
import { PHASER_MISSIONS } from '../game/phaser/stations';

/** Final beit-midrash escape — not a regular GameHost activity. */
export const ESCAPE_UNIT_ID = 'escape';
export const ESCAPE_ACTIVITY_ID = 'escape-beit-midrash';
export const ESCAPE_LABEL = 'כניסה לבית המדרש';

/** Stars awarded when the letter finale is completed. */
export const ESCAPE_STAR_SCORE = 3;
export const ESCAPE_STAR_MAX = 3;

export const ESCAPE_MSG_SOURCE = 'escape-room-beit-midrash';
export const ESCAPE_MSG_COMPLETE = 'escape-complete';
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

export function isEscapeFullscreenToggleMessage(data: unknown): boolean {
  if (!data || typeof data !== 'object') return false;
  const msg = data as { source?: string; type?: string };
  return msg.source === ESCAPE_MSG_SOURCE && msg.type === ESCAPE_MSG_FULLSCREEN_TOGGLE;
}
