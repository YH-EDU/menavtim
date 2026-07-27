import React, { useState } from 'react';
import type { IntroActivity, ActivityResult } from '../data/types';
import { LETTERS } from '../data/letters';
import { playTap } from '../lib/sound';

// כרטיסי היכרות: מילה בארמית, לחיצה חושפת תרגום + רמז

export default function Intro({
  activity,
  onFinish,
}: {
  activity: IntroActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const [flipped, setFlipped] = useState<Set<string>>(new Set());

  const flip = (ch: string) => {
    playTap();
    setFlipped((prev) => new Set(prev).add(ch));
  };

  const allSeen = flipped.size >= activity.letters.length;

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 14,
        }}
      >
        {activity.letters.map((ch) => {
          const info = LETTERS.find((l) => l.ch === ch);
          const isFlipped = flipped.has(ch);
          return (
            <button
              key={ch}
              onClick={() => flip(ch)}
              style={{
                border: isFlipped ? '2px solid var(--teal)' : '2px solid #e7d9b0',
                borderRadius: 16,
                padding: '16px 10px',
                background: isFlipped ? 'var(--teal-soft)' : 'linear-gradient(160deg,#fffdf5,#fdf6e3)',
                minHeight: 150,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                transition: 'all 0.25s',
              }}
            >
              {isFlipped ? (
                <>
                  <span className="phrase-font" style={{ fontSize: ch.length > 4 ? 22 : 36, fontWeight: 800 }}>
                    {ch}
                  </span>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--teal-dark)' }}>
                    = {info?.name ?? ch}
                  </div>
                  {info?.hint && (
                    <div style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.35 }}>{info.hint}</div>
                  )}
                </>
              ) : (
                <span className="phrase-font" style={{ fontSize: ch.length > 6 ? 22 : ch.length > 3 ? 32 : 48, fontWeight: 800 }}>
                  {ch}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <p style={{ textAlign: 'center', color: 'var(--ink-soft)', fontSize: 15 }}>
        {allSeen ? 'מצוין! הכרתם את כל הפריטים.' : `הפכתם ${flipped.size} מתוך ${activity.letters.length} כרטיסים`}
      </p>
      <div style={{ textAlign: 'center' }}>
        <button
          className="btn"
          disabled={!allSeen}
          onClick={() => onFinish({ score: activity.letters.length, max: activity.letters.length, letters: {} })}
        >
          סיימתי להכיר — הלאה!
        </button>
      </div>
    </div>
  );
}
