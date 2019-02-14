import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsDashboardComponent} from './details-dashboard.component';
import {DetailsTabsComponent} from './details-tabs/details-tabs.component';
import {DetailsInfoComponent} from './details-tabs/details-info/details-info.component';
import {ExternalXrefsComponent} from './details-tabs/details-info/external-xrefs/external-xrefs.component';
import {CurationAnnotationsComponent} from './details-tabs/details-info/curation-annotations/curation-annotations.component';
import {DetailsViewerComponent} from './details-viewer/details-viewer.component';
import {ExperimentalConditionsComponent} from './details-tabs/details-info/experimental-conditions/experimental-conditions.component';
import {ParametersComponent} from './details-tabs/details-info/parameters/parameters.component';
import {ConfidencesComponent} from './details-tabs/details-info/confidences/confidences.component';
import {InteractionDetailsRoutingModule} from './interaction-details-routing.module';
import { ExperimentComponent } from './details-tabs/details-info/experiment/experiment.component';

@NgModule({
  imports: [
    CommonModule,
    InteractionDetailsRoutingModule
  ],
  declarations: [
    DetailsDashboardComponent,
    DetailsViewerComponent,
    DetailsTabsComponent,
    DetailsInfoComponent,
    ExternalXrefsComponent,
    ParametersComponent,
    ExperimentalConditionsComponent,
    CurationAnnotationsComponent,
    ConfidencesComponent,
    ExperimentComponent
  ]
})
export class InteractionDetailsModule { }
