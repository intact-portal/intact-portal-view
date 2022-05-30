import {Column} from '../tables/column.model';

export interface ResultTable {
  dataTable: DataTables.Api

  columnView: string;

  clearTableSelection(): void;

  get columns(): Column[];

  get isActive(): boolean;
}
