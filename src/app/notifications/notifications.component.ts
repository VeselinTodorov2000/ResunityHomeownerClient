import { Component, OnInit } from '@angular/core';
import { NotificationType } from '../models/notification-type';
import { Notification } from '../models/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from '../models/building';
import { Homeowner } from '../models/homeowner';
import { MatDialog } from '@angular/material/dialog';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { BuildingsService } from '../services/buildings.service';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  public currentUser!: Homeowner;

  public building!: Building;
  buildingId = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private readonly buildingsService: BuildingsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.buildingId = params.get('id') || '';
    });
    this.buildingsService
      .getBuildingDetails(this.buildingId)
      .pipe(
        take(1),
        tap((data) => (this.building = data))
      )
      .subscribe();

    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '');
  }

  // getNotificationsByType(notificationType: NotificationType): Notification[] {
  //   return this.building.notifications.filter(
  //     (notification: Notification) => notification.type === notificationType
  //   );
  // }

  getNotificationsByActiveness(isActive: boolean): Notification[] {
    return this.building.notifications.filter(
      (notification: Notification) => notification.isActive === isActive
    );
  }


  protected readonly NotificationType = NotificationType;

  expireNotification(notification: Notification) {
    notification.isActive = false;
  }

  reopenNotification(notification: Notification) {
    notification.isActive = true;
  }

  getNotificationCreationDay(notification: Notification) {
    console.log(notification);
    
    let date = notification.due;
    return date.getDay() + '.' + date.getMonth() + '.' + date.getFullYear();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateNotificationComponent, {
      width: '600px',
      height: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.building.notifications.push(result);
      }
    });
  }
}
