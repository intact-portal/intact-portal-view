import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompactHeaderComponent} from './compact-header/compact-header.component';
import {ExpandedHeaderComponent} from './expanded-header/expanded-header.component';
import {LocalFooterComponent} from './local-footer/local-footer.component';
import {ContributorsComponent} from './contributors/contributors.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CompactHeaderComponent,
    ExpandedHeaderComponent,
    LocalFooterComponent,
    ContributorsComponent
  ],
  declarations: [
    CompactHeaderComponent,
    ExpandedHeaderComponent,
    LocalFooterComponent,
    ContributorsComponent
  ]
})
export class LayoutModule { }
