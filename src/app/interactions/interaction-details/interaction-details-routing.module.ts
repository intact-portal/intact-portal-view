import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsDashboardComponent } from './details-dashboard.component';

const routes: Routes = [
  {path: 'details/interaction/:id', component: DetailsDashboardComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class InteractionDetailsRoutingModule { }
