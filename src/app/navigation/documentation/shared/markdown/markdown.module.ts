import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownComponent} from "./markdown.component";
import {MarkdownRendererService} from "./service/markdown-renderer.service";
import {HttpClient} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MarkdownComponent
  ],
  exports: [
    MarkdownComponent
  ],
  providers: [
    MarkdownRendererService
  ]
})
export class MarkdownModule {
}
