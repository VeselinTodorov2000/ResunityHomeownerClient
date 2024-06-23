import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { APP_BASE_HREF } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuildingSelectionComponent } from './building-selection/building-selection.component';
import { HeaderFoundationComponent } from './header-foundation/header-foundation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuildingGeneralComponent } from './building-general/building-general.component';
import { CashierComponent } from './cashier/cashier.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CreateNotificationComponent } from './notifications/create-notification/create-notification.component';
import { TransactionsComponent } from './cashier/transactions/transactions.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivityComponent } from './activity/activity.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuildingSelectionComponent,
    HeaderFoundationComponent,
    BuildingGeneralComponent,
    CashierComponent,
    NotificationsComponent,
    ActivitiesComponent,
    CreateNotificationComponent,
    TransactionsComponent,
    ActivityComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
