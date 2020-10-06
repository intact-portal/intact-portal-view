import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentationComponent} from './documentation.component';
import {DocumentationRoutingModule} from './documentation-routing.module';
import {DocsComponent} from './docs/docs.component';
import {TechnicalCornerComponent} from './technical-corner/technical-corner.component';
import {DataSubmissionComponent} from './data-submission/data-submission.component';
import {AboutComponent} from './about/about.component';
import {DatasetsComponent} from './datasets/datasets.component';
import {HelpModule} from './help/help.module';
import {MarkdownModule} from "./shared/markdown/markdown.module";

@NgModule({
  imports: [
    CommonModule,
    HelpModule,
    DocumentationRoutingModule,
    MarkdownModule,
  ],
  declarations: [
    DocumentationComponent,
    AboutComponent,
    DocsComponent,
    DataSubmissionComponent,
    TechnicalCornerComponent,
    DatasetsComponent
  ]
})
export class DocumentationModule {
}
