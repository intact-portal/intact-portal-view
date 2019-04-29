import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'iv-column-toggle',
  templateUrl: './column-toggle.component.html',
  styleUrls: ['./column-toggle.component.css']
})
export class ColumnToggleComponent implements OnInit, AfterViewInit {

  @Input() columnNames: string[];
  @Input() dataTable: any;
  @Input() columnView: string;

  private columnToggleHover = false;
  private columnsSelected: string[];

  constructor() {}

  ngOnInit() {
    console.log('Columns to toggle passed - ' + this.columnNames);

    if (localStorage.getItem(this.columnView + '_columns') != null) {
      this.columnsSelected = JSON.parse(localStorage.getItem(this.columnView + '_columns'));
    } else {
      this.columnsSelected = [];
    }

    this.dataTable.columns().every(function (index) {

      if (localStorage.getItem(this.columnView + '_columns') != null) {
        if (localStorage.getItem(this.columnView + '_columns').indexOf($(this.header()).text()) >= 0) {
          this.visible(!this.visible());
        }
      }

    });
  }

  ngAfterViewInit(): void {
    const table = $('#' + this.columnView);

    table.addClass('hiddenToggle');
    this.showHideColumns();

    $(document).click(function(e) {

      if ($(e.target).closest('.columnToggle').length === 0) {
        if (table.is(':visible') && e.target.className !== 'list-view') {
          table.toggle();

          $('i#iconColumn').removeClass('icon-caret-up').addClass('icon-caret-down');
          console.log('just clicked outside your .container div');

        }
      }
    });

  }

  private toggleColumnView() {
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

    console.log('COLUMNS SELECTED ' + this.columnsSelected);

    localStorage.setItem(this.columnView + '_columns', JSON.stringify(this.columnsSelected));
  }

  isColumnSelected(column: string) {
    return this.columnsSelected !== undefined ? this.columnsSelected.indexOf(column) < 0 : false;
  }

  private showHideColumns(): void {
    const table = this.dataTable;
    $('input[type="checkbox"].list-view').on('click', function(e) {

      // Get the column API object
      const column = table.column($(this).attr('data-column'));

      // Toggle the visibility
      column.visible(!column.visible());
    });
  }
}
