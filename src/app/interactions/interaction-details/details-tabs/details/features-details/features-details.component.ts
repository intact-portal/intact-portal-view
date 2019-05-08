import {Component, Input, OnInit} from '@angular/core';

import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'iv-features-details',
  templateUrl: './features-details.component.html',
  styleUrls: ['./features-details.component.css']
})
export class FeaturesDetailsComponent implements OnInit {

  @Input() interactionAc: string;

  dataTable: any;
  columnView = 'features_columnView';

  private _columnNames: string[] = ['Ac', 'Name', 'Type', 'Role', 'Range Positions', 'Linked Features', 'Participant Name',
    'Participant Identifier', 'Participant Ac', 'Detection Methods', 'Parameters', 'Identifiers', 'Cross References', 'Annotations'];

  constructor() { }

  ngOnInit() {
    this.initDataTable();
  }

  private initDataTable(): void {
    const table: any = $('#featureTable');
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
        url: '/detailsService/features/datatables/' + this.interactionAc,
        type: 'POST',
        //   error: function(xhr, error, code) { console.log(error); },
        //   success: function(result) {console.log(JSON.stringify(result))},
        data: function ( d ) {
          d.page = d.start / d.length;
          d.pageSize = d.length;
        }
      },
      columns: [
        {data: 'participant.identifier', defaultContent: '', title: 'Selection',
          render: function (data, type, full, meta) {
            if (type === 'display') {
              return '<input type="checkbox" value="' + data + '" />';
            }
          }
        },
        {data: 'featureAc', title: 'Ac'},
        {data: 'name', title: 'Name'},
        {data: 'type.shortName', title: 'Type'},
        {data: 'role', title: 'Role', defaultContent: ''},
        {data: 'ranges', title: 'Range Positions', defaultContent: '', render: '[, ]'},
        {data: 'linkedFeatures', title: 'Linked Features', defaultContent: '',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div>' +
                          '<span class="detailsCell">' + d.shortName + '</span>' +
                       '</div>';
              }).join('');
            }
          }},
        {data: 'participantName', title: 'Participant Name', defaultContent: ''},
        {data: 'participant.identifier', title: 'Participant Identifier', defaultContent: ''},
        {data: 'participantAc', title: 'Participant Ac', defaultContent: ''},
        {data: 'detectionMethods', title: 'Detection Methods', defaultContent: '',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div>' +
                         '<span class="detailsCell">' + d.shortName + '</span>' +
                       '</div>';
              }).join('');
            }
          }
        },
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
        {data: 'identifiers', title: 'Identifiers', defaultContent: '',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div class="margin-bottom-medium">' +
                      '<span class="detailsCell">' + d.database.shortName + ':' + d.identifier + '</span>' +
                      '</div>';
              }).join('');
            }
          }},
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
          }},
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
          }}
      ],
      // columnDefs: [ {
      //   targets: 0,
      //   searchable: false,
      //   orderable: false,
      //   render: function (data, type, full, meta) {
      //     return '<input type="checkbox" value="' + $('<div/>').text(data).html() + '">';
      //   }
      // } ],
      // select: {
      //   style:    'os',
      //   selector: 'td:first-child'
      // },

    });
  }

  get columnNames(): string[] {
    return this._columnNames;
  }
}
