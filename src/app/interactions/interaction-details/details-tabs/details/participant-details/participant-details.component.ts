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
