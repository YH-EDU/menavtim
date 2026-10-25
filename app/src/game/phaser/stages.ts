import type { ProgressData } from '../../lib/api';
import type { PhaseId } from '../../data/types';
import { phaseOf, phaseMeta } from '../../data/phases';
import { UNITS } from '../../data/units';
import { UNIT_COLORS } from '../../lib/pathLayout';
import { PHASER_MISSIONS, type MissionStation } from './stations';

/** תואם ל־ESCAPE_ACTIVITY_ID — בלי ייבוא מעגלי מ־escapeRoom. */
const STAGE_FINAL_ESCAPE_ID = 'escape-beit-midrash';

/** סדר שלושת מפות השלב */
export const STAGE_ORDER: PhaseId[] = ['he-ar', 'basic', 'gemara'];

export const STAGE_COUNT = STAGE_ORDER.length;

export const STAGE_GATE_UNIT_ID = 'stage-gate';

/** שלב נחשב לשליטה (ושער/שלב הבא) רק מעל הסף הזה — קל לשינוי. */
export const MASTERY_THRESHOLD = 0.7;

export type StageCardStatus = 'current' | 'locked' | 'completed';

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

/** יחס הצלחה לפעילות בודדת (0 אם אין רשומה). */
export function activitySuccessRatio(progress: ProgressData, activityId: string): number {
  const rec = progress.completed[activityId];
  if (!rec || !(rec.max > 0)) return 0;
  return Math.max(0, Math.min(1, rec.score / rec.max));
}

/**
 * ציון שלב = ממוצע אחוזי הצלחה בכל תחנות השלב.
 * תחנה בלי תוצאה נספרת כ־0 — נשמר ב־progress.completed הקיים.
 */
export function stageScore(stageIndex: number, progress: ProgressData): number {
  const missions = missionsForStage(stageIndex);
  if (missions.length === 0) return 1;
  let sum = 0;
  for (const m of missions) {
    sum += activitySuccessRatio(progress, m.activityId);
  }
  return sum / missions.length;
}

export function stageScorePercent(stageIndex: number, progress: ProgressData): number {
  return Math.round(stageScore(stageIndex, progress) * 100);
}

export function stageHasMastery(stageIndex: number, progress: ProgressData): boolean {
  if (progress.freeNav) return true;
  return stageScore(stageIndex, progress) >= MASTERY_THRESHOLD;
}

/** המשימה הסופית של השלב: מעבר לשלב הבא, או הצופן הארמי בשלב האחרון. */
export function stageFinalTaskId(stageIndex: number): string {
  if (stageIndex >= STAGE_COUNT - 1) return STAGE_FINAL_ESCAPE_ID;
  return stageAdvanceActivityId(stageIndex);
}

export function stageFinalTaskDone(stageIndex: number, progress: ProgressData): boolean {
  return !!progress.completed[stageFinalTaskId(stageIndex)];
}

/** שלב הושלם רק אחרי משימה סופית + שליטה ≥ סף. */
export function stageCleared(stageIndex: number, progress: ProgressData): boolean {
  if (progress.freeNav) {
    return stageFinalTaskDone(stageIndex, progress) || stageMissionsCompleted(stageIndex, progress);
  }
  return stageHasMastery(stageIndex, progress) && stageFinalTaskDone(stageIndex, progress);
}

/** השער בסוף השלב נפתח רק כשיש שליטה מספקת. */
export function stageGateOpen(stageIndex: number, progress: ProgressData): boolean {
  if (progress.freeNav) return true;
  return stageHasMastery(stageIndex, progress);
}

export function stageUnlocked(stageIndex: number, progress: ProgressData): boolean {
  if (progress.freeNav) return true;
  if (stageIndex <= 0) return true;
  return stageCleared(stageIndex - 1, progress);
}

/** השלב הראשון הפתוח שעדיין לא הושלם; אם הכול הושלם — השלב האחרון (לשער הצופן). */
export function resolvePlayableStage(progress: ProgressData): number {
  for (let i = 0; i < STAGE_COUNT; i++) {
    if (stageUnlocked(i, progress) && !stageCleared(i, progress)) return i;
  }
  return STAGE_COUNT - 1;
}

export function stageCardStatus(stageIndex: number, progress: ProgressData): StageCardStatus {
  if (stageCleared(stageIndex, progress)) return 'completed';
  if (!stageUnlocked(stageIndex, progress)) return 'locked';
  return 'current';
}

export function clampStageIndex(stageIndex: number): number {
  if (!Number.isFinite(stageIndex)) return 0;
  return Math.max(0, Math.min(STAGE_COUNT - 1, Math.floor(stageIndex)));
}

/** תווית קצרה ל־HUD: «שלב א׳ / 3» */
export function stageHudLabel(stageIndex: number): string {
  return `${stageLabelHe(stageIndex)} / ${STAGE_COUNT}`;
}
