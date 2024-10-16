import {AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {environment} from '../../../../../environments/environment';
import {extractAlias, extractAnnotation, extractId} from '../../../../shared/utils/string-utils';
import {TableFactoryService} from '../../../shared/service/table-factory.service';
import {InteractionTable} from '../../../shared/model/tables/interaction-table.model';
import {Column} from '../../../shared/model/tables/column.model';
import {NetworkSelectionService} from '../../../shared/service/network-selection.service';
import {ResultTable} from '../../../shared/model/interactions-results/result-table-interface';
import {SearchService} from '../../../../home-dashboard/search/service/search.service';
import {FilterService} from '../../../shared/service/filter.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';


const baseURL = environment.intact_portal_ws;
const ebiURL = environment.ebi_url;

@UntilDestroy()
@Component({
  selector: 'ip-interactions-table',
  templateUrl: './interactions-table.component.html',
  styleUrls: ['./interactions-table.component.css']
})
export class InteractionsTableComponent implements OnInit, OnChanges, AfterViewInit, ResultTable {
  @Input() interactionTab: boolean;


  private _interactionSelected: string;
  dataTable: DataTables.Api;

  columnView = 'interactions_columnView';

  private _columns = new InteractionTable();

  constructor(
    private route: ActivatedRoute,
    private tableFactory: TableFactoryService,
    private networkSelection: NetworkSelectionService,
    private search: SearchService,
    private filters: FilterService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        if (this.dataTable !== undefined) {
          this.dataTable = $('#interactionsTable').DataTable().ajax.reload();
        }
      });

    this.initDataTable();
    this.networkSelection.registerSelectionListener(this.dataTable, this);
    this.tableFactory.enableShowButtons();
    this.tableFactory.initTopSlider('interactionsTable');
    this.tableFactory.initShadowBorder('interactionsTable');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.interactionTab.currentValue) {
      // This fixes the alignment between the th and td when we have activated scrollX:true
      const table = $('#interactionsTable');
      this.dataTable = table.DataTable().columns.adjust().draw();
    }
  }

  private readonly tableUnselectedEvent = new CustomEvent('tableUnselected', {bubbles: true});

  ngAfterViewInit(): void {
    const interactionsTable = $('#interactionsTable');
    interactionsTable.on('change', 'input[type=\'checkbox\']', (e) => {
      const interactionSel = e.currentTarget.id;

      if (this.interactionSelected !== interactionSel) {
        const previousCheckbox = $(`#${this.interactionSelected}:checkbox`);
        previousCheckbox.prop('checked', false);

        this.interactionSelected = interactionSel;
        const newCheckbox = $(`#${interactionSel}:checkbox`);
        newCheckbox.prop('checked', true);

        const interactionSelectedEvent = new CustomEvent('tableInteractionSelected', {
          bubbles: true,
          detail: {
            interactionId: this.interactionSelected
          }
        });
        document.dispatchEvent(interactionSelectedEvent);
      } else {
        // Unselected
        this.interactionSelected = undefined;
        document.dispatchEvent(this.tableUnselectedEvent);
      }
    });

    // When table redrawn keep row selection synchronization between tables
    interactionsTable.on('draw.dt', () => {
      if (this.interactionSelected !== undefined) {
        const previousCheckbox = $(`#${this.interactionSelected}:checkbox`);
        previousCheckbox.prop('checked', true);
        const interactionSelectedEvent = new CustomEvent('tableInteractionSelected', {
          bubbles: true,
          detail: {
            interactionId: this.interactionSelected
          }
        });
        document.dispatchEvent(interactionSelectedEvent);
      }
    });
  }

  clearTableSelection() {
    if (!this.interactionSelected) {
      return;
    }
    const selectedInteraction = $(`#${this.interactionSelected}:checkbox`);
    if (selectedInteraction.length > 0) {
      selectedInteraction.prop('checked', false);
      this.interactionSelected = undefined;
    }
  }

  updateTable() {
    const table: any = $('#interactionsTable');
    this.dataTable = table.DataTable().columns.adjust().draw();
  }

  private initDataTable(): void {
    const table = $('#interactionsTable');
    this.dataTable = table.DataTable({
        ordering: false,
        searching: false,
        paging: true,
        lengthMenu: [25, 50, 75, 100, 150, 200, 500],
        pageLength: 25,
        pagingType: 'numbers',
        processing: true,
        serverSide: true,
        dom: '<"top"filp>rt<"bottom"ifp>',
        scrollX: true,
        fixedHeader: false,
        ajax: {
          url: `${baseURL}/interaction/list/`,
          type: 'POST',
          data: (d: any) => {
            d.page = d.start / d.length;
            d.pageSize = d.length;
            this.search.toParams(d);
            this.networkSelection.toParams(d);
            this.filters.toParams(d);
          }
        },
        columns: [
          {
            ...this._columns.id,
            render: function (data, type, full) {
              if (type === 'display') {
                return `<div>
                        <input type="checkbox" id="${full.binaryInteractionId}" name="check" value="${data}"/>
                        <span class="margin-left-medium">
                          <a href="${environment.context_path}/details/interaction/${full.ac}" class="icon-link tool-tip" target="_blank">
                            <i class="icon icon-common icon-search-document"></i>
                            <span class="tool-tip-text">Show details of <span class="nowrap">${full.ac}</span></span>
                          </a>
                        </span>
                      </div>`;
              }
              return data;
            }
          },
          {
            ...this._columns.moleculeA,
          },
          {
            ...this._columns.moleculeB,
          },
          {
            ...this._columns.identifierA,
            render: (data, type) => {
              if (type === 'display' && data !== null) {
                return this.tableFactory.identifierRender(extractId(data))
              }
              return data
            }
          },
          {
            ... this._columns.identifierB,
            render: (data, type) => {
              if (type === 'display' && data !== null) {
                return this.tableFactory.identifierRender(extractId(data))
              }
              return data
            }
          },
          {
            ...this._columns.typeA,
            render: this.tableFactory.cvRender('typeMIA')
          },
          {
            ...this._columns.typeB,
            render: this.tableFactory.cvRender('typeMIB')
          },
          {
            ...this._columns.speciesA,
            render: this.tableFactory.speciesRender('taxIdA')
          },
          {
            ...this._columns.speciesB,
            render: this.tableFactory.speciesRender('taxIdB')
          },
          {
            ...this._columns.hostOrganism,
            render: this.tableFactory.speciesRender('hostOrganismTaxId')
          },
          {
            ...this._columns.negative,
            render: data => data ? '❌' : '✔️'
          },
          {
            ...this._columns.detectionMethod,
            render: this.tableFactory.cvRender('detectionMethodMIIdentifier')
          },
          {
            ...this._columns.identificationMethodA,
            render: this.tableFactory.enlistWithButtons(this.tableFactory.cvRender('identificationMethodMIIdentifiersA'), '', false)
          },
          {
            ...this._columns.identificationMethodB,
            render: this.tableFactory.enlistWithButtons(this.tableFactory.cvRender('identificationMethodMIIdentifiersB'), '', false)
          },
          {
            ...this._columns.publicationIdentifiers,
            render: this.tableFactory.enlistWithButtons((d) => {
              const data_s = d.split('(');
              const publicationId: string = data_s[0].trim();
              const publicationSource = data_s[1].slice(0, -1);
              let url = '';
              if (publicationSource === 'pubmed' && !publicationId.includes('unassigned')) {
                url = 'https://europepmc.org/article/MED/' + publicationId;
              } else if (publicationSource === 'imex') {
                url = ebiURL + '/intact/imex/main.xhtml?query=' + publicationId;
              } else if (publicationSource === 'doi') {
                url = 'https://www.doi.org/' + publicationId;
              } else {
                return null;
              }

              return `<div><span class="detailsCell">
                          ${url !== '' ? `<a href="${url}" target="_blank">${publicationId}</a>` : publicationId}
                      </span></div>`;
            }, 'alignCell', false)
          },
          {
            ...this._columns.type,
            render: this.tableFactory.cvRender('typeMIIdentifier')
          },
          {
            ...this._columns.ac,
            render: function (data, type) {
              if (type === 'display' && data != null) {
                return `<div>
                          <span>
                            <a href="${environment.context_path}/details/interaction/${data}" style="white-space: nowrap">${data}</a>
                          </span>
                        </div>`;
              }
            }
          },
          {
            ...this._columns.database,
          },
          {
            ...this._columns.confidenceValue,
            render: this.tableFactory.enlistWithButtons((d: string) => {

              if (!d.includes('intact-miscore')) {
                const [name, value] = d.split(/[()]/);
                const scoreValue = parseFloat(value);
                const fixed = isNaN(scoreValue) ? value : scoreValue.toFixed(2);
                return `<div class="tag-cell-container vertical-flex"><span class="detailsExpansionsCell tag-cell centered">${name}:${fixed}</span></div>`
              }
              const YELLOW_ORANGE_BROWN_PALETTE: string[] = [
                'rgb(255,255,229)',
                'rgb(255,247,188)',
                'rgb(254,227,145)',
                'rgb(254,196,79)',
                'rgb(254,153,41)',
                'rgb(236,112,20)',
                'rgb(204,76,2)',
                'rgb(153,52,4)',
                'rgb(102,19,5)',
                'rgb(54, 19, 3)'
              ];

              const YELLOW_ORANGE_BROWN_PALETTE_TEXT: string[] = [
                'rgb(254,153,41)',
                'rgb(254,153,41)',
                'rgb(254,153,41)',
                'rgb(254,153,41)',
                'rgb(254,153,41)',
                'rgb(236,112,20)',
                'rgb(204,76,2)',
                'rgb(153,52,4)',
                'rgb(102,19,5)',
                'rgb(54, 19, 3)'
              ];

              const YELLOW_ORANGE_BROWN_PALETTE_BG: string[] = [
                'rgba(255,255,229,0.1)',
                'rgba(255,247,188,0.1)',
                'rgba(254,227,145,0.1)',
                'rgba(254,196,79,0.1)',
                'rgba(254,153,41,0.1)',
                'rgba(236,112,20,0.1)',
                'rgba(204,76,2,0.1)',
                'rgba(153,52,4,0.1)',
                'rgba(102,19,5,0.1)',
                'rgba(54, 19,3,0.1)'
              ];

              const score = d.split(':');
              const paletteIndex = Math.floor(parseFloat(score[1]) * 10);

              // noinspection CssInvalidPropertyValue
              return `<div class="tag-cell-container vertical-flex">
                          <a class="detailsConfidencesCell tag-cell centered" target="_blank"
                          href="${environment.context_path}/documentation/user-guide#interaction_scoring"
                          style="background-color:${YELLOW_ORANGE_BROWN_PALETTE_BG[paletteIndex]};
                                 border:1px solid ${YELLOW_ORANGE_BROWN_PALETTE[paletteIndex]};
                                 color: ${YELLOW_ORANGE_BROWN_PALETTE_TEXT[paletteIndex]}">
                            ${d.replace('intact-miscore', 'MI Score')}
                          </a>
                        </div>`;
            }, '', false)
          },
          {
            ...this._columns.expansionMethod,
            defaultContent: ' ',
            render: function (data, type) {
              if (type === 'display' && data != null) {
                return `<div style="display: flex">
                        <a target="_blank" class="tag-cell detailsExpansionsCell"
                           href="${environment.context_path}/documentation/user-guide#expansion_method" >
                            ${data}
                        </a>
                      </div>`;
              }
            }
          },
          {
            ...this._columns.experimentalRoleA,
            defaultContent: ' ',
            render: this.tableFactory.cvRender('experimentalRoleMIIdentifierA')
          },
          {
            ...this._columns.experimentalRoleB,
            defaultContent: ' ',
            render: this.tableFactory.cvRender('experimentalRoleMIIdentifierB')
          },
          {
            ...this._columns.biologicalRoleA,
            defaultContent: ' ',
            render: this.tableFactory.cvRender('biologicalRoleMIIdentifierA')
          },
          {
            ...this._columns.biologicalRoleB,
            defaultContent: ' ',
            render: this.tableFactory.cvRender('biologicalRoleMIIdentifierB')
          },
          {
            ...this._columns.aliasesA,
            defaultContent: ' ',
            render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.aliasRender(extractAlias(d)))
          },
          {
            ...this._columns.aliasesB,
            defaultContent: ' ',
            render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.aliasRender(extractAlias(d)))
          },
          {
            ...this._columns.featureCount,
            render: function (data, type) {
              if (type === 'display' && data != null) {
                return `<div class="alignCell"><span>${data}</span></div>`;
              }
            }
          },
          {
            ...this._columns.parameters,
            defaultContent: ' ',
            render: function (data, type) {
              if (type === 'display' && data != null) {
                return `<div class="parametersCell"><span>${data}</span></div>`;
              }
            }
          },
          {
            ...this._columns.annotationsA,
            defaultContent: ' ',
            render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.annotationRender(new Map([
              ['comment', {class: 'detailsCommentsCell', symbol: 'icon-comment'}],
              ['default', {class: 'detailsAllCell', symbol: 'icon-tag'}]
            ]))(extractAnnotation(d)), 'annotationsList')
          },
          {
            ...this._columns.annotationsB,
            defaultContent: ' ',
            render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.annotationRender(new Map([
              ['comment', {class: 'detailsCommentsCell', symbol: 'icon-comment'}],
              ['default', {class: 'detailsAllCell', symbol: 'icon-tag'}]
            ]))(extractAnnotation(d)), 'annotationsList')
          },
          {
            ...this._columns.annotations,
            defaultContent: ' ',
            render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.annotationRender(new Map([
              ['figure legend', {class: 'detailsFigureLegendCell', symbol: 'icon-image'}],
              ['comment', {class: 'detailsCommentsCell', symbol: 'icon-comment'}],
              ['caution', {class: 'detailsCautionsCell', symbol: 'icon-exclamation-triangle'}],
              ['default', {class: 'detailsAllCell', symbol: 'icon-tag'}]
            ]))(extractAnnotation(d)), 'annotationsList')
          }
        ],
        drawCallback: function () {
          $('#interactionsTableWidthMimic').width($('#interactionsTable').width());
          $('.table-list').parent('td').css('vertical-align', 'top');
          $('.collapse-panel').css('display', 'none');
        }
      }
    );
  }


  /************************* /
   /** GETTERS AND SETTERS ** /
   /*************************/

  get columns(): Column[] {
    return this._columns;
  }

  get interactionSelected(): string {
    return this._interactionSelected;
  }

  set interactionSelected(value: string) {
    this._interactionSelected = value;
  }

  get isActive(): boolean {
    return this.interactionTab;
  }
}
