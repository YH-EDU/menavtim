import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { UNITS } from '../data/units';
import { vocalize } from '../data/letters';
import { setGuestFreeNav, type StudentSession, type ProgressData } from '../lib/api';
import { unitDoneCount, unitUnlocked, unitCompleted, allCompleted, overallPercent } from '../lib/progressUtil';
import { computeJourneyTotals } from '../lib/journeyTotals';
import { soundEnabled, toggleSound } from '../lib/sound';
import { TypeIcon, Volume2, VolumeX, ListIcon, Users, School, Unlock } from '../ui/icons';
import JourneyPhaser from './JourneyPhaser';
import StarHud from './StarHud';
import { SoftPageShell } from '../ui/PageShell';
import { FeedbackButton } from '../ui/Feedback';
import { nav } from '../App';
import {
  ESCAPE_LABEL,
  escapeCompleted,
  escapeUnlocked,
} from '../lib/escapeRoom';

type MapView = 'trail' | 'list';
const LS_VIEW = 'aramit_map_view';

export default function JourneyMap({
  session,
  progress,
  onLogout,
  onSessionChange,
}: {
  session: StudentSession;
  progress: ProgressData;
  onLogout: (to?: string) => void;
  onSessionChange: (s: StudentSession) => void;
}) {
  const totals = computeJourneyTotals(progress);
  const finished = allCompleted(progress);
  const pct = overallPercent(progress);
  const celebrated = useRef(false);
  const [view, setView] = useState<MapView>('trail');
  const [sound, setSound] = useState(soundEnabled());
  const [avatarPicker, setAvatarPicker] = useState(false);

  const switchView = (v: MapView) => {
    setView(v);
    localStorage.setItem(LS_VIEW, v);
  };

  useEffect(() => {
    if (finished && !celebrated.current) {
      celebrated.current = true;
      const end = Date.now() + 1800;
      const frame = () => {
        confetti({ particleCount: 5, angle: 60, spread: 60, origin: { x: 0 } });
        confetti({ particleCount: 5, angle: 120, spread: 60, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [finished]);

  // במפת המסע הגלילה מתחילה מלמטה (JourneyTrail); ברשימה — לראש העמוד
  useEffect(() => {
    if (view === 'list') window.scrollTo(0, 0);
  }, [view]);

  const isTeacherPreview = session.token === 'teacher-preview';

  // ─── כפתור עגול מרחף ───
  const fab = (icon: React.ReactNode, title: string, onClick: () => void) => (
    <button
      onClick={onClick}
      title={title}
      aria-label={title}
      style={{
        width: 46,
        height: 46,
        borderRadius: '50%',
        border: '2.5px solid rgba(125, 82, 38, 0.7)',
        background: 'rgba(255, 254, 247, 0.95)',
        color: '#6b4f26',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(30, 70, 20, 0.35)',
        flexShrink: 0,
      }}
    >
      {icon}
    </button>
  );

  if (view === 'trail') {
    return (
      <div style={{ position: 'relative' }}>
        <JourneyPhaser
          session={session}
          progress={progress}
          forcePicker={avatarPicker}
          onPickerClosed={() => setAvatarPicker(false)}
        />

        {/* שם + כוכבים — עמודה אחת מוצמדת לקצה המסך (ימין); הכוכב מתחת לתג השם */}
        <div
          style={{
            position: 'fixed',
            top: 'max(12px, env(safe-area-inset-top, 0px))',
            insetInlineStart: 'max(8px, env(safe-area-inset-right, 0px))',
            zIndex: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: 6,
            maxWidth: 'min(58vw, calc(100vw - 16px))',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 254, 247, 0.94)',
              border: '3px solid rgba(125, 82, 38, 0.85)',
              borderRadius: 999,
              padding: '7px 18px',
              boxShadow: '0 4px 10px rgba(30, 70, 20, 0.35)',
              pointerEvents: 'auto',
              maxWidth: '100%',
            }}
          >
            <div style={{ fontSize: 16.5, fontWeight: 900, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {session.emoji} {session.nickname}
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-soft)', fontWeight: 700 }}>
              {isTeacherPreview ? 'תצוגת מורה' : session.className ? `כיתת ${session.className}` : 'תרגול חופשי'}
              {' '}· {pct}% מהמסע
            </div>
          </div>
          <StarHud progress={progress} embedded />
        </div>

        {/* כפתורי פעולה — מוצמדים לפינה השמאלית העליונה */}
        <div
          style={{
            position: 'fixed',
            top: 'calc(16px + env(safe-area-inset-top, 0px))',
            left: 'calc(12px + env(safe-area-inset-left, 0px))',
            zIndex: 10,
            display: 'flex',
            gap: 8,
          }}
        >
          {fab(<TypeIcon size={21} />, 'המילים שלי', () => nav('/progress'))}
          {fab(sound ? <Volume2 size={21} /> : <VolumeX size={21} />, sound ? 'השתקת צלילים' : 'הפעלת צלילים', () => setSound(toggleSound()))}
          {fab(<ListIcon size={21} />, 'תצוגת רשימה', () => switchView('list'))}
          {fab(<span style={{ fontSize: 20 }}>🎭</span>, 'החלפת דמות', () => setAvatarPicker(true))}
          {isTeacherPreview
            ? fab(<School size={21} />, 'חזרה ללוח המורה', () => onLogout('/teacher'))
            : fab(<Users size={21} />, 'החלפת משתמש — במחשב משותף כל תלמיד נכנס עם השם והאימוג\'י שלו', () => onLogout())}
        </div>

        {/* מסלול חופשי לאורח — צף בתחתית המסך */}
        {session.token === 'guest' && (
          <label
            style={{
              position: 'fixed',
              bottom: 14,
              left: 12,
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              fontSize: 13.5,
              fontWeight: 700,
              color: '#4a3416',
              background: 'rgba(255, 254, 247, 0.94)',
              border: '3px solid rgba(125, 82, 38, 0.85)',
              borderRadius: 999,
              padding: '7px 14px',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(30, 70, 20, 0.35)',
            }}
          >
            <input
              type="checkbox"
              checked={!!session.freeNav}
              onChange={(e) => onSessionChange(setGuestFreeNav(session, e.target.checked))}
            />
            <Unlock size={16} />
            מסלול חופשי
          </label>
        )}

        {/* משוב — רק למורה / תרגול חופשי */}
        {(isTeacherPreview || session.token === 'guest') && (
          <div style={{ position: 'fixed', bottom: finished ? 96 : 14, right: 12, zIndex: 10 }}>
            <FeedbackButton compact />
          </div>
        )}

        {/* חגיגת סיום */}
        {finished && (
          <div
            className="pop-in"
            style={{
              position: 'fixed',
              bottom: 14,
              right: 12,
              zIndex: 10,
              background: 'rgba(255, 254, 247, 0.96)',
              border: '3px solid var(--gold)',
              borderRadius: 16,
              padding: '10px 18px',
              boxShadow: '0 4px 14px rgba(30, 70, 20, 0.4)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 26 }}>🏆</div>
            <div style={{ fontSize: 14.5, fontWeight: 900 }}>סיימתם את כל המסע!</div>
          </div>
        )}
      </div>
    );
  }

  // ─── תצוגת רשימה ───
  return (
    <SoftPageShell seed="map-list">
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '20px 16px 60px' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 6 }}>
        <div>
          <h1 style={{ fontSize: 26 }}>
            {session.emoji} {session.nickname}
          </h1>
          <p style={{ color: 'var(--ink-soft)', margin: '2px 0 0', fontSize: 14 }}>
            {isTeacherPreview
              ? 'תצוגת מורה · כל השלבים פתוחים'
              : session.className
                ? `כיתת ${session.className}`
                : 'תרגול חופשי'}
            {' '}· ⭐ {totals.stars} / {totals.maxStars} כוכבים
            {progress.freeNav && !isTeacherPreview ? ' · 🔓 מסלול חופשי' : ''}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          {isTeacherPreview && (
            <button className="btn secondary small" onClick={() => onLogout('/teacher')}>
              ← חזרה ללוח המורה
            </button>
          )}
          {session.token === 'guest' && (
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13.5, color: 'var(--ink-soft)', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={!!session.freeNav}
                onChange={(e) => onSessionChange(setGuestFreeNav(session, e.target.checked))}
              />
              מסלול חופשי
            </label>
          )}
          {(isTeacherPreview || session.token === 'guest') && <FeedbackButton compact />}
          <button className="btn secondary small" onClick={() => switchView('trail')}>
            🗺️ מפת מסע
          </button>
          <button className="btn secondary small" onClick={() => nav('/progress')}>
            📚 המילים שלי
          </button>
          {!isTeacherPreview && (
            <button className="btn small" style={{ background: 'transparent', boxShadow: 'none', color: 'var(--ink-soft)' }} onClick={() => onLogout()} title="במחשב משותף — כל תלמיד נכנס עם השם והאימוג'י שלו">
              👥 החלפת משתמש
            </button>
          )}
        </div>
      </header>

      {/* סיכום כוכבים */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          marginBottom: 26,
          padding: '12px 18px',
          background: 'rgba(255,254,247,0.96)',
          border: '2px solid rgba(125,82,38,0.55)',
          borderRadius: 16,
        }}
      >
        <span style={{ fontSize: 32 }}>⭐</span>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: '#4a3416' }}>
            {totals.stars}
            <span style={{ fontSize: 15, color: '#7a6548', marginRight: 6 }}>/ {totals.maxStars}</span>
          </div>
          <div style={{ fontSize: 13, color: 'var(--ink-soft)', fontWeight: 700 }}>כוכבים שנאספו במסע</div>
        </div>
      </div>

      {finished && (
        <div className="card pop-in" style={{ textAlign: 'center', marginBottom: 22, border: '3px solid var(--gold)' }}>
          <div style={{ fontSize: 46 }}>🏆</div>
          <h2>סיימתם את כל המסע!</h2>
          <p style={{ color: 'var(--ink-soft)' }}>
            סיימתם את מסע הארמית! אפשר לחזור לכל פעילות ולשפר את הכוכבים.
          </p>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {UNITS.map((unit, i) => {
          const unlocked = unitUnlocked(progress, i);
          const done = unitDoneCount(progress, unit);
          const completed = unitCompleted(progress, unit);
          return (
            <button
              key={unit.id}
              onClick={() => unlocked && nav(`/unit/${unit.id}`)}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                textAlign: 'right',
                border: completed ? '2px solid var(--green)' : '2px solid transparent',
                opacity: unlocked ? 1 : 0.55,
                cursor: unlocked ? 'pointer' : 'default',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={(e) => unlocked && (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              <div
                style={{
                  fontSize: 34,
                  width: 62,
                  height: 62,
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: completed ? 'var(--green-soft)' : unlocked ? 'var(--teal-soft)' : '#e2e8f0',
                  flexShrink: 0,
                }}
              >
                {unlocked ? unit.icon : '🔒'}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: 19 }}>{i + 1}. {unit.title}</h3>
                  {unit.newLetters.length > 0 && unit.newLetters.length <= 4 && (
                    <span className="phrase-font" style={{ color: 'var(--teal)', fontSize: 22 }}>
                      {unit.newLetters.map(vocalize).join(' ')}
                    </span>
                  )}
                </div>
                <p style={{ margin: '2px 0 8px', color: 'var(--ink-soft)', fontSize: 14 }}>{unit.subtitle}</p>
                <div style={{ display: 'flex', gap: 4 }}>
                  {unit.activities.map((a) => (
                    <span
                      key={a.id}
                      style={{
                        height: 7,
                        flex: 1,
                        maxWidth: 46,
                        borderRadius: 4,
                        background: progress.completed[a.id] ? 'var(--green)' : '#e2e8f0',
                      }}
                    />
                  ))}
                </div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: completed ? 'var(--green)' : 'var(--ink-soft)', flexShrink: 0 }}>
                {completed ? '✓ הושלם' : unlocked ? `${done}/${unit.activities.length}` : ''}
              </div>
            </button>
          );
        })}
        {(() => {
          const unlocked = escapeUnlocked(progress);
          const completed = escapeCompleted(progress);
          return (
            <button
              key="escape-beit-midrash"
              onClick={() => unlocked && nav('/escape')}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                textAlign: 'right',
                border: completed ? '2px solid var(--gold)' : unlocked ? '2px solid #c9a24a' : '2px solid transparent',
                opacity: unlocked ? 1 : 0.55,
                cursor: unlocked ? 'pointer' : 'default',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={(e) => unlocked && (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              <div
                style={{
                  fontSize: 34,
                  width: 62,
                  height: 62,
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: completed ? 'var(--green-soft)' : unlocked ? '#fff3c8' : '#e2e8f0',
                  flexShrink: 0,
                }}
              >
                {unlocked ? (completed ? '🏅' : '🚪') : '🔒'}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: 19 }}>{UNITS.length + 1}. {ESCAPE_LABEL}</h3>
                <p style={{ margin: '2px 0 0', color: 'var(--ink-soft)', fontSize: 14 }}>
                  חדר בריחה · מנעול · מכתב בארמית — המשימה האחרונה
                </p>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: completed ? 'var(--green)' : 'var(--ink-soft)', flexShrink: 0 }}>
                {completed ? '✓ הושלם' : unlocked ? 'פתוח' : 'נעול'}
              </div>
            </button>
          );
        })()}
      </div>
    </div>
    </SoftPageShell>
  );
}
