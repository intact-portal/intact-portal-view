import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';
import {environment} from '../../../../../environments/environment';
import {extractAlias, extractId} from "../../../../shared/utils/string-utils";
import {TableFactoryService} from "../../../shared/service/table-factory.service";
import {InteractorTable} from "../../../shared/model/tables/interactor-table.model";
import {Column} from "../../../shared/model/tables/column.model";
import {NetworkSelectionService} from "../../../shared/service/network-selection.service";
import {ResultTable} from "../../../shared/model/interactions-results/result-table-interface";

const baseURL = environment.intact_portal_ws;

@Component({
  selector: 'ip-interactors-table',
  templateUrl: './interactors-table.component.html',
  styleUrls: ['./interactors-table.component.css']
})
export class InteractorsTableComponent implements OnInit, OnChanges, AfterViewInit, ResultTable {

  @Output() interactorChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  @Input() interactorTab: boolean;

  private _terms: string;
  private _batchSearchFilter: boolean;
  private _interactorSpeciesFilter: string[];
  private _interactorTypeFilter: string[];
  private _interactionDetectionMethodFilter: string[];
  private _interactionTypeFilter: string[];
  private _interactionHostOrganismFilter: string[];
  private _negativeFilter: boolean;
  private _miScoreMin: any;
  private _miScoreMax: any;
  private _intraSpeciesFilter: boolean;
  private _currentPageIndex: any;
  private _interactorSelected: string;

  dataTable: any;

  columnView = 'interactors_columnView';
  table: any;

  private _columns = new InteractorTable();

  constructor(private route: ActivatedRoute, private tableFactory: TableFactoryService, private networkSelection: NetworkSelectionService) {
  }

  ngOnInit() {
    this.table = $('#interactorsTable');
    this.route.queryParams.filter(params => params.query)
      .subscribe(params => {
        this.terms = params.query;
        this.batchSearchFilter = params.batchSearch ? params.batchSearch : false;
        this.interactorTypeFilter = params.interactorType ? params.interactorType.split('+') : [];
        this.interactorSpeciesFilter = params.interactorSpecies ? params.interactorSpecies.split('+') : [];
        this.interactionDetectionMethodFilter = params.interactionDetectionMethod ? params.interactionDetectionMethod.split('+') : [];
        this.interactionTypeFilter = params.interactionType ? params.interactionType.split('+') : [];
        this.interactionHostOrganismFilter = params.interactionHostOrganism ? params.interactionHostOrganism.split('+') : [];
        this.negativeFilter = params.negativeInteraction ? params.negativeInteraction : false;
        this.miScoreMin = params.miScoreMin ? params.miScoreMin : 0;
        this.miScoreMax = params.miScoreMax ? params.miScoreMax : 1;
        this.intraSpeciesFilter = params.intraSpecies ? params.intraSpecies : false;

        this.currentPageIndex = params.page ? Number(params.page) : 1;
        if (this.dataTable !== undefined) {
          this.dataTable = this.table.DataTable().ajax.reload();
        }

      });


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

  ngAfterViewInit(): void {
    let interactorsTable = $('#interactorsTable');
    let selectedInteractorCheckbox = $(`#${this.interactorSelected}:checkbox`);
    interactorsTable.on('change', 'input[type=\'checkbox\']', (e) => {
      const table: any = interactorsTable;
      const interactorSel = e.currentTarget.id;

      if (this.interactorSelected !== interactorSel) {
        selectedInteractorCheckbox.prop('checked', false);
        selectedInteractorCheckbox.closest('tr').removeClass('rowSelected');

        this.interactorSelected = interactorSel;
        selectedInteractorCheckbox.prop('checked', true);
        selectedInteractorCheckbox.closest('tr').addClass('rowSelected');

        const interactorSelectedEvent = new CustomEvent('tableInteractorSelected', {
          bubbles: true,
          detail: {
            interactorId: this.interactorSelected
          }
        });
        document.dispatchEvent(interactorSelectedEvent);

      } else {
        // None is selected, remove class
        this.interactorSelected = undefined;
        $(table.dataTableSettings).each(function () {
          $(this.aoData).each(function () {
            $(this.nTr).removeClass('rowSelected');
          })
        });

        const tableUnselectedEvent = new CustomEvent('tableUnselected', {
          bubbles: true
        });
        document.dispatchEvent(tableUnselectedEvent);
      }
    });

    // When table redrawn keep row selection synchronization between tables
    interactorsTable.on('draw.dt', function () {
      if (this.interactorSelected !== undefined) {
        const selector = selectedInteractorCheckbox;
        selector.prop('checked', true);
        selector.closest('tr').addClass('rowSelected');

        const interactorSelectedEvent = new CustomEvent('tableInteractorSelected', {
          bubbles: true,
          detail: {
            interactorId: this.interactorSelected
          }
        });
        document.dispatchEvent(interactorSelectedEvent);
      }
    }.bind(this));

    interactorsTable.on('resize', () => $('#interactorsTableWidthMimic').width(interactorsTable.width()))
  }

  clearTableSelection() {
    if (!this.interactorSelected) return;
    let selectedInteractorCheckbox = $(`#${this.interactorSelected}:checkbox`);
    if (selectedInteractorCheckbox.length > 0) {
      selectedInteractorCheckbox.prop('checked', false);
      this.interactorSelected = undefined;
    }
  }

  scrolling = false;

  private initDataTable(): void {
    const table: any = $('#interactorsTable');
    this.dataTable = table.DataTable({
      bSort: false,
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
        url: `${baseURL}/interaction/interactors/list/`,
        type: 'POST',
        data: (d) => {
          d.page = d.start / d.length;
          d.pageSize = d.length;
          d.query = this.terms;
          d.batchSearch = this.batchSearchFilter;
          d.interactorSpecies = this.interactorSpeciesFilter;
          d.interactorType = this.interactorTypeFilter;
          d.interactionDetectionMethod = this.interactionDetectionMethodFilter;
          d.interactionType = this.interactionTypeFilter;
          d.interactionHostOrganism = this.interactionHostOrganismFilter;
          d.negativeInteraction = this.negativeFilter;
          d.miScoreMin = this.miScoreMin;
          d.miScoreMax = this.miScoreMax;
          d.intraSpecies = this.intraSpeciesFilter;
          d.binaryInteractionId = this.networkSelection.binaryInteractionIds;
          d.interactorAc = this.networkSelection.interactorAcs;
        }
      },
      columns: [
        {
          data: this._columns.select.key,
          title: this._columns.select.name,
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
          data: this._columns.accession.key,
          title: this._columns.accession.name
        },
        {
          data: this._columns.name.key,
          title: this._columns.name.name
        },
        {
          data: this._columns.preferredId.key,
          title: this._columns.preferredId.name
        },
        {
          data: this._columns.type.key,
          title: this._columns.type.name,
          render: this.tableFactory.cvRender('interactorTypeMIIdentifier')
        },
        {
          data: this._columns.species.key,
          title: this._columns.species.name,
          render: this.tableFactory.speciesRender('interactorTaxId')
        },
        {
          data: this._columns.description.key,
          title: this._columns.description.name
        },
        {
          data: this._columns.alias.key,
          title: this._columns.alias.name,
          render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.aliasRender(extractAlias(d)))
        },
        {
          data: this._columns.alternativeIds.key,
          title: this._columns.alternativeIds.name,
          render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.identifierRender(extractId(d)))
        },
        {
          data: this._columns.interactionSearchCount.key,
          title: this._columns.interactionSearchCount.name,
        },
        {
          data: this._columns.interactionCount.key,
          title: this._columns.interactionCount.name
        }
      ],
      drawCallback: function () {
        $('#interactorsTableWidthMimic').width($("#interactorsTable").width());
        $('.table-list').parent('td').css('vertical-align', 'top');
        $('.collapse-panel').hide();
      }
    });
    this.tableFactory.makeTableHeaderSticky();
    this.tableFactory.enableCollapsedPanels();
  }


  public onPageChanged(pageIndex: number): void {
    this.pageChanged.emit(pageIndex);
  }


  /************************* /
   /** GETTERS AND SETTERS ** /
   /*************************/

  get terms(): string {
    return this._terms;
  }

  set terms(value: string) {
    this._terms = value;
  }

  get batchSearchFilter(): boolean {
    return this._batchSearchFilter;
  }

  set batchSearchFilter(value: boolean) {
    this._batchSearchFilter = value;
  }

  get interactorSpeciesFilter(): string[] {
    return this._interactorSpeciesFilter;
  }

  set interactorSpeciesFilter(value: string[]) {
    this._interactorSpeciesFilter = value;
  }

  get interactorTypeFilter(): string[] {
    return this._interactorTypeFilter;
  }

  set interactorTypeFilter(value: string[]) {
    this._interactorTypeFilter = value;
  }

  get interactionTypeFilter(): string[] {
    return this._interactionTypeFilter;
  }

  set interactionTypeFilter(value: string[]) {
    this._interactionTypeFilter = value;
  }

  get interactionDetectionMethodFilter(): string[] {
    return this._interactionDetectionMethodFilter;
  }

  set interactionDetectionMethodFilter(value: string[]) {
    this._interactionDetectionMethodFilter = value;
  }

  get interactionHostOrganismFilter(): string[] {
    return this._interactionHostOrganismFilter;
  }

  set interactionHostOrganismFilter(value: string[]) {
    this._interactionHostOrganismFilter = value;
  }

  get negativeFilter(): boolean {
    return this._negativeFilter;
  }

  set negativeFilter(value: boolean) {
    this._negativeFilter = value;
  }

  get miScoreMin(): any {
    return this._miScoreMin;
  }

  set miScoreMin(value: any) {
    this._miScoreMin = value;
  }

  get miScoreMax(): any {
    return this._miScoreMax;
  }

  set miScoreMax(value: any) {
    this._miScoreMax = value;
  }

  get columns(): Column[] {
    return this._columns;
  }


  get intraSpeciesFilter(): boolean {
    return this._intraSpeciesFilter;
  }

  set intraSpeciesFilter(value: boolean) {
    this._intraSpeciesFilter = value;
  }

  get currentPageIndex(): any {
    return this._currentPageIndex;
  }

  set currentPageIndex(value: any) {
    this._currentPageIndex = value;
  }

  get interactorSelected(): string {
    return this._interactorSelected;
  }

  set interactorSelected(value: string) {
    this._interactorSelected = value;
  }
}
