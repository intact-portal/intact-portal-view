import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InteractionsResultsComponent} from './interactions-results.component';
import {RedirectComponent} from './redirect/redirect.component';

const routes: Routes = [
  {
    path: 'search',
    component: InteractionsResultsComponent,
    data: {showCompactHeader: true, showFooter: true}
  },
  {
    path: 'search/:query',
    component: RedirectComponent,
    data: {showCompactHeader: true, showFooter: true, fragment: 'interaction'}
  },
  {
    path: 'search/interactors/:query',
    component: RedirectComponent,
    data: {showCompactHeader: true, showFooter: true, fragment: 'interactor'}
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class InteractionsRoutingModule {
}
