# מנווטים בארמית · Navigating Aramaic

מסע משחקי ללימוד **ארמית** לדוברי עברית מודרנית — ילדים ונוער מנווטים בין תחנות לאורך שביל במבוך פשוט, עד בית המדרש, ומסיימים ב**הצופן הארמי**.

A playful journey for Hebrew speakers learning **Aramaic** — kids navigate stations along a simple maze path, reach the Beit Midrash, and finish with **the Aramaic Cipher** escape room.

**Live demo:** [https://YH-EDU.github.io/menavtim/](https://YH-EDU.github.io/menavtim/)

**Netlify (כתובת נקייה):** פריסה מוכנה (`npm run deploy:netlify`) — ממתינה להגדרת דומיין/חשבון Netlify.

> **הערה על הכתובת:** ב-GitHub Pages הכתובת כוללת את שם המשתמש (`YH-EDU`). לנתיב קצר יותר (למשל `menavtim.com`) נדרש **דומיין פרטי** או Netlify.

---

## חזון חינוכי · Educational vision

ארמית היא שפת התלמוד, התפילה והמקרא — אבל לרוב הלומדים היא "שפה זרה". **מנווטים בארמית** הופך את הלמידה למשחק מסע פשוט: הילד בוחר דמות, הולך על מפת מבוך אינטראקטיבית ב-Phaser, ומגיע לתחנות פעילות קצרות. כל תחנה מלמדת מילה, ביטוי או מבנה — עם כוכבים, נקודות ומשוב מיידי. בסיום המסע מחכה חדר בריחה בבית המדרש.

Aramaic is the language of Talmud, prayer, and parts of Scripture — yet it often feels foreign to modern Hebrew speakers. **Navigating Aramaic** turns learning into a simple journey game: pick a character, walk an interactive Phaser maze map, and reach short activity stations. Each station teaches a word, phrase, or pattern — with stars, points, and instant feedback. The journey ends with an escape room in the Beit Midrash.

הפרויקט מבוסס על מנוע המשחקים של [חפציה בן ארצי](https://chepti.com) (מסע כתב רש״י) — אותן מכניקות ליבה, תוכן ארמית חדש.

Based on the game engine by [Chepti Ben Artzi](https://chepti.com) (Rashi script journey) — same core mechanics, new Aramaic content.

---

## איך המשחק עובד · How the game works

### המסע · The path

- **מפת מסע (Phaser)** — שביל במבוך פשוט עם תחנות לאורך הדרך, עד **בית מדרש**.
- **46 תחנות** לאורך 14 יחידות לימוד, מסודרות לפי סדר.
- השחקן מנוע בחצים / מגע, נכנס לתחנה כשהוא לידה, ומשחק פעילות (חידון, זיכרון, סיפור, ועוד).
- אחרי היחידות ומבחן הגמר — סיום המסע ב**הצופן הארמי** (חדר בריחה בבית המדרש).

### שליטה במובייל · Mobile controls

- **החלקה** — הדמות רצה; החלקה קלה ימינה/שמאלה מסובבת כיוון.
- **הקשה** — עצירה.
- **D-pad וירטואלי** — כפתורי כיוון בפינה השמאלית-תחתונה (אפשרות נוספת נפוצה, נשארת זמינה).

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
- בחדר הבריחה, מסך הניצחון מציג את **כוכבי המסע המצטברים**.

### ניווט חופשי · Free vs locked navigation

- **תרגול חופשי (אורח)** — כל התחנות פתוחות (כולל הצופן הארמי); מתאים לתרגול עצמי.
- **קוד כיתה** — מורה יכול לעקוב אחר התקדמות; תחנות נפתחות לפי סדר (אלא אם הופעל ניווט חופשי). חדר הבריחה נפתח כשכל התחנות הקודמות הושלמו.

### דמויות · Characters

8 דמויות לבחירה (אביר, חנה, שועל, נמר, רובוט, חד־קרן, מכונית, חללית) — ראו קרדיטים למטה.

**חשוב:** דמות המשחק (אביר/חנה וכו') נפרדת מ**סימן המזהה** (אימוג'י) — האימוג'י + השם שומרים את ההתקדמות; הדמות היא רק איך השחקן נראה על המפה. אפשר **להחליף דמות** באמצע המסע בלי לאפס כוכבים או מיקום.

### שמירה והמשך · Save & resume

| מצב | מפתח זהות | איפה נשמר | בין מחשבים? |
|-----|-----------|-----------|-------------|
| **תרגול חופשי (אורח)** | שם + אימוג'י מזהה | `localStorage` במכשיר | **לא** — רק אותו מחשב/דפדפן |
| **קוד כיתה** | שם + אימוג'י מזהה | שרת PHP + SQLite (`api/`) | **כן** — אותו שם + אימוג'י מכל מחשב |

- בכניסה: כל תלמיד **חייב** להזין **כינוי** ולבחור **אימוג'י מזהה** (מבחר עשיר, כמו ב-WhatsApp) — בנוסף לבחירת דמות.
- **פתיחה קרה (cold start):** האפליקציה נפתחת תמיד במסך הנחיתה — לא קופצים ישר למפה. סגירת הדפדפן דורשת הרשמה מחדש לפגישה, אבל ההתקדמות נשארת ב־`localStorage` (או בשרת בכיתה).
- **המשך:** אותו שם + **אותו** אימוג'י → טוען התקדמות קיימת.
- **אימוג'י שגוי:** הודעה עדינה — *"האימוג'י לא תואם לשם הזה"* — בלי לחשוף מידע על משתמשים אחרים.
- **התנגשות:** סיכוי נמוך ששני תלמידים יבחרו אותו שם + אימוג'י; בכיתה השם ייחודי per class (האימוג'י הוא "סיסמה קטנה").

### הקראה ומסך מלא · TTS & fullscreen

- **TTS (הקראה)** — כפתור בולט בפעילויות; הקשה קצרה מכבה ומדליקה.
- **מסך מלא** — זמין בכל מסכי המשחק ובחדר הבריחה.

### הצופן הארמי · Escape room (journey finale)

תחנת הסיום של המסע, בבית המדרש — אחרי יחידות הלימוד ומבחן הגמר.

**למורה / לתלמיד — איך זה עובד:**

1. **מסך פתיחה** — הוראות קצרות + טיפים לטלפון/מחשב; אפשר להיכנס למסך מלא.
2. **חדר 360°** — גוררים להסתכל מסביב; חפשו זוהר על החפץ הפעיל.
3. **שרשרת של 10 חפצים** שמתחילה ב**ארון**:  
   ארון → שרגא → מיא → תלמידא → רבי → חלון → ספרא → ספסלא → תרעא → קולמוס → (מילת צופן אחרונה).
4. בכל שלב חוזרים על אותו מחזור: **חפץ → מחשבון (גימטרייה) → מנעול**  
   מוצאים חפץ → פותרים חידה ארמית (עם **תרגום־מילה בלחיצה** / gloss) → מחשבים ספרה בגימטרייה → מזינים בחוגת המנעול.
5. אחרי עשר ספרות המנעול נפתח → **חדר סודי פנימי** ומשימת סיום → מסך ניצחון עם **כוכבי המסע המצטברים**.

עזרים בחדר: לוח גימטרייה, הדרכה/רמזים מותאמים כשנתקעים במעבר מגימטרייה למנעול, והנחיה קולית/ממשק מלא מסך כמו בשאר האפליקציה.

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
14. **בחינה סופית** — כל המכניקות; כולל **המוזאיקה הארמית** (משימת צביעה בחלק האחרון של המבחן). אחרי המבחן — **הצופן הארמי** (חדר בריחה בבית המדרש).

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
| Analytics | Google Analytics (hash routing) |
| אחסון פרודקשן | GitHub Pages (`gh-pages` branch) |

---

## הרצה מקומית · Run locally

```bash
cd app
npm install
npm run dev
```

פתחו [http://localhost:5173/menavtim/](http://localhost:5173/menavtim/) — ה-`base` ב-Vite הוא `/menavtim/`.

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

**URL חי:** `https://YH-EDU.github.io/menavtim/`

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
- **base path:** `/menavtim/` — חייב להתאים ב-`vite.config.ts` ובכל נתיבי `public/`.
- **מפת Phaser:** `journeyMap.ts` בונה מבוך (שביל + קירות) ובית מדרש; `MainScene.ts` מצייר ומנהל אינטראקציה.
- **Overlay React:** תחנות ומדליה מוצגות כ-HTML מעל canvas Phaser (`PhaserStationOverlay`).

---

## מנועים ופעילויות — ייחוס מקור · Engines & activities attribution

הטבלה מסווגת לפי הקוד בפרויקט: מנועי הפעילויות המקוריים של [חפציה בן ארצי](https://chepti.com) (מסע כתב רש״י) לעומת מה שנוסף או הורחב ב**מנווטים בארמית**.

| מנוע / פעילות | מקור | הערות |
|---------------|------|--------|
| **Quiz** (חידון) | מקורי של חפציה | אותה מכניקת ליבה |
| **Flashcards** (כרטיסיות) | מקורי של חפציה | |
| **Match** (התאמה) | מקורי של חפציה | |
| **Memory** (זיכרון) | מבוסס+מורחב | מנוע חפציה, עיצוב/תוכן ארמית מחודש |
| **WordSearch** (תפזורת) | מקורי של חפציה | |
| **Story** (סיפור) | מקורי של חפציה | |
| **Order** (סידור) | מקורי של חפציה | |
| **Paint** (ציור) | מבוסס+מורחב | מנוע חפציה, שיפורים למסע ארמית |
| **Intro** (הקדמה) | מקורי של חפציה | |
| **Discover** (גילוי) | פיתוח חדש במנווטים | סוג פעילות חדש — לא היה במנוע רש״י |
| **Annotate** (הערה/תיוג) | פיתוח חדש במנווטים | סוג פעילות חדש |
| **FillInBlank** (השלמת משפט) | פיתוח חדש במנווטים | |
| **MixedQuestion** (שאלות מעורבות) | פיתוח חדש במנווטים | |
| **Morph** (שינוי צורה) | פיתוח חדש במנווטים | |
| **TrueFalse** (נכון/לא נכון) | פיתוח חדש במנווטים | |
| **SentenceBuilder** (בניית משפט) | פיתוח חדש במנווטים | |
| **מפת מסע Phaser** | פיתוח חדש במנווטים | מבוך, תחנות, בית מדרש — לא היה במקור |
| **הצופן הארמי / Escape room** | פיתוח חדש במנווטים | חדר 360°, שרשרת חפצים, גימטרייה ומנעול |
| **בחירת דמויות / avatars** | פיתוח חדש במנווטים | 8 דמויות עם אנימציה |
| **HUD כוכבים / מדליה** | פיתוח חדש במנווטים | |
| **רישום אורח / כיתה** | פיתוח חדש במנווטים | |
| **שליטה במגע (swipe-to-run)** | פיתוח חדש במנווטים | |
| **Teacher API + SQLite** | מבוסס+מורחב | מורש ממערכת LMS של רש״י, מותאם לארמית |

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
| חנה (מיסה) | Phaser RPG / Tuxemon sample atlas | bundled |
| אביר | Animated Shield Maiden (Sevarihk) | CC-BY 4.0 |
| שועל | Fox Wolf Pack Rework | OGA-BY 3.0+ |
| נמר | [LPC] Cats Rework (bluecarrot16) — עם נקודות נמר | CC-BY / GPL / OGA-BY |
| רובוט | Kenney Toon Characters 1 | CC0 |
| חד־קרן | LPC Horse Extended (bluecarrot16) | CC-BY / GPL / OGA-BY |
| מכונית | Kenney Racing Pack | CC0 |
| חללית | Kenney Space Shooter Redux | CC0 |

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

פתחו issue ב-GitHub או שלחו משוב דרך כפתור המשוב באפליקציה (קישור Gmail compose במסך הפתיחה).
