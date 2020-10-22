import {Table} from "./table.model";
import {Column} from "./column.model";

export class InteractionTable extends Table {
  public readonly id = new Column(this, 'Select', 'binaryInteractionId');
  public readonly moleculeA = new Column(this, 'Molecule A', 'moleculeA');
  public readonly moleculeB = new Column(this, 'Molecule B', 'moleculeB');
  public readonly identifierA = new Column(this, 'Identifier A', 'idA');
  public readonly identifierB = new Column(this, 'Identifier B', 'idB');
  public readonly typeA = new Column(this, 'Type A', 'typeA');
  public readonly typeB = new Column(this, 'Type B', 'typeB');
  public readonly speciesA = new Column(this, 'Species A', 'speciesA');
  public readonly speciesB = new Column(this, 'Species B', 'speciesB');
  public readonly hostOrganism = new Column(this, 'Host Organism', 'hostOrganism');
  public readonly detectionMethod = new Column(this, 'Detection Method', 'detectionMethod');
  public readonly publicationIdentifiers = new Column(this, 'Publication Ids', 'publicationIdentifiers');
  public readonly type = new Column(this, 'Interaction Type', 'type');
  public readonly ac = new Column(this, 'Interaction Ac', 'ac');
  public readonly database = new Column(this, 'Database', 'sourceDatabase', true);
  public readonly confidenceValue = new Column(this, 'Confidence Value', 'confidenceValues');
  public readonly expansionMethod = new Column(this, 'Expansion Method', 'expansionMethod');
  public readonly experimentalRoleA = new Column(this, 'Experimental Role A', 'experimentalRoleA', true);
  public readonly experimentalRoleB = new Column(this, 'Experimental Role B', 'experimentalRoleB', true);
  public readonly biologicalRoleA = new Column(this, 'Biological Role A', 'biologicalRoleA', true);
  public readonly biologicalRoleB = new Column(this, 'Biological Role B', 'biologicalRoleB', true);
  public readonly aliasesA = new Column(this, 'Aliases A', 'aliasesA');
  public readonly aliasesB = new Column(this, 'Aliases B', 'aliasesB');
  public readonly featureCount = new Column(this, 'Feature count', 'featureCount');
  public readonly parameters = new Column(this, 'Parameters', 'parameters', true);
  public readonly annotationsA = new Column(this, 'Annotations A', 'annotationsA', true);
  public readonly annotationsB = new Column(this, 'Annotations B', 'annotationsB', true);
  public readonly annotations = new Column(this, 'Interaction Annotations', 'annotations');
}
