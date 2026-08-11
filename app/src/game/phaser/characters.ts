/** Character catalog — CC0 sprite packs with walk animations. */

import { asset } from '../../lib/basePath';
import { ASSET } from './keys';

import { avatarStorageKey } from '../../lib/playStorage';

export const LS_AVATAR = 'aramit_avatar';
export const AVATAR_BASE = asset('/avatars').replace(/\/$/, '');

export type CharacterId =
  | 'misa'
  | 'knight'
  | 'fox'
  | 'cat'
  | 'robot'
  | 'horse'
  | 'car'
  | 'rocket';

export type AnimMode = 'fourDir' | 'toonSide' | 'rotate' | 'rocket';

export interface CharacterDef {
  id: CharacterId;
  nameHe: string;
  emoji: string;
  mode: AnimMode;
  /** Phaser texture / atlas key */
  textureKey: string;
  atlas?: { png: string; json: string };
  scale: number;
  body: { w: number; h: number; ox: number; oy: number };
  origin: { x: number; y: number };
  preview: string;
  taglineHe: string;
}

const ATLAS = `${AVATAR_BASE}/atlas`;
const PREV = `${AVATAR_BASE}/previews`;

/** Car body + wheel textures (Kenney Racing Pack) */
export const CAR_BODY_KEY = 'avatar-car-body';
export const CAR_WHEEL_KEYS = ['avatar-car-wheel-a', 'avatar-car-wheel-b'] as const;

/** Wheel anchor offsets (unrotated car, front = up). */
export const CAR_WHEEL_OFFSETS = [
  { x: -24, y: -38 },
  { x: 24, y: -38 },
  { x: -24, y: 32 },
  { x: 24, y: 32 },
] as const;

/** Target on-screen height ≈ 44px (Misa reference). */
export const CHARACTERS: CharacterDef[] = [
  {
    id: 'knight',
    nameHe: 'אביר',
    emoji: '⚔️',
    mode: 'fourDir',
    textureKey: 'avatar-knight',
    atlas: { png: `${ATLAS}/knight/atlas.png`, json: `${ATLAS}/knight/atlas.json` },
    scale: 0.72,
    body: { w: 14, h: 20, ox: 9, oy: 14 },
    origin: { x: 0.5, y: 0.92 },
    preview: `${PREV}/knight.png`,
    taglineHe: 'אביר אמיץ עם חרב ומגן — קדימה!',
  },
  {
    id: 'misa',
    nameHe: 'חנה',
    emoji: '👧',
    mode: 'fourDir',
    textureKey: ASSET.playerAtlas,
    scale: 1,
    body: { w: 20, h: 28, ox: 6, oy: 28 },
    origin: { x: 0.5, y: 1 },
    preview: `${PREV}/misa.png`,
    taglineHe: 'חכמה ואמיצה — שותפה מעולה למסע!',
  },
  {
    id: 'fox',
    nameHe: 'שועל',
    emoji: '🦊',
    mode: 'fourDir',
    textureKey: 'avatar-fox',
    atlas: { png: `${ATLAS}/fox/atlas.png`, json: `${ATLAS}/fox/atlas.json` },
    scale: 1.0,
    body: { w: 18, h: 24, ox: 9, oy: 20 },
    origin: { x: 0.5, y: 0.92 },
    preview: `${PREV}/fox.png`,
    taglineHe: 'שועל זריז עם זנב פושי — וואו!',
  },
  {
    id: 'cat',
    nameHe: 'נמר',
    emoji: '🐆',
    mode: 'fourDir',
    textureKey: 'avatar-cat',
    atlas: { png: `${ATLAS}/cat/atlas.png`, json: `${ATLAS}/cat/atlas.json` },
    scale: 1.58,
    body: { w: 20, h: 26, ox: 6, oy: 14 },
    origin: { x: 0.5, y: 0.88 },
    preview: `${PREV}/cat.png`,
    taglineHe: 'חתול חמוד וגדול — מייאו!',
  },
  {
    id: 'robot',
    nameHe: 'רובוט',
    emoji: '🤖',
    mode: 'toonSide',
    textureKey: 'avatar-robot',
    atlas: { png: `${ATLAS}/robot/atlas.png`, json: `${ATLAS}/robot/atlas.json` },
    scale: 0.42,
    body: { w: 18, h: 24, ox: 13, oy: 22 },
    origin: { x: 0.5, y: 0.95 },
    preview: `${PREV}/robot.png`,
    taglineHe: 'רובוט חמוד מברזל — ביפ ביפ!',
  },
  {
    id: 'horse',
    nameHe: 'חד־קרן',
    emoji: '🦄',
    mode: 'fourDir',
    textureKey: 'avatar-horse',
    atlas: { png: `${ATLAS}/horse/atlas.png`, json: `${ATLAS}/horse/atlas.json` },
    scale: 0.58,
    /** 128×128 LPC frames — feet-aligned hitbox (was top-left, blocked maze exit). */
    body: { w: 22, h: 26, ox: 53, oy: 98 },
    origin: { x: 0.5, y: 0.88 },
    preview: `${PREV}/horse.png`,
    taglineHe: 'חד־קרן לבן קסום — דה-דה-דה!',
  },
  {
    id: 'car',
    nameHe: 'מכונית',
    emoji: '🚗',
    mode: 'rotate',
    textureKey: CAR_BODY_KEY,
    scale: 0.34,
    body: { w: 28, h: 38, ox: 19, oy: 28 },
    origin: { x: 0.5, y: 0.55 },
    preview: `${PREV}/car.png`,
    taglineHe: 'מכונית כחולה עם גלגלים מסתובבים!',
  },
  {
    id: 'rocket',
    nameHe: 'חללית',
    emoji: '🛸',
    mode: 'rocket',
    textureKey: 'avatar-rocket-ship',
    scale: 0.55,
    body: { w: 26, h: 34, ox: 23, oy: 24 },
    origin: { x: 0.5, y: 0.55 },
    preview: `${PREV}/rocket.png`,
    taglineHe: 'חללית כחולה עם להבות — צאו לחלל!',
  },
];

const DEFAULT_CHARACTER: CharacterId = 'knight';

const LEGACY_IDS = new Set(['spaceship', 'soccer', 'penguin', 'dog']);

export function getCharacterDef(id: string | null | undefined): CharacterDef {
  if (id && LEGACY_IDS.has(id)) id = DEFAULT_CHARACTER;
  return CHARACTERS.find((c) => c.id === id) ?? CHARACTERS.find((c) => c.id === DEFAULT_CHARACTER)!;
}

export function getSelectedAvatar(): CharacterId {
  if (typeof sessionStorage === 'undefined') return DEFAULT_CHARACTER;
  const raw = sessionStorage.getItem(LS_AVATAR);
  if (raw && LEGACY_IDS.has(raw)) return DEFAULT_CHARACTER;
  if (raw && CHARACTERS.some((c) => c.id === raw)) return raw as CharacterId;
  return DEFAULT_CHARACTER;
}

export function saveSelectedAvatar(
  id: CharacterId,
  identity?: { nickname: string; emoji: string },
): void {
  sessionStorage.setItem(LS_AVATAR, id);
  if (identity?.nickname && identity.emoji) {
    try {
      localStorage.setItem(avatarStorageKey(identity.nickname, identity.emoji), id);
    } catch {
      /* ignore */
    }
  }
}

/** טוען דמות שמורה לשחקן ומפעיל אותה בסשן הנוכחי (או מנקה אם אין) */
export function activateAvatarForIdentity(nickname: string, emoji: string): CharacterId | null {
  try {
    const raw = localStorage.getItem(avatarStorageKey(nickname, emoji));
    if (raw && !LEGACY_IDS.has(raw) && CHARACTERS.some((c) => c.id === raw)) {
      sessionStorage.setItem(LS_AVATAR, raw);
      return raw as CharacterId;
    }
  } catch {
    /* ignore */
  }
  sessionStorage.removeItem(LS_AVATAR);
  return null;
}

export function hasSelectedAvatar(): boolean {
  if (typeof sessionStorage === 'undefined') return false;
  const raw = sessionStorage.getItem(LS_AVATAR);
  if (!raw || LEGACY_IDS.has(raw)) return false;
  return CHARACTERS.some((c) => c.id === raw);
}

/** Rocket fire frame keys */
export const ROCKET_FIRE_KEYS = Array.from({ length: 20 }, (_, i) =>
  `avatar-rocket-fire${String(i).padStart(2, '0')}`,
);

/** Call from BootScene.preload */
export function preloadAvatarAssets(scene: {
  load: {
    atlas: (key: string, png: string, json: string) => void;
    image: (key: string, url: string) => void;
  };
}): void {
  for (const c of CHARACTERS) {
    if (c.atlas) {
      scene.load.atlas(c.textureKey, c.atlas.png, c.atlas.json);
    }
  }

  const carBase = `${ATLAS}/car`;
  scene.load.image(CAR_BODY_KEY, `${carBase}/body.png`);
  scene.load.image(CAR_WHEEL_KEYS[0], `${carBase}/wheel_a.png`);
  scene.load.image(CAR_WHEEL_KEYS[1], `${carBase}/wheel_b.png`);

  const rocketBase = `${ATLAS}/rocket`;
  scene.load.image('avatar-rocket-ship', `${rocketBase}/ship.png`);
  for (let i = 0; i < 20; i++) {
    const n = String(i).padStart(2, '0');
    scene.load.image(`avatar-rocket-fire${n}`, `${rocketBase}/fire${n}.png`);
  }
}

/** Misa-specific frame names (phaser-rpg atlas) */
export const MISA = {
  idle: { down: 'misa-front', up: 'misa-back', left: 'misa-left', right: 'misa-right' },
  walkPrefix: { down: 'misa-front-walk.', up: 'misa-back-walk.', left: 'misa-left-walk.', right: 'misa-right-walk.' },
} as const;

/** Knight has dedicated left-facing frames (Shield Maiden atlas). */
export const KNIGHT_FLIP_LEFT = false;

/** fourDir atlas frame helpers */
export function fourDirIdleFrame(dir: string): string {
  return `${dir}-idle`;
}

export function fourDirWalkFrames(dir: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `${dir}-${String(i).padStart(3, '0')}`);
}

/** Walk frame counts per fourDir character */
export const FOUR_DIR_WALK_COUNT: Partial<Record<CharacterId, number>> = {
  knight: 4,
  fox: 3,
  cat: 3,
  horse: 6,
};
