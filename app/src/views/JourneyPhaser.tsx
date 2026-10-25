import React, { useCallback, useEffect, useRef, useState } from 'react';
import Phaser from 'phaser';
import type { ProgressData, StudentSession } from '../lib/api';
import { reportAttempt, saveMapPosition } from '../lib/api';
import { nav } from '../App';
import {
  createJourneyGame,
  destroyJourneyGame,
  captureJourneyPlayerPosition,
  pauseJourneyGame,
  resumeJourneyGame,
} from '../game/phaser/createGame';
import { hasSelectedAvatar, type CharacterId } from '../game/phaser/characters';
import {
  loadCurrentStage,
  saveCurrentStage,
  stashPhaserRemountPosition,
} from '../game/phaser/playerState';
import {
  clampStageIndex,
  isStageAdvanceActivity,
  parseStageAdvance,
  STAGE_COUNT,
  STAGE_GATE_UNIT_ID,
  stageAdvanceActivityId,
  stageGateOpen,
  stageHudLabel,
  stageLabelHe,
  stageTitleHe,
  stageUnlocked,
} from '../game/phaser/stages';
import {
  OverlayBridgeHost,
  PhaserStationOverlay,
  usePhaserOverlay,
} from './PhaserStationOverlay';
import CharacterSelect from './CharacterSelect';
import { ESCAPE_ACTIVITY_ID } from '../lib/escapeRoom';

function StageTransition({
  stageIndex,
  onContinue,
}: {
  stageIndex: number;
  onContinue: () => void;
}) {
  return (
    <div
      dir="rtl"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        background: 'rgba(28, 40, 24, 0.55)',
      }}
    >
      <div
        className="pop-in"
        style={{
          width: 'min(420px, 100%)',
          background: 'rgba(255, 254, 247, 0.98)',
          border: '3px solid rgba(125, 82, 38, 0.75)',
          borderRadius: 22,
          padding: '28px 22px 22px',
          textAlign: 'center',
          boxShadow: '0 16px 40px rgba(20, 40, 10, 0.35)',
        }}
      >
        <div style={{ fontSize: 42, lineHeight: 1, marginBottom: 8 }}>🗺️</div>
        <div style={{ fontSize: 14, fontWeight: 800, color: '#7a6548', marginBottom: 4 }}>
          {stageLabelHe(stageIndex)}
        </div>
        <h2 style={{ margin: '0 0 10px', fontSize: 26, color: '#4a3416' }}>
          {stageTitleHe(stageIndex)}
        </h2>
        <p style={{ margin: '0 0 18px', fontSize: 15, color: '#6b5a3e', lineHeight: 1.5, fontWeight: 600 }}>
          מפת שלב חדשה נפתחה. המשיכו בשביל, סיימו את התחנות, והגיעו לשער שבסוף.
        </p>
        <button type="button" className="btn" style={{ width: '100%' }} onClick={onContinue}>
          המשך לשלב ←
        </button>
      </div>
    </div>
  );
}

export default function JourneyPhaser({
  session,
  progress,
  forcePicker = false,
  onPickerClosed,
  onReported,
}: {
  session: StudentSession;
  progress: ProgressData;
  forcePicker?: boolean;
  onPickerClosed?: () => void;
  onReported?: () => void;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);
  const progressRef = useRef(progress);
  const sessionRef = useRef(session);
  const stageRef = useRef(0);
  const advancingRef = useRef(false);

  const prevMapPos = progressRef.current.mapPos;
  progressRef.current = {
    ...progress,
    mapPos: progress.mapPos ?? prevMapPos,
  };
  sessionRef.current = session;

  const persistMapPos = (pos: Parameters<typeof saveMapPosition>[1]) => {
    void saveMapPosition(sessionRef.current, {
      ...pos,
      stageIndex: pos.stageIndex ?? stageRef.current,
    }).catch(() => {});
  };

  const [avatarId, setAvatarId] = useState<CharacterId | null>(() =>
    hasSelectedAvatar() ? null : null,
  );
  const [showPicker, setShowPicker] = useState(() => !hasSelectedAvatar() || forcePicker);
  const [gameKey, setGameKey] = useState(0);
  const [stageIndex, setStageIndex] = useState(() =>
    loadCurrentStage(progress, { nickname: session.nickname, emoji: session.emoji }),
  );
  const [transitionTo, setTransitionTo] = useState<number | null>(null);

  stageRef.current = stageIndex;

  useEffect(() => {
    if (forcePicker) setShowPicker(true);
  }, [forcePicker]);

  // מוודאים שהשלב השמור עדיין מותר אחרי עדכון התקדמות.
  useEffect(() => {
    if (advancingRef.current || transitionTo != null) return;
    // ממזגים רשומות מקומיות (למשל stage-advance) שעדיין לא חזרו מהרענון
    const merged: ProgressData = {
      ...progress,
      completed: { ...progress.completed, ...progressRef.current.completed },
      freeNav: progress.freeNav ?? progressRef.current.freeNav,
    };
    progressRef.current = { ...merged, mapPos: progress.mapPos ?? progressRef.current.mapPos };
    if (!stageUnlocked(stageIndex, merged)) {
      const next = loadCurrentStage(merged, {
        nickname: session.nickname,
        emoji: session.emoji,
      });
      setStageIndex(next);
      saveCurrentStage(next, { nickname: session.nickname, emoji: session.emoji });
    }
  }, [progress, stageIndex, session.nickname, session.emoji, transitionTo]);

  const advanceToStage = useCallback((next: number) => {
    const target = clampStageIndex(next);
    if (advancingRef.current) return;
    if (target === stageRef.current) return;
    if (!stageUnlocked(target, progressRef.current)) return;

    advancingRef.current = true;
    const pos = captureJourneyPlayerPosition(gameRef.current);
    if (pos) {
      persistMapPos({ ...pos, stageIndex: stageRef.current });
      stashPhaserRemountPosition(
        { ...pos, stageIndex: stageRef.current },
        { nickname: sessionRef.current.nickname, emoji: sessionRef.current.emoji },
      );
    }

    pauseJourneyGame(gameRef.current);
    saveCurrentStage(target, {
      nickname: sessionRef.current.nickname,
      emoji: sessionRef.current.emoji,
    });
    setStageIndex(target);
    setTransitionTo(target);
  }, []);

  const finishTransition = () => {
    advancingRef.current = false;
    setTransitionTo(null);
    // מפה חדשה — בלי מיקום מהשלב הקודם (spawn בהתחלת השביל)
    progressRef.current = { ...progressRef.current, mapPos: undefined };
    setGameKey((k) => k + 1);
  };

  const enterEscape = () => {
    pauseJourneyGame(gameRef.current);
    nav('/escape');
  };

  const recordStageAdvance = async (fromStage: number) => {
    const activityId = stageAdvanceActivityId(fromStage);
    const p = progressRef.current;
    if (!stageGateOpen(fromStage, p)) return false;
    try {
      await reportAttempt(sessionRef.current, activityId, STAGE_GATE_UNIT_ID, 1, 1, {});
    } catch {
      // ממשיכים עם עדכון מקומי כדי לא לחסום את המעבר
    }
    progressRef.current = {
      ...p,
      completed: { ...p.completed, [activityId]: { score: 1, max: 1 } },
    };
    onReported?.();
    return true;
  };

  const handleGoalEnter = () => {
    if (stageRef.current >= STAGE_COUNT - 1) {
      enterEscape();
      return;
    }
    void (async () => {
      const from = stageRef.current;
      const ok = await recordStageAdvance(from);
      if (!ok) return;
      advanceToStage(from + 1);
    })();
  };

  const handleStationClick = (unitId: string, activityId: string) => {
    if (activityId === ESCAPE_ACTIVITY_ID) {
      enterEscape();
      return;
    }
    if (isStageAdvanceActivity(activityId)) {
      const from = parseStageAdvance(activityId) ?? stageRef.current;
      void (async () => {
        const ok = await recordStageAdvance(from);
        if (!ok) return;
        advanceToStage(from + 1);
      })();
      return;
    }
    pauseJourneyGame(gameRef.current);
    nav(`/play/${unitId}/${activityId}`);
  };

  const { sync, bridgeFactory } = usePhaserOverlay(handleStationClick);

  const handleAvatarSelected = (id: CharacterId) => {
    setAvatarId(id);
    setShowPicker(false);
    onPickerClosed?.();
    setGameKey((k) => k + 1);
  };

  useEffect(() => {
    if (showPicker || transitionTo != null) return;

    const host = hostRef.current;
    if (!host) return;

    destroyJourneyGame(gameRef.current);
    gameRef.current = null;

    const bridge = bridgeFactory();
    const game = createJourneyGame({
      parent: host,
      progress: progressRef.current,
      stageIndex,
      onSaveMapPos: persistMapPos,
      playerIdentity: {
        nickname: sessionRef.current.nickname,
        emoji: sessionRef.current.emoji,
      },
      onInteract: (unitId, activityId) => {
        if (activityId === ESCAPE_ACTIVITY_ID) {
          pauseJourneyGame(gameRef.current);
          nav('/escape');
          return;
        }
        if (isStageAdvanceActivity(activityId)) {
          const from = parseStageAdvance(activityId) ?? stageRef.current;
          void (async () => {
            const ok = await recordStageAdvance(from);
            if (!ok) return;
            advanceToStage(from + 1);
          })();
          return;
        }
        pauseJourneyGame(gameRef.current);
        nav(`/play/${unitId}/${activityId}`);
      },
      overlayBridge: bridge,
    });

    gameRef.current = game;

    const syncSize = () => {
      const w = Math.max(1, Math.round(host.clientWidth));
      const h = Math.max(1, Math.round(host.clientHeight));
      if (game.scale.width !== w || game.scale.height !== h) {
        game.scale.resize(w, h);
      }
    };

    syncSize();
    const onResize = () => syncSize();
    window.addEventListener('resize', onResize);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(onResize) : null;
    ro?.observe(host);

    return () => {
      window.removeEventListener('resize', onResize);
      ro?.disconnect();

      const pos = captureJourneyPlayerPosition(gameRef.current);
      if (pos) {
        const withStage = { ...pos, stageIndex: stageRef.current };
        persistMapPos(withStage);
        stashPhaserRemountPosition(withStage, {
          nickname: sessionRef.current.nickname,
          emoji: sessionRef.current.emoji,
        });
        progressRef.current = { ...progressRef.current, mapPos: withStage };
      }

      destroyJourneyGame(gameRef.current);
      gameRef.current = null;
    };
  }, [bridgeFactory, showPicker, gameKey, avatarId, stageIndex, transitionTo, advanceToStage]);

  useEffect(() => {
    const onHide = () => {
      const pos = captureJourneyPlayerPosition(gameRef.current);
      if (pos) persistMapPos({ ...pos, stageIndex: stageRef.current });
    };
    window.addEventListener('pagehide', onHide);
    return () => window.removeEventListener('pagehide', onHide);
  }, []);

  useEffect(() => {
    const game = gameRef.current;
    if (!game) return;
    const main = game.scene.getScene('Main');
    if (main && 'refreshProgress' in main) {
      (main as { refreshProgress: (p: ProgressData) => void }).refreshProgress(progress);
    }
  }, [progress]);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace(/^#\//, '');
      const onMap = h === 'map' || h === '';
      if (onMap && gameRef.current && transitionTo == null) {
        resumeJourneyGame(gameRef.current);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [transitionTo]);

  const focusCanvas = () => {
    const canvas = hostRef.current?.querySelector('canvas');
    if (canvas instanceof HTMLCanvasElement) {
      canvas.setAttribute('tabindex', '0');
      canvas.focus({ preventScroll: true });
    }
  };

  if (showPicker) {
    return (
      <CharacterSelect
        identity={{ nickname: session.nickname, emoji: session.emoji }}
        onSelected={handleAvatarSelected}
        onCancel={
          hasSelectedAvatar()
            ? () => {
                setShowPicker(false);
                onPickerClosed?.();
              }
            : undefined
        }
      />
    );
  }

  return (
    <div
      tabIndex={-1}
      onPointerDown={focusCanvas}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100dvh',
        minHeight: '-webkit-fill-available',
        overflow: 'hidden',
        touchAction: 'none',
      }}
    >
      <div ref={hostRef} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
      <OverlayBridgeHost bridgeFactory={bridgeFactory} />
      <PhaserStationOverlay
        sync={sync}
        onStationClick={handleStationClick}
        onEnterEscape={handleGoalEnter}
      />
      <div
        aria-label={stageHudLabel(stageIndex)}
        style={{
          position: 'fixed',
          top: 'max(66px, calc(env(safe-area-inset-top, 0px) + 54px))',
          insetInlineStart: 'max(8px, env(safe-area-inset-right, 0px))',
          zIndex: 12,
          pointerEvents: 'none',
          background: 'rgba(255, 254, 247, 0.94)',
          border: '2.5px solid rgba(125, 82, 38, 0.75)',
          borderRadius: 999,
          padding: '5px 14px',
          fontSize: 13,
          fontWeight: 800,
          color: '#4a3416',
          boxShadow: '0 3px 8px rgba(30, 70, 20, 0.28)',
          direction: 'rtl',
        }}
      >
        {stageHudLabel(stageIndex)}
      </div>
      {transitionTo != null && (
        <StageTransition stageIndex={transitionTo} onContinue={finishTransition} />
      )}
    </div>
  );
}
