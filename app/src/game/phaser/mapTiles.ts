import Phaser from 'phaser';

import { COLORS, MAP_HEIGHT, MAP_WIDTH, TILE, TILE_SIZE, type PlazaRect } from './journeyMap';

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

/** Reliable solid-color map draw — avoids tileset/GID rendering quirks in Phaser 4. */
export function drawSolidColorMap(
  scene: Phaser.Scene,
  pathCells: Set<string>,
  wallCells: Set<string>,
  depth = 1,
  hiddenWallCells?: Set<string>,
  grassPlazas?: PlazaRect[],
): Phaser.GameObjects.Graphics {
  const gfx = scene.add.graphics().setDepth(depth);

  for (let ty = 0; ty < MAP_HEIGHT; ty++) {
    for (let tx = 0; tx < MAP_WIDTH; tx++) {
      const cell = `${tx},${ty}`;
      const isHidden = hiddenWallCells?.has(cell);
      const onGrass = isInsideGrassPlaza(tx, ty, grassPlazas);
      const idx = tileIndexForCell(tx, ty, pathCells, wallCells, hiddenWallCells);
      const color =
        onGrass
          ? COLORS.background
          : idx === TILE.path
            ? COLORS.path
            : idx === TILE.wall && !isHidden
              ? COLORS.wall
              : COLORS.background;
      gfx.fillStyle(color, 1);
      gfx.fillRect(tx * TILE_SIZE, ty * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }

  return gfx;
}
