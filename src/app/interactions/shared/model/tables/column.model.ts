import {Table} from "./table.model";

export class Column {
  public readonly table: Table;
  public readonly name: string;
  public readonly key: string;
  public readonly hiddenByDefault: boolean;

  constructor(table: Table, name: string, key: string, hiddenByDefault: boolean = false) {
    this.table = table;
    this.table.push(this);
    this.name = name;
    this.key = key;
    this.hiddenByDefault = hiddenByDefault
  }
}
