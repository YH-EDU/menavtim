/// <reference types="vite/client" />

import { asset } from './lib/basePath';

/** Inject @font-face with correct base path for gh-pages and Netlify. */
const fontStyle = document.createElement('style');
fontStyle.textContent = `@font-face {
  font-family: 'Heebo';
  src: url('${asset('/fonts/heebo-var.woff2')}') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}`;
document.head.appendChild(fontStyle);
