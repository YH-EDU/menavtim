import type { ProgressData } from '../../lib/api';
import { computeResumePosition, type PathPoint } from './journeyMap';
import { PHASER_MISSIONS } from './stations';

export const LS_FOCUS_ACT = 'aramit_focus_act';
export const LS_PHASER_POS = 'aramit_phaser_pos';

export interface WorldPos {
  x: number;
  y: number;
  faceX?: number;
  faceY?: number;
}

export function savePhaserPlayerState(x: number, y: number, activityId: string) {
  sessionStorage.setItem(LS_FOCUS_ACT, activityId);
  sessionStorage.setItem(LS_PHASER_POS, JSON.stringify({ x, y }));
}

function stationUnlocked(idx: number, progress: ProgressData): boolean {
  if (progress.freeNav) return true;
  if (idx === 0) return true;
  return !!progress.completed[PHASER_MISSIONS[idx - 1].activityId];
}

function nextMissionCenterlineIdx(
  fromIdx: number,
  stationCenterlineIndices: number[],
  stationPositions: { activityId: string; px: number; py: number }[],
  progress: ProgressData,
): number | undefined {
  for (let i = fromIdx + 1; i < stationPositions.length; i++) {
    if (stationUnlocked(i, progress) && !progress.completed[stationPositions[i].activityId]) {
      return stationCenterlineIndices[i];
    }
  }
  return undefined;
}

/**
 * Resolve where to place the player after returning from a mission.
 * Prefers `aramit_focus_act` (same key as JourneyTrail), then saved world coords.
 */
export function resolveRestorePosition(
  stationPositions: { activityId: string; px: number; py: number }[],
  stationCenterlineIndices: number[],
  centerline: PathPoint[],
  progress: ProgressData,
): WorldPos | null {
  const focusId = sessionStorage.getItem(LS_FOCUS_ACT);
  if (focusId) {
    sessionStorage.removeItem(LS_FOCUS_ACT);
    const idx = stationPositions.findIndex((s) => s.activityId === focusId);
    if (idx >= 0) {
      const completed = !!progress.completed[focusId];
      const clIdx = stationCenterlineIndices[idx];

      if (completed && clIdx != null) {
        const faceIdx = nextMissionCenterlineIdx(
          idx,
          stationCenterlineIndices,
          stationPositions,
          progress,
        );
        const resume = computeResumePosition(centerline, clIdx, faceIdx);
        return {
          x: resume.x,
          y: resume.y,
          faceX: resume.faceX,
          faceY: resume.faceY,
        };
      }

      const t = stationPositions[idx];
      return { x: t.px, y: t.py };
    }
  }

  const raw = sessionStorage.getItem(LS_PHASER_POS);
  sessionStorage.removeItem(LS_PHASER_POS);
  if (raw) {
    try {
      const p = JSON.parse(raw) as WorldPos;
      if (Number.isFinite(p.x) && Number.isFinite(p.y)) return p;
    } catch {
      /* ignore */
    }
  }

  return null;
}

export function clearSavedPhaserState() {
  sessionStorage.removeItem(LS_PHASER_POS);
}
