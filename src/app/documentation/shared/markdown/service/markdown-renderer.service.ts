import {Injectable} from '@angular/core';

// @ts-ignore
let Md = require('markdown-it')
// @ts-ignore
let mk = require('@iktakahiro/markdown-it-katex')

@Injectable()
export class MarkdownRendererService {
  private md: any;

  constructor() {
    this.md = new Md();
    this.md.use(mk);
  }

  render(markdown: string): string {
    return this.md.render(markdown);
  }
}
