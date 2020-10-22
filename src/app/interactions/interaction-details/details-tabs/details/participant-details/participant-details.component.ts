import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import * as $ from 'jquery';
import 'datatables.net';
import {environment} from '../../../../../../environments/environment';
import {Column} from "../../../../shared/model/tables/column.model";
import {ParticipantTable} from "../../../../shared/model/tables/participant-table.model";

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

  private _columns = new ParticipantTable();

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
          data: this._columns.select.key,
          defaultContent: ' ',
          title: this._columns.select.name,
          render: function (data, type, full, meta) {
            if (type === 'display') {
              return '<input type="checkbox" id="' + full.participantId.identifier + '" name="check" value="' + data + '"/>';
            }
            return data;
          }
        },
        {
          data: this._columns.ac.key,
          title: this._columns.ac.name
        },
        {
          data: this._columns.type.key,
          title: this._columns.type.name,
          defaultContent: ''
        },
        {
          data: this._columns.identifier.key,
          title: this._columns.identifier.name,
          defaultContent: ''
        },
        {
          data: this._columns.aliases.key,
          title: this._columns.aliases.name,
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
          data: this._columns.description.key,
          title: this._columns.description.name,
          defaultContent: ''
        },
        {
          data: this._columns.species.key,
          title: this._columns.species.name,
          defaultContent: ''
        },
        {
          data: this._columns.expressionSystem.key,
          title: this._columns.expressionSystem.name,
          defaultContent: ''
        },
        {
          data: this._columns.detectionMethods.key,
          title: this._columns.detectionMethods.name,
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
          data: this._columns.experimentalRole.key,
          title: this._columns.experimentalRole.name,
          defaultContent: ''
        },
        {
          data: this._columns.biologicalRole.key,
          title: this._columns.biologicalRole.name,
          defaultContent: ''
        },
        {
          data: this._columns.experimentalPreparations.key,
          title: this._columns.experimentalPreparations.name,
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
          data: this._columns.parameters.key,
          title: this._columns.parameters.name,
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
          data: this._columns.confidences.key,
          title: this._columns.confidences.name,
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
          data: this._columns.crossReferences.key,
          title: this._columns.crossReferences.name,
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
          data: this._columns.annotations.key,
          title: this._columns.annotations.name,
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


  get columns(): Column[] {
    return this._columns;
  }

  get participantsSelected(): string[] {
    return this._participantsSelected;
  }

  set participantsSelected(value: string[]) {
    this._participantsSelected = value;
  }
}
