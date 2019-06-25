export class Interaction {

  private _moleculeA: string;
  private _moleculeB: string;
  private _speciesA: string;
  private _speciesB: string;
  private _interactionDetectionMethod: string;
  private _publicationIdentifiers: string[];
  private _interactionType: string;
  private _interactionAc: string;
  private _sourceDatabase: string[];
  private _confidenceValues: string[];
  private _expansionMethod: string;
  private _experimentalRoleA: string;
  private _experimentalRoleB: string;
  private _typeA: string;
  private _typeB: string;
  private _interactionCount: number;
  private _authors: string[];
  private _firstAuthor: string;
  private _interactionIdentifiers: string[];


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

  get interactionDetectionMethod(): string {
    return this._interactionDetectionMethod;
  }

  set interactionDetectionMethod(value: string) {
    this._interactionDetectionMethod = value;
  }

  get publicationIdentifiers(): string[] {
    return this._publicationIdentifiers;
  }

  set publicationIdentifiers(value: string[]) {
    this._publicationIdentifiers = value;
  }

  get interactionType(): string {
    return this._interactionType;
  }

  set interactionType(value: string) {
    this._interactionType = value;
  }

  get interactionAc(): string {
    return this._interactionAc;
  }

  set interactionAc(value: string) {
    this._interactionAc = value;
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

  get interactionCount(): number {
    return this._interactionCount;
  }

  set interactionCount(value: number) {
    this._interactionCount = value;
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

  get interactionIdentifiers(): string[] {
    return this._interactionIdentifiers;
  }

  set interactionIdentifiers(value: string[]) {
    this._interactionIdentifiers = value;
  }
}
