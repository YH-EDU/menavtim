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
import { shuffleArray } from '../lib/shuffleOptions';
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
  const [score, setScore] = useState(0);
  const [bad, setBad] = useState<number | null>(null);
  const [events] = useState<LetterEvents>({});
  const written = activity.words.slice(0, next);

  const tap = (wordIndex: number) => {
    if (bad !== null) return;
    const word = activity.words[wordIndex];
    if (wordIndex === next) {
      playCorrect();
      addLetterEvent(events, stripPunct(word), true);
      const gained = score + 1;
      setScore(gained);
      if (next + 1 >= activity.words.length) {
        window.setTimeout(() => onFinish({ score: gained, max: activity.words.length, letters: events }), 700);
      } else {
        setNext(next + 1);
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
      <p className="engine-meaning">{activity.hebrew}</p>
      <div className={`scroll-sheet ${done ? 'is-sealed' : ''}`}>
        <div className="scroll-roll" />
        <p className="phrase-font scroll-ink">
          {written.length ? written.join(' ') : '…'}
        </p>
        <div className="scroll-roll" />
      </div>
      {done ? <p className="engine-reveal">{activity.reveal}</p> : null}
      <div className="engine-choices">
        {pool.map((wordIndex) => {
          if (wordIndex < next) return null;
          const word = activity.words[wordIndex];
          return (
            <button
              key={word}
              type="button"
              className={`engine-choice phrase-font ${bad === wordIndex ? 'is-wrong' : ''}`}
              onClick={() => tap(wordIndex)}
            >
              {word}
            </button>
          );
        })}
      </div>
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
  const q = activity.question;
  const last = panel >= activity.panels.length - 1;

  const finishRead = () => {
    onFinish({ score: 1, max: 1, letters: {} });
  };

  const answer = (i: number) => {
    if (!q || picked !== null) return;
    setPicked(i);
    const ok = i === q.correct;
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
      {last && q && (
        <>
          <p className="engine-kicker">{q.prompt}</p>
          <ChoiceButtons options={q.options} picked={picked} correct={q.correct} onPick={answer} />
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
