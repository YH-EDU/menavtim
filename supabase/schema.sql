-- מנווטים בארמית — סכמת שרת המורים (Supabase)
-- אפשר להדביק את כל הקובץ שוב אחרי ריצה חלקית: טבלאות לא נדרסות,
-- מדיניות וטריגרים ופונקציות נמחקים ונוצרים מחדש.
--
-- אבטחה (בקצרה):
-- מורה נכנס עם Supabase Auth ורואה רק את הכיתות שלו.
-- מנהל הוא שורה ב-profiles עם is_admin = true, ורואה את כל הכיתות.
-- תלמיד לא נרשם כמשתמש. הפונקציה join_class בודקת קוד כיתה + אימוג׳י
-- ומחזירה כרטיס אקראי. רק מי שמחזיק בכרטיס כותב את ההתקדמות של אותו תלמיד.
-- הדפדפן (מפתח anon) לא קורא טבלאות ישירות בלי מדיניות, ולא כותב אליהן.

-- pgcrypto על Supabase יושב בסכמה extensions, לא ב-public.
-- הפונקציות למטה נועלות search_path ל-public, לכן כל קריאה מאומתת במפורש.
create schema if not exists extensions;
create extension if not exists pgcrypto with schema extensions;

-- אם ריצה קודמת התקינה את pgcrypto ב-public, מעבירים אותה ל-extensions.
do $$
begin
  if exists (
    select 1
    from pg_extension e
    join pg_namespace n on n.oid = e.extnamespace
    where e.extname = 'pgcrypto'
      and n.nspname <> 'extensions'
  ) then
    alter extension pgcrypto set schema extensions;
  end if;
end $$;

grant usage on schema extensions to postgres, service_role, anon, authenticated;

-- ── פרופיל מורה (מקושר ל-auth.users) ──
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null,
  email text not null default '',
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.classes (
  id bigint generated always as identity primary key,
  teacher_id uuid not null references public.profiles (id) on delete cascade,
  name text not null,
  code text not null unique,
  free_nav boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.students (
  id bigint generated always as identity primary key,
  class_id bigint not null references public.classes (id) on delete cascade,
  nickname text not null,
  emoji text not null default '',
  map_pos jsonb,
  created_at timestamptz not null default now(),
  last_seen timestamptz,
  unique (class_id, nickname)
);

-- כרטיסי כניסה של תלמידים. נשמר רק הגיבוב, לא הכרטיס עצמו.
create table if not exists public.student_sessions (
  token_hash text primary key,
  student_id bigint not null references public.students (id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.attempts (
  id bigint generated always as identity primary key,
  student_id bigint not null references public.students (id) on delete cascade,
  activity_id text not null,
  unit_id text not null,
  score integer not null,
  max_score integer not null,
  created_at timestamptz not null default now()
);

create table if not exists public.letter_stats (
  student_id bigint not null references public.students (id) on delete cascade,
  letter text not null,
  correct integer not null default 0,
  wrong integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (student_id, letter)
);

create index if not exists classes_teacher_idx on public.classes (teacher_id);
create index if not exists students_class_idx on public.students (class_id);
create index if not exists attempts_student_idx on public.attempts (student_id);
create index if not exists student_sessions_student_idx on public.student_sessions (student_id);

-- ── מחיקה לפני יצירה, כדי שאפשר להריץ שוב אחרי ריצה חלקית ──
drop policy if exists profiles_select on public.profiles;
drop policy if exists classes_select on public.classes;
drop policy if exists classes_insert on public.classes;
drop policy if exists classes_update on public.classes;
drop policy if exists students_select on public.students;
drop policy if exists attempts_select on public.attempts;
drop policy if exists letter_stats_select on public.letter_stats;

drop trigger if exists on_auth_user_created on auth.users;
drop trigger if exists classes_assign_code on public.classes;

drop function if exists public.student_map_pos(text, jsonb);
drop function if exists public.student_attempt(text, text, text, integer, integer, jsonb);
drop function if exists public.student_progress(text);
drop function if exists public.join_class(text, text, text);
drop function if exists public.student_from_token(text);
drop function if exists public.assign_class_code();
drop function if exists public.handle_new_teacher();
drop function if exists public.caller_is_admin();

-- ── עזרים ──
create or replace function public.caller_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    (select p.is_admin from public.profiles p where p.id = auth.uid()),
    false
  );
$$;

revoke all on function public.caller_is_admin() from public, anon, authenticated;
grant execute on function public.caller_is_admin() to authenticated;

create or replace function public.handle_new_teacher()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, name, email)
  values (
    new.id,
    coalesce(
      nullif(trim(new.raw_user_meta_data->>'name'), ''),
      nullif(trim(new.raw_user_meta_data->>'full_name'), ''),
      split_part(coalesce(nullif(new.email, ''), new.raw_user_meta_data->>'email', 'teacher'), '@', 1)
    ),
    coalesce(nullif(new.email, ''), nullif(new.raw_user_meta_data->>'email', ''), '')
  )
  on conflict (id) do update
    set email = excluded.email;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_teacher();

create or replace function public.assign_class_code()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  candidate text;
  tries int := 0;
begin
  if new.code is not null and length(trim(new.code)) >= 4 then
    return new;
  end if;
  loop
    candidate := (100000 + floor(random() * 900000))::int::text;
    exit when not exists (select 1 from public.classes where code = candidate);
    tries := tries + 1;
    if tries > 40 then
      raise exception 'לא הצלחנו ליצור קוד ייחודי';
    end if;
  end loop;
  new.code := candidate;
  return new;
end;
$$;

create trigger classes_assign_code
  before insert on public.classes
  for each row execute function public.assign_class_code();

-- מאתר תלמיד לפי כרטיס. לא חשוף לדפדפן.
create or replace function public.student_from_token(p_token text)
returns bigint
language sql
stable
security definer
set search_path = public
as $$
  select s.student_id
  from public.student_sessions s
  where s.token_hash = pg_catalog.encode(
    extensions.digest(coalesce(p_token, '')::text, 'sha256'::text),
    'hex'
  )
  limit 1;
$$;

revoke all on function public.student_from_token(text) from public, anon, authenticated;

create or replace function public.join_class(p_code text, p_nickname text, p_emoji text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code text := regexp_replace(coalesce(p_code, ''), '\s+', '', 'g');
  v_nick text := trim(coalesce(p_nickname, ''));
  v_emoji text := trim(coalesce(p_emoji, ''));
  v_class public.classes%rowtype;
  v_student public.students%rowtype;
  v_token text;
begin
  if v_code = '' or v_nick = '' then
    raise exception 'חסר קוד כיתה או כינוי';
  end if;
  if v_emoji = '' then
    raise exception 'בחרו אימוג׳י — הוא הסיסמה הקטנה שלכם';
  end if;
  if char_length(v_nick) > 30 then
    raise exception 'הכינוי ארוך מדי';
  end if;

  select * into v_class from public.classes where code = v_code;
  if not found then
    raise exception 'קוד הכיתה לא נמצא — בדקו עם המורה';
  end if;

  select * into v_student
  from public.students
  where class_id = v_class.id and nickname = v_nick;

  if found then
    if v_student.emoji <> '' and v_student.emoji <> v_emoji then
      raise exception 'השם הזה כבר קיים בכיתה עם אימוג׳י אחר. אם זה אתם — בחרו את האימוג׳י שבחרתם בפעם הראשונה, ואם לא — בחרו שם אחר';
    end if;
    if v_student.emoji = '' then
      update public.students set emoji = v_emoji where id = v_student.id;
    end if;
  else
    insert into public.students (class_id, nickname, emoji, last_seen)
    values (v_class.id, v_nick, v_emoji, now())
    returning * into v_student;
  end if;

  update public.students set last_seen = now() where id = v_student.id;

  v_token := pg_catalog.encode(extensions.gen_random_bytes(24), 'hex');
  insert into public.student_sessions (token_hash, student_id)
  values (
    pg_catalog.encode(extensions.digest(v_token::text, 'sha256'::text), 'hex'),
    v_student.id
  );

  return jsonb_build_object(
    'token', v_token,
    'classId', v_class.id,
    'className', v_class.name,
    'freeNav', v_class.free_nav
  );
end;
$$;

create or replace function public.student_progress(p_token text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_sid bigint;
  v_letters jsonb;
  v_completed jsonb;
  v_free boolean;
  v_map jsonb;
begin
  v_sid := public.student_from_token(p_token);
  if v_sid is null then
    raise exception 'החיבור פג — היכנסו שוב עם קוד הכיתה';
  end if;

  select coalesce(
    jsonb_object_agg(letter, jsonb_build_object('c', correct, 'w', wrong)),
    '{}'::jsonb
  )
  into v_letters
  from public.letter_stats
  where student_id = v_sid;

  select coalesce(jsonb_object_agg(
    activity_id,
    jsonb_build_object('score', score, 'max', max_score)
  ), '{}'::jsonb)
  into v_completed
  from (
    select distinct on (activity_id) activity_id, score, max_score
    from public.attempts
    where student_id = v_sid and max_score > 0
    order by activity_id, (score::float8 / max_score) desc, id desc
  ) best;

  select c.free_nav, s.map_pos
  into v_free, v_map
  from public.students s
  join public.classes c on c.id = s.class_id
  where s.id = v_sid;

  update public.students set last_seen = now() where id = v_sid;

  return jsonb_build_object(
    'letters', coalesce(v_letters, '{}'::jsonb),
    'completed', coalesce(v_completed, '{}'::jsonb),
    'freeNav', coalesce(v_free, false),
    'mapPos', v_map
  );
end;
$$;

create or replace function public.student_attempt(
  p_token text,
  p_activity_id text,
  p_unit_id text,
  p_score int,
  p_max int,
  p_letters jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_sid bigint;
  v_key text;
  v_val jsonb;
  v_c int;
  v_w int;
begin
  v_sid := public.student_from_token(p_token);
  if v_sid is null then
    raise exception 'החיבור פג — היכנסו שוב עם קוד הכיתה';
  end if;
  if coalesce(p_activity_id, '') = '' or coalesce(p_max, 0) <= 0 then
    raise exception 'דיווח לא תקין';
  end if;

  insert into public.attempts (student_id, activity_id, unit_id, score, max_score)
  values (v_sid, p_activity_id, coalesce(p_unit_id, ''), greatest(p_score, 0), p_max);

  if p_letters is not null and jsonb_typeof(p_letters) = 'object' then
    for v_key, v_val in select key, value from jsonb_each(p_letters)
    loop
      if char_length(v_key) < 1 or char_length(v_key) > 40 then
        continue;
      end if;
      v_c := least(200, greatest(0, coalesce((v_val->>'c')::int, 0)));
      v_w := least(200, greatest(0, coalesce((v_val->>'w')::int, 0)));
      if v_c = 0 and v_w = 0 then
        continue;
      end if;
      insert into public.letter_stats (student_id, letter, correct, wrong, updated_at)
      values (v_sid, v_key, v_c, v_w, now())
      on conflict (student_id, letter) do update
        set correct = public.letter_stats.correct + excluded.correct,
            wrong = public.letter_stats.wrong + excluded.wrong,
            updated_at = now();
    end loop;
  end if;

  update public.students set last_seen = now() where id = v_sid;
  return jsonb_build_object('ok', true);
end;
$$;

create or replace function public.student_map_pos(p_token text, p_pos jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_sid bigint;
  v_clean jsonb;
begin
  v_sid := public.student_from_token(p_token);
  if v_sid is null then
    raise exception 'החיבור פג — היכנסו שוב עם קוד הכיתה';
  end if;
  if p_pos is null or jsonb_typeof(p_pos) <> 'object' then
    raise exception 'מיקום לא תקין';
  end if;
  if (p_pos->>'x') is null or (p_pos->>'y') is null then
    raise exception 'מיקום לא תקין';
  end if;

  v_clean := jsonb_build_object(
    'x', (p_pos->>'x')::float8,
    'y', (p_pos->>'y')::float8
  );
  if p_pos ? 'faceX' then
    v_clean := v_clean || jsonb_build_object('faceX', (p_pos->>'faceX')::float8);
  end if;
  if p_pos ? 'faceY' then
    v_clean := v_clean || jsonb_build_object('faceY', (p_pos->>'faceY')::float8);
  end if;
  if p_pos ? 'pathIndex' then
    v_clean := v_clean || jsonb_build_object('pathIndex', (p_pos->>'pathIndex')::int);
  end if;
  if p_pos ? 'stageIndex' then
    v_clean := v_clean || jsonb_build_object('stageIndex', (p_pos->>'stageIndex')::int);
  end if;

  update public.students
  set map_pos = v_clean, last_seen = now()
  where id = v_sid;

  return jsonb_build_object('ok', true);
end;
$$;

revoke all on function public.join_class(text, text, text) from public;
revoke all on function public.student_progress(text) from public;
revoke all on function public.student_attempt(text, text, text, int, int, jsonb) from public;
revoke all on function public.student_map_pos(text, jsonb) from public;

grant execute on function public.join_class(text, text, text) to anon, authenticated;
grant execute on function public.student_progress(text) to anon, authenticated;
grant execute on function public.student_attempt(text, text, text, int, int, jsonb) to anon, authenticated;
grant execute on function public.student_map_pos(text, jsonb) to anon, authenticated;

-- ── הרשאות טבלאות ──
alter table public.profiles enable row level security;
alter table public.classes enable row level security;
alter table public.students enable row level security;
alter table public.student_sessions enable row level security;
alter table public.attempts enable row level security;
alter table public.letter_stats enable row level security;

revoke all on table public.profiles from anon, authenticated;
revoke all on table public.classes from anon, authenticated;
revoke all on table public.students from anon, authenticated;
revoke all on table public.student_sessions from anon, authenticated;
revoke all on table public.attempts from anon, authenticated;
revoke all on table public.letter_stats from anon, authenticated;

grant select on table public.profiles to authenticated;
grant select, insert, update on table public.classes to authenticated;
grant select on table public.students to authenticated;
grant select on table public.attempts to authenticated;
grant select on table public.letter_stats to authenticated;

-- עמודת identity דורשת שימוש בסדרה כשמורה יוצר כיתה מהדפדפן.
grant usage, select on all sequences in schema public to authenticated;

-- כתיבת התקדמות רק דרך הפונקציות למעלה (הן רצות כבעלים ועוקפות RLS).
-- אין מדיניות insert/update לתלמיד או למורה על הטבלאות האלה.

create policy profiles_select on public.profiles
  for select to authenticated
  using (id = auth.uid() or public.caller_is_admin());

create policy classes_select on public.classes
  for select to authenticated
  using (teacher_id = auth.uid() or public.caller_is_admin());

create policy classes_insert on public.classes
  for insert to authenticated
  with check (teacher_id = auth.uid());

create policy classes_update on public.classes
  for update to authenticated
  using (teacher_id = auth.uid())
  with check (teacher_id = auth.uid());

create policy students_select on public.students
  for select to authenticated
  using (
    exists (
      select 1 from public.classes c
      where c.id = students.class_id
        and (c.teacher_id = auth.uid() or public.caller_is_admin())
    )
  );

create policy attempts_select on public.attempts
  for select to authenticated
  using (
    exists (
      select 1
      from public.students s
      join public.classes c on c.id = s.class_id
      where s.id = attempts.student_id
        and (c.teacher_id = auth.uid() or public.caller_is_admin())
    )
  );

create policy letter_stats_select on public.letter_stats
  for select to authenticated
  using (
    exists (
      select 1
      from public.students s
      join public.classes c on c.id = s.class_id
      where s.id = letter_stats.student_id
        and (c.teacher_id = auth.uid() or public.caller_is_admin())
    )
  );

-- בלי זה ה-API לא רואה פונקציות חדשות עד רענון ידני של הסכמה.
notify pgrst, 'reload schema';
