import Phaser from 'phaser';
import type { ProgressData } from '../../lib/api';
import { CHARACTERS } from './characters';
import { BootScene } from './BootScene';
import { MainScene, type OnMissionInteract } from './MainScene';
import { clearWinKeys } from './Player';
import { OVERLAY_BRIDGE_KEY, type JourneyOverlayBridge } from './overlayBridge';
import { SCENE } from './keys';

export interface JourneyGameOptions {
  parent: HTMLElement;
  progress: ProgressData;
  onInteract: OnMissionInteract;
  overlayBridge?: JourneyOverlayBridge;
}

function focusGameCanvas(game: Phaser.Game) {
  const canvas = game.canvas as HTMLCanvasElement | null;
  if (!canvas) return;
  canvas.setAttribute('tabindex', '0');
  canvas.style.outline = 'none';
  canvas.focus({ preventScroll: true });
}

function refreshMainSceneInput(game: Phaser.Game) {
  const main = game.scene.getScene(SCENE.main);
  if (main && 'onSceneActive' in main) {
    (main as unknown as MainScene).onSceneActive();
  }
}

export function createJourneyGame(opts: JourneyGameOptions): Phaser.Game {
  clearWinKeys();

  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: opts.parent,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#6faf4a',
    physics: {
      default: 'arcade',
      arcade: { debug: false },
    },
    input: {
      keyboard: {
        target: window,
      },
    },
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: window.innerWidth,
      height: window.innerHeight,
    },
    scene: [BootScene, MainScene],
  });

  game.registry.set('mainData', {
    progress: opts.progress,
    onInteract: opts.onInteract,
  } satisfies { progress: ProgressData; onInteract: OnMissionInteract });

  if (opts.overlayBridge) {
    game.registry.set(OVERLAY_BRIDGE_KEY, opts.overlayBridge);
  }

  game.events.once('ready', () => {
    focusGameCanvas(game);
    requestAnimationFrame(() => {
      focusGameCanvas(game);
      refreshMainSceneInput(game);
    });
  });

  return game;
}

export function pauseJourneyGame(game: Phaser.Game | null) {
  if (!game) return;
  clearWinKeys();
  game.scene.pause(SCENE.main);
}

export function resumeJourneyGame(game: Phaser.Game | null) {
  if (!game) return;
  clearWinKeys();
  game.scene.resume(SCENE.main);
  focusGameCanvas(game);
  requestAnimationFrame(() => {
    focusGameCanvas(game);
    refreshMainSceneInput(game);
  });
}

function clearAvatarWalkAnims(game: Phaser.Game) {
  const anims = game.anims;
  for (const c of CHARACTERS) {
    if (c.mode === 'fourDir') {
      for (const dir of ['down', 'up', 'left', 'right'] as const) {
        const key = `${c.id}_walk_${dir}`;
        if (anims.exists(key)) anims.remove(key);
      }
    } else if (c.mode === 'toonSide') {
      const key = `${c.id}_walk_side`;
      if (anims.exists(key)) anims.remove(key);
    }
  }
}

export function destroyJourneyGame(game: Phaser.Game | null) {
  if (!game) return;
  clearWinKeys();
  clearAvatarWalkAnims(game);
  game.destroy(true);
}
