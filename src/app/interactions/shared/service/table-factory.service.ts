import {Injectable} from '@angular/core';
import * as $ from "jquery";
import {CvTerm} from "../model/interaction-details/cv-term.model";
import {Annotation} from "../model/interaction-details/annotation.model";
import {Organism} from "../model/interaction-details/organism.model";
import {Alias} from "../model/interaction-details/alias.model";
import {environment} from "../../../../environments/environment";
import {groupBy} from "../../../shared/utils/array-utils";


const ebiURL = environment.ebi_url;

@Injectable()
export class TableFactoryService {

  constructor() {
  }

  enlist<T>(elementRenderer: (T) => string) {
    return (data: T[], type, row, meta) => {
      if (data == null || type != "display") return null;
      return `<ul class="elementList table-list">${data.map(elementRenderer).map((render) => `<li>${render}</li>`).join('')}</ul>`;
    }
  }

  enlistWithButtons = (renderer: (data: any, i?: number) => (string), containerClass = 'aliasesList', alignTop = true) => (data: any[], type, row, meta) => {
    if (data == null || type != 'display') return data;
    let html = '<div class="show-more-content">'
    for (let i = 0; i < data.length; i++) {
      if (i === 2) html += '<div class="to-hide" style="display: none">';
      let render = renderer(data[i], i);
      html += render ? render : '';
    }
    if (data.length > 2) {
      html += `</div></div><button type="button" data-col="${meta.col}" class="showMore">Show more (${data.length - 2})</button>`;
    } else html += '</div>';
    return `<div class="${containerClass} ${alignTop ? 'table-list' : ''}">${html}</div>`;
  }

  groupBy<T, K>(grouper: (data: T) => K,
                groupRenderer: (data: T[], type?, row?, meta?) => string,
                headerRenderer: (K) => string = group => ' ' + group) {
    return (data: T[], type, row, meta) => {
      if (data == null) return;
      let html = '<div class="table-list">';
      let groups = groupBy(data, grouper);
      groups.forEach(group => {
        html += `<span class="collapse-header collapsed">${headerRenderer(group.group)}<span class="collapsable-counter">${group.elements.length}</span></span>`;
        html += '<div class="collapse-panel">';
        html += groupRenderer(group.elements, type, row, meta);
        html += '</div>';
      })
      return html + '</div>';
    }
  }

  speciesRender = (identifierColumn: string) => (data, type, row, meta) => {
    let id = row[identifierColumn];
    if (parseInt(id) > 0) {
      let url = `https://www.uniprot.org/taxonomy/${id}`;
      return `<a href="${url}" class="cv-term species" target="_blank">${data}</a>`;
    } else {
      return data;
    }
  }

  speciesRenderStructured = (species: Organism) => {
    if (species == null) return;
    if (species.taxId != null && species.taxId > 0) {
      let url = `https://www.uniprot.org/taxonomy/${species.taxId}`;
      return `<a href="${url}" class="cv-term species" target="_blank">${species.scientificName}</a>`;
    } else {
      return species.scientificName;
    }
  }

  private static getCvURL(miId: string) {
    if (miId == undefined) return null;
    let id = miId.replace(':', '_');
    return `https://www.ebi.ac.uk/ols/ontologies/mi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2F${id}&viewMode=All&siblings=false`;
  }

  cvRender = (identifierColumn: string) => (data, type, row) => {
    let miId = row[identifierColumn];
    if (miId) {
      return `<a href="${TableFactoryService.getCvURL(miId)}" class="cv-term" target="_blank">${data}</a>`
    } else return data;
  }

  cvRenderStructured = (data: CvTerm, type?) => {
    if (type != undefined && type !== 'display') return;
    if (data.identifier) {
      return `<a href="${TableFactoryService.getCvURL(data.identifier)}" class="cv-term" target="_blank">${data.shortName}</a>`
    } else return data.shortName;
  }

  annotationRender = (tagStyleMap?: Map<string, { class: string, symbol: string }>) => (annotation: Annotation) => {
    let tagStyle = {class: 'detailsAnnotationCell', symbol: ''};
    if (tagStyleMap != null) {
      if (tagStyleMap.has(annotation.topic.shortName)) {
        tagStyle = tagStyleMap.get(annotation.topic.shortName);
      } else if (tagStyleMap.has('default')) {
        tagStyle = tagStyleMap.get('default');
      }
    }

    let symbol = tagStyle.symbol !== '' ? `<i class="icon icon-common ${tagStyle.symbol}"></i>` : '';

    let tag = annotation.topic.identifier != null ?
      `<a class="${tagStyle.class} tag-cell" target="_blank" href="${TableFactoryService.getCvURL(annotation.topic.identifier)}"
         >${symbol} ${annotation.topic.shortName}</a>` :
      `<span class="${tagStyle.class} tag-cell">${symbol} ${annotation.topic.shortName}</span>`;

    return `<div class="annotationInteractionCell tag-cell-container">
              ${tag}
              <span class="detailsCell annotationInteractionCellWidth">${annotation.description}</span>
            </div>`;
  }

  aliasRender = (alias: Alias, type?) => {
    if (type != undefined && type !== 'display') return;
    return `<div class="aliasesCell tag-cell-container">
              <a class="detailsAliasesCell tag-cell" target="_blank"
                 href="${ebiURL}/ols/ontologies/mi/terms?obo_id=${alias.type.identifier}">
                ${alias.type.shortName}</a>
              <span class="detailsCell">${alias.name}</span>
            </div>`;
  }

  identifierRender(id: { identifier: string, database: string | any, qualifier?: any }): string {
    if (id === null) return;
    let db = this.processDatabase(id.database);
    let url = db.access ? db.access.getURL(id.identifier) : null;
    return `<div class="tag-cell-container identifier-cell-container">
              ${db.tag}
              <div class="detailsCell identifierCellWidth">
                ${id.qualifier ? '<b> ' : ''}
                  ${url !== null ? `<a href="${url}" target="_blank" >${id.identifier}</a>` : id.identifier}
                ${id.qualifier ? '</b>' : ''}
              </div>
            </div>`;
  }


  databaseTag(database: string | any): string {
    return this.processDatabase(database).tag;
  }

  identifierLink(id: { identifier: string, database: string | any, qualifier?: any }) {
    if (id === null) return;
    let db = this.processDatabase(id.database);
    let url = db.access ? db.access.getURL(id.identifier) : null;
    return `<div class="detailsCell identifierCellWidth">
              ${id.qualifier ? '<b> ' : ''}
                ${url !== null ? `<a href="${url}" target="_blank" >${id.identifier}</a>` : id.identifier}
              ${id.qualifier ? '</b>' : ''}
            </div>`;
  }

  private processDatabase(database: string | any): { tag: string, access: DatabaseAccess } {
    let shortDbName = database.shortName !== undefined ? database.shortName : database;
    let access: DatabaseAccess = TableFactoryService.databaseToAccess.get(shortDbName);
    let style = ''
    if (access) {
      if (access.color) {
        style = `color:${access.color};
                 background-color:${access.backColor ? access.backColor : access.color.replace('1.0', '0.05')};`
      }
    }

    let databaseTag: string;
    if (database.shortName !== undefined) {
      databaseTag = `<a class="identifier-cell tag-cell" style="${style}" target="_blank" href="${TableFactoryService.getCvURL(database.identifier)}"
                       >${access ? access.fancyName : shortDbName}</a>`
    } else {
      databaseTag = `<span class="identifier-cell tag-cell" style="${style}">${access ? access.fancyName : shortDbName}</span>`
    }
    return {tag: databaseTag, access: access};
  }

  private static databaseToAccess: Map<string, DatabaseAccess> = new Map<string, DatabaseAccess>([
    ["uniprotkb", {
      fancyName: "UniProt",
      getURL: id => `https://www.uniprot.org/uniprot/${id}`,
      color: "rgba(0,111,155,1.0)",
      backColor: "rgba(143,195,195,0.1)"
    }],
    ["intact", {
      fancyName: "IntAct",
      getURL: id => null,
      color: 'rgba(104,41,124,1.0)'
    }],
    ["chebi", {
      fancyName: "ChEBI",
      getURL: id => `https://www.ebi.ac.uk/chebi/searchId.do?chebiId=${id}`,
      color: 'rgba(8,80,131,1.0)',
      backColor: 'rgba(212,207,50, 0.5)'
    }],
    ["chembl", {
      fancyName: "ChEMBL",
      getURL: id => `https://www.ebi.ac.uk/chembl/compound_report_card/${id}`,
      color: 'rgba(204,58,93,1.0)',
      backColor: 'rgba(37,159,163,0.5)'
    }],
    ["dip", {
      fancyName: "DIP",
      getURL: id => `https://dip.doe-mbi.ucla.edu/dip/DIPview.cgi?PK=${id.replace("DIP-", "").slice(0, -1)}`,
      color: 'rgba(58,138,171,1.0)',
      backColor: 'rgba(246,242,49,0.5)'
    }],
    ["refseq", {
      fancyName: "RefSeq",
      getURL: id => `https://www.ncbi.nlm.nih.gov/refseq/?term=${id}+AND+srcdb_refseq%5Bprop%5D`,
      color: 'rgba(51,102,153,1.0)'
    }],
    ["genbank_protein_gi", {
      fancyName: "GenBank Protein",
      getURL: id => `https://www.ncbi.nlm.nih.gov/protein/${id}`,
      color: 'rgba(51,102,153,1.0)'
    }],
    ["ensembl", {
      fancyName: "Ensembl",
      getURL: id => `http://www.ensembl.org/id/${id}`,
      color: 'rgba(164,0,0,1.0)',
      backColor: 'rgba(85,136,221,0.5)'
    }],
    ["matrixdb", {
      fancyName: "MatrixDB",
      getURL: id => `http://matrixdb.univ-lyon1.fr/cgi-bin/current/newPort?type=biomolecule&value=${id}`,
      color: 'rgb(58,84,128)',
      backColor: 'rgba(154,181,228,0.5)'
    }],
    ["rnacentral", {
      fancyName: "RNA central",
      getURL: id => `https://rnacentral.org/rna/${id}`,
      color: 'rgba(0,144,188,1.0)',
      backColor: 'rgba(188,216,224,0.5)'
    }],
    ["hgnc", {
      fancyName: "HGNC",
      getURL: id => `https://www.genenames.org/data/gene-symbol-report/#!/hgnc_id/${id}`,
      color: 'rgba(0,50,102,1.0)'
    }],
    ["complex portal", {
      fancyName: "Complex Portal",
      getURL: id => `https://www.ebi.ac.uk/complexportal/complex/${id}`,
      color: 'rgba(0,157,68,1.0)'
    }],
    ["mint", {
      fancyName: "MINT",
      getURL: id => `https://mint.bio.uniroma2.it/index.php/results-interactions/?id=${id}`,
      color: 'rgba(9,118,0,1.0)'
    }],
    ["interpro", {
      fancyName: "InterPro",
      getURL: id => `https://www.ebi.ac.uk/interpro/entry/InterPro/${id}`,
      color: 'rgba(46,124,149,1.0)',
      backColor: 'rgba(171,214,186,0.5)'
    }],
    ["uniparc", {
      fancyName: "UniParc",
      getURL: id => `https://www.uniprot.org/uniparc/${id}?sort=score`,
      color: 'rgba(219,184,186,1.0)'
    }],
    ['intenz', {
      fancyName: "IntEnz",
      getURL: (id) => `https://www.ebi.ac.uk/intenz/query?cmd=Search&q=${id}`,
      color: 'rgba(83,136,136,1.0)'
    }]
  ]);


  initTopSlider(tableId: string) {
    let bodyScroll = $(`#${tableId}`).parent();
    let topScroll = $(`#${tableId}TopScroll`);
    if (topScroll.length === 0) {
      topScroll = $(`<div id="${tableId}TopScroll"><div id="${tableId}WidthMimic"></div></div>`);
      topScroll.find(`#${tableId}WidthMimic`).height(1);
      topScroll.css('overflow-x', 'auto')
      topScroll.css('overflow-y', 'hidden')
      topScroll.insertBefore(bodyScroll.parent());
    }
    let scrolling = false;
    topScroll.scroll(function () {
      if (!scrolling) {
        scrolling = true;
        bodyScroll.scrollLeft(topScroll.scrollLeft())
      } else {
        scrolling = false;
      }
    });

    bodyScroll.scroll(function () {
      if (!scrolling) {
        scrolling = true;
        topScroll.scrollLeft(bodyScroll.scrollLeft());
      } else {
        scrolling = false;
      }
    });
  }

  makeTableHeaderSticky() {
    $('div.dataTables_scrollBody').css('position', 'static');
    let filterBar = $('#filters-bar');
    $('div.dataTables_scrollHead')
      .css('position', 'sticky')
      .css('top', this.isScreenSize('large') && filterBar.length === 1 ? filterBar.height() - 1 + 'px' : '0')
      .css('box-shadow', '0 6px 7px -2px #0000005c')
      .css('z-index', '2');
  }

  isScreenSize(size: 'small' | 'medium' | 'large'): boolean {
    return window.getComputedStyle(document.body, ':after').getPropertyValue('content').slice(1, -1) == size;
  }

  initShadowBorder(tableId: string) {
    let table = $('#' + tableId);
    let scrollArea = table.parents('div.dataTables_scroll');
    scrollArea.append($('<div class="shadow-left"></div>'))
    scrollArea.append($('<div class="shadow-right"></div>'))
    table.parent('.dataTables_scrollBody').scroll((e) => {
      if (e.target.scrollLeft <= 10) {
        $('.shadow-left').hide();
      } else $('.shadow-left').show();
      if (e.target.scrollWidth - (e.target.clientWidth + e.target.scrollLeft) <= 10) {
        $('.shadow-right').hide();
      } else $('.shadow-right').show();
    })
  }

  enableShowButtons() {
    $(document).on('click', 'button.showMore', event => {
      let button = $(event.target);
      let buttonText = button.text();
      if (buttonText.includes('more')) {
        button.text(buttonText.replace('more', 'less'));
      } else {
        button.text(buttonText.replace('less', 'more'));
      }
      let toToggle = button.prev('.show-more-content').children('.to-hide');
      toToggle.slideToggle(toToggle.height());
    });
  }

  enableCollapsedPanels() {
    $(document).on('click', '.collapse-header', event => {
      let panel = $(event.target).next('.collapse-panel');
      if (panel.length === 0) panel = $(event.target).parent().next('.collapse-panel');
      panel.slideToggle({duration: panel.height(), easing: 'linear'});
      panel.prev('.collapse-header').toggleClass('collapsed')
    })
  }
}

interface DatabaseAccess {
  fancyName: string,
  color?: string,
  backColor?: string,

  getURL(id: string): string;
}

