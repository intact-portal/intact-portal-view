import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionsResultsComponent } from './interactions-results/interactions-results.component';
import { InteractionsRoutingModule } from './interactions-routing.module';
import { InteractionsFiltersComponent } from './interactions-results/interactions-filters/interactions-filters.component';
import { InteractionsListComponent } from './interactions-results/interactions-list/interactions-list.component';
import { InteractionsViewerComponent } from './interactions-results/interactions-viewer/interactions-viewer.component';
import { InteractorsTableComponent } from './interactions-results/interactions-list/interactors-table/interactors-table.component';
import { InteractionsTableComponent } from './interactions-results/interactions-list/interactions-table/interactions-table.component';
import { InteractionsPagerComponent } from './interactions-results/interactions-list/interactions-pager/interactions-pager.component';
import { InteractionsDetailsComponent } from './interactions-details/interactions-details.component';
import { DetailsViewerComponent } from './interactions-details/details-viewer/details-viewer.component';
import { DetailsComponent } from './interactions-details/details/details.component';

@NgModule({
  imports: [
    CommonModule,
    InteractionsRoutingModule
  ],
  declarations: [
    InteractionsFiltersComponent,
    InteractionsListComponent,
    InteractionsViewerComponent,
    InteractionsResultsComponent,
    InteractorsTableComponent,
    InteractionsTableComponent,
    InteractionsPagerComponent,
    InteractionsDetailsComponent,
    DetailsViewerComponent,
    DetailsComponent
  ]
})
export class InteractionsModule { }
