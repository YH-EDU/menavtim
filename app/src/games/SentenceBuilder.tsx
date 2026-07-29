import React, { useMemo, useState } from 'react';
import type { SentenceBuilderActivity, ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { stripPunct } from '../data/letters';
import { ProgressDots } from './ui';
import { playCorrect, playTap, playWrong } from '../lib/sound';

// בניית משפט: לוחצים על המילים הארמיות לפי הסדר הנכון.
// הרחבה של רעיון הסידור הקיים — הפעם ברמת המשפט ולא ברמת הפריט הבודד.

function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed * 9301 + 49297;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SentenceBuilder({
  activity,
  onFinish,
}: {
  activity: SentenceBuilderActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [placed, setPlaced] = useState<number[]>([]); // אינדקסים במאגר, לפי סדר ההנחה
  const [wrongBank, setWrongBank] = useState<number | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [score, setScore] = useState(0);
  const [events] = useState<LetterEvents>({});

  const sentence = activity.sentences[idx];
  // כל פריט במאגר שומר את מיקומו הנכון במשפט
  const bank = useMemo(
    () => shuffle(sentence.words.map((w, i) => ({ word: w, target: i })), idx + 5),
    [sentence, idx]
  );
  const done = placed.length === sentence.words.length;

  const click = (bankIdx: number) => {
    if (done || placed.includes(bankIdx)) return;
    const entry = bank[bankIdx];
    if (entry.target === placed.length) {
      const next = [...placed, bankIdx];
      setPlaced(next);
      addLetterEvent(events, stripPunct(entry.word), true);
      if (next.length === sentence.words.length) {
        playCorrect();
        const earned = mistakes === 0 ? 1 : 0;
        const nextScore = score + earned;
        setScore(nextScore);
        setTimeout(() => {
          if (idx + 1 >= activity.sentences.length) {
            onFinish({ score: nextScore, max: activity.sentences.length, letters: events });
          } else {
            setIdx(idx + 1);
            setPlaced([]);
            setMistakes(0);
          }
        }, 1800);
      } else {
        playTap();
      }
    } else {
      playWrong();
      setMistakes((m) => m + 1);
      addLetterEvent(events, stripPunct(entry.word), false);
      setWrongBank(bankIdx);
      setTimeout(() => setWrongBank(null), 450);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <ProgressDots total={activity.sentences.length} done={idx} />

      <div
        style={{
          display: 'inline-block',
          background: 'rgba(13,148,136,0.10)',
          color: 'var(--teal-dark)',
          borderRadius: 999,
          padding: '8px 22px',
          fontSize: 17,
          fontWeight: 700,
          margin: '8px 0 18px',
        }}
      >
        בנו בארמית: "{sentence.translation}"
      </div>

      {/* אזור הבנייה */}
      <div
        key={idx}
        style={{
          direction: 'rtl',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          justifyContent: placed.length === 0 ? 'center' : 'flex-start',
          alignItems: 'center',
          minHeight: 72,
          background: 'linear-gradient(160deg,#fffdf5,#fdf6e3)',
          border: `2px ${done ? 'solid var(--green)' : 'dashed #e7d9b0'}`,
          borderRadius: 16,
          padding: '14px 16px',
          maxWidth: 580,
          margin: '0 auto',
          transition: 'border-color 0.3s',
        }}
      >
        {placed.length === 0 && (
          <span style={{ color: 'var(--ink-soft)', fontSize: 15 }}>כאן ייבנה המשפט…</span>
        )}
        {placed.map((b) => (
          <span
            key={b}
            className="phrase-font pop-in"
            style={{
              background: 'var(--green-soft)',
              color: 'var(--green)',
              border: '2px solid var(--green)',
              borderRadius: 12,
              padding: '8px 16px',
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            {bank[b].word}
          </span>
        ))}
      </div>

      {/* מאגר המילים */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: 20 }}>
        {bank.map((entry, i) =>
          placed.includes(i) ? null : (
            <button
              key={i}
              onClick={() => click(i)}
              className={`phrase-font ${wrongBank === i ? 'shake' : ''}`}
              style={{
                background: wrongBank === i ? 'var(--red-soft)' : '#fff',
                border: `2px solid ${wrongBank === i ? 'var(--red)' : '#e2e8f0'}`,
                borderRadius: 12,
                padding: '10px 20px',
                fontSize: 24,
                fontWeight: 800,
                transition: 'all 0.15s',
              }}
            >
              {entry.word}
            </button>
          )
        )}
      </div>

      <p style={{ color: 'var(--ink-soft)', fontSize: 15, marginTop: 16 }}>
        {done ? 'משפט מושלם! 🎉' : 'לחצו על המילים לפי הסדר הנכון — מימין לשמאל'}
      </p>
    </div>
  );
}
