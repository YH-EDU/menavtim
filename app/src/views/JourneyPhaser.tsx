import React, { useEffect, useRef, useState } from 'react';

import Phaser from 'phaser';

import type { ProgressData } from '../lib/api';

import { nav } from '../App';

import {

  createJourneyGame,

  destroyJourneyGame,

  pauseJourneyGame,

  resumeJourneyGame,

} from '../game/phaser/createGame';

import {

  hasSelectedAvatar,

  type CharacterId,

} from '../game/phaser/characters';

import {

  OverlayBridgeHost,

  PhaserStationOverlay,

  usePhaserOverlay,

} from './PhaserStationOverlay';

import CharacterSelect from './CharacterSelect';



export default function JourneyPhaser({
  progress,
  forcePicker = false,
  onPickerClosed,
}: {
  progress: ProgressData;
  forcePicker?: boolean;
  onPickerClosed?: () => void;
}) {

  const hostRef = useRef<HTMLDivElement>(null);

  const gameRef = useRef<Phaser.Game | null>(null);

  const progressRef = useRef(progress);

  progressRef.current = progress;



  const [avatarId, setAvatarId] = useState<CharacterId | null>(() =>

    hasSelectedAvatar() ? null : null,

  );

  const [showPicker, setShowPicker] = useState(() => !hasSelectedAvatar() || forcePicker);

  const [gameKey, setGameKey] = useState(0);

  useEffect(() => {
    if (forcePicker) setShowPicker(true);
  }, [forcePicker]);



  const handleStationClick = (unitId: string, activityId: string) => {

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

      onInteract: (unitId, activityId) => {

        pauseJourneyGame(gameRef.current);

        nav(`/play/${unitId}/${activityId}`);

      },

      overlayBridge: bridge,

    });

    gameRef.current = game;



    const onResize = () => {

      game.scale.resize(window.innerWidth, window.innerHeight);

    };

    window.addEventListener('resize', onResize);



    return () => {

      window.removeEventListener('resize', onResize);

      destroyJourneyGame(gameRef.current);

      gameRef.current = null;

    };

  }, [bridgeFactory, showPicker, gameKey, avatarId]);



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

        height: '100vh',

        overflow: 'hidden',

        touchAction: 'none',

      }}

    >

      <div ref={hostRef} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />

      <OverlayBridgeHost bridgeFactory={bridgeFactory} />

      <PhaserStationOverlay sync={sync} onStationClick={handleStationClick} />

    </div>

  );

}


