import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DocumentationComponent} from './documentation.component';
import {TechnicalCornerComponent} from './technical-corner/technical-corner.component';
import {DataSubmissionComponent} from './data-submission/data-submission.component';
import {DatasetsComponent} from './datasets/datasets.component';
import {UserGuideComponent} from './user-guide/user-guide.component';

const documentationRoutes: Routes = [
  {
    path: 'documentation',
    component: DocumentationComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: 'documentation/data_submission',
    component: DataSubmissionComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: 'documentation/user-guide',
    component: UserGuideComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: 'documentation/technical_corner',
    component: TechnicalCornerComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: 'documentation/datasets',
    component: DatasetsComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(documentationRoutes)],
})

export class DocumentationRoutingModule {
}
