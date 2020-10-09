import {Injectable} from '@angular/core';
import {titleCase} from "../../../shared/utils/string-utils";

@Injectable()
export class ResultTableFactoryService {

  constructor() {
  }

  createRenderingButton(data, type, row, meta): { data: any[], button: string, addButton: boolean } {
    const addButton = data.length > 2;
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
      button: `<div class="elementList">
                 <button type="button" id="row${meta.row}col${meta.col}" data-col="${meta.col}" class="show${titleCase(buttonType)}">
                   Show ${buttonType}
                 </button>
               </div>`
    };
  }


  private databaseToAccess: Map<string, DatabaseAccess> = new Map<string, DatabaseAccess>([
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


  getInteractorLink(id: { value: string, database: string }): string {
    let access: DatabaseAccess = this.databaseToAccess.get(id.database);
    let url = null
    let style = ''
    if (access) {
      url = access.getURL(id.value);
      if (access.color) style = `style="color:${access.color};
                                      background-color:${access.backColor ? access.backColor : access.color.replace('1.0', '0.05')};"`
    }
    return `<div class="aliasesCell">
              <span class="detailsCommentsCell" ${style}>${access ? access.fancyName : id.database}</span>
              <div class="detailsCell aliasesCellWidth">
                ${url !== null ? `<a href="${url}" target="_blank" >${id.value}</a>` : id.value}
              </div>
            </div>`;
  }
}

interface DatabaseAccess {
  fancyName: string,
  color?: string,
  backColor?: string,

  getURL(id: string): string;
}
