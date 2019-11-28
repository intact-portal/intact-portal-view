import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule,MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule } from '@angular/material';
import { InteractionsResultsComponent } from './interactions-results.component';
import { InteractionsRoutingModule } from './interactions-routing.module';
import { InteractionsFiltersComponent } from './interactions-filters/interactions-filters.component';
import { InteractionsListComponent } from './interactions-list/interactions-list.component';
import { InteractionsViewerComponent } from './interactions-viewer/interactions-viewer.component';
import { InteractorsTableComponent } from './interactions-list/interactors-table/interactors-table.component';
import { InteractionsTableComponent } from './interactions-list/interactions-table/interactions-table.component';
import { InteractionsPagerComponent } from './interactions-list/interactions-pager/interactions-pager.component';
import {InteractionDetailsModule} from '../interaction-details/interaction-details.module';

@NgModule({
  imports: [
    CommonModule,
    InteractionsRoutingModule,
    InteractionDetailsModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
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
