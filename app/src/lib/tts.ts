// הקראה (Text-to-Speech) — Web Speech API בלבד, בלי שירותי ענן.
// ניקוד מוסתר: מילים ארמיות מוחלפות ב-voc מהלקסיקון רק לשכבת הדיבור.

import { stripNiqqud, stripPunct, vocalize } from '../data/letters';
import { soundEnabled } from './sound';

const LS_TTS = 'aramit_tts';

const PREFIXES = new Set(['ו', 'ש', 'ה', 'ב', 'ל', 'כ', 'מ', 'ד']);

const MALE_HINTS =
  /male|daniel|asaf|hillel|avri|lior|david|guy|yosef|aaron|אברהם|דוד|הילל|אסף/i;
const FEMALE_HINTS = /female|carmit|samantha|helena|naomi|שרה|כרמית/i;

let voicesLoaded = false;

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

  // פיסוק עוזר ל-Web Speech לעצור — מוודאים סימן בסוף משפט/שאלה.
  if (text && !/[.!??,;:]$/.test(text)) {
    text += text.includes('?') || text.includes('؟') ? '' : '.';
  }

  return text;
}

export function ttsEnabled(): boolean {
  return localStorage.getItem(LS_TTS) === 'on';
}

export function toggleTts(): boolean {
  const next = !ttsEnabled();
  localStorage.setItem(LS_TTS, next ? 'on' : 'off');
  if (!next) cancelSpeech();
  return next;
}

export function canSpeak(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof speechSynthesis !== 'undefined' &&
    ttsEnabled() &&
    soundEnabled()
  );
}

function loadVoices(): SpeechSynthesisVoice[] {
  if (typeof speechSynthesis === 'undefined') return [];
  const voices = speechSynthesis.getVoices();
  if (voices.length) voicesLoaded = true;
  return voices;
}

function waitForVoices(): Promise<SpeechSynthesisVoice[]> {
  const existing = loadVoices();
  if (existing.length || voicesLoaded) return Promise.resolve(existing);

  return new Promise((resolve) => {
    if (typeof speechSynthesis === 'undefined') {
      resolve([]);
      return;
    }
    const done = () => resolve(loadVoices());
    speechSynthesis.addEventListener('voiceschanged', done, { once: true });
    setTimeout(done, 400);
  });
}

/** בוחר קול עברי — מעדיף גברי רך אם זמין. */
export function pickHebrewVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const he = voices.filter((v) => v.lang.startsWith('he'));
  if (!he.length) return null;

  const male = he.find((v) => MALE_HINTS.test(v.name) && !FEMALE_HINTS.test(v.name));
  if (male) return male;

  const notFemale = he.find((v) => !FEMALE_HINTS.test(v.name));
  return notFemale ?? he[0];
}

export function cancelSpeech(): void {
  if (typeof speechSynthesis === 'undefined') return;
  speechSynthesis.cancel();
}

/** מקריא טקסט מוכן. מבטל הקראה קודמת. מכבד השתקת צלילים + מצב הקראה. */
export async function speakText(raw: string): Promise<void> {
  if (!canSpeak() || !raw.trim()) return;
  if (typeof speechSynthesis === 'undefined') return;

  const text = prepareSpeechText(raw);
  if (!text) return;

  cancelSpeech();

  const voices = await waitForVoices();
  const voice = pickHebrewVoice(voices);

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = voice?.lang ?? 'he-IL';
  utter.rate = 0.9;
  utter.pitch = 1;
  if (voice) utter.voice = voice;

  speechSynthesis.speak(utter);
}

/** מאזין לטעינת קולות (קריאה מוקדמת בפתיחת פעילות). */
export function warmUpVoices(): void {
  void waitForVoices();
}
