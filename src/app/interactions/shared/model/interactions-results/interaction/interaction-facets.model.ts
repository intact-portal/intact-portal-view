import {Facet} from '../facet.model';

/**
 * Webservices answer => readonly
 */
export interface InteractionFacets {
  combined_species: Facet<{ all: number, intra: number }>[],
  type_MI_A_B_styled: Facet[],
  detection_method_mi_styled: Facet[],
  identification_method_mi_A_B_styled: Facet[],
  type_mi_identifier_styled: Facet[],
  host_organism_taxId_styled: Facet[],
  negative: Facet[],
  affected_by_mutation_styled: Facet[],
  expansion_method_s: Facet[],
  intact_miscore: Facet[]
}
