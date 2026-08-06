/**
 * Build for Netlify with base `/` (clean subdomain URL).
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const APP = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(APP, 'dist');

execSync('npm run build', {
  cwd: APP,
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, VITE_BASE: '/' },
});

// Manual drag-and-drop deploys ignore netlify.toml — SPA fallback must live in dist.
fs.writeFileSync(path.join(DIST, '_redirects'), '/*    /index.html   200\n');
console.log('Wrote dist/_redirects for Netlify SPA routing');
