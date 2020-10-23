import {Table} from "./table.model";
import {Column} from "./column.model";

export class InteractorTable extends Table {
  public readonly select = new Column(this, 'Select', 'interactorAc')
  public readonly accession = new Column(this, 'Accession', 'interactorAc')
  public readonly name = new Column(this, 'Name', 'interactorName')
  public readonly preferredId = new Column(this, 'Preferred ID', 'interactorPreferredIdentifier')
  public readonly type = new Column(this, 'Type', 'interactorType')
  public readonly species = new Column(this, 'Species', 'interactorSpecies')
  public readonly description = new Column(this, 'Description', 'interactorDescription')
  public readonly alias = new Column(this, 'Alias', 'interactorAlias')
  public readonly alternativeIds = new Column(this, 'Alternative IDs', 'interactorAltIds')
  public readonly interactionSearchCount = new Column(this, 'Interactions found in current search', 'interactionSearchCount')
  public readonly interactionCount = new Column(this, 'Total interactions in all IntAct', 'interactionCount')
}
