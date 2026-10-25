import React, { useMemo, useState } from 'react';
import type { ActivityResult, LetterEvents } from '../data/types';
import { cipherRoom, type CipherBeat, type CipherRoomDef } from '../data/escapeRoomsData';
import { addLetterEvent } from '../lib/mastery';
import { stripPunct } from '../data/letters';
import { playCorrect, playWrong, playWin } from '../lib/sound';
import { shuffleArray } from '../lib/shuffleOptions';

/**
 * חדר צופן גנרי. הנתונים ב-escapeRoomsData.
 * מחיקה: הסירו את הקובץ ואת הניתוב אליו מ-GameHost.
 */

type Phase = 'intro' | 'hunt' | 'puzzle' | 'dial' | 'order' | 'won';

export default function CipherRoom({
  roomId,
  onFinish,
}: {
  roomId: string;
  onFinish: (r: ActivityResult) => void;
}) {
  const room = cipherRoom(roomId);
  if (!room) {
    return <p>החדר לא נמצא.</p>;
  }
  return <CipherPlay room={room} onFinish={onFinish} />;
}

function CipherPlay({
  room,
  onFinish,
}: {
  room: CipherRoomDef;
  onFinish: (r: ActivityResult) => void;
}) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [clueIdx, setClueIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [hintLevel, setHintLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [entered, setEntered] = useState<string[]>([]);
  const [dialMiss, setDialMiss] = useState(false);
  const [order, setOrder] = useState<CipherBeat[]>([]);
  const [orderBad, setOrderBad] = useState(false);
  const [events] = useState<LetterEvents>({});

  const clue = room.clues[clueIdx];
  const beats = useMemo(
    () => room.clues.map((c) => c.beat).filter((b): b is CipherBeat => !!b),
    [room],
  );
  const shuffledBeats = useMemo(() => shuffleArray(beats), [beats]);

  const maxScore = room.mode === 'sugya' ? room.clues.length + 1 : room.clues.length;

  const finish = () => {
    playWin();
    setPhase('won');
  };

  const nextClue = (gained: number) => {
    if (clueIdx + 1 >= room.clues.length) {
      if (room.mode === 'sugya') {
        setScore(gained);
        setPhase('order');
      } else {
        setScore(gained);
        finish();
      }
    } else {
      setScore(gained);
      setClueIdx(clueIdx + 1);
      setPicked(null);
      setHintLevel(0);
      setPhase('hunt');
    }
  };

  const answer = (i: number) => {
    if (picked !== null || !clue) return;
    const ok = i === clue.correct;
    setPicked(i);
    const word = stripPunct(clue.prompt.split(' ')[0] ?? clue.object);
    if (word) addLetterEvent(events, word, ok);
    if (ok) {
      playCorrect();
      const gained = score + 1;
      window.setTimeout(() => {
        if (room.mode === 'digits') setPhase('dial');
        else nextClue(gained);
        setScore(gained);
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
    nextClue(score);
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
      setScore(score + 1);
      finish();
    }
  };

  return (
    <div className={`cipher-room phase-${room.phaseId}`}>
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
          <button type="button" className="btn" onClick={() => setPhase('hunt')}>
            נכנסים לחדר
          </button>
        </section>
      )}

      {phase === 'hunt' && clue && (
        <section className="cipher-panel">
          <p className="engine-kicker">חפשו את החפץ הזוהר · {clueIdx + 1} / {room.clues.length}</p>
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
          <p className="cipher-object-name">{clue.emoji} {clue.object}</p>
          <p className="phrase-font engine-line">{clue.prompt}</p>
          <div className="engine-choices">
            {clue.options.map((op, i) => {
              let cls = 'engine-choice';
              if (picked !== null && i === clue.correct) cls += ' is-right';
              else if (picked === i) cls += ' is-wrong';
              return (
                <button key={op} type="button" className={cls} disabled={picked !== null && picked === clue.correct} onClick={() => answer(i)}>
                  {op}
                </button>
              );
            })}
          </div>
          {picked !== null && picked !== clue.correct && <p className="engine-reveal">{clue.explain}</p>}
          <div className="cipher-hints">
            <button
              type="button"
              className="btn small"
              disabled={hintLevel >= clue.hints.length}
              onClick={() => setHintLevel((n) => Math.min(clue.hints.length, n + 1))}
            >
              רמז {Math.min(hintLevel + 1, clue.hints.length)} / {clue.hints.length}
            </button>
            <ol>
              {clue.hints.slice(0, hintLevel).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ol>
          </div>
          {picked !== null && picked !== clue.correct && (
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
        <section className="cipher-panel cipher-won">
          <div className="moment-emoji" aria-hidden>🏅</div>
          <h2>{room.victoryTitle}</h2>
          <p>{room.victoryText}</p>
          <button
            type="button"
            className="btn"
            onClick={() => onFinish({ score: maxScore, max: maxScore, letters: events })}
          >
            קבלו כוכבים והמשיכו
          </button>
        </section>
      )}
    </div>
  );
}
