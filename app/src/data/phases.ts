import type { PhaseId, Unit } from './types';

/**
 * שלושת שלבי האב-טיפוס.
 * הסדר הליניארי של היחידות נקבע ב-curriculum.ts — כאן רק זהות השלב והצבע.
 */
export interface PhaseMeta {
  id: PhaseId;
  index: number;
  title: string;
  kicker: string;
  subtitle: string;
  /** רקע מצויר למסכי פעילות */
  background: string;
  /** צבעי תחנות בתוך השלב */
  swatches: string[];
  /** גוון שביל */
  path: number;
  /** שכבת אור על הנוף */
  wash: string;
}

export const PHASES: PhaseMeta[] = [
  {
    id: 'he-ar',
    index: 0,
    title: 'מעברית לארמית',
    kicker: 'שלב א׳',
    subtitle: 'מילים מוכרות, סיומת א׳, תחיליות, וארמית שכבר חיה בתוך העברית.',
    background: '/bg-stage1.jpg',
    swatches: ['#8a5a2b', '#6b7c3a', '#b5682a', '#a67c3d', '#5f6b3a', '#c4862a'],
    path: 0xe7c98a,
    wash: 'rgba(196, 146, 64, 0.2)',
  },
  {
    id: 'basic',
    index: 1,
    title: 'ארמית בסיסית',
    kicker: 'שלב ב׳',
    subtitle: 'אוצר מילים, כינויי גוף, פעלים, ודפוסי דקדוק קצרים.',
    background: '/bg-stage2.jpg',
    swatches: ['#1e4b8a', '#2a6f8f', '#c4a35a', '#163666', '#3d6e99', '#8d6b2f'],
    path: 0xb7c6dc,
    wash: 'rgba(30, 70, 130, 0.18)',
  },
  {
    id: 'gemara',
    index: 2,
    title: 'לקראת הגמרא',
    kicker: 'שלב ג׳',
    subtitle: 'מילות סוגיא, שאלה ותשובה, שלד, ושורות גמרא קצרות.',
    background: '/bg-activity-maze.jpg',
    swatches: ['#7a3e22', '#c4a15a', '#5c2e1a', '#a16207', '#8d4a2b', '#e0b15a'],
    path: 0xe6c49a,
    wash: 'rgba(122, 62, 34, 0.18)',
  },
];

const PHASE_BY_ID: Record<string, PhaseId> = {
  'first-steps': 'he-ar',
  family: 'he-ar',
  prefixes: 'he-ar',
  numbers: 'he-ar',
  body: 'he-ar',
  everyday: 'he-ar',
  'spiral-aleph': 'he-ar',
  'scroll-aleph': 'he-ar',
  'gate-aleph': 'he-ar',

  questions: 'basic',
  nature: 'basic',
  'verbs-known': 'basic',
  'verbs-new': 'basic',
  speaker: 'basic',
  adjectives: 'basic',
  'here-there': 'basic',
  conjugate: 'basic',
  'rescue-scroll': 'basic',
  'spiral-basic': 'basic',
  'gate-scroll': 'basic',

  'mixed-sentences': 'gemara',
  reading: 'gemara',
  'sugya-words': 'gemara',
  'sugya-skeleton': 'gemara',
  'gemara-passage': 'gemara',
  'scroll-gemara': 'gemara',
  'gate-sugya': 'gemara',
  final: 'gemara',
};

export function phaseOf(unitId: string): PhaseId {
  return PHASE_BY_ID[unitId] ?? 'he-ar';
}

export function phaseMeta(id: PhaseId | undefined): PhaseMeta {
  return PHASES.find((p) => p.id === id) ?? PHASES[0];
}

export function phaseSwatch(id: PhaseId | undefined, index: number): string {
  const sw = phaseMeta(id).swatches;
  return sw[index % sw.length];
}

export function unitsInPhase(units: Unit[], id: PhaseId): Unit[] {
  return units.filter((u) => (u.phase ?? phaseOf(u.id)) === id);
}
