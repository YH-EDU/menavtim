import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cancelSpeech, speakText, warmUpVoices } from '../lib/tts';
import { soundEnabled } from '../lib/sound';

interface SpeechCtx {
  setPromptText: (text: string) => void;
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
    if (!ttsOn || !soundEnabled()) {
      cancelSpeech();
      return;
    }

    const parts: string[] = [];
    const includeInstructions = !spokeInstructionsRef.current;

    if (includeInstructions && instructions.trim()) {
      parts.push(instructions.trim());
      spokeInstructionsRef.current = true;
    }

    if (promptText.trim()) {
      parts.push(promptText.trim());
    } else if (!includeInstructions) {
      return;
    }

    const toSpeak = parts.join('. ');
    if (!toSpeak || toSpeak === lastSpokenRef.current) return;

    lastSpokenRef.current = toSpeak;
    void speakText(toSpeak);
  }, [ttsOn, instructions, promptText, activityId]);

  const value = useMemo(() => ({ setPromptText }), [setPromptText]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

/** רושם טקסט שאלה/הוראה נוכחית להקראה — לא אפשרויות תשובה. */
export function useSpeechText(text: string | null | undefined): void {
  const ctx = useContext(Ctx);
  const stable = text ?? '';

  useEffect(() => {
    ctx?.setPromptText(stable);
  }, [ctx, stable]);
}
