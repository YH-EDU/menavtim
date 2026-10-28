// טיפוסי הפעילויות. כל פעילות מדווחת בסיום: ציון, מקסימום, ואירועי מילים/אותיות
// (לכל פריט: כמה פעמים נענה נכון וכמה שגוי) — מהם נגזרת רמת השליטה.

export interface LetterEvents {
  [letter: string]: { c: number; w: number }; // c=correct, w=wrong
}

export interface ActivityResult {
  score: number;
  max: number;
  letters: LetterEvents;
}

export interface IntroActivity {
  type: 'intro';
  id: string;
  title: string;
  instructions: string;
  letters: string[]; // מילים/פריטים להצגה (עם רמזים מ-letters.ts)
}

export interface FlashcardsActivity {
  type: 'flashcards';
  id: string;
  title: string;
  instructions: string;
  /** text = מה מוצג; answer = מה צריך להקליד (אם חסר — בודקים מול text) */
  cards: { text: string; answer?: string }[];
}

export interface WordSearchActivity {
  type: 'wordsearch';
  id: string;
  title: string;
  instructions: string;
  words: string[];
  size: number;
  reversed?: boolean;
  fillPool: string;
}

export interface MatchActivity {
  type: 'match';
  id: string;
  title: string;
  instructions: string;
  /** phrase = הצד הקבוע (יעד); label = הצד לבחירה (אם חסר — משתמשים ב-phrase) */
  pairs: { phrase: string; label?: string }[];
}

export interface MemoryActivity {
  type: 'memory';
  id: string;
  title: string;
  instructions: string;
  pairs: { a: string; b: string }[];
}

export interface StoryActivity {
  type: 'story';
  id: string;
  title: string;
  instructions: string;
  /** פסקאות בטקסט מעורב (עברית עם מילים ארמיות משובצות) */
  paragraphs: string[];
  /**
   * תרגום מלא לכל פסקה — נשמר לתאימות לאחור.
   * במצב הטולטיפים החדש לא נדרש.
   */
  translations?: string[];
  /** תרגום נקודתי למילים ארמיות; משלים את הלקסיקון הכללי */
  glossary?: Record<string, string>;
  /** שאלות הבנה בסוף הקריאה; אם ריק — הפעילות היא קריאה בלבד */
  questions?: QuizQuestion[];
}

export interface OrderActivity {
  type: 'order';
  id: string;
  title: string;
  instructions: string;
  items: string[];
  /** מה מציג הכיוון, למשל "מהקטן לגדול" */
  goal?: string;
  /** ברירת מחדל true. כשכבוי — לא מסגירים מה הפריט הבא */
  showNext?: boolean;
  /** תווית קטנה שמופיעה מתחת לפריט רק אחרי שסודר נכון */
  captions?: Record<string, string>;
}

/**
 * השלמת תרגום: המשפט מכיל מילים ארמיות, ומעל כל אחת יש משבצת ריקה.
 * התלמיד גורר (או מקליק) פתק עברית מהבנק שמתחת אל המשבצת הנכונה.
 */
export interface AnnotateSentence {
  /** משפט מעורב; המילים הארמיות מנוקדות */
  sentence: string;
  /** המילים הארמיות שיקבלו משבצת; אם חסר — זיהוי אוטומטי מהלקסיקון */
  words?: string[];
  /** פתקים עבריים נוספים בבנק שאין להם מקום במשפט */
  distractors?: string[];
}

export interface AnnotateActivity {
  type: 'annotate';
  id: string;
  title: string;
  instructions: string;
  sentences: AnnotateSentence[];
}

/** מוזאיקה: מקרא של מילים ארמיות וצבעים, ולוח שבו כל משבצת נושאת מילה עברית */
export interface PaintLegendEntry {
  /** המילה הארמית המנוקדת — היא שמופיעה במקרא, בלי תרגום */
  word: string;
  /** המשמעות בעברית — היא שמופיעה בתוך המשבצות */
  meaning: string;
  color: string;
}

export interface PaintActivity {
  type: 'paint';
  id: string;
  title: string;
  instructions: string;
  legend: PaintLegendEntry[];
  /** שורות הלוח משמאל לימין; null = משבצת רקע שלא צובעים */
  grid: (string | null)[][];
  /** מה מתגלה כשהמוזאיקה שלמה */
  revealEmoji: string;
  revealText: string;
}

export interface QuizQuestion {
  prompt: string;
  /** טקסט להצגה על כרטיס (ארמית / ביטוי) */
  phraseText?: string;
  options: string[];
  correct: number;
  targetLetters?: string[];
  /** מילים בתוך prompt שיודגשו; ברירת מחדל — זיהוי אוטומטי מהלקסיקון */
  highlight?: string[];
}

export interface QuizActivity {
  type: 'quiz';
  id: string;
  title: string;
  instructions: string;
  questions: QuizQuestion[];
}

/** השלמת מילה ארמית לתוך משפט עברי */
export interface FillInBlankQuestion {
  /** משפט בעברית עם "___" במקום המילה החסרה */
  sentence: string;
  /** המילה הארמית הנכונה */
  correctWord: string;
  /** כל האפשרויות (כולל הנכונה) */
  options: string[];
  /** רמז בעברית — מוצג מתחת למשפט */
  hint?: string;
}

export interface FillInBlankActivity {
  type: 'fillblank';
  id: string;
  title: string;
  instructions: string;
  questions: FillInBlankQuestion[];
}

/** שאלה בשפה מעורבת — עברית עם מילים ארמיות */
export interface MixedQuestion {
  /** השאלה עצמה (עברית + ארמית) */
  question: string;
  /** התשובה הנכונה בעברית */
  correctAnswer: string;
  /** כל האפשרויות (כולל הנכונה) */
  options: string[];
  /** מילים להדגשה; ברירת מחדל — זיהוי אוטומטי מהלקסיקון */
  highlight?: string[];
}

export interface MixedQuestionActivity {
  type: 'mixed';
  id: string;
  title: string;
  instructions: string;
  questions: MixedQuestion[];
}

/** הפיכת מילה עברית למילה ארמית באמצעות לחיצה על אותיות */
export interface MorphWord {
  /** המילה בעברית */
  baseWord: string;
  /** המילה בארמית */
  targetWord: string;
  /** הוראה לתלמיד, למשל: "החליפו ש ב-ת" */
  instruction: string;
}

export interface MorphActivity {
  type: 'morph';
  id: string;
  title: string;
  instructions: string;
  words: MorphWord[];
}

/**
 * שלב הגילוי: המילה הארמית מוצגת בתוך משפט עברי — בלי תרגום.
 * ההקשר במשפט חייב להספיק כדי שהתלמיד ינחש נכון בעצמו.
 * התרגום נחשף רק אחרי התשובה, יחד עם הכלל שמאחוריו.
 */
export interface DiscoverItem {
  /** משפט עברי פשוט וחד-משמעי שהמילה הארמית משובצת בו (מנוקדת) */
  sentence: string;
  /** המילה הארמית, בדיוק כפי שהיא מופיעה במשפט */
  word: string;
  /** התשובה הנכונה */
  meaning: string;
  /** כל האפשרויות, כולל הנכונה */
  options: string[];
  /** רמז שהתלמיד יכול לבקש לפני שהוא עונה */
  clue?: string;
  /** הכלל או הקשר לעברית — נחשף אחרי התשובה */
  reveal?: string;
}

export interface DiscoverActivity {
  type: 'discover';
  id: string;
  title: string;
  instructions: string;
  items: DiscoverItem[];
}

/** אימון שטף: טענה קצרה, נכון או לא נכון, בלחץ זמן */
export interface TrueFalseItem {
  /** למשל "מַאן = מתי" */
  claim: string;
  correct: boolean;
  /** הסבר שמוצג אחרי טעות */
  explain?: string;
}

export interface TrueFalseActivity {
  type: 'truefalse';
  id: string;
  title: string;
  instructions: string;
  items: TrueFalseItem[];
  /** שניות לכל טענה; ברירת מחדל 7 */
  seconds?: number;
}

/** בניית משפט: לוחצים על המילים לפי הסדר הנכון */
export interface BuilderSentence {
  /** המילים בסדר הנכון */
  words: string[];
  /** התרגום המלא בעברית — מוצג ככותרת המשימה */
  translation: string;
}

export interface SentenceBuilderActivity {
  type: 'builder';
  id: string;
  title: string;
  instructions: string;
  sentences: BuilderSentence[];
}

/** תחילית שברחה מהמילה — בוחרים איזו תחילית מחזירה את המשמעות */
export interface PrefixRound {
  /** המילה בלי התחילית */
  stem: string;
  /** המשמעות של המילה עם התחילית */
  meaning: string;
  /** התחילית הנכונה, כפי שמוצגת */
  prefix: string;
  decoys: string[];
  reveal: string;
}

export interface PrefixActivity {
  type: 'prefix';
  id: string;
  title: string;
  instructions: string;
  rounds: PrefixRound[];
}

/** מי מדבר — מזהים את הגוף מתוך המשפט */
export interface SpeakerRound {
  line: string;
  options: string[];
  correct: number;
  /** מילה למעקב שליטה */
  letter?: string;
  reveal: string;
}

export interface SpeakerActivity {
  type: 'speaker';
  id: string;
  title: string;
  instructions: string;
  rounds: SpeakerRound[];
}

/** מכונת הנטיות — כינוי + פועל */
export interface ConjugateRound {
  pronounHe: string;
  pronounAr: string;
  options: string[];
  correct: number;
  letter?: string;
  reveal: string;
}

export interface ConjugateActivity {
  type: 'conjugate';
  id: string;
  title: string;
  instructions: string;
  verb: string;
  verbMeaning: string;
  rounds: ConjugateRound[];
}

/** מילת המפתח במשפט או בסוגיא */
export interface KeywordRound {
  sentence: string;
  question: string;
  words: string[];
  correct: number;
  reveal: string;
}

export interface KeywordActivity {
  type: 'keyword';
  id: string;
  title: string;
  instructions: string;
  rounds: KeywordRound[];
}

/** שאלה ארמית ותשובה מתאימה */
export interface QnaRound {
  question: string;
  gloss: string;
  options: string[];
  correct: number;
  reveal: string;
}

export interface QnaActivity {
  type: 'qna';
  id: string;
  title: string;
  instructions: string;
  rounds: QnaRound[];
}

/** שלד הסוגיה — לסדר את מהלכי הסוגיא */
export interface SkeletonBeat {
  role: string;
  line: string;
  gloss: string;
}

export interface SkeletonActivity {
  type: 'skeleton';
  id: string;
  title: string;
  instructions: string;
  beats: SkeletonBeat[];
}

/** מגילה לפענוח — המילים נכתבות על הקלף בסדר הנכון */
export interface ScrollActivity {
  type: 'scroll';
  id: string;
  title: string;
  instructions: string;
  scrollName: string;
  hebrew: string;
  words: string[];
  reveal: string;
  /** שורת העברית מוצגת רק אחרי שהמגילה נכתבה */
  hideHebrewUntilReveal?: boolean;
  /** רמז קצר לכל מילה, בלי לגלות את המילה. כל רמז יורד כוכב. */
  wordHints?: string[];
}

/** משימת הצלה קצרה — כמה בחירות בתוך סיפור */
export interface RescueStep {
  emoji: string;
  scene: string;
  prompt: string;
  options: string[];
  correct: number;
  success: string;
  letter?: string;
}

export interface RescueActivity {
  type: 'rescue';
  id: string;
  title: string;
  instructions: string;
  steps: RescueStep[];
}

/** רגע סיפור בין תחנות */
export interface MomentPanel {
  emoji: string;
  text: string;
}

export interface MomentActivity {
  type: 'moment';
  id: string;
  title: string;
  instructions: string;
  panels: MomentPanel[];
  question?: {
    prompt: string;
    options: string[];
    correct: number;
    explain: string;
    hints?: string[];
  };
}

/**
 * חדר צופן מבוסס-נתונים. התוכן עצמו ב-escapeRoomsData.
 * קל למחוק: מסירים את הפעילות ואת רשומת החדר.
 */
export interface CipherActivity {
  type: 'cipher';
  id: string;
  title: string;
  instructions: string;
  roomId: string;
}

export type Activity =
  | IntroActivity
  | FlashcardsActivity
  | WordSearchActivity
  | MatchActivity
  | MemoryActivity
  | StoryActivity
  | OrderActivity
  | PaintActivity
  | QuizActivity
  | FillInBlankActivity
  | MixedQuestionActivity
  | MorphActivity
  | DiscoverActivity
  | AnnotateActivity
  | TrueFalseActivity
  | SentenceBuilderActivity
  | PrefixActivity
  | SpeakerActivity
  | ConjugateActivity
  | KeywordActivity
  | QnaActivity
  | SkeletonActivity
  | ScrollActivity
  | RescueActivity
  | MomentActivity
  | CipherActivity;

export type PhaseId = 'he-ar' | 'basic' | 'gemara';

export interface Unit {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  /** מילים/מושגים חדשים ביחידה (למפה ולמורה) */
  newLetters: string[];
  activities: Activity[];
  /** שלב המסע. נקבע בצירוף תוכנית האב-טיפוס. */
  phase?: PhaseId;
}
