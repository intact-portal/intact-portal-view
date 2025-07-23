import { Pipe, PipeTransform } from '@angular/core';
import {Organism} from "../../../../shared/model/interaction-details/organism.model";

@Pipe({
    name: 'organism',
    standalone: false
})
export class OrganismPipe implements PipeTransform {

  transform(organism: Organism, args?: any): string {
    if (parseInt(organism.taxId) > 0) {
      let url = `https://www.uniprot.org/taxonomy/${organism.taxId}`;
      return `<a href="${url}" class="cv-term" target="_blank">${organism.scientificName}</a>`;
    } else {
      return organism.scientificName;
    }
  }

}
