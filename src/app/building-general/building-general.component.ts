import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Building} from '../models/building';
import {Homeowner} from '../models/homeowner';
import {NotificationType} from '../models/notification-type';
import {ActivityType} from '../models/activity-type';
import {Activity} from '../models/activity';

@Component({
  selector: 'app-building-general',
  templateUrl: './building-general.component.html',
  styleUrls: ['./building-general.component.css']
})
export class BuildingGeneralComponent implements OnInit {
  public currentUser!: Homeowner;
  public _selection!: Building;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const itemString = params['selection'];
      this._selection = JSON.parse(itemString);
      const homeownerString = params['homeowner'];
      this.currentUser = JSON.parse(homeownerString)
    });
  }

  getBuildingName(): string {
    return this._selection.buildingNumber + this._selection.buildingSubnumber + " " + this._selection.district + ', ' + this._selection.city;
  }

  getContractExpiryDate() {
    let date = new Date(this._selection.contactValidUntil);
    return date.getMonth() + "/" + date.getFullYear();
  }

  protected readonly NotificationType = NotificationType;

  getNumberOfNotificationsByType(type: NotificationType) {
    return this._selection!.notifications!
        .map(notific => notific.type)
        .filter((notificationType: NotificationType) => notificationType === type)
        .length;
  }

  protected readonly ActivityType = ActivityType;

  getNumberOfActivitiesByType(type: ActivityType) {
    return this._selection.activities
        .map((activity: Activity) => activity.type)
        .filter((activityType: ActivityType) => activityType === type)
        .length;
  }

  openActivitiesForBuilding() {
    this.router.navigate(['/activities'], {queryParams: {selection: JSON.stringify(this._selection), homeowner: JSON.stringify(this.currentUser)}});
  }

  openNotificationsForBuilding() {
    this.router.navigate(['/notifications'], {queryParams: {selection: JSON.stringify(this._selection), homeowner: JSON.stringify(this.currentUser)}});
  }

  openCashierForBuilding() {
    this.router.navigate(['/cashier'], {queryParams: {selection: JSON.stringify(this._selection), homeowner: JSON.stringify(this.currentUser)}});
  }
}
