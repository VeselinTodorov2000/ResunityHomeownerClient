import { NotificationType } from './notification-type';

export interface Notification {
  description: string,
  //type: NotificationType,
  creationDate: Date,
  isActive: boolean,
  buildingId?: string,
  due: Date

}
