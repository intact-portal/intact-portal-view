import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeDashboardComponent} from './home-dashboard.component';
import {DatasetArchiveComponent} from './featured-dataset/dataset-archive/dataset-archive.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeDashboardComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'featured-dataset/archive',
    component: DatasetArchiveComponent,
    data: {showCompactHeader: false, showFooter: true}
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class HomeDashboardRoutingModule { }
