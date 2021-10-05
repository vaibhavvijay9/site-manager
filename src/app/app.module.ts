import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { SiteListComponent } from './components/site-list/site-list.component';
import { SiteCardComponent } from './components/site-card/site-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { BadgeComponent } from './components/badge/badge.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    SiteListComponent,
    SiteCardComponent,
    ProgressBarComponent,
    BadgeComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
