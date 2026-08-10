import React from 'react';
import { nav } from '../App';
import { HeroBg } from '../ui/PageShell';
import { asset } from '../lib/basePath';
import { FullscreenFab } from '../ui/FullscreenToggle';

export default function Landing() {
  return (
    <HeroBg
      image={asset('/bg-landing-maze.jpg')}
      overlay="linear-gradient(170deg, rgba(15,40,30,0.38) 0%, rgba(20,70,55,0.28) 45%, rgba(30,90,70,0.38) 100%)"
    >
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 20px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'fixed',
            top: 'max(12px, env(safe-area-inset-top))',
            left: 'max(12px, env(safe-area-inset-left))',
            zIndex: 20,
          }}
        >
          <FullscreenFab />
        </div>

        <div className="pop-in" style={{ textAlign: 'center', color: '#fff', marginBottom: 40 }}>
          <div style={{ fontSize: 52, marginBottom: 6, filter: 'drop-shadow(0 3px 12px rgba(0,0,0,0.4))' }}>
            🗺️✨
          </div>
          <h1
            style={{
              fontSize: 'clamp(34px, 8vw, 48px)',
              fontWeight: 900,
              lineHeight: 1.15,
              margin: '0 0 12px',
              textShadow: '0 3px 18px rgba(0,0,0,0.5)',
            }}
          >
            מנווטים בארמית
          </h1>
          <p
            style={{
              fontSize: 'clamp(17px, 4vw, 21px)',
              fontWeight: 700,
              maxWidth: 420,
              margin: '0 auto',
              lineHeight: 1.55,
              textShadow: '0 2px 10px rgba(0,0,0,0.45)',
            }}
          >
            מסע משחקי בארמית — מגלים מילים, עוברים שלבים, אוספים כוכבים! ⭐
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%', maxWidth: 360 }}>
          <button
            className="btn gold"
            style={{ fontSize: 20, padding: '16px 24px', fontWeight: 900, whiteSpace: 'nowrap' }}
            onClick={() => nav('/join/guest')}
          >
            🎮 התחילו לשחק!
          </button>
          <button
            className="btn"
            style={{
              fontSize: 17,
              padding: '14px 22px',
              fontWeight: 800,
              background: 'rgba(255,255,255,0.22)',
              border: '2px solid rgba(255,255,255,0.7)',
              backdropFilter: 'blur(6px)',
            }}
            onClick={() => nav('/join')}
          >
            🏫 יש לי קוד כיתה
          </button>
          <button
            className="btn"
            style={{ background: 'transparent', boxShadow: 'none', fontSize: 15, opacity: 0.9, fontWeight: 700 }}
            onClick={() => nav('/teacher')}
          >
            👩‍🏫 כניסת מורים
          </button>
        </div>

        <div
          aria-label="ייחוסים"
          style={{
            position: 'fixed',
            left: 'max(12px, env(safe-area-inset-left))',
            bottom: 'max(12px, env(safe-area-inset-bottom))',
            zIndex: 10,
            maxWidth: 'min(300px, calc(100vw - 24px))',
            padding: '8px 10px',
            borderRadius: 8,
            background: 'rgba(0,0,0,0.38)',
            backdropFilter: 'blur(4px)',
            textAlign: 'right',
            pointerEvents: 'none',
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.92)',
              fontSize: 13,
              margin: '0 0 4px',
              lineHeight: 1.45,
              textShadow: '0 1px 4px rgba(0,0,0,0.55), 0 0 1px rgba(0,0,0,0.8)',
              fontWeight: 700,
            }}
          >
            משחק זה נוצר על ידי יותם חדד ©
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 12,
              margin: 0,
              lineHeight: 1.45,
              textShadow: '0 1px 4px rgba(0,0,0,0.55), 0 0 1px rgba(0,0,0,0.8)',
              fontWeight: 600,
            }}
          >
            מבוסס על מנוע המשחקים של חפציה בן ארצי
          </p>
        </div>
      </div>
    </HeroBg>
  );
}
