import { Component, OnInit } from '@angular/core';
import { Homeowner } from '../models/homeowner';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from '../models/building';

@Component({
  selector: 'app-building-selection',
  templateUrl: './building-selection.component.html',
  styleUrls: ['./building-selection.component.css'],
})
export class BuildingSelectionComponent implements OnInit {
  homeowner!: Homeowner;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.homeowner = JSON.parse(sessionStorage.getItem('currentUser') || '');
  }

  // selectBuilding(building: Building) {
  //   this.router.navigate(['buildings/' + building.id]); //, {queryParams: {selection: JSON.stringify(building), homeowner: JSON.stringify(homeowner)}}
  // }
}
