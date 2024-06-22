import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from '../models/building';
import { Homeowner } from '../models/homeowner';
import { NotificationType } from '../models/notification-type';
import { ActivityType } from '../models/activity-type';
import { Activity } from '../models/activity';
import { BuildingsService } from '../services/buildings.service';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-building-general',
  templateUrl: './building-general.component.html',
  styleUrls: ['./building-general.component.css'],
})
export class BuildingGeneralComponent implements OnInit {
  public currentUser!: Homeowner;

  building!: Building;
  buildingId = '';
  monthlyTax = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly buildingService: BuildingsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        take(1),
        tap((params) => (this.buildingId = params.get('id') || ''))
      )
      .subscribe();
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '');
    this.getBuilding(this.buildingId);
  }

  getBuilding(id: string) {
    this.buildingService
      .getBuildingDetails(id)
      .pipe(
        take(1),
        tap((data) => {
          this.building = data;
          this.monthlyTax =
            this.building.safe.monthlyTax * this.building.apartmentsCount;
        })
      )
      .subscribe();
  }

  protected readonly NotificationType = NotificationType;

  getNumberOfNotificationsByType(type: NotificationType) {
    // return this.building
    //   .notifications!.map((notific) => notific.type)
    //   .filter((notificationType: NotificationType) => notificationType === type)
    //   .length;
  }

  protected readonly ActivityType = ActivityType;

  getNumberOfActivitiesByType(type: ActivityType) {
    // return this.building.activities
    //   .map((activity: Activity) => activity.type)
    //   .filter((activityType: ActivityType) => activityType === type).length;
  }

  openActivitiesForBuilding() {
    this.router.navigate(['/activities'], {
      // queryParams: {
      //   homeowner: JSON.stringify(this.currentUser),
      // },
    });
  }

  openNotificationsForBuilding() {
    this.router.navigate(['/notifications'], {
      // queryParams: {
      //   selection: JSON.stringify(this._selection),
      //   homeowner: JSON.stringify(this.currentUser),
      // },
    });
  }

  openCashierForBuilding() {
    this.router.navigate(['/cashier'], {
      // queryParams: {
      //   selection: JSON.stringify(this._selection),
      //   homeowner: JSON.stringify(this.currentUser),
      // },
    });
  }
}
