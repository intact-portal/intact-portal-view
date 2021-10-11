import {Pipe, PipeTransform} from '@angular/core';
import {CvTerm} from '../../../../shared/model/interaction-details/cv-term.model';

@Pipe({
  name: 'cvToUrl'
})
export class CvToUrlPipe implements PipeTransform {

  transform(value: CvTerm, type?: 'access' | 'details'): string {
    if (value.identifier === null) return '';
    const id = value.identifier.replace(':', '_');
    switch (type) {
      default:
      case 'access':
        return `https://www.ebi.ac.uk/ols/ontologies/mi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2F${id}&viewMode=All&siblings=false`
      case 'details':
        return `https://www.ebi.ac.uk/ols/api/ontologies/mi/terms?iri=http://purl.obolibrary.org/obo/${id}`
    }
  }
}
