import {Pipe, PipeTransform} from '@angular/core';

export interface Score {
  name: string
  value: number,
}
@Pipe({
  name: 'scoreParser'
})
export class ScoreParserPipe implements PipeTransform {

  transform(d: string): Score {
    const score = d.split(':');
    return {name: score[0], value: parseFloat(score[1])}
  }

}
