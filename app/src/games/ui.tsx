import React from 'react';
import { glossFor, stripPunct } from '../data/letters';

export function ProgressDots({ total, done }: { total: number; done: number }) {
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center', margin: '10px 0' }}>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: i < done ? 'var(--teal)' : '#e2e8f0',
            transition: 'background 0.3s',
          }}
        />
      ))}
    </div>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div style={{ fontSize: 46, letterSpacing: 6 }}>
      {[1, 2, 3].map((i) => (
        <span key={i} style={{ opacity: i <= n ? 1 : 0.22, filter: i <= n ? 'none' : 'grayscale(1)' }}>
          ⭐
        </span>
      ))}
    </div>
  );
}

export function starsFor(score: number, max: number): number {
  if (max <= 0) return 3;
  const r = score / max;
  if (r >= 0.9) return 3;
  if (r >= 0.65) return 2;
  return 1;
}

/** כרטיס ביטוי / מילה בארמית */
export function PhraseCard({ text, size = 54 }: { text: string; size?: number }) {
  return (
    <div
      className="phrase-font pop-in"
      style={{
        background: 'linear-gradient(160deg, #fffdf5, #fdf6e3)',
        border: '2px solid #e7d9b0',
        borderRadius: 18,
        padding: '30px 34px',
        fontSize: size,
        textAlign: 'center',
        minWidth: 200,
        maxWidth: '100%',
        lineHeight: 1.4,
        boxShadow: 'var(--shadow)',
        direction: 'rtl',
        fontWeight: 700,
      }}
    >
      {text}
    </div>
  );
}

/** תאימות לאחור */
export const RashiCard = PhraseCard;

// ───────────────────────── טקסט מעורב עברית/ארמית ─────────────────────────

export interface AramaicToken {
  raw: string;
  /** התרגום לעברית, או null אם זו מילה עברית רגילה */
  gloss: string | null;
}

/**
 * מפרק טקסט למילים ומסמן אילו מהן ארמיות.
 * highlight מפורש גובר על הזיהוי האוטומטי מהלקסיקון.
 * מילים שהתרגום שלהן זהה למילה עצמה לא מסומנות (למשל "אמר").
 */
export function tokenizeMixed(
  text: string,
  highlight?: string[],
  glossary?: Record<string, string>
): AramaicToken[] {
  const forced = highlight ? new Set(highlight.map(stripPunct)) : null;
  return text.split(/(\s+)/).map((raw) => {
    if (!raw.trim()) return { raw, gloss: null };
    const word = stripPunct(raw);
    const gloss = glossFor(raw, glossary);
    if (forced) return { raw, gloss: forced.has(word) ? gloss ?? word : null };
    if (!gloss || gloss === word) return { raw, gloss: null };
    return { raw, gloss };
  });
}

/** מילה ארמית מודגשת, עם תרגום צף מעליה כשהוא נחשף */
export function GlossWord({
  word,
  gloss,
  revealed,
  onClick,
  glossSize = 14,
}: {
  word: string;
  gloss: string;
  revealed: boolean;
  onClick?: () => void;
  glossSize?: number;
}) {
  return (
    <span
      className="phrase-font"
      onClick={onClick}
      style={{
        position: 'relative',
        color: 'var(--teal)',
        fontWeight: 800,
        background: revealed ? 'var(--green-soft)' : 'rgba(13,148,136,0.10)',
        borderRadius: 6,
        padding: '0 4px',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background 0.2s',
        whiteSpace: 'nowrap',
      }}
    >
      {word}
      <span
        style={{
          position: 'absolute',
          bottom: '104%',
          right: '50%',
          transform: `translateX(50%) translateY(${revealed ? '0' : '6px'})`,
          fontFamily: 'Heebo, system-ui, sans-serif',
          fontSize: glossSize,
          // חובה מפורש — אחרת התיבה יורשת את גובה השורה של הפסקה ומתנגשת בשורה שמעליה
          lineHeight: 1.45,
          fontWeight: 700,
          color: 'var(--green)',
          background: '#fff',
          border: '1px solid var(--green)',
          borderRadius: 8,
          padding: '1px 7px',
          whiteSpace: 'nowrap',
          opacity: revealed ? 1 : 0,
          pointerEvents: 'none',
          transition: 'opacity 0.25s, transform 0.25s',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
          zIndex: 2,
        }}
      >
        {gloss}
      </span>
    </span>
  );
}

/** טקסט מעורב: המילים הארמיות מודגשות; reveal חושף את התרגום מעליהן */
export function MixedText({
  text,
  highlight,
  glossary,
  reveal = false,
  fontSize = 20,
  lineHeight = 2.8,
}: {
  text: string;
  highlight?: string[];
  glossary?: Record<string, string>;
  reveal?: boolean;
  fontSize?: number;
  lineHeight?: number;
}) {
  const tokens = tokenizeMixed(text, highlight, glossary);
  return (
    <span style={{ fontSize, lineHeight, display: 'inline' }}>
      {tokens.map((t, i) =>
        t.gloss ? (
          <GlossWord key={i} word={t.raw} gloss={t.gloss} revealed={reveal} />
        ) : (
          <React.Fragment key={i}>{t.raw}</React.Fragment>
        )
      )}
    </span>
  );
}
