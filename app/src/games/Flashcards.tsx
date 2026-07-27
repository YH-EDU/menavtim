import React, { useState } from 'react';
import type { FlashcardsActivity, ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { hebrewLetters, uniqueLetters } from '../data/letters';
import { ProgressDots, PhraseCard } from './ui';
import { playCorrect, playWrong } from '../lib/sound';

function normalize(s: string): string {
  return s.replace(/\s+/g, ' ').trim();
}

function letterDiff(target: string, input: string): { ok: string[]; bad: string[] } {
  const count = (arr: string[]) => {
    const m: Record<string, number> = {};
    arr.forEach((c) => (m[c] = (m[c] || 0) + 1));
    return m;
  };
  const t = count(hebrewLetters(target));
  const i = count(hebrewLetters(input));
  const ok: string[] = [];
  const bad: string[] = [];
  for (const [ch, n] of Object.entries(t)) {
    if ((i[ch] || 0) >= n) ok.push(ch);
    else bad.push(ch);
  }
  return { ok, bad };
}

export default function Flashcards({
  activity,
  onFinish,
}: {
  activity: FlashcardsActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState('');
  const [state, setState] = useState<'typing' | 'right' | 'wrong'>('typing');
  const [score, setScore] = useState(0);
  const [events] = useState<LetterEvents>({});

  const card = activity.cards[idx];
  const expected = card.answer ?? card.text;

  const check = () => {
    if (state !== 'typing' || !input.trim()) return;
    const ok = normalize(input) === normalize(expected);
    if (ok) {
      playCorrect();
      for (const l of uniqueLetters(card.text)) addLetterEvent(events, l, true);
      // גם המילה המלאה כמפתח שליטה
      addLetterEvent(events, card.text, true);
      setScore((s) => s + 1);
      setState('right');
    } else {
      playWrong();
      const { ok: okL, bad } = letterDiff(expected, input);
      okL.forEach((l) => addLetterEvent(events, l, true));
      bad.forEach((l) => addLetterEvent(events, l, false));
      addLetterEvent(events, card.text, false);
      setState('wrong');
    }
  };

  const next = () => {
    const finalScore = score;
    if (idx + 1 >= activity.cards.length) {
      onFinish({ score: finalScore, max: activity.cards.length, letters: events });
    } else {
      setIdx(idx + 1);
      setInput('');
      setState('typing');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <ProgressDots total={activity.cards.length} done={idx} />
      <div key={idx} style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 20px' }}>
        <PhraseCard text={card.text} size={card.text.length > 8 ? 36 : 56} />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (state === 'typing') check();
          else next();
        }}
        style={{ maxWidth: 420, margin: '0 auto' }}
      >
        <input
          className={`field ${state === 'wrong' ? 'shake' : ''}`}
          style={{
            textAlign: 'center',
            fontSize: 24,
            borderColor: state === 'right' ? 'var(--green)' : state === 'wrong' ? 'var(--red)' : undefined,
            background: state === 'right' ? 'var(--green-soft)' : state === 'wrong' ? 'var(--red-soft)' : '#fff',
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="כתבו כאן בעברית..."
          autoFocus
          readOnly={state !== 'typing'}
          dir="rtl"
        />
        {state === 'right' && (
          <p className="float-up" style={{ color: 'var(--green)', fontWeight: 700, fontSize: 18 }}>נכון! 🎉</p>
        )}
        {state === 'wrong' && (
          <p className="float-up" style={{ color: 'var(--red)', fontWeight: 700, fontSize: 18 }}>
            כמעט... התשובה: <span style={{ fontSize: 22 }}>{expected}</span>
          </p>
        )}
        <div style={{ marginTop: 14, display: 'flex', gap: 10, justifyContent: 'center' }}>
          {state === 'typing' ? (
            <button type="submit" className="btn" disabled={!input.trim()}>בדיקה ✓</button>
          ) : (
            <button type="submit" className="btn gold">
              {idx + 1 >= activity.cards.length ? 'סיום' : 'לכרטיס הבא ←'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
