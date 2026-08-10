import React, { useEffect, useMemo, useRef, useState } from 'react';
import { reportAttempt, type StudentSession } from '../lib/api';
import { asset } from '../lib/basePath';
import {
  ESCAPE_ACTIVITY_ID,
  ESCAPE_LABEL,
  ESCAPE_MSG_JOURNEY_STARS,
  ESCAPE_MSG_SOURCE,
  ESCAPE_STAR_MAX,
  ESCAPE_STAR_SCORE,
  ESCAPE_UNIT_ID,
  escapeUnlocked,
  isEscapeCompleteMessage,
  isEscapeFullscreenToggleMessage,
  isEscapeReadyMessage,
  journeyStarsBeforeEscape,
} from '../lib/escapeRoom';
import { isFullscreenActive, subscribeFullscreenChange, toggleFullscreen } from '../lib/fullscreen';
import type { ProgressData } from '../lib/api';
import { LS_FLY_STARS } from './StarHud';
import { nav } from '../App';
import { FullscreenChromeButton } from '../ui/FullscreenToggle';

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
  const [hostFs, setHostFs] = useState(() => isFullscreenActive());
  const doneRef = useRef(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const unlocked = escapeUnlocked(progress);
  const journeyStars = useMemo(() => journeyStarsBeforeEscape(progress), [progress]);

  useEffect(() => {
    if (!unlocked) {
      nav('/map');
    }
  }, [unlocked]);

  useEffect(() => {
    return subscribeFullscreenChange(() => setHostFs(isFullscreenActive()));
  }, []);

  const postJourneyStars = () => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    try {
      win.postMessage(
        {
          source: ESCAPE_MSG_SOURCE,
          type: ESCAPE_MSG_JOURNEY_STARS,
          journeyStars,
        },
        '*',
      );
    } catch {
      /* cross-origin / not ready */
    }
  };

  useEffect(() => {
    const onMessage = async (event: MessageEvent) => {
      if (isEscapeFullscreenToggleMessage(event.data)) {
        await toggleFullscreen();
        setHostFs(isFullscreenActive());
        return;
      }
      if (isEscapeReadyMessage(event.data)) {
        postJourneyStars();
        return;
      }
      if (!isEscapeCompleteMessage(event.data) || doneRef.current) return;
      doneRef.current = true;
      setFinishing(true);
      const starsFromMsg =
        event.data &&
        typeof event.data === 'object' &&
        typeof (event.data as { stars?: unknown }).stars === 'number'
          ? Math.max(1, Math.min(3, (event.data as { stars: number }).stars))
          : ESCAPE_STAR_SCORE;
      try {
        await reportAttempt(
          session,
          ESCAPE_ACTIVITY_ID,
          ESCAPE_UNIT_ID,
          starsFromMsg,
          ESCAPE_STAR_MAX,
          {},
        );
      } catch {
        /* still return to map — progress may already be local */
      }
      sessionStorage.setItem(LS_FLY_STARS, String(starsFromMsg));
      sessionStorage.setItem('aramit_focus_act', ESCAPE_ACTIVITY_ID);
      onReported();
      window.setTimeout(() => nav('/map'), 1400);
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
    // journeyStars / postJourneyStars intentionally read from closure for ready handshake
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, onReported, journeyStars]);

  if (!unlocked) return null;

  const src = `${asset('/escape-room/')}?embed=1&journeyStars=${journeyStars}`;

  return (
    <div
      className={`escape-host${hostFs ? ' escape-host--fs' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 80,
        background: '#1a120c',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100dvh',
        maxHeight: '100dvh',
        paddingTop: hostFs ? 0 : 'env(safe-area-inset-top, 0px)',
        paddingBottom: hostFs ? 0 : 'env(safe-area-inset-bottom, 0px)',
        paddingLeft: hostFs ? 0 : 'env(safe-area-inset-left, 0px)',
        paddingRight: hostFs ? 0 : 'env(safe-area-inset-right, 0px)',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <div
        className="escape-host__chrome"
        style={{
          display: hostFs ? 'none' : 'flex',
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
          style={{ background: 'transparent', boxShadow: 'none', color: 'var(--teal-dark)', fontWeight: 700, minHeight: 40 }}
          onClick={() => nav('/map')}
        >
          → חזרה למפת המסע
        </button>
        <div style={{ fontWeight: 900, fontSize: 15, color: '#4a3416', textAlign: 'center', flex: 1 }}>
          {finishing ? '🏅 מעניקים מדליה…' : ESCAPE_LABEL}
        </div>
        <FullscreenChromeButton />
      </div>
      {hostFs && (
        <div
          className="escape-host__fs-exit"
          style={{
            position: 'absolute',
            top: 'calc(8px + env(safe-area-inset-top, 0px))',
            left: 'calc(8px + env(safe-area-inset-left, 0px))',
            zIndex: 90,
          }}
        >
          <FullscreenChromeButton />
        </div>
      )}
      <iframe
        ref={iframeRef}
        title={ESCAPE_LABEL}
        src={src}
        onLoad={postJourneyStars}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          border: 'none',
          background: '#1a120c',
          minHeight: 0,
          display: 'block',
        }}
        allow="fullscreen"
        allowFullScreen
      />
    </div>
  );
}
