import { Component, OnInit } from '@angular/core';
import {Homeowner} from '../models/homeowner';
import {Building} from '../models/building';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ActivityType} from '../models/activity-type';
import {Activity, Step} from '../models/activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

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

  protected readonly ActivityType = ActivityType;

  getActivitiesByType(type: ActivityType) : Activity[] {
    return this.selection.activities.filter((activity: Activity) => activity.type === type);
  }

  openActivity(activity: Activity) {
    
  }

  findActiveStep(steps: Step[]) {
    return steps.find(step => step.isActive);
  }
}
