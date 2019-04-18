import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ParticipantDetails} from '../../../../shared/model/interaction-details/participant-details.model';

import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'iv-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})
export class ParticipantDetailsComponent implements OnInit, AfterViewInit {

  private _participantDetails: ParticipantDetails;
  @Input() interactionAc: string;

  dataTable: any;

  private columnToggleHover = false;

  private columnsSelected: string[];

  constructor() { }

  ngOnInit(): void {
    this.initDataTable();
    $('#columnView').addClass('hiddenToggle');

    if (localStorage.getItem('participant_columns') != null) {
      this.columnsSelected = JSON.parse(localStorage.getItem('participant_columns'));
    } else {
      this.columnsSelected = [];
    }

    this.dataTable.columns().every(function (index) {

      if (localStorage.getItem('participant_columns') != null) {
        if (localStorage.getItem('participant_columns').indexOf($(this.header()).text()) >= 0) {
          this.visible(!this.visible());
        }
      }

    });
  }

  ngAfterViewInit(): void {
    this.showHideColumns();

    $(document).click(function(e) {

      if ($(e.target).closest('.columnToggle').length === 0) {
        if ( $('#columnView').is(':visible') && e.target.className !== 'list-view') {
          $('#columnView').toggle();
          $('i#iconColumn').removeClass('icon-caret-up').addClass('icon-caret-down');
          console.log('just clicked outside your .container div');

        }
      }
    });

  }

  private initDataTable(): void {
    const table: any = $('#participantTable');
    this.dataTable = table.DataTable({
      bSort: false,
      searching: false,
      paging: true,
      lengthMenu: [ 10, 25, 50, 75, 100 ],
      pageLength: 10,
      pagingType: 'full_numbers',
      processing: true,
      serverSide: true,
      dom: '<"top"li>rt<"bottom"p><"clear">',
      ajax: {
        url: '/detailsService/participants/datatables/' + this.interactionAc,
        type: 'POST',
      //   error: function(xhr, error, code) { console.log(error); },
      //   success: function(result) {console.log(JSON.stringify(result))},
        data: function ( d ) {
          d.page = d.start / d.length;
          d.pageSize = d.length;
        }
      },
      columns: [
        {data: 'participantAc', title: 'Ac'},
        {data: 'type.shortName', title: 'Type'},
        {data: 'participantId.identifier', title: 'Identifier'},
        {data: 'aliases', title: 'Aliases', render: '[, ].name'},
        {data: 'description', title: 'Description'},
        {data: 'species.scientificName', title: 'Species'},
        {data: 'expressionSystem', title: 'Expression System'},
        {data: 'detectionMethod', title: 'Detection Methods', render: '[, ].shortName'},
        {data: 'experimentalRole.shortName', title: 'Experimental Role'},
        {data: 'biologicalRole.shortName', title: 'Biological Role'},
        {data: 'experimentalPreparations', title: 'Experimental Preparations', render: '[, ].shortName'},
        {data: 'parameters', title: 'Parameters'},
        {data: 'confidences', title: 'Confidences'},
        {data: 'xrefs', title: 'Cross References'},
        {data: 'annotations', title: 'Annotations'}
      ],
    });
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

  isColumnSelected(column: string) {
    return this.columnsSelected !== undefined ? this.columnsSelected.indexOf(column) < 0 : false;
  }

  onChangeColumnSelected(column: string) {
    if (!this.columnsSelected.includes(column)) {
      this.columnsSelected.push(column);
    } else {
      this.columnsSelected.splice(this.columnsSelected.indexOf(column), 1);
    }

    localStorage.setItem('participant_columns', JSON.stringify(this.columnsSelected));
  }

  private toggleColumnView() {
    $('#columnView').toggle();

    $('#columnView').is(':visible') ?
      $('i#iconColumn').removeClass('icon-caret-down').addClass('icon-caret-up') :
      $('i#iconColumn').removeClass('icon-caret-up').addClass('icon-caret-down');


  }
  get participantDetails(): ParticipantDetails {
    return this._participantDetails;
  }

  @Input()
  set participantDetails(value: ParticipantDetails) {
    this._participantDetails = value;
  }
}
