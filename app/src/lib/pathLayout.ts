import { UNITS } from '../data/units';

export interface Pt { x: number; y: number }

export const BG = '/menavtim/bg-journey-continuous.jpg';
/** גובה÷רוחב של תמונת המסע (1024×1536) */
export const BG_RATIO = 1536 / 1024;
export const UNIT_COLORS = [
  '#0d9488', '#f59e0b', '#8b5cf6', '#e05252', '#3b82f6',
  '#ec4899', '#16a34a', '#a16207', '#0284c7', '#c026d3',
  '#059669', '#d97706', '#7c3aed', '#be123c',
];

/** גרסה — מתעלמים משמירות ישנות אם שינינו את ברירת המחדל בקוד */
export const LS_PATH = 'aramit_station_pos_v8_eretz';

/** 46 תחנות לאורך שביל ארץ־ישראל (כרם → גשר → טרסות → בית מדרש) */
export const STATION_POS: Pt[] = [
  { x: 50.0, y: 97.5 }, // 1
  { x: 50.1, y: 95.1 }, // 2
  { x: 49.9, y: 92.7 }, // 3
  { x: 49.4, y: 90.3 }, // 4
  { x: 48.5, y: 88.1 }, // 5
  { x: 47.4, y: 85.9 }, // 6
  { x: 46.4, y: 83.7 }, // 7
  { x: 45.5, y: 81.4 }, // 8  גשר
  { x: 46.7, y: 79.3 }, // 9
  { x: 48.0, y: 77.2 }, // 10
  { x: 49.6, y: 75.4 }, // 11
  { x: 51.3, y: 73.7 }, // 12
  { x: 53.2, y: 72.2 }, // 13
  { x: 54.9, y: 70.4 }, // 14
  { x: 56.4, y: 68.6 }, // 15
  { x: 55.5, y: 66.4 }, // 16
  { x: 53.8, y: 64.7 }, // 17
  { x: 51.9, y: 63.3 }, // 18
  { x: 49.9, y: 61.8 }, // 19
  { x: 47.9, y: 60.4 }, // 20
  { x: 46.4, y: 58.5 }, // 21
  { x: 46.1, y: 56.6 }, // 22
  { x: 47.4, y: 54.6 }, // 23
  { x: 49.4, y: 53.1 }, // 24
  { x: 51.4, y: 51.7 }, // 25
  { x: 53.4, y: 50.3 }, // 26
  { x: 55.2, y: 48.7 }, // 27
  { x: 56.7, y: 46.8 }, // 28
  { x: 55.9, y: 44.9 }, // 29
  { x: 54.3, y: 43.0 }, // 30
  { x: 52.4, y: 41.6 }, // 31
  { x: 50.5, y: 40.1 }, // 32
  { x: 48.6, y: 38.6 }, // 33
  { x: 49.8, y: 36.6 }, // 34
  { x: 51.4, y: 34.8 }, // 35
  { x: 53.2, y: 33.2 }, // 36
  { x: 54.8, y: 31.4 }, // 37
  { x: 55.7, y: 29.5 }, // 38
  { x: 54.3, y: 27.5 }, // 39
  { x: 52.6, y: 25.8 }, // 40
  { x: 51.2, y: 24.1 }, // 41
  { x: 52.3, y: 22.0 }, // 42
  { x: 53.4, y: 19.8 }, // 43
  { x: 53.7, y: 17.6 }, // 44
  { x: 52.9, y: 15.3 }, // 45
  { x: 52.0, y: 13.0 }, // 46
];

export const START_POS: Pt = { x: 50.0, y: 99.0 };
export const TROPHY_POS: Pt = { x: 52.0, y: 9.5 };
export const CLOUD_COVER: Pt = { x: 70.0, y: 8.0 };

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
export const PATH_FOCUS_X = 50;

export interface BoardSize {
  w: number;
  h: number;
  viewW: number;
  compact: boolean;
  scrollLeft: number;
}

export function boardSize(opts?: {
  stationCount?: number;
  bgRatio?: number;
  focusX?: number;
}): BoardSize {
  const viewW = Math.max(320, window.innerWidth);
  const compact = viewW < 720;
  const ratio = opts?.bgRatio ?? BG_RATIO;
  const nStations = opts?.stationCount ?? stationCount();
  const focusX = opts?.focusX ?? PATH_FOCUS_X;

  let w: number;
  if (compact) {
    const nGaps = Math.max(1, nStations - 1);
    const spanY = 0.55;
    const targetGap = nStations <= 4 ? 90 : 50;
    const minH = Math.round((nGaps * targetGap) / spanY);
    const fromGaps = Math.round(minH / ratio);
    w = Math.min(1180, Math.max(nStations <= 4 ? viewW : 980, fromGaps, Math.round(viewW * (nStations <= 4 ? 1.15 : 2.55))));
  } else {
    // במקטע קצר — התמונה נכנסת לרוחב המסך בלי זום מוגזם
    w = Math.min(viewW, Math.round(viewW * (nStations <= 4 ? 1 : 1)));
  }

  const h = Math.round(w * ratio);
  const scrollLeft = compact
    ? Math.max(0, Math.min(w - viewW, w * (focusX / 100) - viewW / 2))
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
