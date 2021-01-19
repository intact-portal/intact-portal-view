import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DownloadButtonComponent} from "./download-button/download-button.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DownloadButtonComponent
  ],
  exports: [
    DownloadButtonComponent
  ]
})
export class ComponentsModule {

}
