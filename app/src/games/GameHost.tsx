import React, { useCallback, useEffect, useState } from 'react';
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
  setTtsToastHandler,
  speechSupported,
  toggleTts,
  ttsEnabled,
} from '../lib/tts';
import { SpeechProvider, useSpeechControls } from './SpeechContext';
import { Play, Volume2, VolumeX } from '../ui/icons';

function TtsToast({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div className="tts-toast" role="status" aria-live="polite">
      {message}
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
  const supported = speechSupported();

  const title = !supported
    ? 'הדפדפן לא תומך בהקראה קולית'
    : ttsOn
      ? 'הקראה פעילה — לחצו לכיבוי · ▶ לשמיעה חוזרת'
      : 'הקראה כבויה — לחצו להפעלה';

  const handleToggle = () => {
    if (!supported) return;
    if (ttsOn) {
      onTtsChange(toggleTts());
      return;
    }
    onTtsChange(toggleTts());
    void speech?.replayFromGesture(true);
  };

  const handleReplay = () => {
    if (!supported || !ttsOn) return;
    void speech?.replayFromGesture(false);
  };

  return (
    <div className="tts-controls">
      <button
        type="button"
        className={`tts-toggle-btn ${ttsOn ? 'tts-toggle-btn--on' : 'tts-toggle-btn--off'}`}
        aria-pressed={ttsOn}
        aria-label={ttsOn ? 'כיבוי הקראה אוטומטית' : 'הפעלת הקראה אוטומטית'}
        title={title}
        disabled={!supported}
        onClick={handleToggle}
      >
        {ttsOn ? <Volume2 size={22} /> : <VolumeX size={22} />}
        הקראה
      </button>
      {ttsOn && supported && (
        <button
          type="button"
          className="tts-replay-btn"
          aria-label="השמע שוב את השאלה הנוכחית"
          title="השמע שוב"
          onClick={handleReplay}
        >
          <Play size={20} />
        </button>
      )}
    </div>
  );
}

function TtsControlsStandalone({
  ttsOn,
  onTtsChange,
}: {
  ttsOn: boolean;
  onTtsChange: (next: boolean) => void;
}) {
  const supported = speechSupported();
  const title = !supported
    ? 'הדפדפן לא תומך בהקראה קולית'
    : ttsOn
      ? 'הקראה פעילה — לחצו לכיבוי'
      : 'הקראה כבויה — לחצו להפעלה';

  return (
    <div className="tts-controls">
      <button
        type="button"
        className={`tts-toggle-btn ${ttsOn ? 'tts-toggle-btn--on' : 'tts-toggle-btn--off'}`}
        aria-pressed={ttsOn}
        aria-label={ttsOn ? 'כיבוי הקראה אוטומטית' : 'הפעלת הקראה אוטומטית'}
        title={title}
        disabled={!supported}
        onClick={() => supported && onTtsChange(toggleTts())}
      >
        {ttsOn ? <Volume2 size={22} /> : <VolumeX size={22} />}
        הקראה
      </button>
    </div>
  );
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
