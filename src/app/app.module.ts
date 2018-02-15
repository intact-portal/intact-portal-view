import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeDashboardModule } from './home-dashboard/home-dashboard.module';
import { ContributorsComponent } from './home-dashboard/contributors/contributors.component';


@NgModule({
  declarations: [
    AppComponent,
    ContributorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
