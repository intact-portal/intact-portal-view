import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeDescriptionComponent} from './home-description/home-description.component';
import {TileMenuComponent} from './tile-menu/tile-menu.component';
import {SearchComponent} from '../search/search.component';
import {HomeDashboardComponent} from './home-dashboard/home-dashboard.component';
import {HomeDashboardRoutingModule} from './home-dashboard-routing.module';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TwitterDisplayComponent } from './twitter-display/twitter-display.component';


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
    NewsletterComponent,
    TwitterDisplayComponent
  ]
})
export class HomeDashboardModule {
}
