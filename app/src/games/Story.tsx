import React, { useMemo, useState } from 'react';
import type { StoryActivity, ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { stripPunct } from '../data/letters';
import { ProgressDots, GlossWord, tokenizeMixed } from './ui';
import { playCorrect, playTap, playWrong } from '../lib/sound';

// קריאה רציפה: הטקסט מעורב עברית־ארמית ונשאר במקומו.
// לחיצה על מילה ארמית חושפת את התרגום שלה מעליה, בלי שהמשפט מתחלף.
// אין חשיפה גורפת בכוונה — כל תרגום הוא החלטה של הקורא, ומי שזוכר לא לוחץ.

interface Tok {
  raw: string;
  gloss: string | null;
  ai: number; // אינדקס המילה הארמית בטקסט כולו (-1 אם עברית)
}

export default function Story({
  activity,
  onFinish,
}: {
  activity: StoryActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const [manual, setManual] = useState<Set<number>>(new Set());
  const [phase, setPhase] = useState<'read' | 'quiz'>('read');
  const [qIdx, setQIdx] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [events] = useState<LetterEvents>({});

  const { paras, total } = useMemo(() => {
    let counter = 0;
    const paras: Tok[][] = activity.paragraphs.map((p) =>
      tokenizeMixed(p, undefined, activity.glossary).map((t) => ({
        raw: t.raw,
        gloss: t.gloss,
        ai: t.gloss ? counter++ : -1,
      }))
    );
    return { paras, total: counter };
  }, [activity]);

  const isRevealed = (ai: number) => manual.has(ai);
  const revealedTotal = manual.size;

  const questions = activity.questions ?? [];

  const finishReading = () => {
    if (questions.length > 0) {
      setPhase('quiz');
      return;
    }
    // מי שקרא מילה בלי לחשוף את התרגום — סימן שהוא יודע אותה
    for (const t of paras.flat()) {
      if (t.ai >= 0) addLetterEvent(events, stripPunct(t.raw), !isRevealed(t.ai));
    }
    onFinish({ score: Math.max(1, total - revealedTotal), max: Math.max(1, total), letters: events });
  };

  if (phase === 'quiz') {
    const q = questions[qIdx];
    const choose = (i: number) => {
      if (chosen !== null) return;
      const ok = i === q.correct;
      setChosen(i);
      if (ok) playCorrect();
      else playWrong();
      (q.targetLetters ?? []).forEach((l) => addLetterEvent(events, l, ok));
      if (ok) setScore((s) => s + 1);
      setTimeout(() => {
        setChosen(null);
        if (qIdx + 1 >= questions.length) {
          onFinish({ score: score + (ok ? 1 : 0), max: questions.length, letters: events });
        } else {
          setQIdx(qIdx + 1);
        }
      }, ok ? 800 : 1600);
    };
    return (
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: 6 }}>שאלות על מה שקראתם</h3>
        <ProgressDots total={questions.length} done={qIdx} />
        <p style={{ fontSize: 19, fontWeight: 700 }}>{q.prompt}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 460, margin: '0 auto' }}>
          {q.options.map((opt, i) => {
            let bg = '#fff';
            let border = '#e2e8f0';
            if (chosen !== null) {
              if (i === q.correct) { bg = 'var(--green-soft)'; border = 'var(--green)'; }
              else if (i === chosen) { bg = 'var(--red-soft)'; border = 'var(--red)'; }
            }
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                className={chosen === i && i !== q.correct ? 'shake' : ''}
                style={{
                  background: bg,
                  border: `2px solid ${border}`,
                  borderRadius: 12,
                  padding: '12px 18px',
                  fontSize: 17,
                  fontWeight: 500,
                  transition: 'all 0.15s',
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const toggleWord = (ai: number) => {
    playTap();
    setManual((prev) => {
      const next = new Set(prev);
      if (next.has(ai)) next.delete(ai);
      else next.add(ai);
      return next;
    });
  };

  return (
    <div>
      <div
        style={{
          background: 'linear-gradient(160deg,#fffdf5,#fdf6e3)',
          border: '2px solid #e7d9b0',
          borderRadius: 18,
          padding: '44px 26px 26px',
          boxShadow: 'var(--shadow)',
        }}
      >
        {paras.map((toks, i) => (
          <p key={i} style={{ margin: '0 0 30px', fontSize: 21, lineHeight: 3.1, fontWeight: 500 }}>
            {toks.map((t, k) =>
              t.gloss ? (
                <GlossWord
                  key={k}
                  word={t.raw}
                  gloss={t.gloss}
                  revealed={isRevealed(t.ai)}
                  onClick={() => toggleWord(t.ai)}
                />
              ) : (
                <React.Fragment key={k}>{t.raw}</React.Fragment>
              )
            )}
          </p>
        ))}
      </div>

      <p style={{ textAlign: 'center', color: 'var(--ink-soft)', fontSize: 14.5, marginTop: 18 }}>
        המילים הארמיות מודגשות. נתקעתם באחת? לחצו עליה והתרגום יופיע מעליה.
        <br />
        <span style={{ fontSize: 13.5 }}>
          נעזרתם ב-{revealedTotal} מתוך {total} — כמה שפחות, טוב יותר.
        </span>
      </p>

      <div style={{ textAlign: 'center' }}>
        <button className="btn" onClick={finishReading}>
          {questions.length > 0 ? 'קראתי! לשאלות ←' : 'סיימתי לקרוא ←'}
        </button>
      </div>
    </div>
  );
}
