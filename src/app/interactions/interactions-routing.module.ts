import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InteractionsResultsComponent} from './interactions-results/interactions-results.component';
import {InteractionsDetailsComponent} from './interactions-details/interactions-details.component';

const routes: Routes = [
  {path: 'search', component: InteractionsResultsComponent},
  {path: 'details/interaction/:id', component: InteractionsDetailsComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class InteractionsRoutingModule { }
