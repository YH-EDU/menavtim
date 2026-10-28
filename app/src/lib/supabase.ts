import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/** מוצג כשאין פרויקט סופאבייס, או כשהשרת לא עונה. תרגול אורח נשאר זמין. */
export const TEACHER_OFFLINE_MSG =
  'שרת המורים לא מחובר באתר הזה. אפשר לתרגל במצב אורח.';

function envValue(name: 'VITE_SUPABASE_URL' | 'VITE_SUPABASE_ANON_KEY'): string {
  const raw = import.meta.env[name];
  return typeof raw === 'string' ? raw.trim() : '';
}

export function isTeacherBackendConfigured(): boolean {
  return envValue('VITE_SUPABASE_URL') !== '' && envValue('VITE_SUPABASE_ANON_KEY') !== '';
}

function makeClient(): SupabaseClient | null {
  if (!isTeacherBackendConfigured()) return null;
  return createClient(envValue('VITE_SUPABASE_URL'), envValue('VITE_SUPABASE_ANON_KEY'), {
    auth: {
      flowType: 'pkce',
      detectSessionInUrl: true,
      persistSession: true,
      autoRefreshToken: true,
    },
  });
}

/** null כשהמשתנים לא הוגדרו — אסור לקרוא לשרת המורים. */
export const supabase = makeClient();

/**
 * חזרה אחרי גוגל: כתובת האתר בלי hash.
 * הנתב הוא hash (`#/teacher`). אם ה-hash ייכנס ל-redirectTo, פרמטר `code`
 * עלול ליפול אחריו וסופאבייס לא יראה אותו. הקוד מגיע ב-query (`?code=`),
 * והאפליקציה מעבירה אחר כך אל `#/teacher`.
 * באתר החי זו `https://yh-edu.github.io/menavtim/`.
 */
export function teacherOAuthRedirectTo(): string {
  if (typeof window === 'undefined') return '';
  return window.location.origin + import.meta.env.BASE_URL;
}

/** יש code של סופאבייס בכתובת — כדאי לפתוח את אזור המורים. */
export function teacherOAuthReturnPending(): boolean {
  if (typeof window === 'undefined') return false;
  const q = new URLSearchParams(window.location.search);
  return q.has('code') || q.has('error') || q.has('error_description');
}
