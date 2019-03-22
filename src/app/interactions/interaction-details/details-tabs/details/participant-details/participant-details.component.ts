import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ParticipantDetails} from '../../../../shared/model/interaction-details/participant-details.model';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-zf';
import {InteractionsDetailsService} from '../../../../shared/service/interactions-details.service';

@Component({
  selector: 'iv-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})
export class ParticipantDetailsComponent implements AfterViewInit {

  private _participantDetails: ParticipantDetails;
  @Input() interactionAc: string;

  dataTable: any;

  constructor(private interactionsDetailsService: InteractionsDetailsService) { }

  ngAfterViewInit(): void {
    this.initDataTable();
    // this.showHideColumns();
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
        {data: 'detectionMethod', title: 'Detection Method', render: '[, ].shortName'},
        {data: 'experimentalRole.shortName', title: 'Experimental Role'},
        {data: 'biologicalRole.shortName', title: 'Biological Role'},
        {data: 'experimentalPreparations', title: 'Experimental Preparations', render: '[, ].shortName'},
        {data: 'parameters', title: 'Parameters'},
        {data: 'confidences', title: 'Confidences'}

      ],
    });
  }
  //
  // private showHideColumns(): void {
  //   const table = this.dataTable;
  //   $('a.toggle-vis').on('click', function(e) {
  //
  //     // Get the column API object
  //     const column = table.column($(this).attr('data-column'));
  //
  //     // Toggle the visibility
  //     column.visible(!column.visible());
  //   });
  // }

  get participantDetails(): ParticipantDetails {
    return this._participantDetails;
  }

  @Input()
  set participantDetails(value: ParticipantDetails) {
    this._participantDetails = value;
  }
}
