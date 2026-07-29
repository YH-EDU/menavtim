import React, { useMemo, useState } from 'react';
import type { PaintActivity, ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { stripPunct } from '../data/letters';
import { playCorrect, playTap, playWrong } from '../lib/sound';

// מוזאיקה ארמית: במקרא מילים ארמיות בלי תרגום, ובכל משבצת מילה עברית.
// בוחרים מילה ארמית כמכחול, וצובעים את כל המשבצות שהמשמעות שלהן מתאימה לה.
// כשכל הלוח צבוע הכתוביות נעלמות והתמונה מתגלה.

export default function Paint({
  activity,
  onFinish,
}: {
  activity: PaintActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const { legend, grid } = activity;
  const [brush, setBrush] = useState(0);
  const [filled, setFilled] = useState<Record<string, number>>({});
  const [badCell, setBadCell] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [events] = useState<LetterEvents>({});

  const total = useMemo(
    () => grid.reduce((n, row) => n + row.filter((c) => c !== null).length, 0),
    [grid]
  );
  const doneCount = Object.keys(filled).length;
  const done = doneCount >= total;

  const colorOf = (meaning: string) => legend.findIndex((l) => l.meaning === meaning);

  const paint = (r: number, c: number) => {
    const cell = grid[r][c];
    if (cell === null || done) return;
    const k = `${r},${c}`;
    if (filled[k] !== undefined) return;

    const want = colorOf(cell);
    if (want === brush) {
      playTap();
      addLetterEvent(events, stripPunct(legend[brush].word), true);
      const next = { ...filled, [k]: brush };
      setFilled(next);
      // מסך הסיום לא נפתח מעצמו — התלמיד מסתכל על התמונה כמה שירצה ולוחץ בעצמו
      if (Object.keys(next).length >= total) playCorrect();
    } else {
      playWrong();
      setMistakes((m) => m + 1);
      addLetterEvent(events, stripPunct(legend[brush].word), false);
      setBadCell(k);
      setTimeout(() => setBadCell(null), 420);
    }
  };

  /** כמה משבצות של הצבע הזה עוד לא נצבעו — כדי לעמעם מכחול שסיים */
  const remaining = (i: number) =>
    grid.reduce(
      (n, row, r) =>
        n +
        row.filter(
          (c, ci) => c !== null && colorOf(c) === i && filled[`${r},${ci}`] === undefined
        ).length,
      0
    );

  const cols = grid[0].length;
  const cell = Math.min(62, Math.floor(560 / cols));

  return (
    <div style={{ textAlign: 'center' }}>
      {/* המקרא — מילים ארמיות בלי תרגום, כל אחת בצבע שלה */}
      <div
        style={{
          display: 'flex',
          gap: 10,
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 18,
          direction: 'rtl',
        }}
      >
        {legend.map((l, i) => {
          const active = i === brush;
          const left = remaining(i);
          return (
            <button
              key={l.word}
              onClick={() => setBrush(i)}
              className="phrase-font"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: '9px 16px 7px',
                borderRadius: 14,
                background: '#fff',
                border: `3px solid ${active ? l.color : '#e2e8f0'}`,
                boxShadow: active ? `0 6px 18px ${l.color}55` : '0 2px 6px rgba(0,0,0,0.06)',
                transform: active ? 'translateY(-2px)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.18s',
                opacity: left === 0 ? 0.45 : 1,
              }}
            >
              <span style={{ fontSize: 21, fontWeight: 800, color: 'var(--ink)' }}>{l.word}</span>
              <span
                style={{
                  width: 46,
                  height: 10,
                  borderRadius: 999,
                  background: l.color,
                  border: '1px solid rgba(0,0,0,0.10)',
                }}
              />
            </button>
          );
        })}
      </div>

      <p style={{ color: 'var(--ink-soft)', fontSize: 15, margin: '0 0 14px' }}>
        {done ? (
          <span className="float-up" style={{ color: 'var(--green)', fontWeight: 800, fontSize: 20 }}>
            {activity.revealText} {activity.revealEmoji}
          </span>
        ) : (
          <>
            המכחול שבידכם: <strong className="phrase-font" style={{ fontSize: 18 }}>{legend[brush].word}</strong>
            {' — '}צבעו את כל המשבצות שמתאימות לו ({doneCount}/{total})
          </>
        )}
      </p>

      {/* הלוח */}
      <div
        style={{
          display: 'inline-grid',
          // הלוח נשאר משמאל לימין כדי שהתמונה תיראה כפי שהיא מוגדרת
          direction: 'ltr',
          gridTemplateColumns: `repeat(${cols}, ${cell}px)`,
          gap: 3,
          padding: 10,
          borderRadius: 16,
          background: '#fff',
          border: '2px solid #e7d9b0',
          boxShadow: 'var(--shadow)',
        }}
      >
        {grid.map((row, r) =>
          row.map((text, c) => {
            const k = `${r},${c}`;
            const idx = filled[k];
            const isFilled = idx !== undefined;
            if (text === null) {
              return <div key={k} style={{ width: cell, height: cell, background: 'transparent' }} />;
            }
            return (
              <button
                key={k}
                onClick={() => paint(r, c)}
                className={badCell === k ? 'shake' : ''}
                disabled={isFilled}
                style={{
                  width: cell,
                  height: cell,
                  borderRadius: 5,
                  border: `1px solid ${isFilled ? 'rgba(0,0,0,0.12)' : '#e2e8f0'}`,
                  background: isFilled ? legend[idx].color : badCell === k ? 'var(--red-soft)' : '#fff',
                  color: '#334155',
                  fontSize: 11.5,
                  fontWeight: 700,
                  lineHeight: 1.1,
                  padding: 0,
                  cursor: isFilled ? 'default' : 'pointer',
                  transition: 'background 0.25s, color 0.25s',
                  overflow: 'hidden',
                }}
              >
                {/* כשהמוזאיקה שלמה הכתוביות נעלמות והתמונה מתגלה */}
                <span style={{ opacity: done ? 0 : isFilled ? 0.55 : 1, transition: 'opacity 0.7s' }}>
                  {text}
                </span>
              </button>
            );
          })
        )}
      </div>

      {done && (
        <div className="float-up" style={{ marginTop: 20 }}>
          <button
            className="btn"
            onClick={() =>
              onFinish({ score: Math.max(1, total - mistakes), max: total, letters: events })
            }
          >
            סיימתי את המסע ←
          </button>
        </div>
      )}
    </div>
  );
}
