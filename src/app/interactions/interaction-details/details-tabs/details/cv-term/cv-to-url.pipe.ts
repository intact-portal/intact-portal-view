import { Pipe, PipeTransform } from '@angular/core';
import {CvTerm} from '../../../../shared/model/interaction-details/cv-term.model';

@Pipe({
    name: 'cvToUrl',
    standalone: false
})
export class CvToUrlPipe implements PipeTransform {

  transform(value: CvTerm, type?: 'access' | 'details'): string {
    if (value.identifier === null) return '';
    const id = value.identifier.replace(':', '_');
    switch (type) {
      default:
      case 'access':
        return `https://www.ebi.ac.uk/ols4/ontologies/mi/classes?obo_id=${value.identifier}`;
      case 'details':
        return `https://www.ebi.ac.uk/ols4/api/ontologies/mi/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252F${id}`;
    }
  }
}
