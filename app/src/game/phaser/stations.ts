import { UNITS } from '../../data/units';

export interface MissionStation {
  activityId: string;
  unitId: string;
  unitIndex: number;
  unitTitle: string;
  type: string;
  label: string;
  /** Filled at runtime from journey path tile coords. */
  px: number;
  py: number;
}

/** All ~46 activities as mission stations (positions assigned in MainScene). */
export const PHASER_MISSIONS: Omit<MissionStation, 'px' | 'py'>[] = UNITS.flatMap((unit, unitIndex) =>
  unit.activities.map((a) => ({
    activityId: a.id,
    unitId: unit.id,
    unitIndex,
    unitTitle: unit.title,
    type: a.type,
    label: a.title,
  })),
);

export function missionPlacement() {
  return {
    counts: UNITS.map((u) => u.activities.length),
    unitTitles: UNITS.map((u) => u.title),
  };
}
