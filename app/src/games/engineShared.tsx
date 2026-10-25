import React, { useState } from 'react';
import type { ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { stripPunct } from '../data/letters';
import { playCorrect, playWrong } from '../lib/sound';

export function useRounds(count: number, onFinish: (r: ActivityResult) => void) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [events] = useState<LetterEvents>({});

  const choose = (choice: number, correct: number, letter?: string) => {
    if (picked !== null) return;
    const ok = choice === correct;
    setPicked(choice);
    if (letter) addLetterEvent(events, stripPunct(letter), ok);
    if (ok) {
      playCorrect();
      setScore((s) => s + 1);
    } else {
      playWrong();
    }
    window.setTimeout(() => {
      if (idx + 1 >= count) {
        onFinish({ score: score + (ok ? 1 : 0), max: count, letters: events });
      } else {
        setIdx((n) => n + 1);
        setPicked(null);
      }
    }, ok ? 950 : 1700);
  };

  return { idx, picked, choose };
}

export function RoundMeta({ index, total }: { index: number; total: number }) {
  return (
    <div className="engine-meta">
      {index + 1} / {total}
    </div>
  );
}

export function ChoiceButtons({
  options,
  picked,
  correct,
  onPick,
  className = '',
}: {
  options: string[];
  picked: number | null;
  correct: number;
  onPick: (i: number) => void;
  className?: string;
}) {
  return (
    <div className={`engine-choices ${className}`}>
      {options.map((op, i) => {
        let cls = 'engine-choice';
        if (picked !== null && i === correct) cls += ' is-right';
        else if (picked === i) cls += ' is-wrong';
        return (
          <button key={`${op}-${i}`} type="button" className={cls} disabled={picked !== null} onClick={() => onPick(i)}>
            {op}
          </button>
        );
      })}
    </div>
  );
}

export function RevealNote({ show, text }: { show: boolean; text: string }) {
  if (!show) return null;
  return <p className="engine-reveal">{text}</p>;
}
