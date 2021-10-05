import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { SiteListComponent } from './components/site-list/site-list.component';
import { SiteCardComponent } from './components/site-card/site-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    SiteListComponent,
    SiteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
