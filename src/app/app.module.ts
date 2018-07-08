import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
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
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Login2Component } from './login2/login2.component';
registerLocaleData(localeHe, 'he-IL', localHeExtra);

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PortfolioComponent,
    YieldComponent,
    TransactionComponent,
    NavbarComponent,
    HomeComponent,
    Home2Component,
    Home3Component,
    Login2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'he' } ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
