import {Table} from './table.model';
import {Column} from './column.model';

export class InteractorTable extends Table {
  public readonly select = new Column('Select', 'interactorAc', false, this)
  public readonly accession = new Column('Accession', 'interactorAc', false, this)
  public readonly name = new Column('Name', 'interactorName', false, this)
  public readonly preferredId = new Column('Preferred ID', 'interactorPreferredIdentifier', false, this)
  public readonly type = new Column('Type', 'interactorType', false, this)
  public readonly species = new Column('Species', 'interactorSpecies', false, this)
  public readonly description = new Column('Description', 'interactorDescription', false, this)
  public readonly alias = new Column('Alias', 'interactorAlias', false, this)
  public readonly alternativeIds = new Column('Alternative IDs', 'interactorAltIds', false, this)
  public readonly interactionSearchCount = new Column('Interactions found in current search', 'interactionSearchCount', false, this)
  public readonly interactionCount = new Column('Total interactions in all IntAct', 'interactionCount', false, this)
}
