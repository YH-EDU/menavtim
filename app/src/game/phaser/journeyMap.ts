/** Procedural winding journey path — simple gray corridor with green borders. */



export const TILE_SIZE = 32;

export const MAP_WIDTH = 44;

export const MAP_HEIGHT = 210;



/** Solid-color tile indices (0-based within generated tileset). */

export const TILE = {

  path: 0,

  wall: 1,

  background: 2,

} as const;



/** Walkable path tile indices (0-based within tileset; map to GIDs via tileGid). */

export const PATH_TILE_INDEXES = [TILE.path];



/** Map palette — flat fills, no tileset clutter. */

export const COLORS = {

  background: 0xc8e6c9,

  path: 0xd8d8d8,

  wall: 0x66bb6a,

  wallDark: 0x43a047,

  goalStone: 0xd4a574,

  goalStoneDark: 0xb8884a,

  goalWood: 0x7b4a1a,

  goalRoof: 0x8b4513,

  goalTrim: 0xc17817,

  goalWindow: 0xffecb3,

  goalAccent: 0xd4af37,

  goalStep: 0xc9a66b,

} as const;



export interface PathPoint {

  tx: number;

  ty: number;

  px: number;

  py: number;

}



export interface UnitBoundary {

  unitIndex: number;

  unitTitle: string;

  color: string;

  point: PathPoint;

}



export interface GoalMarker {

  /** Center tile of the Beit Midrash building. */

  cx: number;

  cy: number;

  /** Pixel bounds for stone walls, roof, door, windows. */

  body: { x: number; y: number; w: number; h: number };

  roof: { x: number; y: number; w: number; h: number };

  door: { x: number; y: number; w: number; h: number };

  windows: { x: number; y: number; w: number; h: number }[];

  /** Warm path tiles in front of the building. */

  approachPath: { x: number; y: number; w: number; h: number };

  doorCell: PathPoint;

}



export interface PlazaRect {

  minTx: number;

  maxTx: number;

  minTy: number;

  maxTy: number;

}



export interface JourneyPath {

  pathCells: Set<string>;

  wallCells: Set<string>;

  /** Collision-only bounds — drawn as open grass, not green fence. */

  hiddenWallCells: Set<string>;

  centerline: PathPoint[];

  stations: PathPoint[];

  /** Centerline index for each mission station (same order as stations). */

  stationCenterlineIndices: number[];

  spawn: PathPoint;

  /** Pixel center of the maze entrance arch (plaza → corridor). */

  mazeEntrance: PathPoint;

  /** Pixel center of the maze exit arch (corridor → exit plaza). */

  mazeExit: PathPoint;

  goal: PathPoint;

  unitBoundaries: UnitBoundary[];

  goalMarker: GoalMarker;

  /** Walkable plazas drawn as open grass (not gray path). */

  grassPlazas: PlazaRect[];

  /** Gray path + green fence strip through a grass plaza (e.g. maze entrance). */

  pavedCorridors: PlazaRect[];

}



/** How many centerline steps to walk past a station after completing it. */

export const RESUME_STEPS_PAST = 3;



function key(x: number, y: number): string {

  return `${x},${y}`;

}



function clampX(x: number): number {

  return Math.max(3, Math.min(MAP_WIDTH - 4, x));

}



function clampY(y: number): number {

  return Math.max(2, Math.min(MAP_HEIGHT - 3, y));

}



function toPixel(tx: number, ty: number): { px: number; py: number } {

  return {

    px: tx * TILE_SIZE + TILE_SIZE / 2,

    py: ty * TILE_SIZE + TILE_SIZE / 2,

  };

}



/** Perpendicular offset for 2-tile-wide corridors (±1). */

type Lane = 1 | -1;

type CorridorOrient = 'h' | 'v';



/** True geometric center of a 2-tile-wide corridor segment. */

function corridorCenterPoint(

  tx: number,

  ty: number,

  lane: Lane,

  orient: CorridorOrient,

): PathPoint {

  if (orient === 'v') {

    const midTx = lane === 1 ? tx + 0.5 : tx - 0.5;

    return {

      tx,

      ty,

      px: midTx * TILE_SIZE + TILE_SIZE / 2,

      py: ty * TILE_SIZE + TILE_SIZE / 2,

    };

  }

  const midTy = lane === 1 ? ty + 0.5 : ty - 0.5;

  return {

    tx,

    ty,

    px: tx * TILE_SIZE + TILE_SIZE / 2,

    py: midTy * TILE_SIZE + TILE_SIZE / 2,

  };

}



function segmentOrient(

  a: { tx: number; ty: number },

  b: { tx: number; ty: number },

): CorridorOrient {

  return a.tx === b.tx ? 'v' : 'h';

}



function isInsidePlaza(tx: number, ty: number, plazas: PlazaRect[]): boolean {

  return plazas.some(

    (p) => tx >= p.minTx && tx <= p.maxTx && ty >= p.minTy && ty <= p.maxTy,

  );

}



/**

 * Narrow winding maze route — open spawn plaza, maze entrance, exit north,

 * then an open exit plaza and a connector to the Beit Midrash door.

 */

const WAYPOINTS: { tx: number; ty: number; lane?: Lane }[] = [

  { tx: 22, ty: 204, lane: 1 },

  { tx: 22, ty: 200, lane: 1 },

  { tx: 22, ty: 198, lane: 1 },

  { tx: 34, ty: 198, lane: 1 },

  { tx: 34, ty: 184, lane: -1 },

  { tx: 10, ty: 184, lane: -1 },

  { tx: 10, ty: 170, lane: 1 },

  { tx: 38, ty: 170, lane: 1 },

  { tx: 38, ty: 154, lane: -1 },

  { tx: 8, ty: 154, lane: -1 },

  { tx: 8, ty: 138, lane: 1 },

  { tx: 36, ty: 138, lane: 1 },

  { tx: 36, ty: 122, lane: -1 },

  { tx: 12, ty: 122, lane: -1 },

  { tx: 12, ty: 106, lane: 1 },

  { tx: 34, ty: 106, lane: 1 },

  { tx: 34, ty: 90, lane: -1 },

  { tx: 14, ty: 90, lane: -1 },

  { tx: 14, ty: 74, lane: 1 },

  { tx: 32, ty: 74, lane: 1 },

  { tx: 32, ty: 58, lane: -1 },

  { tx: 16, ty: 58, lane: -1 },

  { tx: 16, ty: 42, lane: 1 },

  { tx: 30, ty: 42, lane: 1 },

  { tx: 30, ty: 26, lane: -1 },

  { tx: 22, ty: 24, lane: -1 },

  { tx: 22, ty: 20, lane: -1 },

  { tx: 22, ty: 14, lane: 1 },

  { tx: 22, ty: 8, lane: 1 },

  { tx: 22, ty: 4, lane: 1 },

];



function addPathTile(pathCells: Set<string>, tx: number, ty: number): void {

  if (tx < 1 || tx >= MAP_WIDTH - 1 || ty < 1 || ty >= MAP_HEIGHT - 1) return;

  pathCells.add(key(clampX(tx), clampY(ty)));

}



function fillSegment(

  pathCells: Set<string>,

  x1: number,

  y1: number,

  x2: number,

  y2: number,

  lane: Lane,

): void {

  if (x1 === x2) {

    const minY = Math.min(y1, y2);

    const maxY = Math.max(y1, y2);

    for (let ty = minY; ty <= maxY; ty++) {

      addPathTile(pathCells, x1, ty);

      addPathTile(pathCells, x1 + lane, ty);

    }

  } else {

    const minX = Math.min(x1, x2);

    const maxX = Math.max(x1, x2);

    for (let tx = minX; tx <= maxX; tx++) {

      addPathTile(pathCells, tx, y1);

      addPathTile(pathCells, tx, y1 + lane);

    }

  }

}



function buildPathCells(): Set<string> {

  const pathCells = new Set<string>();

  for (let i = 0; i < WAYPOINTS.length - 1; i++) {

    const a = WAYPOINTS[i];

    const b = WAYPOINTS[i + 1];

    const lane = b.lane ?? a.lane ?? 1;

    fillSegment(pathCells, a.tx, a.ty, b.tx, b.ty, lane);

  }

  return pathCells;

}



/** Widen the maze→exit-plaza choke so large avatars (horse) can pass. */

function widenMazeExitGap(pathCells: Set<string>): void {

  for (const ty of [20, 21, 22]) {

    for (const tx of [21, 22, 23, 24]) {

      addPathTile(pathCells, tx, ty);

    }

  }

}



/** Open grass plaza at journey start — walkable, blends with background. */

function addEntrancePlaza(pathCells: Set<string>, anchorTx: number, anchorTy: number): PlazaRect {

  for (let dy = -5; dy <= 4; dy++) {

    for (let dx = -4; dx <= 4; dx++) {

      addPathTile(pathCells, anchorTx + dx, anchorTy + dy);

    }

  }

  return {

    minTx: anchorTx - 4,

    maxTx: anchorTx + 4,

    minTy: anchorTy - 5,

    maxTy: anchorTy + 4,

  };

}



/** Open plaza after the maze — gray floor, no visible fence ring. */

function addExitPlaza(pathCells: Set<string>, anchorTx: number, anchorTy: number): PlazaRect {

  for (let dy = -4; dy <= 5; dy++) {

    for (let dx = -5; dx <= 5; dx++) {

      addPathTile(pathCells, anchorTx + dx, anchorTy + dy);

    }

  }

  return {

    minTx: anchorTx - 5,

    maxTx: anchorTx + 5,

    minTy: anchorTy - 4,

    maxTy: anchorTy + 5,

  };

}



/** Visible fence posts flanking maze gates — open plazas skip auto wall generation. */

function ensureMazeGateFence(

  pathCells: Set<string>,

  wallCells: Set<string>,

  hiddenWallCells: Set<string>,

  gateTx: number,

  gateTy: number,

  lane: Lane,

): void {

  const txA = gateTx;

  const txB = gateTx + lane;

  const leftTx = Math.min(txA, txB) - 1;

  const rightTx = Math.max(txA, txB) + 1;



  for (let dy = -1; dy <= 2; dy++) {

    const ty = gateTy + dy;

    if (ty < 1 || ty >= MAP_HEIGHT - 1) continue;

    for (const tx of [leftTx, rightTx]) {

      if (tx < 1 || tx >= MAP_WIDTH - 1) continue;

      const k = key(tx, ty);

      if (pathCells.has(k)) continue;

      wallCells.add(k);

      hiddenWallCells.delete(k);

    }

  }

}



/** Orderly 2-tile corridor through a grass plaza — gray path, symmetrical green fence. */

function addEntranceApproachCorridor(

  pathCells: Set<string>,

  wallCells: Set<string>,

  hiddenWallCells: Set<string>,

  gateTx: number,

  lane: Lane,

  plaza: PlazaRect,

): PlazaRect {

  const txA = gateTx;

  const txB = gateTx + lane;

  const leftWallTx = Math.min(txA, txB) - 1;

  const rightWallTx = Math.max(txA, txB) + 1;



  for (let ty = plaza.minTy; ty <= plaza.maxTy; ty++) {

    addPathTile(pathCells, txA, ty);

    addPathTile(pathCells, txB, ty);

    for (const tx of [leftWallTx, rightWallTx]) {

      if (tx < 1 || tx >= MAP_WIDTH - 1 || ty < 1 || ty >= MAP_HEIGHT - 1) continue;

      const k = key(tx, ty);

      wallCells.add(k);

      hiddenWallCells.delete(k);

    }

  }



  return {

    minTx: leftWallTx,

    maxTx: rightWallTx,

    minTy: plaza.minTy,

    maxTy: plaza.maxTy,

  };

}



/** Invisible collision ring just outside an open plaza (no green fence tiles). */

function addInvisiblePlazaBoundary(

  pathCells: Set<string>,

  hiddenWallCells: Set<string>,

  plaza: PlazaRect,

): void {

  for (let ty = plaza.minTy - 1; ty <= plaza.maxTy + 1; ty++) {

    for (let tx = plaza.minTx - 1; tx <= plaza.maxTx + 1; tx++) {

      const onBorder =

        tx === plaza.minTx - 1 ||

        tx === plaza.maxTx + 1 ||

        ty === plaza.minTy - 1 ||

        ty === plaza.maxTy + 1;

      if (!onBorder) continue;

      if (tx < 1 || tx >= MAP_WIDTH - 1 || ty < 1 || ty >= MAP_HEIGHT - 1) continue;

      const k = key(tx, ty);

      if (pathCells.has(k)) continue;

      hiddenWallCells.add(k);

    }

  }

}



/** Map edges are always solid (wall), except existing path tiles. */

function sealMapEdges(pathCells: Set<string>, wallCells: Set<string>): void {

  for (let tx = 0; tx < MAP_WIDTH; tx++) {

    for (const ty of [0, 1, MAP_HEIGHT - 2, MAP_HEIGHT - 1]) {

      const k = key(tx, ty);

      if (!pathCells.has(k)) wallCells.add(k);

    }

  }

  for (let ty = 0; ty < MAP_HEIGHT; ty++) {

    for (const tx of [0, 1, MAP_WIDTH - 2, MAP_WIDTH - 1]) {

      const k = key(tx, ty);

      if (!pathCells.has(k)) wallCells.add(k);

    }

  }

}



function buildCenterline(): { tx: number; ty: number; lane: Lane; orient: CorridorOrient }[] {

  const raw: { tx: number; ty: number; lane: Lane; orient: CorridorOrient }[] = [];



  for (let i = 0; i < WAYPOINTS.length - 1; i++) {

    const a = WAYPOINTS[i];

    const b = WAYPOINTS[i + 1];

    const next = WAYPOINTS[i + 2];

    const lane = b.lane ?? a.lane ?? 1;

    const orient = segmentOrient(a, b);

    const endOrient = next ? segmentOrient(b, next) : orient;



    if (a.tx === b.tx) {

      const step = a.ty < b.ty ? 1 : -1;

      for (let ty = a.ty; ty !== b.ty; ty += step) {

        raw.push({ tx: a.tx, ty, lane, orient });

      }

    } else {

      const step = a.tx < b.tx ? 1 : -1;

      for (let tx = a.tx; tx !== b.tx; tx += step) {

        raw.push({ tx, ty: a.ty, lane, orient });

      }

    }

    raw.push({ tx: b.tx, ty: b.ty, lane: b.lane ?? a.lane ?? 1, orient: endOrient });

  }



  const centerline: { tx: number; ty: number; lane: Lane; orient: CorridorOrient }[] = [];

  for (const pt of raw) {

    const last = centerline[centerline.length - 1];

    if (!last || last.tx !== pt.tx || last.ty !== pt.ty) {

      centerline.push({ tx: clampX(pt.tx), ty: clampY(pt.ty), lane: pt.lane, orient: pt.orient });

    }

  }

  return centerline;

}



/** Cells orthogonally adjacent to path become fence walls — except open plaza interiors. */

function buildWallCells(

  pathCells: Set<string>,

  exempt: Set<string>,

  openPlazas: PlazaRect[],

): Set<string> {

  const walls = new Set<string>();

  const dirs = [

    [0, -1],

    [0, 1],

    [-1, 0],

    [1, 0],

  ] as const;



  for (const k of pathCells) {

    const [px, py] = k.split(',').map(Number);

    if (isInsidePlaza(px, py, openPlazas)) continue;



    for (const [dx, dy] of dirs) {

      const nx = px + dx;

      const ny = py + dy;

      const nk = key(nx, ny);

      if (pathCells.has(nk) || exempt.has(nk)) continue;

      if (nx < 1 || nx >= MAP_WIDTH - 1 || ny < 1 || ny >= MAP_HEIGHT - 1) continue;

      walls.add(nk);

    }

  }

  return walls;

}



/** Clean, large Beit Midrash on the north edge of the exit plaza. */

function buildGoalMarker(doorPoint: PathPoint): GoalMarker {

  const cx = doorPoint.tx;

  const doorRow = doorPoint.ty;

  const buildingRow = doorRow - 5;

  const bodyW = TILE_SIZE * 11;

  const bodyH = TILE_SIZE * 4.5;

  const left = doorPoint.px - bodyW / 2;

  const top = (buildingRow - 1) * TILE_SIZE;

  const roofW = TILE_SIZE * 10;

  const roofH = TILE_SIZE * 3;

  const doorW = TILE_SIZE * 2;

  const doorH = TILE_SIZE * 2.4;

  const winW = TILE_SIZE * 1.6;

  const winH = TILE_SIZE * 1.8;

  const doorPx = doorPoint.px;

  const bodyY = top + roofH - TILE_SIZE * 0.3;

  const bodyBottom = bodyY + bodyH;

  const doorPy = bodyBottom - doorH;



  return {

    cx,

    cy: buildingRow,

    body: { x: left, y: bodyY, w: bodyW, h: bodyH },

    roof: { x: left + TILE_SIZE * 0.5, y: top, w: roofW, h: roofH },

    door: { x: doorPx - doorW / 2, y: doorPy, w: doorW, h: doorH },

    windows: [

      { x: left + TILE_SIZE * 1.4, y: bodyY + TILE_SIZE * 0.55, w: winW, h: winH },

      { x: left + bodyW - TILE_SIZE * 2.8, y: bodyY + TILE_SIZE * 0.55, w: winW, h: winH },

    ],

    approachPath: {

      x: doorPx - TILE_SIZE * 3.5,

      y: doorRow * TILE_SIZE - TILE_SIZE * 0.35,

      w: TILE_SIZE * 7,

      h: TILE_SIZE * 2.8,

    },

    doorCell: { tx: cx, ty: doorRow, ...toPixel(cx, doorRow) },

  };

}



/** Position just past a completed station along the path, facing the next target. */

export function computeResumePosition(

  centerline: PathPoint[],

  stationCenterlineIdx: number,

  faceCenterlineIdx?: number,

): { x: number; y: number; faceX: number; faceY: number } {

  const pastIdx = Math.min(stationCenterlineIdx + RESUME_STEPS_PAST, centerline.length - 1);

  const pos = centerline[pastIdx];

  let faceIdx = faceCenterlineIdx ?? pastIdx + 2;

  if (faceIdx >= centerline.length) faceIdx = centerline.length - 1;

  if (faceIdx <= pastIdx) faceIdx = Math.min(pastIdx + 1, centerline.length - 1);

  const face = centerline[faceIdx];

  return { x: pos.px, y: pos.py, faceX: face.px, faceY: face.py };

}



function distributeStationIndices(stationCount: number, centerlineLen: number): number[] {

  if (stationCount <= 0) return [];

  if (stationCount === 1) return [Math.floor(centerlineLen / 2)];



  const lead = 8;

  const tail = 10;

  const usableStart = lead;

  const usableEnd = centerlineLen - tail - 1;

  const usableLen = Math.max(1, usableEnd - usableStart);



  const indices: number[] = [];

  const used = new Set<number>();



  for (let i = 0; i < stationCount; i++) {

    const frac = i / (stationCount - 1);

    let idx = usableStart + Math.round(frac * usableLen);

    while (used.has(idx) && idx < usableEnd) idx++;

    if (used.has(idx)) {

      idx = usableStart;

      while (used.has(idx) && idx <= usableEnd) idx += 1;

    }

    if (idx > usableEnd) {

      idx = usableEnd;

      while (used.has(idx) && idx > usableStart) idx -= 1;

    }

    used.add(idx);

    indices.push(idx);

  }



  return indices;

}



export interface StationPlacement {

  counts: number[];

  unitTitles: string[];

  unitColors: string[];

}



export function isPathCenterTile(tx: number, ty: number, centerline: PathPoint[]): boolean {

  return centerline.some((p) => p.tx === tx && p.ty === ty);

}



export function buildJourneyPath(

  stationCount: number,

  placement?: StationPlacement,

): JourneyPath {

  const centerlineRaw = buildCenterline();

  const pathCells = buildPathCells();



  const spawnAnchor = centerlineRaw[0];

  const entrancePlaza = addEntrancePlaza(pathCells, spawnAnchor.tx, spawnAnchor.ty);



  const exitAnchor = { tx: 22, ty: 8 };

  const exitPlaza = addExitPlaza(pathCells, exitAnchor.tx, exitAnchor.ty);

  widenMazeExitGap(pathCells);



  const centerPoints: PathPoint[] = centerlineRaw.map(({ tx, ty, lane, orient }) =>

    corridorCenterPoint(tx, ty, lane, orient),

  );



  const doorGoal = centerPoints[centerPoints.length - 1];

  const goal = doorGoal;

  const stationIndices = distributeStationIndices(stationCount, centerPoints.length);

  const unitBoundaries: UnitBoundary[] = [];



  if (placement && placement.counts.length > 0) {

    let missionIdx = 0;

    let unitIdx = 0;

    for (const count of placement.counts) {

      if (count <= 0) continue;

      for (let a = 0; a < count; a++) {

        if (a === 0 && missionIdx < stationIndices.length) {

          const idx = stationIndices[missionIdx];

          unitBoundaries.push({

            unitIndex: unitIdx,

            unitTitle: placement.unitTitles[unitIdx] ?? '',

            color: placement.unitColors[unitIdx] ?? '#0d9488',

            point: centerPoints[idx],

          });

        }

        missionIdx++;

      }

      unitIdx++;

    }

  }



  const spawnLane = centerlineRaw[0].lane ?? 1;

  /** Deep in the open plaza — south of the maze entrance corridor. */

  const spawn = corridorCenterPoint(spawnAnchor.tx, spawnAnchor.ty + 3, spawnLane, 'v');

  const mazeEntrance = corridorCenterPoint(spawnAnchor.tx, spawnAnchor.ty - 1, spawnLane, 'v');

  const mazeExit = corridorCenterPoint(22, 14, 1, 'v');



  const goalMarker = buildGoalMarker(doorGoal);

  pathCells.add(key(goalMarker.doorCell.tx, goalMarker.doorCell.ty));



  const openPlazas = [entrancePlaza, exitPlaza];

  const hiddenWallCells = new Set<string>();

  addInvisiblePlazaBoundary(pathCells, hiddenWallCells, entrancePlaza);

  addInvisiblePlazaBoundary(pathCells, hiddenWallCells, exitPlaza);



  const buildingZone = new Set<string>();

  for (let ry = -4; ry <= 2; ry++) {

    for (let rx = -6; rx <= 6; rx++) {

      buildingZone.add(key(goalMarker.cx + rx, goalMarker.cy + ry));

    }

  }



  const wallCells = buildWallCells(pathCells, buildingZone, openPlazas);

  const entranceCorridor = addEntranceApproachCorridor(

    pathCells,

    wallCells,

    hiddenWallCells,

    mazeEntrance.tx,

    spawnLane,

    entrancePlaza,

  );

  ensureMazeGateFence(pathCells, wallCells, hiddenWallCells, mazeEntrance.tx, mazeEntrance.ty, spawnLane);

  ensureMazeGateFence(pathCells, wallCells, hiddenWallCells, mazeExit.tx, mazeExit.ty, 1);

  sealMapEdges(pathCells, wallCells);



  const stations = stationIndices.slice(0, stationCount).map((idx) => centerPoints[idx]);

  const stationCenterlineIndices = stationIndices.slice(0, stationCount);



  return {

    pathCells,

    wallCells,

    hiddenWallCells,

    centerline: centerPoints,

    stations,

    stationCenterlineIndices,

    spawn,

    mazeEntrance,

    mazeExit,

    goal,

    unitBoundaries,

    goalMarker,

    grassPlazas: [entrancePlaza],

    pavedCorridors: [entranceCorridor],

  };

}



export const WORLD = {

  width: MAP_WIDTH * TILE_SIZE,

  height: MAP_HEIGHT * TILE_SIZE,

} as const;

