import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import * as $ from 'jquery';
import 'datatables.net';
import {environment} from '../../../../../../environments/environment';
import {Column} from "../../../../shared/model/tables/column.model";
import {ParticipantTable} from "../../../../shared/model/tables/participant-table.model";
import {TableFactoryService} from "../../../../shared/service/table-factory.service";

const baseURL = environment.intact_portal_ws;

@Component({
  selector: 'ip-participant-table',
  templateUrl: './participant-table.component.html',
  styleUrls: ['./participant-table.component.css']
})
export class ParticipantTableComponent implements OnInit, OnChanges {

  @Input() interactionAc: string;
  @Input() participantTab: boolean;

  dataTable: any;
  columnView = 'participants_columnView';

  @Output() participantChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  private _columns = new ParticipantTable();

  private _participantsSelected = new Set<string>();

  constructor(private tableFactory: TableFactoryService) {
  }

  ngOnInit(): void {
    this.initDataTable();
    this.tableFactory.initTopSlider('participantTable');
    this.tableFactory.initShadowBorder('participantTable');
    this.tableFactory.makeTableHeaderSticky();
    this.tableFactory.enableShowButtons();
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
      lengthMenu: [10, 25, 50, 75, 100],
      pageLength: 10,
      pagingType: 'numbers',
      processing: true,
      serverSide: true,
      dom: '<"top"li>rt<"bottom"p><"clear">',
      scrollX: true,
      ajax: {
        url: `${baseURL}/graph/participants/datatables/` + this.interactionAc,
        type: 'POST',
        //   error: function(xhr, error, code) { console.log(error); },
        //   success: function(result) {console.log(JSON.stringify(result))},
        data: function (d) {
          d.page = d.start / d.length;
          d.pageSize = d.length;
        }
      },
      columns: [
        {
          data: this._columns.expand.key,
          defaultContent: ' ',
          title: this._columns.expand.name,
          render: (data, type, full) => {
            if (type === 'display') {
              let selectionIdentifier = full.participantId.identifier;
              this._participantsSelected.add(selectionIdentifier);
              if (full.type.shortName === 'protein') {
                  return `<input type="checkbox" id="${selectionIdentifier}" name="check" value="${data}" checked/>`;
                  // TODO Switch to participants AC for correct interaction
              }
            }
            return '';
          }
        },
        {
          data: this._columns.name.key,
          title: this._columns.name.name,
          defaultContent: ' ',
          render: (data, type, row) => {
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
          defaultContent: '',
          render: this.tableFactory.cvRenderStructured
        },
        {
          data: this._columns.identifier.key,
          title: this._columns.identifier.name,
          defaultContent: '',
          render: this.tableFactory.identifierRender
        },
        {
          data: this._columns.aliases.key,
          title: this._columns.aliases.name,
          defaultContent: '',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return `<div><span class="detailsCell">${d.name}</span></div>`;
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
          defaultContent: '',
          render: this.tableFactory.speciesRenderStructured
        },
        {
          data: this._columns.expressionSystem.key,
          title: this._columns.expressionSystem.name,
          defaultContent: '',
          render: this.tableFactory.speciesRenderStructured
        },
        {
          data: this._columns.detectionMethods.key,
          title: this._columns.detectionMethods.name,
          defaultContent: '',
          render: this.tableFactory.enlistWithButtons(this.tableFactory.cvRenderStructured)
        },
        {
          data: this._columns.experimentalRole.key,
          title: this._columns.experimentalRole.name,
          defaultContent: '',
          render: this.tableFactory.cvRenderStructured
        },
        {
          data: this._columns.biologicalRole.key,
          title: this._columns.biologicalRole.name,
          defaultContent: '',
          render: this.tableFactory.cvRenderStructured
        },
        {
          data: this._columns.experimentalPreparations.key,
          title: this._columns.experimentalPreparations.name,
          defaultContent: '',
          render: this.tableFactory.cvRenderStructured
        },
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
          }
        },
        {
          data: this._columns.confidences.key,
          title: this._columns.confidences.name,
          defaultContent: '',
          render: function (data, type, row, meta) {
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
                  '</div>' :
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
          render: this.tableFactory.enlistWithButtons(this.tableFactory.annotationRender())
        }
      ],
    });

    // Collapse / Expand all changing all checkboxes in the table
    $(document).on('change', 'input[name=\'expansion\']', (e) => {
      const type = e.currentTarget.id;
      let tableSelectors = $('input[name=\'check\']:checkbox');
      switch (type) {
        case 'expand-all':
          tableSelectors.prop('checked', true);
          tableSelectors.each((index, elem) => {
            this._participantsSelected.add(elem.id);
          })

          break;
        case 'collapse-all':
          tableSelectors.prop('checked', false);
          this._participantsSelected.clear();
          break;
      }
      this.participantChanged.emit(this.participantsSelected);
    })

    table.on('change', 'input[name=\'check\']', (e) => {
      const participantSel = e.currentTarget.id;
      if (this.participantsSelected !== undefined) {
        if ($(`#${participantSel}:checkbox`).prop('checked')) {
          this._participantsSelected.add(participantSel);
        } else {
          this._participantsSelected.delete(participantSel);
        }
        this.participantChanged.emit(this.participantsSelected);
      }
    });
  }


  get columns(): Column[] {
    return this._columns;
  }

  get participantsSelected(): string[] {
    return Array.from(this._participantsSelected);
  }

  set participantsSelected(value: string[]) {
    this._participantsSelected = new Set<string>(value);
  }
}
