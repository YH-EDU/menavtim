import type { Unit } from './types';
import { phaseOf } from './phases';
import { PROTOTYPE_UNITS } from './prototypeContent';

/**
 * סדר המסע באב-טיפוס.
 * יחידות קיימות נשארות כמו שהן; כאן רק הסדר, השלב, ויחידות חדשות שמשובצות ביניהן.
 * מחיקה: להוריד מזהה מהמערך ואת היחידה מ-prototypeContent.ts.
 */
export const CURRICULUM_ORDER = [
  // שלב א׳ — מעברית לארמית
  'first-steps',
  'family',
  'prefixes',
  'numbers',
  'body',
  'everyday',
  'spiral-aleph',
  'scroll-aleph',
  'gate-aleph',
  // שלב ב׳ — ארמית בסיסית
  'questions',
  'nature',
  'verbs-known',
  'verbs-new',
  'speaker',
  'adjectives',
  'here-there',
  'conjugate',
  'rescue-scroll',
  'spiral-basic',
  'gate-scroll',
  // שלב ג׳ — לקראת הגמרא
  'mixed-sentences',
  'reading',
  'sugya-words',
  'sugya-skeleton',
  'gemara-passage',
  'scroll-gemara',
  'gate-sugya',
  'final',
] as const;

export function assembleCurriculum(core: Unit[]): Unit[] {
  const byId = new Map<string, Unit>();
  for (const unit of [...core, ...PROTOTYPE_UNITS]) {
    if (byId.has(unit.id)) throw new Error(`Duplicate unit id: ${unit.id}`);
    byId.set(unit.id, unit);
  }
  return CURRICULUM_ORDER.map((id) => {
    const unit = byId.get(id);
    if (!unit) throw new Error(`Missing unit in curriculum: ${id}`);
    return { ...unit, phase: phaseOf(id) };
  });
}
