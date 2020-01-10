import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DocumentationComponent} from './documentation.component';
import {TechnicalCornerComponent} from './technical-corner/technical-corner.component';
import {DocsComponent} from './docs/docs.component';
import {AboutComponent} from './about/about.component';
import {DataSubmissionComponent} from './data-submission/data-submission.component';
import {DatasetsComponent} from './datasets/datasets.component';

const documentationRoutes: Routes = [
  {path: 'documentation', component: DocumentationComponent},
  {path: 'documentation/about', component: AboutComponent},
  {path: 'documentation/docs', component: DocsComponent},
  {path: 'documentation/data_submission', component: DataSubmissionComponent},
  {path: 'documentation/technical_corner', component: TechnicalCornerComponent},
  {path: 'documentation/datasets', component: DatasetsComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(documentationRoutes)],
})

export class DocumentationRoutingModule {
}
