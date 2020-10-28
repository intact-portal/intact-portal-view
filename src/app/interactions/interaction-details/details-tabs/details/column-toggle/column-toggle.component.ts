import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import * as $ from 'jquery';
import {Column} from "../../../../shared/model/tables/column.model";

@Component({
  selector: 'ip-column-toggle',
  templateUrl: './column-toggle.component.html',
  styleUrls: ['./column-toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnToggleComponent implements OnInit, AfterViewInit {

  @Input() columns: Column[];
  @Input() dataTable: any;
  @Input() columnView: string;
  @Output() columnSelectionChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  columnToggleHover = false;
  private columnsSelected: string[];

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    const columnView = this.columnView + '_columns';

    // Initialize columns that are already selected to view
    if (localStorage.getItem(columnView) != null) {
      this.columnsSelected = JSON.parse(localStorage.getItem(this.columnView + '_columns'));
    } else {
      this.columnsSelected = this.columns.filter(column => column.hiddenByDefault).map(column => column.name);
    }

    let columnsToHide = this.columnsSelected;

    // Hide the columns from the table that are already selected to hide
    this.dataTable.columns().every(function () {
        if (columnsToHide.indexOf($(this.header()).text()) >= 0) {
          this.visible(!this.visible());
        }
      }
    );
  }

  ngAfterViewInit(): void {
    const table = $('#' + this.columnView);

    table.addClass('hiddenToggle');
    this.showHideColumns();

    this.cdRef.detectChanges();

    // Hide toggle list pop up when select somewhere outside the container
    $(document).click(function (e) {
      if ($(e.target).closest('.columnToggle').length === 0) {
        if (table.is(':visible') && e.target.className !== 'list-view') {
          table.toggle();

          $('i#iconColumn').removeClass('icon-caret-up').addClass('icon-caret-down');
        }
      }
    });
  }

  toggleColumnView() {
    const table = $('#' + this.columnView);

    table.toggle();

    table.is(':visible') ?
      $('i#iconColumn').removeClass('icon-caret-down').addClass('icon-caret-up') :
      $('i#iconColumn').removeClass('icon-caret-up').addClass('icon-caret-down');
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

    $('#' + this.columnView + ' input[type="checkbox"].list-view').on('click', function (e) {

      // Get the column API object
      const column = table.column($(this).attr('data-column'));


      // Toggle the visibility
      column.visible(!column.visible());
    });
  }
}
