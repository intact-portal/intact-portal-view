import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsDashboardComponent} from './details-dashboard.component';
import {DetailsTabsComponent} from './details-tabs/details-tabs.component';
import {InteractionDetailsComponent} from './details-tabs/interaction-details/interaction-details.component';
import {ExternalXrefsComponent} from './details-tabs/interaction-details/external-xrefs/external-xrefs.component';
import {CurationAnnotationsComponent} from './details-tabs/interaction-details/curation-annotations/curation-annotations.component';
import {DetailsViewerComponent} from './details-viewer/details-viewer.component';
import {ExperimentalConditionsComponent} from './details-tabs/interaction-details/experimental-conditions/experimental-conditions.component';
import {ParametersComponent} from './details-tabs/interaction-details/parameters/parameters.component';
import {ConfidencesComponent} from './details-tabs/interaction-details/confidences/confidences.component';
import {InteractionDetailsRoutingModule} from './interaction-details-routing.module';
import { ExperimentComponent } from './details-tabs/interaction-details/experiment/experiment.component';

@NgModule({
  imports: [
    CommonModule,
    InteractionDetailsRoutingModule
  ],
  declarations: [
    DetailsDashboardComponent,
    DetailsViewerComponent,
    DetailsTabsComponent,
    InteractionDetailsComponent,
    ExternalXrefsComponent,
    ParametersComponent,
    ExperimentalConditionsComponent,
    CurationAnnotationsComponent,
    ConfidencesComponent,
    ExperimentComponent
  ]
})
export class InteractionDetailsModule { }
