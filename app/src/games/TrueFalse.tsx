import React, { useEffect, useRef, useState } from 'react';
import type { TrueFalseActivity, ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { stripPunct } from '../data/letters';
import { ProgressDots } from './ui';
import { playCorrect, playWrong } from '../lib/sound';

// אימון שטף: טענה קצרה, נכון או לא נכון, עם שעון.
// המטרה כאן היא מהירות שליפה — לא ידע חדש.

type Outcome = 'right' | 'wrong' | 'timeout';

export default function TrueFalse({
  activity,
  onFinish,
}: {
  activity: TrueFalseActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const limit = (activity.seconds ?? 7) * 1000;
  const [idx, setIdx] = useState(0);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [left, setLeft] = useState(limit);
  const [score, setScore] = useState(0);
  const [events] = useState<LetterEvents>({});
  const startedAt = useRef(Date.now());
  const locked = useRef(false);

  const item = activity.items[idx];

  const settle = (result: Outcome) => {
    if (locked.current) return;
    locked.current = true;
    const ok = result === 'right';
    setOutcome(result);
    if (ok) {
      playCorrect();
      setScore((s) => s + 1);
    } else {
      playWrong();
    }
    // המילה הארמית שבטענה, לצורך מעקב שליטה
    const word = stripPunct(item.claim.split(/[=—-]/)[0] ?? '');
    if (word) addLetterEvent(events, word, ok);
    setTimeout(() => {
      if (idx + 1 >= activity.items.length) {
        onFinish({ score: score + (ok ? 1 : 0), max: activity.items.length, letters: events });
      } else {
        locked.current = false;
        setIdx(idx + 1);
        setOutcome(null);
      }
    }, ok ? 750 : 1900);
  };

  useEffect(() => {
    startedAt.current = Date.now();
    setLeft(limit);
    const t = setInterval(() => {
      const remaining = limit - (Date.now() - startedAt.current);
      setLeft(Math.max(0, remaining));
      if (remaining <= 0) settle('timeout');
    }, 80);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  const answer = (said: boolean) => {
    if (outcome) return;
    settle(said === item.correct ? 'right' : 'wrong');
  };

  const pct = (left / limit) * 100;
  const urgent = pct < 34;

  return (
    <div style={{ textAlign: 'center' }}>
      <ProgressDots total={activity.items.length} done={idx} />

      <div style={{ maxWidth: 420, margin: '10px auto 0', height: 10, borderRadius: 999, background: '#e2e8f0', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            background: outcome ? '#cbd5e1' : urgent ? 'var(--red)' : 'var(--teal)',
            transition: 'width 0.09s linear, background 0.3s',
          }}
        />
      </div>

      <div
        key={idx}
        className="pop-in"
        style={{
          background:
            outcome === 'right'
              ? 'var(--green-soft)'
              : outcome
              ? 'var(--red-soft)'
              : 'linear-gradient(160deg,#fffdf5,#fdf6e3)',
          border: `2px solid ${outcome === 'right' ? 'var(--green)' : outcome ? 'var(--red)' : '#e7d9b0'}`,
          borderRadius: 20,
          padding: '38px 22px',
          maxWidth: 480,
          margin: '18px auto',
          boxShadow: 'var(--shadow)',
          transition: 'all 0.25s',
        }}
      >
        <span className="phrase-font" style={{ fontSize: 34, fontWeight: 800 }}>
          {item.claim}
        </span>
      </div>

      <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
        <button
          onClick={() => answer(true)}
          disabled={!!outcome}
          style={{
            background: '#fff',
            border: '3px solid var(--green)',
            color: 'var(--green)',
            borderRadius: 16,
            padding: '16px 40px',
            fontSize: 22,
            fontWeight: 800,
            minWidth: 140,
          }}
        >
          ✓ נכון
        </button>
        <button
          onClick={() => answer(false)}
          disabled={!!outcome}
          style={{
            background: '#fff',
            border: '3px solid var(--red)',
            color: 'var(--red)',
            borderRadius: 16,
            padding: '16px 40px',
            fontSize: 22,
            fontWeight: 800,
            minWidth: 140,
          }}
        >
          ✗ לא נכון
        </button>
      </div>

      {outcome && (
        <p className="float-up" style={{ marginTop: 16, fontWeight: 700, color: outcome === 'right' ? 'var(--green)' : 'var(--red)' }}>
          {outcome === 'right'
            ? 'מהיר ומדויק! ⚡'
            : outcome === 'timeout'
            ? `נגמר הזמן. ${item.explain ?? ''}`
            : `לא נכון. ${item.explain ?? ''}`}
        </p>
      )}
    </div>
  );
}
