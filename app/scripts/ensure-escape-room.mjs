/**
 * CI / local gate: escape room assets must exist under public/escape-room.
 * If the sibling prototype is present, rebuild it; otherwise require committed assets.
 */
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, '..');
const mathgameRoot = path.resolve(appRoot, '..');
const escapeRoot = path.resolve(mathgameRoot, '..', 'escape-room-beit-midrash');
const outIndex = path.join(appRoot, 'public', 'escape-room', 'index.html');

if (existsSync(escapeRoot)) {
  const r = spawnSync(process.execPath, [path.join(__dirname, 'build-escape-room.mjs')], {
    cwd: appRoot,
    stdio: 'inherit',
    env: process.env,
  });
  if (r.status !== 0) process.exit(r.status || 1);
  process.exit(0);
}

if (!existsSync(outIndex)) {
  console.error(
    'Missing public/escape-room (index.html). Commit built escape-room assets, or place the prototype next to mathgame and run npm run build:escape.',
  );
  process.exit(1);
}

console.log('Using committed escape-room assets at public/escape-room');
