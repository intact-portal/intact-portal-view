import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {ResultTable} from '../../../interactions/shared/model/interactions-results/result-table-interface';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'ip-column-toggle',
    templateUrl: './column-toggle.component.html',
    styleUrls: ['./column-toggle.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ColumnToggleComponent implements OnInit {

  @Input() table: Observable<ResultTable>;
  public table$: ResultTable;
  @Output() columnSelectionChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  active: boolean;
  private columnsSelected: string[];
  private tableInit: Map<ResultTable, string[]> = new Map();

  constructor() {
  }

  ngOnInit() {
    this.table
      .pipe(untilDestroyed(this))
      .subscribe(table => {
        this.table$ = table;
        if (!table) {
          return;
        }
        if (this.tableInit.has(table)) {
          this.columnsSelected = this.tableInit.get(table)
        } else {
          setTimeout(() => {
            this.tableInit.set(table, this.initColumnVisibility())
          }, 0);
        }
      })
  }

  private initColumnVisibility(): string[] {
    const columnView = this.table$.columnView + '_columns';

    // Initialize columns that are already selected to view
    if (localStorage.getItem(columnView) != null) {
      this.columnsSelected = JSON.parse(localStorage.getItem(this.table$.columnView + '_columns'));
    } else {
      this.columnsSelected = [...this.table$.columns].filter(column => column.hiddenByDefault).map(column => column.name);
    }

    // Hide the columns from the table that are already selected to hide
    const columnsToHide = this.columnsSelected.map(value => `${value}:name`);
    this.table$.dataTable.columns(columnsToHide).visible(false);
    return this.columnsSelected;
  }

  onChangeColumnSelected(columnName: string, value: boolean) {
    if (!this.columnsSelected.includes(columnName)) {
      this.columnsSelected.push(columnName);
    } else {
      this.columnsSelected.splice(this.columnsSelected.indexOf(columnName), 1);
    }
    const column = this.table$.dataTable.columns(`${columnName}:name`);
    // Toggle the visibility
    column.visible(value);
    localStorage.setItem(this.table$.columnView + '_columns', JSON.stringify(this.columnsSelected));
    this.columnSelectionChanged.emit(this.columnsSelected);
  }

  isColumnSelected(column: string) {
    return this.columnsSelected !== undefined ? this.columnsSelected.indexOf(column) < 0 : false;
  }

  toggleActivate(status: boolean) {
    this.active = status;
  }

}
