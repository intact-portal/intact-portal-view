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
import {Column} from "../../../interactions/shared/model/tables/column.model";
import {FoundationUtils} from "../../utils/foundation-utils";

declare const $: any;

@Component({
  selector: 'ip-column-toggle',
  templateUrl: './column-toggle.component.html',
  styleUrls: ['./column-toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnToggleComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() columns: Column[];
  @Input() dataTable: any;
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

  private initColumnVisibility() {
    const columnView = this.columnView + '_columns';

    // Initialize columns that are already selected to view
    if (localStorage.getItem(columnView) != null) {
      this.columnsSelected = JSON.parse(localStorage.getItem(this.columnView + '_columns'));
    } else {
      this.columnsSelected = this.columns.filter(column => column.hiddenByDefault).map(column => column.name);
    }

    // Hide the columns from the table that are already selected to hide
    let columnsToHide = this.columnsSelected;
    this.dataTable.columns().every(function () {
        let title = $(this.header()).text();
        this.visible(columnsToHide.indexOf(title) < 0);
      }
    );
  }


  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
    this.showHideColumns();
    FoundationUtils.adjustWidth();
    let container = $('.column-toggle-container');
    // @ts-ignore
    container.foundation();
    // @ts-ignore
    container.foundationExtendEBI();
  }

  onChangeColumnSelected(column: string) {
    if (!this.columnsSelected.includes(column)) {
      this.columnsSelected.push(column);
    } else {
      this.columnsSelected.splice(this.columnsSelected.indexOf(column), 1);
    }
    localStorage.setItem(this.columnView + '_columns', JSON.stringify(this.columnsSelected));
    this.columnSelectionChanged.emit(this.columnsSelected);
  }

  isColumnSelected(column: string) {
    return this.columnsSelected !== undefined ? this.columnsSelected.indexOf(column) < 0 : false;
  }

  private showHideColumns(): void {
    const table = this.dataTable;

    $('#' + this.columnView + ' input[type="checkbox"]').on('click', function (e) {

      // Get the column API object
      const column = table.column($(this).attr('data-column'));
      // Toggle the visibility
      column.visible(!column.visible());
    });
  }
}