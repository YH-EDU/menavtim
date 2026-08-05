import React, { useEffect, useRef, useState } from 'react';
import type { ProgressData } from '../lib/api';
import { computeJourneyTotals } from '../lib/journeyTotals';

export const LS_FLY_STARS = 'aramit_fly_stars';

interface FlyingStar {
  id: number;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
}

function HudStarIcon({ pulse }: { pulse: boolean }) {
  return (
    <svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      aria-hidden
      className={pulse ? 'star-hud-icon-pulse' : 'star-hud-icon-idle'}
    >
      <defs>
        <linearGradient id="hudStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8dc" />
          <stop offset="45%" stopColor="#ffd54f" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="hudStarGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="18" cy="18" r="16" fill="rgba(255,213,79,0.18)" />
      <polygon
        points="18,4 21.6,13.2 31.5,14.2 24,20.8 26.2,30.5 18,25.5 9.8,30.5 12,20.8 4.5,14.2 14.4,13.2"
        fill="url(#hudStarGrad)"
        stroke="#b8860b"
        strokeWidth="1.4"
        strokeLinejoin="round"
        filter="url(#hudStarGlow)"
      />
      <polygon
        points="18,8 20,14 26,14.5 21.5,18.5 23,24.5 18,21.5 13,24.5 14.5,18.5 10,14.5 16,14"
        fill="rgba(255,255,255,0.35)"
        stroke="none"
      />
    </svg>
  );
}

export default function StarHud({
  progress,
  embedded = false,
}: {
  progress: ProgressData;
  /** When true, render inline (e.g. below the name badge) instead of fixed top-right. */
  embedded?: boolean;
}) {
  const totals = computeJourneyTotals(progress);
  const iconRef = useRef<HTMLDivElement>(null);
  const prevStars = useRef(totals.stars);
  const [displayStars, setDisplayStars] = useState(totals.stars);
  const [pulse, setPulse] = useState(false);
  const [flying, setFlying] = useState<FlyingStar[]>([]);
  const flyId = useRef(0);

  const iconTarget = () => {
    const icon = iconRef.current?.getBoundingClientRect();
    return {
      x: icon ? icon.left + icon.width / 2 : window.innerWidth - 48,
      y: icon ? icon.top + icon.height / 2 : 33,
    };
  };

  useEffect(() => {
    const pending = Number(sessionStorage.getItem(LS_FLY_STARS) || '0');
    if (pending > 0) {
      sessionStorage.removeItem(LS_FLY_STARS);
      const target = iconTarget();
      const fromX = window.innerWidth * 0.5;
      const fromY = window.innerHeight * 0.42;

      const batch: FlyingStar[] = Array.from({ length: pending }, () => ({
        id: flyId.current++,
        fromX,
        fromY,
        toX: target.x,
        toY: target.y,
      }));
      setFlying((prev) => [...prev, ...batch]);

      window.setTimeout(() => {
        setDisplayStars(totals.stars);
        setPulse(true);
        window.setTimeout(() => setPulse(false), 700);
      }, 520);

      window.setTimeout(() => {
        setFlying((prev) => prev.filter((s) => !batch.some((b) => b.id === s.id)));
      }, 900);
    } else if (totals.stars !== prevStars.current) {
      setDisplayStars(totals.stars);
      if (totals.stars > prevStars.current) {
        setPulse(true);
        window.setTimeout(() => setPulse(false), 700);
      }
    }
    prevStars.current = totals.stars;
  }, [totals.stars]);

  return (
    <>
      <div
        style={{
          ...(embedded
            ? {}
            : {
                position: 'fixed',
                top: 14,
                right: 12,
                zIndex: 12,
              }),
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          direction: 'rtl',
          pointerEvents: 'none',
          background: embedded ? 'rgba(255, 254, 247, 0.94)' : undefined,
          border: embedded ? '3px solid rgba(125, 82, 38, 0.85)' : undefined,
          borderRadius: embedded ? 999 : undefined,
          padding: embedded ? '5px 14px 6px' : undefined,
          boxShadow: embedded ? '0 4px 10px rgba(30, 70, 20, 0.35)' : undefined,
        }}
      >
        <div
          ref={iconRef}
          style={{ lineHeight: 0, flexShrink: 0 }}
        >
          <HudStarIcon pulse={pulse} />
        </div>
        <div
          className={pulse ? 'star-hud-count-pulse' : undefined}
          style={{
            fontSize: 26,
            fontWeight: 900,
            color: '#4a3416',
            lineHeight: 1,
            textShadow: '0 1px 0 rgba(255,255,255,0.85)',
            minWidth: 28,
          }}
        >
          {displayStars}
        </div>
      </div>

      {flying.map((star) => (
        <span
          key={star.id}
          className="star-hud-fly"
          style={
            {
              '--from-x': `${star.fromX}px`,
              '--from-y': `${star.fromY}px`,
              '--to-x': `${star.toX}px`,
              '--to-y': `${star.toY}px`,
            } as React.CSSProperties
          }
        >
          ⭐
        </span>
      ))}
    </>
  );
}

