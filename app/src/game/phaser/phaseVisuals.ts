import Phaser from 'phaser';
import type { PhaseId } from '../../data/types';
import { phaseMeta } from '../../data/phases';
import type { PathPoint } from './journeyMap';
import { TILE_SIZE, WORLD } from './journeyMap';

/** רקעים מצוירים שכבר בריפו — מונחים מתחת למבוך */
export const PAINT = {
  world: 'paint-world',
  bridge: 'paint-bridge',
  vine: 'paint-vine',
  spark: 'paint-spark',
  vignette: 'paint-vignette',
} as const;

export function paintImagePaths() {
  return {
    [PAINT.world]: '/depth/world.jpg',
    [PAINT.bridge]: '/depth/stage2-world.jpg',
    [PAINT.vine]: '/depth/stage1-world.jpg',
  } as const;
}

/** אינדקס התקדמות לכל משבצת שביל — לפי נקודת המרכז הקרובה */
export function indexPathCells(pathCells: Set<string>, centerline: PathPoint[]): Map<string, number> {
  const map = new Map<string, number>();
  const byTy = new Map<number, number[]>();
  centerline.forEach((p, i) => {
    const key = `${p.tx},${p.ty}`;
    const prev = map.get(key);
    if (prev == null || i < prev) map.set(key, i);
    const bucket = byTy.get(p.ty);
    if (bucket) bucket.push(i);
    else byTy.set(p.ty, [i]);
  });

  for (const cell of pathCells) {
    if (map.has(cell)) continue;
    const [tx, ty] = cell.split(',').map(Number);
    let best = 0;
    let bestD = Infinity;
    for (let dy = -4; dy <= 4; dy++) {
      const bucket = byTy.get(ty + dy);
      if (!bucket) continue;
      for (const i of bucket) {
        const p = centerline[i];
        const d = (p.tx - tx) ** 2 + (p.ty - ty) ** 2;
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      }
    }
    if (bestD < Infinity) map.set(cell, best);
  }
  return map;
}

export function drawPaintedBackdrop(scene: Phaser.Scene): void {
  const band = WORLD.height / 3;
  const place = (
    key: string,
    bandFromNorth: number,
    crop?: { x: number; y: number; w: number; h: number },
  ) => {
    if (!scene.textures.exists(key)) return;
    const y = band * bandFromNorth + band / 2;
    const img = scene.add.image(WORLD.width / 2, y, key).setDepth(0);
    if (crop) img.setCrop(crop.x, crop.y, crop.w, crop.h);
    img.setDisplaySize(WORLD.width + 4, band + 8);
  };

  // צפון — בית המדרש והזיתים מראש הציור הארוך
  place(PAINT.world, 0, { x: 0, y: 0, w: 1024, h: 1100 });
  place(PAINT.bridge, 1);
  place(PAINT.vine, 2);
}

export function ensureSpark(scene: Phaser.Scene): void {
  if (scene.textures.exists(PAINT.spark)) return;
  const g = scene.add.graphics();
  g.fillStyle(0xffe08a, 1);
  g.fillCircle(8, 8, 7);
  g.generateTexture(PAINT.spark, 16, 16);
  g.destroy();
}

export function ensureVignette(scene: Phaser.Scene): Phaser.GameObjects.Image | undefined {
  if (!scene.textures.exists(PAINT.vignette)) {
    const canvas = scene.textures.createCanvas(PAINT.vignette, 256, 256);
    if (!canvas) return undefined;
    const ctx = canvas.context;
    const grad = ctx.createRadialGradient(128, 128, 36, 128, 128, 140);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(0.55, 'rgba(48,28,8,0.05)');
    grad.addColorStop(1, 'rgba(28,14,4,0.62)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);
    canvas.refresh();
  }
  const img = scene.add.image(scene.scale.width / 2, scene.scale.height / 2, PAINT.vignette);
  img.setScrollFactor(0).setDepth(40).setAlpha(0.9);
  img.setDisplaySize(scene.scale.width, scene.scale.height);
  return img;
}

export function drawPathTexture(
  scene: Phaser.Scene,
  pathCells: Set<string>,
  cellProgress: Map<string, number>,
  phaseAt: (index: number) => PhaseId,
): Phaser.GameObjects.Graphics {
  const gfx = scene.add.graphics().setDepth(2);
  for (const cell of pathCells) {
    const [tx, ty] = cell.split(',').map(Number);
    const x = tx * TILE_SIZE;
    const y = ty * TILE_SIZE;
    const phase = phaseAt(cellProgress.get(cell) ?? 0);
    const tint = phaseMeta(phase).path;
    gfx.fillStyle(tint, 0.72);
    gfx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
    gfx.fillStyle(0xffffff, 0.16);
    gfx.fillRect(x + 2, y + 2, TILE_SIZE - 10, 3);
    gfx.fillStyle(0x000000, 0.08);
    gfx.fillRect(x, y + TILE_SIZE - 3, TILE_SIZE, 3);
    if ((tx + ty) % 2 === 0) {
      gfx.fillStyle(0x6b5433, 0.18);
      gfx.fillCircle(x + 10, y + 18, 2);
      gfx.fillCircle(x + 22, y + 8, 1.5);
    }
  }
  return gfx;
}

export function drawPathFog(
  gfx: Phaser.GameObjects.Graphics,
  pathCells: Set<string>,
  cellProgress: Map<string, number>,
  revealIndex: number,
): void {
  gfx.clear();
  if (!Number.isFinite(revealIndex)) return;
  gfx.fillStyle(0x1a140c, 0.72);
  for (const cell of pathCells) {
    const idx = cellProgress.get(cell);
    if (idx == null || idx <= revealIndex) continue;
    const [tx, ty] = cell.split(',').map(Number);
    gfx.fillRect(tx * TILE_SIZE, ty * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

export function burstAt(scene: Phaser.Scene, x: number, y: number, phase: PhaseId): void {
  ensureSpark(scene);
  const tint = phase === 'gemara' ? 0xf6c56b : phase === 'basic' ? 0xbfdbfe : 0xfde68a;
  for (let i = 0; i < 16; i++) {
    const a = (Math.PI * 2 * i) / 16;
    const img = scene.add.image(x, y, PAINT.spark).setDepth(14).setTint(tint);
    scene.tweens.add({
      targets: img,
      x: x + Math.cos(a) * (28 + (i % 4) * 10),
      y: y + Math.sin(a) * (22 + (i % 3) * 8) - 16,
      alpha: 0,
      scale: 0.25,
      duration: 620,
      ease: 'Cubic.easeOut',
      onComplete: () => img.destroy(),
    });
  }
}
