import {Table} from './table.model';

export class Column implements DataTables.ColumnSettings {
  name: string;
  constructor(
    public readonly title: string,
    public readonly data: string,
    public readonly hiddenByDefault: boolean = false,
    table: Table
  ) {
    this.name = title;
    table.push(this);
  }
}
