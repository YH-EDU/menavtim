import React, { useMemo, useState } from 'react';
import type { FillInBlankActivity, ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent, addTextEvents } from '../lib/mastery';
import { stripPunct } from '../data/letters';
import { ProgressDots } from './ui';
import { playCorrect, playWrong } from '../lib/sound';
import { useSpeechText } from './SpeechContext';

// השלמת מילה ארמית לתוך משפט עברי — הלב של הלימוד בהקשר.

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

export default function FillInBlank({
  activity,
  onFinish,
}: {
  activity: FillInBlankActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [events] = useState<LetterEvents>({});

  const q = activity.questions[idx];
  const options = useMemo(() => shuffle(q.options, idx + 1), [q, idx]);
  const solved = chosen === q.correctWord;

  const choose = (opt: string) => {
    if (chosen !== null) return;
    const ok = opt === q.correctWord;
    setChosen(opt);
    addLetterEvent(events, stripPunct(q.correctWord), ok);
    addTextEvents(events, q.correctWord, ok);
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
    }, ok ? 1300 : 2100);
  };

  const [before, after] = q.sentence.split('___');

  useSpeechText(`${before}…${after}`);

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
          padding: '26px 22px',
          maxWidth: 560,
          margin: '10px auto 6px',
          fontSize: 22,
          lineHeight: 1.9,
          boxShadow: 'var(--shadow)',
        }}
      >
        <span>{before}</span>
        <span
          className={chosen !== null && !solved ? 'phrase-font shake' : 'phrase-font'}
          style={{
            display: 'inline-block',
            minWidth: 110,
            margin: '0 6px',
            padding: '2px 14px',
            borderRadius: 10,
            fontWeight: 800,
            color: chosen === null ? 'var(--ink-soft)' : solved ? 'var(--green)' : 'var(--red)',
            background: chosen === null ? '#fff' : solved ? 'var(--green-soft)' : 'var(--red-soft)',
            border: `2px dashed ${chosen === null ? '#cbd5e1' : solved ? 'var(--green)' : 'var(--red)'}`,
            transition: 'all 0.25s',
          }}
        >
          {chosen === null ? '＿＿＿' : solved ? q.correctWord : chosen}
        </span>
        <span>{after}</span>
      </div>

      {q.hint && (
        <p style={{ color: 'var(--ink-soft)', fontSize: 15, marginBottom: 16 }}>💡 רמז: {q.hint}</p>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        {options.map((opt) => {
          let bg = '#fff';
          let border = '#e2e8f0';
          if (chosen !== null) {
            if (opt === q.correctWord) { bg = 'var(--green-soft)'; border = 'var(--green)'; }
            else if (opt === chosen) { bg = 'var(--red-soft)'; border = 'var(--red)'; }
          }
          return (
            <button
              key={opt}
              className="phrase-font"
              onClick={() => choose(opt)}
              disabled={chosen !== null}
              style={{
                background: bg,
                border: `2px solid ${border}`,
                borderRadius: 14,
                padding: '13px 26px',
                fontSize: 22,
                fontWeight: 800,
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
          {solved ? 'מצוין! 🎉' : `המילה הנכונה: ${q.correctWord}`}
        </p>
      )}
    </div>
  );
}
