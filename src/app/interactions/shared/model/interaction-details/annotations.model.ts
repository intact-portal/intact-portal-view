export class Annotations {
  private _topic: string;
  private _description: string;

  constructor(topic: string, description: string) {
    this._topic = topic;
    this._description = description;
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
}
