import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  cancelSpeech,
  isSpeechUnlocked,
  markSpeechUnlocked,
  speakNowSync,
  speakText,
  warmUpVoices,
} from '../lib/tts';

interface SpeechCtx {
  setPromptText: (text: string) => void;
  /** מקריא מיד מתוך מחוות — חייב להיקרא סינכרונית ב-pointer handler */
  speakCurrentFromGesture: () => void;
  currentSpeechText: () => string;
  promptOnlyText: () => string;
}

const Ctx = createContext<SpeechCtx | null>(null);

export function SpeechProvider({
  children,
  instructions,
  ttsOn,
  activityId,
}: {
  children: React.ReactNode;
  instructions: string;
  ttsOn: boolean;
  activityId: string;
}) {
  const [promptText, setPromptTextState] = useState('');
  const activityRef = useRef(activityId);
  const spokeInstructionsRef = useRef(false);
  const lastSpokenRef = useRef('');

  const setPromptText = useCallback((text: string) => {
    setPromptTextState(text);
  }, []);

  const buildSpeechText = useCallback(
    (includeInstructions: boolean) => {
      const parts: string[] = [];
      if (includeInstructions && instructions.trim()) {
        parts.push(instructions.trim());
      }
      if (promptText.trim()) {
        parts.push(promptText.trim());
      }
      return parts.join('. ');
    },
    [instructions, promptText],
  );

  const currentSpeechText = useCallback(() => {
    const includeInstructions = !spokeInstructionsRef.current;
    return buildSpeechText(includeInstructions);
  }, [buildSpeechText]);

  const promptOnlyText = useCallback(() => promptText.trim(), [promptText]);

  const speakCurrentFromGesture = useCallback(() => {
    markSpeechUnlocked();

    const includeInstructions = !spokeInstructionsRef.current;
    const toSpeak = buildSpeechText(includeInstructions);
    const fallback = promptText.trim() || instructions.trim();

    if (includeInstructions && instructions.trim()) {
      spokeInstructionsRef.current = true;
    }

    if (toSpeak) {
      lastSpokenRef.current = toSpeak;
      speakNowSync(toSpeak, {
        fromGesture: true,
        promptFallback: fallback !== toSpeak ? fallback : undefined,
      });
    } else if (fallback) {
      lastSpokenRef.current = fallback;
      speakNowSync(fallback, { fromGesture: true });
    }
  }, [buildSpeechText, instructions, promptText]);

  useEffect(() => {
    if (activityRef.current !== activityId) {
      activityRef.current = activityId;
      spokeInstructionsRef.current = false;
      lastSpokenRef.current = '';
      setPromptTextState('');
    }
  }, [activityId]);

  useEffect(() => {
    warmUpVoices();
  }, []);

  useEffect(() => {
    if (!ttsOn) {
      cancelSpeech();
      return;
    }

    const includeInstructions = !spokeInstructionsRef.current;
    const toSpeak = buildSpeechText(includeInstructions);
    if (!toSpeak) return;

    if (includeInstructions && !instructions.trim() && !promptText.trim()) return;
    if (!includeInstructions && !promptText.trim()) return;
    if (toSpeak === lastSpokenRef.current) return;

    if (!isSpeechUnlocked()) return;

    if (includeInstructions && instructions.trim()) {
      spokeInstructionsRef.current = true;
    }

    lastSpokenRef.current = toSpeak;
    void speakText(toSpeak, {
      promptFallback: promptOnlyText() !== toSpeak ? promptOnlyText() : undefined,
    });
  }, [ttsOn, instructions, promptText, activityId, buildSpeechText, promptOnlyText]);

  const value = useMemo(
    () => ({ setPromptText, speakCurrentFromGesture, currentSpeechText, promptOnlyText }),
    [setPromptText, speakCurrentFromGesture, currentSpeechText, promptOnlyText],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSpeechControls(): SpeechCtx | null {
  return useContext(Ctx);
}

/** רושם טקסט שאלה/הוראה נוכחית להקראה — לא אפשרויות תשובה. */
export function useSpeechText(text: string | null | undefined): void {
  const ctx = useContext(Ctx);
  const stable = text ?? '';

  useEffect(() => {
    ctx?.setPromptText(stable);
  }, [ctx, stable]);
}
