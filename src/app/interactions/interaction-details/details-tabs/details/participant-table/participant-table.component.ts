import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {environment} from '../../../../../../environments/environment';
import {Column} from '../../../../shared/model/tables/column.model';
import {ParticipantTable} from '../../../../shared/model/tables/participant-table.model';
import {TableFactoryService} from '../../../../shared/service/table-factory.service';
import {InteractionParticipantsService, Status} from '../../../shared/service/interaction-participants.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

const baseURL = environment.intact_portal_graph_ws;

@UntilDestroy()
@Component({
  selector: 'ip-participant-table',
  templateUrl: './participant-table.component.html',
  styleUrls: ['./participant-table.component.css']
})
export class ParticipantTableComponent implements OnInit, OnChanges, AfterViewInit {

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
          data: this._columns.expand.data,
          defaultContent: ' ',
          title: this._columns.expand.title,
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
          data: this._columns.parent.data,
          title: this._columns.parent.title,
          defaultContent: '',
          render: this.tableFactory.identifierRender
        },
        {
          data: this._columns.name.data,
          title: this._columns.name.title,
          defaultContent: ' '
        },
        {
          data: this._columns.ac.data,
          title: this._columns.ac.title
        },
        {
          data: this._columns.type.data,
          title: this._columns.type.title,
          defaultContent: '',
          render: this.tableFactory.cvRenderStructured
        },
        {
          data: this._columns.identifier.data,
          title: this._columns.identifier.title,
          defaultContent: '',
          render: this.tableFactory.identifierRender
        },
        {
          data: this._columns.aliases.data,
          title: this._columns.aliases.title,
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
          data: this._columns.description.data,
          title: this._columns.description.title,
          defaultContent: ''
        },
        {
          data: this._columns.species.data,
          title: this._columns.species.title,
          defaultContent: '',
          render: this.tableFactory.speciesRenderStructured
        },
        {
          data: this._columns.expressionSystem.data,
          title: this._columns.expressionSystem.title,
          defaultContent: '',
          render: this.tableFactory.speciesRenderStructured
        },
        {
          data: this._columns.detectionMethods.data,
          title: this._columns.detectionMethods.title,
          defaultContent: '',
          render: this.tableFactory.enlistWithButtons(this.tableFactory.cvRenderStructured)
        },
        {
          data: this._columns.experimentalRole.data,
          title: this._columns.experimentalRole.title,
          defaultContent: '',
          render: this.tableFactory.cvRenderStructured
        },
        {
          data: this._columns.biologicalRole.data,
          title: this._columns.biologicalRole.title,
          defaultContent: '',
          render: this.tableFactory.cvRenderStructured
        },
        {
          data: this._columns.experimentalPreparations.data,
          title: this._columns.experimentalPreparations.title,
          defaultContent: '',
          render: this.tableFactory.cvRenderStructured
        },
        {
          data: this._columns.parameters.data,
          title: this._columns.parameters.title,
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
          data: this._columns.confidences.data,
          title: this._columns.confidences.title,
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
          data: this._columns.crossReferences.data,
          title: this._columns.crossReferences.title,
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
          data: this._columns.annotations.data,
          title: this._columns.annotations.title,
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
}
