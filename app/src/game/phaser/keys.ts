import { asset } from '../../lib/basePath';
import { PAINT, paintImagePaths } from './phaseVisuals';

export const SCENE = {
  boot: 'Boot',
  main: 'Main',
} as const;

export const ASSET = {
  mapTileset: 'map-tileset',
  mapTilesetName: 'map-solid-colors',
  playerAtlas: 'player-atlas',
  playerAtlasImage: asset('/phaser-rpg/atlas/atlas.png'),
  playerAtlasJson: asset('/phaser-rpg/atlas/atlas.json'),
  paintWorld: asset(paintImagePaths()[PAINT.world]),
  paintBridge: asset(paintImagePaths()[PAINT.bridge]),
  paintVine: asset(paintImagePaths()[PAINT.vine]),
} as const;

export const LAYER = {
  world: 'World',
} as const;
