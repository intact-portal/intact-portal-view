import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: 'app/home-dashboard/home-dashboard.module#HomeDashboardModule'},
  {path: 'search', loadChildren: 'app/interactions/interactions-results/interactions-results.module#InteractionsResultsModule'},
  {path: 'details', loadChildren: 'app/interactions/interaction-details/interaction-details.module#InteractionDetailsModule'},
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
