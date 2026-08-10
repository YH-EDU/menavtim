import React, { useCallback, useEffect, useState } from 'react';
import {
  isFullscreenActive,
  isLikelyIOS,
  subscribeFullscreenChange,
  toggleFullscreen,
  type FullscreenToggleResult,
} from '../lib/fullscreen';

/** Expand / compress corners — Lucide-style. */
function MaximizeIcon({ size = 21 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function MinimizeIcon({ size = 21 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

export function useFullscreenState() {
  const [active, setActive] = useState(() => isFullscreenActive());
  useEffect(() => subscribeFullscreenChange(() => setActive(isFullscreenActive())), []);
  return active;
}

/** Round FAB matching JourneyMap action buttons. */
export function FullscreenFab({
  style,
}: {
  style?: React.CSSProperties;
}) {
  const active = useFullscreenState();
  const [hint, setHint] = useState<string | null>(null);

  const onClick = useCallback(async () => {
    const result: FullscreenToggleResult = await toggleFullscreen();
    if (result === 'immersive' || (isLikelyIOS() && result === 'on')) {
      setHint('ב־iPhone מסך מלא מוגבל — מצב מוגדל. אפשר גם «הוסף למסך הבית».');
      window.setTimeout(() => setHint(null), 4500);
    } else {
      setHint(null);
    }
  }, []);

  const label = active ? 'יציאה ממסך מלא' : 'מסך מלא';

  return (
    <div style={{ position: 'relative', ...style }}>
      <button
        type="button"
        onClick={onClick}
        title={label}
        aria-label={label}
        aria-pressed={active}
        style={{
          width: 46,
          height: 46,
          borderRadius: '50%',
          border: '2.5px solid rgba(125, 82, 38, 0.7)',
          background: active ? 'rgba(19, 78, 74, 0.95)' : 'rgba(255, 254, 247, 0.95)',
          color: active ? '#fff8ea' : '#6b4f26',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(30, 70, 20, 0.35)',
          flexShrink: 0,
        }}
      >
        {active ? <MinimizeIcon /> : <MaximizeIcon />}
      </button>
      {hint && (
        <div
          role="status"
          style={{
            position: 'absolute',
            top: '110%',
            left: 0,
            width: 220,
            padding: '8px 10px',
            borderRadius: 10,
            background: 'rgba(26, 18, 12, 0.92)',
            color: '#fff8ea',
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1.35,
            zIndex: 30,
            direction: 'rtl',
            textAlign: 'right',
          }}
        >
          {hint}
        </div>
      )}
    </div>
  );
}

/** Text/chrome button for EscapeRoomPage top bar. */
export function FullscreenChromeButton() {
  const active = useFullscreenState();
  const [hint, setHint] = useState<string | null>(null);

  const onClick = useCallback(async () => {
    const result = await toggleFullscreen();
    if (result === 'immersive') {
      setHint('ב־iPhone מסך מלא מוגבל — מצב מוגדל הופעל.');
      window.setTimeout(() => setHint(null), 4000);
    } else {
      setHint(null);
    }
  }, []);

  const label = active ? 'יציאה ממסך מלא' : 'מסך מלא';

  return (
    <div style={{ position: 'relative' }}>
      <button
        type="button"
        className="btn small"
        onClick={onClick}
        aria-pressed={active}
        aria-label={label}
        title={label}
        style={{
          background: active ? 'rgba(19, 78, 74, 0.12)' : 'transparent',
          boxShadow: 'none',
          color: 'var(--teal-dark)',
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          minHeight: 40,
          paddingInline: 10,
        }}
      >
        {active ? <MinimizeIcon size={18} /> : <MaximizeIcon size={18} />}
        <span>{label}</span>
      </button>
      {hint && (
        <div
          role="status"
          style={{
            position: 'absolute',
            top: '110%',
            insetInlineEnd: 0,
            width: 200,
            padding: '8px 10px',
            borderRadius: 10,
            background: 'rgba(26, 18, 12, 0.92)',
            color: '#fff8ea',
            fontSize: 12,
            fontWeight: 600,
            zIndex: 30,
            direction: 'rtl',
          }}
        >
          {hint}
        </div>
      )}
    </div>
  );
}
