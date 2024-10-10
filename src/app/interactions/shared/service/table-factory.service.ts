import {Injectable} from '@angular/core';
import {CvTerm} from '../model/interaction-details/cv-term.model';
import {Annotation} from '../model/interaction-details/annotation.model';
import {Organism} from '../model/interaction-details/organism.model';
import {Alias} from '../model/interaction-details/alias.model';
import {environment} from '../../../../environments/environment';
import {groupBy} from '../../../shared/utils/array-utils';
import ClickEvent = JQuery.ClickEvent;

const ebiURL = environment.ebi_url;

@Injectable()
export class TableFactoryService {

  private static databaseToAccess: Map<string, DatabaseAccess> = new Map<string, DatabaseAccess>([
    ['uniprotkb', {
      fancyName: 'UniProt',
      getURL: id => {
        const match = /^([OPQ]\d[A-Z\d]{3}\d|[A-NR-Z]\d(?:[A-Z][A-Z\d]{2}\d){1,2})-(PRO_\d+)$/.exec(id); // extract (ac) and (pro id)
        return match != null ? `https://www.uniprot.org/uniprotkb/${match[1]}/entry#${match[2]}` : `https://www.uniprot.org/uniprotkb/${id}/entry`;
      },
      color: 'rgba(0,111,155,1.0)',
      backColor: 'rgba(143,195,195,0.1)'
    }],
    ['intact', {
      fancyName: 'IntAct',
      getURL: id => `./details/interaction/${id}`,
      color: 'rgba(104,41,124,1.0)'
    }],
    ['chebi', {
      fancyName: 'ChEBI',
      getURL: id => `https://www.ebi.ac.uk/chebi/searchId.do?chebiId=${id}`,
      color: 'rgba(8,80,131,1.0)',
      backColor: 'rgba(212,207,50, 0.5)'
    }],
    ['chembl', {
      fancyName: 'ChEMBL',
      getURL: id => `https://www.ebi.ac.uk/chembl/compound_report_card/${id}`,
      color: 'rgba(204,58,93,1.0)',
      backColor: 'rgba(37,159,163,0.5)'
    }],
    ['dip', {
      fancyName: 'DIP',
      getURL: id => `https://dip.doe-mbi.ucla.edu/dip/DIPview.cgi?PK=${id.replace('DIP-', '').slice(0, -1)}`,
      color: 'rgba(58,138,171,1.0)',
      backColor: 'rgba(246,242,49,0.5)'
    }],
    ['refseq', {
      fancyName: 'RefSeq',
      getURL: id => `https://www.ncbi.nlm.nih.gov/refseq/?term=${id}+AND+srcdb_refseq%5Bprop%5D`,
      color: 'rgba(51,102,153,1.0)'
    }],
    ['genbank_protein_gi', {
      fancyName: 'GenBank Protein',
      getURL: id => `https://www.ncbi.nlm.nih.gov/protein/${id}`,
      color: 'rgba(51,102,153,1.0)'
    }],
    ['ensembl', {
      fancyName: 'Ensembl',
      getURL: id => `http://www.ensembl.org/id/${id}`,
      color: 'rgba(164,0,0,1.0)',
      backColor: 'rgba(85,136,221,0.5)'
    }],
    ['matrixdb', {
      fancyName: 'MatrixDB',
      getURL: id => `http://matrixdb.univ-lyon1.fr/cgi-bin/current/newPort?type=biomolecule&value=${id}`,
      color: 'rgb(58,84,128)',
      backColor: 'rgba(154,181,228,0.5)'
    }],
    ['rnacentral', {
      fancyName: 'RNA central',
      getURL: id => `https://rnacentral.org/rna/${id}`,
      color: 'rgba(0,144,188,1.0)',
      backColor: 'rgba(188,216,224,0.5)'
    }],
    ['hgnc', {
      fancyName: 'HGNC',
      getURL: id => `https://www.genenames.org/data/gene-symbol-report/#!/hgnc_id/${id}`,
      color: 'rgba(0,50,102,1.0)'
    }],
    ['complex portal', {
      fancyName: 'Complex Portal',
      getURL: id => `https://www.ebi.ac.uk/complexportal/complex/${id}`,
      color: 'rgba(0,157,68,1.0)'
    }],
    ['mint', {
      fancyName: 'MINT',
      getURL: id => `https://mint.bio.uniroma2.it/index.php/results-interactions/?id=${id}`,
      color: 'rgba(9,118,0,1.0)'
    }],
    ['interpro', {
      fancyName: 'InterPro',
      getURL: id => `https://www.ebi.ac.uk/interpro/entry/InterPro/${id}`,
      color: 'rgba(46,124,149,1.0)',
      backColor: 'rgba(171,214,186,0.5)'
    }],
    ['uniparc', {
      fancyName: 'UniParc',
      getURL: id => `https://www.uniprot.org/uniparc/${id}?sort=score`,
      color: 'rgba(219,184,186,1.0)'
    }],
    ['intenz', {
      fancyName: 'IntEnz',
      getURL: (id) => `https://www.ebi.ac.uk/intenz/query?cmd=Search&q=${id}`,
      color: 'rgba(83,136,136,1.0)'
    }]
  ]);

  private static getCvURL(miId: string) {
    if (miId === undefined) {
      return null;
    }
    return `https://www.ebi.ac.uk/ols4/ontologies/mi/classes?obo_id=${miId}`;
  }

  private static processDatabase(database: string | any): { tag: string, access: DatabaseAccess } {
    const shortDbName = database.shortName !== undefined ? database.shortName : database;
    const access: DatabaseAccess = TableFactoryService.databaseToAccess.get(shortDbName);
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

  static toggleShowMoreLess = (event: ClickEvent) => {
    const button = $(event.target);
    const buttonText = button.text();
    if (buttonText.includes('more')) {
      button.text(buttonText.replace('more', 'less'));
    } else {
      button.text(buttonText.replace('less', 'more'));
    }
    const toToggle = button.prev('.show-more-content').children('.to-hide');
    toToggle.slideToggle(toToggle.height());
  }

  static toggleCollapsedPanels = (event: ClickEvent) => {
    let panel = $(event.target).next('.collapse-panel');
    if (panel.length === 0) {
      panel = $(event.target).parent().next('.collapse-panel');
    }
    panel.slideToggle({duration: panel.height(), easing: 'linear'});
    panel.prev('.collapse-header').toggleClass('collapsed')
  }

  constructor() {
  }

  enlist<T>(elementRenderer: (T) => string) {
    return (data: T[], type, row, meta) => {
      if (data == null || type !== 'display') {
        return null;
      }
      return `<ul class="elementList table-list">${data.map(elementRenderer).map((render) => `<li>${render}</li>`).join('')}</ul>`;
    }
  }

  enlistWithButtons = (renderer: (data: any, type, row, meta, i?) => (string), containerClass = 'aliasesList', alignTop = true) => (data: any[], type, row, meta) => {
    if (data == null || type !== 'display') {
      return data;
    }
    let html = '<div class="show-more-content">'
    let displayed = 0;
    if (data instanceof Array) {
      for (let i = 0; i < data.length; i++) {
        if (displayed === 2) {
          html += '<div class="to-hide" style="display: none">';
        }
        const render = renderer(data[i], type, row, meta, i);
        if (render) {
          html += render;
          displayed++;
        } else if (render !== null) {
          console.error(`${data} is not handled correctly by its renderer`);
        }
      }
    } else {
      const render = renderer(data, type, row, meta);
      if (render) {
        html += render;
        displayed++;
      } else if (render !== null) {
        console.error(`${data} is not handled correctly by its renderer`);
      }
    }

    if (displayed > 2) {
      html += `</div></div><button type="button" data-col="${meta.col}" class="showMore">Show more (${displayed - 2})</button>`;
    } else if (displayed === 2) {
      html += '</div></div>';
    } else {
      html += '</div>';
    }
    return `<div class="${containerClass} ${alignTop ? 'table-list' : ''}">${html}</div>`;
  }

  groupBy<T, K>(grouper: (data: T) => K,
                groupRenderer: (data: T[], type?, row?, meta?, i?) => string,
                headerRenderer: (K) => string = group => ' ' + group) {
    return (data: T[], type, row, meta) => {
      if (data == null) {
        return '';
      }
      let html = '<div class="table-list">';
      const groups = groupBy(data, grouper);
      groups.forEach((group, i) => {
        html += `<span class="collapse-header collapsed">${headerRenderer(group.group)}<span class="collapsable-counter">${group.elements.length}</span></span>`;
        html += '<div class="collapse-panel">';
        html += groupRenderer(group.elements, type, row, meta, i);
        html += '</div>';
      })
      return html + '</div>';
    }
  }

  speciesRender = (identifierColumn: string) => (data, type, row, meta) => {
    const id = row[identifierColumn];
    if (parseInt(id, 10) > 0) {
      const url = `https://www.uniprot.org/taxonomy/${id}`;
      return `<a href="${url}" class="cv-term species" target="_blank">${data}</a>`;
    } else {
      return data;
    }
  }

  speciesRenderStructured = (species: Organism) => {
    if (species == null) {
      return '';
    }
    if (species.taxId != null && species.taxId > 0) {
      const url = `https://www.uniprot.org/taxonomy/${species.taxId}`;
      return `<a href="${url}" class="cv-term species" target="_blank">${species.scientificName}</a>`;
    } else {
      return species.scientificName;
    }
  }

  cvRender = (identifierColumn: string) => (data: any, type: any, row: any, meta: any, i?: number) => {
    let miId = row[identifierColumn];
    console.log(i, miId[i], miId)
    if (i !== undefined) {
      miId = miId[i];
    }
    if (miId) {
      return `<a href="${TableFactoryService.getCvURL(miId)}" class="cv-term" target="_blank">${data}</a>`
    } else {
      return data;
    }
  }

  cvRenderStructured = (data: CvTerm, type?) => {
    if ((type !== undefined && type !== 'display') || data == null) {
      return '';
    }
    if (data.identifier) {
      return `<a href="${TableFactoryService.getCvURL(data.identifier)}" class="cv-term" target="_blank">${data.shortName}</a>`
    } else {
      return data.shortName;
    }
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

    const symbol = tagStyle.symbol !== '' ? `<i class="icon icon-common ${tagStyle.symbol}"></i>` : '';
    const tag = annotation.topic.identifier != null ?
      `<a class="${tagStyle.class} tag-cell" target="_blank" href="${TableFactoryService.getCvURL(annotation.topic.identifier)}"
         >${symbol} ${annotation.topic.shortName}</a>` :
      `<span class="${tagStyle.class} tag-cell">${symbol} ${annotation.topic.shortName}</span>`;

    return `<div class="annotationInteractionCell tag-cell-container">
              ${tag}
              <span class="detailsCell annotationInteractionCellWidth">${annotation.description}</span>
            </div>`;
  }

  aliasRender = (alias: Alias, type?) => {
    if (type !== undefined && type !== 'display') {
      return '';
    }
    return `<div class="aliasesCell tag-cell-container">
              <a class="detailsAliasesCell tag-cell" target="_blank"
                 href="${ebiURL}/ols4/ontologies/mi/classes?obo_id=${alias.type.identifier}">
                ${alias.type.shortName}</a>
              <span class="detailsCell">${alias.name}</span>
            </div>`;
  }

  identifierRender(id: { identifier: string, database: string | any, qualifier?: any }): string {
    if (!id) {
      return '';
    }
    const db = TableFactoryService.processDatabase(id.database);
    const url = db.access ? db.access.getURL(id.identifier) : null;
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
    return TableFactoryService.processDatabase(database).tag;
  }

  identifierLink(id: { identifier: string, database: string | any, qualifier?: any }) {
    if (id === null) {
      return '';
    }
    const db = TableFactoryService.processDatabase(id.database);
    const url = db.access ? db.access.getURL(id.identifier) : null;
    return `<div class="detailsCell identifierCellWidth">
              ${id.qualifier ? '<b> ' : ''}
                ${url !== null ? `<a href="${url}" target="_blank" >${id.identifier}</a>` : id.identifier}
              ${id.qualifier ? '</b>' : ''}
            </div>`;
  }


  initTopSlider(tableId: string) {
    const bodyScroll = $(`#${tableId}`).parent();
    const headScroll = bodyScroll.siblings('.dataTables_scrollHead');
    bodyScroll.addClass('scrollbar');
    headScroll.addClass('scrollbar');

    let scrolling = false;
    headScroll.on('scroll', () => {
      if (!scrolling) {
        scrolling = true;
        bodyScroll.scrollLeft(headScroll.scrollLeft())
      } else {
        scrolling = false;
      }
    });

    bodyScroll.off('scroll');
    bodyScroll.on('scroll', () => {
      if (!scrolling) {
        scrolling = true;
        headScroll.scrollLeft(bodyScroll.scrollLeft())
      } else {
        scrolling = false;
      }
    })
  }

  makeTableHeaderSticky() {
    $(window).resize(Foundation.util.throttle(this.updateTableHeader.bind(this), 300));
    $('div.dataTables_scrollBody').css('position', 'static');
    $('div.dataTables_scrollHead')
      .css('position', 'sticky')
      .css('box-shadow', '0 6px 7px -2px #0000005c')
      .css('z-index', '2');
    setTimeout(() => this.updateTableHeader(), 0);
  }


  async updateTableHeader() {
    const filterBar = $('#filters-bar');
    $('div.dataTables_scrollHead').css('top', this.isScreenSize('large') && filterBar.length === 1 ? filterBar.outerHeight(false) + 'px' : '0');
  }

  isScreenSize(size: 'small' | 'medium' | 'large'): boolean {
    return window.getComputedStyle(document.body, ':after').getPropertyValue('content').slice(1, -1) === size;
  }

  initShadowBorder(tableId: string) {
    const table = $('#' + tableId);
    const scrollArea = table.parents('div.dataTables_scroll');
    scrollArea.append($('<div class="shadow-left" style="display: none"></div>'))
    scrollArea.append($('<div class="shadow-right"></div>'))
    table.parent('.dataTables_scrollBody').scroll((e) => {
      if (e.target.scrollLeft <= 10) {
        $('.shadow-left').hide();
      } else {
        $('.shadow-left').show();
      }
      if (e.target.scrollWidth - (e.target.clientWidth + e.target.scrollLeft) <= 10) {
        $('.shadow-right').hide();
      } else {
        $('.shadow-right').show();
      }
    })
  }


  enableShowButtons() {
    $(document).off('click', 'button.showMore', TableFactoryService.toggleShowMoreLess);
    $(document).on('click', 'button.showMore', TableFactoryService.toggleShowMoreLess);
  }

  enableCollapsedPanels() {
    $(document).off('click', '.collapse-header', TableFactoryService.toggleCollapsedPanels)
    $(document).on('click', '.collapse-header', TableFactoryService.toggleCollapsedPanels)
  }
}

interface DatabaseAccess {
  fancyName: string,
  color?: string,
  backColor?: string,

  getURL(id: string): string;
}

