import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityStatus } from '../models/activity-status';
import { ActivityType } from '../models/activity-type';
import { Homeowner } from '../models/homeowner';
import { NotificationType } from '../models/notification-type';
import { StepNumber } from '../models/activity';
import { UsersService } from '../services/users.service';
import { catchError, of, take, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  currentUser!: Homeowner;

  constructor(
    private router: Router,
    private readonly usersService: UsersService,
    private readonly snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    sessionStorage.clear();
  }

  onLogin() {
    this.usersService
      .login(this.username, this.password)
      .pipe(
        take(1),
        tap((user) => {
          this.currentUser = user;
          sessionStorage.setItem(
            'currentUser',
            JSON.stringify(this.currentUser)
          );
          this.router.navigate(['/buildings']);
        }),
        catchError((error) => {
          if (error.status === 500) {
            this.snackBar.open('Wrong user credentials.', 'Close', {
              duration: 3000,
            }); 
          }
          return of(null);
        }
      ))
      .subscribe();
  }
}
