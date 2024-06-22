import { Component, OnInit } from '@angular/core';
import {Homeowner} from '../models/homeowner';
import {ActivatedRoute, Router} from '@angular/router';
import {Building} from '../models/building';

@Component({
  selector: 'app-building-selection',
  templateUrl: './building-selection.component.html',
  styleUrls: ['./building-selection.component.css']
})
export class BuildingSelectionComponent implements OnInit {
  public selection!: Homeowner;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const itemString = params['selection'];
      this.selection = JSON.parse(itemString);
    });
  }

  selectBuilding(building: Building) {
    var homeowner = {
      homeownerName: this.selection.homeownerName,
      howeownerCompany: this.selection.howeownerCompany,
      profileIcon: this.selection.profileIcon,
      buildings: []
    }
    this.router.navigate(['/building-general'], {queryParams: {selection: JSON.stringify(building), homeowner: JSON.stringify(homeowner)}});
  }
}
