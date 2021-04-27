import {Table} from './table.model';
import {Column} from './column.model';

export class ParticipantTable extends Table {
  public readonly expand = new Column('Expand', 'participantName', false, this);
  public readonly name = new Column('Name', 'shortLabel', false, this);
  public readonly ac = new Column('AC', 'participantAc', false, this);
  public readonly type = new Column('Type', 'type', false, this);
  public readonly identifier = new Column('Identifier', 'participantId', false, this);
  public readonly aliases = new Column('Aliases', 'aliases', false, this);
  public readonly description = new Column('Description', 'description', false, this);
  public readonly species = new Column('Species', 'species', false, this);
  public readonly expressionSystem = new Column('Expression System', 'expressionSystem', false, this);
  public readonly detectionMethods = new Column('Detection Methods', 'detectionMethod', false, this);
  public readonly experimentalRole = new Column('Experimental Role', 'experimentalRole', false, this);
  public readonly biologicalRole = new Column('Biological Role', 'biologicalRole', false, this);
  public readonly experimentalPreparations = new Column('Experimental Preparations', 'experimentalPreparations', false, this);
  public readonly parameters = new Column('Parameters', 'parameters', false, this);
  public readonly confidences = new Column('Confidences', 'confidences', false, this);
  public readonly crossReferences = new Column('Cross References', 'xrefs', false, this);
  public readonly annotations = new Column('Annotations', 'annotations', false, this);
}
