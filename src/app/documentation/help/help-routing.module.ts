import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelpComponent} from './help.component';
import {FaqComponent} from './faq/faq.component';
import {UserGuideComponent} from './user-guide/user-guide.component';

const helpRoutes: Routes = [
  {
    path: 'documentation/help',
    component: HelpComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: 'documentation/help/faq',
    component: FaqComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: 'documentation/help/user_guide',
    component: UserGuideComponent,
    data: {showCompactHeader: false, showFooter: true}
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(helpRoutes)],
})

export class HelpRoutingModule {
}
