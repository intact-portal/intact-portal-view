import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DownloadComponent } from './download/download.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: 'app/home-dashboard/home-dashboard.module#HomeDashboardModule'},
  {path: 'search', loadChildren: 'app/interactions/interactions-results/interactions-results.module#InteractionsResultsModule'},
  {path: 'details', loadChildren: 'app/interactions/interaction-details/interaction-details.module#InteractionDetailsModule'},
  {path: 'about', component: AboutComponent},
  {path: 'download', component: DownloadComponent},
  {path: 'faq', component: FaqComponent},
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, {useHash: false}) ],
})
export class AppRoutingModule { }
