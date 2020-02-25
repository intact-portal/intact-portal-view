import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InteractionsResultsComponent} from './interactions-results.component';

const routes: Routes = [
  {path: 'search', component: InteractionsResultsComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class InteractionsRoutingModule { }
