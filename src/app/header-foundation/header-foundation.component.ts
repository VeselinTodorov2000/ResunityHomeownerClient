import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Homeowner } from '../models/homeowner';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-foundation',
  templateUrl: './header-foundation.component.html',
  styleUrls: ['./header-foundation.component.css'],
})
export class HeaderFoundationComponent {
  @Input() currentUser!: Homeowner;
  @Input() public title!: string;

  constructor(public router: Router, private location: Location) {
    const user = sessionStorage.getItem('currentUser');
    if (user !== null) {
      this.currentUser = JSON.parse(user);
    }
  }

  redirectToHome() {
    this.router.navigate(['']);
  }

  goBack() {
    this.location.back();
  }
}
