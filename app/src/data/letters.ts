// לקסיקון ארמית לדוברי עברית מודרנית.
// LetterInfo.ch יכול להיות מילה שלמה (לא רק אות) — Intro והמורה משתמשים באותו מבנה.

export interface LetterInfo {
  ch: string;        // המילה / הביטוי בארמית
  name: string;      // תרגום / הסבר קצר בעברית
  final?: boolean;
  hard?: boolean;
  hint?: string;
}

/** אוצר המילים לכל הרמות — משמש לכרטיסי Intro ולמפת חום */
export const LETTERS: LetterInfo[] = [
  // רמה 1 — ארמית יומיומית
  { ch: 'דיעבד', name: 'בדיעבד', hint: 'אחרי מעשה — למרות שלא תוכנן כך' },
  { ch: 'דווקא', name: 'דווקא', hint: 'במיוחד / דווקא זה ולא משהו אחר' },
  { ch: 'אגב', name: 'אגב', hint: 'דרך אגב, בנוסף' },
  { ch: 'בעליל', name: 'בעליל', hint: 'בבירור, בגלוי' },
  { ch: 'אדרבא', name: 'אדרבא', hint: 'להפך, דווקא כן' },
  { ch: 'ברי', name: 'ודאי', hint: 'ודאי, ברור' },
  { ch: 'שמא', name: 'שמא', hint: 'אולי, חשש' },
  { ch: 'היינו', name: 'כלומר', hint: 'כלומר, זאת אומרת' },

  // רמה 2 — סיומת א (ה׳ הידיעה)
  { ch: 'מלכא', name: 'המלך', hint: 'סיומת א׳ = ה׳ הידיעה בארמית' },
  { ch: 'אבא', name: 'האב', hint: 'אב + א׳ = האב' },
  { ch: 'שמשא', name: 'השמש', hint: 'שמש + א׳' },
  { ch: 'יומא', name: 'היום', hint: 'יום + א׳' },
  { ch: 'ליליא', name: 'הלילה', hint: 'לילה + א׳' },
  { ch: 'ארעא', name: 'הארץ', hint: 'ארץ + א׳' },
  { ch: 'מיא', name: 'המים', hint: 'מים + א׳' },
  { ch: 'ביתא', name: 'הבית', hint: 'בית + א׳' },

  // רמה 3 — ביטויים
  { ch: 'איפכא מסתברא', name: 'ההפך הוא הנכון', hint: 'ביטוי תלמודי נפוץ' },
  { ch: 'רחמנא ליצלן', name: 'השם ישמור', hint: 'בקשה לשמירה' },
  { ch: 'מאי קא משמע לן', name: 'מה זה בא ללמד אותנו', hint: 'שאלה פרשנית' },
  { ch: 'תא שמע', name: 'בוא ושמע', hint: 'הבאת ראיה' },
  { ch: 'קשיא', name: 'קשה / קושיה', hint: 'קושיה על דעה' },
  { ch: 'תיקו', name: 'יישאר בספק', hint: 'שאלה שלא הוכרעה' },

  // רמה 4 — ניגודים
  { ch: 'רישא', name: 'התחלה', hint: 'ניגוד: סיפא' },
  { ch: 'סיפא', name: 'סוף', hint: 'ניגוד: רישא' },
  { ch: 'טבא', name: 'טוב', hint: 'ניגוד: בישא' },
  { ch: 'בישא', name: 'רע', hint: 'ניגוד: טבא' },
  { ch: 'רבה', name: 'גדול', hint: 'ניגוד: זוטרא' },
  { ch: 'זוטרא', name: 'קטן', hint: 'ניגוד: רבה' },
  { ch: 'קדמאה', name: 'ראשון', hint: 'ניגוד: בתראה' },
  { ch: 'בתראה', name: 'אחרון', hint: 'ניגוד: קדמאה' },

  // רמה 5 — מילות שאלה
  { ch: 'מאי', name: 'מה', hint: 'מאי = מה' },
  { ch: 'מאן', name: 'מי', hint: 'מאן = מי' },
  { ch: 'היכי', name: 'איך', hint: 'היכי = איך' },
  { ch: 'אימתי', name: 'מתי', hint: 'אימתי = מתי' },
  { ch: 'היכא', name: 'איפה', hint: 'היכא = איפה' },
  { ch: 'אמאי', name: 'למה', hint: 'אמאי = למה' },
  { ch: 'כמה', name: 'כמה', hint: 'כמה = כמה' },

  // רמה 6 — תחיליות
  { ch: 'ד', name: 'ש־ / של', hint: 'תחילית ד׳ = ש־ או של' },
  { ch: 'ב', name: 'ב־ / בתוך', hint: 'תחילית ב׳ = ב־' },
  { ch: 'ל', name: 'ל־ / אל', hint: 'תחילית ל׳ = ל־' },
  { ch: 'מ', name: 'מ־ / מן', hint: 'תחילית מ׳ = מ־' },
  { ch: 'כ', name: 'כ־ / כמו', hint: 'תחילית כ׳ = כמו' },
];

export const ALL_CHARS = LETTERS.map((l) => l.ch);

/** סדר עמודות למפת החום — לפי סדר הלקסיקון */
export const HEATMAP_ORDER = ALL_CHARS;

export const FINAL_TO_BASE: Record<string, string> = {
  'ך': 'כ',
  'ם': 'מ',
  'ן': 'נ',
  'ף': 'פ',
  'ץ': 'צ',
};

const HEBREW_RE = /[א-ת]/;

export function hebrewLetters(text: string): string[] {
  return [...text].filter((c) => HEBREW_RE.test(c));
}

export function uniqueLetters(text: string): string[] {
  return [...new Set(hebrewLetters(text))];
}
