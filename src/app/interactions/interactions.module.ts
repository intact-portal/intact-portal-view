import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionsResultsComponent } from './interactions-results/interactions-results.component';
import { InteractionsRoutingModule } from './interactions-routing.module';
import {InteractionsFiltersComponent} from './interactions-results/interactions-filters/interactions-filters.component';
import {InteractionsListComponent} from './interactions-results/interactions-list/interactions-list.component';
import {InteractionsViewerComponent} from './interactions-results/interactions-viewer/interactions-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    InteractionsRoutingModule
  ],
  declarations: [
    InteractionsFiltersComponent,
    InteractionsListComponent,
    InteractionsViewerComponent,
    InteractionsResultsComponent
  ]
})
export class InteractionsModule { }
