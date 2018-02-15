import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeDescriptionComponent} from './home-description/home-description.component';
import {TileMenuComponent} from './tile-menu/tile-menu.component';
import {SearchComponent} from '../search/search.component';
import {HomeDashboardComponent} from './home-dashboard/home-dashboard.component';
import {HomeDashboardRoutingModule} from './home-dashboard-routing.module';
import { NewsletterSubscriptionComponent } from './newsletter-subscription/newsletter-subscription.component';
import { TwitterDisplayComponent } from './twitter-display/twitter-display.component';
import { FeaturedDatasetComponent } from './featured-dataset/featured-dataset.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  imports: [
    CommonModule,
    HomeDashboardRoutingModule
  ],
  declarations: [
    HomeDashboardComponent,
    HomeDescriptionComponent,
    SearchComponent,
    TileMenuComponent,
    NewsletterSubscriptionComponent,
    TwitterDisplayComponent,
    FeaturedDatasetComponent,
    NewsComponent
  ]
})
export class HomeDashboardModule {
}
