import type { ProgressData } from '../../lib/api';
import type { PhaseId } from '../../data/types';
import { phaseOf, phaseMeta } from '../../data/phases';
import { UNITS } from '../../data/units';
import { UNIT_COLORS } from '../../lib/pathLayout';
import { PHASER_MISSIONS, type MissionStation } from './stations';

/** סדר שלושת מפות השלב */
export const STAGE_ORDER: PhaseId[] = ['he-ar', 'basic', 'gemara'];

export const STAGE_COUNT = STAGE_ORDER.length;

export const STAGE_GATE_UNIT_ID = 'stage-gate';

export type StageMission = Omit<MissionStation, 'px' | 'py'>;

export function stagePhaseId(stageIndex: number): PhaseId {
  return STAGE_ORDER[Math.max(0, Math.min(STAGE_COUNT - 1, stageIndex))] ?? 'he-ar';
}

export function stageLabelHe(stageIndex: number): string {
  return phaseMeta(stagePhaseId(stageIndex)).kicker;
}

export function stageTitleHe(stageIndex: number): string {
  return phaseMeta(stagePhaseId(stageIndex)).title;
}

export function stageAdvanceActivityId(fromStage: number): string {
  return `stage-advance-${fromStage}`;
}

export function isStageAdvanceActivity(activityId: string): boolean {
  return /^stage-advance-\d+$/.test(activityId);
}

export function parseStageAdvance(activityId: string): number | null {
  const m = /^stage-advance-(\d+)$/.exec(activityId);
  return m ? Number(m[1]) : null;
}

/** תחנות הלמידה של שלב אחד (לפי phaseOf). */
export function missionsForStage(stageIndex: number): StageMission[] {
  const phase = stagePhaseId(stageIndex);
  return PHASER_MISSIONS.filter((m) => phaseOf(m.unitId) === phase);
}

/** פריסת יחידות למפת שלב — counts/titles/colors מיושרים לשלב בלבד. */
export function missionPlacementForStage(stageIndex: number) {
  const phase = stagePhaseId(stageIndex);
  const units = UNITS.filter((u) => (u.phase ?? phaseOf(u.id)) === phase);
  return {
    counts: units.map((u) => u.activities.length),
    unitTitles: units.map((u) => u.title),
    unitColors: units.map((u) => {
      const globalIdx = UNITS.findIndex((x) => x.id === u.id);
      return UNIT_COLORS[globalIdx >= 0 ? globalIdx : 0] ?? '#0d9488';
    }),
  };
}

export function stageMissionsCompleted(stageIndex: number, progress: ProgressData): boolean {
  const missions = missionsForStage(stageIndex);
  if (missions.length === 0) return true;
  return missions.every((m) => !!progress.completed[m.activityId]);
}

export function stageUnlocked(stageIndex: number, progress: ProgressData): boolean {
  if (progress.freeNav) return true;
  if (stageIndex <= 0) return true;
  return stageMissionsCompleted(stageIndex - 1, progress);
}

/** השלב הראשון הפתוח שעדיין לא הושלם; אם הכול הושלם — השלב האחרון (לשער הצופן). */
export function resolvePlayableStage(progress: ProgressData): number {
  for (let i = 0; i < STAGE_COUNT; i++) {
    if (stageUnlocked(i, progress) && !stageMissionsCompleted(i, progress)) return i;
  }
  return STAGE_COUNT - 1;
}

export function clampStageIndex(stageIndex: number): number {
  if (!Number.isFinite(stageIndex)) return 0;
  return Math.max(0, Math.min(STAGE_COUNT - 1, Math.floor(stageIndex)));
}

/** תווית קצרה ל־HUD: «שלב א׳ / 3» */
export function stageHudLabel(stageIndex: number): string {
  return `${stageLabelHe(stageIndex)} / ${STAGE_COUNT}`;
}
