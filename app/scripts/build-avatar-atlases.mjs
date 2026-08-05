/**
 * Build Phaser atlas JSON + clean single-frame preview PNGs.
 * Run: node scripts/build-avatar-atlases.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.join(__dirname, '..');
const DL = path.join(APP, 'public/avatars/_downloads');
const OUT = path.join(APP, 'public/avatars/atlas');
const PREV = path.join(APP, 'public/avatars/previews');

const PREVIEW_H = 64;

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function runPs(script) {
  const tmp = path.join(APP, 'scripts', `_avatar-ps-${process.pid}.ps1`);
  fs.writeFileSync(tmp, script, 'utf8');
  try {
    execSync(`powershell -NoProfile -ExecutionPolicy Bypass -File "${tmp}"`, { stdio: 'inherit' });
  } finally {
    try { fs.unlinkSync(tmp); } catch { /* ignore */ }
  }
}

function writeAtlas(dir, imageName, frames, size) {
  ensureDir(dir);
  const pngSrc = frames.__pngSrc;
  delete frames.__pngSrc;
  fs.copyFileSync(pngSrc, path.join(dir, imageName));
  const atlas = {
    frames: Object.fromEntries(
      Object.entries(frames).map(([name, f]) => [
        name,
        {
          frame: { x: f.x, y: f.y, w: f.w, h: f.h },
          rotated: false,
          trimmed: false,
          spriteSourceSize: { x: 0, y: 0, w: f.w, h: f.h },
          sourceSize: { w: f.w, h: f.h },
        },
      ]),
    ),
    meta: {
      app: 'build-avatar-atlases',
      version: '1.0',
      image: imageName,
      format: 'RGBA8888',
      size: { w: size.w, h: size.h },
      scale: '1',
    },
  };
  fs.writeFileSync(path.join(dir, 'atlas.json'), JSON.stringify(atlas, null, 2));
}

function gridAtlas(name, pngSrc, cellW, cellH, layout) {
  const frames = { __pngSrc: pngSrc };
  for (const row of layout) {
    const count = row.frames ?? 3;
    for (let i = 0; i < count; i++) {
      frames[`${row.dir}-${String(i).padStart(3, '0')}`] = {
        x: i * cellW,
        y: row.row * cellH,
        w: cellW,
        h: cellH,
      };
    }
    if (row.idle) {
      frames[`${row.dir}-idle`] = {
        x: (row.idleCol ?? 0) * cellW,
        y: row.row * cellH,
        w: cellW,
        h: cellH,
      };
    }
  }
  const cols = Math.max(...layout.flatMap((r) => Array.from({ length: r.frames ?? 3 }, (_, i) => i + 1)));
  const rows = Math.max(...layout.map((r) => r.row)) + 1;
  writeAtlas(path.join(OUT, name), 'atlas.png', frames, { w: cols * cellW, h: rows * cellH });
}

/** Shield Maiden — Sevarihk / OGA, 128×256, 32×64 cells, 4 frames × 4 dirs */
function knightAtlas() {
  gridAtlas(
    'knight',
    path.join(DL, 'shieldMaiden/npc-nordic-shieldmaiden1.png'),
    32,
    64,
    [
      { dir: 'down', row: 0, frames: 4, idle: true, idleCol: 0 },
      { dir: 'left', row: 1, frames: 4, idle: true, idleCol: 0 },
      { dir: 'right', row: 2, frames: 4, idle: true, idleCol: 0 },
      { dir: 'up', row: 3, frames: 4, idle: true, idleCol: 0 },
    ],
  );
}

function starlingToPhaser(name, xmlPath, pngSrc) {
  const xml = fs.readFileSync(xmlPath, 'utf8');
  const frames = { __pngSrc: pngSrc };
  let maxX = 0;
  let maxY = 0;
  for (const m of xml.matchAll(/<SubTexture name="([^"]+)" x="(\d+)" y="(\d+)" width="(\d+)" height="(\d+)"/g)) {
    const [, n, x, y, w, h] = m;
    frames[n] = { x: +x, y: +y, w: +w, h: +h };
    maxX = Math.max(maxX, +x + +w);
    maxY = Math.max(maxY, +y + +h);
  }
  writeAtlas(path.join(OUT, name), 'atlas.png', frames, { w: maxX, h: maxY });
}

/** Kenney Toon Characters — CC0 cute bipedal robot (side walk + flipX) */
function robotAtlas() {
  const base = path.join(DL, 'toonCharactersFull/Robot/Tilesheet');
  starlingToPhaser(
    'robot',
    path.join(base, 'character_robot_sheet.xml'),
    path.join(base, 'character_robot_sheet.png'),
  );
}

/** LPC Horse Extended — 128×128, 6 walk frames × 4 dirs (white unicorn base) */
function horseAtlas() {
  const walkSrc = path.join(
    DL,
    'lpcHorseExt/LPC Horse Extended/Horse/Horse Walk White.png',
  );
  gridAtlas('horse', walkSrc, 128, 128, [
    { dir: 'up', row: 0, frames: 6, idle: true, idleCol: 0 },
    { dir: 'left', row: 1, frames: 6, idle: true, idleCol: 0 },
    { dir: 'down', row: 2, frames: 6, idle: true, idleCol: 0 },
    { dir: 'right', row: 3, frames: 6, idle: true, idleCol: 0 },
  ]);
}

/** Kenney Racing Pack — top-down blue car body + CC0 tire wheels (spin in game) */
function carAssets() {
  const dir = path.join(OUT, 'car');
  ensureDir(dir);
  fs.copyFileSync(
    path.join(DL, 'racing-pack/PNG/Cars/car_blue_3.png'),
    path.join(dir, 'body.png'),
  );
  fs.copyFileSync(
    path.join(DL, 'racing-pack/PNG/Objects/tires_white.png'),
    path.join(dir, 'wheel_a.png'),
  );
  fs.copyFileSync(
    path.join(DL, 'racing-pack/PNG/Objects/tires_red.png'),
    path.join(dir, 'wheel_b.png'),
  );
}

function foxAtlas() {
  gridAtlas('fox', path.join(DL, 'fox/PNG/48x64/fox-SWEN.png'), 48, 64, [
    { dir: 'down', row: 0, frames: 3, idle: true, idleCol: 1 },
    { dir: 'left', row: 1, frames: 3, idle: true, idleCol: 1 },
    { dir: 'right', row: 2, frames: 3, idle: true, idleCol: 1 },
    { dir: 'up', row: 3, frames: 3, idle: true, idleCol: 1 },
  ]);
}

function catAtlas() {
  gridAtlas('cat', path.join(DL, 'catsRework/PNG/cat_orange-32x48.png'), 32, 48, [
    { dir: 'up', row: 0, frames: 3, idle: true, idleCol: 1 },
    { dir: 'right', row: 1, frames: 3, idle: true, idleCol: 1 },
    { dir: 'down', row: 2, frames: 3, idle: true, idleCol: 1 },
    { dir: 'left', row: 3, frames: 3, idle: true, idleCol: 1 },
  ]);
}

function rocketAssets() {
  const dir = path.join(OUT, 'rocket');
  ensureDir(dir);
  fs.copyFileSync(
    path.join(DL, 'spaceFull/PNG/playerShip2_blue.png'),
    path.join(dir, 'ship.png'),
  );
  for (let i = 0; i < 20; i++) {
    const n = String(i).padStart(2, '0');
    fs.copyFileSync(
      path.join(DL, `spaceFull/PNG/Effects/fire${n}.png`),
      path.join(dir, `fire${n}.png`),
    );
  }
}

function buildPreviewFromAtlas(atlasPng, atlasJson, frameName, outPath, targetH = PREVIEW_H) {
  runPs(`
Add-Type -AssemblyName System.Drawing
$json = Get-Content '${atlasJson.replace(/'/g, "''")}' -Raw | ConvertFrom-Json
$f = $json.frames.'${frameName}'.frame
$src = [System.Drawing.Image]::FromFile('${atlasPng.replace(/'/g, "''")}')
$scale = ${targetH}.0 / $f.h
$w = [Math]::Max(1, [int][Math]::Round($f.w * $scale))
$h = [Math]::Max(1, [int][Math]::Round($f.h * $scale))
$bmp = New-Object System.Drawing.Bitmap $w, $h
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::Half
$srcRect = New-Object System.Drawing.Rectangle($f.x, $f.y, $f.w, $f.h)
$dstRect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$g.DrawImage($src, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$bmp.Save('${outPath.replace(/'/g, "''")}', [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose(); $src.Dispose()
`);
}

function buildPreviewFromImage(srcPng, outPath, targetH = PREVIEW_H) {
  runPs(`
Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Image]::FromFile('${srcPng.replace(/'/g, "''")}')
$scale = ${targetH}.0 / $src.Height
$w = [Math]::Max(1, [int][Math]::Round($src.Width * $scale))
$h = [Math]::Max(1, [int][Math]::Round($src.Height * $scale))
$bmp = New-Object System.Drawing.Bitmap $w, $h
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::Half
$g.DrawImage($src, 0, 0, $w, $h)
$bmp.Save('${outPath.replace(/'/g, "''")}', [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose(); $src.Dispose()
`);
}

function buildAllPreviews() {
  ensureDir(PREV);

  const misaAtlas = path.join(APP, 'public/phaser-rpg/atlas');
  buildPreviewFromAtlas(
    path.join(misaAtlas, 'atlas.png'),
    path.join(misaAtlas, 'atlas.json'),
    'misa-front',
    path.join(PREV, 'misa.png'),
  );

  for (const id of ['knight', 'fox', 'cat', 'horse']) {
    const dir = path.join(OUT, id);
    buildPreviewFromAtlas(
      path.join(dir, 'atlas.png'),
      path.join(dir, 'atlas.json'),
      'down-idle',
      path.join(PREV, `${id}.png`),
    );
  }

  buildPreviewFromAtlas(
    path.join(OUT, 'robot/atlas.png'),
    path.join(OUT, 'robot/atlas.json'),
    'down',
    path.join(PREV, 'robot.png'),
  );
  buildPreviewFromImage(path.join(OUT, 'car/body.png'), path.join(PREV, 'car.png'));
  buildPreviewFromImage(path.join(OUT, 'rocket/ship.png'), path.join(PREV, 'rocket.png'));

  for (const f of fs.readdirSync(PREV)) {
    if (
      f.endsWith('-strip.png')
      || f.endsWith('-test.png')
      || ['spaceship.png', 'soccer.png', 'penguin.png', 'dog.png'].includes(f)
    ) {
      fs.unlinkSync(path.join(PREV, f));
    }
  }
}

ensureDir(OUT);
ensureDir(PREV);

knightAtlas();
robotAtlas();
horseAtlas();
carAssets();
foxAtlas();
catAtlas();
rocketAssets();
buildAllPreviews();

console.log('Avatar atlases + previews built → public/avatars/');
