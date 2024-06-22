import { NotificationType } from './notification-type';

export interface Notification {
  name: string,
  type: NotificationType,
  creationDate: Date
}
