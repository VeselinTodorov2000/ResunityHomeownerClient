import { Component, OnInit } from '@angular/core';
import {NotificationType} from '../models/notification-type';
import {Notification} from '../models/notification';
import {ActivatedRoute, Router} from '@angular/router';
import {Building} from '../models/building';
import {Homeowner} from '../models/homeowner';
import {MatDialog} from '@angular/material/dialog';
import {CreateNotificationComponent} from './create-notification/create-notification.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  public currentUser!: Homeowner;

  public selection!: Building;

  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const itemString = params['selection'];
      this.selection = JSON.parse(itemString);
      const homeowner = params['homeowner'];
      this.currentUser = JSON.parse(homeowner);
    });
  }

  getNotificationsByType(notificationType: NotificationType): Notification[] {
    return this.selection.notifications.filter((notification : Notification) => notification.type === notificationType);
  }

  protected readonly NotificationType = NotificationType;

  expireNotification(notification: Notification) {
    notification.type = NotificationType.EXPIRED;
  }

  reopenNotification(notification: Notification) {
    notification.type = NotificationType.ACTIVE;
  }

  getNotificationCreationDay(notification: Notification) {
    let date = new Date(notification.creationDate);
    return date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateNotificationComponent, {
      width: '600px',
      height: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selection.notifications.push(result);
      }
    });
  }
}
