import type { ProgressData } from './api';
import { UNITS } from '../data/units';
import { starsFor } from '../games/ui';
import { isSkipped } from './progressUtil';

export interface JourneyTotals {
  stars: number;
  points: number;
  maxPoints: number;
  completedCount: number;
  maxStars: number;
}

export function maxJourneyStars(): number {
  return UNITS.reduce((n, u) => n + u.activities.length, 0) * 3;
}

export function computeJourneyTotals(progress: ProgressData): JourneyTotals {
  let stars = 0;
  let points = 0;
  let maxPoints = 0;
  let completedCount = 0;

  for (const [activityId, rec] of Object.entries(progress.completed)) {
    if (isSkipped(progress, activityId)) continue;
    stars += starsFor(rec.score, rec.max);
    points += rec.score;
    maxPoints += rec.max;
    completedCount++;
  }

  return { stars, points, maxPoints, completedCount, maxStars: maxJourneyStars() };
}
