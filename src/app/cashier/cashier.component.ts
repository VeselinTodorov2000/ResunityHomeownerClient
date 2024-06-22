import { Component, OnInit } from '@angular/core';
import {Homeowner} from '../models/homeowner';
import {Building} from '../models/building';
import {ActivatedRoute, Router} from '@angular/router';
import {Transaction} from '../models/transaction';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {

  public currentUser!: Homeowner;
  public selection!: Building;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const itemString = params['selection'];
      this.selection = JSON.parse(itemString);
      const homeownerString = params['homeowner'];
      this.currentUser = JSON.parse(homeownerString)
    });
  }

  getBuildingName(): string {
    return this.selection.buildingNumber + this.selection.buildingSubnumber + " " + this.selection.district + ', ' + this.selection.city;
  }

  openTransactions(transactions: Transaction[]) {
    this.router.navigate(['/transactions'], {queryParams: {selection: JSON.stringify(transactions)}});
  }
}
