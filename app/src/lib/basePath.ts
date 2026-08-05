/** GitHub Pages project base — keep in sync with vite.config.ts `base`. */
export const BASE_PATH = '/menavtim-baaramit';

export function asset(path: string): string {
  return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
}
