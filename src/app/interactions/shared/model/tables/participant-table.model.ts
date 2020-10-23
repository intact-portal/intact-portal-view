import {Table} from "./table.model";
import {Column} from "./column.model";

export class ParticipantTable extends Table {
  public readonly expand = new Column(this, 'Expand', 'participantName');
  public readonly name = new Column(this, 'Name', 'participantName');
  public readonly ac = new Column(this, 'AC', 'participantAc');
  public readonly type = new Column(this, 'Type', 'type');
  public readonly identifier = new Column(this, 'Identifier', 'participantId');
  public readonly aliases = new Column(this, 'Aliases', 'aliases');
  public readonly description = new Column(this, 'Description', 'description');
  public readonly species = new Column(this, 'Species', 'species');
  public readonly expressionSystem = new Column(this, 'Expression System', 'expressionSystem');
  public readonly detectionMethods = new Column(this, 'Detection Methods', 'detectionMethod');
  public readonly experimentalRole = new Column(this, 'Experimental Role', 'experimentalRole');
  public readonly biologicalRole = new Column(this, 'Biological Role', 'biologicalRole');
  public readonly experimentalPreparations = new Column(this, 'Experimental Preparations', 'experimentalPreparations');
  public readonly parameters = new Column(this, 'Parameters', 'parameters');
  public readonly confidences = new Column(this, 'Confidences', 'confidences');
  public readonly crossReferences = new Column(this, 'Cross References', 'xrefs');
  public readonly annotations = new Column(this, 'Annotations', 'annotations');
}
