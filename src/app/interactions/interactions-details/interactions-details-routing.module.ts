import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractionsDetailsComponent } from './interactions-details.component';

const routes: Routes = [
  {path: 'details/interaction/:id', component: InteractionsDetailsComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class InteractionsDetailsRoutingModule { }
