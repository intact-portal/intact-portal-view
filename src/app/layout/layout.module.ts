import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompactHeaderComponent} from './header/compact-header/compact-header.component';
import {ExpandedHeaderComponent} from './header/expanded-header/expanded-header.component';
import {LocalFooterComponent} from './local-footer/local-footer.component';
import {ContributorsComponent} from './contributors/contributors.component';
import {RouterModule} from '@angular/router';
import {ProgressBarComponent} from './loading-indicators/progress-bar/progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {LocalSearchComponent} from './header/local-search/local-search.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatProgressBarModule
  ],
  declarations: [
    LocalSearchComponent,
    ProgressBarComponent,
    CompactHeaderComponent,
    ExpandedHeaderComponent,
    LocalFooterComponent,
    ContributorsComponent
  ],
  exports: [
    ProgressBarComponent,
    CompactHeaderComponent,
    ExpandedHeaderComponent,
    LocalFooterComponent,
    ContributorsComponent,
    LocalSearchComponent

  ]
})
export class LayoutModule { }
