import React, { useMemo, useState } from 'react';
import type { MixedQuestionActivity, ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { stripPunct } from '../data/letters';
import { ProgressDots, MixedText, tokenizeMixed } from './ui';
import { playCorrect, playWrong } from '../lib/sound';

// שאלה בשפה מעורבת: משפט עברי עם מילים ארמיות מודגשות.
// אחרי התשובה נחשף התרגום מעל כל מילה ארמית — משוב מיידי בהקשר.

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

export default function MixedQuestion({
  activity,
  onFinish,
}: {
  activity: MixedQuestionActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [events] = useState<LetterEvents>({});

  const q = activity.questions[idx];
  const options = useMemo(() => shuffle(q.options, idx + 3), [q, idx]);
  const solved = chosen === q.correctAnswer;

  const choose = (opt: string) => {
    if (chosen !== null) return;
    const ok = opt === q.correctAnswer;
    setChosen(opt);
    for (const t of tokenizeMixed(q.question, q.highlight)) {
      if (t.gloss) addLetterEvent(events, stripPunct(t.raw), ok);
    }
    if (ok) {
      playCorrect();
      setScore((s) => s + 1);
    } else {
      playWrong();
    }
    setTimeout(() => {
      setChosen(null);
      if (idx + 1 >= activity.questions.length) {
        onFinish({ score: score + (ok ? 1 : 0), max: activity.questions.length, letters: events });
      } else {
        setIdx(idx + 1);
      }
    }, ok ? 1500 : 2300);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <ProgressDots total={activity.questions.length} done={idx} />

      <div
        key={idx}
        className="pop-in"
        style={{
          background: 'linear-gradient(160deg,#fffdf5,#fdf6e3)',
          border: '2px solid #e7d9b0',
          borderRadius: 18,
          padding: '30px 22px 24px',
          maxWidth: 560,
          margin: '18px auto 18px',
          boxShadow: 'var(--shadow)',
        }}
      >
        <MixedText text={q.question} highlight={q.highlight} reveal={chosen !== null} fontSize={24} />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        {options.map((opt) => {
          let bg = '#fff';
          let border = '#e2e8f0';
          if (chosen !== null) {
            if (opt === q.correctAnswer) { bg = 'var(--green-soft)'; border = 'var(--green)'; }
            else if (opt === chosen) { bg = 'var(--red-soft)'; border = 'var(--red)'; }
          }
          return (
            <button
              key={opt}
              onClick={() => choose(opt)}
              disabled={chosen !== null}
              className={chosen === opt && !solved ? 'shake' : ''}
              style={{
                background: bg,
                border: `2px solid ${border}`,
                borderRadius: 14,
                padding: '13px 24px',
                fontSize: 20,
                fontWeight: 700,
                minWidth: 110,
                transition: 'all 0.15s',
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {chosen !== null && (
        <p
          className="float-up"
          style={{ fontWeight: 700, color: solved ? 'var(--green)' : 'var(--red)', marginTop: 16 }}
        >
          {solved ? 'בול! 🎉' : `התשובה הנכונה: ${q.correctAnswer}`}
        </p>
      )}
    </div>
  );
}
