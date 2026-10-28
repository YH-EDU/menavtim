import React, { useMemo, useState } from 'react';
import type {
  ActivityResult,
  ConjugateActivity,
  KeywordActivity,
  LetterEvents,
  MomentActivity,
  PrefixActivity,
  QnaActivity,
  RescueActivity,
  ScrollActivity,
  SkeletonActivity,
  SpeakerActivity,
} from '../data/types';
import { addLetterEvent } from '../lib/mastery';
import { stripPunct } from '../data/letters';
import { playCorrect, playWrong } from '../lib/sound';
import { shuffleArray, shuffleOptionsWithCorrect } from '../lib/shuffleOptions';
import { ChoiceButtons, RevealNote, RoundMeta, useRounds } from './engineShared';

function shuffle<T>(arr: T[]): T[] {
  return shuffleArray(arr);
}

export function PrefixChase({
  activity,
  onFinish,
}: {
  activity: PrefixActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const { idx, picked, choose } = useRounds(activity.rounds.length, onFinish);
  const round = activity.rounds[idx];
  const options = useMemo(() => shuffle([round.prefix, ...round.decoys]), [round]);
  const correct = options.indexOf(round.prefix);

  return (
    <div className="engine-card">
      <RoundMeta index={idx} total={activity.rounds.length} />
      <p className="engine-kicker">התחילית ברחה</p>
      <div className="prefix-stage">
        <span className={`prefix-chip ${picked !== null ? 'is-home' : 'is-loose'}`}>
          {picked !== null ? round.prefix : '…'}
        </span>
        <span className="prefix-stem phrase-font">{round.stem}</span>
      </div>
      <p className="engine-meaning">המשמעות: {round.meaning}</p>
      <ChoiceButtons
        options={options}
        picked={picked}
        correct={correct}
        onPick={(i) => choose(i, correct, stripPunct(round.stem))}
      />
      <RevealNote show={picked !== null} text={round.reveal} />
    </div>
  );
}

export function SpeakerGame({
  activity,
  onFinish,
}: {
  activity: SpeakerActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const { idx, picked, choose } = useRounds(activity.rounds.length, onFinish);
  const round = activity.rounds[idx];
  return (
    <div className="engine-card">
      <RoundMeta index={idx} total={activity.rounds.length} />
      <p className="engine-kicker">מי מדבר?</p>
      <div className="phrase-font engine-line">{round.line}</div>
      <ChoiceButtons
        options={round.options}
        picked={picked}
        correct={round.correct}
        onPick={(i) => choose(i, round.correct, round.letter)}
      />
      <RevealNote show={picked !== null} text={round.reveal} />
    </div>
  );
}

export function ConjugateMachine({
  activity,
  onFinish,
}: {
  activity: ConjugateActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const { idx, picked, choose } = useRounds(activity.rounds.length, onFinish);
  const round = activity.rounds[idx];
  return (
    <div className="engine-card">
      <RoundMeta index={idx} total={activity.rounds.length} />
      <p className="engine-kicker">מכונת הנטיות · {activity.verb} = {activity.verbMeaning}</p>
      <div className="machine">
        <div className="machine-slot">
          <span>כינוי</span>
          <strong>{round.pronounHe}</strong>
          <em className="phrase-font">{round.pronounAr}</em>
        </div>
        <div className="machine-arrow" aria-hidden>←</div>
        <div className="machine-slot machine-slot--out">
          <span>פועל</span>
          <strong className="phrase-font">{picked !== null ? round.options[round.correct] : '…'}</strong>
        </div>
      </div>
      <ChoiceButtons
        options={round.options}
        picked={picked}
        correct={round.correct}
        onPick={(i) => choose(i, round.correct, round.letter)}
      />
      <RevealNote show={picked !== null} text={round.reveal} />
    </div>
  );
}

export function KeywordGame({
  activity,
  onFinish,
}: {
  activity: KeywordActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const { idx, picked, choose } = useRounds(activity.rounds.length, onFinish);
  const round = activity.rounds[idx];
  return (
    <div className="engine-card">
      <RoundMeta index={idx} total={activity.rounds.length} />
      <p className="engine-kicker">{round.question}</p>
      <div className="phrase-font engine-line">{round.sentence}</div>
      <ChoiceButtons
        options={round.words}
        picked={picked}
        correct={round.correct}
        onPick={(i) => choose(i, round.correct, stripPunct(round.words[round.correct]))}
      />
      <RevealNote show={picked !== null} text={round.reveal} />
    </div>
  );
}

export function QuestionAnswer({
  activity,
  onFinish,
}: {
  activity: QnaActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const { idx, picked, choose } = useRounds(activity.rounds.length, onFinish);
  const round = activity.rounds[idx];
  return (
    <div className="engine-card">
      <RoundMeta index={idx} total={activity.rounds.length} />
      <p className="engine-kicker">שאלה</p>
      <div className="phrase-font engine-line">{round.question}</div>
      <p className="engine-meaning">{round.gloss}</p>
      <p className="engine-kicker">איזו תשובה עונה עליה?</p>
      <ChoiceButtons
        options={round.options}
        picked={picked}
        correct={round.correct}
        onPick={(i) => choose(i, round.correct, stripPunct(round.question.split(' ')[0] ?? ''))}
      />
      <RevealNote show={picked !== null} text={round.reveal} />
    </div>
  );
}

export function SugyaSkeleton({
  activity,
  onFinish,
}: {
  activity: SkeletonActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const pool = useMemo(() => shuffle(activity.beats.map((_, i) => i)), [activity]);
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);
  const [bad, setBad] = useState<number | null>(null);
  const [events] = useState<LetterEvents>({});
  const placed = activity.beats.slice(0, next);

  const tap = (beatIndex: number) => {
    if (bad !== null) return;
    if (beatIndex === next) {
      playCorrect();
      addLetterEvent(events, stripPunct(activity.beats[beatIndex].line.split(' ')[0] ?? ''), true);
      const gained = score + 1;
      setScore(gained);
      if (next + 1 >= activity.beats.length) {
        onFinish({ score: gained, max: activity.beats.length, letters: events });
      } else {
        setNext(next + 1);
      }
    } else {
      playWrong();
      addLetterEvent(events, stripPunct(activity.beats[beatIndex].line.split(' ')[0] ?? ''), false);
      setBad(beatIndex);
      window.setTimeout(() => setBad(null), 700);
    }
  };

  return (
    <div className="engine-card">
      <p className="engine-kicker">לחצו לפי סדר הסוגיא</p>
      <ol className="skeleton-placed">
        {placed.map((b) => (
          <li key={b.role}>
            <span className="skeleton-role">{b.role}</span>
            <span className="phrase-font">{b.line}</span>
            <small>{b.gloss}</small>
          </li>
        ))}
        {next < activity.beats.length && <li className="skeleton-wait">המהלך הבא…</li>}
      </ol>
      <div className="engine-choices">
        {pool.map((beatIndex) => {
          const b = activity.beats[beatIndex];
          if (beatIndex < next) return null;
          return (
            <button
              key={b.role}
              type="button"
              className={`engine-choice ${bad === beatIndex ? 'is-wrong' : ''}`}
              onClick={() => tap(beatIndex)}
            >
              <strong>{b.role}</strong>
              <span className="phrase-font">{b.line}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ScrollDecode({
  activity,
  onFinish,
}: {
  activity: ScrollActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const pool = useMemo(() => shuffle(activity.words.map((_, i) => i)), [activity]);
  const [next, setNext] = useState(0);
  const [bad, setBad] = useState<number | null>(null);
  const [hinted, setHinted] = useState<Record<number, boolean>>({});
  const [hintText, setHintText] = useState<string | null>(null);
  const [solved, setSolved] = useState(false);
  const [events] = useState<LetterEvents>({});
  const written = activity.words.slice(0, next);
  const hintsUsed = Object.keys(hinted).length;
  const showHebrew = !activity.hideHebrewUntilReveal || solved;

  const revealHint = (wordIndex: number) => {
    const text = activity.wordHints?.[wordIndex];
    if (!text || hinted[wordIndex]) return;
    setHinted((h) => ({ ...h, [wordIndex]: true }));
    setHintText(text);
  };

  const finishScore = () => {
    const max = activity.words.length;
    const score = Math.max(1, max - hintsUsed);
    onFinish({ score, max, letters: events });
  };

  const tap = (wordIndex: number) => {
    if (bad !== null || solved) return;
    const word = activity.words[wordIndex];
    if (wordIndex === next) {
      playCorrect();
      addLetterEvent(events, stripPunct(word), true);
      if (next + 1 >= activity.words.length) {
        setNext(next + 1);
        if (activity.hideHebrewUntilReveal) {
          setSolved(true);
        } else {
          const max = activity.words.length;
          const score = Math.max(1, max - hintsUsed);
          window.setTimeout(() => onFinish({ score, max, letters: events }), 700);
        }
      } else {
        setNext(next + 1);
        setHintText(null);
      }
    } else {
      playWrong();
      addLetterEvent(events, stripPunct(word), false);
      setBad(wordIndex);
      window.setTimeout(() => setBad(null), 650);
    }
  };

  const done = next >= activity.words.length;

  return (
    <div className="engine-card">
      <p className="engine-kicker">{activity.scrollName}</p>
      {showHebrew ? <p className="engine-meaning">{activity.hebrew}</p> : null}
      <div className={`scroll-sheet ${done ? 'is-sealed' : ''}`}>
        <div className="scroll-roll" />
        <p className="phrase-font scroll-ink">
          {written.length ? written.join(' ') : '…'}
        </p>
        <div className="scroll-roll" />
      </div>
      {done && activity.hideHebrewUntilReveal ? <p className="engine-reveal">{activity.reveal}</p> : null}
      {hintText && !solved ? <p className="engine-reveal">{hintText}</p> : null}
      {!solved && (
        <div className="engine-choices">
          {pool.map((wordIndex) => {
            if (wordIndex < next) return null;
            const word = activity.words[wordIndex];
            return (
              <div key={word} className="scroll-word-row">
                <button
                  type="button"
                  className={`engine-choice phrase-font ${bad === wordIndex ? 'is-wrong' : ''}`}
                  onClick={() => tap(wordIndex)}
                >
                  {word}
                </button>
                {activity.wordHints?.[wordIndex] && (
                  <button
                    type="button"
                    className="btn small"
                    disabled={!!hinted[wordIndex]}
                    onClick={() => revealHint(wordIndex)}
                  >
                    {hinted[wordIndex] ? 'רמז נפתח' : 'רמז'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
      {solved && (
        <button type="button" className="btn" onClick={finishScore}>
          המשך במסע ←
        </button>
      )}
    </div>
  );
}

export function RescueMission({
  activity,
  onFinish,
}: {
  activity: RescueActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const { idx, picked, choose } = useRounds(activity.steps.length, onFinish);
  const step = activity.steps[idx];
  return (
    <div className="engine-card">
      <RoundMeta index={idx} total={activity.steps.length} />
      <div className="rescue-scene">
        <span className="rescue-emoji" aria-hidden>{step.emoji}</span>
        <p>{step.scene}</p>
      </div>
      <div className="phrase-font engine-line">{step.prompt}</div>
      <ChoiceButtons
        options={step.options}
        picked={picked}
        correct={step.correct}
        onPick={(i) => choose(i, step.correct, step.letter)}
      />
      <RevealNote show={picked !== null} text={step.success} />
    </div>
  );
}

export function StoryMoment({
  activity,
  onFinish,
}: {
  activity: MomentActivity;
  onFinish: (r: ActivityResult) => void;
}) {
  const [panel, setPanel] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [hintLevel, setHintLevel] = useState(0);
  const q = activity.question;
  const choiceSeed = useMemo(() => 1 + Math.floor(Math.random() * 233279), [activity.id]);
  const shuffled = useMemo(() => {
    if (!q) return null;
    return shuffleOptionsWithCorrect(q.options, q.correct, choiceSeed);
  }, [q, choiceSeed]);
  const last = panel >= activity.panels.length - 1;

  const finishRead = () => {
    onFinish({ score: 1, max: 1, letters: {} });
  };

  const answer = (i: number) => {
    if (!q || !shuffled || picked !== null) return;
    setPicked(i);
    const ok = i === shuffled.correct;
    if (ok) playCorrect();
    else playWrong();
    window.setTimeout(() => {
      onFinish({ score: ok ? 1 : 0, max: 1, letters: {} });
    }, ok ? 900 : 1600);
  };

  return (
    <div className="engine-card moment-card">
      <div className="moment-emoji" aria-hidden>{activity.panels[panel].emoji}</div>
      <p className="moment-text">{activity.panels[panel].text}</p>
      {!last && (
        <button type="button" className="btn" onClick={() => setPanel((n) => n + 1)}>
          המשך
        </button>
      )}
      {last && q && shuffled && (
        <>
          <p className="engine-kicker">{q.prompt}</p>
          <ChoiceButtons options={shuffled.options} picked={picked} correct={shuffled.correct} onPick={answer} />
          {q.hints && q.hints.length > 0 && picked === null && (
            <div className="cipher-hints">
              <button
                type="button"
                className="btn small"
                disabled={hintLevel >= q.hints.length}
                onClick={() => setHintLevel((n) => Math.min(q.hints!.length, n + 1))}
              >
                {hintLevel >= q.hints.length ? 'כל הרמזים נפתחו' : `רמז ${hintLevel + 1} / ${q.hints.length}`}
              </button>
              <ol>
                {q.hints.slice(0, hintLevel).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ol>
            </div>
          )}
          <RevealNote show={picked !== null} text={q.explain} />
        </>
      )}
      {last && !q && (
        <button type="button" className="btn" onClick={finishRead}>
          ממשיכים
        </button>
      )}
    </div>
  );
}
