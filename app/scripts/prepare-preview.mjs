/**
 * After `vite build` with VITE_BASE=./, make dist hostable from any static folder:
 * drop dev avatar archives, and point the prebuilt escape-room bundle at a
 * relative base so it does not require /menavtim/ on the preview host.
 * Does not touch public/ or the live Pages config.
 */
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');

rmSync(path.join(dist, 'avatars', '_downloads'), { recursive: true, force: true });

const indexPath = path.join(dist, 'escape-room', 'index.html');
if (existsSync(indexPath)) {
  const html = readFileSync(indexPath, 'utf8').replaceAll('/menavtim/escape-room/', './');
  writeFileSync(indexPath, html);
}

const assetsDir = path.join(dist, 'escape-room', 'assets');
if (existsSync(assetsDir)) {
  for (const name of readdirSync(assetsDir)) {
    if (!name.endsWith('.js')) continue;
    const file = path.join(assetsDir, name);
    const js = readFileSync(file, 'utf8').replaceAll('/menavtim/escape-room/', './');
    writeFileSync(file, js);
  }
}

console.log('Preview dist ready at', dist);
