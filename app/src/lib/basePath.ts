/** App base path — driven by vite.config.ts `base` (via import.meta.env.BASE_URL). */
export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '') || '';

export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const p = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${p}`;
}

/** API root — `/menavtim/api` on GitHub Pages, `/api` on Netlify. */
export const API_BASE = asset('/api').replace(/\/$/, '');

/** Virtual page path for analytics (GA page_view). */
export function appPath(hash: string): string {
  const route = hash.replace(/^#/, '') || '/';
  const normalized = route.startsWith('/') ? route : `/${route}`;
  return BASE_PATH ? `${BASE_PATH}${normalized}` : normalized;
}