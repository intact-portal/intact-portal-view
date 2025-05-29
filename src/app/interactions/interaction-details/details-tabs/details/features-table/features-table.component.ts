import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {environment} from '../../../../../../environments/environment';
import {FeatureTable} from '../../../../shared/model/tables/feature-table.model';
import {Column} from '../../../../shared/model/tables/column.model';
import {TableFactoryService} from '../../../../shared/service/table-factory.service';
import {ResultTable} from '../../../../shared/model/interactions-results/result-table-interface';

const baseURL = environment.intact_portal_graph_ws;

@Component({
  selector: 'ip-features-table',
  templateUrl: './features-table.component.html',
  styleUrls: ['./features-table.component.css']
})
export class FeaturesTableComponent implements OnInit, OnChanges, ResultTable {

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
    const table = $('#featureTable');
    const interactionAc = this.interactionAc;
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
        url: `${baseURL}/graph/features/datatables/body`,
        type: 'POST',
        contentType: 'application/json',
        //   error: function(xhr, error, code) { console.log(error); },
        //   success: function(result) {console.log(JSON.stringify(result))},
        data: function (d: any) {
          d.ac = interactionAc;
          d.page = d.start / d.length;
          d.pageSize = d.length;
          return JSON.stringify(d);
        }
      },
      columns: [
        {
          ...this._columns.ac,
        },
        {
          ...this._columns.name,
        },
        {
          ...this._columns.type,
          render: this.tableFactory.cvRenderStructured
        },
        {
          ...this._columns.role,
          render: this.tableFactory.enlistWithButtons(this.tableFactory.cvRenderStructured, 'centered')
        },
        {
          ...this._columns.rangePositions,
          render: '[, ]',
        },
        {
          ...this._columns.linkedFeatures,
          render: this.tableFactory.enlistWithButtons((d) => `${d.shortName} (${d.ac})`)
        },
        {
          ...this._columns.participantName,
        },
        {
          ...this._columns.participantIdentifier,
          render: this.tableFactory.identifierRender
        },
        {
          ...this._columns.participantAc,
        },
        {
          ...this._columns.detectionMethods,
          render: this.tableFactory.enlistWithButtons(this.tableFactory.cvRenderStructured, 'centered')
        },
        {
          ...this._columns.parameters,
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div class="margin-bottom-medium">' +
                  '<span class="detailsCell">' + d.type.shortName + ':' + d.value + '(' + d.unit.shortName + ') </span>' +
                  '</div>';
              }).join('');
            }
            return null;
          }
        },
        {
          ...this._columns.identifiers,
          render: this.tableFactory.enlistWithButtons(this.tableFactory.identifierRender)
        },
        {
          ...this._columns.crossReferences,
          render: this.tableFactory.enlistWithButtons(this.tableFactory.identifierRender)
        },
        {
          ...this._columns.annotations,
          render: this.tableFactory.enlistWithButtons(this.tableFactory.annotationRender())
        }
      ]
    });

    table.on('change', 'input[type=\'checkbox\']', (e) => {

      const featureSel = e.currentTarget.id;

      if (this.featureSelected !== featureSel) {
        $('#' + this.featureSelected + ':checkbox').prop('checked', false);

        this.featureSelected = featureSel;
        this.featureChanged.emit(this.featureSelected);

      } else {
        // None is selected, remove class
        this.featureSelected = undefined;
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

  clearTableSelection(): void {
  }

  get isActive(): boolean {
    return this.featureTab;
  }
}
