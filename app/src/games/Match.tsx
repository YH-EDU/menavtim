import React, { useMemo, useState } from 'react';
import type { MatchActivity, ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { uniqueLetters } from '../data/letters';
import { playCorrect, playWrong } from '../lib/sound';
import { useSpeechText } from './SpeechContext';

// התאמה בשני טורים מקבילים: ארמית מימין, עברית משמאל.
// אין סדר לחיצות — אפשר להתחיל מכל צד.
// זוג שהותאם נכון מחליק אל אותה שורה בשני הטורים, כך שהקלפים נעמדים זה מול זה.

const ROW_H = 56;
const GAP = 10;
const STEP = ROW_H + GAP;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Side = 'aramaic' | 'hebrew';

export default function Match({
  activity,
  onFinish,
}: {
  activity: MatchActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const pairs = activity.pairs;
  const baseRight = useMemo(() => shuffle(pairs.map((_, i) => i)), [activity]);
  const baseLeft = useMemo(() => shuffle(pairs.map((_, i) => i)), [activity]);

  const [selected, setSelected] = useState<{ side: Side; i: number } | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [wrong, setWrong] = useState<{ side: Side; i: number } | null>(null);
  const [events] = useState<LetterEvents>({});

  useSpeechText(null);

  const isMatched = (i: number) => matched.includes(i);

  // הזוגות שהותאמו עולים לראש שני הטורים, באותו סדר — ולכן נעמדים זה מול זה
  const rowOf = (base: number[], i: number) => {
    const rest = base.filter((k) => !matched.includes(k));
    return matched.includes(i) ? matched.indexOf(i) : matched.length + rest.indexOf(i);
  };

  const settle = (i: number, ok: boolean, side: Side) => {
    if (ok) {
      playCorrect();
      uniqueLetters(pairs[i].rashi).forEach((l) => addLetterEvent(events, l, true));
      const next = [...matched, i];
      setMatched(next);
      setSelected(null);
      if (next.length === pairs.length) {
        const max = pairs.length;
        setTimeout(() => onFinish({ score: Math.max(1, max - mistakes), max, letters: events }), 1000);
      }
    } else {
      playWrong();
      setMistakes((m) => m + 1);
      uniqueLetters(pairs[i].rashi).forEach((l) => addLetterEvent(events, l, false));
      setWrong({ side, i });
      setTimeout(() => setWrong(null), 450);
    }
  };

  const tap = (side: Side, i: number) => {
    if (isMatched(i)) return;
    if (!selected || selected.side === side) {
      setSelected(selected && selected.side === side && selected.i === i ? null : { side, i });
      return;
    }
    settle(i, selected.i === i, side);
  };

  const card = (side: Side, i: number) => {
    const done = isMatched(i);
    const active = selected?.side === side && selected.i === i;
    const bad = wrong?.side === side && wrong.i === i;
    const aramaic = side === 'aramaic';
    const text = aramaic ? pairs[i].rashi : pairs[i].label ?? pairs[i].rashi;
    return (
      <button
        key={i}
        onClick={() => tap(side, i)}
        className={`${aramaic ? 'phrase-font ' : ''}${bad ? 'shake' : ''}`}
        disabled={done}
        style={{
          position: 'absolute',
          insetInline: 0,
          top: rowOf(aramaic ? baseRight : baseLeft, i) * STEP,
          height: ROW_H,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 10px',
          borderRadius: 14,
          fontSize: aramaic ? 22 : 18,
          fontWeight: 700,
          lineHeight: 1.2,
          background: done
            ? 'var(--green-soft)'
            : bad
            ? 'var(--red-soft)'
            : active
            ? 'var(--teal)'
            : 'linear-gradient(160deg,#fffdf5,#fdf6e3)',
          color: done ? 'var(--green)' : active ? '#fff' : 'var(--ink)',
          border: `2px solid ${done ? 'var(--green)' : bad ? 'var(--red)' : active ? 'var(--teal-dark)' : '#e7d9b0'}`,
          boxShadow: active ? '0 6px 16px rgba(13,148,136,0.28)' : '0 2px 6px rgba(0,0,0,0.06)',
          cursor: done ? 'default' : 'pointer',
          transition: 'top 0.5s cubic-bezier(0.22,1,0.36,1), background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.15s',
          transform: active ? 'scale(1.04)' : 'none',
          zIndex: active ? 2 : 1,
        }}
      >
        {text}
      </button>
    );
  };

  const colHeight = pairs.length * STEP - GAP;

  return (
    <div>
      <p style={{ textAlign: 'center', color: 'var(--ink-soft)', fontSize: 15, marginBottom: 18 }}>
        לחצו על קלף בטור אחד ואז על הקלף שמתאים לו בטור השני — לא משנה מאיזה צד תתחילו
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
          maxWidth: 520,
          margin: '0 auto',
          direction: 'rtl',
        }}
      >
        <div style={{ position: 'relative', height: colHeight }}>
          {pairs.map((_, i) => card('aramaic', i))}
        </div>
        <div style={{ position: 'relative', height: colHeight }}>
          {pairs.map((_, i) => card('hebrew', i))}
        </div>
      </div>
    </div>
  );
}
