import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentationComponent} from './documentation.component';
import {DocumentationRoutingModule} from './documentation-routing.module';
import {TechnicalCornerComponent} from './technical-corner/technical-corner.component';
import {DataSubmissionComponent} from './data-submission/data-submission.component';
import {DatasetsComponent} from './datasets/datasets.component';
import {MarkdownModule} from "./shared/markdown/markdown.module";
import {UserGuideComponent} from "./user-guide/user-guide.component";

@NgModule({
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    MarkdownModule,
  ],
  declarations: [
    DocumentationComponent,
    UserGuideComponent,
    DataSubmissionComponent,
    TechnicalCornerComponent,
    DatasetsComponent
  ]
})
export class DocumentationModule {
}
