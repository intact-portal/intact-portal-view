import {Facet} from '../facet.model';

/**
 * Webservices answer => readonly
 */
export class InteractionFacets {
  constructor(
    public readonly combined_species: Facet<{ all: number, intra: number }>[],
    public readonly type_MI_A_B_styled: Facet[],
    public readonly detection_method_s: Facet[],
    public readonly type_mi_identifier_styled: Facet[],
    public readonly host_organism_taxId_styled: Facet[],
    public readonly negative: Facet[],
    public readonly affected_by_mutation_styled: Facet[],
    public readonly expansion_method_s: Facet[],
    public readonly intact_miscore: Facet[]
  ) {
  }
}
