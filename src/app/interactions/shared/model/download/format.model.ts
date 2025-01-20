export class Format {

  public static tab2_5 = new Format('tsv', 'miTab25', 'miTab<sub>2.5</sub>');
  public static tab2_6 = new Format('tsv', 'miTab26', 'miTab<sub>2.6</sub>');
  public static tab2_7 = new Format('tsv', 'miTab27', 'miTab<sub>2.7</sub>');
  public static xml2_5 = new Format('xml', 'miXML25', 'miXML<sub>2.5</sub>');
  public static xml3_0 = new Format('xml', 'miXML30', 'miXML<sub>3.0</sub>');
  public static json = new Format('json', 'miJSON', 'miJSON<sub>1.0</sub>');
  public static featureTab = new Format('tsv', 'featureTab', 'featureTab<sub>1.0</sub>');

  private static _interactionListFormats: Format[] = [
    Format.tab2_5,
    Format.tab2_6,
    Format.tab2_7,
    Format.xml2_5,
    Format.xml3_0,
    Format.json,
  ];

  private static _singleInteractionFormats: Format[] = [
    Format.tab2_5,
    Format.tab2_6,
    Format.tab2_7,
    Format.xml2_5,
    Format.xml3_0,
    Format.json,
    Format.featureTab,
  ];

  static get interactionListFormats(): Format[] {
    return [...this._interactionListFormats];
  }

  static get singleInteractionFormats(): Format[] {
    return [...this._singleInteractionFormats];
  }

  public readonly extension: string;
  public readonly name: string;
  public readonly html: string;

  private constructor(extension: string, name: string, html: string) {
    this.extension = extension;
    this.name = name;
    this.html = html;
  }
}
