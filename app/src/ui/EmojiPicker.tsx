import React, { useMemo, useState } from 'react';
import { ALL_IDENTITY_EMOJIS, IDENTITY_EMOJI_CATEGORIES } from '../data/identityEmojis';
import { FullscreenCorner } from './FullscreenToggle';

export default function EmojiPicker({
  value,
  onPick,
  onClose,
}: {
  value: string | null;
  onPick: (emoji: string) => void;
  onClose: () => void;
}) {
  const [category, setCategory] = useState(IDENTITY_EMOJI_CATEGORIES[0].id);
  const [query, setQuery] = useState('');

  const gridEmojis = useMemo(() => {
    const q = query.trim();
    if (q) {
      return ALL_IDENTITY_EMOJIS.filter((e) => e.includes(q) || categoryMatchesSearch(q, e));
    }
    return IDENTITY_EMOJI_CATEGORIES.find((c) => c.id === category)?.emojis ?? ALL_IDENTITY_EMOJIS;
  }, [category, query]);

  return (
    <div
      className="emoji-picker-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="בחירת אימוג'י מזהה"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <FullscreenCorner />
      <div className="emoji-picker-sheet pop-in">
        <div className="emoji-picker-handle" aria-hidden />
        <div className="emoji-picker-header">
          <h3>בחרו סימן מזהה 🔐</h3>
          <p>האימוג'י + השם = המפתח לשמירת ההתקדמות</p>
          <button type="button" className="emoji-picker-close" onClick={onClose} aria-label="סגירה">
            ✕
          </button>
        </div>

        <input
          className="field emoji-picker-search"
          placeholder="🔍 חיפוש אימוג'י..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          dir="rtl"
        />

        {!query.trim() && (
          <div className="emoji-picker-tabs" role="tablist">
            {IDENTITY_EMOJI_CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={category === c.id}
                className={`emoji-picker-tab${category === c.id ? ' active' : ''}`}
                onClick={() => setCategory(c.id)}
                title={c.labelHe}
              >
                <span className="emoji-picker-tab-icon">{c.icon}</span>
                <span className="emoji-picker-tab-label">{c.labelHe}</span>
              </button>
            ))}
          </div>
        )}

        <div className="emoji-picker-grid">
          {gridEmojis.map((emoji) => {
            const selected = value === emoji;
            return (
              <button
                key={emoji}
                type="button"
                className={`emoji-picker-cell${selected ? ' selected' : ''}`}
                onClick={() => {
                  onPick(emoji);
                  onClose();
                }}
                aria-label={`אימוג'י ${emoji}`}
                aria-pressed={selected}
              >
                {emoji}
              </button>
            );
          })}
          {gridEmojis.length === 0 && (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--ink-soft)', padding: 24 }}>
              לא נמצאו אימוג'ים — נסו חיפוש אחר
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/** Very simple search — match category label in Hebrew. */
function categoryMatchesSearch(q: string, emoji: string): boolean {
  const lower = q.toLowerCase();
  return IDENTITY_EMOJI_CATEGORIES.some(
    (c) => c.emojis.includes(emoji) && c.labelHe.includes(lower),
  );
}
