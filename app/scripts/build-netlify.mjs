/**
 * Build for Netlify with base `/` (clean subdomain URL).
 */
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const APP = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

execSync('npm run build', {
  cwd: APP,
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, VITE_BASE: '/' },
});
