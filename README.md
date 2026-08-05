# מנווטים בארמית · Navigating Aramaic

מסע משחקי ללימוד **ארמית** לדוברי עברית מודרנית — ילדים ונוער מנווטים בין תחנות לאורך שביל ארץ־ישראל, מהכרם ועד בית המדרש.

A playful journey for Hebrew speakers learning **Aramaic** — kids navigate stations along an Israel-themed path, from vineyard to Beit Midrash.

**Live demo:** [https://yosefyotam-glitch.github.io/menavtim-baaramit/](https://yosefyotam-glitch.github.io/menavtim-baaramit/)

---

## חזון חינוכי · Educational vision

ארמית היא שפת התalmud, התפילה והמקרא — אבל לרוב הלומדים היא "שפה זרה". **מנווטים בארמית** הופך את הלמידה למסע: הילד בוחר דמות, הולך על מפת Phaser אינטראקטיבית, ומגיע לתחנות פעילות קצרות. כל תחנה מלמדת מילה, ביטוי או מבנה — עם כוכבים, נקודות ומשוב מיידי.

Aramaic is the language of Talmud, prayer, and parts of Scripture — yet it often feels foreign to modern Hebrew speakers. **Navigating Aramaic** turns learning into a journey: pick a character, walk an interactive Phaser map, and reach short activity stations. Each station teaches a word, phrase, or pattern — with stars, points, and instant feedback.

הפרויקט מבוסס על מנוע המשחקים של [חפציה בן ארצי](https://chepti.com) (מסע כתב רש״י) — אותן מכניקות ליבה, תוכן ארמית חדש.

Based on the game engine by [Chepti Ben Artzi](https://chepti.com) (Rashi script journey) — same core mechanics, new Aramaic content.

---

## איך המשחק עובד · How the game works

### המסע · The path

- **מפת מסע (Phaser)** — שביל ארץ־ישראל: כרם → גשר → טרסות → **בית מדרש** (יעד סופי).
- **46 תחנות** לאורך 14 יחידות לימוד, מסודרות לפי סדר.
- השחקן מנוע בחצים / מגע, נכנס לתחנה כשהוא לידה, ומשחק פעילות (חידון, זיכרון, סיפור, ועוד).

### תחנות · Stations

| מצב | משמעות |
|-----|--------|
| 🔒 נעול | תחנה שעדיין לא נפתחה (יש לסיים קודמת) |
| פתוח | ניתן להיכנס ולשחק |
| ✓ הושלם | ציון וכוכבים (1–3) לפי ביצוע |
| ⭐ נוכחי | התחנה הבאה במסלול |

### כוכבים ונקודות · Stars & points

- כל פעילות מעניקה עד **3 כוכבים** לפי אחוז הצלחה.
- **HUD כוכבים** בראש המסך מציג סיכום מצטבר.
- בסיום כל התחנות — **מדליה** על בימת בית המדרש עם סיכום הישגים.

### ניווט חופשי · Free vs locked navigation

- **תרגול חופשי (אורח)** — כל התחנות פתוחות; מתאים לתרגול עצמי.
- **קוד כיתה** — מורה יכול לעקוב אחר התקדמות; תחנות נפתחות לפי סדר (אלא אם הופעל ניווט חופשי).

### דמויות · Characters

8 דמויות לבחירה (מיסה, אבירה, שועל, חתול, רובוט, סוס, מכונית, רקטה) — ראו קרדיטים למטה.

---

## יחידות לימוד · Curriculum (14 units)

1. **ארמית יומיומית** — Quiz + Flashcards
2. **סיומת א׳** — Match + Memory + WordSearch
3. **ביטויים** — Story + Quiz
4. **ניגודים** — Match + Memory
5. **מילות שאלה** — Intro + Quiz + Flashcards
6. **תחיליות** — Quiz + Flashcards + Order + Paint
7. **יחסות** — פעילויות מעורבות
8.–13. יחידות נוספות (מספרים, פעלים, זמנים…)
14. **בחינה סופית** — כל המכניקות

תוכן מלא: `app/src/data/units.ts`

---

## טכנולוגיות · Tech stack

| שכבה | טכנולוגיה |
|------|-----------|
| UI | React 18 + TypeScript |
| בנייה | Vite 5 |
| מפת מסע | Phaser 4 (Tilemap, sprites, physics) |
| עיצוב | CSS מותאם, RTL, גופן Heebo |
| אחסון מקומי | localStorage (התקדמות, דמות, הגדרות) |
| API מורים (אופציונלי) | PHP + SQLite ב-`api/` |
| אנalytics | Google Analytics (hash routing) |
| אחסון פרודקשן | GitHub Pages (`gh-pages` branch) |

---

## הרצה מקומית · Run locally

```bash
cd app
npm install
npm run dev
```

פתחו [http://localhost:5173/menavtim-baaramit/](http://localhost:5173/menavtim-baaramit/) — ה-`base` ב-Vite הוא `/menavtim-baaramit/`.

### API מורים (אופציונלי)

```bash
# משורש mathgame/
php -S localhost:8090
```

### בניית דמויות (atlases)

```bash
cd app
npm run build:avatars
```

---

## פריסה · Deploy to GitHub Pages

```bash
cd app
npm run deploy
```

הסקריפט `scripts/deploy-gh-pages.mjs`:
1. מריץ `npm run build`
2. מעתיק את `app/dist/` לענף `gh-pages`
3. דוחף ל-`origin gh-pages`

**URL חי:** `https://<username>.github.io/menavtim-baaramit/`

---

## תהליך פיתוח · Development notes

```
mathgame/
├── app/                    # פרונט (Vite + React + Phaser)
│   ├── public/             # נכסים סטטיים (רקעים, avatars, phaser-rpg)
│   ├── scripts/            # build-avatar-atlases, deploy-gh-pages
│   └── src/
│       ├── data/units.ts   # תוכן לימודי
│       ├── game/phaser/    # מפת מסע, שחקן, תחנות
│       ├── games/          # רכיבי פעילויות (Quiz, Memory, …)
│       └── views/          # מסכים (Landing, JourneyMap, PlayView)
├── api/                    # PHP + SQLite (אופציונלי)
└── README.md
```

- **ניתוב:** hash-based (`#/map`, `#/play/...`) — עובד ב-GitHub Pages ללא הגדרות שרת.
- **base path:** `/menavtim-baaramit/` — חייב להתאים ב-`vite.config.ts` ובכל נתיבי `public/`.
- **מפת Phaser:** `journeyMap.ts` בונה שביל, קירות, בית מדרש; `MainScene.ts` מצייר ומנהל אינטראקציה.
- **Overlay React:** תחנות ומדליה מוצגות כ-HTML מעל קanvas Phaser (`PhaserStationOverlay`).

---

## קרדיטים · Credits

### מנוע ותוכן מקורי
- **חפציה בן ארצי** — מנוע המשחקים המקורי (מסע כתב רש״י) · [chepti.com](https://chepti.com)

### ספריות
- **React**, **Vite**, **TypeScript**
- **Phaser** — [phaser.io](https://phaser.io)
- **canvas-confetti**

### אמנות ודמויות (CC0 / open license)

| דמות | מקור | רישיון |
|------|------|--------|
| מיסה | Phaser RPG / Tuxemon sample atlas | bundled |
| אבירה | Animated Shield Maiden (Sevarihk) | CC-BY 4.0 |
| שועל | Fox Wolf Pack Rework | OGA-BY 3.0+ |
| חתול | [LPC] Cats Rework (bluecarrot16) | CC-BY / GPL / OGA-BY |
| רובוט | Kenney Toon Characters 1 | CC0 |
| סוס | LPC Horse Extended (bluecarrot16) | CC-BY / GPL / OGA-BY |
| מכונית | Kenney Racing Pack | CC0 |
| רקטה | Kenney Space Shooter Redux | CC0 |

פירוט מלא: `app/public/avatars/README.md`

### Kenney & OpenGameArt
- [Kenney Toon Characters](https://opengameart.org/content/toon-characters-1)
- [Kenney Racing Pack](https://opengameart.org/content/racing-pack)
- [Kenney Space Shooter Redux](https://opengameart.org/content/space-shooter-redux)
- [Animated Shield Maiden](https://opengameart.org/content/animated-shield-maiden-sprite-busts)
- [Fox Wolf Pack Rework](https://opengameart.org/content/fox-wolf-pack-rework)
- [LPC Cats Rework](https://opengameart.org/content/cats-rework)
- [LPC Horse Extended](https://opengameart.org/content/lpc-horse-extended)

---

## רישיון · License

קוד הפרויקט: לפי שימוש חינוכי/לא מסחרי של המחברים.

נכסי אמנות של צד שלישי — לפי הרישיונות בטבלת הקרדיטים (CC0, CC-BY, OGA-BY וכו').

תוכן לימודי (ארמית) — נוצר לפרויקט זה.

---

## משוב · Feedback

פתחו issue ב-GitHub או שלחו משוב דרך כפתור המשוב באפליקציה.
