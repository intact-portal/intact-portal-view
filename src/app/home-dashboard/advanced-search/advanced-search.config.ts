import {Field, FieldMap, QueryBuilderConfig} from 'angular2-query-builder';
import moment from 'moment';

const DATE_FORMAT = 'YYYYMMDD';


const fields: FieldMap = {
  idA: {
    name: 'Identifier',
    type: 'string',
    entity: 'participantA',
  },
  idB: {
    name: 'Identifier',
    type: 'string',
    entity: 'participantB'
  },
  altidA: {
    name: 'Alternative id',
    type: 'string',
    entity: 'participantA'
  },
  altidB: {
    name: 'Alternative id',
    type: 'string',
    entity: 'participantB'
  },
  id: {
    name: 'Identifiers',
    type: 'string',
    entity: 'participant'
  },
  aliasA: {
    name: 'Alias',
    type: 'string',
    entity: 'participantA'
  },
  aliasB: {
    name: 'Alias',
    type: 'string',
    entity: 'participantB'
  },
  alias: {
    name: 'Alias',
    type: 'string',
    entity: 'participant'
  },
  identifier: {
    name: 'Identifiers, Alternatives, Aliases',
    type: 'string',
    entity: 'participant'
  },
  pubyear: {
    name: 'Publication year',
    type: 'number-range',
    entity: 'publication',
    defaultValue: () => `[2000 TO ${moment().year()}]`,
    operators: ['∈', '∉']
  },
  pubauthors: {
    name: 'Publication author(s)',
    type: 'string',
    entity: 'publication'
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
    name: 'Taxon id or Species',
    type: 'string',
    entity: 'participantA'
  },
  taxidB: {
    name: 'Taxon id or Species',
    type: 'string',
    entity: 'participantB'
  },
  taxidHost: {
    name: 'Taxon id or Species of Host organism',
    type: 'string',
    entity: 'interaction'
  },
  species: {
    name: 'Taxon id or Species',
    type: 'string',
    entity: 'participant'
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
    entity: 'participantA'
  },
  pbioroleB: {
    name: 'Biological role',
    type: 'string',
    entity: 'participantB'
  },
  pbiorole: {
    name: 'Biological role',
    type: 'string',
    entity: 'participant'
  },
  pexproleA: {
    name: 'Experimental Role',
    type: 'string',
    entity: 'participantA'
  },
  pexproleB: {
    name: 'Experimental Role',
    type: 'string',
    entity: 'participantB'
  },
  ptypeA: {
    name: 'Interactor type',
    type: 'string',
    entity: 'participantA'
  },
  ptypeB: {
    name: 'Interactor type',
    type: 'string',
    entity: 'participantB'
  },
  ptype: {
    name: 'Interactor type',
    type: 'string',
    entity: 'participant'
  },
  pxrefA: {
    name: 'Interactor xrefs.',
    type: 'string',
    entity: 'participantA'
  },
  pxrefB: {
    name: 'Interactor xrefs.',
    type: 'string',
    entity: 'participantB'
  },
  pxref: {
    name: 'Interactor xrefs.',
    type: 'string',
    entity: 'participant',
  },
  'intact-miscore': {
    name: 'IntAct MI Score',
    defaultValue: '[0 TO 1]',
    type: 'number-range',
    entity: 'interaction',
    operators: ['∈', '∉']
  },
  geneNameA: {
    name: 'Gene name for Interactor A',
    type: 'string',
    entity: 'participantA'
  },
  geneNameB: {
    name: 'Gene name for Interactor B',
    type: 'string',
    entity: 'participantB'
  },
  geneName: {
    name: 'Gene name for Interactor A or B',
    type: 'string',
    entity: 'participant'
  },
  xref: {
    name: 'Interaction xrefs.',
    type: 'string',
    entity: 'interaction'
  },
  annotA: {
    name: 'Interactor annotations',
    type: 'string',
    entity: 'participantA'
  },
  annotB: {
    name: 'Interactor annotations',
    type: 'string',
    entity: 'participantB'
  },
  annot: {
    name: 'Interaction annotations',
    type: 'string',
    entity: 'interaction'
  },
  rdate: {
    name: 'Release date',
    type: 'date-range',
    entity: 'curationMetadata',
    defaultValue: () => `[${moment('2003').format(DATE_FORMAT)} TO ${moment().format(DATE_FORMAT)}]`,
    operators: ['∈', '∉']
  },
  udate: {
    name: 'Update date',
    type: 'date-range',
    entity: 'curationMetadata',
    defaultValue: () => `[${moment('2003').format(DATE_FORMAT)} TO ${moment().format(DATE_FORMAT)}]`,
    operators: ['∈', '∉']
  },
  negative: {
    name: 'Negative interaction',
    type: 'boolean',
    entity: 'interaction',
    operators: ['='],
    defaultValue: 'TRUE'
  },
  mutationA: {
    name: 'Mutation of Interactor A',
    type: 'boolean',
    entity: 'participant',
    operators: ['='],
    defaultValue: 'TRUE'
  },
  mutationB: {
    name: 'Mutation of Interactor B',
    type: 'boolean',
    entity: 'participant',
    operators: ['='],
    defaultValue: 'TRUE'
  },
  mutation: {
    name: 'Mutation of Interactor A or B',
    type: 'boolean',
    entity: 'participant',
    operators: ['='],
    defaultValue: 'TRUE'
  },
  complex: {
    name: 'Complex expansion',
    type: 'category',
    entity: 'interaction',
    options: [
      {
        name: 'Bipartite expansion',
        value: '"MI:1062"'
      },
      {
        name: 'Matrix expansion',
        value: '"MI:1061"'
      },
      {
        name: 'Spoke expansion',
        value: '"MI:1060"'
      },
      {
        name: 'Non-expanded',
        value: '"-"'
      }
    ]
  },
  ftypeA: {
    name: 'Feature type',
    type: 'string',
    entity: 'participantA'
  },
  ftypeB: {
    name: 'Feature type',
    type: 'string',
    entity: 'participantB'
  },
  ftype: {
    name: 'Feature type',
    type: 'string',
    entity: 'participant'
  },
  pmethodA: {
    name: 'Participant identification method',
    type: 'string',
    entity: 'participantA'
  },
  pmethodB: {
    name: 'Participant identification method',
    type: 'string',
    entity: 'participantB'
  },
  pmethod: {
    name: 'Participant identification method',
    type: 'string',
    entity: 'participant'
  },
  stc: {
    name: 'Stoichiometry',
    type: 'boolean',
    entity: 'participant',
    operators: ['='],
    defaultValue: 'TRUE'
  },
  param: {
    name: 'Interaction parameters',
    type: 'boolean',
    entity: 'interaction',
    operators: ['='],
    defaultValue: 'TRUE'
  },
  source: {
    name: 'Source database(s)',
    type: 'string',
    entity: 'curationMetadata'
  },
  bioeffectA: {
    name: 'Biological effect',
    type: 'string',
    entity: 'participantA'
  },
  bioeffectB: {
    name: 'Biological effect',
    type: 'string',
    entity: 'participantB'
  },
  bioeffect: {
    name: 'Biological effect',
    type: 'string',
    entity: 'participant'
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
};

export const ADVANCED_SEARCH_CONFIG: QueryBuilderConfig = {
  getOperators(a, b) {
    return b.operators || ['=', '≠', 'in', 'not in']
  },
  fields,
  entities: {
    participant: {
      name: 'Participant (A or B)',
      defaultField: fields.id
    },
    participantA: {
      name: 'Participant A',
      defaultField: fields.idA
    },
    participantB: {
      name: 'Participant B',
      defaultField: fields.idB
    },
    interaction: {
      name: 'Interaction',
      defaultField: fields['intact-miscore']
    },
    publication: {
      name: 'Publication',
      defaultField: fields.pubid
    },
    causalInteraction: {
      name: 'Causal Interaction',
      defaultField: fields.causalstatement
    },
    curationMetadata: {
      name: 'Curation Metadata',
      defaultField: fields.source
    }
  }
}

export const MIQL_DATE_FORMAT = {
  parse: {
    dateInput: DATE_FORMAT, // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'YYYY/MM/DD', // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
}

export class AdvancedQueryHelper {
  static keywordToFieldMap: Map<string, Field> = new Map<string, Field>();
  static fieldToKeyMap: Map<Field, string> = new Map<Field, string>();
  public static keywords: string[] = [];

  public static toField(keyword: string): Field {
    return AdvancedQueryHelper.keywordToFieldMap.get(keyword)
  }

  public static toKey(field: Field) {
    return this.fieldToKeyMap.get(field);
  }
}

for (const key of Object.keys(fields)) {
  const field = ADVANCED_SEARCH_CONFIG.fields[key];
  AdvancedQueryHelper.keywords.push(key);
  AdvancedQueryHelper.keywordToFieldMap.set(key, field);
  AdvancedQueryHelper.fieldToKeyMap.set(field, key);
}

