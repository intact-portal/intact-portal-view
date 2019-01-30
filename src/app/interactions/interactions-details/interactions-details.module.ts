import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InteractionsDetailsComponent} from './interactions-details.component';
import {DetailsDashboardComponent} from './details-dahboard/details-dashboard.component';
import {DetailsInfoComponent} from './details-dahboard/details-info/details-info.component';
import {ExternalXrefsComponent} from './details-dahboard/details-info/external-xrefs/external-xrefs.component';
import {CurationAnnotationsComponent} from './details-dahboard/details-info/curation-annotations/curation-annotations.component';
import {DetailsViewerComponent} from './details-viewer/details-viewer.component';
import {ExperimentalConditionsComponent} from './details-dahboard/details-info/experimental-conditions/experimental-conditions.component';
import {ParametersComponent} from './details-dahboard/details-info/parameters/parameters.component';
import {ConfidencesComponent} from './details-dahboard/details-info/confidences/confidences.component';
import {InteractionsDetailsRoutingModule} from './interactions-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InteractionsDetailsRoutingModule
  ],
  declarations: [
    InteractionsDetailsComponent,
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
export class InteractionsDetailsModule { }
