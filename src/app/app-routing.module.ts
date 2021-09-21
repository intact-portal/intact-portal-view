import {NgModule} from '@angular/core';
import {DefaultUrlSerializer, RouterModule, Routes, UrlSerializer, UrlTree} from '@angular/router';
import {DownloadComponent} from './navigation/download/download.component';
import {InteractomesComponent} from './interactomes/interactomes.component';
import {AboutComponent} from './navigation/about/about.component';
import {environment} from '../environments/environment';
import {RedirectComponent} from './navigation/redirect/redirect.component';

// Enable parenthesis in url parameters
export class MyUrlSerializer extends DefaultUrlSerializer implements UrlSerializer {
  parse(url: string): UrlTree {
    return super.parse(url.replace(/[!'()*]/g, (c) => {
      // Also encode !, ', (, ), and *
      return '%' + c.charCodeAt(0).toString(16);
    }));
  }
}

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
    path: 'about',
    component: AboutComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: 'interaction/:interactionAc',
    redirectTo: 'details/interaction/:interactionAc'
  },
  {
    path: 'query/:advanced_query',
    component: RedirectComponent,
    data: {externalUrl: environment.former_intact_url + 'query/:advanced_query'}
  },
  {
    path: 'interactors/:query',
    component: RedirectComponent,
    data: {externalUrl: environment.former_intact_url + 'interactors/:query'}
  },
  {
    path: 'pages/list/list.xhtml',
    component: RedirectComponent,
    data: {externalUrl: environment.former_intact_url + 'pages/list/list.xhtml'}
  },
  {
    path: 'pages/interactions/interactions.xhtml',
    component: RedirectComponent,
    data: {externalUrl: environment.former_intact_url + 'pages/interactions/interactions.xhtml'}
  },
  {
    path: 'pages/details/details.xhtml',
    component: RedirectComponent,
    data: {externalUrl: environment.former_intact_url + 'pages/details/details.xhtml'}
  },
  // {
  //   path: '**',
  //   redirectTo: 'home'
  // }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {enableTracing: true})]
})

export class AppRoutingModule {
}
