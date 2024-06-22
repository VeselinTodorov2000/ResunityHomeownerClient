import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {BuildingSelectionComponent} from './building-selection/building-selection.component';
import {BuildingGeneralComponent} from './building-general/building-general.component';
import {ActivitiesComponent} from './activities/activities.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {CashierComponent} from './cashier/cashier.component';
import {TransactionsComponent} from './cashier/transactions/transactions.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'building-selection', component: BuildingSelectionComponent},
  {path: 'building-general', component: BuildingGeneralComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'cashier', component: CashierComponent},
  {path: 'transactions', component: TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
