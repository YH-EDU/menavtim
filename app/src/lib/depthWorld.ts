import { MAP_SEGMENTS } from './mapSegments';

/** תחנת משימה — המצלמה קופצת ישירות לכאן */
export interface DepthMission {
  id: string;
  activityId: string;
  stageId: string;
  x: number;
  y: number;
  scale: number;
  caption: string;
}

export interface DepthWorld {
  image: string;
  fallback: string;
  width: number;
  height: number;
  ratio: number;
}

export interface DepthStageMeta {
  id: string;
  title: string;
  subtitle: string;
  activityIds: string[];
}

const BASE = '/menavtim/depth';

/** תמונת עולם אחת — כרם/חיטה דרך הגשר ועד זיתים וטרסות (1024×2992) */
export const DEPTH_WORLD: DepthWorld = {
  image: `${BASE}/world.jpg`,
  fallback: '/menavtim/bg-journey-continuous.jpg',
  width: 1024,
  height: 2992,
  ratio: 2992 / 1024,
};

/**
 * שש תחנות על תמונה אחת — y יורד monotonic מלמטה (97) לעליון (14).
 * fs-discover → fs-annotate → fs-morph → fa-discover → fa-memory → fa-fill
 */
export const DEPTH_MISSIONS: DepthMission[] = [
  {
    id: 's1-discover',
    activityId: 'fs-discover',
    stageId: 'stage1',
    x: 50,
    y: 94,
    scale: 1.1,
    caption: 'גלו את המילה',
  },
  {
    id: 's1-annotate',
    activityId: 'fs-annotate',
    stageId: 'stage1',
    x: 48,
    y: 79,
    scale: 1.2,
    caption: 'סמנו במשפט',
  },
  {
    id: 's1-morph',
    activityId: 'fs-morph',
    stageId: 'stage1',
    x: 52,
    y: 60,
    scale: 1.3,
    caption: 'הפכו את המילה',
  },
  {
    id: 's2-discover',
    activityId: 'fa-discover',
    stageId: 'stage2',
    x: 50,
    y: 42,
    scale: 1.36,
    caption: 'מי מי במשפחה',
  },
  {
    id: 's2-memory',
    activityId: 'fa-memory',
    stageId: 'stage2',
    x: 46,
    y: 28,
    scale: 1.44,
    caption: 'זיכרון המשפחה',
  },
  {
    id: 's2-fill',
    activityId: 'fa-fill',
    stageId: 'stage2',
    x: 52,
    y: 14,
    scale: 1.5,
    caption: 'השלימו את בן המשפחה',
  },
];

export const DEPTH_STAGES: DepthStageMeta[] = [
  {
    id: 'stage1',
    title: 'כרם וחיטה',
    subtitle: 'צעדים ראשונים',
    activityIds: MAP_SEGMENTS[0].activityIds,
  },
  {
    id: 'stage2',
    title: 'זיתים וטרסות',
    subtitle: 'מעבר הגשר',
    activityIds: MAP_SEGMENTS[1].activityIds,
  },
];

export const DEPTH_ALL_MISSIONS: DepthMission[] = DEPTH_MISSIONS;

export const DEPTH_ALL_ACTIVITY_IDS: string[] = DEPTH_MISSIONS.map((m) => m.activityId);

export function missionIndex(activityId: string): number {
  return DEPTH_MISSIONS.findIndex((m) => m.activityId === activityId);
}

export function stageForMission(m: DepthMission): DepthStageMeta {
  return DEPTH_STAGES.find((s) => s.id === m.stageId)!;
}

/** עד איזו משימה מותר לקפוץ */
export function maxMissionIndex(
  progress: { completed: Record<string, unknown>; freeNav?: boolean },
): number {
  if (progress.freeNav) return DEPTH_MISSIONS.length - 1;
  for (let i = 0; i < DEPTH_ALL_ACTIVITY_IDS.length; i++) {
    const actId = DEPTH_ALL_ACTIVITY_IDS[i];
    if (!progress.completed[actId]) return i;
  }
  return DEPTH_MISSIONS.length - 1;
}

/** משימה התחלתית לפי התקדמות */
export function initialMissionIndex(
  progress: { completed: Record<string, unknown>; freeNav?: boolean },
): number {
  if (progress.freeNav) {
    const firstOpen = DEPTH_ALL_ACTIVITY_IDS.findIndex((id) => !progress.completed[id]);
    return firstOpen >= 0 ? firstOpen : DEPTH_MISSIONS.length - 1;
  }
  for (let i = 0; i < DEPTH_ALL_ACTIVITY_IDS.length; i++) {
    if (!progress.completed[DEPTH_ALL_ACTIVITY_IDS[i]]) return i;
  }
  return DEPTH_MISSIONS.length - 1;
}

export function nextMissionIndex(fromIdx: number): number {
  return fromIdx < DEPTH_MISSIONS.length - 1 ? fromIdx + 1 : -1;
}

export function prevMissionIndex(fromIdx: number): number {
  return fromIdx > 0 ? fromIdx - 1 : -1;
}

/** חישוב transform למצלמה — מיקוד בתחנת משימה */
export function cameraTransform(
  mission: DepthMission,
  world: DepthWorld,
  viewportW: number,
  viewportH: number,
): { tx: number; ty: number; scale: number; worldW: number; worldH: number } {
  const worldW = viewportW;
  const worldH = worldW * world.ratio;
  const scale = mission.scale;
  const fx = (mission.x / 100) * worldW;
  const fy = (mission.y / 100) * worldH;
  const focusX = viewportW * 0.5;
  const focusY = viewportH * 0.62;
  return {
    tx: focusX - fx * scale,
    ty: focusY - fy * scale,
    scale,
    worldW,
    worldH,
  };
}

export function stageDone(
  stage: DepthStageMeta,
  progress: { completed: Record<string, unknown> },
): boolean {
  return stage.activityIds.every((id) => !!progress.completed[id]);
}
