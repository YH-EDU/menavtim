import React from 'react';
import { nav } from '../App';
import { isCompleteSession, type ProgressData, type StudentSession } from '../lib/api';
import { HeroBg } from '../ui/PageShell';
import { asset } from '../lib/basePath';
import { FullscreenFab } from '../ui/FullscreenToggle';
import { feedbackComposeUrl } from '../ui/Feedback';
import { Check, Lock } from '../ui/icons';
import {
  MASTERY_THRESHOLD,
  STAGE_COUNT,
  resolvePlayableStage,
  stageCardStatus,
  stageLabelHe,
  stageScorePercent,
  stageTitleHe,
  stageUnlocked,
  testUnlockAll,
} from '../game/phaser/stages';

function StageOverviewCards({
  progress,
  canOpen,
  onOpenStage,
}: {
  progress: ProgressData;
  canOpen: boolean;
  onOpenStage?: (stageIndex: number) => void;
}) {
  const playable = resolvePlayableStage(progress);
  const needPct = Math.round(MASTERY_THRESHOLD * 100);

  return (
    <div
      dir="rtl"
      aria-label="סקירת שלבים"
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        width: '100%',
        maxWidth: 720,
        marginBottom: 28,
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {Array.from({ length: STAGE_COUNT }, (_, i) => {
        const status = stageCardStatus(i, progress);
        const pct = stageScorePercent(i, progress);
        const unlocked = stageUnlocked(i, progress);
        const highlighted = status === 'current' && i === playable;
        const clickable = canOpen && unlocked;

        const statusLabel =
          status === 'completed' ? 'הושלם' : status === 'locked' ? 'נעול' : 'נוכחי';

        return (
          <button
            key={i}
            type="button"
            disabled={!clickable}
            onClick={() => {
              if (!clickable) return;
              onOpenStage?.(i);
            }}
            style={{
              flex: '1 1 160px',
              maxWidth: 220,
              minWidth: 140,
              textAlign: 'right',
              direction: 'rtl',
              cursor: clickable ? 'pointer' : 'default',
              padding: '14px 14px 12px',
              borderRadius: 16,
              border: highlighted
                ? '3px solid #c9a24a'
                : status === 'completed'
                  ? '2.5px solid rgba(46, 125, 70, 0.55)'
                  : '2.5px solid rgba(255,255,255,0.45)',
              background: highlighted
                ? 'rgba(255, 248, 220, 0.95)'
                : status === 'locked'
                  ? 'rgba(255,255,255,0.14)'
                  : 'rgba(255,254,247,0.92)',
              boxShadow: highlighted
                ? '0 10px 28px rgba(20,40,10,0.35), 0 0 0 4px rgba(201,162,74,0.28)'
                : '0 6px 16px rgba(10,30,20,0.22)',
              color: status === 'locked' ? 'rgba(255,255,255,0.92)' : '#4a3416',
              opacity: status === 'locked' ? 0.92 : 1,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 8,
                marginBottom: 6,
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 800, opacity: 0.85 }}>{stageLabelHe(i)}</div>
              <span
                aria-label={statusLabel}
                title={statusLabel}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: 12,
                  fontWeight: 800,
                  color:
                    status === 'completed'
                      ? '#2e7d46'
                      : status === 'locked'
                        ? 'rgba(255,255,255,0.9)'
                        : highlighted
                          ? '#8a5a12'
                          : '#6b5a3e',
                }}
              >
                {status === 'completed' ? (
                  <>
                    <Check size={14} /> {statusLabel}
                  </>
                ) : status === 'locked' ? (
                  <>
                    <Lock size={14} /> {statusLabel}
                  </>
                ) : (
                  statusLabel
                )}
              </span>
            </div>

            <div
              style={{
                fontSize: 17,
                fontWeight: 900,
                lineHeight: 1.25,
                marginBottom: 10,
                color: status === 'locked' ? '#fff' : '#3d2a12',
              }}
            >
              {stageTitleHe(i)}
            </div>

            <div
              style={{
                height: 10,
                borderRadius: 999,
                background: status === 'locked' ? 'rgba(0,0,0,0.22)' : 'rgba(125,82,38,0.18)',
                overflow: 'hidden',
                marginBottom: 6,
              }}
            >
              <div
                style={{
                  width: `${Math.max(0, Math.min(100, pct))}%`,
                  height: '100%',
                  borderRadius: 999,
                  background:
                    status === 'completed'
                      ? 'linear-gradient(90deg, #3d9b5f, #2e7d46)'
                      : highlighted
                        ? 'linear-gradient(90deg, #e0b15a, #c9a24a)'
                        : 'linear-gradient(90deg, #7a9e5a, #5f8a45)',
                  transition: 'width 0.35s ease',
                }}
              />
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                marginBottom: status === 'locked' ? 6 : 0,
                color: status === 'locked' ? 'rgba(255,255,255,0.88)' : '#6b5a3e',
              }}
            >
              {pct}%
            </div>

            {status === 'locked' && (
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  color: 'rgba(255,255,255,0.88)',
                }}
              >
                יש להשיג {needPct}% בשלב הקודם
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default function Landing({
  session,
  progress = { letters: {}, completed: {} },
  onResume,
  onStartFresh,
  onOpenStage,
}: {
  session?: StudentSession | null;
  progress?: ProgressData;
  onResume?: () => void;
  onStartFresh?: (to: string) => void;
  onOpenStage?: (stageIndex: number) => void;
}) {
  const canResume = isCompleteSession(session);

  const goJoinGuest = () => {
    if (onStartFresh) onStartFresh('/join/guest');
    else nav('/join/guest');
  };
  const goJoinClass = () => {
    if (onStartFresh) onStartFresh('/join');
    else nav('/join');
  };

  return (
    <HeroBg
      image={asset('/bg-landing-maze.jpg')}
      overlay="linear-gradient(170deg, rgba(15,40,30,0.38) 0%, rgba(20,70,55,0.28) 45%, rgba(30,90,70,0.38) 100%)"
    >
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 20px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'fixed',
            top: 'max(12px, env(safe-area-inset-top))',
            left: 'max(12px, env(safe-area-inset-left))',
            zIndex: 20,
          }}
        >
          <FullscreenFab />
        </div>

        <div className="pop-in" style={{ textAlign: 'center', color: '#fff', marginBottom: 28 }}>
          <div style={{ fontSize: 52, marginBottom: 6, filter: 'drop-shadow(0 3px 12px rgba(0,0,0,0.4))' }}>
            🗺️✨
          </div>
          <h1
            style={{
              fontSize: 'clamp(34px, 8vw, 48px)',
              fontWeight: 900,
              lineHeight: 1.15,
              margin: '0 0 12px',
              textShadow: '0 3px 18px rgba(0,0,0,0.5)',
            }}
          >
            מנווטים בארמית
          </h1>
          <p
            style={{
              fontSize: 'clamp(17px, 4vw, 21px)',
              fontWeight: 700,
              maxWidth: 420,
              margin: '0 auto',
              lineHeight: 1.55,
              textShadow: '0 2px 10px rgba(0,0,0,0.45)',
            }}
          >
            אב-טיפוס · שלושה שלבים: מעברית לארמית, ארמית בסיסית, ולקראת הגמרא. מגלים מילים, אוספים מגילות, ופותחים חדרי צופן. ⭐
          </p>
          {testUnlockAll() && (
            <p
              style={{
                display: 'inline-block',
                margin: '14px auto 0',
                background: '#ea580c',
                color: '#fff',
                borderRadius: 999,
                padding: '6px 14px',
                fontSize: 14,
                fontWeight: 800,
                boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
              }}
            >
              🧪 מצב בדיקה – כל השלבים פתוחים
            </p>
          )}
        </div>

        <StageOverviewCards
          progress={progress}
          canOpen={canResume}
          onOpenStage={onOpenStage}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%', maxWidth: 360 }}>
          {canResume && (
            <button
              className="btn gold"
              style={{ fontSize: 20, padding: '16px 24px', fontWeight: 900, whiteSpace: 'nowrap' }}
              onClick={() => onResume?.()}
            >
              ▶️ המשיכו לשחק{session?.nickname ? ` — ${session.nickname}` : ''}
            </button>
          )}
          <button
            className="btn gold"
            style={{
              fontSize: canResume ? 17 : 20,
              padding: canResume ? '14px 22px' : '16px 24px',
              fontWeight: 900,
              whiteSpace: 'nowrap',
              ...(canResume
                ? {
                    background: 'rgba(255,255,255,0.22)',
                    border: '2px solid rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(6px)',
                    color: '#fff',
                  }
                : {}),
            }}
            onClick={goJoinGuest}
          >
            {canResume ? '🎮 משחק חדש / החלפת משתמש' : '🎮 התחילו לשחק!'}
          </button>
          <button
            className="btn"
            style={{
              fontSize: 17,
              padding: '14px 22px',
              fontWeight: 800,
              background: 'rgba(255,255,255,0.22)',
              border: '2px solid rgba(255,255,255,0.7)',
              backdropFilter: 'blur(6px)',
            }}
            onClick={goJoinClass}
          >
            🏫 יש לי קוד כיתה
          </button>
          <button
            className="btn"
            style={{ background: 'transparent', boxShadow: 'none', fontSize: 15, opacity: 0.9, fontWeight: 700 }}
            onClick={() => nav('/teacher')}
          >
            👩‍🏫 כניסת מורים
          </button>
        </div>

        <div
          aria-label="ייחוסים"
          style={{
            position: 'fixed',
            left: 'max(12px, env(safe-area-inset-left))',
            bottom: 'max(12px, env(safe-area-inset-bottom))',
            zIndex: 30,
            maxWidth: 'min(300px, calc(100vw - 24px))',
            padding: '8px 10px',
            borderRadius: 8,
            background: 'rgba(0,0,0,0.38)',
            backdropFilter: 'blur(4px)',
            textAlign: 'right',
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.92)',
              fontSize: 13,
              margin: '0 0 2px',
              lineHeight: 1.45,
              textShadow: '0 1px 4px rgba(0,0,0,0.55), 0 0 1px rgba(0,0,0,0.8)',
              fontWeight: 700,
            }}
          >
            משחק זה נוצר על ידי יותם חדד ©
          </p>
          <a
            href={feedbackComposeUrl()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              color: 'rgba(255,255,255,0.88)',
              fontSize: 12,
              fontWeight: 600,
              lineHeight: 1.4,
              padding: '4px 0 6px',
              textDecoration: 'underline',
              textUnderlineOffset: 2,
              textShadow: '0 1px 4px rgba(0,0,0,0.55), 0 0 1px rgba(0,0,0,0.8)',
              direction: 'ltr',
              unicodeBidi: 'isolate',
              cursor: 'pointer',
              pointerEvents: 'auto',
            }}
          >
            yosefyotam@gmail.com
          </a>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 12,
              margin: 0,
              lineHeight: 1.45,
              textShadow: '0 1px 4px rgba(0,0,0,0.55), 0 0 1px rgba(0,0,0,0.8)',
              fontWeight: 600,
            }}
          >
            מבוסס על מנוע המשחקים של חפציה בן ארצי
          </p>
        </div>
      </div>
    </HeroBg>
  );
}
