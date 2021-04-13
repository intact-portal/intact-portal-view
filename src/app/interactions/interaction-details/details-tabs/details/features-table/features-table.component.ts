import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {environment} from '../../../../../../environments/environment';
import {FeatureTable} from "../../../../shared/model/tables/feature-table.model";
import {Column} from "../../../../shared/model/tables/column.model";
import {TableFactoryService} from "../../../../shared/service/table-factory.service";

const baseURL = environment.intact_portal_graph_ws;

@Component({
  selector: 'ip-features-table',
  templateUrl: './features-table.component.html',
  styleUrls: ['./features-table.component.css']
})
export class FeaturesTableComponent implements OnInit, OnChanges {

  @Input() interactionAc: string;
  @Input() featureTab: boolean;

  @Output() featureChanged: EventEmitter<string> = new EventEmitter<string>();

  dataTable: DataTables.Api;
  columnView = 'features_columnView';

  private _columns = new FeatureTable();

  private _featureSelected: string;

  constructor(private tableFactory: TableFactoryService) {
  }

  ngOnInit(): void {
    this.initDataTable();
    this.tableFactory.initTopSlider('featureTable');
    this.tableFactory.initShadowBorder('featureTable');
    this.tableFactory.makeTableHeaderSticky();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.featureTab.currentValue) {

      // This fixes the alignment between the th and td when we have activated scrollX:true
      const table = $('#featureTable');
      this.dataTable = table.DataTable().columns.adjust().draw();
    }
  }

  private initDataTable(): void {
    const table: any = $('#featureTable');
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
        url: `${baseURL}/graph/features/datatables/` + this.interactionAc,
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
          data: this._columns.ac.key,
          title: this._columns.ac.name
        },
        {
          data: this._columns.name.key,
          title: this._columns.name.name
        },
        {
          data: this._columns.type.key,
          title: this._columns.type.name,
          render: this.tableFactory.cvRenderStructured
        },
        {
          data: this._columns.role.key,
          title: this._columns.role.name
        },
        {
          data: this._columns.rangePositions.key,
          title: this._columns.rangePositions.name,
          render: '[, ]'
        },
        {
          data: this._columns.linkedFeatures.key,
          title: this._columns.linkedFeatures.name,
          render: this.tableFactory.enlistWithButtons((d) => `${d.shortName} (${d.ac})`)
        },
        {
          data: this._columns.participantName.key,
          title: this._columns.participantName.name,
        },
        {
          data: this._columns.participantIdentifier.key,
          title: this._columns.participantIdentifier.name,
          render: this.tableFactory.identifierRender
        },
        {
          data: this._columns.participantAc.key,
          title: this._columns.participantAc.name,
        },
        {
          data: this._columns.detectionMethods.key,
          title: this._columns.detectionMethods.name,
          render: this.tableFactory.enlistWithButtons(this.tableFactory.cvRenderStructured)
        },
        {
          data: this._columns.parameters.key,
          title: this._columns.parameters.name,
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
          data: this._columns.identifiers.key,
          title: this._columns.identifiers.name,
          render: this.tableFactory.enlistWithButtons(this.tableFactory.identifierRender)
        },
        {
          data: this._columns.crossReferences.key,
          title: this._columns.crossReferences.name,
          render: this.tableFactory.enlistWithButtons(this.tableFactory.identifierRender)
        },
        {
          data: this._columns.annotations.key,
          title: this._columns.annotations.name,
          render: this.tableFactory.enlistWithButtons(this.tableFactory.annotationRender())
        }
      ],
      select: {
        style: 'os',
        className: 'rowSelected',
        selector: 'td:first-child'
      }
    });

    table.on('change', 'input[type=\'checkbox\']', (e) => {

      const featureSel = e.currentTarget.id;

      if (this.featureSelected !== featureSel) {
        $('#' + this.featureSelected + ':checkbox').prop('checked', false);

        // TODO: To find another way to do the highlighting
        $(table.dataTableSettings).each(function () {
          $(this.aoData).each(function () {
            $(this.nTr).removeClass('rowSelected');
          })
        });

        this.featureSelected = featureSel;
        $(e.target.parentNode.parentNode).addClass('rowSelected');

        this.featureChanged.emit(this.featureSelected);

      } else {
        // None is selected, remove class
        this.featureSelected = undefined;
        $(table.dataTableSettings).each(function () {
          $(this.aoData).each(function () {
            $(this.nTr).removeClass('rowSelected');
          })
        });
        this.featureChanged.emit(this.featureSelected);
      }
    });
  }

  get columns(): Column[] {
    return this._columns;
  }

  get featureSelected(): string {
    return this._featureSelected;
  }

  set featureSelected(value: string) {
    this._featureSelected = value;
  }
}
