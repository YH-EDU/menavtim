// הקראה (Text-to-Speech) — Web Speech API בלבד, בלי שירותי ענן.
// ניקוד מוסתר: מילים ארמיות מוחלפות ב-voc מהלקסיקון רק לשכבת הדיבור.

import { stripPunct, vocalize } from '../data/letters';

const LS_TTS = 'aramit_tts';
const UNLOCK_PHRASE = 'הקראה מופעלת';

const PREFIXES = new Set(['ו', 'ש', 'ה', 'ב', 'ל', 'כ', 'מ', 'ד']);

const MALE_HINTS =
  /male|daniel|asaf|hillel|avri|lior|david|guy|yosef|aaron|אברהם|דוד|הילל|אסף/i;
const FEMALE_HINTS = /female|carmit|samantha|helena|naomi|שרה|כרמית/i;

export type SpeakResult = 'ok' | 'blocked' | 'unsupported' | 'error';

let voicesLoaded = false;
let speechUnlocked = false;
let speakGeneration = 0;
let cachedVoice: SpeechSynthesisVoice | null = null;
let toastHandler: ((msg: string) => void) | null = null;

function isIOS(): boolean {
  if (typeof navigator === 'undefined') return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );
}

function isAndroid(): boolean {
  return typeof navigator !== 'undefined' && /Android/.test(navigator.userAgent);
}

function isMobile(): boolean {
  return isIOS() || isAndroid();
}

/** iOS Safari — speechSynthesis קיים אך לעיתים דורש resume/pause. */
function iosSpeechResumeHack(): void {
  if (!isIOS() || typeof speechSynthesis === 'undefined') return;
  window.setTimeout(() => {
    if (speechSynthesis.speaking || speechSynthesis.pending) {
      speechSynthesis.pause();
      speechSynthesis.resume();
    }
  }, 120);
  window.setTimeout(() => {
    if (speechSynthesis.speaking || speechSynthesis.pending) {
      speechSynthesis.pause();
      speechSynthesis.resume();
    }
  }, 350);
}

export function setTtsToastHandler(handler: ((msg: string) => void) | null): void {
  toastHandler = handler;
}

function showToast(msg: string): void {
  toastHandler?.(msg);
}

export function isSpeechUnlocked(): boolean {
  return speechUnlocked;
}

export function markSpeechUnlocked(): void {
  speechUnlocked = true;
}

export function isSpeaking(): boolean {
  if (typeof speechSynthesis === 'undefined') return false;
  return speechSynthesis.speaking || speechSynthesis.pending;
}

function reattachAffixes(original: string, vocalized: string): string {
  const lead = original.match(/^[^\u05D0-\u05EA\u0591-\u05C7]+/)?.[0] ?? '';
  const trail = original.match(/[^\u05D0-\u05EA\u0591-\u05C7]+$/)?.[0] ?? '';
  return lead + vocalized + trail;
}

/** מחליף מילה בודדת בצורה מנוקדת מהלקסיקון (כולל תחיליות). */
function vocalizeWordForSpeech(word: string): string {
  const bare = stripPunct(word);
  if (!bare) return word;

  const direct = vocalize(bare);
  if (direct !== bare) return reattachAffixes(word, direct);

  for (let n = 1; n <= 2 && n < bare.length; n++) {
    const prefix = bare.slice(0, n);
    if (![...prefix].every((c) => PREFIXES.has(c))) break;
    const base = bare.slice(n);
    const voc = vocalize(base);
    if (voc !== base) return reattachAffixes(word, prefix + voc);
  }

  return word;
}

/** מכין מחרוזת לדיבור: שומר פיסוק לסיוע באינטונציה, מוסיף ניקוד נסתר מ-voc. */
export function prepareSpeechText(raw: string): string {
  if (!raw.trim()) return '';

  let text = raw
    .replace(/\s*___+\s*/g, ', ')
    .replace(/\s+/g, ' ')
    .trim();

  text = text
    .split(/(\s+)/)
    .map((part) => (part.trim() ? vocalizeWordForSpeech(part) : part))
    .join('');

  if (text && !/[.!??,;:]$/.test(text)) {
    text += text.includes('?') || text.includes('؟') ? '' : '.';
  }

  return text;
}

export function ttsEnabled(): boolean {
  return localStorage.getItem(LS_TTS) === 'on';
}

export function setTtsEnabled(on: boolean): void {
  localStorage.setItem(LS_TTS, on ? 'on' : 'off');
  if (!on) cancelSpeech();
}

export function toggleTts(): boolean {
  const next = !ttsEnabled();
  setTtsEnabled(next);
  return next;
}

export function speechSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    typeof speechSynthesis !== 'undefined' &&
    typeof SpeechSynthesisUtterance !== 'undefined'
  );
}

/** TTS עצמאי מהשתקת צלילי משחק (aramit_sound). */
export function canSpeak(): boolean {
  return speechSupported() && ttsEnabled();
}

function loadVoices(): SpeechSynthesisVoice[] {
  if (typeof speechSynthesis === 'undefined') return [];
  const voices = speechSynthesis.getVoices();
  if (voices.length) voicesLoaded = true;
  return voices;
}

function resolveVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const picked = pickHebrewVoice(voices);
  if (picked) cachedVoice = picked;
  return picked ?? cachedVoice;
}

function waitForVoices(): Promise<SpeechSynthesisVoice[]> {
  if (typeof speechSynthesis === 'undefined') return Promise.resolve([]);

  const existing = loadVoices();
  if (existing.length && voicesLoaded) return Promise.resolve(existing);

  return new Promise((resolve) => {
    let settled = false;
    const finish = (voices: SpeechSynthesisVoice[]) => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve(voices);
    };

    const tryLoad = (): SpeechSynthesisVoice[] | null => {
      const voices = loadVoices();
      return voices.length ? voices : null;
    };

    const onVoicesChanged = () => {
      const voices = tryLoad();
      if (voices) finish(voices);
    };

    const cleanup = () => {
      speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
      window.clearInterval(pollId);
      window.clearTimeout(timeoutId);
    };

    speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);

    const immediate = tryLoad();
    if (immediate) {
      finish(immediate);
      return;
    }

    let attempts = 0;
    const maxAttempts = isMobile() ? 12 : 4;
    const pollId = window.setInterval(() => {
      attempts += 1;
      const voices = tryLoad();
      if (voices || attempts >= maxAttempts) finish(voices ?? loadVoices());
    }, isMobile() ? 180 : 100);

    const timeoutId = window.setTimeout(
      () => finish(loadVoices()),
      isMobile() ? 2800 : 900,
    );
  });
}

/** בוחר קול עברי — מעדיף he-IL/gברי; נופל לכל קול זמין. */
export function pickHebrewVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (!voices.length) return null;

  const he = voices.filter((v) => /^he/i.test(v.lang));
  const pool = he.length ? he : voices;

  const heIl = pool.find((v) => v.lang.toLowerCase().startsWith('he-il'));
  if (heIl && !FEMALE_HINTS.test(heIl.name)) return heIl;

  const male = pool.find((v) => MALE_HINTS.test(v.name) && !FEMALE_HINTS.test(v.name));
  if (male) return male;

  const notFemale = pool.find((v) => !FEMALE_HINTS.test(v.name));
  return notFemale ?? pool[0] ?? voices[0] ?? null;
}

export function cancelSpeech(): void {
  if (typeof speechSynthesis === 'undefined') return;
  speakGeneration += 1;
  speechSynthesis.cancel();
}

function createUtterance(prepared: string, voice: SpeechSynthesisVoice | null): SpeechSynthesisUtterance {
  const utter = new SpeechSynthesisUtterance(prepared);
  utter.lang = voice?.lang ?? 'he-IL';
  utter.rate = 0.9;
  utter.pitch = 1;
  if (voice) utter.voice = voice;
  return utter;
}

/**
 * מקריא מיד מתוך מחוות (tap/pointer) — חייב להיקרא סינכרונית ב-handler.
 * iOS דורש ש-speak() ייקרא ישירות מתוך אירוע המשתמש, ללא await לפניו.
 */
export function speakNowSync(
  raw: string,
  options: { fromGesture?: boolean; promptFallback?: string } = {},
): SpeakResult {
  if (!speechSupported()) {
    if (options.fromGesture) showToast('לא ניתן להקריא במכשיר זה');
    return 'unsupported';
  }

  markSpeechUnlocked();

  const prepared = prepareSpeechText(raw);
  if (!prepared) {
    if (options.fromGesture && options.promptFallback) {
      return speakNowSync(options.promptFallback, { fromGesture: true });
    }
    return 'ok';
  }

  const gen = ++speakGeneration;
  speechSynthesis.cancel();

  const voices = loadVoices();
  const voice = resolveVoice(voices);
  const utter = createUtterance(prepared, voice);

  utter.onend = () => {
    if (gen === speakGeneration) speechUnlocked = true;
  };

  utter.onerror = () => {
    if (gen !== speakGeneration) return;
    if (options.promptFallback && options.promptFallback !== raw) {
      speakNowSync(options.promptFallback, { fromGesture: options.fromGesture });
    } else if (options.fromGesture) {
      showToast('הקישו שוב על הקראה');
    }
  };

  speechSynthesis.speak(utter);
  iosSpeechResumeHack();

  if (!voices.length) {
    void waitForVoices().then((loaded) => {
      resolveVoice(loaded);
    });
  }

  window.setTimeout(() => {
    if (gen !== speakGeneration) return;
    if (!speechSynthesis.speaking && !speechSynthesis.pending) {
      if (options.promptFallback && options.promptFallback !== raw) {
        speakNowSync(options.promptFallback, { fromGesture: options.fromGesture });
      }
    }
  }, isMobile() ? 700 : 400);

  return 'ok';
}

function runSpeak(
  text: string,
  options: { fromGesture?: boolean; unlockOnly?: boolean } = {},
): Promise<SpeakResult> {
  if (!speechSupported()) {
    if (options.fromGesture) showToast('לא ניתן להקריא במכשיר זה');
    return Promise.resolve('unsupported');
  }
  if (!ttsEnabled() && !options.fromGesture && !options.unlockOnly) {
    return Promise.resolve('blocked');
  }

  const prepared = prepareSpeechText(text);
  if (!prepared) return Promise.resolve('ok');

  if (options.fromGesture) {
    return Promise.resolve(speakNowSync(text, { fromGesture: true }));
  }

  const gen = ++speakGeneration;
  speechSynthesis.cancel();

  return waitForVoices().then((voices) => {
    if (gen !== speakGeneration) return 'blocked' as const;

    const voice = resolveVoice(voices);
    const utter = createUtterance(prepared, voice);

    return new Promise<SpeakResult>((resolve) => {
      let settled = false;
      const finish = (result: SpeakResult) => {
        if (settled || gen !== speakGeneration) return;
        settled = true;
        if (result === 'ok') speechUnlocked = true;
        resolve(result);
      };

      utter.onend = () => finish('ok');
      utter.onerror = () => finish('error');

      speechSynthesis.speak(utter);
      iosSpeechResumeHack();

      window.setTimeout(() => {
        if (settled || gen !== speakGeneration) return;
        if (!speechSynthesis.speaking && !speechSynthesis.pending) {
          finish('error');
        }
      }, isMobile() ? 700 : 400);
    });
  });
}

/** פותח הקראה במחשוב נייד — חייב להיקרא מתוך tap. */
export async function unlockSpeech(fromGesture = true): Promise<SpeakResult> {
  markSpeechUnlocked();
  if (fromGesture) {
    return speakNowSync(UNLOCK_PHRASE, { fromGesture: true });
  }
  return runSpeak(UNLOCK_PHRASE, { fromGesture, unlockOnly: true });
}

/** מקריא טקסט מוכן. מבטל הקראה קודמת. */
export async function speakText(
  raw: string,
  options: { fromGesture?: boolean; promptFallback?: string } = {},
): Promise<SpeakResult> {
  if (!raw.trim()) return 'blocked';
  if (!speechSupported()) return 'unsupported';

  if (options.fromGesture) {
    return speakNowSync(raw, options);
  }

  if (!canSpeak()) return 'blocked';
  if (isMobile() && !speechUnlocked) return 'blocked';
  return runSpeak(raw, options);
}

/** מאזין לטעינת קולות (קריאה מוקדמת בפתיחת פעילות). */
export function warmUpVoices(): void {
  void waitForVoices().then((voices) => {
    resolveVoice(voices);
  });
  if (typeof speechSynthesis !== 'undefined') {
    speechSynthesis.addEventListener('voiceschanged', () => {
      resolveVoice(loadVoices());
    });
  }
}
