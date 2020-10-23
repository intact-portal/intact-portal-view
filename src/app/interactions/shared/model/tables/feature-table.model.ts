import {Table} from "./table.model";
import {Column} from "./column.model";

export class FeatureTable extends Table {
  public readonly ac = new Column(this, 'AC', 'featureAc');
  public readonly name = new Column(this, 'Name', 'name');
  public readonly type = new Column(this, 'Type', 'type');
  public readonly role = new Column(this, 'Role', 'role');
  public readonly rangePositions = new Column(this, 'Range Positions', 'ranges');
  public readonly linkedFeatures = new Column(this, 'Linked Features', 'linkedFeatures');
  public readonly participantName = new Column(this, 'Participant Name', 'participantName');
  public readonly participantIdentifier = new Column(this, 'Participant Identifier', 'participant');
  public readonly participantAc = new Column(this, 'Participant AC', 'participantAc');
  public readonly detectionMethods = new Column(this, 'Detection Methods', 'detectionMethods');
  public readonly parameters = new Column(this, 'Parameters', 'parameters');
  public readonly identifiers = new Column(this, 'Identifiers', 'identifiers');
  public readonly crossReferences = new Column(this, 'Cross References', 'xrefs');
  public readonly annotations = new Column(this, 'Annotations', 'annotations');
}
