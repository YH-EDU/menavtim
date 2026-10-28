import React, { useMemo, useState } from 'react';
import type { ActivityResult, LetterEvents } from '../data/types';
import { cipherRoom, type CipherBeat, type CipherClue, type CipherRoomDef, type ScrollWord } from '../data/escapeRoomsData';
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

function CipherPlay(props: {
  room: CipherRoomDef;
  continueLabel?: string;
  onFinish: (r: ActivityResult) => void;
}) {
  if (props.room.mode === 'scroll') return <ScrollCipherPlay {...props} />;
  return <ClassicCipherPlay {...props} />;
}

function ClassicCipherPlay({
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

function scrollSeed(roomId: string): number {
  const key = `menavtim_scroll_seed_${roomId}`;
  try {
    const existing = sessionStorage.getItem(key);
    if (existing && /^\d+$/.test(existing)) return Number(existing);
    const seed = 1 + Math.floor(Math.random() * 233279);
    sessionStorage.setItem(key, String(seed));
    return seed;
  } catch {
    return 1 + Math.floor(Math.random() * 233279);
  }
}

/** בלי ניקוד — כדי ש־וּבְרָא יזוהה כ־בְּרָא למרות סדר הדגש. */
function consonants(s: string): string {
  return s.replace(/[\u0591-\u05C7]/g, '');
}

/** סדר המילים במשפט → סדר הספרות. הספרה היא המקום במגילה המעורבבת. */
function codeFromSentence(sentence: string, grid: ScrollWord[]): string {
  const answers = grid
    .filter((w) => w.isAnswer)
    .map((w) => w.word)
    .sort((a, b) => consonants(b).length - consonants(a).length);
  const used = new Set<string>();
  const digits: string[] = [];
  for (const tok of sentence.split(/\s+/)) {
    const bare = consonants(tok);
    const hit = answers.find((a) => !used.has(a) && bare.includes(consonants(a)));
    if (!hit) continue;
    used.add(hit);
    const idx = grid.findIndex((w) => w.word === hit);
    if (idx >= 0) digits.push(String(idx + 1));
  }
  return digits.join('');
}

function candidateIndexes(grid: ScrollWord[], answer: string, seed: number): number[] {
  const correct = grid.findIndex((w) => w.word === answer);
  if (correct < 0) return [];
  const others = shuffleArray(
    grid.map((_, i) => i).filter((i) => i !== correct),
    seed,
  ).slice(0, 2);
  return shuffleArray([correct, ...others], seed + 17);
}

function scrollStars(hints: number, wrongs: number): number {
  if (hints <= 0 && wrongs <= 1) return 3;
  if (hints <= 2) return 2;
  return 1;
}

const SCROLL_GLOSS = [
  ['אַבָּא', 'אב'],
  ['בְּרָא', 'בן'],
  ['בֵּיתָא', 'בית'],
  ['יוֹמָא', 'יום'],
] as const;

function ScrollCipherPlay({
  room,
  continueLabel,
  onFinish,
}: {
  room: CipherRoomDef;
  continueLabel?: string;
  onFinish: (r: ActivityResult) => void;
}) {
  const [phase, setPhase] = useState<'intro' | 'room' | 'code' | 'won'>('intro');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [solved, setSolved] = useState<Record<string, boolean>>({});
  const [hintLevels, setHintLevels] = useState<Record<string, number>>({});
  const [hintsOpened, setHintsOpened] = useState(0);
  const [wrongs, setWrongs] = useState(0);
  const [shakeIndex, setShakeIndex] = useState<number | null>(null);
  const [statusMsg, setStatusMsg] = useState('');
  const [codeDigits, setCodeDigits] = useState('');
  const [codeShake, setCodeShake] = useState(false);
  const [codeMisses, setCodeMisses] = useState(0);
  const [orderHint, setOrderHint] = useState(false);
  const [peekFront, setPeekFront] = useState(false);
  const [finalStars, setFinalStars] = useState(ROOM_STAR_MAX);
  const [events] = useState<LetterEvents>({});

  const sessionSeed = useMemo(() => scrollSeed(room.id), [room.id]);
  const grid = useMemo(
    () => shuffleArray(room.scrollWords ?? [], sessionSeed),
    [room.scrollWords, sessionSeed],
  );
  const expected = useMemo(
    () => codeFromSentence(room.orderSentence ?? '', grid),
    [room.orderSentence, grid],
  );

  const active: CipherClue | undefined = room.clues.find((c) => c.id === activeId);
  const hintLevel = active ? hintLevels[active.id] ?? 0 : 0;
  const candidates =
    active && hintLevel >= 3 && active.answerWord
      ? candidateIndexes(grid, active.answerWord, sessionSeed + active.id.length * 13)
      : [];
  const solvedCount = room.clues.filter((c) => solved[c.id]).length;

  const openHint = () => {
    if (!active || hintLevel >= active.hints.length) return;
    const next = hintLevel + 1;
    if (next === 3 && hintLevel < 2) return;
    setHintLevels((h) => ({ ...h, [active.id]: next }));
    setHintsOpened((n) => n + 1);
  };

  const tapCell = (index: number) => {
    if (phase !== 'room' || !active || solved[active.id]) return;
    const word = grid[index]?.word;
    if (word && active.answerWord && word === active.answerWord) {
      playCorrect();
      if (word) addLetterEvent(events, stripPunct(word), true);
      const nextSolved = { ...solved, [active.id]: true };
      setSolved(nextSolved);
      setActiveId(null);
      setStatusMsg('החפץ סומן. הספרה נשארת על המגילה.');
      if (room.clues.every((c) => nextSolved[c.id])) {
        window.setTimeout(() => setPhase('code'), 450);
      }
      return;
    }
    playWrong();
    if (word) addLetterEvent(events, stripPunct(word), false);
    setWrongs((n) => n + 1);
    setShakeIndex(index);
    setStatusMsg('לא זו המילה. נסו משבצת אחרת.');
    window.setTimeout(() => setShakeIndex((cur) => (cur === index ? null : cur)), 420);
  };

  const pushDigit = (digit: string) => {
    if (phase !== 'code' || codeShake || codeDigits.length >= 4) return;
    const next = codeDigits + digit;
    setCodeDigits(next);
    if (next.length < 4) return;
    if (next === expected) {
      const stars = scrollStars(hintsOpened, wrongs);
      setFinalStars(stars);
      playWin();
      setPhase('won');
      return;
    }
    playWrong();
    const misses = codeMisses + 1;
    setWrongs((n) => n + 1);
    setCodeMisses(misses);
    if (misses >= 3 && !orderHint) {
      setOrderHint(true);
      setHintsOpened((n) => n + 1);
    }
    setCodeShake(true);
    setStatusMsg('הקוד לא מתאים.');
    window.setTimeout(() => {
      setCodeShake(false);
      setCodeDigits('');
    }, 420);
  };

  const cta = continueLabel ?? 'המשיכו לשלב הבא ←';

  const renderGrid = (interactive: boolean) => (
    <div className="scroll-grid" role="group" aria-label="מילים על המגילה">
      {grid.map((cell, i) => {
        const marked = candidates.includes(i);
        const cls = [
          'scroll-cell',
          shakeIndex === i ? 'is-shake' : '',
          marked ? 'is-candidate' : '',
        ]
          .filter(Boolean)
          .join(' ');
        return (
          <button
            key={cell.word}
            type="button"
            className={cls}
            disabled={!interactive}
            aria-label={`${cell.word}, מספר ${i + 1}${marked ? ', מסומנת ברמז' : ''}`}
            onClick={() => tapCell(i)}
          >
            <span className="scroll-num" dir="ltr">{i + 1}</span>
            <span className="phrase-font">{cell.word}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="cipher-room mode-scroll" dir="rtl">
      <header className="cipher-top">
        <div>
          <p className="engine-kicker">{room.blurb}</p>
          <h2>{room.title}</h2>
        </div>
        <p className="scroll-progress" aria-live="polite">
          {solvedCount} / {room.clues.length} חפצים
        </p>
      </header>

      {phase === 'intro' && (
        <section className="cipher-panel">
          <p>{room.intro}</p>
          <p className="scroll-note">
            בלי רמזים ועם טעות אחת לכל היותר — 3 כוכבים. עד שני רמזים — 2. יותר מזה — כוכב אחד.
          </p>
          <button type="button" className="btn" onClick={() => setPhase('room')}>
            נכנסים לחדר
          </button>
        </section>
      )}

      {(phase === 'room' || phase === 'code') && (
        <section className="cipher-panel scroll-scene">
          <div className="cipher-objects" role="group" aria-label="חפצים בחדר">
            {room.clues.map((c) => {
              const done = !!solved[c.id];
              const live = activeId === c.id && phase === 'room';
              return (
                <button
                  key={c.id}
                  type="button"
                  className={`cipher-object ${live ? 'is-live' : ''} ${done ? 'is-done' : ''}`}
                  aria-pressed={live}
                  disabled={phase !== 'room' || done}
                  onClick={() => {
                    setActiveId(c.id);
                    setStatusMsg('');
                  }}
                >
                  <span aria-hidden>{done ? '✓' : c.emoji}</span>
                  <small>{c.object}</small>
                </button>
              );
            })}
          </div>

          {phase === 'room' && active && (
            <div className="scroll-riddle" role="region" aria-label={active.object}>
              <p className="cipher-object-name">
                {active.emoji} {active.object}
              </p>
              <p className="scroll-riddle-text">{active.riddle ?? active.prompt}</p>
              <p className="scroll-note">בחרו את המילה המתאימה על המגילה. הספרה לא תועתק למנעול.</p>
              <div className="cipher-hints">
                <button
                  type="button"
                  className="btn small"
                  disabled={hintLevel >= active.hints.length}
                  onClick={openHint}
                >
                  {hintLevel >= active.hints.length
                    ? 'כל הרמזים נפתחו'
                    : hintLevel === 2
                      ? 'רמז 3 / 3 · מסמן שלוש משבצות'
                      : `רמז ${hintLevel + 1} / ${active.hints.length}`}
                </button>
                <ol>
                  {active.hints.slice(0, hintLevel).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {phase === 'room' && !active && (
            <p className="scroll-note">לחצו על חפץ, ואז על מילה במגילה.</p>
          )}

          <div className="scroll-stand">
            <div className="scroll-roll" aria-hidden />
            {phase === 'room' || peekFront ? (
              <div className="scroll-parchment">
                {phase === 'code' && <p className="scroll-note">פני המגילה — המספרים גלויים, המנעול לא מתמלא לבד.</p>}
                {renderGrid(phase === 'room' && !!active && !solved[active.id])}
              </div>
            ) : (
              <div className="scroll-parchment scroll-back">
                <p className="scroll-back-label">גב המגילה</p>
                <p className="phrase-font scroll-sentence">{room.orderSentence}</p>
                {orderHint && (
                  <p className="scroll-order-hint">סדר המילים במשפט הוא סדר הספרות</p>
                )}
                <div
                  className={`scroll-code ${codeShake ? 'is-shake' : ''}`}
                  aria-label="קוד בן ארבע ספרות"
                >
                  {[0, 1, 2, 3].map((i) => (
                    <span key={i} dir="ltr">{codeDigits[i] ?? '·'}</span>
                  ))}
                </div>
                <div className="scroll-keypad" role="group" aria-label="חוגת המנעול">
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((d) => (
                    <button key={d} type="button" onClick={() => pushDigit(d)}>
                      {d}
                    </button>
                  ))}
                  <button type="button" className="scroll-backspace" onClick={() => setCodeDigits((d) => d.slice(0, -1))}>
                    מחיקה
                  </button>
                </div>
              </div>
            )}
            <div className="scroll-roll" aria-hidden />
          </div>

          {phase === 'code' && (
            <button type="button" className="btn small" onClick={() => setPeekFront((v) => !v)}>
              {peekFront ? 'חזרו לגב המגילה' : 'הציצו בפני המגילה'}
            </button>
          )}

          <div className={`scroll-chest ${solvedCount < room.clues.length ? 'is-locked' : ''}`} aria-live="polite">
            <span aria-hidden>{solvedCount < room.clues.length ? '🔒' : '🗃️'}</span>
            <p>
              {solvedCount < room.clues.length
                ? 'התיבה נעולה'
                : phase === 'code'
                  ? 'הזינו ארבע ספרות לפי סדר המילים במשפט'
                  : 'התיבה ממתינה'}
            </p>
          </div>
          <p className="scroll-status" role="status" aria-live="polite">{statusMsg}</p>
        </section>
      )}

      {phase === 'won' && (
        <section className="cipher-panel cipher-won">
          <div className="moment-emoji" aria-hidden>🏅</div>
          <h2>{room.victoryTitle}</h2>
          <p>{room.victoryText}</p>
          <ul className="scroll-glossary">
            {SCROLL_GLOSS.map(([word, he]) => (
              <li key={word}>
                <span className="phrase-font">{word}</span>
                <span> — {he}</span>
              </li>
            ))}
          </ul>
          <div style={{ margin: '12px 0 6px', display: 'flex', justifyContent: 'center' }}>
            <Stars n={starsFor(finalStars, ROOM_STAR_MAX)} />
          </div>
          <p className="scroll-note">
            {finalStars} מתוך {ROOM_STAR_MAX} כוכבים
            {hintsOpened > 0 ? ` · ${hintsOpened} רמזים` : ' · בלי רמזים'}
            {wrongs > 0 ? ` · ${wrongs} טעויות` : ''}
          </p>
          <button
            type="button"
            className="btn"
            style={{ width: '100%', maxWidth: 320, fontWeight: 900 }}
            onClick={() => onFinish({ score: finalStars, max: ROOM_STAR_MAX, letters: events })}
          >
            {cta}
          </button>
        </section>
      )}
    </div>
  );
}
