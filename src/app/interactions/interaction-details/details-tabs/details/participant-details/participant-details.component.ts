import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import * as $ from 'jquery';
import 'datatables.net';
import {environment} from '../../../../../../environments/environment';

const baseURL = environment.intact_portal_ws;

@Component({
  selector: 'ip-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})
export class ParticipantDetailsComponent implements OnInit, OnChanges {

  @Input() interactionAc: string;
  @Input() participantTab: boolean;

  dataTable: any;
  columnView = 'participants_columnView';

  @Output() participantChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  private _columnNames: string[] = [
    'Select',
    'Ac',
    'Type',
    'Identifier',
    'Aliases',
    'Description',
    'Species',
    'Expression System',
    'Detection Methods',
    'Experimental Role',
    'Biological Role',
    'Experimental Preparations',
    'Parameters',
    'Confidences',
    'Cross References',
    'Annotations'
  ];

  private _participantsSelected = [];

  constructor() { }

  ngOnInit(): void {
    this.initDataTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.participantTab.currentValue) {

      // This fixes the alignment between the th and td when we have activated scrollX:true
      const table: any = $('#participantTable');
      this.dataTable = table.DataTable().columns.adjust().draw();
    }
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
      scrollX: true,
      ajax: {
        url: `${baseURL}/graph/participants/datatables/` + this.interactionAc,
        type: 'POST',
      //   error: function(xhr, error, code) { console.log(error); },
      //   success: function(result) {console.log(JSON.stringify(result))},
        data: function ( d ) {
          d.page = d.start / d.length;
          d.pageSize = d.length;
        }
      },
      columns: [
        {
          data: 'participantName',
          defaultContent: ' ',
          title: this.columnNames[0],
          render: function (data, type, full, meta) {
            if (type === 'display') {
              return '<input type="checkbox" id="' + full.participantId.identifier + '" name="check" value="' + data + '"/>';
            }
            return data;
          }
        },
        {
          data: 'participantAc',
          title: this.columnNames[1]
        },
        {
          data: 'type.shortName',
          title: this.columnNames[2],
          defaultContent: ''
        },
        {
          data: 'participantId.identifier',
          title: this.columnNames[3],
          defaultContent: ''
        },
        {
          data: 'aliases',
          title: this.columnNames[4],
          defaultContent: '',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div>' +
                  '<span class="detailsCell">' + d.name + '</span>' +
                  '</div>';
              }).join('');
            }
          }
        },
        {
          data: 'description',
          title: this.columnNames[5],
          defaultContent: ''
        },
        {
          data: 'species.scientificName',
          title: this.columnNames[6],
          defaultContent: ''
        },
        {
          data: 'expressionSystem.scientificName',
          title: this.columnNames[7],
          defaultContent: ''
        },
        {
          data: 'detectionMethod',
          title: this.columnNames[8],
          defaultContent: '',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div>' +
                  '<span class="detailsCell">' + d.shortName + '</span>' +
                  '</div>';
              }).join('');
            }
          }},
        {
          data: 'experimentalRole.shortName',
          title: this.columnNames[9],
          defaultContent: ''
        },
        {
          data: 'biologicalRole.shortName',
          title: this.columnNames[10],
          defaultContent: ''
        },
        {
          data: 'experimentalPreparations',
          title: this.columnNames[11],
          defaultContent: '',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div>' +
                  '<span class="detailsCell">' + d.shortName + '</span>' +
                  '</div>';
              }).join('');
            }
          }},
        {
          data: 'parameters',
          title: this.columnNames[12],
          defaultContent: '',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div class="margin-bottom-medium">' +
                  '<span class="detailsCell">' + d.type.shortName + ':' + d.value + '(' + d.unit.shortName + ') </span>' +
                  '</div>';
              }).join('');
            }
          }},
        {
          data: 'confidences',
          title: this.columnNames[13],
          defaultContent: '',
          render: function ( data, type, row, meta ) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div class="margin-bottom-medium">' +
                  '<span class="detailsCell"> ' + d.type.shortName + ':' + d.value + '</span>' +
                  '</div>';
              }).join('');
            }
          }
        },
        {
          data: 'xrefs',
          title: this.columnNames[14],
          defaultContent: '',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return d.qualifier != null ?
                  '<div class="margin-bottom-medium">' +
                  '<span class="detailsXrefCell margin-right-medium">' +
                  '<i class="icon icon-common icon-tag"></i>  ' + d.qualifier.shortName + '</span>' +
                  '<span class="detailsCell">' + d.database.shortName + ':' + d.identifier + '</span>' +
                  '</div>'  :
                  '<div class="margin-bottom-medium">' +
                  '<span class="detailsCell">' + d.database.shortName + ':' + d.identifier + '</span>' +
                  '</div>';
              }).join('');
            }
          }
        },
        {
          data: 'annotations',
          title: this.columnNames[15],
          defaultContent: '',
          render: function ( data, type, row, meta ) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div class="margin-bottom-medium">' +
                  '<span class="detailsAnnotationCell margin-right-medium">' +
                  ' <i class="icon icon-common icon-tag"></i>  ' + d.topic.shortName + '</span>' +
                  '<span class="detailsCell">' + d.description + '</span> ' +
                  '</div>';
              }).join('');
            }
          }
        }
      ],
    });

    $('#participantTable').on('change', 'input[type=\'checkbox\']', (e) => {

      const participantSel = e.currentTarget.id;

      if (this.participantsSelected !== undefined) {

        $(e.target.parentNode.parentNode).addClass('rowSelected');

        if (!this.participantsSelected.includes(participantSel)) {
          this.participantsSelected.push(participantSel);
          this.participantsSelected = this.participantsSelected.slice();
        } else {
          this.participantsSelected.splice(this.participantsSelected.indexOf(participantSel), 1);
          this.participantsSelected = this.participantsSelected.slice();

          $( '#' + participantSel + ':checkbox').prop('checked', false);
          $(e.target.parentNode.parentNode).removeClass('rowSelected');
        }

        console.info(this.participantsSelected);

        this.participantChanged.emit(this.participantsSelected);
      }

    });
  }


  get columnNames(): string[] {
    return this._columnNames;
  }

  get participantsSelected(): string[] {
    return this._participantsSelected;
  }

  set participantsSelected(value: string[]) {
    this._participantsSelected = value;
  }
}
