import {CvTerm} from './cv-term.model';
import {CrossReference} from './cross-reference.model';

export class FeaturesDetails {
  private _participantAc: string;
  private _name: string;
  private _regionType: CvTerm;
  private _interactor: CrossReference;
  private _interactorName: string;
  private _range: string[];

  constructor(participantAc: string, name: string, regionType: CvTerm, interactor: CrossReference, interactorName: string, range: string[]) {
    this._participantAc = participantAc;
    this._name = name;
    this._regionType = regionType;
    this._interactor = interactor;
    this._interactorName = interactorName;
    this._range = range;
  }

  get participantAc(): string {
    return this._participantAc;
  }

  set participantAc(value: string) {
    this._participantAc = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get regionType(): CvTerm {
    return this._regionType;
  }

  set regionType(value: CvTerm) {
    this._regionType = value;
  }

  get interactor(): CrossReference {
    return this._interactor;
  }

  set interactor(value: CrossReference) {
    this._interactor = value;
  }

  get interactorName(): string {
    return this._interactorName;
  }

  set interactorName(value: string) {
    this._interactorName = value;
  }

  get range(): string[] {
    return this._range;
  }

  set range(value: string[]) {
    this._range = value;
  }
}
