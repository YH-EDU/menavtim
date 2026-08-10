import React, { useCallback, useEffect, useRef, useState } from 'react';
import { isSkipped } from '../lib/progressUtil';
import { starsFor } from '../games/ui';
import { ACTIVITY_ICONS, Lock, Check, Star3D } from '../ui/icons';
import { UNIT_COLORS } from '../lib/pathLayout';
import type { JourneyOverlaySync } from '../game/phaser/overlayBridge';

function StarArc({ count }: { count: number }) {
  const angles = [-30, 0, 30];
  const radius = 22;
  return (
    <div className="trail-star-arc" aria-hidden>
      {angles.map((deg, i) => {
        const a = (deg * Math.PI) / 180;
        const x = Math.sin(a) * radius;
        const y = -Math.cos(a) * radius + 1;
        return (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              transform: `translate(-50%, -50%) rotate(${deg * 0.3}deg)`,
            }}
          >
            <Star3D filled={i < count} size={i === 1 ? 20 : 17} />
          </span>
        );
      })}
    </div>
  );
}

function GoalMedalOverlay({
  medal,
  onEnter,
}: {
  medal: NonNullable<JourneyOverlaySync['goalMedal']>;
  onEnter: () => void;
}) {
  const { totals, allComplete, mode } = medal;
  const missing = totals.maxStars - totals.stars;
  const hasMaxStars = missing <= 0;

  if (mode === 'locked') {
    return (
      <div
        style={{
          position: 'absolute',
          left: medal.screenX,
          top: medal.screenY,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          direction: 'rtl',
          zIndex: 20,
          animation: 'pop-in 0.45s ease-out',
        }}
      >
        <div
          style={{
            background: 'rgba(255,254,247,0.96)',
            border: '3px solid rgba(125,82,38,0.7)',
            borderRadius: 18,
            padding: '14px 18px',
            minWidth: 220,
            maxWidth: 280,
            boxShadow: '0 10px 24px rgba(40,30,10,0.3)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 28, marginBottom: 4 }}>🔒</div>
          <div style={{ fontSize: 17, fontWeight: 900, color: '#4a3416' }}>בית המדרש נעול</div>
          <p style={{ margin: '8px 0 0', fontSize: 13.5, fontWeight: 600, color: '#6b5a3e', lineHeight: 1.45 }}>
            סיימו את כל התחנות — או הפעילו מסלול חופשי — כדי להיכנס
          </p>
        </div>
      </div>
    );
  }

  if (mode === 'enter') {
    return (
      <div
        style={{
          position: 'absolute',
          left: medal.screenX,
          top: medal.screenY,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'auto',
          direction: 'rtl',
          zIndex: 20,
          animation: 'pop-in 0.45s ease-out',
        }}
      >
        <button
          type="button"
          onClick={onEnter}
          style={{
            background: 'linear-gradient(165deg, rgba(255,252,240,0.98) 0%, rgba(255,245,210,0.97) 100%)',
            border: '3px solid #c9a24a',
            borderRadius: 22,
            padding: '16px 20px 14px',
            minWidth: 240,
            maxWidth: 300,
            boxShadow: '0 12px 32px rgba(40,30,10,0.35), 0 0 0 6px rgba(201,162,74,0.22)',
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          <div style={{ fontSize: 36, lineHeight: 1, marginBottom: 4 }}>🚪</div>
          <div style={{ fontSize: 19, fontWeight: 900, color: '#4a3416', marginBottom: 6 }}>
            כניסה לבית המדרש
          </div>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#6b5a3e', lineHeight: 1.45 }}>
            חדר בריחה · מנעול · מכתב בארמית
          </p>
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: medal.screenX,
        top: medal.screenY,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        direction: 'rtl',
        zIndex: 20,
        animation: 'pop-in 0.45s ease-out',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(165deg, rgba(255,252,240,0.98) 0%, rgba(255,245,210,0.97) 100%)',
          border: '3px solid #ffd54f',
          borderRadius: 22,
          padding: '18px 22px 16px',
          minWidth: 240,
          maxWidth: 300,
          boxShadow: '0 12px 32px rgba(40,30,10,0.35), 0 0 0 6px rgba(255,213,79,0.25)',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 44, lineHeight: 1, marginBottom: 4 }}>🏅</div>
        <div style={{ fontSize: 20, fontWeight: 900, color: '#4a3416', marginBottom: 6 }}>
          {allComplete ? 'יצאתם מבית המדרש!' : 'ברוכים הבאים ליעד!'}
        </div>
        <p style={{ margin: '0 0 12px', fontSize: 14, fontWeight: 600, color: '#6b5a3e', lineHeight: 1.5 }}>
          {allComplete
            ? 'סיימתם את חדר הבריחה — הנה סיכום ההישגים שלכם'
            : 'המשיכו לתחנות — כאן יוצג סיכום ההישגים שלכם'}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10, gap: 6, fontSize: 28 }}>
          {[1, 2, 3].map((tier) => (
            <span
              key={tier}
              style={{
                opacity: totals.stars >= tier * Math.ceil(totals.maxStars / 3) ? 1 : 0.3,
                filter: totals.stars >= tier * Math.ceil(totals.maxStars / 3) ? 'none' : 'grayscale(1)',
              }}
            >
              ⭐
            </span>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
            fontSize: 15,
            fontWeight: 800,
            color: '#3f2a12',
          }}
        >
          <span>⭐ {totals.stars} כוכבים</span>
          <span>🎯 {totals.points} נקודות</span>
        </div>
        {!hasMaxStars && (
          <p style={{ margin: '8px 0 0', fontSize: 13.5, color: '#9a6b1a', fontWeight: 700 }}>
            חסרים עוד {missing} כוכבים לשיא המלא
          </p>
        )}
        {totals.completedCount > 0 && (
          <p style={{ margin: '10px 0 0', fontSize: 13, color: '#7a6548', fontWeight: 600 }}>
            {totals.completedCount} תחנות הושלמו
          </p>
        )}
      </div>
    </div>
  );
}

function EscapeGuideOverlay({
  guide,
}: {
  guide: NonNullable<JourneyOverlaySync['escapeGuide']>;
}) {
  const pad = 28;
  const vw = typeof window !== 'undefined' ? window.innerWidth : 400;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 700;
  const x = Math.min(Math.max(guide.screenX, pad), vw - pad);
  const y = Math.min(Math.max(guide.screenY, pad + 40), vh - pad);

  return (
    <>
      <div
        role="status"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 88,
          transform: 'translateX(-50%)',
          zIndex: 18,
          pointerEvents: 'none',
          direction: 'rtl',
          background: 'rgba(255,254,247,0.97)',
          border: '3px solid #c9a24a',
          borderRadius: 16,
          padding: '12px 18px',
          maxWidth: 'min(420px, 92vw)',
          textAlign: 'center',
          boxShadow: '0 8px 22px rgba(40,30,10,0.3)',
        }}
      >
        <div style={{ fontWeight: 900, fontSize: 16, color: '#4a3416' }}>
          היכנסו לבית המדרש
        </div>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: '#6b5a3e', marginTop: 4, lineHeight: 1.4 }}>
          סיימתם את כל התחנות — הלכו אחרי החץ אל הכניסה
        </div>
      </div>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: x,
          top: y,
          transform: 'translate(-50%, -110%)',
          zIndex: 17,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'trail-pulse 1.4s ease-in-out infinite',
        }}
      >
        <div
          style={{
            background: '#c9a24a',
            color: '#1a1208',
            fontWeight: 900,
            fontSize: 13,
            padding: '4px 10px',
            borderRadius: 10,
            border: '2px solid #fff8ea',
            boxShadow: '0 4px 12px rgba(40,30,10,0.35)',
            whiteSpace: 'nowrap',
            direction: 'rtl',
            marginBottom: 2,
          }}
        >
          בית המדרש
        </div>
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: '14px solid transparent',
            borderRight: '14px solid transparent',
            borderTop: '22px solid #c9a24a',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.35))',
          }}
        />
      </div>
    </>
  );
}

export function PhaserStationOverlay({
  sync,
  onStationClick,
  onEnterEscape,
}: {
  sync: JourneyOverlaySync | null;
  onStationClick: (unitId: string, activityId: string) => void;
  onEnterEscape: () => void;
}) {
  if (!sync) return null;

  const { stations, unitLabels, progress, goalMedal, escapeGuide } = sync;

  return (
    <div
      aria-hidden={false}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 5,
      }}
    >
      {goalMedal?.visible && <GoalMedalOverlay medal={goalMedal} onEnter={onEnterEscape} />}
      {escapeGuide?.visible && !goalMedal?.visible && <EscapeGuideOverlay guide={escapeGuide} />}
      {unitLabels.map((u) => (
        <div
          key={`unit-${u.unitIndex}`}
          style={{
            position: 'absolute',
            left: u.screenX,
            top: u.screenY - 36,
            transform: 'translate(-50%, -100%)',
            pointerEvents: 'none',
            direction: 'rtl',
            zIndex: 2,
          }}
        >
          <div
            style={{
              background: u.color,
              color: '#fff',
              borderRadius: 10,
              padding: '4px 12px',
              fontWeight: 900,
              fontSize: 12,
              border: '2px solid rgba(255,255,255,0.85)',
              boxShadow: '0 4px 10px rgba(20,60,20,0.35)',
              whiteSpace: 'nowrap',
            }}
          >
            {u.unitTitle}
          </div>
        </div>
      ))}

      {stations.map((s) => {
        const open = s.unlocked;
        const done = s.completed;
        const skipped = isSkipped(progress, s.activityId);
        const color = UNIT_COLORS[s.unitIndex] || UNIT_COLORS[0];
        const rec = progress.completed[s.activityId];
        const stars = rec && !skipped ? starsFor(rec.score, rec.max) : 0;
        const Icon = ACTIVITY_ICONS[s.type as keyof typeof ACTIVITY_ICONS] || ACTIVITY_ICONS.quiz;
        const ns = s.isCurrent ? 58 : 52;

        let bg = 'rgba(255,255,255,0.98)';
        let ring = color;
        if (!open) {
          bg = 'rgba(226,229,223,0.94)';
          ring = '#8fa088';
        } else if (done && !skipped) {
          bg = color;
        }

        const labelSide = s.idx % 2 === 0 ? 'left' : 'right';

        return (
          <div
            key={s.activityId}
            className={`trail-node-wrap${s.isCurrent ? ' trail-node-current' : ''}`}
            style={{
              position: 'absolute',
              left: s.screenX,
              top: s.screenY,
              transform: 'translate(-50%, -50%)',
              zIndex: s.isCurrent ? 6 : 3,
              pointerEvents: open && progress.freeNav ? 'auto' : 'none',
            }}
          >
            {done && !skipped && <StarArc count={stars} />}

            <button
              type="button"
              onClick={() => open && onStationClick(s.unitId, s.activityId)}
              aria-label={s.label}
              style={{
                width: ns,
                height: ns,
                borderRadius: '50%',
                border: `5px solid ${done && !skipped ? '#ffffff' : ring}`,
                background: bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: open && progress.freeNav ? 'pointer' : 'default',
                boxShadow: s.isCurrent
                  ? `0 0 0 8px ${color}66, 0 8px 18px rgba(20,60,20,0.5)`
                  : '0 5px 12px rgba(20,60,20,0.42)',
                animation: s.isCurrent ? 'trail-pulse 1.4s ease-in-out infinite' : 'none',
                position: 'relative',
                padding: 0,
                outline: s.isCurrent ? '3px solid #f59e0b' : 'none',
                outlineOffset: 3,
                pointerEvents: open && progress.freeNav ? 'auto' : 'none',
              }}
            >
              {!open ? (
                <Lock size={20} color="#7c8873" />
              ) : (
                <Icon size={26} color={done && !skipped ? '#fff' : color} strokeWidth={2.3} />
              )}
              {done && !skipped && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    left: -2,
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: '#fff',
                    border: `2px solid ${color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Check size={10} color={color} strokeWidth={3.4} />
                </span>
              )}
            </button>

            <div
              style={{
                position: 'absolute',
                top: '50%',
                ...(labelSide === 'left'
                  ? { left: '112%', transform: 'translateY(-50%)' }
                  : { right: '112%', transform: 'translateY(-50%)' }),
                background: s.isCurrent ? color : 'rgba(255,254,247,0.96)',
                color: s.isCurrent ? '#fff' : '#3f2a12',
                border: s.isCurrent ? '2px solid #fff' : '2px solid rgba(125,82,38,0.55)',
                borderRadius: 12,
                padding: '5px 12px',
                boxShadow: '0 4px 12px rgba(20,60,20,0.3)',
                whiteSpace: 'nowrap',
                fontWeight: 900,
                fontSize: 13,
                pointerEvents: 'none',
                direction: 'rtl',
                zIndex: 6,
              }}
            >
              {s.isCurrent ? `← ${s.label}` : `${s.idx + 1}. ${s.label}`}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Hook: receives sync payloads from Phaser via bridge callback. */
export function usePhaserOverlay(onStationClick: (unitId: string, activityId: string) => void) {
  const [sync, setSync] = useState<JourneyOverlaySync | null>(null);
  const clickRef = useRef(onStationClick);
  clickRef.current = onStationClick;

  const bridge = useCallback(() => ({
    onSync: (data: JourneyOverlaySync) => setSync(data),
    onStationClick: (unitId: string, activityId: string) => clickRef.current(unitId, activityId),
  }), []);

  return { sync, bridgeFactory: bridge };
}

export function OverlayBridgeHost({
  bridgeFactory,
}: {
  bridgeFactory: () => import('../game/phaser/overlayBridge').JourneyOverlayBridge;
}) {
  useEffect(() => {
    const w = window as Window & { __journeyOverlayBridge?: ReturnType<typeof bridgeFactory> };
    w.__journeyOverlayBridge = bridgeFactory();
    return () => {
      delete w.__journeyOverlayBridge;
    };
  }, [bridgeFactory]);
  return null;
}
