import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ParticipantDetails} from '../../../../shared/model/interaction-details/participant-details.model';

import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'iv-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})
export class ParticipantDetailsComponent implements OnInit {

  private _participantDetails: ParticipantDetails;
  @Input() interactionAc: string;

  dataTable: any;
  columnView = 'participants_columnView';

  private _columnNames: string[] = ['Ac', 'Type', 'Identifier', 'Aliases', 'Description', 'Species', 'Expression System',
                                   'Detection Methods', 'Experimental Role', 'Biological Role', 'Experimental Preparations',
                                   'Parameters', 'Confidences', 'Cross References', 'Annotations'];

  constructor() { }

  ngOnInit(): void {
    this.initDataTable();
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
        {data: 'type.shortName', title: 'Type', defaultContent: ''},
        {data: 'participantId.identifier', title: 'Identifier', defaultContent: ''},
        {data: 'aliases', title: 'Aliases', defaultContent: '',
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
        {data: 'description', title: 'Description', defaultContent: ''},
        {data: 'species.scientificName', title: 'Species', defaultContent: ''},
        {data: 'expressionSystem', title: 'Expression System', defaultContent: ''},
        {data: 'detectionMethod', title: 'Detection Methods', defaultContent: '',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div>' +
                  '<span class="detailsCell">' + d.shortName + '</span>' +
                  '</div>';
              }).join('');
            }
          }},
        {data: 'experimentalRole.shortName', title: 'Experimental Role', defaultContent: ''},
        {data: 'biologicalRole.shortName', title: 'Biological Role', defaultContent: ''},
        {data: 'experimentalPreparations', title: 'Experimental Preparations', defaultContent: '',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div>' +
                  '<span class="detailsCell">' + d.shortName + '</span>' +
                  '</div>';
              }).join('');
            }
          }},
        {data: 'parameters', title: 'Parameters', defaultContent: '',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div class="margin-bottom-medium">' +
                  '<span class="detailsCell">' + d.type.shortName + ':' + d.value + '(' + d.unit.shortName + ') </span>' +
                  '</div>';
              }).join('');
            }
          }},
        {data: 'confidences', title: 'Confidences', defaultContent: '',
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
        {data: 'xrefs', title: 'Cross References', defaultContent: '',
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
        {data: 'annotations', title: 'Annotations', defaultContent: '',
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
  }


  get columnNames(): string[] {
    return this._columnNames;
  }

  get participantDetails(): ParticipantDetails {
    return this._participantDetails;
  }

  @Input()
  set participantDetails(value: ParticipantDetails) {
    this._participantDetails = value;
  }
}
