import React, { useCallback, useEffect, useRef, useState } from 'react';
import Phaser from 'phaser';
import type { ProgressData, StudentSession } from '../lib/api';
import { saveMapPosition } from '../lib/api';
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
  STAGE_COUNT,
  stageFinale,
  stageFinalTaskDone,
  stageGateOpen,
  stageHudLabel,
  stageLabelHe,
  stageMissionsDone,
  stageTitleHe,
  stageUnlocked,
  testUnlockAll,
} from '../game/phaser/stages';
import {
  OverlayBridgeHost,
  PhaserStationOverlay,
  usePhaserOverlay,
} from './PhaserStationOverlay';
import CharacterSelect from './CharacterSelect';
import { ESCAPE_ACTIVITY_ID } from '../lib/escapeRoom';
import { SS_PENDING_STAGE_ADVANCE } from '../lib/playStorage';

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
          מפת שלב חדשה נפתחה. המשיכו בשביל, סיימו את התחנות, והגיעו לחדר הצופן שבסוף.
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

  const openStageFinale = (stageIndex: number) => {
    const p = progressRef.current;
    if (!p.freeNav && !stageMissionsDone(stageIndex, p)) return;
    if (!stageGateOpen(stageIndex, p)) return;
    const finale = stageFinale(stageIndex);
    const roomDone = stageFinalTaskDone(stageIndex, p);
    if (stageIndex >= STAGE_COUNT - 1 && roomDone) {
      enterEscape();
      return;
    }
    if (roomDone) return;
    pauseJourneyGame(gameRef.current);
    nav(`/play/${finale.unitId}/${finale.activityId}`);
  };

  const handleGoalEnter = () => {
    openStageFinale(stageRef.current);
  };

  const handleStationClick = (unitId: string, activityId: string) => {
    if (activityId === ESCAPE_ACTIVITY_ID) {
      enterEscape();
      return;
    }
    const finale = stageFinale(stageRef.current);
    if (activityId === finale.activityId) {
      openStageFinale(stageRef.current);
      return;
    }
    pauseJourneyGame(gameRef.current);
    nav(`/play/${unitId}/${activityId}`);
  };

  // אחרי ניצחון בחדר שלב — מעבר למפה הבאה עם מסך מעבר בעברית
  useEffect(() => {
    if (showPicker || transitionTo != null || advancingRef.current) return;
    const raw = sessionStorage.getItem(SS_PENDING_STAGE_ADVANCE);
    if (raw == null || raw === '') return;
    const from = clampStageIndex(Number(raw));
    if (from >= STAGE_COUNT - 1) {
      sessionStorage.removeItem(SS_PENDING_STAGE_ADVANCE);
      return;
    }
    const merged: ProgressData = {
      ...progress,
      completed: { ...progress.completed, ...progressRef.current.completed },
      freeNav: progress.freeNav ?? progressRef.current.freeNav,
    };
    if (!stageFinalTaskDone(from, merged)) return;
    sessionStorage.removeItem(SS_PENDING_STAGE_ADVANCE);
    progressRef.current = { ...merged, mapPos: progress.mapPos ?? progressRef.current.mapPos };
    advanceToStage(from + 1);
  }, [progress, showPicker, transitionTo, advanceToStage]);

  const { sync, bridgeFactory, doorLock, dismissDoorLock } = usePhaserOverlay(handleStationClick);

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
        const finale = stageFinale(stageRef.current);
        if (activityId === finale.activityId) {
          openStageFinale(stageRef.current);
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
      {testUnlockAll() && (
        <div
          style={{
            position: 'fixed',
            top: 'max(8px, env(safe-area-inset-top, 0px))',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 14,
            pointerEvents: 'none',
            background: '#ea580c',
            color: '#fff',
            borderRadius: 999,
            padding: '6px 14px',
            fontSize: 13,
            fontWeight: 800,
            boxShadow: '0 4px 14px rgba(120, 40, 0, 0.35)',
            whiteSpace: 'nowrap',
          }}
        >
          🧪 מצב בדיקה – כל השלבים פתוחים
        </div>
      )}
      {doorLock && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="door-lock-title"
          dir="rtl"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
            background: 'rgba(20, 16, 10, 0.45)',
          }}
        >
          <div
            style={{
              width: 'min(420px, 100%)',
              maxHeight: 'min(80vh, 560px)',
              overflow: 'auto',
              background: 'rgba(255, 254, 247, 0.98)',
              border: '3px solid rgba(125, 82, 38, 0.75)',
              borderRadius: 18,
              padding: '18px 16px 14px',
              boxShadow: '0 16px 40px rgba(20, 40, 10, 0.35)',
            }}
          >
            <h2 id="door-lock-title" style={{ margin: '0 0 8px', fontSize: 20, color: '#4a3416' }}>
              הדלת נעולה — נותרו עוד {doorLock.remaining} משימות
            </h2>
            <ul style={{ margin: '0 0 14px', paddingInlineStart: 18, color: '#4a3416', fontWeight: 700, lineHeight: 1.45 }}>
              {doorLock.missions.map((title, i) => (
                <li key={`${i}-${title}`}>{title}</li>
              ))}
            </ul>
            <button type="button" className="btn" style={{ width: '100%' }} onClick={dismissDoorLock} autoFocus>
              סגירה
            </button>
          </div>
        </div>
      )}
      {transitionTo != null && (
        <StageTransition stageIndex={transitionTo} onContinue={finishTransition} />
      )}
    </div>
  );
}
