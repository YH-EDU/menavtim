// לקסיקון ארמית לדוברי עברית מודרנית.
// LetterInfo.ch הוא מילה שלמה (לא אות) — Intro, מפת החום והטולטיפים משתמשים באותו מבנה.
//
// ch  = הצורה ללא ניקוד. זהו המפתח לכל חיפוש, השוואה ומעקב שליטה.
// voc = הצורה המנוקדת להצגה. מנועים שעובדים אות-אות (תפזורת, מורפינג) משתמשים ב-ch.
// same = מילה שזהה בעברית ובארמית; לעולם לא תוצג כתרגיל תרגום.

export interface LetterInfo {
  ch: string;        // המילה בארמית, ללא ניקוד
  voc?: string;      // המילה המנוקדת להצגה
  name: string;      // התרגום בעברית
  final?: boolean;
  hard?: boolean;
  hint?: string;     // הסבר קצר / דוגמה
  same?: boolean;    // זהה לעברית — לא מתורגמת ולא מודגשת
}

// הסדר כאן הוא סדר הלימוד: מהמילים שהכי מזכירות עברית אל הרחוקות ממנה.
export const LETTERS: LetterInfo[] = [
  // ── יחידה 1: שמות עצם וסיומת א׳ — כולן מילים עבריות מוכרות ──
  { ch: 'יומא', voc: 'יוֹמָא', name: 'יום', hint: 'יום + א׳' },
  { ch: 'ביתא', voc: 'בֵּיתָא', name: 'בית', hint: 'בית + א׳' },
  { ch: 'שמשא', voc: 'שִׁמְשָׁא', name: 'שמש', hint: 'שמש + א׳' },
  { ch: 'קלא', voc: 'קָלָא', name: 'קול', hint: 'קול + א׳' },
  { ch: 'מלכא', voc: 'מַלְכָּא', name: 'המלך', hint: 'מלך + א׳' },
  { ch: 'שוקא', voc: 'שׁוּקָא', name: 'שוק', hint: 'שוק + א׳' },
  { ch: 'גברא', voc: 'גַּבְרָא', name: 'איש', hint: 'גבר + א׳' },
  { ch: 'עלמא', voc: 'עָלְמָא', name: 'עולם', hint: 'עולם + א׳' },
  { ch: 'מילתא', voc: 'מִילְּתָא', name: 'דבר', hint: 'מילה ← דבר, עניין' },
  { ch: 'דינא', voc: 'דִּינָא', name: 'הדין', hint: 'דין + א׳' },
  { ch: 'רזא', voc: 'רָזָא', name: 'הסוד', hint: 'רז + א׳' },
  { ch: 'שירא', voc: 'שִׁירָא', name: 'השיר', hint: 'שיר + א׳' },

  // ── משפחה. אַבָּא ואִימָּא הן ארמית שנכנסה לעברית ──
  { ch: 'אבא', voc: 'אַבָּא', name: 'אב', same: true, hint: 'מילה ארמית שאתם אומרים מגיל שנתיים' },
  { ch: 'אימא', voc: 'אִימָּא', name: 'אם', same: true, hint: 'גם היא ארמית' },
  { ch: 'ברא', voc: 'בְּרָא', name: 'בן', hint: 'מכאן "בר מצווה" = בן מצווה' },
  { ch: 'ברתא', voc: 'בְּרַתָּא', name: 'בת', hint: 'בת + א׳' },
  { ch: 'איתתא', voc: 'אִיתְּתָא', name: 'אישה', hint: 'אישה ← איתתא' },
  { ch: 'אחא', voc: 'אֲחָא', name: 'אח', hint: 'אח + א׳' },
  { ch: 'חברא', voc: 'חַבְרָא', name: 'חבר', hint: 'חבר + א׳' },
  { ch: 'טליא', voc: 'טַלְיָא', name: 'ילד', hint: 'מכאן "טלה" — צעיר' },

  // ── יחידה 2: המספרים. חמישה מהם חושפים את החוק ש ← ת ──
  { ch: 'חד', voc: 'חַד', name: 'אחד', hint: 'חַד ← אחד' },
  { ch: 'תרין', voc: 'תְּרֵין', name: 'שניים', hint: 'ש ← ת: שניים ← תרין' },
  { ch: 'תלת', voc: 'תְּלַת', name: 'שלוש', hint: 'ש ← ת' },
  { ch: 'ארבע', voc: 'אַרְבַּע', name: 'ארבע', same: true, hint: 'זהה לעברית' },
  { ch: 'חמש', voc: 'חֲמֵשׁ', name: 'חמש', same: true, hint: 'זהה לעברית' },
  { ch: 'שית', voc: 'שִׁית', name: 'שש', hint: 'שש ← שית' },
  { ch: 'שבע', voc: 'שְׁבַע', name: 'שבע', same: true, hint: 'זהה לעברית' },
  { ch: 'תשע', voc: 'תְּשַׁע', name: 'תשע', same: true, hint: 'זהה לעברית' },
  { ch: 'עשר', voc: 'עֲשַׂר', name: 'עשר', same: true, hint: 'זהה לעברית' },

  // ── חילופי אותיות — עוד מילים עבריות בתחפושת ──
  { ch: 'תורא', voc: 'תּוֹרָא', name: 'השור', hint: 'ש ← ת, ועוד א׳' },
  { ch: 'תמניא', voc: 'תַּמְנְיָא', name: 'שמונה', hint: 'ש ← ת' },
  { ch: 'דהב', voc: 'דְּהַב', name: 'זהב', hint: 'ז ← ד' },
  { ch: 'דבח', voc: 'דְּבַח', name: 'זבח', hint: 'ז ← ד' },
  { ch: 'ארעא', voc: 'אַרְעָא', name: 'הארץ', hint: 'צ ← ע, ועוד א׳' },
  { ch: 'ענא', voc: 'עָנָא', name: 'צאן', hint: 'צ ← ע' },
  { ch: 'תור', voc: 'תּוֹר', name: 'שור', hint: 'ש ← ת' },
  { ch: 'דהבא', voc: 'דַּהֲבָא', name: 'הזהב', hint: 'דהב + א׳' },

  // ── הגוף. כמעט כולן מילים עבריות + א׳ ──
  { ch: 'רישא', voc: 'רֵישָׁא', name: 'ראש', hint: 'ראש ← רישא' },
  { ch: 'עינא', voc: 'עֵינָא', name: 'עין', hint: 'עין + א׳' },
  { ch: 'ידא', voc: 'יְדָא', name: 'יד', hint: 'יד + א׳' },
  { ch: 'רגלא', voc: 'רַגְלָא', name: 'רגל', hint: 'רגל + א׳' },
  { ch: 'לבא', voc: 'לִבָּא', name: 'לב', hint: 'לב + א׳' },
  { ch: 'פומא', voc: 'פּוּמָּא', name: 'פה', hint: 'מכאן "על פום הגמל"' },
  { ch: 'אודנא', voc: 'אוּדְנָא', name: 'אוזן', hint: 'ז ← ד: אוזן ← אודנא' },

  // ── טבע וזמן ──
  { ch: 'מיא', voc: 'מַיָּא', name: 'מים', hint: 'מים ← מיא' },
  { ch: 'נורא', voc: 'נוּרָא', name: 'אש', hint: 'מכאן "מנורה"' },
  { ch: 'שמיא', voc: 'שְׁמַיָּא', name: 'שמיים', hint: 'שמיים ← שמיא' },
  { ch: 'טורא', voc: 'טוּרָא', name: 'הר', hint: 'מכאן "טור סיני"' },
  { ch: 'נהרא', voc: 'נַהֲרָא', name: 'נהר', hint: 'נהר + א׳' },
  { ch: 'ליליא', voc: 'לֵילְיָא', name: 'לילה', hint: 'לילה ← ליליא' },
  { ch: 'צפרא', voc: 'צַפְרָא', name: 'בוקר', hint: '"צפרא טבא" = בוקר טוב' },
  { ch: 'שתא', voc: 'שַׁתָּא', name: 'שנה', hint: 'ש ← ת: שנה ← שתא' },
  { ch: 'השתא', voc: 'הַשְׁתָּא', name: 'עכשיו', hint: '"השנה הזאת" ← עכשיו' },

  // ── תארים ──
  { ch: 'רבא', voc: 'רַבָּא', name: 'גדול', hint: 'מכאן "רב" ו"רבים"' },
  { ch: 'זוטא', voc: 'זוּטָא', name: 'קטן', hint: 'קיים בעברית: "פרויקט זוטא"' },
  { ch: 'טבא', voc: 'טָבָא', name: 'טוב', hint: 'טוב ← טבא' },
  { ch: 'בישא', voc: 'בִּישָׁא', name: 'רע', hint: 'מכאן "ביש מזל" ו"תיק ביש"' },
  { ch: 'חדתא', voc: 'חַדְתָּא', name: 'חדש', hint: 'ש ← ת: חדש ← חדת' },
  { ch: 'עתיקא', voc: 'עַתִּיקָא', name: 'ישן', hint: 'מכאן "עתיק"' },
  { ch: 'חכימא', voc: 'חַכִּימָא', name: 'חכם', hint: 'חכם + א׳' },
  { ch: 'שפירא', voc: 'שַׁפִּירָא', name: 'יפה', hint: 'מכאן "שפיר" בעברית' },

  // ── יחידה 3: מילות שאלה — לכל אחת יש בת דודה עברית ──
  { ch: 'מאי', voc: 'מַאי', name: 'מה', hint: 'מַאי ← מה' },
  { ch: 'מאן', voc: 'מַאן', name: 'מי', hint: 'מַאן ← מי' },
  { ch: 'אמאי', voc: 'אַמַּאי', name: 'למה', hint: '"על מאי" = על מה = למה' },
  { ch: 'היכא', voc: 'הֵיכָא', name: 'איפה', hint: 'הֵיכָא ← היכן' },
  { ch: 'אימת', voc: 'אֵימַת', name: 'מתי', hint: 'אֵימַת ← אימתי' },
  { ch: 'היכי', voc: 'הֵיכִי', name: 'איך', hint: 'הֵיכִי ← היאך' },

  // ── יחידה 4: פעלים שכמעט מכירים ──
  { ch: 'עבד', voc: 'עֲבַד', name: 'עשה', hint: 'מזכיר "עבודה"' },
  { ch: 'הוה', voc: 'הֲוָה', name: 'היה', hint: 'הֲוָה ← היה' },
  { ch: 'סליק', voc: 'סְלִיק', name: 'עלה', hint: 'מזכיר "הסתלק"' },
  { ch: 'נחית', voc: 'נְחִית', name: 'ירד', hint: 'מזכיר "נחיתה"' },
  { ch: 'יתיב', voc: 'יָתֵיב', name: 'ישב', hint: 'ש ← ת: ישב ← יתב' },
  { ch: 'קאי', voc: 'קָאֵי', name: 'עומד', hint: 'מזכיר "קם"' },

  // ── מילים שזהות לגמרי לעברית — מתנות חינם ──
  { ch: 'אמר', voc: 'אֲמַר', name: 'אמר', same: true, hint: 'בדיוק כמו בעברית' },
  { ch: 'שמע', voc: 'שְׁמַע', name: 'שמע', same: true, hint: 'בדיוק כמו בעברית' },
  { ch: 'אכל', voc: 'אֲכַל', name: 'אכל', same: true, hint: 'בדיוק כמו בעברית' },
  { ch: 'כתב', voc: 'כְּתַב', name: 'כתב', same: true, hint: 'בדיוק כמו בעברית' },
  { ch: 'ידע', voc: 'יָדַע', name: 'ידע', same: true, hint: 'בדיוק כמו בעברית' },

  // ── יחידה 5: פעלים חדשים ממש ──
  { ch: 'חזא', voc: 'חֲזָא', name: 'ראה', hint: 'מאותו שורש כמו "חזון"' },
  { ch: 'אתא', voc: 'אֲתָא', name: 'בא', hint: 'אתא = בא / הגיע' },
  { ch: 'אזל', voc: 'אֲזַל', name: 'הלך', hint: 'ההפך מאתא' },
  { ch: 'נפק', voc: 'נְפַק', name: 'יצא', hint: 'מכאן "נפקא מינה"' },
  { ch: 'עייל', voc: 'עָיֵיל', name: 'נכנס', hint: 'ההפך מנפק' },
  { ch: 'יהב', voc: 'יְהַב', name: 'נתן', hint: 'יהב = נתן' },
  { ch: 'שקל', voc: 'שְׁקַל', name: 'לקח', hint: 'ההפך מיהב' },
  { ch: 'בעי', voc: 'בָּעֵי', name: 'רוצה', hint: 'רוצה / מבקש' },

  // ── יחידה 6: קיום, מקום וזמן — הרחוקות ביותר מעברית ──
  { ch: 'איכא', voc: 'אִיכָּא', name: 'יש', hint: 'איכא = יש' },
  { ch: 'ליכא', voc: 'לֵיכָּא', name: 'אין', hint: 'ל + איכא = אין' },
  { ch: 'הכא', voc: 'הָכָא', name: 'כאן', hint: 'הכא = כאן' },
  { ch: 'התם', voc: 'הָתָם', name: 'שם', hint: 'ההפך מהכא' },
  { ch: 'קמי', voc: 'קַמֵּי', name: 'לפני', hint: 'מזכיר "קדם"' },
  { ch: 'בתר', voc: 'בָּתַר', name: 'אחרי', hint: 'ההפך מקמי' },
  { ch: 'כולי', voc: 'כּוּלֵּי', name: 'כל', hint: 'מכאן "כולי עלמא"' },
  { ch: 'מידי', voc: 'מִידֵּי', name: 'משהו', hint: 'דבר־מה' },

  // ── יחידה 10: ארמית שחיה בעברית של היום ──
  { ch: 'בדיעבד', voc: 'בְּדִיעֲבַד', name: 'אחרי מעשה', hint: 'למרות שלא כך תוכנן' },
  { ch: 'דוקא', voc: 'דַּוְקָא', name: 'בדיוק כך', hint: 'ולא אחרת' },
  { ch: 'אדרבא', voc: 'אַדְּרַבָּא', name: 'להפך', hint: 'ההפך הוא הנכון' },
  { ch: 'בעליל', voc: 'בְּעָלִיל', name: 'בבירור', hint: 'ברור לגמרי' },
  { ch: 'אגב', voc: 'אַגַּב', name: 'דרך אגב', hint: 'בהזדמנות זו' },
  { ch: 'לאלתר', voc: 'לְאַלְתַּר', name: 'מיד', hint: 'תכף ומיד' },
  { ch: 'ממילא', voc: 'מִמֵּילָא', name: 'בין כה וכה', hint: 'מאליו, גם בלי זה' },
  { ch: 'אליבא', voc: 'אַלִּיבָּא', name: 'לפי דעתו', hint: 'אליבא דפלוני = לשיטתו' },
];

/** מסיר סימני ניקוד וטעמים — כל השוואה עוברת דרך כאן */
export function stripNiqqud(text: string): string {
  return text.replace(/[\u0591-\u05C7]/g, '');
}

const BY_CH = new Map(LETTERS.map((l) => [l.ch, l]));

export const ALL_CHARS = LETTERS.map((l) => l.ch);

/** סדר עמודות למפת החום — לפי סדר הלקסיקון, בלי המילים הזהות לעברית */
export const HEATMAP_ORDER = LETTERS.filter((l) => !l.same).map((l) => l.ch);

/** מילה ארמית (ללא ניקוד) → תרגום בעברית */
export const ARAMAIC_GLOSS: Record<string, string> = Object.fromEntries(
  LETTERS.map((l) => [l.ch, l.name])
);

/** מחזיר את הצורה המנוקדת אם קיימת בלקסיקון */
export function vocalize(word: string): string {
  return BY_CH.get(stripNiqqud(word))?.voc ?? word;
}

export function lexEntry(word: string): LetterInfo | undefined {
  return BY_CH.get(stripNiqqud(word));
}

/** תחיליות שנשארות זהות בתרגום (ו/ש/ה/ב/ל/כ/מ/ד) */
const PREFIXES = new Set(['ו', 'ש', 'ה', 'ב', 'ל', 'כ', 'מ', 'ד']);

/** מנקה ניקוד וסימני פיסוק מקצוות המילה */
export function stripPunct(token: string): string {
  return stripNiqqud(token).replace(/^[^\u05D0-\u05EA]+|[^\u05D0-\u05EA]+$/g, '');
}

/**
 * תרגום למילה ארמית בתוך טקסט, כולל תחיליות וניקוד.
 * למשל "לְשׁוּקָא" → "לשוק", "שְׁלֵיכָּא" → "שאין".
 * מילים שסומנו same מחזירות null — הן לא זקוקות לתרגום.
 */
export function glossFor(token: string, extra?: Record<string, string>): string | null {
  const word = stripPunct(token);
  if (!word) return null;
  const table = extra ? { ...ARAMAIC_GLOSS, ...extra } : ARAMAIC_GLOSS;
  const isSame = (w: string) => !extra?.[w] && BY_CH.get(w)?.same;
  if (table[word]) return isSame(word) ? null : table[word];
  // ניסיון עם תחילית אחת, ואז שתיים (למשל "ושליכא")
  for (let n = 1; n <= 2 && n < word.length; n++) {
    const prefix = word.slice(0, n);
    if (![...prefix].every((c) => PREFIXES.has(c))) break;
    const base = word.slice(n);
    if (!table[base]) continue;
    if (isSame(base)) return null;
    const meaning = table[base];
    // מילים כמו "מלכא" כבר מתורגמות "המלך"; ה׳ נוספת תיצור "ההמלך"
    if (prefix.endsWith('ה') && meaning.startsWith('ה')) return prefix.slice(0, -1) + meaning;
    return prefix + meaning;
  }
  return null;
}

/** האם המילה (או צורתה עם תחילית) היא ארמית שדורשת תרגום */
export function isAramaic(token: string, extra?: Record<string, string>): boolean {
  return glossFor(token, extra) !== null;
}

export const FINAL_TO_BASE: Record<string, string> = {
  'ך': 'כ',
  'ם': 'מ',
  'ן': 'נ',
  'ף': 'פ',
  'ץ': 'צ',
};

const HEBREW_RE = /[א-ת]/;

export function hebrewLetters(text: string): string[] {
  return [...stripNiqqud(text)].filter((c) => HEBREW_RE.test(c));
}

export function uniqueLetters(text: string): string[] {
  return [...new Set(hebrewLetters(text))];
}
