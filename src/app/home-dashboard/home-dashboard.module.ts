import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeDescriptionComponent} from './home-description/home-description.component';
import {TileMenuComponent} from './tile-menu/tile-menu.component';
import {SearchComponent} from './search/search.component';
import {HomeDashboardComponent} from './home-dashboard.component';
import {HomeDashboardRoutingModule} from './home-dashboard-routing.module';
import {NewsletterSubscriptionComponent} from './newsletter-subscription/newsletter-subscription.component';
import {TwitterDisplayComponent} from './twitter-display/twitter-display.component';
import {FeaturedDatasetComponent} from './featured-dataset/featured-dataset.component';
import {NewsComponent} from './news/news.component';
import {DatasetArchiveComponent} from './featured-dataset/dataset-archive/dataset-archive.component';
import {AdvancedSearchComponent} from './advanced-search/advanced-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import {QueryBuilderModule} from 'angular2-query-builder';
import {BatchSearchComponent} from './batch-search/batch-search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        QueryBuilderModule,
        HomeDashboardRoutingModule,
        FileUploadModule
    ],
    declarations: [
        HomeDashboardComponent,
        HomeDescriptionComponent,
        SearchComponent,
        TileMenuComponent,
        NewsletterSubscriptionComponent,
        TwitterDisplayComponent,
        FeaturedDatasetComponent,
        NewsComponent,
        DatasetArchiveComponent,
        AdvancedSearchComponent,
        BatchSearchComponent,
    ]
})
export class HomeDashboardModule {
}
