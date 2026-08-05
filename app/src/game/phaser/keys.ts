import { asset } from '../../lib/basePath';

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
} as const;

export const LAYER = {
  world: 'World',
} as const;
