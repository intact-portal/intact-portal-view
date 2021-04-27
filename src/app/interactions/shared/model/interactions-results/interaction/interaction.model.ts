export class Interaction {
  constructor(
    public readonly moleculeA: string,
    public readonly moleculeB: string,
    public readonly speciesA: string,
    public readonly speciesB: string,
    public readonly detectionMethod: string,
    public readonly publicationIdentifiers: string[],
    public readonly type: string,
    public readonly ac: string,
    public readonly sourceDatabase: string[],
    public readonly confidenceValues: string[],
    public readonly expansionMethod: string,
    public readonly experimentalRoleA: string,
    public readonly experimentalRoleB: string,
    public readonly biologicalRoleA: string,
    public readonly biologicalRoleB: string,
    public readonly aliasesA: string[],
    public readonly aliasesB: string[],
    public readonly typeA: string,
    public readonly typeB: string,
    public readonly count: number,
    public readonly authors: string[],
    public readonly firstAuthor: string,
    public readonly identifiers: string[],
    public readonly binaryInteractionId: string,
    public readonly features: string[],
    public readonly parameters: string[],
    public readonly annotationsA: string[],
    public readonly annotationsB: string[],
    public readonly annotations: string[]
  ) {
  }
}
