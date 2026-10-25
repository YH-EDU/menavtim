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
    swatches: ['#0f766e', '#d97706', '#15803d', '#b45309', '#0d9488', '#a16207'],
    path: 0xe4d2a8,
    wash: 'rgba(180, 120, 40, 0.18)',
  },
  {
    id: 'basic',
    index: 1,
    title: 'ארמית בסיסית',
    kicker: 'שלב ב׳',
    subtitle: 'אוצר מילים, כינויי גוף, פעלים, ודפוסי דקדוק קצרים.',
    background: '/bg-stage2.jpg',
    swatches: ['#1d4ed8', '#7c3aed', '#0369a1', '#6d28d9', '#0e7490', '#4338ca'],
    path: 0xd5dde8,
    wash: 'rgba(37, 99, 168, 0.16)',
  },
  {
    id: 'gemara',
    index: 2,
    title: 'לקראת הגמרא',
    kicker: 'שלב ג׳',
    subtitle: 'מילות סוגיא, שאלה ותשובה, שלד, ושורות גמרא קצרות.',
    background: '/bg-activity-maze.jpg',
    swatches: ['#9a3412', '#b45309', '#7f1d1d', '#a16207', '#92400e', '#78350f'],
    path: 0xedd4b8,
    wash: 'rgba(120, 53, 15, 0.16)',
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
