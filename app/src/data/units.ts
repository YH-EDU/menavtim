import type { Unit } from './types';

// מסע ארמית לדוברי עברית מודרנית — 7 יחידות.
// כל המכניקות של חפציה נשמרות; התוכן בלבד הוחלף.

export const UNITS: Unit[] = [
  // ─────────────────────────────── יחידה 1 ───────────────────────────────
  {
    id: 'everyday',
    title: 'ארמית יומיומית',
    subtitle: 'מילים ארמיות שחיות בעברית שלנו',
    icon: '💬',
    newLetters: ['דיעבד', 'דווקא', 'אגב', 'בעליל'],
    activities: [
      {
        type: 'intro',
        id: 'everyday-intro',
        title: 'הכירו את המילים',
        instructions:
          'לחצו על כל כרטיס כדי להפוך אותו ולראות את המשמעות בעברית. אלה מילים ארמיות שמשתמשים בהן גם היום!',
        letters: ['דיעבד', 'דווקא', 'אגב', 'בעליל', 'אדרבא', 'ברי', 'שמא', 'היינו'],
      },
      {
        type: 'quiz',
        id: 'everyday-quiz',
        title: 'השלימו את המשפט',
        instructions: 'בחרו את המילה הארמית המתאימה למשפט בעברית.',
        questions: [
          {
            prompt: 'הוא לא תכנן לבוא, אבל ___ הכל הסתדר.',
            options: ['דיעבד', 'דווקא', 'אגב'],
            correct: 0,
            targetLetters: ['דיעבד'],
          },
          {
            prompt: 'לא סתם בחרתי בזה — ___ בזה רציתי!',
            options: ['אגב', 'דווקא', 'שמא'],
            correct: 1,
            targetLetters: ['דווקא'],
          },
          {
            prompt: '___ רציתי לשאול — מתי נפגשים?',
            options: ['בעליל', 'ברי', 'אגב'],
            correct: 2,
            targetLetters: ['אגב'],
          },
          {
            prompt: 'זה לא סוד — הוא אמר את זה ___.',
            options: ['בעליל', 'שמא', 'היינו'],
            correct: 0,
            targetLetters: ['בעליל'],
          },
          {
            prompt: 'חשבתם שלא יבוא? ___ — הוא הגיע ראשון!',
            options: ['דיעבד', 'אדרבא', 'אגב'],
            correct: 1,
            targetLetters: ['אדרבא'],
          },
          {
            prompt: 'זה ___ ברור — אין ספק בכלל.',
            options: ['שמא', 'היינו', 'ברי'],
            correct: 2,
            targetLetters: ['ברי'],
          },
          {
            prompt: '___ ירד גשם? כדאי לקחת מטרייה.',
            options: ['שמא', 'דווקא', 'בעליל'],
            correct: 0,
            targetLetters: ['שמא'],
          },
          {
            prompt: 'הכוונה היא… ___ — בקיצור, בואו נתחיל.',
            options: ['אגב', 'היינו', 'דיעבד'],
            correct: 1,
            targetLetters: ['היינו'],
          },
        ],
      },
      {
        type: 'flashcards',
        id: 'everyday-cards',
        title: 'תרגמו לעברית',
        instructions: 'רואים מילה בארמית — כתבו את המשמעות בעברית.',
        cards: [
          { text: 'דיעבד', answer: 'בדיעבד' },
          { text: 'דווקא', answer: 'דווקא' },
          { text: 'אגב', answer: 'אגב' },
          { text: 'בעליל', answer: 'בעליל' },
          { text: 'אדרבא', answer: 'אדרבא' },
          { text: 'ברי', answer: 'ודאי' },
          { text: 'שמא', answer: 'שמא' },
          { text: 'היינו', answer: 'כלומר' },
        ],
      },
    ],
  },

  // ─────────────────────────────── יחידה 2 ───────────────────────────────
  {
    id: 'suffix-a',
    title: "סיומת א׳ — ה׳ הידיעה",
    subtitle: 'מלכא = המלך, יומא = היום',
    icon: '🔤',
    newLetters: ['מלכא', 'אבא', 'שמשא', 'יומא'],
    activities: [
      {
        type: 'intro',
        id: 'suffix-intro',
        title: 'מהי סיומת א׳?',
        instructions:
          'בארמית, סיומת א׳ בסוף המילה משמשת כמו ה׳ הידיעה בעברית. לחצו על כל כרטיס כדי לראות את התרגום.',
        letters: ['מלכא', 'אבא', 'שמשא', 'יומא', 'ליליא', 'ארעא', 'מיא', 'ביתא'],
      },
      {
        type: 'match',
        id: 'suffix-match',
        title: 'התאימו ארמית לעברית',
        instructions: 'לחצו על המילה בעברית, ואז על המילה הארמית המתאימה.',
        pairs: [
          { rashi: 'מלכא', label: 'המלך' },
          { rashi: 'אבא', label: 'האב' },
          { rashi: 'שמשא', label: 'השמש' },
          { rashi: 'יומא', label: 'היום' },
          { rashi: 'ליליא', label: 'הלילה' },
          { rashi: 'ארעא', label: 'הארץ' },
          { rashi: 'מיא', label: 'המים' },
          { rashi: 'ביתא', label: 'הבית' },
        ],
      },
      {
        type: 'memory',
        id: 'suffix-memory',
        title: 'זיכרון — זוגות תרגום',
        instructions: 'מצאו את הזוגות: מילה בארמית ותרגומה בעברית.',
        pairs: [
          { a: 'מלכא', b: 'המלך' },
          { a: 'שמשא', b: 'השמש' },
          { a: 'יומא', b: 'היום' },
          { a: 'ביתא', b: 'הבית' },
          { a: 'מיא', b: 'המים' },
          { a: 'ארעא', b: 'הארץ' },
        ],
      },
      {
        type: 'wordsearch',
        id: 'suffix-search',
        title: 'תפזורת הסיומות',
        instructions: 'מצאו את המילים הארמיות המסתתרות. לחצו על האות הראשונה וגררו עד האחרונה.',
        words: ['מלכא', 'אבא', 'שמשא', 'יומא', 'מיא', 'ביתא'],
        size: 8,
        fillPool: 'אבגדהוזחטיכלמנסעפצקרשת',
      },
    ],
  },

  // ─────────────────────────────── יחידה 3 ───────────────────────────────
  {
    id: 'phrases',
    title: 'ביטויים ארמיים',
    subtitle: 'איפכא מסתברא, רחמנא ליצלן ועוד',
    icon: '📜',
    newLetters: ['איפכא מסתברא', 'רחמנא ליצלן', 'מאי קא משמע לן'],
    activities: [
      {
        type: 'story',
        id: 'phrases-slider',
        title: 'סליידר התרגום',
        instructions:
          'גררו את הקו כדי לחשוף את התרגום לעברית. נסו קודם לנחש לבד!',
        paragraphs: [
          'איפכא מסתברא',
          'רחמנא ליצלן',
          'מאי קא משמע לן',
          'תא שמע',
          'קשיא',
          'תיקו',
        ],
        translations: [
          'ההפך הוא הנכון',
          'השם ישמור',
          'מה זה בא ללמד אותנו',
          'בוא ושמע',
          'קשה / קושיה',
          'יישאר בספק',
        ],
        questions: [
          {
            prompt: 'מה פירוש «איפכא מסתברא»?',
            options: ['ההפך הוא הנכון', 'בוא ושמע', 'השם ישמור'],
            correct: 0,
            targetLetters: ['איפכא מסתברא'],
          },
          {
            prompt: 'מתי אומרים «רחמנא ליצלן»?',
            options: ['כשמביאים ראיה', 'כשמבקשים שמירה', 'כששואלים שאלה'],
            correct: 1,
            targetLetters: ['רחמנא ליצלן'],
          },
          {
            prompt: '«מאי קא משמע לן» פירושו…',
            options: ['מה זה בא ללמד אותנו', 'יישאר בספק', 'קשה מאוד'],
            correct: 0,
            targetLetters: ['מאי קא משמע לן'],
          },
          {
            prompt: '«תיקו» אומרים כש…',
            options: ['התשובה ברורה', 'השאלה לא הוכרעה', 'מביאים ראיה'],
            correct: 1,
            targetLetters: ['תיקו'],
          },
        ],
      },
      {
        type: 'quiz',
        id: 'phrases-quiz',
        title: 'מה הביטוי אומר?',
        instructions: 'בחרו את התרגום הנכון לכל ביטוי ארמי.',
        questions: [
          {
            prompt: 'מה פירוש הביטוי?',
            rashiText: 'תא שמע',
            options: ['בוא ושמע', 'השם ישמור', 'קשה'],
            correct: 0,
            targetLetters: ['תא שמע'],
          },
          {
            prompt: 'מה פירוש הביטוי?',
            rashiText: 'קשיא',
            options: ['ודאי', 'קושיה', 'אגב'],
            correct: 1,
            targetLetters: ['קשיא'],
          },
          {
            prompt: 'מה פירוש הביטוי?',
            rashiText: 'איפכא מסתברא',
            options: ['בוא ושמע', 'ההפך הוא הנכון', 'יישאר בספק'],
            correct: 1,
            targetLetters: ['איפכא מסתברא'],
          },
          {
            prompt: 'מה פירוש הביטוי?',
            rashiText: 'רחמנא ליצלן',
            options: ['השם ישמור', 'מה בא ללמד', 'כלומר'],
            correct: 0,
            targetLetters: ['רחמנא ליצלן'],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────── יחידה 4 ───────────────────────────────
  {
    id: 'antonyms',
    title: 'ניגודים בארמית',
    subtitle: 'רישא ↔ סיפא, טבא ↔ בישא',
    icon: '⚖️',
    newLetters: ['רישא', 'סיפא', 'טבא', 'בישא'],
    activities: [
      {
        type: 'intro',
        id: 'antonyms-intro',
        title: 'הכירו את הניגודים',
        instructions: 'לחצו על כל כרטיס. שימו לב למילה המנוגדת ברמז!',
        letters: ['רישא', 'סיפא', 'טבא', 'בישא', 'רבה', 'זוטרא', 'קדמאה', 'בתראה'],
      },
      {
        type: 'match',
        id: 'antonyms-match',
        title: 'התאימו ניגודים',
        instructions: 'לחצו על מילה, ואז על הניגוד שלה.',
        pairs: [
          { rashi: 'רישא', label: 'סיפא' },
          { rashi: 'טבא', label: 'בישא' },
          { rashi: 'רבה', label: 'זוטרא' },
          { rashi: 'קדמאה', label: 'בתראה' },
        ],
      },
      {
        type: 'memory',
        id: 'antonyms-memory',
        title: 'זיכרון ניגודים',
        instructions: 'מצאו זוגות של ניגודים בארמית (עם רמז בעברית).',
        pairs: [
          { a: 'רישא (התחלה)', b: 'סיפא (סוף)' },
          { a: 'טבא (טוב)', b: 'בישא (רע)' },
          { a: 'רבה (גדול)', b: 'זוטרא (קטן)' },
          { a: 'קדמאה (ראשון)', b: 'בתראה (אחרון)' },
        ],
      },
    ],
  },

  // ─────────────────────────────── יחידה 5 ───────────────────────────────
  {
    id: 'questions',
    title: 'מילות שאלה',
    subtitle: 'מאי, מאן, היכי, אימתי…',
    icon: '❓',
    newLetters: ['מאי', 'מאן', 'היכי', 'אימתי'],
    activities: [
      {
        type: 'intro',
        id: 'questions-intro',
        title: 'איך שואלים בארמית?',
        instructions: 'לחצו על כל כרטיס כדי לגלות את התרגום בעברית.',
        letters: ['מאי', 'מאן', 'היכי', 'אימתי', 'היכא', 'אמאי', 'כמה'],
      },
      {
        type: 'quiz',
        id: 'questions-quiz',
        title: 'מה פירוש מילת השאלה?',
        instructions: 'בחרו את התרגום הנכון.',
        questions: [
          {
            prompt: 'מה פירוש «מאי»?',
            rashiText: 'מאי',
            options: ['מה', 'מי', 'איך', 'מתי'],
            correct: 0,
            targetLetters: ['מאי'],
          },
          {
            prompt: 'מה פירוש «מאן»?',
            rashiText: 'מאן',
            options: ['מה', 'מי', 'איפה', 'למה'],
            correct: 1,
            targetLetters: ['מאן'],
          },
          {
            prompt: 'מה פירוש «היכי»?',
            rashiText: 'היכי',
            options: ['מתי', 'מי', 'איך', 'כמה'],
            correct: 2,
            targetLetters: ['היכי'],
          },
          {
            prompt: 'מה פירוש «אימתי»?',
            rashiText: 'אימתי',
            options: ['מתי', 'איפה', 'למה', 'מה'],
            correct: 0,
            targetLetters: ['אימתי'],
          },
          {
            prompt: 'מה פירוש «היכא»?',
            rashiText: 'היכא',
            options: ['איך', 'איפה', 'מי', 'כמה'],
            correct: 1,
            targetLetters: ['היכא'],
          },
          {
            prompt: 'מה פירוש «אמאי»?',
            rashiText: 'אמאי',
            options: ['מה', 'מי', 'למה', 'מתי'],
            correct: 2,
            targetLetters: ['אמאי'],
          },
        ],
      },
      {
        type: 'flashcards',
        id: 'questions-cards',
        title: 'כרטיסי מילות שאלה',
        instructions: 'רואים מילה בארמית — כתבו את התרגום בעברית.',
        cards: [
          { text: 'מאי', answer: 'מה' },
          { text: 'מאן', answer: 'מי' },
          { text: 'היכי', answer: 'איך' },
          { text: 'אימתי', answer: 'מתי' },
          { text: 'היכא', answer: 'איפה' },
          { text: 'אמאי', answer: 'למה' },
          { text: 'כמה', answer: 'כמה' },
        ],
      },
    ],
  },

  // ─────────────────────────────── יחידה 6 ───────────────────────────────
  {
    id: 'prefixes',
    title: 'תחיליות ומילות חיבור',
    subtitle: 'ד־ = ש־, ב־ = ב־, ל־ = ל־…',
    icon: '🔗',
    newLetters: ['ד', 'ב', 'ל', 'מ'],
    activities: [
      {
        type: 'intro',
        id: 'prefixes-intro',
        title: 'תחיליות בארמית',
        instructions:
          'תחיליות קצרות נצמדות למילים ומשנות את משמעותן. לחצו על כל כרטיס.',
        letters: ['ד', 'ב', 'ל', 'מ', 'כ'],
      },
      {
        type: 'quiz',
        id: 'prefixes-quiz',
        title: 'איזו תחילית מתאימה?',
        instructions: 'בחרו את התחילית הנכונה לפי המשמעות.',
        questions: [
          {
            prompt: 'איזו תחילית פירושה «ש־ / של»?',
            options: ['ד', 'ב', 'ל', 'מ'],
            correct: 0,
            targetLetters: ['ד'],
          },
          {
            prompt: 'איזו תחילית פירושה «ב־ / בתוך»?',
            options: ['ל', 'ב', 'כ', 'מ'],
            correct: 1,
            targetLetters: ['ב'],
          },
          {
            prompt: 'איזו תחילית פירושה «ל־ / אל»?',
            options: ['מ', 'ד', 'ל', 'ב'],
            correct: 2,
            targetLetters: ['ל'],
          },
          {
            prompt: 'איזו תחילית פירושה «מ־ / מן»?',
            options: ['מ', 'כ', 'ד', 'ב'],
            correct: 0,
            targetLetters: ['מ'],
          },
          {
            prompt: 'איזו תחילית פירושה «כ־ / כמו»?',
            options: ['ב', 'ל', 'ד', 'כ'],
            correct: 3,
            targetLetters: ['כ'],
          },
          {
            prompt: '«דמלכא» = של המלך. איזו תחילית מופיעה?',
            options: ['ב', 'ד', 'ל'],
            correct: 1,
            targetLetters: ['ד'],
          },
        ],
      },
      {
        type: 'flashcards',
        id: 'prefixes-cards',
        title: 'תרגמו את התחילית',
        instructions: 'רואים תחילית — כתבו את המשמעות בעברית (מילה אחת או ביטוי קצר).',
        cards: [
          { text: 'ד', answer: 'של' },
          { text: 'ב', answer: 'ב' },
          { text: 'ל', answer: 'ל' },
          { text: 'מ', answer: 'מ' },
          { text: 'כ', answer: 'כמו' },
        ],
      },
      {
        type: 'order',
        id: 'prefixes-order',
        title: 'בנו ביטוי לפי הסדר',
        instructions: 'לחצו על החלקים בסדר הנכון: תחילית ← מילה ← סיומת.',
        items: ['ד', 'מלך', 'א'],
      },
      {
        type: 'paint',
        id: 'prefixes-paint',
        title: 'צביעה לפי הוראה',
        instructions: 'קראו את ההוראה וצבעו את המשבצות הנכונות.',
        gridSize: 4,
        revealEmoji: '✨',
        steps: [
          { text: 'צבעו את השורה הראשונה (תחילית ד)', cells: [[0, 0], [0, 1], [0, 2], [0, 3]] },
          { text: 'צבעו את העמודה הראשונה (תחילית ב)', cells: [[0, 0], [1, 0], [2, 0], [3, 0]] },
          { text: 'צבעו את האלכסון (תחילית ל)', cells: [[0, 0], [1, 1], [2, 2], [3, 3]] },
        ],
      },
    ],
  },

  // ─────────────────────────────── יחידה 7 — בוס ───────────────────────────────
  {
    id: 'boss',
    title: 'בוס סופי — הכל ביחד!',
    subtitle: 'ערבוב של כל המכניקות והידע',
    icon: '🏆',
    newLetters: [],
    activities: [
      {
        type: 'intro',
        id: 'boss-intro',
        title: 'חימום אחרון',
        instructions: 'הפכו את הכרטיסים — תזכורת קצרה לפני האתגר הגדול.',
        letters: ['דווקא', 'מלכא', 'מאי', 'רישא', 'ד'],
      },
      {
        type: 'quiz',
        id: 'boss-quiz',
        title: 'חידון מעורב',
        instructions: 'שאלות מכל הרמות — תתרכזו!',
        questions: [
          {
            prompt: '___ רציתי את זה, לא משהו אחר.',
            options: ['אגב', 'דווקא', 'שמא'],
            correct: 1,
            targetLetters: ['דווקא'],
          },
          {
            prompt: 'מה פירוש «מלכא»?',
            rashiText: 'מלכא',
            options: ['מלך', 'המלך', 'מלוכה'],
            correct: 1,
            targetLetters: ['מלכא'],
          },
          {
            prompt: 'מה פירוש «מאן»?',
            rashiText: 'מאן',
            options: ['מה', 'מי', 'איך'],
            correct: 1,
            targetLetters: ['מאן'],
          },
          {
            prompt: 'הניגוד של «טבא» הוא…',
            options: ['רבה', 'בישא', 'סיפא'],
            correct: 1,
            targetLetters: ['בישא'],
          },
          {
            prompt: 'תחילית «ד» פירושה…',
            options: ['ב־', 'ש־ / של', 'מ־'],
            correct: 1,
            targetLetters: ['ד'],
          },
          {
            prompt: '«רחמנא ליצלן» = ',
            options: ['השם ישמור', 'בוא ושמע', 'ההפך הוא הנכון'],
            correct: 0,
            targetLetters: ['רחמנא ליצלן'],
          },
        ],
      },
      {
        type: 'match',
        id: 'boss-match',
        title: 'התאמה מהירה',
        instructions: 'לחצו על העברית, ואז על הארמית.',
        pairs: [
          { rashi: 'יומא', label: 'היום' },
          { rashi: 'אבא', label: 'האב' },
          { rashi: 'שמשא', label: 'השמש' },
          { rashi: 'ביתא', label: 'הבית' },
          { rashi: 'מיא', label: 'המים' },
        ],
      },
      {
        type: 'story',
        id: 'boss-story',
        title: 'סליידר — ביטויים אחרונים',
        instructions: 'גררו את הקו לחשיפת התרגום, ואז ענו על השאלות.',
        paragraphs: ['איפכא מסתברא', 'תא שמע', 'תיקו'],
        translations: ['ההפך הוא הנכון', 'בוא ושמע', 'יישאר בספק'],
        questions: [
          {
            prompt: '«תיקו» אומרים כש…',
            options: ['הכל ברור', 'נשאר בספק', 'מביאים ראיה'],
            correct: 1,
            targetLetters: ['תיקו'],
          },
          {
            prompt: '«תא שמע» פירושו…',
            options: ['בוא ושמע', 'השם ישמור', 'מה בא ללמד'],
            correct: 0,
            targetLetters: ['תא שמע'],
          },
        ],
      },
      {
        type: 'memory',
        id: 'boss-memory',
        title: 'זיכרון מעורב',
        instructions: 'מצאו זוגות: ארמית ↔ עברית.',
        pairs: [
          { a: 'מאי', b: 'מה' },
          { a: 'היכי', b: 'איך' },
          { a: 'רישא', b: 'התחלה' },
          { a: 'סיפא', b: 'סוף' },
        ],
      },
      {
        type: 'flashcards',
        id: 'boss-cards',
        title: 'כרטיסים אחרונים',
        instructions: 'כתבו את התרגום בעברית.',
        cards: [
          { text: 'אימתי', answer: 'מתי' },
          { text: 'היכא', answer: 'איפה' },
          { text: 'אדרבא', answer: 'אדרבא' },
          { text: 'ברי', answer: 'ודאי' },
        ],
      },
      {
        type: 'wordsearch',
        id: 'boss-search',
        title: 'תפזורת הגמר',
        instructions: 'מצאו את כל המילים הארמיות.',
        words: ['דווקא', 'אגב', 'מאי', 'מאן', 'טבא', 'מלכא'],
        size: 9,
        fillPool: 'אבגדהוזחטיכלמנסעפצקרשת',
      },
      {
        type: 'order',
        id: 'boss-order',
        title: 'סדרו את מילות השאלה',
        instructions: 'לחצו לפי הסדר: מאי ← מאן ← היכי ← אימתי ← היכא.',
        items: ['מאי', 'מאן', 'היכי', 'אימתי', 'היכא'],
      },
      {
        type: 'paint',
        id: 'boss-paint',
        title: 'ציור סיום',
        instructions: 'צבעו לפי ההוראות — הפרס מחכה בסוף!',
        gridSize: 5,
        revealEmoji: '🏆',
        steps: [
          { text: 'צבעו מסגרת חיצונית עליונה', cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]] },
          { text: 'צבעו את המרכז', cells: [[2, 2]] },
          {
            text: 'צבעו צלב במרכז',
            cells: [
              [1, 2],
              [2, 1],
              [2, 2],
              [2, 3],
              [3, 2],
            ],
          },
        ],
      },
    ],
  },
];

/** המילים שנלמדו עד יחידה מסוימת (כולל) */
export function lettersUpTo(unitIndex: number): string[] {
  const set = new Set<string>();
  for (let i = 0; i <= unitIndex && i < UNITS.length; i++) {
    UNITS[i].newLetters.forEach((l) => set.add(l));
  }
  return [...set];
}

export function totalActivities(): number {
  return UNITS.reduce((n, u) => n + u.activities.length, 0);
}
