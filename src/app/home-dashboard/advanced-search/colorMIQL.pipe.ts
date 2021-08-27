import {Pipe, PipeTransform} from '@angular/core';
import {ColorCode} from './advanced-search.component';
import {AdvancedQueryHelper} from './advanced-search.config';

@Pipe({
  name: 'colorMIQL',
  pure: true
})
export class ColorMIQLPipe implements PipeTransform {

  public static colorCodes: ColorCode[] = [
    {regex: /(".+")/g, class: 'miql-string'},
    {regex: RegExp(`(${AdvancedQueryHelper.keywords.map(keyword => keyword.replace('-', '\-')).join('|')})`, 'g'), class: 'miql-field'},
    {regex: /(AND[ \u00a0]|NOT[ \u00a0]|OR[ \u00a0]|TO[ \u00a0])/ig, class: 'miql-operator'},
    {regex: /([()+-,:\[\]*?])/g, class: 'miql-symbol'},
  ];

  transform(miql: string): string {
    return ColorMIQLPipe.transform(miql);
  }

  public static transform(miql: string): string {
    return ColorMIQLPipe.colorCodes.reduce((html: string, colorCode: ColorCode) =>
      html.replace(colorCode.regex, `<span class="miql ${colorCode.class}">$1</span>`), miql);
  }

  public static isMIQL(str: string): boolean {
    const regex = ColorMIQLPipe.colorCodes[1].regex;
    const isMIQL = regex.test(str);
    regex.lastIndex = 0; // Reinitialise search for next call
    return isMIQL;
  }
}
