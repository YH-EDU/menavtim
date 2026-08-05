import React from 'react';
import { UNITS } from '../data/units';
import GameHost from '../games/GameHost';
import { reportAttempt, type StudentSession } from '../lib/api';
import type { ActivityResult } from '../data/types';
import { starsFor } from '../games/ui';
import { LS_FLY_STARS } from './StarHud';
import { nav } from '../App';
import { SoftPageShell } from '../ui/PageShell';
import { FeedbackButton } from '../ui/Feedback';

export default function PlayView({
  unitId,
  activityId,
  session,
  onReported,
}: {
  unitId: string;
  activityId: string;
  session: StudentSession;
  onReported: () => void;
}) {
  const showFeedback = session.token === 'guest' || session.token === 'teacher-preview';
  const unit = UNITS.find((u) => u.id === unitId);
  const activity = unit?.activities.find((a) => a.id === activityId);
  if (!unit || !activity) {
    nav('/map');
    return null;
  }

  const done = async (r: ActivityResult) => {
    try {
      await reportAttempt(session, activity.id, unit.id, r.score, r.max, r.letters);
    } catch {
      // גם אם הדיווח נכשל — לא חוסמים את הילד
    }
    sessionStorage.setItem(LS_FLY_STARS, String(starsFor(r.score, r.max)));
    onReported();
    sessionStorage.setItem('aramit_focus_act', activity.id);
    nav('/map');
  };

  return (
    <SoftPageShell
      image="/menavtim-baaramit/bg-activity-maze.jpg"
      opacity={0.44}
      overlay="rgba(248, 245, 238, 0.58)"
      seed={activity.id}
    >
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '20px 16px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
          <button
            className="btn small"
            style={{ background: 'transparent', boxShadow: 'none', color: 'var(--teal-dark)', fontWeight: 700 }}
            onClick={() => {
              sessionStorage.setItem('aramit_focus_act', activity.id);
              nav('/map');
            }}
          >
            → חזרה למפת המסע
          </button>
          {showFeedback && <FeedbackButton compact />}
        </div>
        <GameHost key={activity.id} activity={activity} onDone={done} />
      </div>
    </SoftPageShell>
  );
}
