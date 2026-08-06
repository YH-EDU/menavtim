import React, { useState } from 'react';
import { joinClass, guestSession, type StudentSession } from '../lib/api';
import { nav } from '../App';
import { HeroBg } from '../ui/PageShell';
import { asset } from '../lib/basePath';
import {
  CHARACTERS,
  getCharacterDef,
  saveSelectedAvatar,
  type CharacterId,
} from '../game/phaser/characters';

function CharacterPicker({
  picked,
  onPick,
}: {
  picked: CharacterId | null;
  onPick: (id: CharacterId) => void;
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
        gap: 8,
        marginTop: 4,
      }}
    >
      {CHARACTERS.map((c) => {
        const selected = picked === c.id;
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => onPick(c.id)}
            style={{
              border: selected ? '3px solid var(--teal)' : '2px solid #e2e8f0',
              borderRadius: 14,
              background: selected ? 'var(--teal-soft)' : '#fff',
              padding: '10px 6px 8px',
              cursor: 'pointer',
              transform: selected ? 'scale(1.05)' : 'none',
              transition: 'all 0.12s',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: 68,
                lineHeight: 1,
                marginBottom: 6,
                filter: selected ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' : 'none',
              }}
            >
              {c.emoji}
            </div>
            <div style={{ fontSize: 13.5, fontWeight: 800, color: '#4a3416', marginTop: 2 }}>
              {c.nameHe}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default function Join({
  onJoined,
  guest = false,
  initialCode = '',
}: {
  onJoined: (s: StudentSession) => void;
  /** תרגול חופשי — שם + דמות, בלי קוד כיתה */
  guest?: boolean;
  initialCode?: string;
}) {
  const isGuest = guest;
  const linkCode = initialCode.replace(/\s+/g, '').toUpperCase();
  const [code, setCode] = useState(linkCode);
  const [nick, setNick] = useState('');
  const [character, setCharacter] = useState<CharacterId | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  const codeFromLink = linkCode.length > 0 && !isGuest;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr('');
    if (!nick.trim()) { setErr('כתבו שם או כינוי'); return; }
    if (!character) { setErr('בחרו דמות למסע'); return; }
    const emoji = getCharacterDef(character).emoji;
    saveSelectedAvatar(character);
    if (isGuest) {
      onJoined(guestSession(nick.trim(), emoji));
      return;
    }
    const joinCode = (codeFromLink ? linkCode : code.trim()).toUpperCase();
    if (!joinCode) { setErr('כתבו את קוד הכיתה שקיבלתם מהמורה'); return; }
    setBusy(true);
    try {
      onJoined(await joinClass(joinCode, nick.trim(), emoji));
    } catch (ex) {
      setErr(ex instanceof Error ? ex.message : 'שגיאה — נסו שוב');
    } finally {
      setBusy(false);
    }
  };

  return (
    <HeroBg image={asset('/bg-join.webp')} overlay="linear-gradient(170deg, rgba(19,60,50,0.55) 0%, rgba(15,80,70,0.5) 100%)">
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
      }}
    >
      <form className="card pop-in" onSubmit={submit} style={{ width: '100%', maxWidth: 520, textAlign: 'center', background: 'rgba(255,255,255,0.94)' }}>
        <div style={{ fontSize: 44 }}>{isGuest ? '🧭' : '🎒'}</div>
        <h2 style={{ margin: '6px 0 4px' }}>{isGuest ? 'תרגול חופשי' : 'הצטרפות לכיתה'}</h2>
        <p style={{ color: 'var(--ink-soft)', fontSize: 15, marginTop: 0 }}>
          {isGuest
            ? 'בחרו שם ודמות — והמסע מתחיל (ההתקדמות נשמרת על המכשיר)'
            : codeFromLink
              ? 'בחרו שם ודמות — והמסע מתחיל (הקוד כבר מולא מהקישור)'
              : 'הכניסו קוד כיתה, ובחרו שם ודמות למסע'}
        </p>
        {!isGuest && codeFromLink && (
          <div
            style={{
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: 8,
              color: 'var(--teal-dark)',
              direction: 'ltr',
              background: 'var(--teal-soft)',
              borderRadius: 12,
              padding: '10px 0',
              marginBottom: 12,
            }}
          >
            {linkCode}
          </div>
        )}
        {!isGuest && !codeFromLink && (
          <input
            className="field"
            style={{ textAlign: 'center', fontSize: 28, letterSpacing: 8, fontWeight: 700, marginBottom: 12 }}
            placeholder="קוד כיתה (מספרים)"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/[^\dA-Za-z]/g, ''))}
            maxLength={8}
            inputMode="numeric"
            pattern="[0-9]*"
            dir="ltr"
            autoComplete="one-time-code"
          />
        )}
        <input
          className="field"
          style={{ textAlign: 'center', fontSize: 20 }}
          placeholder="השם או הכינוי שלי"
          value={nick}
          onChange={(e) => setNick(e.target.value)}
          maxLength={30}
        />
        <p style={{ fontSize: 14.5, fontWeight: 700, margin: '14px 0 8px' }}>
          בחרו דמות למסע 🎭
        </p>
        <CharacterPicker picked={character} onPick={setCharacter} />

        {err && <p className="err">{err}</p>}
        <button className="btn" style={{ width: '100%', marginTop: 16 }} disabled={busy}>
          {busy ? 'רגע...' : 'יוצאים למסע! 🚀'}
        </button>
        <button type="button" className="btn" style={{ background: 'transparent', boxShadow: 'none', color: 'var(--ink-soft)', fontSize: 14, marginTop: 6 }} onClick={() => nav('/')}>
          → חזרה
        </button>
      </form>
    </div>
    </HeroBg>
  );
}
