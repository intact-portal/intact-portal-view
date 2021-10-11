import {Pipe, PipeTransform} from '@angular/core';
import {Annotation} from '../../interactions/shared/model/interaction-details/annotation.model';

@Pipe({
  name: 'annotation'
})
export class AnnotationPipe implements PipeTransform {

  transform(value: string): Annotation {
    if (value === null) return null
    const split = value.split('(')
    return {
      description: split.slice(1).join('(').slice(0, -1).trim(),
      topic: {shortName: split[0].trim(), identifier: undefined}
    }
  }
}
