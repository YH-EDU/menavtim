import React, { useMemo, useRef, useState } from 'react';
import type { AnnotateActivity, ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { glossFor, stripPunct } from '../data/letters';
import { ProgressDots } from './ui';
import { playCorrect, playWrong } from '../lib/sound';

// השלמת תרגום: מעל כל מילה ארמית יש משבצת ריקה, ומתחת למשפט בנק פתקים בעברית.
// אפשר לגרור פתק אל משבצת, או ללחוץ על פתק ואז על משבצת — מה שנוח יותר.

interface Token {
  raw: string;
  space: boolean;
  /** אינדקס המשבצת, אם זו מילה ארמית */
  slot?: number;
  gloss?: string;
}

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

export default function Annotate({
  activity,
  onFinish,
}: {
  activity: AnnotateActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [filled, setFilled] = useState<Record<number, string>>({});
  const [held, setHeld] = useState<string | null>(null);
  const [badSlot, setBadSlot] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const erred = useRef(false);
  const [events] = useState<LetterEvents>({});

  const item = activity.sentences[idx];

  const { tokens, slots, bank } = useMemo(() => {
    const forced = item.words?.map(stripPunct);
    const toks: Token[] = [];
    const sl: { gloss: string; key: string }[] = [];
    for (const raw of item.sentence.split(/(\s+)/)) {
      if (!raw) continue;
      if (/^\s+$/.test(raw)) {
        toks.push({ raw, space: true });
        continue;
      }
      const key = stripPunct(raw);
      const wanted = forced ? forced.includes(key) : true;
      const gloss = wanted ? glossFor(raw) : null;
      if (gloss) {
        toks.push({ raw, space: false, slot: sl.length, gloss });
        sl.push({ gloss, key });
      } else {
        toks.push({ raw, space: false });
      }
    }
    const chips = [...new Set([...sl.map((s) => s.gloss), ...(item.distractors ?? [])])];
    return { tokens: toks, slots: sl, bank: shuffle(chips, idx + 5) };
  }, [item, idx]);

  const done = slots.length > 0 && slots.every((_, i) => filled[i]);

  const place = (slot: number, chip: string) => {
    if (filled[slot]) return;
    if (slots[slot].gloss === chip) {
      playCorrect();
      addLetterEvent(events, slots[slot].key, !erred.current);
      setFilled((f) => ({ ...f, [slot]: chip }));
      setHeld(null);
    } else {
      playWrong();
      erred.current = true;
      addLetterEvent(events, slots[slot].key, false);
      setBadSlot(slot);
      setHeld(null);
      setTimeout(() => setBadSlot(null), 420);
    }
  };

  const next = () => {
    const gained = erred.current ? 0 : 1;
    const total = score + gained;
    if (idx + 1 >= activity.sentences.length) {
      onFinish({ score: total, max: activity.sentences.length, letters: events });
    } else {
      setScore(total);
      setIdx(idx + 1);
      setFilled({});
      setHeld(null);
      erred.current = false;
    }
  };

  const used = new Set(Object.values(filled));

  return (
    <div style={{ textAlign: 'center' }}>
      <ProgressDots total={activity.sentences.length} done={idx} />

      <div
        key={idx}
        className="pop-in"
        style={{
          background: 'linear-gradient(160deg,#fffdf5,#fdf6e3)',
          border: '2px solid #e7d9b0',
          borderRadius: 20,
          padding: '34px 22px 24px',
          maxWidth: 620,
          margin: '14px auto 0',
          boxShadow: 'var(--shadow)',
          direction: 'rtl',
          fontSize: 22,
          lineHeight: 2.9,
          fontWeight: 500,
        }}
      >
        {tokens.map((t, i) => {
          if (t.space) return <React.Fragment key={i}>{t.raw}</React.Fragment>;
          if (t.slot === undefined) return <React.Fragment key={i}>{t.raw}</React.Fragment>;
          const s = t.slot;
          const value = filled[s];
          return (
            <span
              key={i}
              style={{ position: 'relative', display: 'inline-block', lineHeight: 1.25, verticalAlign: 'baseline' }}
            >
              <span className="phrase-font" style={{ color: 'var(--teal-dark)', fontWeight: 700 }}>
                {t.raw}
              </span>
              <button
                onClick={() => held && place(s, held)}
                onDragOver={(e) => { if (!value) e.preventDefault(); }}
                onDrop={(e) => {
                  e.preventDefault();
                  const chip = e.dataTransfer.getData('text/plain');
                  if (chip) place(s, chip);
                }}
                disabled={!!value}
                className={badSlot === s ? 'shake' : ''}
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginBottom: 2,
                  minWidth: 68,
                  padding: '1px 8px',
                  fontSize: 14,
                  lineHeight: 1.6,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  borderRadius: 9,
                  background: value ? 'var(--green-soft)' : held ? '#fff' : 'rgba(255,255,255,0.6)',
                  border: value
                    ? '2px solid var(--green)'
                    : `2px dashed ${held ? 'var(--teal)' : '#c9bd9a'}`,
                  color: value ? 'var(--green)' : 'var(--ink-soft)',
                  cursor: value ? 'default' : held ? 'pointer' : 'default',
                  transition: 'all 0.15s',
                }}
              >
                {value ?? '?'}
              </button>
            </span>
          );
        })}
      </div>

      {!done ? (
        <>
          <p style={{ fontSize: 15, color: 'var(--ink-soft)', margin: '20px 0 10px' }}>
            {held ? 'עכשיו לחצו על המשבצת שמעל המילה המתאימה' : 'גררו פתק אל המשבצת — או לחצו על פתק ואז על המשבצת'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', maxWidth: 620, margin: '0 auto' }}>
            {bank.map((chip) => {
              const taken = used.has(chip);
              const active = held === chip;
              return (
                <button
                  key={chip}
                  draggable={!taken}
                  onDragStart={(e) => { e.dataTransfer.setData('text/plain', chip); setHeld(chip); }}
                  onDragEnd={() => setHeld(null)}
                  onClick={() => !taken && setHeld(active ? null : chip)}
                  disabled={taken}
                  style={{
                    padding: '10px 20px',
                    fontSize: 17,
                    fontWeight: 700,
                    borderRadius: 12,
                    background: taken ? '#eef2f0' : active ? 'var(--teal)' : '#fff',
                    color: taken ? '#b6c0bc' : active ? '#fff' : 'var(--ink)',
                    border: `2px solid ${taken ? '#e2e8f0' : active ? 'var(--teal-dark)' : '#cfd8d4'}`,
                    cursor: taken ? 'default' : 'grab',
                    opacity: taken ? 0.45 : 1,
                    transform: active ? 'translateY(-2px)' : 'none',
                    transition: 'all 0.15s',
                  }}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <div className="float-up" style={{ marginTop: 22 }}>
          <p style={{ fontWeight: 800, fontSize: 19, color: 'var(--green)' }}>
            {erred.current ? 'המשפט שלם 👍' : 'מושלם, בלי טעות אחת! 🎉'}
          </p>
          <button className="btn" onClick={next} style={{ marginTop: 12 }}>
            {idx + 1 >= activity.sentences.length ? 'סיימתי ←' : 'המשפט הבא ←'}
          </button>
        </div>
      )}
    </div>
  );
}
