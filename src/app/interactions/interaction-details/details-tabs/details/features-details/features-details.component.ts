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
        {data: 'regionType.shortName', title: 'Type'},
        {data: 'regionType.shortName', title: 'Role'},
        {data: 'range', title: 'Range Positions'},
        {data: 'range', title: 'Linked Features'},
        {data: 'interactorName', title: 'Participant Name'},
        {data: 'interactor.identifier', title: 'Participant Identifier'},
        {data: 'participantAc', title: 'Participant Ac'},
        {data: 'participantAc', title: 'Detection Methods'},
        {data: 'participantAc', title: 'Parameters'},
        {data: 'participantAc', title: 'Identifiers'},
        {data: 'participantAc', title: 'Cross References'},
        {data: 'participantAc', title: 'Annotations'}
      ],
    });
  }
}
