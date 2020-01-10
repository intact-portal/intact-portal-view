import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DownloadComponent} from './download/download.component';
import {InteractomesComponent} from './interactomes/interactomes.component';

const routes: Routes = [
  {path: 'home', loadChildren: 'app/home-dashboard/home-dashboard.module#HomeDashboardModule'},
  {path: 'search', loadChildren: 'app/interactions/interactions-results/interactions-results.module#InteractionsResultsModule'},
  {path: 'details', loadChildren: 'app/interactions/interaction-details/interaction-details.module#InteractionDetailsModule'},
  {path: 'download', component: DownloadComponent},
  {path: 'interactomes', component: InteractomesComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, {useHash: false}) ],
})

export class AppRoutingModule { }
