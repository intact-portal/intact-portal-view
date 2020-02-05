import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeDashboardModule} from './home-dashboard/home-dashboard.module';
import {FeatureDatasetService} from './home-dashboard/featured-dataset/service/feature-dataset.service';
import {InteractionsResultsModule} from './interactions/interactions-results/interactions-results.module';
import {SearchService} from './home-dashboard/search/service/search.service';
import {InteractorsSearchService} from './interactions/shared/service/interactors-search.service';
import {InteractionsSearchService} from './interactions/shared/service/interactions-search.service';
import {InteractionDetailsModule} from './interactions/interaction-details/interaction-details.module';
import {InteractionsDetailsService} from './interactions/shared/service/interactions-details.service';
import {NetworkSearchService} from './interactions/shared/service/network-search.service';
import {DownloadComponent} from './download/download.component';
import {MarkdownModule} from 'ngx-markdown';
import {InteractomesComponent} from './interactomes/interactomes.component';
import {DocumentationModule} from './documentation/documentation.module';
import {InteractomeComponent} from './interactomes/interactome/interactome.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent,
    InteractomesComponent,
    InteractomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HomeDashboardModule,
    InteractionsResultsModule,
    InteractionDetailsModule,
    DocumentationModule,
    AppRoutingModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    FeatureDatasetService,
    SearchService,
    InteractorsSearchService,
    InteractionsSearchService,
    InteractionsDetailsService,
    NetworkSearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
