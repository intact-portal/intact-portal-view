import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractionDetailsComponent } from './interaction-details.component';

const routes: Routes = [
  {path: 'details/interaction/:id', component: InteractionDetailsComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class InteractionDetailsRoutingModule { }
