import {NodeShape} from '../../network-shapes/node-shape';

export interface Interactor {
  interactorName: string,
  interactorDescription: string,
  interactorPreferredIdentifier: string,
  interactorAc: string,
  interactorAlias: string,
  interactorType: string,
  interactorSpecies: string,
  interactionCount: number,
  interactorColor: string,
  interactorShape: NodeShape
}
