import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DownloadComponent} from './navigation/download/download.component';
import {InteractomesComponent} from './interactomes/interactomes.component';
import {FaqComponent} from './navigation/faq/faq.component';
import {AboutComponent} from './navigation/about/about.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: 'app/home-dashboard/home-dashboard.module#HomeDashboardModule'
  },
  {
    path: 'search',
    loadChildren: 'app/interactions/interactions-results/interactions-results.module#InteractionsResultsModule'
  },
  {
    path: 'details',
    loadChildren: 'app/interactions/interaction-details/interaction-details.module#InteractionDetailsModule'
  },
  {
    path: 'pages/interactions/interactions.xhtml',
    redirectTo: 'search',
  },
  {
    path: 'download',
    component: DownloadComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: 'interactomes',
    component: InteractomesComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {useHash: false})],
})

export class AppRoutingModule {
}
