import React, { useMemo, useState } from 'react';
import type { MorphActivity, ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { ARAMAIC_GLOSS } from '../data/letters';
import { ProgressDots } from './ui';
import { playCorrect, playTap, playWrong } from '../lib/sound';
import { useSpeechText } from './SpeechContext';

// מורפינג אותיות: הופכים מילה עברית למילה ארמית בלחיצות.
// שלבי השינוי מחושבים אוטומטית (מרחק עריכה) — כל שינוי הוא "משבצת" שאפשר ללחוץ עליה.

type Op =
  | { kind: 'keep'; ch: string }
  | { kind: 'replace'; from: string; to: string }
  | { kind: 'delete'; ch: string }
  | { kind: 'insert'; ch: string };

/** מחשב את רצף הפעולות שהופך base ל-target */
export function morphOps(base: string, target: string): Op[] {
  const a = [...base];
  const b = [...target];
  const n = a.length;
  const m = b.length;
  const d: number[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  for (let i = 0; i <= n; i++) d[i][0] = i;
  for (let j = 0; j <= m; j++) d[0][j] = j;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      d[i][j] =
        a[i - 1] === b[j - 1]
          ? d[i - 1][j - 1]
          : 1 + Math.min(d[i - 1][j - 1], d[i - 1][j], d[i][j - 1]);
    }
  }
  const ops: Op[] = [];
  let i = n;
  let j = m;
  while (i > 0 || j > 0) {
    // סדר הבדיקות מכוון: כשיש כמה פתרונות באותו מחיר, מעדיפים שההוספה
    // תיפול בסוף המילה (סיומת א׳) והחילוף יישאר על האות המקורית.
    if (i > 0 && j > 0 && a[i - 1] === b[j - 1] && d[i][j] === d[i - 1][j - 1]) {
      ops.push({ kind: 'keep', ch: a[i - 1] });
      i--; j--;
    } else if (j > 0 && d[i][j] === d[i][j - 1] + 1) {
      ops.push({ kind: 'insert', ch: b[j - 1] });
      j--;
    } else if (i > 0 && j > 0 && d[i][j] === d[i - 1][j - 1] + 1) {
      ops.push({ kind: 'replace', from: a[i - 1], to: b[j - 1] });
      i--; j--;
    } else {
      ops.push({ kind: 'delete', ch: a[i - 1] });
      i--;
    }
  }
  return ops.reverse();
}

export default function Morphing({
  activity,
  onFinish,
}: {
  activity: MorphActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [applied, setApplied] = useState<Set<number>>(new Set());
  const [mistakes, setMistakes] = useState(0);
  const [wrongSlot, setWrongSlot] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [events] = useState<LetterEvents>({});

  const word = activity.words[idx];
  const ops = useMemo(() => morphOps(word.baseWord, word.targetWord), [word]);
  const pending = ops.reduce((acc, op, i) => (op.kind !== 'keep' && !applied.has(i) ? acc + 1 : acc), 0);

  useSpeechText(`${word.instruction}. המילה: ${word.baseWord}`);
  const complete = pending === 0;

  const advance = (firstTry: boolean) => {
    addLetterEvent(events, word.targetWord, firstTry);
    const nextScore = score + (firstTry ? 1 : 0);
    setScore(nextScore);
    setTimeout(() => {
      if (idx + 1 >= activity.words.length) {
        onFinish({ score: nextScore, max: activity.words.length, letters: events });
      } else {
        setIdx(idx + 1);
        setApplied(new Set());
        setMistakes(0);
      }
    }, 1600);
  };

  const click = (i: number) => {
    if (complete) return;
    const op = ops[i];
    if (op.kind === 'keep' || applied.has(i)) {
      playWrong();
      setMistakes((m) => m + 1);
      setWrongSlot(i);
      setTimeout(() => setWrongSlot(null), 450);
      return;
    }
    const next = new Set(applied).add(i);
    setApplied(next);
    const stillPending = ops.some((o, k) => o.kind !== 'keep' && !next.has(k));
    if (stillPending) {
      playTap();
    } else {
      playCorrect();
      advance(mistakes === 0);
    }
  };

  const gloss = ARAMAIC_GLOSS[word.targetWord];

  return (
    <div style={{ textAlign: 'center' }}>
      <ProgressDots total={activity.words.length} done={idx} />

      <div
        style={{
          display: 'inline-block',
          background: 'rgba(13,148,136,0.10)',
          color: 'var(--teal)',
          borderRadius: 999,
          padding: '6px 18px',
          fontSize: 16,
          fontWeight: 700,
          margin: '6px 0 18px',
        }}
      >
        {word.instruction}
      </div>

      <div
        key={idx}
        style={{
          direction: 'rtl',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
          flexWrap: 'wrap',
          minHeight: 90,
        }}
      >
        {ops.map((op, i) => {
          const isApplied = applied.has(i);
          if (op.kind === 'delete' && isApplied) return null;

          const isKeep = op.kind === 'keep';
          const isGhost = op.kind === 'insert' && !isApplied;
          const shown =
            op.kind === 'keep' ? op.ch
              : op.kind === 'replace' ? (isApplied ? op.to : op.from)
              : op.kind === 'delete' ? op.ch
              : isApplied ? op.ch : '＋';

          const done = isApplied || isKeep;
          return (
            <button
              key={i}
              onClick={() => click(i)}
              className={`phrase-font ${wrongSlot === i ? 'shake' : ''} ${isApplied ? 'morph-pop' : ''}`}
              style={{
                width: 62,
                height: 76,
                borderRadius: 14,
                fontSize: isGhost ? 26 : 38,
                fontWeight: 800,
                background: isApplied
                  ? 'var(--green-soft)'
                  : isKeep
                  ? '#fff'
                  : isGhost
                  ? 'rgba(13,148,136,0.06)'
                  : 'var(--gold-soft)',
                color: isApplied ? 'var(--green)' : isGhost ? 'var(--teal)' : 'var(--ink)',
                border: `2px ${isGhost ? 'dashed' : 'solid'} ${
                  isApplied ? 'var(--green)' : isKeep ? '#e2e8f0' : 'var(--gold)'
                }`,
                cursor: done ? 'default' : 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {shown}
            </button>
          );
        })}
      </div>

      <p style={{ color: 'var(--ink-soft)', fontSize: 15, marginTop: 12 }}>
        {complete
          ? ''
          : 'לחצו על המשבצות הצבעוניות כדי לשנות אותן — הלבנות נשארות כמו שהן'}
      </p>

      {complete && (
        <div className="float-up" style={{ marginTop: 6 }}>
          <p style={{ color: 'var(--green)', fontWeight: 800, fontSize: 20 }}>
            {word.baseWord} ← {word.targetWord} ✓
          </p>
          {gloss && <p style={{ color: 'var(--ink-soft)', fontSize: 16 }}>{word.targetWord} = {gloss}</p>}
        </div>
      )}
    </div>
  );
}
