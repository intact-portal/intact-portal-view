import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InteractionDetailsComponent} from './interaction-details.component';
import {DetailsDashboardComponent} from './details-dahboard/details-dashboard.component';
import {DetailsInfoComponent} from './details-dahboard/details-info/details-info.component';
import {ExternalXrefsComponent} from './details-dahboard/details-info/external-xrefs/external-xrefs.component';
import {CurationAnnotationsComponent} from './details-dahboard/details-info/curation-annotations/curation-annotations.component';
import {DetailsViewerComponent} from './details-viewer/details-viewer.component';
import {ExperimentalConditionsComponent} from './details-dahboard/details-info/experimental-conditions/experimental-conditions.component';
import {ParametersComponent} from './details-dahboard/details-info/parameters/parameters.component';
import {ConfidencesComponent} from './details-dahboard/details-info/confidences/confidences.component';
import {InteractionDetailsRoutingModule} from './interaction-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InteractionDetailsRoutingModule
  ],
  declarations: [
    InteractionDetailsComponent,
    DetailsViewerComponent,
    DetailsDashboardComponent,
    DetailsInfoComponent,
    ExternalXrefsComponent,
    ParametersComponent,
    ExperimentalConditionsComponent,
    CurationAnnotationsComponent,
    ConfidencesComponent
  ]
})
export class InteractionDetailsModule { }
