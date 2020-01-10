import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentationComponent} from './documentation.component';
import {DocumentationRoutingModule} from './documentation-routing.module';
import {DocsComponent} from './docs/docs.component';
import {TechnicalCornerComponent} from './technical-corner/technical-corner.component';
import {HelpComponent} from './help/help.component';
import {MarkdownModule} from 'ngx-markdown';
import { UserGuideComponent } from './help/user-guide/user-guide.component';
import { DataSubmissionComponent } from './data-submission/data-submission.component';
import {AboutComponent} from './about/about.component';
import {FaqComponent} from './help/faq/faq.component';
import {DatasetsComponent} from './datasets/datasets.component';
import {HelpModule} from './help/help.module';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
    HelpModule,
    DocumentationRoutingModule,
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
