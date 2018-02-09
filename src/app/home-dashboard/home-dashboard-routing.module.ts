import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeDashboardComponent} from './home-dashboard/home-dashboard.component';

const routes: Routes = [
  {path: '', component: HomeDashboardComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class HomeDashboardRoutingModule { }
