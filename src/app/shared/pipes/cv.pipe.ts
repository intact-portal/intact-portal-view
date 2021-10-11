import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cv'
})
export class CvPipe implements PipeTransform {

  transform(value: string): string {
    if (value === undefined) {
      return null;
    }
    const id = value.replace(':', '_');
    return `https://www.ebi.ac.uk/ols/ontologies/mi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2F${id}&viewMode=All&siblings=false`;
  }

}
