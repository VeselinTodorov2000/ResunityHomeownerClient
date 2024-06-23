import {Component, OnInit} from '@angular/core';
import {Activity, StepNumber} from "../models/activity";
import {ActivityStatus} from "../models/activity-status";
import {ActivityType} from "../models/activity-type";
import {Homeowner} from "../models/homeowner";
import {Offer} from "../models/offer";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  currentUser!: Homeowner;
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

  offers: Offer[] = [
    {
      executor: "Людмил Събев",
      description: "Фирма Болгарстрой",
      price: 116.28
    }
  ];

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '');
  }

  activityStatusNames = ActivityStatus;
  activityTypeNames = ActivityType;

  currentStepIndex: number = 0;

  stepNames = StepNumber;
  offerForm = new FormGroup({
    activityDescription: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  getStepName(step: StepNumber): string {
    switch (step) {
      case StepNumber.POLL:
        return 'POLL';
      case StepNumber.OFFER_COLLECTION:
        return 'OFFER_COLLECTION';
      case StepNumber.OFFER_SELECTION:
        return 'OFFER_SELECTION';
      case StepNumber.FUNDRAISING:
        return 'FUNDRAISING';
      default:
        return 'Unknown Step';
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
    this.offers.push({
      executor: this.currentUser.homeOwnerName,
      description: this.offerForm.get('activityDescription')?.value!,
      price: parseFloat(this.offerForm.get('price')?.value!)
    });
    this.currentStepIndex++;
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
