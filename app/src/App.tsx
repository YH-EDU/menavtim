import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  loadSession,
  clearActiveSession,
  fetchProgress,
  isCompleteSession,
  loadLastRoute,
  saveLastRoute,
  type StudentSession,
  type ProgressData,
} from './lib/api';
import Landing from './views/Landing';
import Join from './views/Join';
import JourneyMap from './views/JourneyMap';
import UnitView from './views/UnitView';
import PlayView from './views/PlayView';
import ProgressView from './views/ProgressView';
import Teacher from './views/Teacher';
import PathEdit from './views/PathEdit';
import EscapeRoomPage from './views/EscapeRoomPage';
import { trackPage } from './lib/analytics';

// ניתוב מבוסס hash — עובד בכל אחסון סטטי בלי הגדרות שרת.

/** אם נכנסו למסך הבית עם סשן פעיל — משחזרים את המסך האחרון (רענון לא «סוגר» את המשחק). */
function resolveInitialHash(): string {
  const current = window.location.hash || '#/';
  const route = current.replace(/^#\//, '').split('/').filter(Boolean)[0] || '';
  const onLanding = route === '' || route === 'landing';
  if (!onLanding) return current;

  const s = loadSession();
  if (!isCompleteSession(s)) return current;

  const last = loadLastRoute();
  const restored = last ? `#/${last}` : '#/map';
  if (restored !== current) {
    try {
      const url = `${window.location.pathname}${window.location.search}${restored}`;
      window.history.replaceState(null, '', url);
    } catch {
      window.location.hash = restored;
    }
  }
  return restored;
}

function useHash(): string {
  const [hash, setHash] = useState(resolveInitialHash);
  useEffect(() => {
    const fn = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', fn);
    return () => window.removeEventListener('hashchange', fn);
  }, []);
  return hash;
}

export function nav(to: string) {
  window.location.hash = to;
}

export default function App() {
  const hash = useHash();

  // צפיית עמוד וירטואלית בכל מעבר מסך.
  // מדלגים על הריצה הראשונה — gtag config כבר שלח את צפיית הכניסה.
  const firstView = useRef(true);
  useEffect(() => {
    if (firstView.current) { firstView.current = false; return; }
    trackPage(hash);
  }, [hash]);

  const [session, setSession] = useState<StudentSession | null>(() => {
    const s = loadSession();
    return isCompleteSession(s) ? s : null;
  });
  const [progress, setProgress] = useState<ProgressData>({ letters: {}, completed: {} });

  const refreshProgress = useCallback(async () => {
    if (!session) return;
    try {
      setProgress(await fetchProgress(session));
    } catch {
      // שרת לא זמין — ממשיכים עם מה שיש
    }
  }, [session]);

  useEffect(() => {
    refreshProgress();
  }, [refreshProgress]);

  // סנכרון סשן מ-sessionStorage (למשל תצוגת מורה שנפתחת מלוח המורה)
  useEffect(() => {
    const sync = () => {
      const s = loadSession();
      setSession(isCompleteSession(s) ? s : null);
    };
    window.addEventListener('aramit-session', sync);
    return () => window.removeEventListener('aramit-session', sync);
  }, []);

  const parts = hash.replace(/^#\//, '').split('/').filter(Boolean);
  const route = parts[0] || '';
  const joinTail = parts[1] || '';
  const isGuestJoin = route === 'join' && joinTail === 'guest';
  const needsSession = route === 'map' || route === 'unit' || route === 'play' || route === 'progress' || route === 'escape';

  // שמירת מסך המשחק האחרון — לרענון / חזרה ללשונית
  const routePath = parts.join('/');
  useEffect(() => {
    if (!isCompleteSession(session)) return;
    if (routePath) saveLastRoute(routePath);
  }, [hash, session, routePath]);

  useEffect(() => {
    if (needsSession && !isCompleteSession(session)) {
      nav('/join/guest');
    }
  }, [needsSession, session]);

  const logout = (to = '/') => {
    clearActiveSession();
    setSession(null);
    nav(to);
  };

  /** משחק חדש ממסך הבית — מוחק סשן פעיל בלבד (התקדמות לפי שם נשארת). */
  const startFresh = (to: string) => {
    clearActiveSession();
    setSession(null);
    nav(to);
  };

  let view: React.ReactNode;
  if (route === 'path-edit') {
    view = <PathEdit />;
  } else if (route === 'teacher') {
    view = <Teacher />;
  } else if (route === 'join') {
    view = (
      <Join
        guest={isGuestJoin}
        initialCode={isGuestJoin ? '' : joinTail}
        onJoined={(s) => { setSession(s); nav('/map'); }}
      />
    );
  } else if (route === '' || route === 'landing') {
    view = (
      <Landing
        session={session}
        onResume={() => nav(`/${loadLastRoute() || 'map'}`)}
        onStartFresh={startFresh}
      />
    );
  } else if (!isCompleteSession(session)) {
    view = needsSession ? null : (
      <Landing
        session={null}
        onResume={() => nav('/map')}
        onStartFresh={startFresh}
      />
    );
  } else if (route === 'map') {
    view = (
      <JourneyMap
        session={session}
        progress={progress}
        onLogout={logout}
        onSessionChange={async (s) => {
          setSession(s);
          try {
            setProgress(await fetchProgress(s));
          } catch {
            setProgress((p) => ({
              ...p,
              freeNav: s.token === 'teacher-preview' ? true : !!s.freeNav,
            }));
          }
        }}
      />
    );
  } else if (route === 'escape') {
    view = (
      <EscapeRoomPage
        session={session}
        progress={progress}
        onReported={refreshProgress}
      />
    );
  } else if (route === 'unit' && parts[1]) {
    view = <UnitView unitId={parts[1]} progress={progress} session={session} onReported={refreshProgress} />;
  } else if (route === 'play' && parts[1] && parts[2]) {
    view = (
      <PlayView
        unitId={parts[1]}
        activityId={parts[2]}
        session={session}
        onReported={refreshProgress}
      />
    );
  } else if (route === 'progress') {
    view = <ProgressView session={session} progress={progress} />;
  } else {
    view = (
      <Landing
        session={session}
        onResume={() => nav(`/${loadLastRoute() || 'map'}`)}
        onStartFresh={startFresh}
      />
    );
  }

  return <div style={{ minHeight: '100vh' }}>{view}</div>;
}
