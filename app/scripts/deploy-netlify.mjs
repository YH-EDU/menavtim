/**
 * Build + deploy to Netlify (menavtim.netlify.app).
 * Requires one-time: npx netlify-cli login
 * Optional: NETLIFY_AUTH_TOKEN env var for CI/non-interactive deploy.
 */
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const APP = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

execSync('node scripts/build-netlify.mjs', { cwd: APP, stdio: 'inherit', shell: true });

try {
  execSync('npx netlify-cli deploy --prod --dir=dist --site menavtim', {
    cwd: APP,
    stdio: 'inherit',
    shell: true,
  });
  console.log('\n✓ Deployed to https://menavtim.netlify.app');
} catch {
  console.log('\n⚠ Netlify deploy skipped — run once: npx netlify-cli login');
  console.log('  Then: npm run deploy:netlify');
  console.log('  Or connect the repo in Netlify dashboard (uses netlify.toml).');
  process.exit(1);
}
