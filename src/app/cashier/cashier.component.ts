import { Component, OnInit } from '@angular/core';
import { Homeowner } from '../models/homeowner';
import { Building } from '../models/building';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../models/transaction';
import { BuildingsService } from '../services/buildings.service';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css'],
})
export class CashierComponent implements OnInit {
  currentUser!: Homeowner;
  building!: Building;
  buildingId = '';
  monthlyTax = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly buildingsService: BuildingsService
  ) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '');
    this.route.paramMap
      .pipe(
        take(1),
        tap((params) => (this.buildingId = params.get('id') || ''))
      )
      .subscribe();
    this.getBuilding();
  }

  getBuilding() {
    this.buildingsService
      .getBuildingDetails(this.buildingId)
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

  openTransactions(transactions: Transaction[]) {
    this.router.navigate(['/transactions'], {
      queryParams: { selection: JSON.stringify(transactions) },
    });
  }
}
