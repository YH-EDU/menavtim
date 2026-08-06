import type { MapPosition, ProgressData } from '../../lib/api';
import {
  computeResumePosition,
  findNearestSafePosition,
  type PathPoint,
} from './journeyMap';
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

function persistedMapPosition(
  mapPos: MapPosition,
  centerline: PathPoint[],
  pathCells: Set<string>,
): WorldPos {
  const safe = findNearestSafePosition(
    mapPos.x,
    mapPos.y,
    centerline,
    pathCells,
    mapPos.pathIndex,
  );
  const faceX = mapPos.faceX;
  const faceY = mapPos.faceY;
  if (faceX != null && faceY != null && Number.isFinite(faceX) && Number.isFinite(faceY)) {
    return { x: safe.x, y: safe.y, faceX, faceY };
  }
  const faceIdx = Math.min(safe.pathIndex + 1, centerline.length - 1);
  const face = centerline[faceIdx];
  return { x: safe.x, y: safe.y, faceX: face.px, faceY: face.py };
}

/**
 * Resolve where to place the player after returning from a mission or on fresh load.
 * Session keys win (same tab); persisted mapPos restores cross-session resume.
 */
export function resolveRestorePosition(
  stationPositions: { activityId: string; px: number; py: number }[],
  stationCenterlineIndices: number[],
  centerline: PathPoint[],
  pathCells: Set<string>,
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
        const resume = computeResumePosition(centerline, clIdx, pathCells, faceIdx);
        return {
          x: resume.x,
          y: resume.y,
          faceX: resume.faceX,
          faceY: resume.faceY,
        };
      }

      const t = centerline[clIdx] ?? stationPositions[idx];
      return { x: t.px, y: t.py };
    }
  }

  const raw = sessionStorage.getItem(LS_PHASER_POS);
  sessionStorage.removeItem(LS_PHASER_POS);
  if (raw) {
    try {
      const p = JSON.parse(raw) as WorldPos;
      if (Number.isFinite(p.x) && Number.isFinite(p.y)) {
        const safe = findNearestSafePosition(p.x, p.y, centerline, pathCells);
        return { x: safe.x, y: safe.y, faceX: p.faceX, faceY: p.faceY };
      }
    } catch {
      /* ignore */
    }
  }

  if (progress.mapPos && Number.isFinite(progress.mapPos.x) && Number.isFinite(progress.mapPos.y)) {
    return persistedMapPosition(progress.mapPos, centerline, pathCells);
  }

  return null;
}

export function clearSavedPhaserState() {
  sessionStorage.removeItem(LS_PHASER_POS);
  sessionStorage.removeItem(LS_FOCUS_ACT);
}
