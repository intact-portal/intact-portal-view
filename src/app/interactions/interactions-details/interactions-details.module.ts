import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InteractionsDetailsComponent} from './interactions-details.component';
import {DetailsComponent} from './details/details.component';
import {DetailsInfoComponent} from './details/details-info/details-info.component';
import {ExternalXrefsComponent} from './details/details-info/external-xrefs/external-xrefs.component';
import {CurationAnnotationsComponent} from './details/details-info/curation-annotations/curation-annotations.component';
import {DetailsViewerComponent} from './details-viewer/details-viewer.component';
import {ExperimentalConditionsComponent} from './details/details-info/experimental-conditions/experimental-conditions.component';
import {ParametersComponent} from './details/details-info/parameters/parameters.component';
import {ConfidencesComponent} from './details/details-info/confidences/confidences.component';
import {InteractionsDetailsRoutingModule} from './interactions-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InteractionsDetailsRoutingModule
  ],
  declarations: [
    InteractionsDetailsComponent,
    DetailsViewerComponent,
    DetailsComponent,
    DetailsInfoComponent,
    ExternalXrefsComponent,
    ParametersComponent,
    ExperimentalConditionsComponent,
    CurationAnnotationsComponent,
    ConfidencesComponent
  ]
})
export class InteractionsDetailsModule { }
