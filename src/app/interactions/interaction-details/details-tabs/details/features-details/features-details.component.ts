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
        {data: 'featureAc', title: 'Ac'},
        {data: 'name', title: 'Name'},
        {data: 'type.shortName', title: 'Type'},
        {data: 'role', title: 'Role', defaultContent: ''},
        {data: 'ranges', title: 'Range Positions', render: '[, ]'},
        {data: 'linkedFeatures', title: 'Linked Features', render: '[, ].shortName'},
        {data: 'participantName', title: 'Participant Name'},
        {data: 'participant.identifier', title: 'Participant Identifier'},
        {data: 'participantAc', title: 'Participant Ac'},
        {data: 'detectionMethods', title: 'Detection Methods', render: '[, ].shortName'},
        {data: 'parameters', title: 'Parameters'},
        {data: 'identifiers', title: 'Identifiers'},
        {data: 'xrefs', title: 'Cross References'},
        {data: 'annotations', title: 'Annotations',
          render: function ( data, type, row, meta ) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                 return '<div>' +
                          '<span class="annotationTopicWrapper margin-right-medium">' + d.topic.shortName + ' (' + d.topic.miIdentifier + ') ' +
                          '</span>' + '<span class="annotationDescriptionWrapper">' + d.description + '</span> ' +
                        '</div>';
              }).join('');
            }
          }}
      ],
    });
  }
}
