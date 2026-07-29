import { UNITS } from '../data/units';

export interface Pt { x: number; y: number }

export const BG = '/lomdim-aramit/bg-journey.webp';
export const BG_TINY = '/lomdim-aramit/bg-journey-tiny.webp';
export const BG_RATIO = 2413 / 1200;
export const UNIT_COLORS = [
  '#0d9488', '#f59e0b', '#8b5cf6', '#e05252', '#3b82f6',
  '#ec4899', '#16a34a', '#a16207', '#0284c7', '#c026d3',
  '#059669', '#d97706', '#7c3aed', '#be123c',
];

/** גרסה — מתעלמים משמירות ישנות אם שינינו את ברירת המחדל בקוד */
export const LS_PATH = 'aramit_station_pos_v7';

/** 46 תחנות — מספר הפעילויות במסע הארמית, פרוסות לאורך השביל */
export const STATION_POS: Pt[] = [
  { x: 50.2, y: 97.1 }, // 1
  { x: 52.9, y: 94.1 }, // 2
  { x: 49.4, y: 92.6 }, // 3
  { x: 45.6, y: 91.2 }, // 4
  { x: 41.9, y: 89.7 }, // 5
  { x: 38.1, y: 88.2 }, // 6
  { x: 34.8, y: 85.9 }, // 7
  { x: 35.7, y: 83.9 }, // 8
  { x: 39.3, y: 82.2 }, // 9
  { x: 43.0, y: 80.6 }, // 10
  { x: 46.7, y: 79.1 }, // 11
  { x: 50.4, y: 77.4 }, // 12
  { x: 50.7, y: 75.9 }, // 13
  { x: 46.8, y: 74.6 }, // 14
  { x: 43.2, y: 72.9 }, // 15
  { x: 40.6, y: 70.8 }, // 16
  { x: 44.3, y: 69.2 }, // 17
  { x: 48.1, y: 68.0 }, // 18
  { x: 52.0, y: 67.0 }, // 19
  { x: 56.0, y: 66.3 }, // 20
  { x: 60.0, y: 66.0 }, // 21
  { x: 64.0, y: 65.7 }, // 22
  { x: 67.9, y: 64.9 }, // 23
  { x: 71.8, y: 63.6 }, // 24
  { x: 68.3, y: 62.6 }, // 25
  { x: 64.4, y: 61.6 }, // 26
  { x: 60.5, y: 60.7 }, // 27
  { x: 56.6, y: 59.9 }, // 28
  { x: 52.6, y: 59.1 }, // 29
  { x: 54.9, y: 57.2 }, // 30
  { x: 53.3, y: 55.9 }, // 31
  { x: 49.4, y: 55.1 }, // 32
  { x: 47.4, y: 54.0 }, // 33
  { x: 51.0, y: 52.0 }, // 34
  { x: 48.2, y: 49.2 }, // 35
  { x: 44.3, y: 48.1 }, // 36
  { x: 40.4, y: 47.1 }, // 37
  { x: 43.4, y: 45.9 }, // 38
  { x: 47.3, y: 44.7 }, // 39
  { x: 51.1, y: 43.5 }, // 40
  { x: 55.0, y: 42.3 }, // 41
  { x: 57.6, y: 39.6 }, // 42
  { x: 61.1, y: 37.7 }, // 43
  { x: 63.8, y: 35.6 }, // 44
  { x: 64.6, y: 31.9 }, // 45
  { x: 66.7, y: 28.5 }, // 46
];

export const START_POS: Pt = { x: 50.2, y: 98.6 };
export const TROPHY_POS: Pt = { x: 66.7, y: 26.0 };
export const CLOUD_COVER: Pt = { x: 58.8, y: 16.2 };

export function stationCount(): number {
  return UNITS.reduce((n, u) => n + u.activities.length, 0);
}

export function defaultStationPositions(): Pt[] {
  return STATION_POS.map((p) => ({ ...p }));
}

export function loadStationPositions(): Pt[] {
  try {
    const raw = localStorage.getItem(LS_PATH);
    if (!raw) return defaultStationPositions();
    const parsed = JSON.parse(raw) as Pt[];
    if (!Array.isArray(parsed) || parsed.length !== stationCount()) return defaultStationPositions();
    return parsed.map((p) => ({ x: Number(p.x), y: Number(p.y) }));
  } catch {
    return defaultStationPositions();
  }
}

export function saveStationPositions(pts: Pt[]): void {
  localStorage.setItem(LS_PATH, JSON.stringify(pts));
  window.dispatchEvent(new Event('aramit-path'));
}

export function clearStationPositions(): void {
  localStorage.removeItem(LS_PATH);
  window.dispatchEvent(new Event('aramit-path'));
}

/** מרכז אופקי משוער של השביל על התמונה (%) — למיקוד במובייל */
export const PATH_FOCUS_X = 52;

export interface BoardSize {
  w: number;
  h: number;
  viewW: number;
  compact: boolean;
  scrollLeft: number;
}

export function boardSize(): BoardSize {
  const viewW = Math.max(320, window.innerWidth);
  const compact = viewW < 720;

  let w: number;
  if (compact) {
    const nGaps = Math.max(1, stationCount() - 1);
    const spanY = 0.66;
    const targetGap = 50;
    const minH = Math.round((nGaps * targetGap) / spanY);
    const fromGaps = Math.round(minH / BG_RATIO);
    w = Math.min(1180, Math.max(980, fromGaps, Math.round(viewW * 2.55)));
  } else {
    w = viewW;
  }

  const h = Math.round(w * BG_RATIO);
  const scrollLeft = compact
    ? Math.max(0, Math.min(w - viewW, w * (PATH_FOCUS_X / 100) - viewW / 2))
    : 0;

  return { w, h, viewW, compact, scrollLeft };
}

export function scrollBoardToFocus(
  scroller: HTMLElement | null,
  boardW: number,
  viewW: number,
  focusXPercent = PATH_FOCUS_X,
) {
  if (!scroller || boardW <= viewW) return;
  const left = Math.max(0, Math.min(boardW - viewW, boardW * (focusXPercent / 100) - viewW / 2));
  scroller.scrollLeft = left;
}

export function positionsToTs(pts: Pt[]): string {
  const lines = pts.map((p, i) => `  { x: ${p.x.toFixed(1)}, y: ${p.y.toFixed(1)} }, // ${i + 1}`);
  return `export const STATION_POS: Pt[] = [\n${lines.join('\n')}\n];\n`;
}
