import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {QueryBuilderConfig} from 'angular2-query-builder';

@Component({
  selector: 'ip-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  public queryCtrl: FormControl;
  public currentConfig: QueryBuilderConfig;

  public query = {
    condition: 'and',
    rules: [
      {field: 'idA', operator: '=', entity: 'interactorA'},
    ]
  };

  public config: QueryBuilderConfig = {
    entities: {
      interactor: {
        name: 'Interactor (A or B)'
      },
      interactorA: {
        name: 'Interactor A'
      },
      interactorB: {
        name: 'Interactor B'
      },
      interaction: {
        name: 'Interaction'
      },
      publication: {
        name: 'Publication'
      },
      causalInteraction: {
        name: 'Causal Interaction'
      },
      curationMetadata: {
        name: 'Curation Metadata'
      }
    },
    fields: {
      idA: {
        name: 'Identifier',
        type: 'string',
        entity: 'interactorA'
      },
      idB: {
        name: 'Identifier',
        type: 'string',
        entity: 'interactorB'
      },
      altidA: {
        name: 'Alternative Id.',
        type: 'string',
        entity: 'interactorA'
      },
      altidB: {
        name: 'Alternative Id.',
        type: 'string',
        entity: 'interactorB'
      },
      id: {
        name: 'Identifiers',
        type: 'string',
        entity: 'interactor'
      },
      aliasA: {
        name: 'Alias',
        type: 'string',
        entity: 'interactorA'
      },
      aliasB: {
        name: 'Alias',
        type: 'string',
        entity: 'interactorB'
      },
      alias: {
        name: 'Alias',
        type: 'string',
        entity: 'interactor'
      },
      identifier: {
        name: 'Identifiers, Alternatives, Aliases',
        type: 'string',
        entity: 'interactor'
      },
      pubauth: {
        name: 'Publication 1st author(s)',
        type: 'string',
        entity: 'publication'
      },
      pubid: {
        name: 'Publication Identifier(s)',
        type: 'string',
        entity: 'publication'
      },
      taxidA: {
        name: 'Tax Id. interactor',
        type: 'string',
        entity: 'interactorA'
      },
      taxidB: {
        name: 'Tax Id. interactor',
        type: 'string',
        entity: 'interactorB'
      },
      taxidHost: {
        name: 'Tax Id. Host organism',
        type: 'string',
        entity: 'interaction'
      },
      species: {
        name: 'Tax Id. interactors',
        type: 'string',
        entity: 'interactor'
      },
      type: {
        name: 'Interaction type(s)',
        type: 'string',
        entity: 'interaction'
      },
      detmethod: {
        name: 'Interaction Detection method(s)',
        type: 'string',
        entity: 'interaction'
      },
      interaction_id: {
        name: 'Interaction identifier(s)',
        type: 'string',
        entity: 'interaction'
      },
      pbioroleA: {
        name: 'Biological role',
        type: 'string',
        entity: 'interactorA'
      },
      pbioroleB: {
        name: 'Biological role',
        type: 'string',
        entity: 'interactorB'
      },
      pbiorole: {
        name: 'Biological role',
        type: 'string',
        entity: 'interactor'
      },
      pexproleA: {
        name: 'Experimental Role',
        type: 'string',
        entity: 'interactorA'
      },
      pexproleB: {
        name: 'Experimental Role',
        type: 'string',
        entity: 'interactorB'
      },
      ptypeA: {
        name: 'Interactor type',
        type: 'string',
        entity: 'interactorA'
      },
      ptypeB: {
        name: 'Interactor type',
        type: 'string',
        entity: 'interactorB'
      },
      ptype: {
        name: 'Interactor type',
        type: 'string',
        entity: 'interactor'
      },
      pxrefA: {
        name: 'Interactor xrefs.',
        type: 'string',
        entity: 'interactorA'
      },
      pxrefB: {
        name: 'Interactor xrefs.',
        type: 'string',
        entity: 'interactorB'
      },
      pxref: {
        name: 'Interactor xrefs.',
        type: 'string',
        entity: 'interactor'
      },
      xref: {
        name: 'Interaction xrefs.',
        type: 'string',
        entity: 'interaction'
      },
      annotA: {
        name: 'Interactor annotations',
        type: 'string',
        entity: 'interactorA'
      },
      annotB: {
        name: 'Interactor annotations',
        type: 'string',
        entity: 'interactorB'
      },
      annot: {
        name: 'Interaction annotations',
        type: '',
        entity: 'interaction'
      },
      cdate: {
        name: 'Creation date',
        type: 'date',
        entity: 'curationMetadata'
      },
      udate: {
        name: 'Update date',
        type: 'date',
        entity: 'curationMetadata'
      },
      negative: {
        name: 'Negative interaction',
        type: 'boolean',
        entity: 'interaction'
      },
      complex: {
        name: 'Complex expansion',
        type: 'category',
        entity: 'interaction',
        options: [
          {
            name: 'Bipartite expansion',
            value: 'MI:1062'
          },
          {
            name: 'Matrix expansion',
            value: 'MI:1061'
          },
          {
            name: 'Spoke expansion',
            value: 'MI:1060'
          },
          {
            name: 'Non-expanded',
            value: '-'
          }
        ]
      },
      ftypeA: {
        name: 'Feature type',
        type: 'string',
        entity: 'interactorA'
      },
      ftypeB: {
        name: 'Feature type',
        type: 'string',
        entity: 'interactorB'
      },
      ftype: {
        name: 'Feature type',
        type: 'string',
        entity: 'interactor'
      },
      pmethodA: {
        name: 'interactor identification method',
        type: 'string',
        entity: 'interactorA'
      },
      pmethodB: {
        name: 'interactor identification method',
        type: 'string',
        entity: 'interactorB'
      },
      pmethod: {
        name: 'interactor identification method',
        type: 'string',
        entity: 'interactor'
      },
      stcA: {
        name: 'Stoichiometry',
        type: 'string',
        entity: 'interactorA'
      },
      stcB: {
        name: 'Stoichiometry',
        type: 'string',
        entity: 'interactorB'
      },
      stc: {
        name: 'Stoichiometry',
        type: 'boolean',
        entity: 'interactor'
      },
      param: {
        name: 'Interaction parameters',
        type: 'boolean',
        entity: 'interaction'
      },
      source: {
        name: 'Data source',
        type: 'string',
        entity: 'curationMetadata'
      },
      bioeffectA: {
        name: 'Biological effect',
        type: 'string',
        entity: 'interactorA'
      },
      bioeffectB: {
        name: 'Biological effect',
        type: 'string',
        entity: 'interactorB'
      },
      bioeffect: {
        name: 'Biological effect',
        type: 'string',
        entity: 'interactor'
      },
      causalmechanism: {
        name: 'Causal regulatory mechanism',
        type: 'string',
        entity: 'causalInteraction'
      },
      causalstatement: {
        name: 'Causal statement',
        type: 'string',
        entity: 'causalInteraction'
      }
    }
  };


  constructor() {
    this.queryCtrl = new FormControl(this.query);
    this.currentConfig = this.config;
  }

  ngOnInit() {
  }

}
