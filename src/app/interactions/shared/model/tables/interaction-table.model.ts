import {Table} from './table.model';
import {Column} from './column.model';

export class InteractionTable extends Table {
  public readonly id = new Column('Select', 'binaryInteractionId', false, this);
  public readonly moleculeA = new Column('Molecule A', 'moleculeA', false, this);
  public readonly moleculeB = new Column('Molecule B', 'moleculeB', false, this);
  public readonly identifierA = new Column('Identifier A', 'idA', false, this);
  public readonly identifierB = new Column('Identifier B', 'idB', false, this);
  public readonly typeA = new Column('Type A', 'typeA', false, this);
  public readonly typeB = new Column('Type B', 'typeB', false, this);
  public readonly speciesA = new Column('Species A', 'speciesA', false, this);
  public readonly speciesB = new Column('Species B', 'speciesB', false, this);
  public readonly hostOrganism = new Column('Host Organism', 'hostOrganism', false, this);
  public readonly negative = new Column('Positive interaction', 'negative', false, this);
  public readonly detectionMethod = new Column('Detection Method', 'detectionMethod', false, this);
  public readonly identificationMethodA = new Column('Identification Methods A', 'identificationMethodsA', true, this);
  public readonly identificationMethodB = new Column('Identification Methods B', 'identificationMethodsB', true, this);
  public readonly publicationIdentifiers = new Column('Publication IDs', 'publicationIdentifiers', false, this);
  public readonly type = new Column('Interaction Type', 'type', false, this);
  public readonly ac = new Column('Interaction AC', 'ac', false, this);
  public readonly database = new Column('Database', 'sourceDatabase', true, this);
  public readonly confidenceValue = new Column('Confidence Value', 'confidenceValues', false, this);
  public readonly expansionMethod = new Column('Expansion Method', 'expansionMethod', false, this);
  public readonly experimentalRoleA = new Column('Experimental Role A', 'experimentalRoleA', true, this);
  public readonly experimentalRoleB = new Column('Experimental Role B', 'experimentalRoleB', true, this);
  public readonly biologicalRoleA = new Column('Biological Role A', 'biologicalRoleA', true, this);
  public readonly biologicalRoleB = new Column('Biological Role B', 'biologicalRoleB', true, this);
  public readonly aliasesA = new Column('Aliases A', 'aliasesA', false, this);
  public readonly aliasesB = new Column('Aliases B', 'aliasesB', false, this);
  public readonly featureCount = new Column('Feature count', 'featureCount', false, this);
  public readonly parameters = new Column('Parameters', 'parameters', true, this);
  public readonly annotationsA = new Column('Annotations A', 'annotationsA', true, this);
  public readonly annotationsB = new Column('Annotations B', 'annotationsB', true, this);
  public readonly annotations = new Column('Interaction Annotations', 'annotations', false, this);
}
