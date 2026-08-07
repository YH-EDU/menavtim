import React, { useCallback, useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import type { Activity, ActivityResult } from '../data/types';
import Intro from './Intro';
import Quiz from './Quiz';
import Flashcards from './Flashcards';
import WordSearch from './WordSearch';
import Match from './Match';
import Memory from './Memory';
import Story from './Story';
import Order from './Order';
import Paint from './Paint';
import FillInBlank from './FillInBlank';
import MixedQuestion from './MixedQuestion';
import Morphing from './Morphing';
import Discover from './Discover';
import Annotate from './Annotate';
import TrueFalse from './TrueFalse';
import SentenceBuilder from './SentenceBuilder';
import { Stars, starsFor } from './ui';
import { playWin } from '../lib/sound';
import {
  cancelSpeech,
  isSpeaking,
  setTtsEnabled,
  setTtsToastHandler,
  speechSupported,
  toggleTts,
  ttsEnabled,
} from '../lib/tts';
import { SpeechProvider, useSpeechControls } from './SpeechContext';
import { Volume2, VolumeX } from '../ui/icons';

const LONG_PRESS_MS = 500;

function TtsToast({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div className="tts-toast" role="status" aria-live="polite">
      {message}
    </div>
  );
}

function useLongPress(onLongPress: () => void) {
  const timerRef = useRef<number | null>(null);
  const firedRef = useRef(false);

  const clear = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const onPointerDown = useCallback(() => {
    firedRef.current = false;
    clear();
    timerRef.current = window.setTimeout(() => {
      firedRef.current = true;
      onLongPress();
    }, LONG_PRESS_MS);
  }, [clear, onLongPress]);

  const onPointerUp = useCallback(() => {
    clear();
  }, [clear]);

  const onPointerCancel = useCallback(() => {
    clear();
  }, [clear]);

  const consumeLongPress = useCallback(() => {
    const was = firedRef.current;
    firedRef.current = false;
    return was;
  }, []);

  return { onPointerDown, onPointerUp, onPointerCancel, consumeLongPress };
}

function TtsButton({
  ttsOn,
  onTtsChange,
  onSpeak,
  standalone = false,
}: {
  ttsOn: boolean;
  onTtsChange: (next: boolean) => void;
  onSpeak?: () => void;
  standalone?: boolean;
}) {
  const supported = speechSupported();

  const handleLongPress = useCallback(() => {
    if (!supported) return;
    if (ttsOn) {
      setTtsEnabled(false);
      onTtsChange(false);
      cancelSpeech();
    }
  }, [supported, ttsOn, onTtsChange]);

  const { onPointerDown, onPointerUp, onPointerCancel, consumeLongPress } =
    useLongPress(handleLongPress);

  const title = !supported
    ? 'הדפדפן לא תומך בהקראה קולית'
    : ttsOn
      ? 'הקראה פעילה — הקישו לשמיעה · לחיצה ארוכה לכיבוי'
      : 'הקראה כבויה — הקישו להפעלה ושמיעה';

  const handleTap = () => {
    if (!supported) return;
    if (consumeLongPress()) return;

    if (standalone) {
      onTtsChange(toggleTts());
      return;
    }

    if (isSpeaking()) {
      cancelSpeech();
      return;
    }

    if (!ttsOn) {
      setTtsEnabled(true);
      onTtsChange(true);
    }

    onSpeak?.();
  };

  return (
    <div className="tts-controls">
      <button
        type="button"
        className={`tts-btn ${ttsOn ? 'tts-btn--on' : 'tts-btn--off'}`}
        aria-pressed={ttsOn}
        aria-label={ttsOn ? 'הקראה פעילה' : 'הפעלת הקראה'}
        title={title}
        disabled={!supported}
        onPointerDown={onPointerDown}
        onPointerUp={(e) => {
          onPointerUp();
          handleTap();
          e.preventDefault();
        }}
        onPointerCancel={onPointerCancel}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {ttsOn ? <Volume2 size={22} /> : <VolumeX size={22} />}
        הקראה
        {ttsOn && <span className="tts-btn-badge" aria-hidden>✓</span>}
      </button>
    </div>
  );
}

function TtsControls({
  ttsOn,
  onTtsChange,
}: {
  ttsOn: boolean;
  onTtsChange: (next: boolean) => void;
}) {
  const speech = useSpeechControls();

  return (
    <TtsButton
      ttsOn={ttsOn}
      onTtsChange={onTtsChange}
      onSpeak={() => speech?.speakCurrentFromGesture()}
    />
  );
}

function TtsControlsStandalone({
  ttsOn,
  onTtsChange,
}: {
  ttsOn: boolean;
  onTtsChange: (next: boolean) => void;
}) {
  return <TtsButton ttsOn={ttsOn} onTtsChange={onTtsChange} standalone />;
}

export default function GameHost({
  activity,
  onDone,
}: {
  activity: Activity;
  onDone: (r: ActivityResult) => void;
}) {
  const [result, setResult] = useState<ActivityResult | null>(null);
  const [ttsOn, setTtsOn] = useState(ttsEnabled());
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 3200);
  }, []);

  useEffect(() => {
    setTtsToastHandler(showToast);
    return () => {
      setTtsToastHandler(null);
      cancelSpeech();
    };
  }, [showToast]);

  const finish = (r: ActivityResult) => {
    cancelSpeech();
    setResult(r);
    playWin();
    const stars = starsFor(r.score, r.max);
    confetti({
      particleCount: stars === 3 ? 160 : stars === 2 ? 90 : 40,
      spread: stars === 3 ? 100 : 70,
      origin: { y: 0.6 },
      colors: ['#0f766e', '#d97706', '#7c3aed', '#dc2626', '#16a34a'],
    });
  };

  if (result) {
    const stars = starsFor(result.score, result.max);
    return (
      <>
        <TtsToast message={toast} />
        <TtsControlsStandalone ttsOn={ttsOn} onTtsChange={setTtsOn} />
        <div className="card pop-in" style={{ textAlign: 'center', maxWidth: 460, margin: '40px auto' }}>
          <h2 style={{ fontSize: 26 }}>
            {stars === 3 ? 'מושלם! 🏅' : stars === 2 ? 'יפה מאוד!' : 'כל הכבוד שסיימתם!'}
          </h2>
          <Stars n={stars} />
          <p style={{ fontSize: 18, color: 'var(--ink-soft)' }}>
            {result.score} מתוך {result.max}
          </p>
          {stars < 3 && (
            <p style={{ fontSize: 15, color: 'var(--ink-soft)' }}>אפשר לחזור על הפעילות בכל שלב כדי להשתפר ⭐</p>
          )}
          <button className="btn" onClick={() => onDone(result)}>
            המשך במסע ←
          </button>
        </div>
      </>
    );
  }

  const game = () => {
    switch (activity.type) {
      case 'intro': return <Intro activity={activity} onFinish={finish} />;
      case 'quiz': return <Quiz activity={activity} onFinish={finish} />;
      case 'flashcards': return <Flashcards activity={activity} onFinish={finish} />;
      case 'wordsearch': return <WordSearch activity={activity} onFinish={finish} />;
      case 'match': return <Match activity={activity} onFinish={finish} />;
      case 'memory': return <Memory activity={activity} onFinish={finish} />;
      case 'story': return <Story activity={activity} onFinish={finish} />;
      case 'order': return <Order activity={activity} onFinish={finish} />;
      case 'paint': return <Paint activity={activity} onFinish={finish} />;
      case 'fillblank': return <FillInBlank activity={activity} onFinish={finish} />;
      case 'mixed': return <MixedQuestion activity={activity} onFinish={finish} />;
      case 'morph': return <Morphing activity={activity} onFinish={finish} />;
      case 'discover': return <Discover activity={activity} onFinish={finish} />;
      case 'annotate': return <Annotate activity={activity} onFinish={finish} />;
      case 'truefalse': return <TrueFalse activity={activity} onFinish={finish} />;
      case 'builder': return <SentenceBuilder activity={activity} onFinish={finish} />;
    }
  };

  return (
    <SpeechProvider
      key={activity.id}
      activityId={activity.id}
      instructions={activity.instructions}
      ttsOn={ttsOn}
    >
      <TtsToast message={toast} />
      <TtsControls ttsOn={ttsOn} onTtsChange={setTtsOn} />
      <div className="float-up">
        <div style={{ textAlign: 'center', marginBottom: 18, paddingTop: 52 }}>
          <h2 style={{ fontSize: 24 }}>{activity.title}</h2>
          <p style={{ color: 'var(--ink-soft)', fontSize: 16, maxWidth: 560, margin: '8px auto 0', lineHeight: 1.6 }}>
            {activity.instructions}
          </p>
        </div>
        {game()}
      </div>
    </SpeechProvider>
  );
}
