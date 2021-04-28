import {NodeShape} from '../../network-shapes/node-shape';

export class Interactor {
  constructor(
    public readonly interactorName: string,
    public readonly interactorDescription: string,
    public readonly interactorPreferredIdentifier: string,
    public readonly interactorAc: string,
    public readonly interactorAlias: string,
    public readonly interactorType: string,
    public readonly interactorSpecies: string,
    public readonly interactionCount: number,
    public readonly color: string,
    public readonly shape: NodeShape
  ) {
  }
}
