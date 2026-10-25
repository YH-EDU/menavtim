import Phaser from 'phaser';

import { preloadAvatarAssets } from './characters';
import { generateMapTileset } from './mapTiles';
import { ASSET, SCENE } from './keys';

import type { MainSceneData } from './MainScene';

export class BootScene extends Phaser.Scene {
  constructor() {
    super(SCENE.boot);
  }

  preload() {
    this.load.atlas(ASSET.playerAtlas, ASSET.playerAtlasImage, ASSET.playerAtlasJson);
    preloadAvatarAssets(this);
  }

  create() {
    generateMapTileset(this, ASSET.mapTileset);

    const data = this.registry.get('mainData') as MainSceneData;
    this.scene.start(SCENE.main, data);
  }
}
