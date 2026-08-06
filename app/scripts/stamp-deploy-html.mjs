import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const indexPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
html = html.replace(/<meta name="deploy"[^>]*>\s*/i, '');
html = html.replace(
  /<meta name="viewport"/i,
  `<meta name="deploy" content="${new Date().toISOString()}" />\n    <meta name="viewport"`,
);
fs.writeFileSync(indexPath, html);
