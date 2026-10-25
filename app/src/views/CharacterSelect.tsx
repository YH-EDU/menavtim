import React, { useState } from 'react';
import {
  CHARACTERS,
  saveSelectedAvatar,
  type CharacterId,
} from '../game/phaser/characters';
import { FullscreenCorner } from '../ui/FullscreenToggle';

export default function CharacterSelect({
  onSelected,
  onCancel,
  identity,
}: {
  onSelected: (id: CharacterId) => void;
  onCancel?: () => void;
  /** When set, avatar is stored under name+identity-emoji (cosmetic; does not change progress key) */
  identity?: { nickname: string; emoji: string };
}) {
  const [picked, setPicked] = useState<CharacterId | null>(null);

  const confirm = () => {
    if (!picked) return;
    saveSelectedAvatar(picked, identity);
    onSelected(picked);
  };

  return (
    <div
      dir="rtl"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'linear-gradient(165deg, #7ec850 0%, #4a9e3f 45%, #2d6b28 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px 28px',
        overflowY: 'auto',
      }}
    >
      <FullscreenCorner />
      <div style={{ textAlign: 'center', marginBottom: 18, maxWidth: 520 }}>
        <div style={{ fontSize: 48, lineHeight: 1.1 }}>🎭</div>
        <h1 style={{ margin: '8px 0 6px', fontSize: 28, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>
          בחרו דמות למסע!
        </h1>
        <p style={{ margin: 0, fontSize: 15.5, color: 'rgba(255,255,255,0.92)', fontWeight: 600 }}>
          לחצו על הדמות שאתם הכי אוהבים — היא תלווה אתכם בין התחנות
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(148px, 1fr))',
          gap: 14,
          width: '100%',
          maxWidth: 780,
          marginBottom: 20,
        }}
      >
        {CHARACTERS.map((c) => {
          const selected = picked === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setPicked(c.id)}
              style={{
                border: selected ? '4px solid #ffd54f' : '3px solid rgba(255,255,255,0.55)',
                borderRadius: 20,
                background: selected ? 'rgba(255,254,247,0.98)' : 'rgba(255,254,247,0.92)',
                padding: '14px 10px 16px',
                cursor: 'pointer',
                boxShadow: selected
                  ? '0 6px 20px rgba(0,0,0,0.35), 0 0 0 3px rgba(255,213,79,0.45)'
                  : '0 4px 12px rgba(0,0,0,0.22)',
                transform: selected ? 'scale(1.04)' : 'none',
                transition: 'transform 0.15s, box-shadow 0.15s, border 0.15s',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 72,
                  lineHeight: 1,
                  marginBottom: 10,
                  transition: 'transform 0.15s ease',
                  transform: selected ? 'scale(1.08)' : 'none',
                  filter: selected ? 'drop-shadow(0 6px 12px rgba(0,0,0,0.2))' : 'drop-shadow(0 2px 6px rgba(0,0,0,0.1))',
                }}
              >
                {c.emoji}
              </div>
              <div style={{ fontSize: 17, fontWeight: 900, color: '#4a3416', marginTop: 4 }}>
                {c.nameHe}
              </div>
              <div style={{ fontSize: 12, color: '#6b5a3e', marginTop: 3, fontWeight: 600 }}>{c.taglineHe}</div>
            </button>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          type="button"
          className="btn"
          disabled={!picked}
          onClick={confirm}
          style={{
            minWidth: 200,
            fontSize: 18,
            opacity: picked ? 1 : 0.55,
            background: picked ? 'linear-gradient(180deg, #ffd54f, #f9a825)' : undefined,
            color: picked ? '#4a3416' : undefined,
          }}
        >
          {picked ? 'יאללה למסע! 🗺️' : 'בחרו דמות קודם'}
        </button>
        {onCancel && (
          <button
            type="button"
            className="btn secondary"
            onClick={onCancel}
            style={{ minWidth: 120, fontSize: 15 }}
          >
            חזרה
          </button>
        )}
      </div>
    </div>
  );
}
