/**
 * Build escape-room-beit-midrash for menavtim GitHub Pages and copy into
 * app/public/escape-room (only runtime assets — no _edit_crops).
 *
 * Usage (from mathgame/app): node scripts/build-escape-room.mjs
 */
import { spawnSync } from 'node:child_process';
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  statSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, '..');
const mathgameRoot = path.resolve(appRoot, '..');
const escapeRoot = path.resolve(mathgameRoot, '..', 'escape-room-beit-midrash');
const outDir = path.join(appRoot, 'public', 'escape-room');

if (!existsSync(escapeRoot)) {
  console.error('Escape room project not found at', escapeRoot);
  process.exit(1);
}

console.log('Building escape room for /menavtim/escape-room/ …');
const build = spawnSync(
  process.platform === 'win32' ? 'npm.cmd' : 'npm',
  ['run', 'build'],
  {
    cwd: escapeRoot,
    env: { ...process.env, ESCAPE_BASE: '/menavtim/escape-room/' },
    stdio: 'inherit',
    shell: true,
  },
);
if (build.status !== 0) {
  console.error('Escape room build failed');
  process.exit(build.status || 1);
}

const dist = path.join(escapeRoot, 'dist');
if (!existsSync(dist)) {
  console.error('Missing dist at', dist);
  process.exit(1);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const neededRoots = new Set([
  'index.html',
  'assets',
  'beit-midrash-mishna-ceiling-lamps.png',
  'inner-room-360.png',
]);

for (const name of readdirSync(dist)) {
  if (!neededRoots.has(name)) continue;
  const from = path.join(dist, name);
  const to = path.join(outDir, name);
  if (statSync(from).isDirectory()) {
    cpSync(from, to, { recursive: true });
  } else {
    cpSync(from, to);
  }
}

console.log('Copied escape room (runtime assets only) →', outDir);
