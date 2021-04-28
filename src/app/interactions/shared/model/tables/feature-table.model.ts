import {Table} from './table.model';
import {Column} from './column.model';

export class FeatureTable extends Table {
  public readonly ac = new Column('AC', 'featureAc', true, this);
  public readonly name = new Column('Name', 'name', false, this);
  public readonly type = new Column('Type', 'type', false, this);
  public readonly role = new Column('Role', 'role', false, this);
  public readonly rangePositions = new Column('Range Positions', 'ranges', false, this);
  public readonly linkedFeatures = new Column('Linked Features', 'linkedFeatures', false, this);
  public readonly participantName = new Column('Participant Name', 'participantName', false, this);
  public readonly participantIdentifier = new Column('Participant Identifier', 'participant', false, this);
  public readonly participantAc = new Column('Participant AC', 'participantAc', true, this);
  public readonly detectionMethods = new Column('Detection Methods', 'detectionMethods', false, this);
  public readonly parameters = new Column('Parameters', 'parameters', false, this);
  public readonly identifiers = new Column('Identifiers', 'identifiers', false, this);
  public readonly crossReferences = new Column('Cross References', 'xrefs', false, this);
  public readonly annotations = new Column('Annotations', 'annotations', false, this);
}
