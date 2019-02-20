export class Annotation {
  private _topic: string;
  private _description: string;
  private _miIdentifier: string;

  constructor(topic: string, description: string, miIdentifier: string) {
    this._topic = topic;
    this._description = description;
    this._miIdentifier = miIdentifier;
  }

  get topic(): string {
    return this._topic;
  }

  set topic(value: string) {
    this._topic = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get miIdentifier(): string {
    return this._miIdentifier;
  }

  set miIdentifier(value: string) {
    this._miIdentifier = value;
  }
}
