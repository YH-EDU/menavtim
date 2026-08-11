import Phaser from 'phaser';
import type { MapPosition, ProgressData } from '../../lib/api';
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
  onSaveMapPos?: (pos: MapPosition) => void;
  /** לשמירת מיקום/פוקוס לפי שחקן — מונע דליפה בין משתמשים */
  playerIdentity?: { nickname: string; emoji: string };
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

  const parent = opts.parent;
  const w = Math.max(1, Math.round(parent.clientWidth || window.innerWidth));
  const h = Math.max(1, Math.round(parent.clientHeight || window.innerHeight));

  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: w,
    height: h,
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
      width: w,
      height: h,
    },
    scene: [BootScene, MainScene],
  });

  game.registry.set('mainData', {
    progress: opts.progress,
    onInteract: opts.onInteract,
    onSaveMapPos: opts.onSaveMapPos,
    playerIdentity: opts.playerIdentity,
  } satisfies {
    progress: ProgressData;
    onInteract: OnMissionInteract;
    onSaveMapPos?: (pos: MapPosition) => void;
    playerIdentity?: { nickname: string; emoji: string };
  });

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

export function captureJourneyPlayerPosition(game: Phaser.Game | null): MapPosition | null {
  if (!game) return null;
  const main = game.scene.getScene(SCENE.main);
  if (main && 'getMapPosition' in main) {
    return (main as MainScene).getMapPosition();
  }
  return null;
}

export function destroyJourneyGame(game: Phaser.Game | null) {
  if (!game) return;
  clearWinKeys();
  clearAvatarWalkAnims(game);
  game.destroy(true);
}
