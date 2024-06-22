import {Component, OnInit} from '@angular/core';
import {Activity, StepNumber} from "../models/activity";
import {ActivityStatus} from "../models/activity-status";
import {ActivityType} from "../models/activity-type";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activity: Activity = {
    name: 'Примерна Дейност',
    responsible: 'Иван Иванов',
    status: ActivityStatus.IN_PROGRESS,
    type: ActivityType.ACTIVE,
    startDate: new Date(),
    steps: [
      {stepNumber: StepNumber.POLL, startDate: new Date(), isActive: true},
      {stepNumber: StepNumber.OFFER_COLLECTION, isActive: false},
      {stepNumber: StepNumber.OFFER_SELECTION, isActive: false},
      {stepNumber: StepNumber.FUNDRAISING, isActive: false}
    ]
  };

  ngOnInit(): void {
  }
  activityStatusNames = ActivityStatus;
  activityTypeNames = ActivityType;

  currentStepIndex: number = 0;

  stepNames = StepNumber;

  getStepName(step: StepNumber): string {
    switch (step) {
      case StepNumber.POLL: return 'POLL';
      case StepNumber.OFFER_COLLECTION: return 'OFFER_COLLECTION';
      case StepNumber.OFFER_SELECTION: return 'OFFER_SELECTION';
      case StepNumber.FUNDRAISING: return 'FUNDRAISING';
      default: return 'Unknown Step';
    }
  }

  getActivityStatusName(status: ActivityStatus): string {
    return ActivityStatus[status];
  }

  getActivityTypeName(type: ActivityType): string {
    return ActivityType[type];
  }

  onVote(): void {
    this.currentStepIndex++;
  }

  onAddOffer(): void {
    // Implement the logic to add an offer
  }

  onFundraise(): void {
    // Implement the logic to confirm fundraising
  }

  onStepChange(event: any): void {
    this.currentStepIndex = event.selectedIndex;
  }

  onPay() {

  }
}
