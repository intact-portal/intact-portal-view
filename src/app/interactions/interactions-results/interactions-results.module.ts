import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InteractionsResultsComponent} from './interactions-results.component';
import {InteractionsRoutingModule} from './interactions-routing.module';
import {InteractionsFiltersComponent} from './interactions-filters/interactions-filters.component';
import {InteractionsListComponent} from './interactions-list/interactions-list.component';
import {InteractionsViewerComponent} from './interactions-viewer/interactions-viewer.component';
import {InteractorsTableComponent} from './interactions-list/interactors-table/interactors-table.component';
import {InteractionsTableComponent} from './interactions-list/interactions-table/interactions-table.component';
import {InteractionDetailsModule} from '../interaction-details/interaction-details.module';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import {ProgressSpinnerModule} from '../../layout/loading-indicators/progress-spinner/progress-spinner.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {TableFactoryService} from '../shared/service/table-factory.service';
import {NetworkSelectionService} from '../shared/service/network-selection.service';
import {InteractionsLegendComponent} from './interactions-viewer/interactions-legend/interactions-legend.component';
import {ComponentsModule} from '../../shared/components/components.module';
import {DownloadFormComponent} from './interactions-filters/download-form/download-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InteractionsRoutingModule,
    InteractionDetailsModule,
    NgxSliderModule,
    ProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [
    InteractionsFiltersComponent,
    InteractionsListComponent,
    InteractionsViewerComponent,
    InteractionsResultsComponent,
    InteractorsTableComponent,
    InteractionsTableComponent,
    InteractionsLegendComponent,
    DownloadFormComponent,
  ],
  providers: [
    TableFactoryService,
    NetworkSelectionService
  ]
})
export class InteractionsResultsModule {
}
