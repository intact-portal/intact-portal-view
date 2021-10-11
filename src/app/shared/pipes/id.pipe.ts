import {Pipe, PipeTransform} from '@angular/core';
import {Id} from '../../interactions/shared/model/interaction-details/id.model';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

  transform(value: string): Id | null {
    if (value === null) return null
    const split = value.split('(')
    return {
      identifier: split.slice(0, -1).join('(').trim(),
      database: split[split.length - 1].slice(0, -1).trim(),
    };
  }
}
