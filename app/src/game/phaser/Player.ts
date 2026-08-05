import Phaser from 'phaser';

import {
  CAR_BODY_KEY,
  CAR_WHEEL_KEYS,
  CAR_WHEEL_OFFSETS,
  FOUR_DIR_WALK_COUNT,
  MISA,
  ROCKET_FIRE_KEYS,
  fourDirIdleFrame,
  fourDirWalkFrames,
  getCharacterDef,
  getSelectedAvatar,
  type CharacterDef,
  type CharacterId,
} from './characters';

const WALK_SPEED = 120;

type Facing = 'down' | 'up' | 'left' | 'right';
type Keys = Record<'w' | 'a' | 's' | 'd' | 'up' | 'left' | 'down' | 'right', Phaser.Input.Keyboard.Key>;

const winKeys = { up: false, down: false, left: false, right: false };
let winKeysBound = false;

function bindWindowKeys() {
  if (winKeysBound || typeof window === 'undefined') return;
  winKeysBound = true;
  const map: Record<string, keyof typeof winKeys> = {
    ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
    w: 'up', W: 'up', s: 'down', S: 'down', a: 'left', A: 'left', d: 'right', D: 'right',
  };
  window.addEventListener('keydown', (e) => {
    const k = map[e.key];
    if (k) { winKeys[k] = true; e.preventDefault(); }
  });
  window.addEventListener('keyup', (e) => {
    const k = map[e.key];
    if (k) winKeys[k] = false;
  });
  window.addEventListener('blur', () => {
    winKeys.up = winKeys.down = winKeys.left = winKeys.right = false;
  });
}

export function clearWinKeys() {
  winKeys.up = winKeys.down = winKeys.left = winKeys.right = false;
}

export class Player extends Phaser.Physics.Arcade.Sprite {
  declare body: Phaser.Physics.Arcade.Body;

  cursors!: Keys;
  private readonly def: CharacterDef;
  private facing: Facing = 'down';
  moveTarget: Phaser.Math.Vector2 | null = null;
  private readonly arriveDist = 8;
  hasMoved = false;
  dpad = { up: false, down: false, left: false, right: false };

  private fireSprite: Phaser.GameObjects.Sprite | null = null;
  private fireSprite2: Phaser.GameObjects.Sprite | null = null;
  private fireFrame = 0;
  private fireTimer = 0;

  private wheelSprites: Phaser.GameObjects.Sprite[] = [];
  private wheelSpinAngle = 0;

  private hornGfx: Phaser.GameObjects.Graphics | null = null;

  /** toonSide (Kenney Toon): last horizontal flip for walk_side */
  private toonLastFlipX = false;

  constructor(scene: Phaser.Scene, x: number, y: number, characterId?: CharacterId) {
    const def = getCharacterDef(characterId ?? getSelectedAvatar());
    const frame = Player.initialFrame(def);
    super(scene, x, y, def.textureKey, frame);

    this.def = def;
    bindWindowKeys();

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setDepth(10);
    this.setScale(def.scale);
    this.setOrigin(def.origin.x, def.origin.y);
    this.applyBodySize();
    this.setCollideWorldBounds(true);
    scene.cameras.main.startFollow(this, true, 0.12, 0.12);

    const kb = scene.input.keyboard;
    if (kb) {
      kb.enabled = true;
      this.cursors = kb.addKeys('w,a,s,d,up,left,down,right') as Keys;
    } else {
      this.cursors = {} as Keys;
    }

    this.createAnims();
    this.setIdlePose();

    if (def.mode === 'rocket') {
      const fireScale = def.scale * 1.9;
      this.fireSprite = scene.add.sprite(x, y, ROCKET_FIRE_KEYS[0]);
      this.fireSprite.setDepth(9);
      this.fireSprite.setScale(fireScale);
      this.fireSprite.setBlendMode(Phaser.BlendModes.ADD);
      this.fireSprite.setVisible(false);

      this.fireSprite2 = scene.add.sprite(x, y, ROCKET_FIRE_KEYS[10]);
      this.fireSprite2.setDepth(8);
      this.fireSprite2.setScale(fireScale * 0.75);
      this.fireSprite2.setAlpha(0.85);
      this.fireSprite2.setBlendMode(Phaser.BlendModes.ADD);
      this.fireSprite2.setVisible(false);
    }

    if (def.id === 'car') {
      const wheelScale = def.scale * 0.34;
      for (let i = 0; i < 4; i++) {
        const w = scene.add.sprite(x, y, CAR_WHEEL_KEYS[0]);
        w.setDepth(9);
        w.setScale(wheelScale);
        w.setVisible(true);
        this.wheelSprites.push(w);
      }
    }

    if (def.id === 'horse') {
      this.hornGfx = scene.add.graphics();
      this.hornGfx.setDepth(this.depth + 1);
    }
  }

  private static initialFrame(def: CharacterDef): string | undefined {
    switch (def.mode) {
      case 'fourDir':
        return def.id === 'misa' ? MISA.idle.down : fourDirIdleFrame('down');
      case 'toonSide':
        return 'idle';
      case 'rotate':
      case 'rocket':
        return undefined;
    }
  }

  private applyBodySize() {
    const { w, h, ox, oy } = this.def.body;
    this.setSize(w, h).setOffset(ox, oy);
  }

  private animKey(suffix: string): string {
    return `${this.def.id}_${suffix}`;
  }

  private ensureAnim(
    key: string,
    frames: Phaser.Types.Animations.AnimationFrame[],
    rate = 8,
    force = false,
  ) {
    const { anims } = this.scene;
    if (anims.exists(key)) {
      if (!force) return;
      anims.remove(key);
    }
    anims.create({ key, frames, frameRate: rate, repeat: -1 });
  }

  private createAnims(force = false) {
    const { anims } = this.scene;
    const mk = (key: string, frameNames: string[], rate = 8) => {
      this.ensureAnim(
        key,
        frameNames.map((f) => ({ key: this.def.textureKey, frame: f })),
        rate,
        force,
      );
    };

    if (this.def.mode === 'fourDir') {
      const dirs: Facing[] = ['down', 'up', 'left', 'right'];
      for (const dir of dirs) {
        if (this.def.id === 'misa') {
          const prefix = MISA.walkPrefix[dir];
          const walkKey = this.animKey(`walk_${dir}`);
          const frames = anims.generateFrameNames(this.def.textureKey, { prefix, start: 0, end: 3, zeroPad: 3 });
          this.ensureAnim(walkKey, frames, 8, force);
        } else {
          const count = FOUR_DIR_WALK_COUNT[this.def.id] ?? 4;
          mk(this.animKey(`walk_${dir}`), fourDirWalkFrames(dir, count), 10);
        }
      }
    } else if (this.def.mode === 'toonSide') {
      mk(this.animKey('walk_side'), ['walk0', 'walk1', 'walk2', 'walk3', 'walk4', 'walk5', 'walk6', 'walk7'], 12);
    }
  }

  /** Re-register walk anims and reset idle pose after scene remount / resume. */
  refreshAnimationState() {
    this.createAnims(true);
    this.setIdlePose();
  }

  setMoveTarget(x: number, y: number) {
    this.moveTarget = new Phaser.Math.Vector2(x, y);
  }

  clearMoveTarget() {
    this.moveTarget = null;
  }

  private keyDown(dir: Facing): boolean {
    const c = this.cursors;
    const phaser =
      dir === 'up' ? c.up?.isDown || c.w?.isDown
        : dir === 'down' ? c.down?.isDown || c.s?.isDown
          : dir === 'left' ? c.left?.isDown || c.a?.isDown
            : c.right?.isDown || c.d?.isDown;
    return !!(phaser || winKeys[dir] || this.dpad[dir]);
  }

  /** Face the player toward a world point (used after mission resume). */
  faceToward(faceX: number, faceY: number) {
    const dx = faceX - this.x;
    const dy = faceY - this.y;
    if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
    const facing =
      this.def.mode === 'toonSide'
        ? this.facingFromAxesToonSide(dx, dy)
        : this.facingFromAxes(dx, dy);
    this.facing = facing;
    if (this.def.mode === 'toonSide') {
      if (facing === 'left') this.toonLastFlipX = true;
      else if (facing === 'right') this.toonLastFlipX = false;
    }
    this.setIdlePose();
  }

  /** Raw -1/0/1 input from keys / dpad (before velocity normalize). */
  private inputVector(): { x: number; y: number } {
    let x = 0;
    let y = 0;
    if (this.keyDown('left')) x -= 1;
    if (this.keyDown('right')) x += 1;
    if (this.keyDown('up')) y -= 1;
    if (this.keyDown('down')) y += 1;
    return { x, y };
  }

  /** Top-down facing: dominant axis; tie → vertical (north/south). */
  private facingFromAxes(vx: number, vy: number): Facing {
    const ax = Math.abs(vx);
    const ay = Math.abs(vy);
    if (ax > ay) return vx < 0 ? 'left' : 'right';
    if (ay > ax) return vy < 0 ? 'up' : 'down';
    if (vy < 0) return 'up';
    if (vy > 0) return 'down';
    if (vx < 0) return 'left';
    if (vx > 0) return 'right';
    return this.facing;
  }

  /** Immediate left/right from keys (Misa-style), before velocity fallback. */
  private resolveToonSideFacing(
    input: { x: number; y: number },
    vx: number,
    vy: number,
    moving: boolean,
    prevVelocity: Phaser.Math.Vector2,
  ): Facing {
    const left = this.keyDown('left');
    const right = this.keyDown('right');
    if (left && !right) return 'left';
    if (right && !left) return 'right';
    if (input.x !== 0 || input.y !== 0) return this.facingFromAxesToonSide(input.x, input.y);
    if (moving) return this.facingFromAxesToonSide(vx, vy);
    if (prevVelocity.lengthSq() > 0) return this.facingFromAxesToonSide(prevVelocity.x, prevVelocity.y);
    return this.facing;
  }

  /** Record horizontal facing from keys before velocity / anim (flip applied after play). */
  private applyToonHorizontalFlipFromKeys() {
    const left = this.keyDown('left');
    const right = this.keyDown('right');
    if (left && !right) {
      this.toonLastFlipX = true;
    } else if (right && !left) {
      this.toonLastFlipX = false;
    }
  }

  /**
   * Side-view toon sheets: on diagonal tie prefer horizontal so walk loop
   * keeps playing instead of snapping to back/front.
   */
  private facingFromAxesToonSide(vx: number, vy: number): Facing {
    const ax = Math.abs(vx);
    const ay = Math.abs(vy);
    if (ax > ay) return vx < 0 ? 'left' : 'right';
    if (ay > ax) return vy < 0 ? 'up' : 'down';
    if (vx !== 0) return vx < 0 ? 'left' : 'right';
    if (vy < 0) return 'up';
    if (vy > 0) return 'down';
    return this.facing;
  }

  private resolveFacing(
    input: { x: number; y: number },
    vx: number,
    vy: number,
    moving: boolean,
    prevVelocity: Phaser.Math.Vector2,
  ): Facing {
    if (input.x !== 0 || input.y !== 0) return this.facingFromAxes(input.x, input.y);
    if (moving) return this.facingFromAxes(vx, vy);
    if (prevVelocity.lengthSq() > 0) return this.facingFromAxes(prevVelocity.x, prevVelocity.y);
    return this.facing;
  }

  private setIdlePose() {
    this.anims.stop();
    this.setAngle(0);

    switch (this.def.mode) {
      case 'fourDir': {
        this.setFlipX(false);
        const idle = this.def.id === 'misa' ? MISA.idle[this.facing] : fourDirIdleFrame(this.facing);
        this.setTexture(this.def.textureKey, idle);
        break;
      }
      case 'toonSide': {
        const idleFrame =
          this.facing === 'up' ? 'back'
            : this.facing === 'down' ? 'down'
              : 'idle';
        this.setTexture(this.def.textureKey, idleFrame);
        if (this.facing === 'left' || this.facing === 'right') {
          this.setFlipX(this.toonLastFlipX);
        } else {
          this.setFlipX(false);
        }
        this.setScale(this.def.scale);
        break;
      }
      case 'rotate':
        this.setFlipX(false);
        this.setTexture(this.def.id === 'car' ? CAR_BODY_KEY : this.def.textureKey);
        if (this.def.id === 'car') this.syncCarWheels(false);
        break;
      case 'rocket':
        this.setFlipX(false);
        this.setTexture(this.def.textureKey);
        if (this.fireSprite) this.fireSprite.setVisible(false);
        if (this.fireSprite2) this.fireSprite2.setVisible(false);
        break;
    }
  }

  clearInputState() {
    clearWinKeys();
    this.dpad.up = this.dpad.down = this.dpad.left = this.dpad.right = false;
    this.clearMoveTarget();
    this.body.setVelocity(0);
    this.setIdlePose();
  }

  rebindKeys() {
    const kb = this.scene.input.keyboard;
    if (!kb) return;
    kb.enabled = true;
    kb.clearCaptures();
    this.cursors = kb.addKeys('w,a,s,d,up,left,down,right') as Keys;
  }

  private playWalkAnim(key: string) {
    if (!this.scene.anims.exists(key)) this.createAnims();
    const alreadyPlaying = this.anims.currentAnim?.key === key && this.anims.isPlaying;
    this.anims.play(key, alreadyPlaying);
  }

  private updateFourDir(moving: boolean, facing: Facing) {
    this.facing = facing;
    this.setFlipX(false);
    if (moving) {
      this.playWalkAnim(this.animKey(`walk_${facing}`));
    } else {
      this.setIdlePose();
    }
  }

  private updateToonSide(moving: boolean, facing: Facing) {
    this.facing = facing;
    const s = this.def.scale;

    // Keys update toonLastFlipX in update(); click-to-move uses resolved facing.
    if (!this.keyDown('left') && !this.keyDown('right')) {
      if (facing === 'left') this.toonLastFlipX = true;
      else if (facing === 'right') this.toonLastFlipX = false;
    }

    if (!moving) {
      this.setIdlePose();
      return;
    }

    this.playWalkAnim(this.animKey('walk_side'));
    this.setFlipX(this.toonLastFlipX);
    this.setScale(s);
  }

  private syncCarWheels(moving: boolean, carAngle = 0, delta = 0) {
    if (this.wheelSprites.length === 0) return;

    const rad = Phaser.Math.DegToRad(carAngle);
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const s = this.def.scale;

    if (moving) {
      this.wheelSpinAngle += delta * 0.55;
    } else {
      this.wheelSpinAngle = 0;
    }

    const wheelScale = this.def.scale * 0.34;
    const pulse = moving ? 1 + 0.07 * Math.sin(this.wheelSpinAngle * 0.12) : 1;
    for (let i = 0; i < this.wheelSprites.length; i++) {
      const off = CAR_WHEEL_OFFSETS[i];
      const lx = off.x * s;
      const ly = off.y * s;
      const wx = this.x + lx * cos - ly * sin;
      const wy = this.y + lx * sin + ly * cos;
      const w = this.wheelSprites[i];
      w.setPosition(wx, wy);
      w.setTexture(CAR_WHEEL_KEYS[0]);
      w.setScale(wheelScale * pulse);
      w.setAngle(moving ? this.wheelSpinAngle : 0);
      w.setVisible(true);
      w.setDepth(this.depth - 1);
    }
  }

  private updateRotate(moving: boolean, vx: number, vy: number, _delta: number) {
    if (moving) {
      const angle = Phaser.Math.RadToDeg(Math.atan2(vy, vx)) + 90;
      this.setAngle(angle);
    } else {
      this.setAngle(0);
    }
  }

  private updateRocket(moving: boolean, vx: number, vy: number, delta: number) {
    if (moving) {
      const angle = Phaser.Math.RadToDeg(Math.atan2(vy, vx)) + 90;
      this.setAngle(angle);
      const rad = Phaser.Math.DegToRad(angle - 90);
      const off = 34 * this.def.scale;
      const fx = this.x - Math.cos(rad) * off;
      const fy = this.y - Math.sin(rad) * off;

      this.fireTimer += delta;
      if (this.fireTimer >= 35) {
        this.fireTimer = 0;
        this.fireFrame = (this.fireFrame + 1) % ROCKET_FIRE_KEYS.length;
      }

      if (this.fireSprite) {
        this.fireSprite.setVisible(true);
        this.fireSprite.setPosition(fx, fy);
        this.fireSprite.setAngle(angle);
        this.fireSprite.setTexture(ROCKET_FIRE_KEYS[this.fireFrame]);
      }
      if (this.fireSprite2) {
        const off2 = off * 0.72;
        this.fireSprite2.setVisible(true);
        this.fireSprite2.setPosition(
          this.x - Math.cos(rad) * off2,
          this.y - Math.sin(rad) * off2,
        );
        this.fireSprite2.setAngle(angle);
        this.fireSprite2.setTexture(
          ROCKET_FIRE_KEYS[(this.fireFrame + 10) % ROCKET_FIRE_KEYS.length],
        );
      }
    } else {
      this.setAngle(0);
      if (this.fireSprite) this.fireSprite.setVisible(false);
      if (this.fireSprite2) this.fireSprite2.setVisible(false);
    }
  }

  private updateUnicornHorn() {
    if (this.def.id !== 'horse' || !this.hornGfx) return;

    const g = this.hornGfx;
    g.clear();

    const s = this.def.scale;
    let ox = 0;
    let oy = -34 * s;
    let hornW = 5 * s;

    switch (this.facing) {
      case 'left':
        ox = -14 * s;
        oy = -28 * s;
        break;
      case 'right':
        ox = 14 * s;
        oy = -28 * s;
        break;
      case 'up':
        ox = 0;
        oy = -38 * s;
        hornW = 4 * s;
        break;
      case 'down':
        ox = 0;
        oy = -30 * s;
        break;
    }

    const tipX = this.x + ox;
    const tipY = this.y + oy;
    const baseY = tipY + 10 * s;
    const half = hornW / 2;

    g.fillStyle(0xfff8e7, 1);
    g.fillTriangle(tipX, tipY, tipX - half, baseY, tipX + half, baseY);
    g.lineStyle(Math.max(1, s), 0xe8d5b7, 1);
    g.strokeTriangle(tipX, tipY, tipX - half, baseY, tipX + half, baseY);
    g.setDepth(this.depth + 1);
  }

  update(_time: number, delta: number) {
    const { body } = this;
    const prevVelocity = body.velocity.clone();

    body.setVelocity(0);

    const input = this.inputVector();
    if (this.def.mode === 'toonSide') {
      this.applyToonHorizontalFlipFromKeys();
    }
    const kbActive = input.x !== 0 || input.y !== 0;

    if (kbActive) {
      this.moveTarget = null;
      if (input.x < 0) body.setVelocityX(-WALK_SPEED);
      else if (input.x > 0) body.setVelocityX(WALK_SPEED);
      if (input.y < 0) body.setVelocityY(-WALK_SPEED);
      else if (input.y > 0) body.setVelocityY(WALK_SPEED);
    } else if (this.moveTarget) {
      const dx = this.moveTarget.x - this.x;
      const dy = this.moveTarget.y - this.y;
      const dist = Math.hypot(dx, dy);
      if (dist < this.arriveDist) {
        this.moveTarget = null;
      } else {
        body.setVelocity((dx / dist) * WALK_SPEED, (dy / dist) * WALK_SPEED);
      }
    }

    if (body.velocity.lengthSq() > 0) {
      body.velocity.normalize().scale(WALK_SPEED);
      this.hasMoved = true;
    }

    const moving = body.velocity.lengthSq() > 0;
    const vx = body.velocity.x;
    const vy = body.velocity.y;
    const facing =
      this.def.mode === 'toonSide'
        ? this.resolveToonSideFacing(input, vx, vy, moving, prevVelocity)
        : this.resolveFacing(input, vx, vy, moving, prevVelocity);

    switch (this.def.mode) {
      case 'fourDir':
        this.updateFourDir(moving, facing);
        break;
      case 'toonSide':
        this.updateToonSide(moving, facing);
        break;
      case 'rotate':
        this.updateRotate(moving, vx, vy, delta);
        break;
      case 'rocket':
        this.updateRocket(moving, vx, vy, delta);
        break;
    }

    if (this.fireSprite?.visible) {
      this.fireSprite.setDepth(this.depth - 1);
    }
    if (this.fireSprite2?.visible) {
      this.fireSprite2.setDepth(this.depth - 2);
    }
    if (this.def.id === 'car' && this.wheelSprites.length > 0) {
      const moving = body.velocity.lengthSq() > 0;
      this.syncCarWheels(moving, this.angle, delta);
    }
    if (this.def.id === 'horse') {
      this.updateUnicornHorn();
    }
  }

  destroy(fromScene?: boolean) {
    this.hornGfx?.destroy(fromScene);
    this.hornGfx = null;
    this.fireSprite?.destroy(fromScene);
    this.fireSprite = null;
    this.fireSprite2?.destroy(fromScene);
    this.fireSprite2 = null;
    for (const w of this.wheelSprites) w.destroy(fromScene);
    this.wheelSprites = [];
    super.destroy(fromScene);
  }
}
