import {Component, OnInit, input} from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';
import {MarkdownRendererService} from './service/markdown-renderer.service';

@Component({
    selector: 'ip-markdown',
    templateUrl: './markdown.component.html',
    styleUrls: ['./markdown.component.css'],
    standalone: false
})
export class MarkdownComponent implements OnInit {

  readonly src = input<string>(undefined);
  readonly data = input<string>(undefined);
  output: any;

  constructor(private md: MarkdownRendererService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    const data = this.data();
    const srcValue = this.src();
    if (data) {
      this.output = this.sanitizer.bypassSecurityTrustHtml(this.md.render(data))
    } else if (srcValue) {
      fetch(srcValue)
        .then(src => src.text())
        .then(content => this.md.render(content.replace(/(..\/)?\.gitbook\/assets\//g, `assets/images/gitbook/`)))
        .then(value => this.output = this.sanitizer.bypassSecurityTrustHtml(value));
    }
  }
}
