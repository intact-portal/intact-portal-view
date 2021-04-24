import {Table} from "./table.model";

export class Column {
  public readonly title: string;
  public readonly data: string;
  public readonly hiddenByDefault: boolean;

  constructor(table: Table, name: string, key: string, hiddenByDefault: boolean = false) {
    table.push(this);
    this.title = name;
    this.data = key;
    this.hiddenByDefault = hiddenByDefault
  }
}
