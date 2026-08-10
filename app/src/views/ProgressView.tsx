import React from 'react';
import { LETTERS, vocalize } from '../data/letters';
import type { StudentSession, ProgressData } from '../lib/api';
import { masteryFrom, masteryColor, masteryLabel } from '../lib/mastery';
import { nav } from '../App';
import { SoftPageShell } from '../ui/PageShell';
import { FullscreenCorner } from '../ui/FullscreenToggle';

export default function ProgressView({
  session,
  progress,
}: {
  session: StudentSession;
  progress: ProgressData;
}) {
  return (
    <SoftPageShell seed="progress">
    <FullscreenCorner />
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '20px 16px 60px' }}>
      <button className="btn small" style={{ background: 'transparent', boxShadow: 'none', color: 'var(--teal-dark)', fontWeight: 700 }} onClick={() => nav('/map')}>
        → חזרה למפת המסע
      </button>
      <div style={{ textAlign: 'center', margin: '10px 0 20px' }}>
        <h1 style={{ fontSize: 26 }}>📚 אוסף המילים של {session.nickname}</h1>
        <p style={{ color: 'var(--ink-soft)' }}>ככל שהמילה ירוקה יותר — אתם שולטים בה יותר!</p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: 10,
        }}
      >
        {LETTERS.map((l) => {
          const st = progress.letters[l.ch];
          const m = masteryFrom(st?.c ?? 0, st?.w ?? 0);
          return (
            <div
              key={l.ch}
              className="card"
              style={{
                textAlign: 'center',
                padding: '14px 6px 10px',
                borderTop: `6px solid ${masteryColor(m)}`,
              }}
            >
              <div className="phrase-font" style={{ fontSize: l.ch.length > 6 ? 17 : 23 }}>{l.voc ?? l.ch}</div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-soft)', marginTop: 2 }}>{l.name}</div>
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  marginTop: 6,
                  color: m < 0 ? '#94a3b8' : masteryColor(m),
                }}
              >
                {masteryLabel(m)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </SoftPageShell>
  );
}
