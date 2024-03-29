import {Injectable, NgModule} from '@angular/core';
import {DefaultUrlSerializer, RouterModule, Routes, UrlSegment, UrlSerializer, UrlTree} from '@angular/router';
import {DownloadComponent} from './navigation/download/download.component';
import {InteractomesComponent} from './interactomes/interactomes.component';
import {AboutComponent} from './navigation/about/about.component';
import {environment} from '../environments/environment';
import {RedirectComponent} from './navigation/redirect/redirect.component';

// Enable parenthesis in url parameters
@Injectable()
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
    loadChildren: () => import('app/home-dashboard/home-dashboard.module').then(m => m.HomeDashboardModule)
  },
  {
    path: 'search',
    loadChildren: () => import('app/interactions/interactions-results/interactions-results.module').then(m => m.InteractionsResultsModule)
  },
  {
    path: 'details',
    loadChildren: () => import('app/interactions/interaction-details/interaction-details.module').then(m => m.InteractionDetailsModule)
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
    path: 'query/:query',
    redirectTo: 'search/:query',
  },
  {
    path: 'interactors/:query',
    redirectTo: 'search/interactors/:query',
  },
  {
    path: 'pages/list/list.xhtml',
    redirectTo: 'search'
  },
  {
    path: 'pages/interactions/interactions.xhtml',
    redirectTo: 'search'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {useHash: false, enableTracing: false})]
})

export class AppRoutingModule {
}
