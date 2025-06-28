import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {environment} from '../../../../../../environments/environment';
import {Column} from '../../../../shared/model/tables/column.model';
import {ParticipantTable} from '../../../../shared/model/tables/participant-table.model';
import {TableFactoryService} from '../../../../shared/service/table-factory.service';
import {InteractionParticipantsService, Status} from '../../../shared/service/interaction-participants.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ResultTable} from '../../../../shared/model/interactions-results/result-table-interface';

const baseURL = environment.intact_portal_graph_ws;

@UntilDestroy()
@Component({
    selector: 'ip-participant-table',
    templateUrl: './participant-table.component.html',
    styleUrls: ['./participant-table.component.css'],
    standalone: false
})
export class ParticipantTableComponent implements OnInit, OnChanges, AfterViewInit, ResultTable {

  @Input() interactionAc: string;
  @Input() participantTab: boolean;

  dataTable: DataTables.Api;
  columnView = 'participants_columnView';


  private _columns = new ParticipantTable();

  private fillParticipants = true;

  constructor(private tableFactory: TableFactoryService, private participantsService: InteractionParticipantsService) {
  }

  ngOnInit(): void {
    this.initDataTable();
    this.tableFactory.initTopSlider('participantTable');
    this.tableFactory.initShadowBorder('participantTable');
  }

  ngAfterViewInit(): void {
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
    const table = $('#participantTable');
    this.dataTable = table.DataTable({
      ordering: false,
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
        data: function (d: any) {
          d.page = d.start / d.length;
          d.pageSize = d.length;
        }
      },
      columns: [
        {
          ...this._columns.expand,
          render: (data, type, full) => {
            if (type === 'display') {
              const id = full.participantId.identifier;
              if (full.type.shortName === 'protein') {
                const expanded = this.participantsService.getParticipantAndStatusById(id).status === Status.EXPANDED;
                return `<input type="checkbox" id="${id}" name="check" value="${data}" ${expanded ? 'checked' : ''}/>`;
                // TODO Switch to participants AC for correct interaction
              }
            }
            return '';
          }
        },
        {
          ...this._columns.name,
          defaultContent: ' '
        },
        {
          ...this._columns.ac,
        },
        {
          ...this._columns.type,
          defaultContent: '',
          render: this.tableFactory.cvRenderStructured
        },
        {
          ...this._columns.identifier,
          defaultContent: '',
          render: this.tableFactory.identifierRender
        },
        {
          ...this._columns.aliases,
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
          ...this._columns.description,
          defaultContent: ''
        },
        {
          ...this._columns.species,
          defaultContent: '',
          render: this.tableFactory.speciesRenderStructured
        },
        {
          ...this._columns.expressionSystem,
          defaultContent: '',
          render: this.tableFactory.speciesRenderStructured
        },
        {
          ...this._columns.detectionMethods,
          defaultContent: '',
          render: this.tableFactory.enlistWithButtons(this.tableFactory.cvRenderStructured)
        },
        {
          ...this._columns.experimentalRole,
          defaultContent: '',
          render: this.tableFactory.cvRenderStructured
        },
        {
          ...this._columns.biologicalRole,
          defaultContent: '',
          render: this.tableFactory.cvRenderStructured
        },
        {
          ...this._columns.experimentalPreparations,
          defaultContent: '',
          render: this.tableFactory.cvRenderStructured
        },
        {
          ...this._columns.parameters,
          defaultContent: '',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                if (d.unit !== null) {
                  return '<div class="margin-bottom-medium">' +
                    '<span class="detailsCell">' + d.type.shortName + ':' + d.value + '(' + d.unit.shortName + ') </span>' +
                    '</div>';
                } else {
                  return '<div class="margin-bottom-medium">' +
                    '<span class="detailsCell">' + d.type.shortName + ':' + d.value + '</span>' +
                    '</div>';
                }
              }).join('');
            }
          }
        },
        {
          ...this._columns.confidences,
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
          ...this._columns.crossReferences,
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
          ...this._columns.annotations,
          defaultContent: '',
          render: this.tableFactory.enlistWithButtons(this.tableFactory.annotationRender())
        }
      ],
    });

    this.participantsService.proteinSetsUpdated
      .pipe(untilDestroyed(this))
      .subscribe(proteins => {
        proteins.expanded.map(protein => protein.identifier.id).forEach(id => $(`#${id}:checkbox`).prop('checked', true));
        proteins.collapsed.map(protein => protein.identifier.id).forEach(id => $(`#${id}:checkbox`).prop('checked', false));
      });

    table.on('change', 'input[name=\'check\']', (e) => {
        const id = e.currentTarget.id;
        const protein = this.participantsService.getParticipantAndStatusById(id).participant;
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

  clearTableSelection(): void {
  }

  get isActive(): boolean {
    return this.participantTab;
  }
}
