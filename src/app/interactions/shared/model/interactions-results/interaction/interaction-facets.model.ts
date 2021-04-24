import {Facet} from '../facet.model';

export class InteractionFacets {
  combined_species: Facet<{ all: number, intra: number }>[];
  type_MI_A_B_styled: Facet[];
  detection_method_s: Facet[];
  type_mi_identifier_styled: Facet[];
  host_organism_s: Facet[];
  negative: Facet[];
  disrupted_by_mutation: Facet[];
  intact_miscore: Facet[];
}
