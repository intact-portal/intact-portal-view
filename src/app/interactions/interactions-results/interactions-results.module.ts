import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InteractionsResultsComponent} from './interactions-results.component';
import {InteractionsRoutingModule} from './interactions-routing.module';
import {InteractionsFiltersComponent} from './interactions-filters/interactions-filters.component';
import {InteractionsListComponent} from './interactions-list/interactions-list.component';
import {InteractionsViewerComponent} from './interactions-viewer/interactions-viewer.component';
import {InteractorsTableComponent} from './interactions-list/interactors-table/interactors-table.component';
import {InteractionsTableComponent} from './interactions-list/interactions-table/interactions-table.component';
import {InteractionsPagerComponent} from './interactions-list/interactions-pager/interactions-pager.component';
import {InteractionDetailsModule} from '../interaction-details/interaction-details.module';
import {Ng5SliderModule} from 'ng5-slider';

@NgModule({
  imports: [
    CommonModule,
    InteractionsRoutingModule,
    InteractionDetailsModule,
    Ng5SliderModule
  ],
  declarations: [
    InteractionsFiltersComponent,
    InteractionsListComponent,
    InteractionsViewerComponent,
    InteractionsResultsComponent,
    InteractorsTableComponent,
    InteractionsTableComponent,
    InteractionsPagerComponent
  ]
})
export class InteractionsResultsModule { }
