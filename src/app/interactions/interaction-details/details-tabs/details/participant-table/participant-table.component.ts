import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import {environment} from '../../../../../../environments/environment';
import {Column} from "../../../../shared/model/tables/column.model";
import {ParticipantTable} from "../../../../shared/model/tables/participant-table.model";
import {TableFactoryService} from "../../../../shared/service/table-factory.service";
import {InteractionParticipantsService, Status} from "../../../shared/service/interaction-participants.service";
import {Subscription} from "rxjs";

const baseURL = environment.intact_portal_ws;

@Component({
  selector: 'ip-participant-table',
  templateUrl: './participant-table.component.html',
  styleUrls: ['./participant-table.component.css']
})
export class ParticipantTableComponent implements OnInit, OnChanges, OnDestroy {

  @Input() interactionAc: string;
  @Input() participantTab: boolean;

  dataTable: DataTables.Api;
  columnView = 'participants_columnView';


  private _columns = new ParticipantTable();

  private fillParticipants = true;

  private proteinExpansionSubscription: Subscription;

  constructor(private tableFactory: TableFactoryService, private participantsService: InteractionParticipantsService) {
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
      this.fillParticipants = false;
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
              let id = full.participantId.identifier;
              if (full.type.shortName === 'protein') {
                let expanded = this.participantsService.getParticipantAndStatusById(id).status === Status.EXPANDED;
                return `<input type="checkbox" id="${id}" name="check" value="${data}" ${expanded ? 'checked' : ''}/>`;
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

    this.proteinExpansionSubscription = this.participantsService.proteinSetsUpdated.subscribe(proteins => {
      proteins.expanded.map(protein => protein.identifier.id).forEach(id => $(`#${id}:checkbox`).prop('checked', true));
      proteins.collapsed.map(protein => protein.identifier.id).forEach(id => $(`#${id}:checkbox`).prop('checked', false));
    });

    table.on('change', 'input[name=\'check\']', (e) => {
        const id = e.currentTarget.id;
        let protein = this.participantsService.getParticipantAndStatusById(id).participant;
        if ($(`#${id}:checkbox`).prop('checked')) {
          this.participantsService.setProteinStatus(protein, Status.EXPANDED);
        } else {
          this.participantsService.setProteinStatus(protein, Status.COLLAPSED);
        }
      }
    );
  }


  get columns(): Column[] {
    return this._columns;
  }

  ngOnDestroy(): void {
    if (this.proteinExpansionSubscription) this.proteinExpansionSubscription.unsubscribe();
  }


}
