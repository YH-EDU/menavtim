import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ProgressData } from '../lib/api';
import { isSkipped } from '../lib/progressUtil';
import { starsFor } from '../games/ui';
import { ACTIVITY_ICONS, Lock, Check, Star3D } from '../ui/icons';
import { UNIT_COLORS } from '../lib/pathLayout';
import {
  DEPTH_ALL_ACTIVITY_IDS,
  DEPTH_ALL_MISSIONS,
  DEPTH_STAGES,
  DEPTH_WORLD,
  cameraTransform,
  initialMissionIndex,
  maxMissionIndex,
  missionIndex,
  nextMissionIndex,
  stageDone,
  stageForMission,
  type DepthMission,
} from '../lib/depthWorld';
import { activityMeta } from '../lib/mapSegments';
import { nav } from '../App';

const TRANSITION_MS = 780;
const CHEVRON_FADE_MS = 4200;

function StarArc({ count, size = 'md' }: { count: number; size?: 'md' | 'sm' }) {
  const angles = [-30, 0, 30];
  const radius = size === 'sm' ? 16 : 22;
  const starSize = size === 'sm' ? 14 : 18;
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
            <Star3D filled={i < count} size={i === 1 ? starSize + 2 : starSize} />
          </span>
        );
      })}
    </div>
  );
}

function ChevronHint({
  direction,
  visible,
  label,
}: {
  direction: 'forward' | 'back';
  visible: boolean;
  label: string;
}) {
  if (!visible) return null;
  return (
    <div
      className={`journey-depth-chevron journey-depth-chevron-${direction}`}
      aria-hidden
      title={label}
    >
      <span className="journey-depth-chevron-icon">{direction === 'forward' ? '▲' : '▼'}</span>
    </div>
  );
}

function DepthStation({
  mission,
  progress,
  freeNav,
  actIndex,
  isCurrent,
  onPlay,
}: {
  mission: DepthMission;
  progress: ProgressData;
  freeNav: boolean;
  actIndex: number;
  isCurrent: boolean;
  onPlay: () => void;
}) {
  const actId = mission.activityId;
  const meta = activityMeta(actId);
  if (!meta) return null;

  const open =
    freeNav ||
    actIndex === 0 ||
    !!progress.completed[DEPTH_ALL_ACTIVITY_IDS[actIndex - 1]];
  const done = !!progress.completed[actId];
  const skipped = isSkipped(progress, actId);
  const color = UNIT_COLORS[meta.unitIndex] || UNIT_COLORS[0];
  const rec = progress.completed[actId];
  const stars = rec && !skipped ? starsFor(rec.score, rec.max) : 0;
  const Icon = ACTIVITY_ICONS[meta.act.type as keyof typeof ACTIVITY_ICONS] || ACTIVITY_ICONS.quiz;
  const ns = isCurrent ? 72 : 64;

  let bg = 'rgba(255,255,255,0.98)';
  let ring = color;
  if (!open) {
    bg = 'rgba(226,229,223,0.94)';
    ring = '#8fa088';
  } else if (done && !skipped) {
    bg = color;
  }

  return (
    <div
      className={`depth-station${isCurrent ? ' depth-station-current' : ''}`}
      style={{
        position: 'absolute',
        left: `${mission.x}%`,
        top: `${mission.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 8,
        direction: 'rtl',
      }}
    >
      <div
        className="depth-station-label"
        style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: 10,
          background: isCurrent ? color : 'rgba(255,254,247,0.96)',
          color: isCurrent ? '#fff' : '#3f2a12',
          border: isCurrent ? '2.5px solid #fff' : '2.5px solid rgba(125,82,38,0.6)',
          borderRadius: 14,
          padding: '7px 16px',
          boxShadow: isCurrent
            ? `0 6px 18px ${color}88, 0 4px 12px rgba(20,60,20,0.35)`
            : '0 4px 12px rgba(20,60,20,0.3)',
          whiteSpace: 'nowrap',
          fontWeight: 900,
          fontSize: isCurrent ? 15 : 14,
          pointerEvents: 'none',
        }}
      >
        {meta.act.title}
      </div>

      {isCurrent && <span className="depth-station-pulse-ring" style={{ borderColor: color }} aria-hidden />}

      {done && !skipped && <StarArc count={stars} size="sm" />}

      <button
        type="button"
        onClick={() => open && onPlay()}
        aria-label={`${meta.act.title}${open ? ' — לחצו להתחלה' : ' — נעול'}`}
        style={{
          width: ns,
          height: ns,
          borderRadius: '50%',
          border: `5px solid ${done && !skipped ? '#ffffff' : ring}`,
          background: bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: open ? 'pointer' : 'default',
          boxShadow: isCurrent
            ? `0 0 0 10px ${color}55, 0 10px 22px rgba(20,60,20,0.55)`
            : '0 6px 14px rgba(20,60,20,0.45)',
          animation: isCurrent ? 'trail-pulse 1.4s ease-in-out infinite' : 'depth-station-glow 2.4s ease-in-out infinite',
          position: 'relative',
          padding: 0,
          outline: isCurrent ? '3px solid #f59e0b' : 'none',
          outlineOffset: 4,
        }}
      >
        {!open ? (
          <Lock size={24} color="#7c8873" />
        ) : (
          <Icon size={32} color={done && !skipped ? '#fff' : color} strokeWidth={2.3} />
        )}
        {done && !skipped && (
          <span
            style={{
              position: 'absolute',
              bottom: -3,
              left: -3,
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: '#fff',
              border: `2px solid ${color}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Check size={11} color={color} strokeWidth={3.4} />
          </span>
        )}
      </button>
    </div>
  );
}

function useViewportSize(ref: React.RefObject<HTMLElement | null>) {
  const [size, setSize] = useState({ w: 390, h: 844 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) setSize({ w: width, h: height });
    });
    ro.observe(el);
    const { width, height } = el.getBoundingClientRect();
    if (width > 0 && height > 0) setSize({ w: width, h: height });
    return () => ro.disconnect();
  }, [ref]);
  return size;
}

export default function JourneyDepth({ progress }: { progress: ProgressData }) {
  const freeNav = !!progress.freeNav;
  const maxIdx = useMemo(() => maxMissionIndex(progress), [progress]);
  const [missionIdx, setMissionIdx] = useState(() => initialMissionIndex(progress));
  const [transitioning, setTransitioning] = useState(false);
  const [hintsVisible, setHintsVisible] = useState(true);
  const [imgSrc, setImgSrc] = useState(DEPTH_WORLD.image);
  const timerRef = useRef<number | null>(null);
  const hintTimerRef = useRef<number | null>(null);
  const mounted = useRef(false);
  const prevCompletedRef = useRef(progress.completed);
  const viewportRef = useRef<HTMLDivElement>(null);
  const viewport = useViewportSize(viewportRef);

  const mission = DEPTH_ALL_MISSIONS[missionIdx];
  const stage = stageForMission(mission);

  const cam = useMemo(
    () => cameraTransform(mission, DEPTH_WORLD, viewport.w, viewport.h),
    [mission, viewport.w, viewport.h],
  );

  useEffect(() => {
    const focusId = sessionStorage.getItem('aramit_focus_act');
    if (focusId) {
      sessionStorage.removeItem('aramit_focus_act');
      const mi = missionIndex(focusId);
      if (mi >= 0) setMissionIdx(mi);
      return;
    }
    if (!mounted.current) {
      mounted.current = true;
      setMissionIdx(initialMissionIndex(progress));
    }
  }, [progress]);

  useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      if (hintTimerRef.current) window.clearTimeout(hintTimerRef.current);
    },
    [],
  );

  useEffect(() => {
    setHintsVisible(true);
    if (hintTimerRef.current) window.clearTimeout(hintTimerRef.current);
    hintTimerRef.current = window.setTimeout(() => setHintsVisible(false), CHEVRON_FADE_MS);
  }, [missionIdx]);

  const goToMission = useCallback(
    (next: number) => {
      if (transitioning || next === missionIdx) return;
      if (next < 0 || next > maxIdx) return;
      setMissionIdx(next);
      setTransitioning(true);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setTransitioning(false), TRANSITION_MS);
    },
    [missionIdx, maxIdx, transitioning],
  );

  useEffect(() => {
    const actId = mission.activityId;
    const wasDone = !!prevCompletedRef.current[actId];
    const nowDone = !!progress.completed[actId];
    prevCompletedRef.current = progress.completed;
    if (!wasDone && nowDone) {
      const next = nextMissionIndex(missionIdx);
      if (next >= 0 && next <= maxIdx) goToMission(next);
    }
  }, [progress, mission, missionIdx, maxIdx, goToMission]);

  const canForward = missionIdx < maxIdx && !transitioning;
  const canBack = missionIdx > 0 && !transitioning;

  const actIndex = DEPTH_ALL_ACTIVITY_IDS.indexOf(mission.activityId);
  const nextOpenIdx = DEPTH_ALL_ACTIVITY_IDS.findIndex((id, i) => {
    if (freeNav) return !progress.completed[id];
    if (i === 0) return !progress.completed[id];
    return !!progress.completed[DEPTH_ALL_ACTIVITY_IDS[i - 1]] && !progress.completed[id];
  });
  const isCurrentStation =
    freeNav
      ? mission.activityId === DEPTH_ALL_ACTIVITY_IDS[nextOpenIdx]
      : !progress.completed[mission.activityId] &&
        (actIndex === 0 || !!progress.completed[DEPTH_ALL_ACTIVITY_IDS[actIndex - 1]]);

  const openPlay = (actId: string) => {
    const meta = activityMeta(actId);
    if (!meta) return;
    sessionStorage.setItem('aramit_focus_act', actId);
    nav(`/play/${meta.unit.id}/${actId}`);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (transitioning) return;
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (canForward) goToMission(missionIdx + 1);
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (canBack) goToMission(missionIdx - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [canForward, canBack, missionIdx, goToMission, transitioning]);

  const stage1Complete = stageDone(DEPTH_STAGES[0], progress);
  const stage2Complete = stageDone(DEPTH_STAGES[1], progress);
  const onLastStage1Mission =
    mission.stageId === 'stage1' && missionIdx === DEPTH_STAGES[0].activityIds.length - 1;

  return (
    <div className="journey-depth" aria-label={`מסע עומק — ${stage.title}`}>
      <div
        ref={viewportRef}
        className="journey-depth-viewport"
        tabIndex={0}
        aria-roledescription="מסע בין תחנות משימה"
        aria-keyshortcuts="ArrowUp ArrowLeft ArrowDown ArrowRight"
      >
        <div
          className="journey-depth-world"
          style={{
            width: cam.worldW,
            height: cam.worldH,
            transform: `translate(${cam.tx}px, ${cam.ty}px) scale(${cam.scale})`,
            transformOrigin: '0 0',
          }}
        >
          <img
            className="journey-depth-world-img"
            src={imgSrc}
            alt=""
            draggable={false}
            width={cam.worldW}
            height={cam.worldH}
            onError={() => {
              if (imgSrc !== DEPTH_WORLD.fallback) setImgSrc(DEPTH_WORLD.fallback);
            }}
          />

          {DEPTH_ALL_MISSIONS.map((m) => {
            const idx = DEPTH_ALL_ACTIVITY_IDS.indexOf(m.activityId);
            const isCurrent = m.activityId === mission.activityId && !!isCurrentStation;
            return (
              <DepthStation
                key={m.activityId}
                mission={m}
                progress={progress}
                freeNav={freeNav}
                actIndex={idx}
                isCurrent={isCurrent}
                onPlay={() => openPlay(m.activityId)}
              />
            );
          })}
        </div>

        <button
          type="button"
          className="journey-depth-sr-nav"
          disabled={!canForward}
          onClick={() => goToMission(missionIdx + 1)}
          aria-label="משימה הבאה"
        />
        <button
          type="button"
          className="journey-depth-sr-nav"
          disabled={!canBack}
          onClick={() => goToMission(missionIdx - 1)}
          aria-label="משימה קודמת"
        />

        <ChevronHint direction="forward" visible={canForward && hintsVisible} label="משימה הבאה" />
        <ChevronHint direction="back" visible={canBack && hintsVisible} label="משימה קודמת" />

        <div className="journey-depth-caption">
          <div className="journey-depth-caption-title">{stage.title}</div>
          <div className="journey-depth-caption-sub">{mission.caption}</div>
          <div className="journey-depth-caption-steps">
            משימה {missionIdx + 1} / {DEPTH_ALL_MISSIONS.length}
          </div>
        </div>

        {stage1Complete && onLastStage1Mission && !stage2Complete && (
          <div className="journey-depth-done pop-in">
            <div style={{ fontSize: 22 }}>🌉</div>
            <div style={{ fontWeight: 900, fontSize: 16 }}>סיימתם את {DEPTH_STAGES[0].title}!</div>
            <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4, opacity: 0.85 }}>
              חצו את הגשר — המשיכו ל{DEPTH_STAGES[1].title}
            </div>
          </div>
        )}

        {stage2Complete && missionIdx === DEPTH_ALL_MISSIONS.length - 1 && (
          <div className="journey-depth-done pop-in">
            <div style={{ fontSize: 22 }}>🎉</div>
            <div style={{ fontWeight: 900, fontSize: 16 }}>סיימתם את {DEPTH_STAGES[1].title}!</div>
            <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4, opacity: 0.85 }}>
              אפשר לחזור לתחנות או להמשיך ביחידות נוספות
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
