import React, { useEffect, useRef, useState } from 'react';
import { reportAttempt, type StudentSession } from '../lib/api';
import { asset } from '../lib/basePath';
import {
  ESCAPE_ACTIVITY_ID,
  ESCAPE_STAR_MAX,
  ESCAPE_STAR_SCORE,
  ESCAPE_UNIT_ID,
  escapeUnlocked,
  isEscapeCompleteMessage,
} from '../lib/escapeRoom';
import type { ProgressData } from '../lib/api';
import { LS_FLY_STARS } from './StarHud';
import { nav } from '../App';

export default function EscapeRoomPage({
  session,
  progress,
  onReported,
}: {
  session: StudentSession;
  progress: ProgressData;
  onReported: () => void;
}) {
  const [finishing, setFinishing] = useState(false);
  const doneRef = useRef(false);
  const unlocked = escapeUnlocked(progress);

  useEffect(() => {
    if (!unlocked) {
      nav('/map');
    }
  }, [unlocked]);

  useEffect(() => {
    const onMessage = async (event: MessageEvent) => {
      if (!isEscapeCompleteMessage(event.data) || doneRef.current) return;
      doneRef.current = true;
      setFinishing(true);
      try {
        await reportAttempt(
          session,
          ESCAPE_ACTIVITY_ID,
          ESCAPE_UNIT_ID,
          ESCAPE_STAR_SCORE,
          ESCAPE_STAR_MAX,
          {},
        );
      } catch {
        /* still return to map — progress may already be local */
      }
      sessionStorage.setItem(LS_FLY_STARS, String(ESCAPE_STAR_SCORE));
      sessionStorage.setItem('aramit_focus_act', ESCAPE_ACTIVITY_ID);
      onReported();
      window.setTimeout(() => nav('/map'), 900);
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [session, onReported]);

  if (!unlocked) return null;

  const src = `${asset('/escape-room/')}?embed=1`;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 80,
        background: '#1a120c',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          padding: '8px 12px',
          background: 'rgba(255,254,247,0.96)',
          borderBottom: '2px solid rgba(125,82,38,0.55)',
          direction: 'rtl',
          flexShrink: 0,
        }}
      >
        <button
          type="button"
          className="btn small"
          style={{ background: 'transparent', boxShadow: 'none', color: 'var(--teal-dark)', fontWeight: 700 }}
          onClick={() => nav('/map')}
        >
          → חזרה למפת המסע
        </button>
        <div style={{ fontWeight: 900, fontSize: 15, color: '#4a3416' }}>
          {finishing ? '🏅 מעניקים מדליה…' : 'כניסה לבית המדרש'}
        </div>
      </div>
      <iframe
        title="חדר בריחה — בית המדרש"
        src={src}
        style={{
          flex: 1,
          width: '100%',
          border: 'none',
          background: '#1a120c',
        }}
        allow="fullscreen"
      />
    </div>
  );
}
