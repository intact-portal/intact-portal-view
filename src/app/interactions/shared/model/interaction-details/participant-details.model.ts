import {CvTerm} from './cv-term.model';
import {Xreferences} from './xreferences.model';
import {Alias} from './alias.model';
import {Organism} from './organism.model';
import {TypeValueModel} from './type-value.model';

export class ParticipantDetails {
  private _participantAc: string;
  private _type: CvTerm;
  private _participantId: Xreferences;
  private _aliases: Alias[];
  private _description: string;
  private _species: Organism;
  private _expressionSystem: Organism;
  private _detectionMethod: CvTerm[];
  private _experimentalRole: CvTerm;
  private _biologicalRole: CvTerm;
  private _experimentalPreparations: CvTerm[];
  private _parameters: TypeValueModel[];
  private _confidences: TypeValueModel[];

  constructor(participantAc: string, type: CvTerm, participantId: Xreferences, aliases: Alias[], description: string, species: Organism,
              expressionSystem: Organism, detectionMethod: CvTerm[], experimentalRole: CvTerm, biologicalRole: CvTerm,
              experimentalPreparations: CvTerm[], parameters: TypeValueModel[], confidences: TypeValueModel[]) {
    this._participantAc = participantAc;
    this._type = type;
    this._participantId = participantId;
    this._aliases = aliases;
    this._description = description;
    this._species = species;
    this._expressionSystem = expressionSystem;
    this._detectionMethod = detectionMethod;
    this._experimentalRole = experimentalRole;
    this._biologicalRole = biologicalRole;
    this._experimentalPreparations = experimentalPreparations;
    this._parameters = parameters;
    this._confidences = confidences;
  }

  get participantAc(): string {
    return this._participantAc;
  }

  set participantAc(value: string) {
    this._participantAc = value;
  }

  get type(): CvTerm {
    return this._type;
  }

  set type(value: CvTerm) {
    this._type = value;
  }

  get participantId(): Xreferences {
    return this._participantId;
  }

  set participantId(value: Xreferences) {
    this._participantId = value;
  }

  get aliases(): Alias[] {
    return this._aliases;
  }

  set aliases(value: Alias[]) {
    this._aliases = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get species(): Organism {
    return this._species;
  }

  set species(value: Organism) {
    this._species = value;
  }

  get expressionSystem(): Organism {
    return this._expressionSystem;
  }

  set expressionSystem(value: Organism) {
    this._expressionSystem = value;
  }

  get detectionMethod(): CvTerm[] {
    return this._detectionMethod;
  }

  set detectionMethod(value: CvTerm[]) {
    this._detectionMethod = value;
  }

  get experimentalRole(): CvTerm {
    return this._experimentalRole;
  }

  set experimentalRole(value: CvTerm) {
    this._experimentalRole = value;
  }

  get biologicalRole(): CvTerm {
    return this._biologicalRole;
  }

  set biologicalRole(value: CvTerm) {
    this._biologicalRole = value;
  }

  get experimentalPreparations(): CvTerm[] {
    return this._experimentalPreparations;
  }

  set experimentalPreparations(value: CvTerm[]) {
    this._experimentalPreparations = value;
  }

  get parameters(): TypeValueModel[] {
    return this._parameters;
  }

  set parameters(value: TypeValueModel[]) {
    this._parameters = value;
  }

  get confidences(): TypeValueModel[] {
    return this._confidences;
  }

  set confidences(value: TypeValueModel[]) {
    this._confidences = value;
  }
}
