import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InteractionsResultsComponent} from './interactions-results.component';

const routes: Routes = [
  {
    path: 'search',
    component: InteractionsResultsComponent,
    data: {showCompactHeader: true, showFooter: true}
  },
  {
    path: 'search/:query',
    component: InteractionsResultsComponent,
    data: {showCompactHeader: true, showFooter: true}
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class InteractionsRoutingModule { }
