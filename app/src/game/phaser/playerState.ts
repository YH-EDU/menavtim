import type { MapPosition, ProgressData } from '../../lib/api';
import {
  focusActKey,
  identitySlug,
  phaserPosKey,
  phaserPosStageKey,
  stageIndexKey,
} from '../../lib/playStorage';
import {
  computeResumePosition,
  findNearestSafePosition,
  type PathPoint,
} from './journeyMap';
import { clampStageIndex, resolvePlayableStage, stageUnlocked } from './stages';

/** @deprecated legacy unscoped keys — cleared on user switch */
export const LS_FOCUS_ACT = 'aramit_focus_act';
export const LS_PHASER_POS = 'aramit_phaser_pos';
export const LS_STAGE = 'aramit_stage';

export interface WorldPos {
  x: number;
  y: number;
  faceX?: number;
  faceY?: number;
  stageIndex?: number;
}

function identityId(identity?: { nickname: string; emoji: string }): string {
  return identity ? identitySlug(identity.nickname, identity.emoji) : '';
}

export function saveCurrentStage(
  stageIndex: number,
  identity?: { nickname: string; emoji: string },
) {
  const id = identityId(identity);
  const key = id ? stageIndexKey(id) : LS_STAGE;
  sessionStorage.setItem(key, String(clampStageIndex(stageIndex)));
}

export function loadCurrentStage(
  progress: ProgressData,
  identity?: { nickname: string; emoji: string },
): number {
  const id = identityId(identity);
  const key = id ? stageIndexKey(id) : LS_STAGE;
  const raw = sessionStorage.getItem(key);
  if (raw != null && raw !== '') {
    const n = clampStageIndex(Number(raw));
    if (stageUnlocked(n, progress)) return n;
  }
  const fromMap = progress.mapPos?.stageIndex;
  if (fromMap != null && Number.isFinite(fromMap)) {
    const n = clampStageIndex(fromMap);
    if (stageUnlocked(n, progress)) return n;
  }
  return resolvePlayableStage(progress);
}

export function savePhaserPlayerState(
  x: number,
  y: number,
  activityId: string,
  identity?: { nickname: string; emoji: string },
  stageIndex?: number,
) {
  const id = identityId(identity);
  const focusKey = id ? focusActKey(id) : LS_FOCUS_ACT;
  const posKey = id ? phaserPosKey(id) : LS_PHASER_POS;
  sessionStorage.setItem(focusKey, activityId);
  const payload: WorldPos = { x, y };
  if (stageIndex != null) payload.stageIndex = clampStageIndex(stageIndex);
  sessionStorage.setItem(posKey, JSON.stringify(payload));
  if (id && stageIndex != null) {
    sessionStorage.setItem(
      phaserPosStageKey(id, clampStageIndex(stageIndex)),
      JSON.stringify(payload),
    );
    saveCurrentStage(stageIndex, identity);
  }
}

/**
 * Stash map position for the next Phaser remount (e.g. after החלפת דמות).
 * resolveRestorePosition reads this before progress.mapPos — needed because
 * React progress often lags behind localStorage mapPos saves.
 */
export function stashPhaserRemountPosition(
  pos: WorldPos,
  identity?: { nickname: string; emoji: string },
) {
  if (!Number.isFinite(pos.x) || !Number.isFinite(pos.y)) return;
  const id = identityId(identity);
  const posKey = id ? phaserPosKey(id) : LS_PHASER_POS;
  const stage = pos.stageIndex != null ? clampStageIndex(pos.stageIndex) : undefined;
  const payload: WorldPos = {
    x: pos.x,
    y: pos.y,
    faceX: pos.faceX,
    faceY: pos.faceY,
    stageIndex: stage,
  };
  sessionStorage.setItem(posKey, JSON.stringify(payload));
  if (id && stage != null) {
    sessionStorage.setItem(phaserPosStageKey(id, stage), JSON.stringify(payload));
    saveCurrentStage(stage, identity);
  }
}

function stationUnlocked(
  idx: number,
  stationPositions: { activityId: string }[],
  progress: ProgressData,
): boolean {
  if (progress.freeNav) return true;
  if (idx === 0) return true;
  return !!progress.completed[stationPositions[idx - 1].activityId];
}

function nextMissionCenterlineIdx(
  fromIdx: number,
  stationCenterlineIndices: number[],
  stationPositions: { activityId: string; px: number; py: number }[],
  progress: ProgressData,
): number | undefined {
  for (let i = fromIdx + 1; i < stationPositions.length; i++) {
    if (stationUnlocked(i, stationPositions, progress) && !progress.completed[stationPositions[i].activityId]) {
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
    return { x: safe.x, y: safe.y, faceX, faceY, stageIndex: mapPos.stageIndex };
  }
  const faceIdx = Math.min(safe.pathIndex + 1, centerline.length - 1);
  const face = centerline[faceIdx];
  return { x: safe.x, y: safe.y, faceX: face.px, faceY: face.py, stageIndex: mapPos.stageIndex };
}

/**
 * Resolve where to place the player after returning from a mission or on fresh load.
 * Scoped session keys win (same tab); persisted mapPos restores cross-session resume.
 * When stageIndex is set, only restore a position that belongs to that stage.
 */
export function resolveRestorePosition(
  stationPositions: { activityId: string; px: number; py: number }[],
  stationCenterlineIndices: number[],
  centerline: PathPoint[],
  pathCells: Set<string>,
  progress: ProgressData,
  identity?: { nickname: string; emoji: string },
  stageIndex?: number,
): WorldPos | null {
  const id = identityId(identity);
  const focusKey = id ? focusActKey(id) : LS_FOCUS_ACT;
  const posKey = id ? phaserPosKey(id) : LS_PHASER_POS;
  const stage = stageIndex != null ? clampStageIndex(stageIndex) : undefined;

  const focusId = sessionStorage.getItem(focusKey) || (!id ? sessionStorage.getItem(LS_FOCUS_ACT) : null);
  if (focusId) {
    sessionStorage.removeItem(focusKey);
    if (!id) sessionStorage.removeItem(LS_FOCUS_ACT);
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
          stageIndex: stage,
        };
      }

      const t = centerline[clIdx] ?? stationPositions[idx];
      return { x: t.px, y: t.py, stageIndex: stage };
    }
  }

  const stageRaw =
    id && stage != null ? sessionStorage.getItem(phaserPosStageKey(id, stage)) : null;
  const raw = stageRaw || sessionStorage.getItem(posKey) || (!id ? sessionStorage.getItem(LS_PHASER_POS) : null);
  if (stageRaw) sessionStorage.removeItem(phaserPosStageKey(id, stage!));
  sessionStorage.removeItem(posKey);
  if (!id) sessionStorage.removeItem(LS_PHASER_POS);
  if (raw) {
    try {
      const p = JSON.parse(raw) as WorldPos;
      if (Number.isFinite(p.x) && Number.isFinite(p.y)) {
        if (stage != null && p.stageIndex != null && clampStageIndex(p.stageIndex) !== stage) {
          /* מיקום משלב אחר — מתחילים בנקודת ההתחלה של המפה הנוכחית */
        } else {
          const safe = findNearestSafePosition(p.x, p.y, centerline, pathCells);
          return { x: safe.x, y: safe.y, faceX: p.faceX, faceY: p.faceY, stageIndex: stage };
        }
      }
    } catch {
      /* ignore */
    }
  }

  if (progress.mapPos && Number.isFinite(progress.mapPos.x) && Number.isFinite(progress.mapPos.y)) {
    if (
      stage != null &&
      progress.mapPos.stageIndex != null &&
      clampStageIndex(progress.mapPos.stageIndex) !== stage
    ) {
      return null;
    }
    return persistedMapPosition(progress.mapPos, centerline, pathCells);
  }

  return null;
}

export function clearSavedPhaserState(identity?: { nickname: string; emoji: string }) {
  if (identity) {
    const id = identitySlug(identity.nickname, identity.emoji);
    sessionStorage.removeItem(phaserPosKey(id));
    sessionStorage.removeItem(focusActKey(id));
    sessionStorage.removeItem(stageIndexKey(id));
    for (let s = 0; s < 3; s++) sessionStorage.removeItem(phaserPosStageKey(id, s));
  }
  sessionStorage.removeItem(LS_PHASER_POS);
  sessionStorage.removeItem(LS_FOCUS_ACT);
  sessionStorage.removeItem(LS_STAGE);
}
