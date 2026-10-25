import React, { useMemo, useState } from 'react';
import type { ActivityResult, LetterEvents } from '../data/types';
import { cipherRoom, type CipherBeat, type CipherRoomDef } from '../data/escapeRoomsData';
import { addLetterEvent } from '../lib/mastery';
import { stripPunct } from '../data/letters';
import { playCorrect, playWrong, playWin } from '../lib/sound';
import { shuffleArray, shuffleOptionsWithCorrect } from '../lib/shuffleOptions';
import { Stars, starsFor } from '../games/ui';

/**
 * חדר צופן גנרי. הנתונים ב-escapeRoomsData.
 * מחיקה: הסירו את הקובץ ואת הניתוב אליו מ-GameHost.
 */

type Phase = 'intro' | 'hunt' | 'puzzle' | 'dial' | 'order' | 'won';

const ROOM_STAR_MAX = 3;

function starScoreFromHints(hintsOpened: number, usedHint3: boolean): number {
  if (hintsOpened <= 0) return 3;
  if (!usedHint3) return 2;
  return 1;
}

export default function CipherRoom({
  roomId,
  continueLabel,
  onFinish,
}: {
  roomId: string;
  /** כיתוב כפתור הסיום — למשל «המשיכו לשלב הבא» */
  continueLabel?: string;
  onFinish: (r: ActivityResult) => void;
}) {
  const room = cipherRoom(roomId);
  if (!room) {
    return <p>החדר לא נמצא.</p>;
  }
  return <CipherPlay room={room} continueLabel={continueLabel} onFinish={onFinish} />;
}

function CipherPlay({
  room,
  continueLabel,
  onFinish,
}: {
  room: CipherRoomDef;
  continueLabel?: string;
  onFinish: (r: ActivityResult) => void;
}) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [clueIdx, setClueIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [hintLevel, setHintLevel] = useState(0);
  const [hintsOpened, setHintsOpened] = useState(0);
  const [usedHint3, setUsedHint3] = useState(false);
  const [entered, setEntered] = useState<string[]>([]);
  const [dialMiss, setDialMiss] = useState(false);
  const [order, setOrder] = useState<CipherBeat[]>([]);
  const [orderBad, setOrderBad] = useState(false);
  const [events] = useState<LetterEvents>({});
  const [finalStars, setFinalStars] = useState(ROOM_STAR_MAX);

  const clue = room.clues[clueIdx];
  const beats = useMemo(
    () => room.clues.map((c) => c.beat).filter((b): b is CipherBeat => !!b),
    [room],
  );
  const shuffledBeats = useMemo(() => shuffleArray(beats), [beats]);

  const sessionSeed = useMemo(() => 1 + Math.floor(Math.random() * 233279), [room.id]);
  const shuffledChoice = useMemo(() => {
    if (!clue) return { options: [] as string[], correct: 0 };
    // ערבוב לכל כניסה לחדר — לא תמיד התשובה הראשונה
    let seed = sessionSeed;
    const key = `${room.id}:${clue.id}`;
    for (let i = 0; i < key.length; i++) seed = (seed * 31 + key.charCodeAt(i)) % 233280;
    return shuffleOptionsWithCorrect(clue.options, clue.correct, seed || 1);
  }, [clue, room.id, sessionSeed]);

  const openHint = () => {
    if (!clue || hintLevel >= clue.hints.length) return;
    const next = hintLevel + 1;
    // רמז 3 רק אחרי 1 ו־2
    if (next === 3 && hintLevel < 2) return;
    setHintLevel(next);
    setHintsOpened((n) => n + 1);
    if (next >= 3) setUsedHint3(true);
  };

  const finish = () => {
    const stars = starScoreFromHints(hintsOpened, usedHint3);
    setFinalStars(stars);
    playWin();
    setPhase('won');
  };

  const nextClue = () => {
    if (clueIdx + 1 >= room.clues.length) {
      if (room.mode === 'sugya') {
        setPhase('order');
      } else {
        finish();
      }
    } else {
      setClueIdx(clueIdx + 1);
      setPicked(null);
      setHintLevel(0);
      setPhase('hunt');
    }
  };

  const answer = (i: number) => {
    if (picked !== null || !clue) return;
    const ok = i === shuffledChoice.correct;
    setPicked(i);
    const word = stripPunct(clue.prompt.split(' ')[0] ?? clue.object);
    if (word) addLetterEvent(events, word, ok);
    if (ok) {
      playCorrect();
      window.setTimeout(() => {
        if (room.mode === 'digits') setPhase('dial');
        else nextClue();
      }, 700);
    } else {
      playWrong();
    }
  };

  const dial = (digit: string) => {
    if (!clue) return;
    if (digit !== clue.token) {
      playWrong();
      setDialMiss(true);
      window.setTimeout(() => setDialMiss(false), 500);
      return;
    }
    playCorrect();
    setEntered((list) => [...list, digit]);
    nextClue();
  };

  const placeBeat = (beat: CipherBeat) => {
    const expected = beats[order.length];
    if (!expected || beat.role !== expected.role) {
      playWrong();
      setOrderBad(true);
      window.setTimeout(() => setOrderBad(false), 500);
      return;
    }
    playCorrect();
    const next = [...order, beat];
    setOrder(next);
    if (next.length === beats.length) {
      finish();
    }
  };

  const cta =
    continueLabel ??
    (room.id === 'room-sugya' ? 'המשיכו לצופן הארמי ←' : 'המשיכו לשלב הבא ←');

  return (
    <div className={`cipher-room phase-${room.phaseId}`} dir="rtl">
      <header className="cipher-top">
        <div>
          <p className="engine-kicker">{room.blurb}</p>
          <h2>{room.title}</h2>
        </div>
        {room.mode === 'digits' && (
          <div className="cipher-code" aria-label="הספרות שנאספו">
            {room.clues.map((c, i) => (
              <span key={c.id} className={entered[i] ? 'is-set' : ''}>
                {entered[i] ?? '·'}
              </span>
            ))}
          </div>
        )}
      </header>

      {phase === 'intro' && (
        <section className="cipher-panel">
          <p>{room.intro}</p>
          <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink-soft)', marginTop: 8 }}>
            רמזים עולים בכוכבים: בלי רמזים — 3 כוכבים · רמזים עדינים — 2 · רמז שלישי — כוכב אחד.
          </p>
          <button type="button" className="btn" onClick={() => setPhase('hunt')}>
            נכנסים לחדר
          </button>
        </section>
      )}

      {phase === 'hunt' && clue && (
        <section className="cipher-panel">
          <p className="engine-kicker">
            חפשו את החפץ הזוהר · {clueIdx + 1} / {room.clues.length}
          </p>
          <div className="cipher-objects">
            {room.clues.map((c, i) => (
              <button
                key={c.id}
                type="button"
                className={`cipher-object ${i === clueIdx ? 'is-live' : ''} ${i < clueIdx ? 'is-done' : ''}`}
                disabled={i !== clueIdx}
                onClick={() => setPhase('puzzle')}
              >
                <span>{c.emoji}</span>
                <small>{c.object}</small>
              </button>
            ))}
          </div>
        </section>
      )}

      {phase === 'puzzle' && clue && (
        <section className="cipher-panel">
          <p className="cipher-object-name">
            {clue.emoji} {clue.object}
          </p>
          <p className="phrase-font engine-line">{clue.prompt}</p>
          <div className="engine-choices">
            {shuffledChoice.options.map((op, i) => {
              let cls = 'engine-choice';
              if (picked !== null && i === shuffledChoice.correct) cls += ' is-right';
              else if (picked === i) cls += ' is-wrong';
              return (
                <button
                  key={`${op}-${i}`}
                  type="button"
                  className={cls}
                  disabled={picked !== null && picked === shuffledChoice.correct}
                  onClick={() => answer(i)}
                >
                  {op}
                </button>
              );
            })}
          </div>
          {picked !== null && picked !== shuffledChoice.correct && (
            <p className="engine-reveal">{clue.explain}</p>
          )}
          <div className="cipher-hints">
            <button
              type="button"
              className="btn small"
              disabled={hintLevel >= clue.hints.length}
              onClick={openHint}
            >
              {hintLevel >= clue.hints.length
                ? 'כל הרמזים נפתחו'
                : hintLevel === 2
                  ? `רמז 3 / 3 · עולה בכוכב`
                  : `רמז ${hintLevel + 1} / ${clue.hints.length}`}
            </button>
            <ol>
              {clue.hints.slice(0, hintLevel).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ol>
          </div>
          {picked !== null && picked !== shuffledChoice.correct && (
            <button type="button" className="btn" onClick={() => setPicked(null)}>
              נסו שוב
            </button>
          )}
        </section>
      )}

      {phase === 'dial' && clue && (
        <section className="cipher-panel">
          <p>החפץ מגלה ספרה. הזינו אותה בחוגה.</p>
          <p className="cipher-token">{clue.token}</p>
          <div className={`cipher-dial ${dialMiss ? 'is-miss' : ''}`}>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((d) => (
              <button key={d} type="button" onClick={() => dial(d)}>
                {d}
              </button>
            ))}
          </div>
          <p className="engine-reveal">{clue.explain}</p>
        </section>
      )}

      {phase === 'order' && (
        <section className="cipher-panel">
          <p>כל הפתקים אצלכם. סדרו את שלד הסוגיה.</p>
          <ol className="skeleton-placed">
            {order.map((b) => (
              <li key={b.role}>
                <span className="skeleton-role">{b.role}</span>
                <span className="phrase-font">{b.line}</span>
              </li>
            ))}
          </ol>
          <div className="engine-choices">
            {shuffledBeats.map((b) => {
              if (order.some((x) => x.role === b.role)) return null;
              return (
                <button
                  key={b.role}
                  type="button"
                  className={`engine-choice ${orderBad ? 'is-shake' : ''}`}
                  onClick={() => placeBeat(b)}
                >
                  <strong>{b.role}</strong>
                  <span className="phrase-font">{b.line}</span>
                </button>
              );
            })}
          </div>
          <div className="cipher-hints">
            <p>רמז: קודם שואלים, אחר כך מתרצים, מביאים ראיה, וחותמים בהלכה.</p>
          </div>
        </section>
      )}

      {phase === 'won' && (
        <section className="cipher-panel cipher-won" dir="rtl">
          <div className="moment-emoji" aria-hidden>
            🏅
          </div>
          <h2>{room.victoryTitle}</h2>
          <p>{room.victoryText}</p>
          <div style={{ margin: '12px 0 6px', display: 'flex', justifyContent: 'center' }}>
            <Stars n={starsFor(finalStars, ROOM_STAR_MAX)} />
          </div>
          <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink-soft)' }}>
            {finalStars} מתוך {ROOM_STAR_MAX} כוכבים
            {usedHint3 ? ' · השתמשתם ברמז השלישי' : hintsOpened > 0 ? ' · היו רמזים בדרך' : ' · בלי רמזים!'}
          </p>
          <button
            type="button"
            className="btn"
            style={{ width: '100%', maxWidth: 320, fontWeight: 900 }}
            onClick={() =>
              onFinish({ score: finalStars, max: ROOM_STAR_MAX, letters: events })
            }
          >
            {cta}
          </button>
        </section>
      )}
    </div>
  );
}
