import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Column} from '../../../interactions/shared/model/tables/column.model';
import {FoundationUtils} from '../../utils/foundation-utils';


@Component({
  selector: 'ip-column-toggle',
  templateUrl: './column-toggle.component.html',
  styleUrls: ['./column-toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnToggleComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() columns: Column[];
  @Input() dataTable: DataTables.Api;
  @Input() columnView: string;
  @Input() isTabActive: boolean;
  @Output() columnSelectionChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  private columnsSelected: string[];

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.initColumnVisibility()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isTabActive && changes.isTabActive.firstChange && changes.isTabActive.currentValue) {
      this.initColumnVisibility()
    }
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

}
