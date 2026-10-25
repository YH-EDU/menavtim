import Phaser from 'phaser';

import { COLORS, MAP_HEIGHT, MAP_WIDTH, TILE, TILE_SIZE, WORLD, type PlazaRect } from './journeyMap';

/** Generate a 3-tile solid-color tileset texture (path, wall, background). */
export function generateMapTileset(scene: Phaser.Scene, key: string): void {
  if (scene.textures.exists(key)) return;

  const cols = 3;
  const canvas = scene.textures.createCanvas(key, TILE_SIZE * cols, TILE_SIZE);
  if (!canvas) return;

  const ctx = canvas.context;
  const fills = [COLORS.path, COLORS.wall, COLORS.background];

  fills.forEach((color, i) => {
    ctx.fillStyle = `#${color.toString(16).padStart(6, '0')}`;
    ctx.fillRect(i * TILE_SIZE, 0, TILE_SIZE, TILE_SIZE);
  });

  canvas.refresh();
}

type MapTileIndex = (typeof TILE)[keyof typeof TILE];

export function tileGid(tile: MapTileIndex): number {
  return tile + 1;
}

export function tileIndexForCell(
  tx: number,
  ty: number,
  pathCells: Set<string>,
  wallCells: Set<string>,
  hiddenWallCells?: Set<string>,
): MapTileIndex {
  const cell = `${tx},${ty}`;
  if (pathCells.has(cell)) return TILE.path;
  if (wallCells.has(cell) || hiddenWallCells?.has(cell)) return TILE.wall;
  return TILE.background;
}

export function isBlockingCell(
  tx: number,
  ty: number,
  pathCells: Set<string>,
  wallCells: Set<string>,
  hiddenWallCells?: Set<string>,
): boolean {
  const cell = `${tx},${ty}`;
  return wallCells.has(cell) || !!hiddenWallCells?.has(cell);
}

function isInsideGrassPlaza(tx: number, ty: number, grassPlazas?: PlazaRect[]): boolean {
  if (!grassPlazas?.length) return false;
  return grassPlazas.some(
    (p) => tx >= p.minTx && tx <= p.maxTx && ty >= p.minTy && ty <= p.maxTy,
  );
}

function isInsidePavedCorridor(tx: number, ty: number, pavedCorridors?: PlazaRect[]): boolean {
  if (!pavedCorridors?.length) return false;
  return pavedCorridors.some(
    (p) => tx >= p.minTx && tx <= p.maxTx && ty >= p.minTy && ty <= p.maxTy,
  );
}

/**
 * Soft wall tint, baked once. The path and grass stay transparent so the
 * painted backdrop and the textured path show through.
 */
export function drawSolidColorMap(
  scene: Phaser.Scene,
  pathCells: Set<string>,
  wallCells: Set<string>,
  depth = 1,
  hiddenWallCells?: Set<string>,
  grassPlazas?: PlazaRect[],
  pavedCorridors?: PlazaRect[],
): Phaser.GameObjects.Image | undefined {
  const key = 'wall-baked';
  if (scene.textures.exists(key)) scene.textures.remove(key);
  const canvas = scene.textures.createCanvas(key, WORLD.width, WORLD.height);
  if (!canvas) return undefined;
  const ctx = canvas.context;
  ctx.clearRect(0, 0, WORLD.width, WORLD.height);
  ctx.fillStyle = 'rgba(58, 70, 52, 0.4)';

  for (let ty = 0; ty < MAP_HEIGHT; ty++) {
    for (let tx = 0; tx < MAP_WIDTH; tx++) {
      const cell = `${tx},${ty}`;
      if (hiddenWallCells?.has(cell)) continue;
      if (pathCells.has(cell)) continue;
      const onGrass =
        isInsideGrassPlaza(tx, ty, grassPlazas) &&
        !isInsidePavedCorridor(tx, ty, pavedCorridors);
      if (onGrass) continue;
      if (!wallCells.has(cell)) continue;
      ctx.fillRect(tx * TILE_SIZE, ty * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }

  canvas.refresh();
  return scene.add.image(WORLD.width / 2, WORLD.height / 2, key).setDepth(depth);
}
