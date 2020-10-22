import {Table} from "./table.model";
import {Column} from "./column.model";

export class ParticipantTable extends Table {
  public readonly select = new Column(this, 'Select', 'participantName');
  public readonly ac = new Column(this, 'Ac', 'participantAc');
  public readonly type = new Column(this, 'Type', 'type.shortName');
  public readonly identifier = new Column(this, 'Identifier', 'participantId.identifier');
  public readonly aliases = new Column(this, 'Aliases', 'aliases');
  public readonly description = new Column(this, 'Description', 'description');
  public readonly species = new Column(this, 'Species', 'species.scientificName');
  public readonly expressionSystem = new Column(this, 'Expression System', 'expressionSystem.scientificName');
  public readonly detectionMethods = new Column(this, 'Detection Methods', 'detectionMethod');
  public readonly experimentalRole = new Column(this, 'Experimental Role', 'experimentalRole.shortName');
  public readonly biologicalRole = new Column(this, 'Biological Role', 'biologicalRole.shortName');
  public readonly experimentalPreparations = new Column(this, 'Experimental Preparations', 'experimentalPreparations');
  public readonly parameters = new Column(this, 'Parameters', 'parameters');
  public readonly confidences = new Column(this, 'Confidences', 'confidences');
  public readonly crossReferences = new Column(this, 'Cross References', 'xrefs');
  public readonly annotations = new Column(this, 'annotations', 'annotations');
}
