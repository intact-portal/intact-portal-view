import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HelpComponent} from './help.component';
import {UserGuideComponent} from './user-guide/user-guide.component';
import {FaqComponent} from './faq/faq.component';
import {HelpRoutingModule} from './help-routing.module';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
    HelpRoutingModule
  ],
  declarations: [
    HelpComponent,
    UserGuideComponent,
    FaqComponent
  ]
})
export class HelpModule { }
