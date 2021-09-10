import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DownloadComponent} from './download.component';
import {FTPComponent} from './ftp/ftp.component';
import {DatasetsComponent} from './datasets/datasets.component';


const downloadRoutes: Routes = [
  {
    path: 'download',
    component: DownloadComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: 'download/ftp',
    component: FTPComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
  {
    path: 'download/datasets',
    component: DatasetsComponent,
    data: {showCompactHeader: false, showFooter: true}
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(downloadRoutes)],
})

export class DownloadRoutingModule {
}
