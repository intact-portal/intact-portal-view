import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyvaluemap'
})
export class KeyvaluemapPipe implements PipeTransform {

  transform(value): any {
    const keys = [];

    for (const key of Object.keys(value)) {
      keys.push({key: key, value: value[key]});
    }

    return keys;
  }
}
