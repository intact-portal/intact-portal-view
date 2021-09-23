import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DownloadComponent} from './download.component';
import {DownloadRoutingModule} from './download-routing.module';
import {FTPComponent} from './ftp/ftp.component';
import {DatasetsComponent} from './datasets/datasets.component';
import {MarkdownModule} from '../documentation/shared/markdown/markdown.module';


@NgModule({
  imports: [
    CommonModule,
    DownloadRoutingModule,
    MarkdownModule,
  ],
  declarations: [
    DownloadComponent,
    FTPComponent,
    DatasetsComponent
  ]
})
export class DownloadModule {
}
