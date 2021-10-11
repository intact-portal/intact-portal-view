import {Pipe, PipeTransform} from '@angular/core';
import {Alias} from '../../interactions/shared/model/interaction-details/alias.model';

@Pipe({
  name: 'alias'
})
export class AliasPipe implements PipeTransform {

  transform(value: string): Alias {
    const split = value.split('(')
    return {
      name: split.slice(0, -2).join('(').trim(),
      type: {
        shortName: split[split.length - 1].slice(0, -2),
        identifier: split[split.length - 2]
      }
    }
  }
}
