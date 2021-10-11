import {Pipe, PipeTransform} from '@angular/core';

export interface PublicationRef {
  id: string,
  source: string
}

@Pipe({
  name: 'publicationsParser'
})
export class PublicationsParserPipe implements PipeTransform {

  transform(value: string[]): PublicationRef[] {
    return value.map(value1 => PublicationsParserPipe.stringToPublication(value1));
  }

  static stringToPublication(rawData: string): PublicationRef {
    const data_s = rawData.split('(');
    return {id: data_s[0].trim(), source: data_s[1].slice(0, -1)};
  }

}
