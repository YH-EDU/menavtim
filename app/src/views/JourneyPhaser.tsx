import React, { useEffect, useRef, useState } from 'react';

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

import {

  hasSelectedAvatar,

  type CharacterId,

} from '../game/phaser/characters';

import { stashPhaserRemountPosition } from '../game/phaser/playerState';

import {

  OverlayBridgeHost,

  PhaserStationOverlay,

  usePhaserOverlay,

} from './PhaserStationOverlay';

import CharacterSelect from './CharacterSelect';
import { ESCAPE_ACTIVITY_ID } from '../lib/escapeRoom';

export default function JourneyPhaser({
  session,
  progress,
  forcePicker = false,
  onPickerClosed,
}: {
  session: StudentSession;
  progress: ProgressData;
  forcePicker?: boolean;
  onPickerClosed?: () => void;
}) {

  const hostRef = useRef<HTMLDivElement>(null);

  const gameRef = useRef<Phaser.Game | null>(null);

  const progressRef = useRef(progress);
  const sessionRef = useRef(session);

  // Keep last known mapPos if App progress hasn't refreshed from storage yet
  // (avatar remount / tab return would otherwise spawn at the maze start).
  const prevMapPos = progressRef.current.mapPos;
  progressRef.current = {
    ...progress,
    mapPos: progress.mapPos ?? prevMapPos,
  };
  sessionRef.current = session;

  const persistMapPos = (pos: Parameters<typeof saveMapPosition>[1]) => {
    void saveMapPosition(sessionRef.current, pos).catch(() => {});
  };



  const [avatarId, setAvatarId] = useState<CharacterId | null>(() =>

    hasSelectedAvatar() ? null : null,

  );

  const [showPicker, setShowPicker] = useState(() => !hasSelectedAvatar() || forcePicker);

  const [gameKey, setGameKey] = useState(0);

  useEffect(() => {
    if (forcePicker) setShowPicker(true);
  }, [forcePicker]);



  const enterEscape = () => {
    pauseJourneyGame(gameRef.current);
    nav('/escape');
  };

  const handleStationClick = (unitId: string, activityId: string) => {
    if (activityId === ESCAPE_ACTIVITY_ID) {
      enterEscape();
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

    if (showPicker) return;



    const host = hostRef.current;

    if (!host) return;



    destroyJourneyGame(gameRef.current);

    gameRef.current = null;



    const bridge = bridgeFactory();



    const game = createJourneyGame({

      parent: host,

      progress: progressRef.current,

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
        persistMapPos(pos);
        // Remount (avatar change / cancel picker) must restore here — React
        // progress.mapPos is often stale until the next fetchProgress.
        stashPhaserRemountPosition(pos, {
          nickname: sessionRef.current.nickname,
          emoji: sessionRef.current.emoji,
        });
        progressRef.current = { ...progressRef.current, mapPos: pos };
      }

      destroyJourneyGame(gameRef.current);

      gameRef.current = null;

    };

  }, [bridgeFactory, showPicker, gameKey, avatarId]);



  useEffect(() => {

    const onHide = () => {

      const pos = captureJourneyPlayerPosition(gameRef.current);

      if (pos) persistMapPos(pos);

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

      if (onMap && gameRef.current) {

        resumeJourneyGame(gameRef.current);

      }

    };

    window.addEventListener('hashchange', onHash);

    return () => window.removeEventListener('hashchange', onHash);

  }, []);



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

      <PhaserStationOverlay sync={sync} onStationClick={handleStationClick} onEnterEscape={enterEscape} />

    </div>

  );

}


