import React, { useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { AnnotateActivity, ActivityResult, LetterEvents } from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { glossFor, stripPunct } from '../data/letters';
import { ProgressDots } from './ui';
import { playCorrect, playWrong } from '../lib/sound';
import { useSpeechText } from './SpeechContext';

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

function slotFromPoint(x: number, y: number): number | null {
  const el = document.elementFromPoint(x, y);
  const slotEl = el?.closest('[data-annotate-slot]') as HTMLElement | null;
  if (!slotEl) return null;
  const n = Number(slotEl.dataset.annotateSlot);
  return Number.isFinite(n) ? n : null;
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
  const dragChip = useRef<string | null>(null);
  const didDrag = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const [ghost, setGhost] = useState<{ chip: string; x: number; y: number } | null>(null);
  const [hoverSlot, setHoverSlot] = useState<number | null>(null);

  const item = activity.sentences[idx];

  useSpeechText(item.sentence);

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
  const used = new Set(Object.values(filled));

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

  const endDrag = (chip: string, x: number, y: number) => {
    if (didDrag.current) {
      const slot = slotFromPoint(x, y);
      if (slot !== null && !filled[slot]) place(slot, chip);
    }
    dragChip.current = null;
    setGhost(null);
    setHoverSlot(null);
  };

  const startDrag = (chip: string, e: React.PointerEvent) => {
    if (used.has(chip)) return;
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
    dragChip.current = chip;
    didDrag.current = false;
  };

  const moveDrag = (e: React.PointerEvent) => {
    if (!dragChip.current) return;
    if (!didDrag.current) didDrag.current = true;
    setHeld(dragChip.current);
    setGhost({
      chip: dragChip.current,
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
    const slot = slotFromPoint(e.clientX, e.clientY);
    setHoverSlot(slot !== null && !filled[slot] ? slot : null);
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
          const hot = hoverSlot === s && !value;
          return (
            <span
              key={i}
              style={{ position: 'relative', display: 'inline-block', lineHeight: 1.25, verticalAlign: 'baseline' }}
            >
              <span className="phrase-font" style={{ color: 'var(--teal-dark)', fontWeight: 700 }}>
                {t.raw}
              </span>
              <button
                type="button"
                data-annotate-slot={s}
                onClick={() => held && place(s, held)}
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
                  touchAction: 'none',
                  background: value ? 'var(--green-soft)' : hot ? '#fff' : held ? '#fff' : 'rgba(255,255,255,0.6)',
                  border: value
                    ? '2px solid var(--green)'
                    : `2px dashed ${hot || held ? 'var(--teal)' : '#c9bd9a'}`,
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
              const dragging = ghost?.chip === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  onPointerDown={(e) => startDrag(chip, e)}
                  onPointerMove={moveDrag}
                  onPointerUp={(e) => {
                    if (dragChip.current === chip) endDrag(chip, e.clientX, e.clientY);
                  }}
                  onPointerCancel={(e) => {
                    if (dragChip.current === chip) endDrag(chip, e.clientX, e.clientY);
                  }}
                  onClick={() => {
                    if (didDrag.current || taken) return;
                    setHeld(active ? null : chip);
                  }}
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
                    opacity: taken ? 0.45 : dragging ? 0.35 : 1,
                    transform: active ? 'translateY(-2px)' : 'none',
                    transition: 'all 0.15s',
                    touchAction: 'none',
                    userSelect: 'none',
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

      {ghost &&
        createPortal(
          <div
            aria-hidden
            style={{
              position: 'fixed',
              left: ghost.x,
              top: ghost.y,
              padding: '10px 20px',
              fontSize: 17,
              fontWeight: 700,
              borderRadius: 12,
              background: 'var(--teal)',
              color: '#fff',
              border: '2px solid var(--teal-dark)',
              boxShadow: '0 8px 20px rgba(13,148,136,0.35)',
              pointerEvents: 'none',
              zIndex: 9999,
              touchAction: 'none',
              userSelect: 'none',
            }}
          >
            {ghost.chip}
          </div>,
          document.body,
        )}
    </div>
  );
}
