import Phaser from 'phaser';
import type { PhaseId } from '../../data/types';
import type { PathPoint } from './journeyMap';
import { TILE_SIZE, WORLD } from './journeyMap';

/** רקעים מצוירים שכבר בריפו — מונחים מתחת למבוך */
export const PAINT = {
  world: 'paint-world',
  bridge: 'paint-bridge',
  vine: 'paint-vine',
  cinema: 'paint-cinema',
  spark: 'paint-spark',
  vignette: 'paint-vignette',
  leaf: 'paint-leaf',
  tuxemon: 'tuxemon-tiles',
} as const;

export function paintImagePaths() {
  return {
    [PAINT.world]: '/depth/world.jpg',
    [PAINT.bridge]: '/depth/stage2-world.jpg',
    [PAINT.vine]: '/depth/stage1-world.jpg',
    [PAINT.cinema]: '/bg-journey-cinema.jpg',
    [PAINT.tuxemon]: '/phaser-rpg/tilesets/tuxemon-sample-32px-extruded.png',
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
  const full = (key: string, alpha: number) => {
    if (!scene.textures.exists(key)) return;
    scene.add
      .image(WORLD.width / 2, WORLD.height / 2, key)
      .setDepth(0)
      .setAlpha(alpha)
      .setDisplaySize(WORLD.width + 8, WORLD.height + 8);
  };

  // רצף קולנועי על כל המסע, ומעליו לוחות השלבים
  full(PAINT.cinema, 0.72);

  const band = WORLD.height / 3;
  const place = (
    key: string,
    bandFromNorth: number,
    alpha: number,
    crop?: { x: number; y: number; w: number; h: number },
  ) => {
    if (!scene.textures.exists(key)) return;
    const y = band * bandFromNorth + band / 2;
    const img = scene.add.image(WORLD.width / 2, y, key).setDepth(0).setAlpha(alpha);
    if (crop) img.setCrop(crop.x, crop.y, crop.w, crop.h);
    img.setDisplaySize(WORLD.width + 4, band + 8);
  };

  // צפון — בית המדרש. אמצע — הגשר לבבל. דרום — כרם ארץ ישראל.
  place(PAINT.world, 0, 0.78, { x: 0, y: 0, w: 1024, h: 1100 });
  place(PAINT.bridge, 1, 0.8);
  place(PAINT.vine, 2, 0.82);

  const washes: { y: number; color: number; alpha: number }[] = [
    { y: band / 2, color: 0x6b3418, alpha: 0.14 },
    { y: band + band / 2, color: 0x1a3a66, alpha: 0.16 },
    { y: band * 2 + band / 2, color: 0xc4a15a, alpha: 0.12 },
  ];
  for (const w of washes) {
    scene.add
      .rectangle(WORLD.width / 2, w.y, WORLD.width, band, w.color, w.alpha)
      .setDepth(0);
  }
}

export function ensureSpark(scene: Phaser.Scene): void {
  if (scene.textures.exists(PAINT.spark)) return;
  const g = scene.add.graphics();
  g.fillStyle(0xffe08a, 1);
  g.fillCircle(8, 8, 7);
  g.fillStyle(0xfff6dc, 1);
  g.fillCircle(8, 8, 3);
  g.generateTexture(PAINT.spark, 16, 16);
  g.destroy();
}

function ensureLeaf(scene: Phaser.Scene): void {
  if (scene.textures.exists(PAINT.leaf)) return;
  const canvas = scene.textures.createCanvas(PAINT.leaf, 72, 96);
  if (!canvas) return;
  const ctx = canvas.context;
  ctx.clearRect(0, 0, 72, 96);
  const leaf = (x: number, y: number, rot: number, color: string) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(0, 0, 8, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };
  leaf(22, 28, -0.5, 'rgba(86, 112, 48, 0.95)');
  leaf(48, 58, 0.4, 'rgba(120, 92, 48, 0.9)');
  leaf(30, 78, 0.2, 'rgba(70, 98, 56, 0.85)');
  canvas.refresh();
}

export function ensureVignette(scene: Phaser.Scene): Phaser.GameObjects.Image | undefined {
  if (!scene.textures.exists(PAINT.vignette)) {
    const canvas = scene.textures.createCanvas(PAINT.vignette, 256, 256);
    if (!canvas) return undefined;
    const ctx = canvas.context;
    const grad = ctx.createRadialGradient(128, 128, 40, 128, 128, 148);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(0.5, 'rgba(62, 36, 12, 0.04)');
    grad.addColorStop(1, 'rgba(36, 18, 6, 0.7)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);
    canvas.refresh();
  }
  const img = scene.add.image(scene.scale.width / 2, scene.scale.height / 2, PAINT.vignette);
  img.setScrollFactor(0).setDepth(40).setAlpha(0.92);
  img.setDisplaySize(scene.scale.width, scene.scale.height);
  return img;
}

const PATH_TILES = [104, 153, 125, 84];
const TUX_COLS = 23;
const TUX_STEP = 34;

/** אריחי חול/אבן מתוך ערכת Tuxemon, בגוון של כל שלב */
export function drawPathTexture(
  scene: Phaser.Scene,
  pathCells: Set<string>,
  cellProgress: Map<string, number>,
  phaseAt: (index: number) => PhaseId,
): void {
  if (!scene.textures.exists(PAINT.tuxemon)) return;
  if (scene.textures.exists('path-baked')) scene.textures.remove('path-baked');
  const canvas = scene.textures.createCanvas('path-baked', WORLD.width, WORLD.height);
  const src = scene.textures.get(PAINT.tuxemon).getSourceImage() as CanvasImageSource | null;
  if (!canvas || !src) return;

  const tints: Record<PhaseId, [number, number, number]> = {
    'he-ar': [1.08, 0.96, 0.74],
    basic: [0.74, 0.88, 1.14],
    gemara: [1.12, 0.88, 0.64],
  };
  const phases: PhaseId[] = ['he-ar', 'basic', 'gemara'];
  const off = document.createElement('canvas');
  off.width = 32 * PATH_TILES.length * phases.length;
  off.height = 32;
  const octx = off.getContext('2d');
  if (!octx) return;

  phases.forEach((phase, pi) => {
    const [tr, tg, tb] = tints[phase];
    PATH_TILES.forEach((idx, ti) => {
      const col = idx % TUX_COLS;
      const row = Math.floor(idx / TUX_COLS);
      const tmp = document.createElement('canvas');
      tmp.width = 32;
      tmp.height = 32;
      const tctx = tmp.getContext('2d');
      if (!tctx) return;
      tctx.drawImage(src, 1 + col * TUX_STEP, 1 + row * TUX_STEP, 32, 32, 0, 0, 32, 32);
      const data = tctx.getImageData(0, 0, 32, 32);
      const d = data.data;
      for (let i = 0; i < d.length; i += 4) {
        d[i] = Math.min(255, d[i] * tr);
        d[i + 1] = Math.min(255, d[i + 1] * tg);
        d[i + 2] = Math.min(255, d[i + 2] * tb);
      }
      tctx.putImageData(data, 0, 0);
      octx.drawImage(tmp, (pi * PATH_TILES.length + ti) * 32, 0);
    });
  });

  const ctx = canvas.context;
  const phaseSlot: Record<PhaseId, number> = { 'he-ar': 0, basic: 1, gemara: 2 };
  ctx.clearRect(0, 0, WORLD.width, WORLD.height);
  for (const cell of pathCells) {
    const [tx, ty] = cell.split(',').map(Number);
    const phase = phaseAt(cellProgress.get(cell) ?? 0);
    const variant = Math.abs(tx * 3 + ty) % PATH_TILES.length;
    const sx = (phaseSlot[phase] * PATH_TILES.length + variant) * 32;
    ctx.globalAlpha = 0.94;
    ctx.drawImage(off, sx, 0, 32, 32, tx * TILE_SIZE, ty * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = '#3a2814';
    ctx.fillRect(tx * TILE_SIZE, ty * TILE_SIZE + TILE_SIZE - 3, TILE_SIZE, 3);
  }
  canvas.refresh();
  scene.add.image(WORLD.width / 2, WORLD.height / 2, 'path-baked').setDepth(2);
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
  const tint = phase === 'gemara' ? 0xf6c56b : phase === 'basic' ? 0x9ec5ff : 0xfde68a;
  for (let i = 0; i < 18; i++) {
    const a = (Math.PI * 2 * i) / 18;
    const img = scene.add.image(x, y, PAINT.spark).setDepth(14).setTint(i % 3 === 0 ? 0xfff4c4 : tint);
    scene.tweens.add({
      targets: img,
      x: x + Math.cos(a) * (30 + (i % 4) * 12),
      y: y + Math.sin(a) * (24 + (i % 3) * 8) - 18,
      alpha: 0,
      scale: 0.2,
      duration: 680,
      ease: 'Cubic.easeOut',
      onComplete: () => img.destroy(),
    });
  }
}

const MOTE_TINT: Record<PhaseId, number> = {
  'he-ar': 0xf6e27a,
  basic: 0x9ec8ff,
  gemara: 0xffc56b,
};

export interface MapAmbience {
  update(delta: number, phase: PhaseId, moving: boolean, x: number, y: number): void;
  resize(): void;
}

/** אבק הליכה, גחליליות, ועלים בקצה המסך. בריכה קבועה — בלי יצירה בכל פריים. */
export function startAmbience(scene: Phaser.Scene): MapAmbience {
  ensureSpark(scene);
  ensureLeaf(scene);

  const dust = Array.from({ length: 12 }, () => {
    const img = scene.add.image(0, 0, PAINT.spark).setVisible(false).setDepth(9).setTint(0xd9c4a0).setScale(0.45);
    return { img, life: 0 };
  });
  let dustAcc = 0;
  let dustCursor = 0;

  const motes = Array.from({ length: 16 }, (_, i) => {
    const img = scene.add.image(0, 0, PAINT.spark).setScrollFactor(0).setDepth(35).setScale(0.28 + (i % 3) * 0.08);
    return { img, seed: i * 1.7, speed: 0.35 + (i % 5) * 0.12 };
  });

  const h = () => scene.scale.height;
  const w = () => scene.scale.width;
  const left = scene.add.tileSprite(0, 0, 78, h(), PAINT.leaf).setOrigin(0, 0).setScrollFactor(0).setDepth(12).setAlpha(0.42);
  const right = scene.add.tileSprite(w() - 78, 0, 78, h(), PAINT.leaf).setOrigin(0, 0).setScrollFactor(0).setDepth(12).setAlpha(0.42);

  return {
    resize() {
      left.setSize(78, h());
      right.setSize(78, h());
      right.setX(w() - 78);
    },
    update(delta, phase, moving, x, y) {
      left.tilePositionY -= delta * 0.018;
      right.tilePositionY += delta * 0.014;
      const tint = MOTE_TINT[phase];
      const time = scene.time.now;
      motes.forEach((m, i) => {
        const px = ((Math.sin(time * 0.00035 * m.speed + m.seed) * 0.5 + 0.5) * w());
        const py = ((time * 0.02 * m.speed + m.seed * 80) % (h() + 40)) - 20;
        const drift = i % 2 === 0 ? px : w() - px;
        m.img.setPosition(drift, py).setTint(tint).setAlpha(0.35 + (i % 4) * 0.1);
      });

      for (const d of dust) {
        if (d.life <= 0) continue;
        d.life -= delta;
        d.img.setAlpha(Math.max(0, d.life / 420));
        d.img.y -= delta * 0.02;
        if (d.life <= 0) d.img.setVisible(false);
      }
      if (!moving) return;
      dustAcc += delta;
      if (dustAcc < 64) return;
      dustAcc = 0;
      const d = dust[dustCursor];
      dustCursor = (dustCursor + 1) % dust.length;
      d.life = 420;
      d.img
        .setPosition(x + (dustCursor % 5) - 2, y - 2)
        .setVisible(true)
        .setAlpha(0.55)
        .setScale(0.35)
        .setTint(tint);
    },
  };
}
