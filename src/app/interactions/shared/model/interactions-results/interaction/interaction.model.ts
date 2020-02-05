export class Interaction {

  private _moleculeA: string;
  private _moleculeB: string;
  private _speciesA: string;
  private _speciesB: string;
  private _detectionMethod: string;
  private _publicationIdentifiers: string[];
  private _type: string;
  private _ac: string;
  private _sourceDatabase: string[];
  private _confidenceValues: string[];
  private _expansionMethod: string;
  private _experimentalRoleA: string;
  private _experimentalRoleB: string;
  private _typeA: string;
  private _typeB: string;
  private _count: number;
  private _authors: string[];
  private _firstAuthor: string;
  private _identifiers: string[];
  private _binaryInteractionId: string;


  get moleculeA(): string {
    return this._moleculeA;
  }

  set moleculeA(value: string) {
    this._moleculeA = value;
  }

  get moleculeB(): string {
    return this._moleculeB;
  }

  set moleculeB(value: string) {
    this._moleculeB = value;
  }

  get speciesA(): string {
    return this._speciesA;
  }

  set speciesA(value: string) {
    this._speciesA = value;
  }

  get speciesB(): string {
    return this._speciesB;
  }

  set speciesB(value: string) {
    this._speciesB = value;
  }

  get detectionMethod(): string {
    return this._detectionMethod;
  }

  set detectionMethod(value: string) {
    this._detectionMethod = value;
  }

  get publicationIdentifiers(): string[] {
    return this._publicationIdentifiers;
  }

  set publicationIdentifiers(value: string[]) {
    this._publicationIdentifiers = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get ac(): string {
    return this._ac;
  }

  set ac(value: string) {
    this._ac = value;
  }

  get sourceDatabase(): string[] {
    return this._sourceDatabase;
  }

  set sourceDatabase(value: string[]) {
    this._sourceDatabase = value;
  }

  get confidenceValues(): string[] {
    return this._confidenceValues;
  }

  set confidenceValues(value: string[]) {
    this._confidenceValues = value;
  }

  get expansionMethod(): string {
    return this._expansionMethod;
  }

  set expansionMethod(value: string) {
    this._expansionMethod = value;
  }

  get experimentalRoleA(): string {
    return this._experimentalRoleA;
  }

  set experimentalRoleA(value: string) {
    this._experimentalRoleA = value;
  }

  get experimentalRoleB(): string {
    return this._experimentalRoleB;
  }

  set experimentalRoleB(value: string) {
    this._experimentalRoleB = value;
  }

  get typeA(): string {
    return this._typeA;
  }

  set typeA(value: string) {
    this._typeA = value;
  }

  get typeB(): string {
    return this._typeB;
  }

  set typeB(value: string) {
    this._typeB = value;
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  get authors(): string[] {
    return this._authors;
  }

  set authors(value: string[]) {
    this._authors = value;
  }

  get firstAuthor(): string {
    return this._firstAuthor;
  }

  set firstAuthor(value: string) {
    this._firstAuthor = value;
  }

  get identifiers(): string[] {
    return this._identifiers;
  }

  set identifiers(value: string[]) {
    this._identifiers = value;
  }

  get binaryInteractionId(): string {
    return this._binaryInteractionId;
  }

  set binaryInteractionId(value: string) {
    this._binaryInteractionId = value;
  }
}
