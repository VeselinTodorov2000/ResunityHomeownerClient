import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityStatus } from '../models/activity-status';
import { ActivityType } from '../models/activity-type';
import { Homeowner } from '../models/homeowner';
import { NotificationType } from '../models/notification-type';
import { StepNumber } from '../models/activity';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public currentUser: Homeowner = {
    homeownerName: 'Dimitar Dimitrov',
    howeownerCompany: 'Arteks',
    profileIcon: 'assets/profile-icon.jpg',
    buildings: [
      {
        id: 1,
        address: 'София, Център, ул. Хан Крум 1',
        apartmentsCount: 32,
        safe: {
          debit: 2000.0,
          cashierName: 'Иван Иванов',
          iban: '',
          monthlyTax: 10.5,
          transactions: [],
        },
        activities: [],
        notifications: [],
      },
      {
        id: 2,
        //buildingNumber: '50',
        //buildingSubnumber: 'В',
        //district: 'Малинова Долина',
        //city: 'София',
        // contactValidUntil: new Date(2024, 9),
        address: 'София Малинова долина 50',
        apartmentsCount: 24,
        contact: {
          name: 'Димитър Кръстев',
          phone: '0888 854 293',
        },
        safe: {
          debit: 1120.0,
          cashierName: 'Христо Христов',
          iban: 'BG10 0000 0000 0000',
          monthlyTax: 10.5,
          transactions: [
            {
              receiverIban: 'BG00 0000 0000 0001',
              date: new Date(2024, 5, 21),
              reason: 'Парапет поправка',
              amount: -124.53,
            },
            {
              receiverIban: 'BG00 0000 0000 1001',
              date: new Date(2024, 5, 21),
              reason: 'Възстановени суми',
              amount: 72.43,
            },
          ],
        },
        activities: [
          {
            name: 'Покрив',
            responsible: 'Димитър Иванов',
            status: ActivityStatus.FINISHED,
            type: ActivityType.ACTIVE,
            startDate: new Date(2023, 4, 22),
            steps: [
              {
                stepNumber: StepNumber.POLL,
                startDate: new Date(2023, 4, 22),
                isActive: false,
              },
              {
                stepNumber: StepNumber.OFFER_COLLECTION,
                startDate: new Date(2023, 4, 24),
                isActive: false,
              },
              {
                stepNumber: StepNumber.OFFER_SELECTION,
                startDate: new Date(2023, 4, 28),
                isActive: true,
              },
              {
                stepNumber: StepNumber.FUNDRAISING,
                isActive: false,
              },
            ],
          },
          {
            name: 'Саниране',
            responsible: 'Димитър Иванов',
            status: ActivityStatus.FINISHED,
            type: ActivityType.ACTIVE,
            startDate: new Date(2023, 4, 22),
            steps: [],
          },
          {
            name: 'Тераси',
            responsible: 'Димитър Иванов',
            status: ActivityStatus.FINISHED,
            type: ActivityType.FINISHED,
            startDate: new Date(2023, 4, 22),
            steps: [],
          },
        ],
        notifications: [
          {
            name: 'Not1',
            type: NotificationType.ACTIVE,
            creationDate: new Date(2024, 9, 1),
          },
          {
            name: 'Not2',
            type: NotificationType.EXPIRED,
            creationDate: new Date(2024, 2, 15),
          },
          {
            name: 'Not3',
            type: NotificationType.ACTIVE,
            creationDate: new Date(2023, 12, 30),
          },
        ],
      },
      {
        id: 3,
        // buildingNumber: '38',
        // district: 'Тракия',
        // city: 'Пловдив',
        // contactValidUntil: new Date(2025, 7),
        address: 'На майка ти в ухото',
        apartmentsCount: 20,
        safe: {
          debit: 500.0,
          cashierName: 'Ivan',
          iban: 'BG10 0000 0000 0000',
          monthlyTax: 10.5,
          transactions: [],
        },
        activities: [],
        notifications: [],
      },
      {
        id: 4,
        address: 'Плевен, Сторгозия 250',
        // buildingNumber: '250',
        // district: 'Сторгозия',
        // city: 'Плевен',
        // contactValidUntil: new Date(2025, 7),
        apartmentsCount: 52,
        safe: {
          debit: 1200.0,
          cashierName: 'Лъчезар Иванов',
          iban: 'BG10 0000 0000 0000',
          monthlyTax: 10.5,
          transactions: [],
        },
        activities: [],
        notifications: [],
      },
    ],
  };

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogin() {
    if (this.username === this.currentUser.homeownerName) {
      this.router.navigate(['/buildings']);
      sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      //  {
      //   queryParams: { selection: JSON.stringify(this.currentUser) },
      // });
    }
  }
}
