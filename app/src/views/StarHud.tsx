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
      <polygon
        points="18,4 21.6,13.2 31.5,14.2 24,20.8 26.2,30.5 18,25.5 9.8,30.5 12,20.8 4.5,14.2 14.4,13.2"
        fill="url(#hudStarGrad)"
        stroke="none"
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
    if (icon && icon.width > 0) {
      return { x: icon.left + icon.width / 2, y: icon.top + icon.height / 2 };
    }
    const root = document.documentElement;
    const rtl = root.dir === 'rtl' || getComputedStyle(root).direction === 'rtl';
    const inset = rtl
      ? Math.max(8, Number.parseFloat(getComputedStyle(root).getPropertyValue('env(safe-area-inset-right)')) || 0)
      : Math.max(8, Number.parseFloat(getComputedStyle(root).getPropertyValue('env(safe-area-inset-left)')) || 0);
    return {
      x: rtl ? window.innerWidth - inset - 18 : inset + 18,
      y: 88,
    };
  };

  useEffect(() => {
    const pending = Number(sessionStorage.getItem(LS_FLY_STARS) || '0');
    if (pending > 0) {
      sessionStorage.removeItem(LS_FLY_STARS);

      const launch = () => {
        const target = iconTarget();
        const fromX = window.innerWidth * 0.5;
        const fromY = window.innerHeight * 0.42;

        const batch: FlyingStar[] = Array.from({ length: pending }, (_, i) => ({
          id: flyId.current++,
          fromX: fromX + (i - (pending - 1) / 2) * 14,
          fromY: fromY + (i % 2) * 10,
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
      };

      requestAnimationFrame(() => requestAnimationFrame(launch));
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
          gap: 6,
          pointerEvents: 'none',
          ...(embedded
            ? { direction: 'ltr', justifyContent: 'flex-end', width: '100%' }
            : { direction: 'rtl' }),
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
            textShadow: '0 1px 2px rgba(255,255,255,0.9), 0 0 8px rgba(255,213,79,0.45)',
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

