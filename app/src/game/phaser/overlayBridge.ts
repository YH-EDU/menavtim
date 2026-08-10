import type { ProgressData } from '../../lib/api';
import type { JourneyTotals } from '../../lib/journeyTotals';

export interface StationScreenState {
  activityId: string;
  unitId: string;
  unitIndex: number;
  unitTitle: string;
  type: string;
  label: string;
  idx: number;
  screenX: number;
  screenY: number;
  unlocked: boolean;
  completed: boolean;
  isCurrent: boolean;
}

export interface UnitLabelScreenState {
  unitIndex: number;
  unitTitle: string;
  color: string;
  screenX: number;
  screenY: number;
}

export type GoalOverlayMode = 'locked' | 'enter' | 'medal';

export interface GoalMedalScreenState {
  screenX: number;
  screenY: number;
  visible: boolean;
  mode: GoalOverlayMode;
  totals: JourneyTotals;
  allComplete: boolean;
}

/** Point players toward הצופן הארמי after all learning stations are done. */
export interface EscapeGuideScreenState {
  screenX: number;
  screenY: number;
  visible: boolean;
}

export interface JourneyOverlaySync {
  stations: StationScreenState[];
  unitLabels: UnitLabelScreenState[];
  progress: ProgressData;
  goalMedal: GoalMedalScreenState | null;
  escapeGuide: EscapeGuideScreenState | null;
}

export interface JourneyOverlayBridge {
  onSync: (data: JourneyOverlaySync) => void;
  onStationClick: (unitId: string, activityId: string) => void;
}

export const OVERLAY_BRIDGE_KEY = 'journeyOverlayBridge';
