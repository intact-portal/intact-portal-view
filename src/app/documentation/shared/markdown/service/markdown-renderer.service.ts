import {Injectable} from '@angular/core';

// @ts-ignore
let Md = require('markdown-it')
// @ts-ignore
let mk = require('markdown-it-katex')

@Injectable()
export class MarkdownRendererService {
  private md: any;

  constructor() {
    this.md = new Md();
    this.md.use(mk);
  }

  render(markdown: any): Promise<any> {
    return markdown.text().then(content => this.md.render(content));
  }
}
