export class Format {
  private static _instances: Format[] = [];
  public readonly extension: string;
  public readonly name: string;
  public readonly html: string;

  private constructor(extension: string, name: string, html: string) {
    this.extension = extension;
    this.name = name;
    this.html = html;
    Format._instances.push(this);
  }

  public static tab2_5 = new Format('tab', 'miTab25', 'miTab<sub>2.5</sub>');
  public static tab2_6 = new Format('tab', 'miTab26', 'miTab<sub>2.6</sub>');
  public static tab2_7 = new Format('tab', 'miTab27', 'miTab<sub>2.7</sub>');
  public static xml2_5 = new Format('xml', 'miXML25', 'miXML<sub>2.5</sub>');
  public static xml3_0 = new Format('xml', 'miXML30', 'miXML<sub>3.0</sub>');
  public static json = new Format('json', 'miJSON', 'miJSON<sub>1.0</sub>');

  static get instances(): Format[] {
    return [...this._instances];
  }
}