import { UNITS } from '../data/units';

export interface Pt { x: number; y: number }

export const BG = '/lomdim-aramit/bg-journey.webp';
export const BG_TINY = '/lomdim-aramit/bg-journey-tiny.webp';
export const BG_RATIO = 2413 / 1200;
export const UNIT_COLORS = ['#0d9488', '#f59e0b', '#8b5cf6', '#e05252', '#3b82f6', '#ec4899', '#16a34a'];

/** גרסה — מתעלמים משמירות ישנות אם שינינו את ברירת המחדל בקוד */
export const LS_PATH = 'aramit_station_pos_v1';

/** 29 תחנות — מספר הפעילויות במסע הארמית */
export const STATION_POS: Pt[] = [
  { x: 50.2, y: 97.1 }, // 1
  { x: 53.0, y: 94.0 }, // 2
  { x: 46.5, y: 91.5 }, // 3
  { x: 38.6, y: 88.5 }, // 4
  { x: 33.5, y: 85.0 }, // 5
  { x: 40.0, y: 81.8 }, // 6
  { x: 47.0, y: 79.0 }, // 7
  { x: 52.4, y: 76.5 }, // 8
  { x: 45.0, y: 74.0 }, // 9
  { x: 40.2, y: 71.0 }, // 10
  { x: 46.0, y: 68.5 }, // 11
  { x: 54.0, y: 66.5 }, // 12
  { x: 66.0, y: 65.5 }, // 13
  { x: 72.0, y: 63.5 }, // 14
  { x: 62.0, y: 61.0 }, // 15
  { x: 52.0, y: 59.0 }, // 16
  { x: 56.0, y: 56.5 }, // 17
  { x: 46.5, y: 54.5 }, // 18
  { x: 51.0, y: 52.0 }, // 19
  { x: 48.0, y: 49.0 }, // 20
  { x: 40.0, y: 47.0 }, // 21
  { x: 48.0, y: 44.5 }, // 22
  { x: 56.0, y: 42.0 }, // 23
  { x: 58.0, y: 39.0 }, // 24
  { x: 64.0, y: 36.5 }, // 25
  { x: 63.5, y: 34.0 }, // 26
  { x: 64.5, y: 32.0 }, // 27
  { x: 66.0, y: 30.0 }, // 28
  { x: 66.7, y: 28.5 }, // 29
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
