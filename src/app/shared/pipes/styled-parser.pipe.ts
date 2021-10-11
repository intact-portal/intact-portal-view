import {Pipe, PipeTransform} from '@angular/core';

export interface StyledElement {
  identifier: string;
  value: string;
  style: any;
}

@Pipe({
  name: 'styleParser'
})
export class StyleParserPipe implements PipeTransform {

  transform(value: string): StyledElement {
    const style = value.split('__')
    return {identifier: style[0], value: style[1], style: style[2]};
  }

}
