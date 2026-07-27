# לומדים ארמית

מסע משחקי ללימוד **ארמית** לדוברי עברית מודרנית.

מבוסס על מנוע המשחקים של [חפציה בן ארצי](https://chepti.com) (מסע כתב רש״י) — אותן מכניקות, תוכן חדש.

## 7 יחידות

1. **ארמית יומיומית** — Quiz + Flashcards (דיעבד, דווקא, אגב…)
2. **סיומת א׳** — Match + Memory + WordSearch (מלכא = המלך)
3. **ביטויים** — Story/Slider + Quiz (איפכא מסתברא…)
4. **ניגודים** — Match + Memory (רישא ↔ סיפא)
5. **מילות שאלה** — Intro + Quiz + Flashcards (מאי, מאן…)
6. **תחיליות** — Quiz + Flashcards + Order + Paint
7. **בוס סופי** — כל 9 המכניקות מעורבבות

## פיתוח מקומי

```bash
cd app
npm install
npm run dev
```

האפליקציה רצה עם `base: '/aramit/'`.

אופציונלי — API מורים/כיתות:

```bash
# משורש הפרויקט
php -S localhost:8090
```

## מבנה

```
mathgame/
├── app/          פרונט (Vite + React + TypeScript)
│   └── src/data/units.ts   ← כל תוכן הלימוד
├── api/          PHP + SQLite (אופציונלי)
└── README.md
```

## קרדיט

מנוע משחקים מקורי: חפציה בן ארצי · [חולמים תקשוב](https://chepti.com)
