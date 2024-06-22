import { Safe } from './safe';
import { Activity } from './activity';
import { Notification } from './notification';

export interface Building {
  id: number;
  // buildingNumber: string,
  // buildingSubnumber?: string,
  // district: string,
  // city: string,
  address: string;
  //contactValidUntil: Date,
  apartmentsCount: number;
  contact?: {
    name: string;
    phone: string;
  };
  safe: Safe;
  activities: Activity[];
  notifications: Notification[];
}
