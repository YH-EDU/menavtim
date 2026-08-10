const LS_WANT = 'menavtim_want_fullscreen';
const IMMERSIVE_CLASS = 'immersive-fs';

type DocWithWebkit = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void> | void;
};

type ElWithWebkit = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
  webkitRequestFullScreen?: () => Promise<void> | void;
};

export function isLikelyIOS(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return true;
  return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
}

export function getFullscreenElement(): Element | null {
  const doc = document as DocWithWebkit;
  return document.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
}

export function isFullscreenActive(): boolean {
  return !!getFullscreenElement() || document.documentElement.classList.contains(IMMERSIVE_CLASS);
}

export function wantsFullscreen(): boolean {
  try {
    return localStorage.getItem(LS_WANT) === '1';
  } catch {
    return false;
  }
}

export function setWantsFullscreen(on: boolean): void {
  try {
    localStorage.setItem(LS_WANT, on ? '1' : '0');
  } catch {
    /* ignore */
  }
}

export function applyImmersiveFallback(on: boolean): void {
  document.documentElement.classList.toggle(IMMERSIVE_CLASS, on);
  document.body?.classList.toggle(IMMERSIVE_CLASS, on);
  if (on) {
    window.scrollTo(0, 1);
  }
}

async function requestNativeFullscreen(el: HTMLElement): Promise<boolean> {
  const target = el as ElWithWebkit;
  try {
    if (typeof target.requestFullscreen === 'function') {
      await target.requestFullscreen();
      return true;
    }
    if (typeof target.webkitRequestFullscreen === 'function') {
      await target.webkitRequestFullscreen();
      return true;
    }
    if (typeof target.webkitRequestFullScreen === 'function') {
      await target.webkitRequestFullScreen();
      return true;
    }
  } catch {
    return false;
  }
  return false;
}

async function exitNativeFullscreen(): Promise<void> {
  const doc = document as DocWithWebkit;
  try {
    if (document.fullscreenElement && document.exitFullscreen) {
      await document.exitFullscreen();
      return;
    }
    if (doc.webkitFullscreenElement && doc.webkitExitFullscreen) {
      await doc.webkitExitFullscreen();
    }
  } catch {
    /* ignore */
  }
}

export type FullscreenToggleResult = 'on' | 'off' | 'immersive';

/** Fullscreen for the whole menavtim app (map + escape iframe). */
export async function toggleFullscreen(): Promise<FullscreenToggleResult> {
  if (getFullscreenElement()) {
    await exitNativeFullscreen();
    applyImmersiveFallback(false);
    setWantsFullscreen(false);
    return 'off';
  }

  if (document.documentElement.classList.contains(IMMERSIVE_CLASS)) {
    applyImmersiveFallback(false);
    setWantsFullscreen(false);
    return 'off';
  }

  const ok = await requestNativeFullscreen(document.documentElement);
  if (ok) {
    applyImmersiveFallback(false);
    setWantsFullscreen(true);
    return 'on';
  }

  applyImmersiveFallback(true);
  setWantsFullscreen(true);
  return 'immersive';
}

export function subscribeFullscreenChange(cb: () => void): () => void {
  const handler = () => cb();
  document.addEventListener('fullscreenchange', handler);
  document.addEventListener('webkitfullscreenchange', handler);
  window.addEventListener('resize', handler);
  return () => {
    document.removeEventListener('fullscreenchange', handler);
    document.removeEventListener('webkitfullscreenchange', handler);
    window.removeEventListener('resize', handler);
  };
}
