import { ActivityType } from './activity-type';
import {ActivityStatus} from './activity-status';

export enum StepNumber {
  POLL,
  OFFER_COLLECTION,
  OFFER_SELECTION,
  FUNDRAISING
}

export interface Step {
  stepNumber: StepNumber,
  startDate?: Date,
  isActive: boolean,
}

export interface Activity {
  name: string,
  responsible: string,
  status: ActivityStatus,
  type: ActivityType,
  startDate: Date,
  steps: Step[]
}
