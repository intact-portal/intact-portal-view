import {Injectable} from '@angular/core';
import {titleCase} from "../../../shared/utils/string-utils";
import * as $ from "jquery";
import {CvTerm} from "../model/interaction-details/cv-term.model";
import {Annotation} from "../model/interaction-details/annotation.model";
import {Organism} from "../model/interaction-details/organism.model";

@Injectable()
export class TableFactoryService {

  constructor() {
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
    if (species.taxId > 0) {
      let url = `https://www.uniprot.org/taxonomy/${species.taxId}`;
      return `<a href="${url}" class="cv-term species" target="_blank">${species.scientificName}</a>`;
    } else {
      return species.scientificName;
    }
  }

  private static getCvURL(miId: string) {
    let id = miId.replace(':', '_');
    return `https://www.ebi.ac.uk/ols/ontologies/mi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2F${id}&viewMode=All&siblings=false`;
  }

  cvRender = (identifierColumn: string) => (data, type, row, meta) => {
    let miId = row[identifierColumn];
    if (miId) {
      return `<a href="${TableFactoryService.getCvURL(miId)}" class="cv-term" target="_blank">${data}</a>`
    } else return data;
  }

  cvRenderStructured = (data: CvTerm) => {
    if (data.identifier) {
      return `<a href="${TableFactoryService.getCvURL(data.identifier)}" class="cv-term" target="_blank">${data.shortName}</a>`
    } else return data.shortName;
  }

  annotationsRender = (data: Annotation[]) => {
    return $.map(data, d => {
      return `<div class="margin-bottom-medium">
                <span class="detailsAnnotationCell">
                  <i class="icon icon-common icon-tag"></i>
                  ${d.topic.shortName}
                </span>
                <span class="detailsCell">${d.description}</span>
              </div>`;
    }).join('')
  }

  enlist = (func: (data: any, i?: number) => (string), containerClass = 'aliasesList') => (data: any[], type, row, meta) => {
    if (data == null) return;
    const res = this.createRenderingButton(data, type, row, meta)
    const items = $.map(res.data, func).join('');
    let html = `<div class="${containerClass} table-list">${items}</div>`;
    return res.addButton ? html.concat(res.button) : html;
  }

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
      .css('top', this.isScreenSize('large') && filterBar !== undefined ? filterBar.height() - 1 + 'px' : '0')
      .css('box-shadow', '0 6px 7px -2px #0000005c')
      .css('z-index', '2');
  }

  isScreenSize(size: 'small' | 'medium' | 'large'): boolean {
    return window.getComputedStyle(document.body, ':after').getPropertyValue('content').slice(1, -1) == size;
  }

  createRenderingButton(data, type, row, meta): { data: any[], button: string, addButton: boolean } {
    const addButton = data.length > 2;
    let size = data.length - 2;
    let buttonType;
    switch (type) {
      case 'display':
      case 'less':
        buttonType = 'more'
        data = data.slice(0, 2);
        break;
      case 'more':
        buttonType = 'less'
        break;
      default:
        return;
    }
    return {
      data: data,
      addButton: addButton,
      button: `<div class="elementList table-list">
                 <button type="button" id="row${meta.row}col${meta.col}" data-col="${meta.col}" class="show${titleCase(buttonType)}">
                   Show ${buttonType} (${size})
                 </button>
               </div>`
    };
  }


  getIdentifierLink(id: { identifier: string, database: string | any, qualifier?: any }): string {
    if (id === null) return;
    let shortDbName = id.database.shortName !== undefined ? id.database.shortName : id.database;
    let access: DatabaseAccess = TableFactoryService.databaseToAccess.get(shortDbName);
    let url = null
    let style = ''
    if (access) {
      url = access.getURL(id.identifier);
      if (access.color) {
        style = `color:${access.color};
                 background-color:${access.backColor ? access.backColor : access.color.replace('1.0', '0.05')};`
      }
    }

    let databaseTag: string;
    if (id.database.shortName !== undefined) {
      style += 'padding: 2px 2px 2px 5px; margin-right: 4px;';
      databaseTag = `<a class="detailsCommentsCell" style="${style}" target="_blank"
                        href="${TableFactoryService.getCvURL(id.database.identifier)}">
                          ${access ? access.fancyName : shortDbName}
                     </a>`
    } else {
      databaseTag = `<span class="detailsCommentsCell" style="${style}">${access ? access.fancyName : shortDbName}</span>`
    }

    return `<div class="identifierCell">
              ${databaseTag}
              <div class="detailsCell identifierCellWidth">
                ${id.qualifier ? '<b> ' : ''}
                  ${url !== null ? `<a href="${url}" target="_blank" >${id.identifier}</a>` : id.identifier}
                ${id.qualifier ? '</b>' : ''}
              </div>
            </div>`;
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
}

interface DatabaseAccess {
  fancyName: string,
  color?: string,
  backColor?: string,

  getURL(id: string): string;
}

