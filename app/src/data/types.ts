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
  /** rashi = הצד הקבוע (יעד); label = הצד לבחירה (אם חסר — משתמשים ב-rashi) */
  pairs: { rashi: string; label?: string }[];
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
  /** שכבה ראשית (ארמית) */
  paragraphs: string[];
  /** שכבת תרגום לעברית — אם קיימת, הסליידר חושף אותה במקום אותו טקסט בפונט אחר */
  translations?: string[];
  questions: QuizQuestion[];
}

export interface OrderActivity {
  type: 'order';
  id: string;
  title: string;
  instructions: string;
  items: string[];
}

export interface PaintActivity {
  type: 'paint';
  id: string;
  title: string;
  instructions: string;
  gridSize: number;
  steps: { text: string; cells: [number, number][] }[];
  revealEmoji: string;
}

export interface QuizQuestion {
  prompt: string;
  /** טקסט להצגה על כרטיס (ארמית / ביטוי) */
  rashiText?: string;
  options: string[];
  correct: number;
  targetLetters?: string[];
}

export interface QuizActivity {
  type: 'quiz';
  id: string;
  title: string;
  instructions: string;
  questions: QuizQuestion[];
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
  | QuizActivity;

export interface Unit {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  /** מילים/מושגים חדשים ביחידה (למפה ולמורה) */
  newLetters: string[];
  activities: Activity[];
}
