import {Injectable} from '@angular/core';
import * as $ from 'jquery';
import {CvTerm} from '../model/interaction-details/cv-term.model';
import {Annotation} from '../model/interaction-details/annotation.model';
import {Organism} from '../model/interaction-details/organism.model';
import {Alias} from '../model/interaction-details/alias.model';
import {environment} from '../../../../environments/environment';
import {groupBy} from '../../../shared/utils/array-utils';
import {DatabaseAccess, IdentifierTagComponent} from '../../../shared/components/identifier-tag/identifier-tag.component';
import ClickEvent = JQuery.ClickEvent;


const ebiURL = environment.ebi_url;

@Injectable()
export class TableFactoryService {

  static getCvURL(miId: string) {
    if (miId === undefined) {
      return null;
    }
    const id = miId.replace(':', '_');
    return `https://www.ebi.ac.uk/ols/ontologies/mi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2F${id}&viewMode=All&siblings=false`;
  }

  private static processDatabase(database: string | any): { tag: string, access: DatabaseAccess } {
    const shortDbName = database.shortName !== undefined ? database.shortName : database;
    const access: DatabaseAccess = IdentifierTagComponent.databaseToAccess.get(shortDbName);
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

  enlistWithButtons = (renderer: (data: any, i?: number) => (string), containerClass = 'aliasesList', alignTop = true) => (data: any[], type, row, meta) => {
    if (data == null || type !== 'display') {
      return data;
    }
    let html = '<div class="show-more-content">'
    let displayed = 0;
    for (let i = 0; i < data.length; i++) {
      if (displayed === 2) {
        html += '<div class="to-hide" style="display: none">';
      }
      const render = renderer(data[i], i);
      if (render) {
        html += render;
        displayed++;
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
                groupRenderer: (data: T[], type?, row?, meta?) => string,
                headerRenderer: (K) => string = group => ' ' + group) {
    return (data: T[], type, row, meta) => {
      if (data == null) {
        return;
      }
      let html = '<div class="table-list">';
      const groups = groupBy(data, grouper);
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
      return;
    }
    if (species.taxId != null && species.taxId > 0) {
      const url = `https://www.uniprot.org/taxonomy/${species.taxId}`;
      return `<a href="${url}" class="cv-term species" target="_blank">${species.scientificName}</a>`;
    } else {
      return species.scientificName;
    }
  }

  cvRender = (identifierColumn: string) => (data, type, row) => {
    const miId = row[identifierColumn];
    if (miId) {
      return `<a href="${TableFactoryService.getCvURL(miId)}" class="cv-term" target="_blank">${data}</a>`
    } else {
      return data;
    }
  }

  cvRenderStructured = (data: CvTerm, type?) => {
    if (type !== undefined && type !== 'display') {
      return;
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
      return;
    }
    return `<div class="aliasesCell tag-cell-container">
              <a class="detailsAliasesCell tag-cell" target="_blank"
                 href="${ebiURL}/ols/ontologies/mi/terms?obo_id=${alias.type.identifier}">
                ${alias.type.shortName}</a>
              <span class="detailsCell">${alias.name}</span>
            </div>`;
  }

  identifierRender(id: { identifier: string, database: string | any, qualifier?: any }): string {
    if (id === null) {
      return;
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
      return;
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
    $('div.dataTables_scrollBody').css('position', 'static');
    const filterBar = $('#filters-bar');
    $('div.dataTables_scrollHead')
      .css('position', 'sticky')
      .css('top', this.isScreenSize('large') && filterBar.length === 1 ? filterBar.outerHeight(true) + 1 + 'px' : '0')
      .css('box-shadow', '0 6px 7px -2px #0000005c')
      .css('z-index', '2');
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



