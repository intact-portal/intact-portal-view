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
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {TableFactoryService} from '../shared/service/table-factory.service';
import {NetworkSelectionService} from '../shared/service/network-selection.service';
import {InteractionsLegendComponent} from './interactions-viewer/interactions-legend/interactions-legend.component';
import {ComponentsModule} from '../../shared/components/components.module';
import {DownloadFormComponent} from './interactions-filters/download-form/download-form.component';
import {FormsModule} from '@angular/forms';
import {NegativeFilterComponent} from './interactions-filters/negative-filter/negative-filter.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {DensitySliderComponent} from './interactions-filters/density-slider/density-slider.component';
import { RedirectComponent } from './redirect/redirect.component';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import {CytoscapeDialogComponent} from './interactions-viewer/cytoscape-dialog.component/cytoscape-dialog.component';

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
    MatSlideToggleModule,
    MatExpansionModule,
    ComponentsModule,
    FormsModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
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
    NegativeFilterComponent,
    DensitySliderComponent,
    RedirectComponent,
    CytoscapeDialogComponent
  ],
  providers: [
    TableFactoryService,
    NetworkSelectionService
  ]
})
export class InteractionsResultsModule {
}
