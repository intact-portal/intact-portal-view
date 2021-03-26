import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeDashboardModule} from './home-dashboard/home-dashboard.module';
import {FeatureDatasetService} from './home-dashboard/featured-dataset/service/feature-dataset.service';
import {InteractionsResultsModule} from './interactions/interactions-results/interactions-results.module';
import {SearchService} from './home-dashboard/search/service/search.service';
import {InteractionsSearchService} from './interactions/shared/service/interactions-search.service';
import {InteractionDetailsModule} from './interactions/interaction-details/interaction-details.module';
import {InteractionsDetailsService} from './interactions/shared/service/interactions-details.service';
import {NetworkSearchService} from './interactions/shared/service/network-search.service';
import {DownloadComponent} from './navigation/download/download.component';
import {InteractomesComponent} from './interactomes/interactomes.component';
import {DocumentationModule} from './navigation/documentation/documentation.module';
import {InteractomeComponent} from './interactomes/interactome/interactome.component';
import {LayoutModule} from './layout/layout.module';
import {NetworkViewService} from "./interactions/shared/service/network-view.service";
import {MarkdownModule} from "./navigation/documentation/shared/markdown/markdown.module";
import {MatButtonModule} from "@angular/material/button";
import {AboutComponent} from "./navigation/about/about.component";
import {FaqComponent} from "./navigation/faq/faq.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Angulartics2Module} from "angulartics2";
import {Angulartics2GoogleAnalytics} from "angulartics2/ga";
import {GoogleAnalyticsService} from "./shared/service/google-analytics/google-analytics.service";

@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent,
    InteractomesComponent,
    InteractomeComponent,
    AboutComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    FormsModule,
    HttpClientModule,
    LayoutModule,
    HomeDashboardModule,
    InteractionsResultsModule,
    InteractionDetailsModule,
    DocumentationModule,
    AppRoutingModule,
    MarkdownModule,
    MatButtonModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ],
  providers: [
    FeatureDatasetService,
    SearchService,
    InteractionsSearchService,
    InteractionsDetailsService,
    NetworkSearchService,
    NetworkViewService,
    GoogleAnalyticsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
