import React, { useMemo, useState } from 'react';
import type { DiscoverActivity, ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { stripPunct } from '../data/letters';
import { ProgressDots, MixedText } from './ui';
import { playCorrect, playWrong } from '../lib/sound';

// שלב הגילוי — הלב הפדגוגי של המשחק.
// המילה הארמית מופיעה בתוך משפט עברי פשוט, בלי תרגום.
// ההקשר עושה את העבודה: התלמיד מנחש בעצמו, ורק אחר כך נחשפים התרגום והכלל.

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

export default function Discover({
  activity,
  onFinish,
}: {
  activity: DiscoverActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [showClue, setShowClue] = useState(false);
  const [score, setScore] = useState(0);
  const [events] = useState<LetterEvents>({});

  const item = activity.items[idx];
  const key = stripPunct(item.word);
  const options = useMemo(() => shuffle(item.options, idx + 3), [item, idx]);
  const solved = chosen === item.meaning;

  const answer = (opt: string) => {
    if (chosen !== null) return;
    const ok = opt === item.meaning;
    setChosen(opt);
    addLetterEvent(events, key, ok);
    if (ok) {
      setScore((s) => s + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  const next = () => {
    if (idx + 1 >= activity.items.length) {
      onFinish({ score, max: activity.items.length, letters: events });
    } else {
      setIdx(idx + 1);
      setChosen(null);
      setShowClue(false);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <ProgressDots total={activity.items.length} done={idx} />

      <div
        key={idx}
        className="pop-in"
        style={{
          background: 'linear-gradient(160deg,#fffdf5,#fdf6e3)',
          border: '2px solid #e7d9b0',
          borderRadius: 20,
          padding: '40px 24px 26px',
          maxWidth: 580,
          margin: '14px auto 0',
          boxShadow: 'var(--shadow)',
        }}
      >
        <MixedText
          text={item.sentence}
          highlight={[item.word]}
          glossary={{ [key]: item.meaning }}
          reveal={chosen !== null}
          fontSize={23}
          lineHeight={3}
        />
      </div>

      <p style={{ fontSize: 18, fontWeight: 700, margin: '22px 0 14px' }}>
        לפי המשפט — מה פירוש{' '}
        <span className="phrase-font" style={{ color: 'var(--teal-dark)', fontSize: 22 }}>
          {item.word}
        </span>
        ?
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        {options.map((opt) => {
          let bg = '#fff';
          let border = '#e2e8f0';
          if (chosen !== null) {
            if (opt === item.meaning) { bg = 'var(--green-soft)'; border = 'var(--green)'; }
            else if (opt === chosen) { bg = 'var(--red-soft)'; border = 'var(--red)'; }
          }
          return (
            <button
              key={opt}
              onClick={() => answer(opt)}
              disabled={chosen !== null}
              className={chosen === opt && !solved ? 'shake' : ''}
              style={{
                background: bg,
                border: `2px solid ${border}`,
                borderRadius: 14,
                padding: '13px 26px',
                fontSize: 19,
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

      {chosen === null && item.clue && (
        <div style={{ marginTop: 16 }}>
          {showClue ? (
            <p className="float-up" style={{ fontSize: 15, color: 'var(--ink-soft)' }}>
              💡 {item.clue}
            </p>
          ) : (
            <button
              className="pill"
              onClick={() => setShowClue(true)}
              style={{ cursor: 'pointer', padding: '5px 18px', fontSize: 13.5 }}
            >
              💡 צריך רמז
            </button>
          )}
        </div>
      )}

      {chosen !== null && (
        <div className="float-up" style={{ marginTop: 18 }}>
          <p style={{ fontWeight: 800, fontSize: 18, color: solved ? 'var(--green)' : 'var(--red)' }}>
            {solved ? 'גיליתם לבד! 🎉' : `כמעט. ${item.word} = ${item.meaning}`}
          </p>
          {item.reveal && (
            <p
              style={{
                maxWidth: 520,
                margin: '10px auto 0',
                background: 'rgba(13,148,136,0.08)',
                borderRadius: 14,
                padding: '12px 18px',
                fontSize: 15.5,
                color: 'var(--ink)',
                lineHeight: 1.65,
              }}
            >
              {item.reveal}
            </p>
          )}
          <button className="btn" onClick={next} style={{ marginTop: 18 }}>
            {idx + 1 >= activity.items.length ? 'סיימתי ←' : 'הבא ←'}
          </button>
        </div>
      )}
    </div>
  );
}
