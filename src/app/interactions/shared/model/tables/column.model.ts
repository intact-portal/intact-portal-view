import {Table} from './table.model';

export class Column {
  constructor(
    public readonly title: string,
    public readonly data: string,
    public readonly hiddenByDefault: boolean = false,
    table: Table
  ) {
    table.push(this);
  }
}
