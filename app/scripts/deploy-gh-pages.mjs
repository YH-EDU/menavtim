/**
 * Build output → gh-pages branch (GitHub Pages project site).
 * Run from app/: npm run deploy
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.join(__dirname, '..');
const REPO = path.join(APP, '..');
const DIST = path.join(APP, 'dist');
const WORKTREE = path.join(REPO, '.gh-pages-worktree');

function run(cmd, cwd = REPO) {
  execSync(cmd, {
    cwd,
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      GIT_AUTHOR_NAME: process.env.GIT_AUTHOR_NAME || 'MathGame',
      GIT_AUTHOR_EMAIL: process.env.GIT_AUTHOR_EMAIL || 'mathgame@local.dev',
      GIT_COMMITTER_NAME: process.env.GIT_COMMITTER_NAME || 'MathGame',
      GIT_COMMITTER_EMAIL: process.env.GIT_COMMITTER_EMAIL || 'mathgame@local.dev',
    },
  });
}

if (!fs.existsSync(DIST)) {
  console.error('Missing dist/ — run npm run build first.');
  process.exit(1);
}

// Ensure gh-pages worktree exists
const branches = execSync('git branch --list gh-pages', { cwd: REPO, encoding: 'utf8' });
if (!branches.includes('gh-pages')) {
  run('git branch gh-pages origin/gh-pages');
}

if (!fs.existsSync(WORKTREE)) {
  run(`git worktree add "${WORKTREE}" gh-pages`);
}

// Clear worktree (keep .git)
for (const entry of fs.readdirSync(WORKTREE)) {
  if (entry === '.git') continue;
  fs.rmSync(path.join(WORKTREE, entry), { recursive: true, force: true });
}

// Copy dist → worktree root (skip dev-only avatar source archives)
const SKIP_DIRS = new Set(['_downloads']);

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    if (SKIP_DIRS.has(name)) continue;
    const s = path.join(src, name);
    const d = path.join(dest, name);
    if (fs.statSync(s).isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}
copyDir(DIST, WORKTREE);
fs.writeFileSync(path.join(WORKTREE, '.nojekyll'), '');

// Cache-bust marker + ensure HTML references the bundle we just copied
const indexPath = path.join(WORKTREE, 'index.html');
if (fs.existsSync(indexPath)) {
  const stamp = new Date().toISOString();
  let html = fs.readFileSync(indexPath, 'utf8');
  html = html.replace(/<meta name="deploy"[^>]*>\s*/i, '');
  html = html.replace(
    /<meta name="viewport"/i,
    `<meta name="deploy" content="${stamp}" />\n    <meta name="viewport"`,
  );
  fs.writeFileSync(indexPath, html);
}

run('git add -A', WORKTREE);
const status = execSync('git status --porcelain', { cwd: WORKTREE, encoding: 'utf8' });
if (status.trim()) {
  run('git commit -m "Deploy menavtim to GitHub Pages"', WORKTREE);
  run('git push origin gh-pages', WORKTREE);
  console.log('\n✓ Deployed to gh-pages');
} else {
  console.log('\n✓ gh-pages already up to date');
}
