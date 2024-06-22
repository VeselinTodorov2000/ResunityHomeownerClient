import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Homeowner} from '../models/homeowner';

@Component({
  selector: 'app-header-foundation',
  templateUrl: './header-foundation.component.html',
  styleUrls: ['./header-foundation.component.css']
})
export class HeaderFoundationComponent {
  @Input() public currentUser!: Homeowner;
  @Input() public title!: string;

  constructor(public router: Router) {
  }

  redirectToHome() {
    this.router.navigate(['']);
  }

}
