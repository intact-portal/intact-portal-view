import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, UrlSerializer} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {AppRoutingModule, MyUrlSerializer} from './app-routing.module';
import {HomeDashboardModule} from './home-dashboard/home-dashboard.module';
import {FeatureDatasetService} from './home-dashboard/featured-dataset/service/feature-dataset.service';
import {InteractionsResultsModule} from './interactions/interactions-results/interactions-results.module';
import {SearchService} from './home-dashboard/search/service/search.service';
import {InteractionsSearchService} from './interactions/shared/service/interactions-search.service';
import {InteractionDetailsModule} from './interactions/interaction-details/interaction-details.module';
import {InteractionsDetailsService} from './interactions/shared/service/interactions-details.service';
import {NetworkSearchService} from './interactions/shared/service/network-search.service';
import {InteractomesComponent} from './interactomes/interactomes.component';
import {DocumentationModule} from './navigation/documentation/documentation.module';
import {DownloadModule} from './navigation/download/download.module';
import {InteractomeComponent} from './interactomes/interactome/interactome.component';
import {LayoutModule} from './layout/layout.module';
import {NetworkViewService} from './interactions/shared/service/network-view.service';
import {MatButtonModule} from '@angular/material/button';
import {FilterService} from './interactions/shared/service/filter.service';
import {AboutComponent} from './navigation/about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_BASE_HREF, PlatformLocation} from '@angular/common';
import {RedirectComponent} from './navigation/redirect/redirect.component';
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';
import {environment} from '../environments/environment';
import {MarkdownModule} from './navigation/documentation/shared/markdown/markdown.module';
import { StatisticsComponent } from './navigation/about/statistics/statistics.component';
import { Panel1Component } from './navigation/about/statistics/panel1/panel1.component';
import { Panel2PubExpComponent } from './navigation/about/statistics/panel2-pub-exp/panel2-pub-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    InteractomesComponent,
    InteractomeComponent,
    AboutComponent,
    RedirectComponent,
    StatisticsComponent,
    Panel1Component,
    Panel2PubExpComponent,
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
    DownloadModule,
    AppRoutingModule,
    MatButtonModule,
    NgxGoogleAnalyticsModule.forRoot(environment.analytics_id),
    NgxGoogleAnalyticsRouterModule,
    MarkdownModule
  ],
  providers: [
    FeatureDatasetService,
    SearchService,
    InteractionsSearchService,
    InteractionsDetailsService,
    FilterService,
    NetworkSearchService,
    NetworkViewService,
    {provide: APP_BASE_HREF, useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(), deps: [PlatformLocation]},
    {provide: UrlSerializer, useClass: MyUrlSerializer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
