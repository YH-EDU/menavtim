import { UNITS } from '../data/units';
import { boardSize, type Pt } from './pathLayout';

/** תמונת רקע אחת — מסע רציף לעומק (1024×1536) */
export const JOURNEY_BG = '/menavtim/bg-journey-continuous.jpg';
export const JOURNEY_BG_RATIO = 1536 / 1024;

export const JOURNEY_CONTINUOUS = {
  bg: JOURNEY_BG,
  bgRatio: JOURNEY_BG_RATIO,
  startPos: { x: 50, y: 99 } satisfies Pt,
  endPos: { x: 50, y: 8 } satisfies Pt,
};

/** שלוש עשרה תחנות על השביל בתמונה האחת (% מהלוח) */
export const CONTINUOUS_STATIONS: Record<string, Pt> = {
  // שלב 1 — חיטה, כרם וגשר
  'fs-discover': { x: 50, y: 97 },
  'fs-annotate': { x: 48, y: 92 },
  'fs-morph': { x: 52, y: 87 },
  // שלב 2 — גשר, זיתים וכבשים
  'fa-discover': { x: 50, y: 82 },
  'fa-memory': { x: 46, y: 74 },
  'fa-fill': { x: 53, y: 66 },
  // שלב 3 — טרסות וכפר
  'nu-discover': { x: 51, y: 58 },
  'nu-order': { x: 47, y: 50 },
  'nu-mixed': { x: 52, y: 42 },
  'nu-morph': { x: 48, y: 34 },
  // שלב 4 — עלייה לבית מדרש
  'bo-discover': { x: 50, y: 26 },
  'bo-match': { x: 54, y: 18 },
  'bo-annotate': { x: 50, y: 12 },
};

export interface MapSegment {
  id: string;
  shortName: string;
  startPos: Pt;
  endLabel: string;
  endPos: Pt;
  activityIds: string[];
}

export const MAP_SEGMENTS: MapSegment[] = [
  {
    id: 'stage1',
    shortName: 'כרם וחיטה',
    startPos: { x: 50, y: 98 },
    endLabel: '↑ המשך לזיתים',
    endPos: { x: 50, y: 82 },
    activityIds: ['fs-discover', 'fs-annotate', 'fs-morph'],
  },
  {
    id: 'stage2',
    shortName: 'זיתים וטרסות',
    startPos: { x: 50, y: 82 },
    endLabel: '↑ המשך לכפר',
    endPos: { x: 50, y: 66 },
    activityIds: ['fa-discover', 'fa-memory', 'fa-fill'],
  },
  {
    id: 'stage3',
    shortName: 'כפר ופרדסים',
    startPos: { x: 50, y: 68 },
    endLabel: '↑ המשך לבית מדרש',
    endPos: { x: 50, y: 34 },
    activityIds: ['nu-discover', 'nu-order', 'nu-mixed', 'nu-morph'],
  },
  {
    id: 'stage4',
    shortName: 'בית מדרש',
    startPos: { x: 50, y: 42 },
    endLabel: '↑ הגעה ליעד',
    endPos: { x: 50, y: 8 },
    activityIds: ['bo-discover', 'bo-match', 'bo-annotate'],
  },
];

export function stationPos(activityId: string): Pt {
  return CONTINUOUS_STATIONS[activityId] ?? { x: 50, y: 50 };
}

export function segmentIndexById(id: string): number {
  return MAP_SEGMENTS.findIndex((s) => s.id === id);
}

export interface TrailLayout {
  w: number;
  h: number;
  compact: boolean;
  viewW: number;
  scrollLeft: number;
}

export function trailLayout(): TrailLayout {
  const totalStations = MAP_SEGMENTS.reduce((n, s) => n + s.activityIds.length, 0);
  const { w, h, compact, viewW, scrollLeft } = boardSize({
    stationCount: totalStations,
    bgRatio: JOURNEY_CONTINUOUS.bgRatio,
    focusX: 50,
  });
  return { w, h, compact, viewW, scrollLeft };
}

export function currentSegment(progress: { completed: Record<string, unknown> }): MapSegment {
  for (const seg of MAP_SEGMENTS) {
    for (const id of seg.activityIds) {
      if (!progress.completed[id]) return seg;
    }
  }
  return MAP_SEGMENTS[MAP_SEGMENTS.length - 1];
}

export function activityMeta(activityId: string) {
  for (let ui = 0; ui < UNITS.length; ui++) {
    const u = UNITS[ui];
    const ai = u.activities.findIndex((a) => a.id === activityId);
    if (ai >= 0) return { unit: u, unitIndex: ui, act: u.activities[ai], actIndex: ai };
  }
  return null;
}

/** מרכז אנכי של מקטע על הפנורמה (%) — לגלילה לעומק */
export function segmentPanoramaAnchor(segIndex: number): number {
  const seg = MAP_SEGMENTS[segIndex];
  if (!seg) return 50;
  const ys = seg.activityIds.map((id) => CONTINUOUS_STATIONS[id]?.y ?? 50);
  return ys.reduce((a, b) => a + b, 0) / ys.length;
}
