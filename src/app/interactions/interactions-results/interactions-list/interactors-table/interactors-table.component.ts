import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {environment} from '../../../../../environments/environment';
import {extractAlias, extractId} from '../../../../shared/utils/string-utils';
import {TableFactoryService} from '../../../shared/service/table-factory.service';
import {InteractorTable} from '../../../shared/model/tables/interactor-table.model';
import {Column} from '../../../shared/model/tables/column.model';
import {NetworkSelectionService} from '../../../shared/service/network-selection.service';
import {ResultTable} from '../../../shared/model/interactions-results/result-table-interface';
import {SearchService} from '../../../../home-dashboard/search/service/search.service';
import {FilterService} from '../../../shared/service/filter.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

const baseURL = environment.intact_portal_ws;

@UntilDestroy()
@Component({
    selector: 'ip-interactors-table',
    templateUrl: './interactors-table.component.html',
    styleUrls: ['./interactors-table.component.css'],
    standalone: false
})
export class InteractorsTableComponent implements OnInit, OnChanges, AfterViewInit, ResultTable {
  readonly interactorTab = input<boolean>(undefined);

  private _interactorSelected: string;

  dataTable: DataTables.Api;

  columnView = 'interactors_columnView';
  table: JQuery;

  private _columns = new InteractorTable();

  constructor(
    private route: ActivatedRoute,
    private tableFactory: TableFactoryService,
    private networkSelection: NetworkSelectionService,
    private search: SearchService,
    private filters: FilterService
  ) {
  }

  ngOnInit() {
    this.table = $('#interactorsTable');
    this.route.queryParams
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        if (this.dataTable !== undefined) {
          this.dataTable = this.table.DataTable().ajax.reload();
        }
      })

    this.initDataTable();
    this.networkSelection.registerSelectionListener(this.dataTable, this);
    this.tableFactory.initTopSlider('interactorsTable');
    this.tableFactory.initShadowBorder('interactorsTable');
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.interactorTab.currentValue) {
      // This fixes the alignment between the th and td when we have activated scrollX:true
      this.table = $('#interactorsTable');
      this.dataTable = this.table.DataTable().columns.adjust().draw();
    }
  }

  private readonly tableUnselected = new CustomEvent('tableUnselected', {bubbles: true});

  ngAfterViewInit(): void {
    const interactorsTable = $('#interactorsTable');
    interactorsTable.on('change', 'input[type=\'checkbox\']', (e) => {
      const interactorSel = e.currentTarget.id;
      if (this.interactorSelected !== interactorSel) {
        const previousInput = $(`#${this.interactorSelected}:checkbox`);
        previousInput.prop('checked', false);

        this.interactorSelected = interactorSel;
        const currentInput = $(`#${interactorSel}:checkbox`);
        currentInput.prop('checked', true);

        const interactorSelectedEvent = new CustomEvent('tableInteractorSelected', {
          bubbles: true,
          detail: {
            interactorId: this.interactorSelected
          }
        });
        document.dispatchEvent(interactorSelectedEvent);
      } else {
        // Unselected
        this.interactorSelected = undefined;
        document.dispatchEvent(this.tableUnselected);
      }
    });

    // When table redrawn keep row selection synchronization between tables
    interactorsTable.on('draw.dt', () => {
      if (this.interactorSelected !== undefined) {
        const selector = $(`#${this.interactorSelected}:checkbox`);
        selector.prop('checked', true);

        const interactorSelectedEvent = new CustomEvent('tableInteractorSelected', {
          bubbles: true,
          detail: {
            interactorId: this.interactorSelected
          }
        });
        document.dispatchEvent(interactorSelectedEvent);
      }
    });

    interactorsTable.on('resize', () => $('#interactorsTableWidthMimic').width(interactorsTable.width()))
  }

  clearTableSelection() {
    if (!this.interactorSelected) {
      return;
    }
    const selectedInteractorCheckbox = $(`#${this.interactorSelected}:checkbox`);
    if (selectedInteractorCheckbox.length > 0) {
      selectedInteractorCheckbox.prop('checked', false);
      this.interactorSelected = undefined;
    }
  }

  private initDataTable(): void {
    const table = $('#interactorsTable');
    this.dataTable = table.DataTable({
      ordering: false,
      searching: false,
      paging: true,
      lengthMenu: [25, 50, 75, 100, 150, 200, 500],
      pageLength: 25,
      pagingType: 'numbers',
      processing: true,
      serverSide: true,
      dom: '<"top"flip>rt<"bottom"ifp>',
      scrollX: true,
      fixedHeader: false,
      ajax: {
        url: `${baseURL}/interaction/interactors/list/body/`,
        type: 'POST',
        contentType: 'application/json',
        data: (d: any) => {
          d.page = d.start / d.length;
          d.pageSize = d.length;
          this.search.toParams(d);
          this.networkSelection.toParams(d);
          this.filters.toParams(d);
          return JSON.stringify(d);
        }
      },
      columns: [
        {
          ...this._columns.select,
          render: function (data, type, full) {
            if (type === 'display') {
              return `<div class="margin-left-large">
                        <input type="checkbox" id="${full.interactorAc}" name="check" value="${data}"/>
                      </div>`;
            }
            return data;
          }
        },
        {
          ...this._columns.accession,
        },
        {
          ...this._columns.name,
        },
        {
          ...this._columns.preferredId,
          render: (data, type) => {
            if (type === 'display' && data !== null) {
              return this.tableFactory.identifierRender(extractId(data))
            }
            return data
          }
        },
        {
          ...this._columns.type,
          render: this.tableFactory.cvRender('interactorTypeMIIdentifier')
        },
        {
          ...this._columns.species,
          render: this.tableFactory.speciesRender('interactorTaxId')
        },
        {
          ...this._columns.description,
        },
        {
          ...this._columns.alias,
          render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.aliasRender(extractAlias(d)))
        },
        {
          ...this._columns.alternativeIds,
          render: this.tableFactory.groupBy<string, string>(
            (d) => extractId(d).database,
            this.tableFactory.enlist((d) => this.tableFactory.identifierLink(extractId(d))),
            this.tableFactory.databaseTag)
        },
        {
          ...this._columns.interactionSearchCount,
        },
        {
          ...this._columns.interactionCount,
        }
      ],
      drawCallback: function () {
        $('#interactorsTableWidthMimic').width($('#interactorsTable').width());
        $('.table-list').parent('td').css('vertical-align', 'top');
        $('.collapse-panel').hide();
      }
    });
    this.tableFactory.enableCollapsedPanels();
  }

  /************************* /
   /** GETTERS AND SETTERS ** /
   /*************************/

  get columns(): Column[] {
    return this._columns;
  }

  get isActive(): boolean {
    return this.interactorTab();
  }

  get interactorSelected(): string {
    return this._interactorSelected;
  }

  set interactorSelected(value: string) {
    this._interactorSelected = value;
  }
}
