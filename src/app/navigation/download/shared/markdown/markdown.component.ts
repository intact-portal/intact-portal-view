import {Component, Input, OnInit} from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';
import {MarkdownRendererService} from './service/markdown-renderer.service';

@Component({
  selector: 'ip-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

  @Input() src: string;
  @Input() data: string;
  output: any;

  constructor(private md: MarkdownRendererService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    if (this.data) {
      this.output = this.sanitizer.bypassSecurityTrustHtml(this.md.render(this.data))
    } else if (this.src) {
      fetch(this.src)
        .then(src => src.text())
        .then(content => this.md.render(content.replace(/(..\/)?\.gitbook\/assets\//g, `assets/images/gitbook/`)))
        .then(value => this.output = this.sanitizer.bypassSecurityTrustHtml(value));
    }
  }
}
