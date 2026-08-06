import Phaser from 'phaser';
import type { ProgressData } from '../../lib/api';
import { UNIT_COLORS } from '../../lib/pathLayout';

import { ASSET, LAYER, SCENE } from './keys';

import {
  buildJourneyPath,
  COLORS,
  computeResumePosition,
  type GoalMarker,
  type JourneyPath,
  MAP_HEIGHT,
  MAP_WIDTH,
  TILE,
  TILE_SIZE,
  WORLD,
} from './journeyMap';

import { drawSolidColorMap, tileGid, tileIndexForCell } from './mapTiles';

import { Player } from './Player';

import { missionPlacement, PHASER_MISSIONS } from './stations';

import { computeJourneyTotals } from '../../lib/journeyTotals';

import { resolveRestorePosition, savePhaserPlayerState } from './playerState';

import {
  OVERLAY_BRIDGE_KEY,
  type JourneyOverlayBridge,
  type JourneyOverlaySync,
  type StationScreenState,
  type UnitLabelScreenState,
} from './overlayBridge';

export type OnMissionInteract = (unitId: string, activityId: string) => void;

export interface MainSceneData {
  progress: ProgressData;
  onInteract: OnMissionInteract;
}

interface StationZone {
  activityId: string;
  unitId: string;
  unitIndex: number;
  unitTitle: string;
  type: string;
  label: string;
  idx: number;
  zone: Phaser.GameObjects.Zone;
  worldX: number;
  worldY: number;
  unlocked: boolean;
  completed: boolean;
  inside: boolean;
}

const SPAWN_GRACE_MS = 1800;

function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export class MainScene extends Phaser.Scene {
  private player!: Player;
  private worldLayer!: Phaser.Tilemaps.TilemapLayer;
  private stations: StationZone[] = [];
  private unitLabels: { unitIndex: number; unitTitle: string; color: string; worldX: number; worldY: number }[] = [];
  private progress!: ProgressData;
  private onInteract!: OnMissionInteract;
  private hintText!: Phaser.GameObjects.Text;
  private lastTouchId: string | null = null;
  private touchCooldown = 0;
  private currentIdx = -1;
  private spawnGrace = SPAWN_GRACE_MS;
  private goalZone!: Phaser.GameObjects.Zone;
  private goalWorld = { x: 0, y: 0 };
  private goalMarker!: GoalMarker;
  private pathCells!: Set<string>;
  private lastValidPos = { x: 0, y: 0 };
  private journeyPath!: JourneyPath;
  private dpadButtons: Phaser.GameObjects.Text[] = [];
  private touchPointerId: number | null = null;
  private touchStartX = 0;
  private touchStartY = 0;
  private touchDragging = false;

  constructor() {
    super(SCENE.main);
  }

  init(data: MainSceneData) {
    this.progress = data.progress;
    this.onInteract = data.onInteract;
  }

  create() {
    this.ensureKeyboardFocus();

    const placement = missionPlacement();
    const journey = buildJourneyPath(PHASER_MISSIONS.length, {
      counts: placement.counts,
      unitTitles: placement.unitTitles,
      unitColors: UNIT_COLORS,
    });
    this.journeyPath = journey;

    this.add
      .rectangle(WORLD.width / 2, WORLD.height / 2, WORLD.width, WORLD.height, COLORS.background)
      .setDepth(0);

    const map = this.make.tilemap({
      tileWidth: TILE_SIZE,
      tileHeight: TILE_SIZE,
      width: MAP_WIDTH,
      height: MAP_HEIGHT,
    });
    // Phaser 4: 7th arg is firstgid (not tileCount). Use 1 so tileGid(0..2) -> GIDs 1..3.
    const tileset = map.addTilesetImage(ASSET.mapTilesetName, ASSET.mapTileset, TILE_SIZE, TILE_SIZE, 0, 0, 1)!;

    this.worldLayer = map.createBlankLayer(LAYER.world, tileset, 0, 0)!;

    for (let ty = 0; ty < MAP_HEIGHT; ty++) {
      for (let tx = 0; tx < MAP_WIDTH; tx++) {
        const idx = tileIndexForCell(
          tx,
          ty,
          journey.pathCells,
          journey.wallCells,
          journey.hiddenWallCells,
        );
        this.worldLayer.putTileAt(tileGid(idx), tx, ty);
      }
    }

    this.worldLayer.setCollision(
      [tileGid(TILE.wall), tileGid(TILE.background)],
      true,
      true,
    );
    this.worldLayer.setCollision([tileGid(TILE.path)], false, true);
    this.worldLayer.setVisible(false);

    drawSolidColorMap(this, journey.pathCells, journey.wallCells, 1, journey.hiddenWallCells, journey.grassPlazas);

    this.pathCells = journey.pathCells;

    this.drawMazeGate(journey.mazeEntrance, 1);
    this.drawMazeGate(journey.mazeExit, 1);
    this.drawGoalMarker(journey.goalMarker);

    this.goalMarker = journey.goalMarker;
    this.goalWorld = { x: journey.goalMarker.doorCell.px, y: journey.goalMarker.doorCell.py };
    this.goalZone = this.add.zone(this.goalWorld.x, this.goalWorld.y, 72, 72);
    this.physics.add.existing(this.goalZone, true);
    (this.goalZone.body as Phaser.Physics.Arcade.StaticBody).setCircle(34);
    this.goalZone.setDepth(6);

    this.physics.world.setBounds(0, 0, WORLD.width, WORLD.height);
    this.cameras.main.setBounds(0, 0, WORLD.width, WORLD.height);
    const vw = this.scale.width;
    const touch = isTouchDevice();
    const zoom = touch
      ? Phaser.Math.Clamp(vw / 340, 1.12, 1.48)
      : Phaser.Math.Clamp(vw / 520, 1.35, 1.55);
    this.cameras.main.setZoom(zoom);

    const stationPositions = PHASER_MISSIONS.map((m, idx) => ({
      activityId: m.activityId,
      px: journey.stations[idx].px,
      py: journey.stations[idx].py,
    }));
    const restored = resolveRestorePosition(
      stationPositions,
      journey.stationCenterlineIndices,
      journey.centerline,
      this.progress,
    );
    const startX = restored?.x ?? journey.spawn.px;
    const startY = restored?.y ?? journey.spawn.py;

    this.player = new Player(this, startX, startY);
    this.physics.add.collider(this.player, this.worldLayer);
    this.lastValidPos = { x: startX, y: startY };

    if (restored?.faceX != null && restored.faceY != null) {
      this.player.faceToward(restored.faceX, restored.faceY);
    }

    if (restored) {
      this.player.hasMoved = true;
      this.spawnGrace = SPAWN_GRACE_MS;
    }

    this.player.clearInputState();
    this.player.rebindKeys();

    this.unitLabels = journey.unitBoundaries.map((b) => ({
      unitIndex: b.unitIndex,
      unitTitle: b.unitTitle,
      color: b.color,
      worldX: b.point.px,
      worldY: b.point.py,
    }));

    PHASER_MISSIONS.forEach((m, idx) => {
      const pt = journey.stations[idx];
      this.stations.push(this.createStation(m, idx, pt.px, pt.py));
    });

    this.hintText = this.add
      .text(this.scale.width / 2, this.scale.height - (isTouchDevice() ? 56 : 28), '', {
        fontFamily: 'Arial, sans-serif',
        fontSize: isTouchDevice() ? '13px' : '14px',
        color: '#fff6dc',
        backgroundColor: 'rgba(60,40,20,0.72)',
        padding: { x: 12, y: 6 },
      })
      .setScrollFactor(0)
      .setDepth(100)
      .setOrigin(0.5);

    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      this.ensureKeyboardFocus();
      if (isTouchDevice()) return;
      if (!this.progress.freeNav) return;
      const world = this.cameras.main.getWorldPoint(pointer.x, pointer.y);
      this.player.setMoveTarget(world.x, world.y);
    });

    if (isTouchDevice()) {
      this.setupTouchControls();
    } else {
      this.createDpad();
    }
    this.scale.on('resize', () => {
      if (!isTouchDevice()) this.repositionDpad();
      const w = this.scale.width;
      const z = isTouchDevice()
        ? Phaser.Math.Clamp(w / 340, 1.12, 1.48)
        : Phaser.Math.Clamp(w / 520, 1.35, 1.55);
      this.cameras.main.setZoom(z);
      this.repositionHint();
    });
    this.updateCurrentIdx();
    this.updateHint();

    this.cameras.main.scrollY = Math.max(0, startY - this.scale.height * 0.55);

    this.events.on('wake', () => this.onSceneActive());
    this.events.on('resume', () => this.onSceneActive());
    this.onSceneActive();
  }

  /** Tile-aligned fence posts at maze gates — matches corridor fence elsewhere. */
  private drawMazeGate(gate: { tx: number; ty: number }, lane: 1 | -1) {
    const gfx = this.add.graphics().setDepth(3);
    const txA = gate.tx;
    const txB = gate.tx + lane;
    const leftPathTx = Math.min(txA, txB);
    const rightPathTx = Math.max(txA, txB);
    const gateW = (rightPathTx - leftPathTx + 1) * TILE_SIZE;
    const x = leftPathTx * TILE_SIZE;
    const y = (gate.ty - 1) * TILE_SIZE;
    const postH = TILE_SIZE * 2.5;

    gfx.fillStyle(COLORS.wallDark, 1);
    gfx.fillRect(x - TILE_SIZE, y, TILE_SIZE, postH);
    gfx.fillRect(x + gateW, y, TILE_SIZE, postH);
    gfx.fillStyle(COLORS.wall, 1);
    gfx.fillRect(x - TILE_SIZE, y - TILE_SIZE * 0.18, TILE_SIZE, TILE_SIZE * 0.22);
    gfx.fillRect(x + gateW, y - TILE_SIZE * 0.18, TILE_SIZE, TILE_SIZE * 0.22);

    gfx.fillStyle(COLORS.goalAccent, 0.88);
    gfx.fillRect(x - TILE_SIZE + 2, y - TILE_SIZE * 0.14, gateW + TILE_SIZE * 2 - 4, TILE_SIZE * 0.16);
  }

  private drawGoalMarker(marker: GoalMarker) {
    const gfx = this.add.graphics().setDepth(2);
    const { body, roof, door, windows, approachPath } = marker;

    gfx.fillStyle(COLORS.path, 0.45);
    gfx.fillRect(approachPath.x, approachPath.y, approachPath.w, approachPath.h);

    gfx.fillStyle(COLORS.goalStone, 1);
    gfx.fillRect(body.x, body.y, body.w, body.h);
    gfx.fillStyle(COLORS.goalStoneDark, 0.35);
    gfx.fillRect(body.x, body.y + body.h - TILE_SIZE * 0.35, body.w, TILE_SIZE * 0.35);

    gfx.fillStyle(COLORS.goalRoof, 1);
    gfx.fillTriangle(
      roof.x,
      roof.y + roof.h,
      roof.x + roof.w / 2,
      roof.y,
      roof.x + roof.w,
      roof.y + roof.h,
    );
    gfx.fillStyle(COLORS.goalTrim, 1);
    gfx.fillRect(roof.x, roof.y + roof.h - 4, roof.w, 4);

    for (const win of windows) {
      gfx.fillStyle(COLORS.goalWindow, 1);
      gfx.fillRect(win.x, win.y, win.w, win.h);
      gfx.lineStyle(2, COLORS.goalWood, 0.85);
      gfx.strokeRect(win.x, win.y, win.w, win.h);
    }

    gfx.fillStyle(COLORS.goalWood, 1);
    gfx.fillRect(door.x, door.y, door.w, door.h);
    gfx.fillStyle(COLORS.goalAccent, 0.9);
    gfx.fillCircle(door.x + door.w * 0.82, door.y + door.h * 0.55, 3.5);
  }

  onSceneActive() {
    this.player?.refreshAnimationState();
    this.player?.clearInputState();
    this.player?.rebindKeys();
    this.ensureKeyboardFocus();
    requestAnimationFrame(() => this.ensureKeyboardFocus());
  }

  private getOverlayBridge(): JourneyOverlayBridge | undefined {
    const fromRegistry = this.registry.get(OVERLAY_BRIDGE_KEY) as JourneyOverlayBridge | undefined;
    if (fromRegistry) return fromRegistry;
    const w = window as Window & { __journeyOverlayBridge?: JourneyOverlayBridge };
    return w.__journeyOverlayBridge;
  }

  private worldToScreen(worldX: number, worldY: number): { x: number; y: number } {
    const cam = this.cameras.main;
    const { x: wx, y: wy, width: ww, height: wh } = cam.worldView;
    return {
      x: ((worldX - wx) / ww) * cam.width,
      y: ((worldY - wy) / wh) * cam.height,
    };
  }

  private syncOverlay() {
    const bridge = this.getOverlayBridge();
    if (!bridge) return;

    const stations: StationScreenState[] = this.stations.map((s) => {
      const screen = this.worldToScreen(s.worldX, s.worldY);
      return {
        activityId: s.activityId,
        unitId: s.unitId,
        unitIndex: s.unitIndex,
        unitTitle: s.unitTitle,
        type: s.type,
        label: s.label,
        idx: s.idx,
        screenX: screen.x,
        screenY: screen.y,
        unlocked: s.unlocked,
        completed: s.completed,
        isCurrent: s.idx === this.currentIdx,
      };
    });

    const unitLabels: UnitLabelScreenState[] = this.unitLabels.map((u) => {
      const screen = this.worldToScreen(u.worldX, u.worldY);
      return { ...u, screenX: screen.x, screenY: screen.y };
    });

    const allComplete = this.stations.every((s) => s.completed);
    const nearGoal =
      Phaser.Math.Distance.Between(this.player.x, this.player.y, this.goalWorld.x, this.goalWorld.y) < 56;
    const { approachPath } = this.goalMarker;
    const stageX = approachPath.x + approachPath.w / 2;
    const stageY = approachPath.y + approachPath.h * 0.42;
    const goalScreen = this.worldToScreen(stageX, stageY);
    const showMedal = nearGoal && (allComplete || this.currentIdx < 0);

    bridge.onSync({
      stations,
      unitLabels,
      progress: this.progress,
      goalMedal: showMedal
        ? {
            screenX: goalScreen.x,
            screenY: goalScreen.y,
            visible: true,
            totals: computeJourneyTotals(this.progress),
            allComplete,
          }
        : null,
    });
  }

  private ensureKeyboardFocus() {
    const kb = this.input.keyboard;
    if (kb) kb.enabled = true;
    const canvas = this.game.canvas as HTMLCanvasElement | null;
    if (canvas) {
      canvas.setAttribute('tabindex', '0');
      canvas.style.outline = 'none';
      canvas.focus({ preventScroll: true });
    }
  }

  private missionUnlocked(idx: number): boolean {
    if (this.progress.freeNav) return true;
    if (idx === 0) return true;
    return !!this.progress.completed[PHASER_MISSIONS[idx - 1].activityId];
  }

  private createStation(
    m: (typeof PHASER_MISSIONS)[0],
    idx: number,
    x: number,
    y: number,
  ): StationZone {
    const unlocked = this.missionUnlocked(idx);
    const completed = !!this.progress.completed[m.activityId];

    const zone = this.add.zone(x, y, 62, 62);
    this.physics.add.existing(zone, true);
    (zone.body as Phaser.Physics.Arcade.StaticBody).setCircle(30);
    zone.setDepth(7);

    const stationRef: StationZone = {
      activityId: m.activityId,
      unitId: m.unitId,
      unitIndex: m.unitIndex,
      unitTitle: m.unitTitle,
      type: m.type,
      label: m.label,
      idx,
      zone,
      worldX: x,
      worldY: y,
      unlocked,
      completed,
      inside: false,
    };

    this.physics.add.overlap(
      this.player,
      zone,
      () => this.handleStationOverlap(stationRef),
      undefined,
      this,
    );

    return stationRef;
  }

  private handleStationOverlap(station: StationZone) {
    const wasInside = station.inside;
    station.inside = true;

    if (!station.unlocked || station.completed) return;
    if (this.touchCooldown > 0) return;
    if (this.lastTouchId === station.activityId) return;
    if (this.spawnGrace > 0) return;
    if (!this.player.hasMoved) return;
    if (wasInside) return;

    this.lastTouchId = station.activityId;
    this.openMission(station.unitId, station.activityId);
  }

  private openMission(unitId: string, activityId: string) {
    savePhaserPlayerState(this.player.x, this.player.y, activityId);
    this.player.clearInputState();
    this.touchCooldown = 800;
    this.onInteract(unitId, activityId);
  }

  private createDpad() {
    this.dpadButtons.forEach((b) => b.destroy());
    this.dpadButtons = [];

    const pad = 12;
    const gap = 34;
    const fontSize = '20px';
    const safeBottom = 12;
    const cx = pad + gap;
    const cy = this.scale.height - safeBottom - gap * 2;

    const mkBtn = (x: number, y: number, label: string, dir: 'up' | 'down' | 'left' | 'right') => {
      const btn = this.add
        .text(x, y, label, {
          fontSize,
          color: '#4a3416',
          backgroundColor: 'rgba(255,254,247,0.94)',
          padding: { x: 10, y: 6 },
        })
        .setScrollFactor(0)
        .setDepth(100)
        .setInteractive({ useHandCursor: true });

      btn.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
        pointer.event.stopPropagation();
        this.ensureKeyboardFocus();
        this.player.stopAutoRun();
        this.player.dpad[dir] = true;
        this.player.clearMoveTarget();
      });
      btn.on('pointerup', () => {
        this.player.dpad[dir] = false;
      });
      btn.on('pointerout', () => {
        this.player.dpad[dir] = false;
      });
      this.dpadButtons.push(btn);
    };

    mkBtn(cx, cy - gap, '▲', 'up');
    mkBtn(cx - gap, cy, '◀', 'left');
    mkBtn(cx + gap, cy, '▶', 'right');
    mkBtn(cx, cy + gap, '▼', 'down');
  }

  private repositionDpad() {
    if (this.dpadButtons.length !== 4) return;
    const pad = 12;
    const gap = 34;
    const safeBottom = 12;
    const cx = pad + gap;
    const cy = this.scale.height - safeBottom - gap * 2;
    const positions = [
      { x: cx, y: cy - gap },
      { x: cx - gap, y: cy },
      { x: cx + gap, y: cy },
      { x: cx, y: cy + gap },
    ];
    this.dpadButtons.forEach((btn, i) => btn.setPosition(positions[i].x, positions[i].y));
  }

  /** Reserve top/side chrome for React HUD buttons — movement swipes ignored here. */
  private inUiChromeZone(x: number, y: number): boolean {
    const w = this.scale.width;
    const h = this.scale.height;
    const topBand = 118;
    const sidePad = 12;
    const fabSize = 46;
    const fabGap = 8;
    const fabCols = 5;
    const leftFabW = sidePad + fabCols * fabSize + (fabCols - 1) * fabGap + 16;
    const rightHudW = Math.min(w * 0.62, 280);
    if (y < topBand && x < leftFabW) return true;
    if (y < topBand + 56 && x > w - rightHudW - sidePad) return true;
    if (y > h - 72 && x < 220) return true;
    if (y > h - 72 && x > w - 120) return true;
    return false;
  }

  private setupTouchControls() {
    const DRAG_THRESHOLD = 14;

    const endTouch = (wasDrag: boolean) => {
      this.touchPointerId = null;
      if (!wasDrag) {
        if (this.player.autoRun) {
          this.player.stopAutoRun();
          this.player.body.setVelocity(0);
        } else {
          this.player.startAutoRun();
        }
      }
      this.touchDragging = false;
    };

    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      if (this.inUiChromeZone(pointer.x, pointer.y)) return;
      this.touchPointerId = pointer.id;
      this.touchStartX = pointer.x;
      this.touchStartY = pointer.y;
      this.touchDragging = false;
    });

    this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      if (pointer.id !== this.touchPointerId) return;

      const dx = pointer.x - this.touchStartX;
      const dy = pointer.y - this.touchStartY;
      const dist = Math.hypot(dx, dy);

      if (dist >= DRAG_THRESHOLD) {
        this.touchDragging = true;
        this.player.setRunDirection(dx, dy);
      }
    });

    this.input.on('pointerup', (pointer: Phaser.Input.Pointer) => {
      if (pointer.id !== this.touchPointerId) return;
      endTouch(this.touchDragging);
    });

    this.input.on('pointerupoutside', (pointer: Phaser.Input.Pointer) => {
      if (pointer.id !== this.touchPointerId) return;
      endTouch(this.touchDragging);
    });

    this.input.on('pointercancel', (pointer: Phaser.Input.Pointer) => {
      if (pointer.id !== this.touchPointerId) return;
      endTouch(this.touchDragging);
    });
  }

  private repositionHint() {
    if (!this.hintText) return;
    const bottomInset = isTouchDevice() ? 56 : 28;
    this.hintText.setY(this.scale.height - bottomInset);
  }

  update(_time: number, delta: number) {
    this.player.update(_time, delta);
    this.enforcePathOnly();

    if (this.spawnGrace > 0) this.spawnGrace -= delta;
    if (this.touchCooldown > 0) this.touchCooldown -= delta;
    else this.lastTouchId = null;

    for (const s of this.stations) {
      if (!this.physics.overlap(this.player, s.zone)) {
        s.inside = false;
      }
    }

    this.syncOverlay();
  }

  private tileKey(tx: number, ty: number): string {
    return `${tx},${ty}`;
  }

  private isWalkableWorld(x: number, y: number): boolean {
    const tx = Math.floor(x / TILE_SIZE);
    const ty = Math.floor(y / TILE_SIZE);
    return this.pathCells.has(this.tileKey(tx, ty));
  }

  /** Keep physics body center on gray path tiles — never on green fence/background. */
  private enforcePathOnly() {
    const { x, y } = this.player;
    const halfW = Math.max(6, (this.player.body.width * 0.35));
    const feetY = y - 1;
    const samples = [
      { x, y: feetY },
      { x: x - halfW, y: feetY },
      { x: x + halfW, y: feetY },
    ];

    const onPath = samples.every((p) => this.isWalkableWorld(p.x, p.y));
    if (onPath) {
      this.lastValidPos = { x, y };
      return;
    }

    this.player.setPosition(this.lastValidPos.x, this.lastValidPos.y);
    this.player.body.setVelocity(0);
    this.player.clearMoveTarget();
  }

  private updateCurrentIdx() {
    this.currentIdx = this.stations.findIndex((s) => s.unlocked && !s.completed);
  }

  private updateHint() {
    const free = this.progress.freeNav;
    const next = this.stations.find((s) => s.unlocked && !s.completed);
    if (isTouchDevice()) {
      this.hintText.setText(
        free
          ? '📱 הקישו להתחיל/לעצור · גררו לכיוון'
          : next
            ? `▶ ${next.idx + 1}. ${next.label} — הקישו לריצה · גררו לכיוון`
            : '🏆 סיימתם את כל המסע!',
      );
    } else if (free) {
      this.hintText.setText('🔓 חצים / WASD · לחיצה לתנועה · לחיצה על תחנה לפתיחה');
    } else if (next) {
      this.hintText.setText(`▶ ${next.idx + 1}. ${next.label} — הלכו אל התחנה הזוהרת`);
    } else {
      this.hintText.setText('🏆 סיימתם את כל המסע!');
    }
  }

  refreshProgress(progress: ProgressData) {
    const prevCompleted = { ...this.progress.completed };
    this.progress = progress;

    this.stations.forEach((s) => {
      s.unlocked = this.missionUnlocked(s.idx);
      s.completed = !!progress.completed[s.activityId];
    });

    const atStation = this.stations.find(
      (s) => Phaser.Math.Distance.Between(this.player.x, this.player.y, s.worldX, s.worldY) < 72,
    );
    if (
      atStation &&
      !prevCompleted[atStation.activityId] &&
      progress.completed[atStation.activityId]
    ) {
      const clIdx = this.journeyPath.stationCenterlineIndices[atStation.idx];
      if (clIdx != null) {
        let faceIdx: number | undefined;
        for (let i = atStation.idx + 1; i < this.stations.length; i++) {
          if (this.missionUnlocked(i) && !progress.completed[this.stations[i].activityId]) {
            faceIdx = this.journeyPath.stationCenterlineIndices[i];
            break;
          }
        }
        const resume = computeResumePosition(this.journeyPath.centerline, clIdx, faceIdx);
        this.player.setPosition(resume.x, resume.y);
        this.player.faceToward(resume.faceX, resume.faceY);
        this.player.hasMoved = true;
        this.spawnGrace = SPAWN_GRACE_MS;
        this.lastValidPos = { x: resume.x, y: resume.y };
      }
    }

    this.updateCurrentIdx();
    this.updateHint();
    this.syncOverlay();
  }
}
