import {Injectable} from '@angular/core';
import * as Md from 'markdown-it';
import * as mk from '@iktakahiro/markdown-it-katex';

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
