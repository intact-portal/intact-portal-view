import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeDashboardModule } from './home-dashboard/home-dashboard.module';
import { ContributorsComponent } from './home-dashboard/contributors/contributors.component';
import { FeatureDatasetService } from './home-dashboard/featured-dataset/service/feature-dataset.service';
import { InteractionsResultsModule } from './interactions/interactions-results/interactions-results.module';
import { SearchService } from './home-dashboard/search/service/search.service';
import { InteractorsSearchService } from './interactions/shared/service/interactors-search.service';
import { InteractionsSearchService } from './interactions/shared/service/interactions-search.service';
import { InteractionDetailsModule } from './interactions/interaction-details/interaction-details.module';
import {InteractionsDetailsService} from './interactions/shared/service/interactions-details.service';


@NgModule({
  declarations: [
    AppComponent,
    ContributorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HomeDashboardModule,
    InteractionsResultsModule,
    InteractionDetailsModule,
    AppRoutingModule
  ],
  providers: [FeatureDatasetService, SearchService, InteractorsSearchService, InteractionsSearchService, InteractionsDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
