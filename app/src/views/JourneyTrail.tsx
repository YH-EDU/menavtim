import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { ProgressData } from '../lib/api';
import { isSkipped } from '../lib/progressUtil';
import { starsFor } from '../games/ui';
import { ACTIVITY_ICONS, Lock, Check, Star3D, Trophy } from '../ui/icons';
import { UNIT_COLORS, scrollBoardToFocus, type Pt } from '../lib/pathLayout';
import {
  MAP_SEGMENTS,
  JOURNEY_CONTINUOUS,
  activityMeta,
  stationPos,
  trailLayout,
  currentSegment,
  segmentIndexById,
  segmentPanoramaAnchor,
  type MapSegment,
} from '../lib/mapSegments';
import { nav } from '../App';

interface Station {
  actId: string;
  title: string;
  instructions: string;
  type: string;
  unitIndex: number;
  unitTitle: string;
  pos: Pt;
  index: number;
  segIndex: number;
}

function StarArc({ count, compact }: { count: number; compact: boolean }) {
  const angles = [-30, 0, 30];
  const radius = compact ? 18 : 24;
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
            <Star3D filled={i < count} size={compact ? (i === 1 ? 17 : 15) : (i === 1 ? 22 : 19)} />
          </span>
        );
      })}
    </div>
  );
}

function Marker({
  pos,
  children,
  className,
  id,
  ground = true,
}: {
  pos: Pt;
  children: React.ReactNode;
  className?: string;
  id?: string;
  ground?: boolean;
}) {
  return (
    <div
      id={id}
      className={className}
      style={{
        position: 'absolute',
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        transform: ground ? 'translate(-50%, -50%)' : 'translate(-50%, -100%)',
        zIndex: 3,
      }}
    >
      {children}
    </div>
  );
}

function navArrowStyle(disabled: boolean): React.CSSProperties {
  return {
    border: 'none',
    background: disabled ? 'rgba(0,0,0,0.06)' : '#7d5226',
    color: disabled ? '#999' : '#ffefc9',
    borderRadius: 12,
    padding: '10px 14px',
    fontWeight: 800,
    fontSize: 13,
    cursor: disabled ? 'default' : 'pointer',
    whiteSpace: 'nowrap',
  };
}

function scrollToPanoramaY(yPercent: number) {
  const anchor = document.getElementById('journey-scroll-anchor');
  if (!anchor) return;
  const board = anchor.parentElement;
  if (!board) return;
  const boardRect = board.getBoundingClientRect();
  const anchorTop = boardRect.top + window.scrollY + (yPercent / 100) * boardRect.height;
  const target = anchorTop - window.innerHeight * 0.45;
  window.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
}

function scrollToSegment(segIndex: number) {
  scrollToPanoramaY(segmentPanoramaAnchor(segIndex));
}

function JourneyBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${JOURNEY_CONTINUOUS.bg})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        pointerEvents: 'none',
      }}
    />
  );
}

function FreeNavControls({
  focusedIdx,
  onPrev,
  onNext,
}: {
  focusedIdx: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 88,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 14,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        direction: 'rtl',
        background: 'rgba(255,254,247,0.97)',
        border: '2.5px solid rgba(125,82,38,0.75)',
        borderRadius: 18,
        padding: '8px 14px',
        boxShadow: '0 6px 18px rgba(20,60,20,0.32)',
      }}
    >
      <button
        type="button"
        disabled={focusedIdx <= 0}
        onClick={onPrev}
        aria-label="מקטע קודם — גלילה למטה"
        style={navArrowStyle(focusedIdx <= 0)}
      >
        ↓ קודם
      </button>
      <button
        type="button"
        disabled={focusedIdx >= MAP_SEGMENTS.length - 1}
        onClick={onNext}
        aria-label="מקטע הבא — גלילה למעלה"
        style={navArrowStyle(focusedIdx >= MAP_SEGMENTS.length - 1)}
      >
        הבא ↑
      </button>
    </div>
  );
}

function StationNodes({
  stations,
  progress,
  compact,
  currentIdx,
  isOpen,
  openPlay,
}: {
  stations: Station[];
  progress: ProgressData;
  compact: boolean;
  currentIdx: number;
  isOpen: (s: Station, idx: number) => boolean;
  openPlay: (s: Station) => void;
}) {
  const nodeSize = (isCurrent: boolean) => {
    if (compact) return isCurrent ? 44 : 38;
    return isCurrent ? 54 : 46;
  };

  return (
    <>
      {stations.map((s, idx) => {
        const open = isOpen(s, idx);
        const done = !!progress.completed[s.actId];
        const skipped = isSkipped(progress, s.actId);
        const isCurrent = idx === currentIdx;
        const color = UNIT_COLORS[s.unitIndex] || UNIT_COLORS[0];
        const rec = progress.completed[s.actId];
        const stars = rec && !skipped ? starsFor(rec.score, rec.max) : 0;
        const Icon = ACTIVITY_ICONS[s.type as keyof typeof ACTIVITY_ICONS] || ACTIVITY_ICONS.quiz;
        const ns = nodeSize(isCurrent);

        let bg = 'rgba(255,255,255,0.98)';
        let ring = color;
        if (!open) {
          bg = 'rgba(226,229,223,0.94)';
          ring = '#8fa088';
        } else if (done && !skipped) {
          bg = color;
        }

        return (
          <Marker
            key={s.actId}
            pos={s.pos}
            className={`trail-node-wrap${isCurrent ? ' trail-node-current' : ''}`}
            id={`station-${s.actId}`}
          >
            {done && !skipped && <StarArc count={stars} compact={compact} />}

            <button
              onClick={() => open && openPlay(s)}
              aria-label={s.title}
              style={{
                width: ns,
                height: ns,
                borderRadius: '50%',
                border: `4px solid ${done && !skipped ? '#ffffff' : ring}`,
                background: bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: open ? 'pointer' : 'default',
                boxShadow: isCurrent
                  ? `0 0 0 8px ${color}66, 0 8px 18px rgba(20,60,20,0.5)`
                  : '0 5px 12px rgba(20,60,20,0.42)',
                animation: isCurrent ? 'trail-pulse 1.4s ease-in-out infinite' : 'none',
                position: 'relative',
                padding: 0,
                zIndex: isCurrent ? 5 : 1,
                outline: isCurrent ? `3px solid #f59e0b` : 'none',
                outlineOffset: 3,
              }}
            >
              {!open ? (
                <Lock size={compact ? 18 : 22} color="#7c8873" />
              ) : (
                <Icon size={compact ? 22 : 28} color={done && !skipped ? '#fff' : color} strokeWidth={2.3} />
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
                ...(idx % 2 === 0
                  ? { left: '112%', transform: 'translateY(-50%)' }
                  : { right: '112%', transform: 'translateY(-50%)' }),
                background: isCurrent ? color : 'rgba(255,254,247,0.96)',
                color: isCurrent ? '#fff' : '#3f2a12',
                border: isCurrent ? '2px solid #fff' : '2px solid rgba(125,82,38,0.55)',
                borderRadius: 12,
                padding: '5px 12px',
                boxShadow: '0 4px 12px rgba(20,60,20,0.3)',
                whiteSpace: 'nowrap',
                fontWeight: 900,
                fontSize: compact ? 12.5 : 14,
                pointerEvents: 'none',
                direction: 'rtl',
                zIndex: 6,
              }}
            >
              {isCurrent ? `← ${s.title}` : `${s.index + 1}. ${s.title}`}
            </div>
          </Marker>
        );
      })}
    </>
  );
}

function JourneyMarkers({
  seg,
  segIdx,
  compact,
  segmentDone,
  freeNav,
}: {
  seg: MapSegment;
  segIdx: number;
  compact: boolean;
  segmentDone: boolean;
  freeNav: boolean;
}) {
  const hasNextSegment = segIdx < MAP_SEGMENTS.length - 1;
  const isFirst = segIdx === 0;
  const isLast = segIdx === MAP_SEGMENTS.length - 1;

  return (
    <>
      {isFirst && (
        <Marker pos={JOURNEY_CONTINUOUS.startPos} ground={false}>
          <div
            style={{
              background: '#7d5226',
              color: '#ffefc9',
              borderRadius: 11,
              padding: '6px 14px',
              fontSize: compact ? 13 : 15,
              fontWeight: 800,
              border: '3px solid #5d3b18',
              boxShadow: '0 4px 10px rgba(30,70,20,0.45)',
              whiteSpace: 'nowrap',
              direction: 'rtl',
              marginBottom: 8,
            }}
          >
            🚩 מתחילים כאן
          </div>
        </Marker>
      )}

      {freeNav && !isLast && (
        <Marker pos={{ x: 52, y: segmentPanoramaAnchor(segIdx) + 18 }} ground={false}>
          <div
            style={{
              background: 'rgba(125,82,38,0.88)',
              color: '#ffefc9',
              borderRadius: 9,
              padding: '4px 12px',
              fontSize: 12,
              fontWeight: 800,
              direction: 'rtl',
              marginBottom: 8,
              whiteSpace: 'nowrap',
            }}
          >
            {segmentDone ? '🎉 ממשיכים למעלה!' : seg.endLabel}
          </div>
        </Marker>
      )}

      {(!freeNav || isLast) && (
        <Marker pos={JOURNEY_CONTINUOUS.endPos} ground={false}>
          <div style={{ textAlign: 'center', direction: 'rtl', marginBottom: 8 }}>
            <div
              style={{
                width: compact ? 48 : 58,
                height: compact ? 48 : 58,
                borderRadius: '50%',
                background: segmentDone
                  ? 'radial-gradient(circle at 34% 30%, #fff3b8, #f3c53d 75%)'
                  : 'radial-gradient(circle at 34% 30%, rgba(255,255,255,0.92), rgba(233,217,178,0.92) 75%)',
                border: '4px solid #b8860b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 5px 14px rgba(30,70,20,0.45)',
                margin: '0 auto',
              }}
            >
              <Trophy size={compact ? 22 : 28} color="#b8860b" strokeWidth={2.2} />
            </div>
            <div
              style={{
                marginTop: 4,
                background: 'rgba(125,82,38,0.95)',
                color: '#ffefc9',
                borderRadius: 9,
                padding: '3px 10px',
                fontSize: 12,
                fontWeight: 800,
                display: 'inline-block',
                maxWidth: 160,
              }}
            >
              {segmentDone
                ? hasNextSegment && !freeNav
                  ? '🎉 מוכנים להמשך!'
                  : '🎉 סיימתם את החלק!'
                : seg.endLabel}
            </div>
          </div>
        </Marker>
      )}
    </>
  );
}

function ContinuousJourneyTrail({
  progress,
  freeNav,
}: {
  progress: ProgressData;
  freeNav: boolean;
}) {
  const seg = useMemo(() => currentSegment(progress), [progress]);
  const segIdx = segmentIndexById(seg.id);
  const autoIdx = segIdx;
  const [focusedIdx, setFocusedIdx] = useState(autoIdx);
  const [layout, setLayout] = useState(trailLayout);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const didInitialScroll = useRef(false);

  useEffect(() => {
    setFocusedIdx(autoIdx);
    didInitialScroll.current = false;
  }, [autoIdx]);

  useEffect(() => {
    const sync = () => setLayout(trailLayout());
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, []);

  const { w, h, compact, viewW } = layout;

  const visibleSegments = freeNav ? MAP_SEGMENTS : [seg];

  const stations: Station[] = useMemo(() => {
    return visibleSegments.flatMap((segment, si) => {
      const segmentIndex = freeNav ? si : segIdx;
      return segment.activityIds.map((actId, index) => {
        const meta = activityMeta(actId)!;
        return {
          actId,
          title: meta.act.title,
          instructions: meta.act.instructions,
          type: meta.act.type,
          unitIndex: meta.unitIndex,
          unitTitle: meta.unit.title,
          pos: stationPos(actId),
          index,
          segIndex: segmentIndex,
        };
      });
    });
  }, [freeNav, seg, segIdx, visibleSegments]);

  const isOpen = (s: Station, idx: number): boolean => {
    if (freeNav) return true;
    if (idx === 0) return true;
    return !!progress.completed[stations[idx - 1].actId];
  };

  const currentIdx = stations.findIndex((s, i) => isOpen(s, i) && !progress.completed[s.actId]);
  const segmentDone = stations.every((s) => progress.completed[s.actId]);
  const hasNextSegment = segIdx < MAP_SEGMENTS.length - 1;
  const allDone = freeNav && MAP_SEGMENTS.flatMap((s) => s.activityIds).every((id) => progress.completed[id]);

  useLayoutEffect(() => {
    const focusH = (x?: number) => scrollBoardToFocus(scrollerRef.current, w, viewW, x ?? 50);

    const focusId = sessionStorage.getItem('aramit_focus_act');
    if (focusId) {
      sessionStorage.removeItem('aramit_focus_act');
      const el = document.getElementById(`station-${focusId}`);
      const st = stations.find((s) => s.actId === focusId);
      if (el && st) {
        scrollToPanoramaY(st.pos.y);
        focusH(st.pos.x);
        requestAnimationFrame(() =>
          el.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' })
        );
        return;
      }
    }

    if (!didInitialScroll.current) {
      didInitialScroll.current = true;
      const targetY = freeNav ? segmentPanoramaAnchor(autoIdx) : segmentPanoramaAnchor(segIdx);
      requestAnimationFrame(() => {
        scrollToPanoramaY(targetY);
        const next = currentIdx >= 0 ? stations[currentIdx] : null;
        if (next) focusH(next.pos.x);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [h, w, autoIdx, segIdx, freeNav]);

  const openPlay = (s: Station) => {
    const meta = activityMeta(s.actId);
    if (!meta) return;
    sessionStorage.setItem('aramit_focus_act', s.actId);
    nav(`/play/${meta.unit.id}/${s.actId}`);
  };

  const goSegment = (idx: number) => {
    if (!MAP_SEGMENTS[idx]) return;
    setFocusedIdx(idx);
    scrollToSegment(idx);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: h,
        background: 'linear-gradient(180deg, #c5e4a8 0%, #8ec96a 55%, #6faf4a 100%)',
      }}
    >
      <div
        ref={scrollerRef}
        className="trail-h-scroll"
        style={{
          width: '100%',
          overflowX: compact ? 'auto' : 'hidden',
          overflowY: 'visible',
          direction: 'ltr',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x pan-y',
        }}
      >
        <div
          id="journey-scroll-anchor"
          style={{
            position: 'relative',
            zIndex: 1,
            width: w,
            height: h,
            direction: 'ltr',
            margin: '0 auto',
          }}
        >
          <JourneyBackground />

          <JourneyMarkers
            seg={seg}
            segIdx={segIdx}
            compact={compact}
            segmentDone={segmentDone}
            freeNav={freeNav}
          />

          <StationNodes
            stations={stations}
            progress={progress}
            compact={compact}
            currentIdx={currentIdx}
            isOpen={isOpen}
            openPlay={openPlay}
          />
        </div>
      </div>

      {freeNav && (
        <FreeNavControls
          focusedIdx={focusedIdx}
          onPrev={() => goSegment(Math.max(0, focusedIdx - 1))}
          onNext={() => goSegment(Math.min(MAP_SEGMENTS.length - 1, focusedIdx + 1))}
        />
      )}

      {!freeNav && segmentDone && hasNextSegment && (
        <div
          style={{
            position: 'fixed',
            bottom: 90,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 12,
            background: 'rgba(255,254,247,0.97)',
            border: '3px solid rgba(125,82,38,0.8)',
            borderRadius: 18,
            padding: '14px 20px',
            maxWidth: 'min(420px, 92vw)',
            textAlign: 'center',
            direction: 'rtl',
            boxShadow: '0 8px 22px rgba(20,60,20,0.35)',
          }}
        >
          <div style={{ fontWeight: 900, fontSize: 17, color: '#3f2a12' }}>
            🎉 סיימתם את {seg.shortName}!
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#6b4f26', marginTop: 6, lineHeight: 1.45 }}>
            המשיכו למקטע הבא — {MAP_SEGMENTS[segIdx + 1]?.shortName}
          </div>
          <button
            type="button"
            className="btn"
            style={{ marginTop: 12 }}
            onClick={() => scrollToSegment(segIdx + 1)}
          >
            ↑ המשך ל{MAP_SEGMENTS[segIdx + 1]?.shortName}
          </button>
        </div>
      )}

      {!freeNav && segmentDone && !hasNextSegment && (
        <div
          style={{
            position: 'fixed',
            bottom: 90,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 12,
            background: 'rgba(255,254,247,0.97)',
            border: '3px solid rgba(125,82,38,0.8)',
            borderRadius: 18,
            padding: '14px 20px',
            maxWidth: 'min(420px, 92vw)',
            textAlign: 'center',
            direction: 'rtl',
            boxShadow: '0 8px 22px rgba(20,60,20,0.35)',
          }}
        >
          <div style={{ fontWeight: 900, fontSize: 17, color: '#3f2a12' }}>
            כל הכבוד — הגעתם לבית המדרש!
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#6b4f26', marginTop: 6, lineHeight: 1.45 }}>
            סיימתם את ארבעת מקטעי המסע. אפשר להמשיך ביחידות נוספות מתצוגת הרשימה.
          </div>
        </div>
      )}

      {allDone && (
        <div
          style={{
            position: 'fixed',
            bottom: 148,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 12,
            background: 'rgba(255,254,247,0.97)',
            border: '3px solid rgba(125,82,38,0.8)',
            borderRadius: 18,
            padding: '12px 18px',
            maxWidth: 'min(420px, 92vw)',
            textAlign: 'center',
            direction: 'rtl',
            boxShadow: '0 8px 22px rgba(20,60,20,0.35)',
            fontWeight: 800,
            fontSize: 15,
            color: '#3f2a12',
          }}
        >
          כל הכבוד — סיימתם את כל המקטעים הפתוחים!
        </div>
      )}
    </div>
  );
}

export default function JourneyTrail({ progress }: { progress: ProgressData }) {
  return <ContinuousJourneyTrail progress={progress} freeNav={!!progress.freeNav} />;
}
