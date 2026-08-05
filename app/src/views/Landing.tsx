import React from 'react';
import { nav } from '../App';
import { HeroBg } from '../ui/PageShell';
import { asset } from '../lib/basePath';
import type { StudentSession } from '../lib/api';

export default function Landing({
  session,
  onLogout,
}: {
  session?: StudentSession | null;
  onLogout?: (to?: string) => void;
}) {
  return (
    <HeroBg image={asset('/bg-landing-maze.jpg')}>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          position: 'relative',
        }}
      >
        <div className="pop-in" style={{ textAlign: 'center', color: '#fff', marginBottom: 36 }}>
          <div className="phrase-font" style={{ fontSize: 64, lineHeight: 1.1, marginBottom: 8, textShadow: '0 4px 22px rgba(0,0,0,0.45)', fontWeight: 900 }}>
            שלום
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 900, textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}>מנווטים בארמית</h1>
          <p style={{ fontSize: 19, opacity: 0.95, maxWidth: 480, margin: '10px auto 0', lineHeight: 1.6, textShadow: '0 1px 8px rgba(0,0,0,0.35)' }}>
            מסע ניווט בארמית לדוברי עברית — ממילים יומיומיות ועד ביטויים תלמודיים, תחנה אחר תחנה
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%', maxWidth: 340 }}>
          {session && (
            <button
              className="btn gold"
              style={{ fontSize: 18, padding: '14px 22px' }}
              onClick={() => nav('/map')}
            >
              המשך למסע 🗺️
            </button>
          )}
          <button
            className="btn gold"
            style={{ fontSize: 18, padding: '14px 22px', whiteSpace: 'nowrap' }}
            onClick={() => {
              if (session) onLogout?.('/');
              nav('/join/guest');
            }}
          >
            תרגול חופשי
          </button>
          <button
            className="btn"
            style={{ background: 'rgba(255,255,255,0.18)', border: '2px solid rgba(255,255,255,0.65)', backdropFilter: 'blur(6px)' }}
            onClick={() => {
              if (session) onLogout?.('/');
              nav('/join');
            }}
          >
            קוד כיתה
          </button>
          <button
            className="btn"
            style={{ background: 'transparent', boxShadow: 'none', fontSize: 15, opacity: 0.9 }}
            onClick={() => nav('/teacher')}
          >
            👩‍🏫 כניסת מורים
          </button>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 40, textShadow: '0 1px 6px rgba(0,0,0,0.35)' }}>
          מבוסס על מנוע המשחקים של חפציה בן ארצי
        </p>
      </div>
    </HeroBg>
  );
}
