import React, { useMemo, useState } from 'react';
import type { MemoryActivity, ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { uniqueLetters } from '../data/letters';
import { playCorrect, playTap, playWrong } from '../lib/sound';

// זיכרון בשני טורים מקבילים: ארמית מימין, עברית משמאל, והכול הפוך.
// חושפים קלף מכל צד; זוג נכון מחליק אל אותה שורה בשני הטורים ונשאר גלוי,
// זוג שגוי מתהפך בחזרה. אין סדר לחיצות — אפשר להתחיל מכל צד.

const ROW_H = 58;
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

export default function Memory({
  activity,
  onFinish,
}: {
  activity: MemoryActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const pairs = activity.pairs;
  const baseRight = useMemo(() => shuffle(pairs.map((_, i) => i)), [activity]);
  const baseLeft = useMemo(() => shuffle(pairs.map((_, i) => i)), [activity]);

  const [flipped, setFlipped] = useState<{ side: Side; i: number }[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [wrong, setWrong] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [lock, setLock] = useState(false);
  const [events] = useState<LetterEvents>({});

  const isMatched = (i: number) => matched.includes(i);
  const openOn = (side: Side) => flipped.find((f) => f.side === side);

  // הזוגות שנמצאו עולים לראש שני הטורים באותו סדר — ולכן נעמדים זה מול זה
  const rowOf = (base: number[], i: number) => {
    const rest = base.filter((k) => !matched.includes(k));
    return matched.includes(i) ? matched.indexOf(i) : matched.length + rest.indexOf(i);
  };

  const flip = (side: Side, i: number) => {
    if (lock || isMatched(i)) return;
    const same = openOn(side);
    if (same?.i === i) return;

    // קלף נוסף באותו טור פשוט מחליף את הבחירה
    if (same) {
      playTap();
      setFlipped((f) => [...f.filter((x) => x.side !== side), { side, i }]);
      return;
    }

    playTap();
    const other = flipped.find((f) => f.side !== side);
    const now = [...flipped, { side, i }];
    setFlipped(now);
    if (!other) return;

    setMoves((m) => m + 1);
    setLock(true);
    if (other.i === i) {
      setTimeout(() => {
        playCorrect();
        uniqueLetters(pairs[i].a).forEach((l) => addLetterEvent(events, l, true));
        const next = [...matched, i];
        setMatched(next);
        setFlipped([]);
        setLock(false);
        if (next.length === pairs.length) {
          const max = pairs.length;
          const extra = moves + 1 - max;
          const score = Math.max(1, Math.round(max - extra / 2));
          setTimeout(() => onFinish({ score, max, letters: events }), 900);
        }
      }, 520);
    } else {
      playWrong();
      uniqueLetters(pairs[i].a).forEach((l) => addLetterEvent(events, l, false));
      setWrong([other.i, i]);
      setTimeout(() => {
        setWrong([]);
        setFlipped([]);
        setLock(false);
      }, 1000);
    }
  };

  const card = (side: Side, i: number) => {
    const done = isMatched(i);
    const open = done || flipped.some((f) => f.side === side && f.i === i);
    const bad = wrong.includes(i) && flipped.some((f) => f.side === side && f.i === i);
    const aramaic = side === 'aramaic';
    const text = aramaic ? pairs[i].a : pairs[i].b;
    return (
      <button
        key={i}
        onClick={() => flip(side, i)}
        className={`${aramaic && open ? 'phrase-font ' : ''}${bad ? 'shake' : ''}`}
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
          fontSize: open ? (aramaic ? 22 : 18) : 26,
          fontWeight: open ? 700 : 400,
          lineHeight: 1.2,
          background: done
            ? 'var(--green-soft)'
            : bad
            ? 'var(--red-soft)'
            : open
            ? 'linear-gradient(160deg,#fffdf5,#fdf6e3)'
            : 'linear-gradient(150deg, var(--teal), var(--teal-dark))',
          color: done ? 'var(--green)' : open ? 'var(--ink)' : '#fff',
          border: `2px solid ${done ? 'var(--green)' : bad ? 'var(--red)' : open ? '#e7d9b0' : '#0f766e'}`,
          boxShadow: open && !done ? '0 6px 16px rgba(0,0,0,0.10)' : '0 2px 6px rgba(0,0,0,0.06)',
          cursor: done ? 'default' : 'pointer',
          transition:
            'top 0.5s cubic-bezier(0.22,1,0.36,1), background 0.25s, border-color 0.25s, box-shadow 0.25s',
        }}
      >
        {open ? text : '❓'}
      </button>
    );
  };

  const colHeight = pairs.length * STEP - GAP;

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ color: 'var(--ink-soft)', fontSize: 15, marginBottom: 16 }}>
        חשפו קלף אחד מכל טור. זוג שמתאים נשאר גלוי ונעמד זה מול זה — לא משנה מאיזה צד תתחילו.
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

      <p style={{ color: 'var(--ink-soft)', fontSize: 15, marginTop: 16 }}>
        זוגות שנמצאו: {matched.length} / {pairs.length} · מהלכים: {moves}
      </p>
    </div>
  );
}
