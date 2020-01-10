import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard.component';
import { DatasetArchiveComponent } from './featured-dataset/dataset-archive/dataset-archive.component';

const routes: Routes = [

  {path: 'home', component: HomeDashboardComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'dotm/archive', component: DatasetArchiveComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class HomeDashboardRoutingModule { }
