import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeDashboardModule } from './home-dashboard/home-dashboard.module';
import { ContributorsComponent } from './home-dashboard/contributors/contributors.component';
import { FeatureDatasetService } from './home-dashboard/featured-dataset/service/feature-dataset.service';


@NgModule({
  declarations: [
    AppComponent,
    ContributorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HomeDashboardModule
  ],
  providers: [FeatureDatasetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
