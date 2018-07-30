import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { YieldComponent } from './yield/yield.component';
import { TransactionComponent } from './transaction/transaction.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import localeHe from '@angular/common/locales/he';
import localHeExtra from '@angular/common/locales/extra/he';
import { registerLocaleData } from '@angular/common';
import { HoldingsChartComponent } from './holdings-chart/holdings-chart.component';
import { YieldsChartComponent } from './yields-chart/yields-chart.component';
registerLocaleData(localeHe, 'he-IL', localHeExtra);

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'holdings', component: PortfolioComponent },
  { path: 'yields', component: YieldComponent },
  { path: 'transactions', component: TransactionComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    PortfolioComponent,
    YieldComponent,
    TransactionComponent,
    NavbarComponent,
    HomeComponent,
    HoldingsChartComponent,
    YieldsChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'he' } ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
