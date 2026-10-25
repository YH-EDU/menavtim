import Phaser from 'phaser';
import type { PhaseId } from '../../data/types';

const SPARK = 'paint-spark';

function ensureSpark(scene: Phaser.Scene): void {
  if (scene.textures.exists(SPARK)) return;
  const g = scene.add.graphics();
  g.fillStyle(0xffe08a, 1);
  g.fillCircle(8, 8, 7);
  g.fillStyle(0xfff6dc, 1);
  g.fillCircle(8, 8, 3);
  g.generateTexture(SPARK, 16, 16);
  g.destroy();
}

/** ניצוצות קצרים בסיום תחנה — בלי שכבות אטמוספירה על המפה. */
export function burstAt(scene: Phaser.Scene, x: number, y: number, phase: PhaseId): void {
  ensureSpark(scene);
  const tint = phase === 'gemara' ? 0xf6c56b : phase === 'basic' ? 0x9ec5ff : 0xfde68a;
  for (let i = 0; i < 12; i++) {
    const a = (Math.PI * 2 * i) / 12;
    const img = scene.add.image(x, y, SPARK).setDepth(14).setTint(i % 3 === 0 ? 0xfff4c4 : tint);
    scene.tweens.add({
      targets: img,
      x: x + Math.cos(a) * (26 + (i % 3) * 10),
      y: y + Math.sin(a) * (20 + (i % 2) * 8) - 14,
      alpha: 0,
      scale: 0.2,
      duration: 520,
      ease: 'Cubic.easeOut',
      onComplete: () => img.destroy(),
    });
  }
}
