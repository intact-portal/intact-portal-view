import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {QueryBuilderClassNames, QueryBuilderComponent, QueryBuilderConfig, Rule, RuleSet} from 'angular2-query-builder';
import {MIQLPipe} from './MIQL.pipe';
import {ADVANCED_SEARCH_CONFIG, AdvancedQueryHelper} from './advanced-search.config';
import {ColorMIQLPipe} from './colorMIQL.pipe';

export interface ColorCode {
  regex: RegExp,
  class: string,
  space?: boolean
}

@Component({
  selector: 'ip-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements AfterViewInit {

  public queryCtrl: FormControl;
  public currentConfig: QueryBuilderConfig;

  public query: RuleSet = {
    condition: 'and',
    rules: []
  };

  coloredMIQL: string;
  autocompleteOptions: string[] = [];
  x = 0;
  y = 0;

  @ViewChild(QueryBuilderComponent)
  builder: QueryBuilderComponent;

  @ViewChild('editor')
  private _editor: ElementRef<HTMLTextAreaElement>;

  constructor() {
    this.queryCtrl = new FormControl(this.query);
    this.currentConfig = ADVANCED_SEARCH_CONFIG;
  }

  public classNames: QueryBuilderClassNames = {
    switchGroup: 'button-group',
    switchControl: 'display-contents ad-q-switch-control',
    switchRadio: 'ad-q-switch-radio no-margin',
    switchLabel: 'button margin-bottom-none',
    inputControl: 'no-margin',
    entityControl: 'no-margin',
    operatorControl: 'no-margin',
    fieldControl: 'no-margin',
    buttonGroup: 'button-group no-margin',
    button: 'button margin-bottom-none',
    addIcon: 'icon icon-common icon-plus centered-icon',
    removeIcon: 'icon icon-common icon-times centered-icon',
    removeButton: 'button',
    transition: 'margin-bottom-none',
    connector: 'ad-q-connector',
    row: 'ad-q-row',
    invalidRuleSet: 'ad-q-row invalid-rule-set'
  }

  updateCondition(ruleSet: RuleSet, e: MouseEvent) {
    const target = $(e.target);
    const parent = target.parents('.button-group')
    parent.find('.ad-q-switch-radio').each(function () {
      $(this).toggleClass('checked');
      if ($(this).hasClass('checked')) {
        $(this).prop('checked', true)
        ruleSet.condition = (<string>$(this).val());
      } else {
        $(this).prop('checked', false)
      }
    });
    this.builderToEditor();
  }

  ngAfterViewInit(): void {
  }

  search(miql: string) {
    window.open('query/' + miql);
  }

  private doUpdate = true;

  builderToEditor() {
    if (this.doUpdate) {
      this.doUpdate = false;
      const miql = MIQLPipe.transform(this.builder.value);
      this.editor.innerText = miql;
      this.coloredMIQL = ColorMIQLPipe.transform(miql);
    }
    this.doUpdate = true
  }

  editorToBuilder(miql: string) {
    if (this.doUpdate) {
      this.doUpdate = false;
      this.builder.value = parseMIQL(miql);
    }
    this.doUpdate = true
  }


  onInput() {

    const aroundCaret = this.extractWordAroundCaret();
    this.autocompleteOptions = AdvancedQueryHelper.keywords.filter(value => value.startsWith(aroundCaret.word));
    const miql = this.processHighlights();
    this.editorToBuilder(miql);
  }

  extractWordAroundCaret(): { start: number, end: number, word: string } {
    const pos = this.editor.selectionStart;
    const text = this.editor.value;
    let start, end;
    for (start = pos - 1; start >= 0 && text[start]?.match(/\w/); start--) {
    }
    for (end = pos - 1; end < text.length && text[end]?.match(/\w/); end++) {
    }
    return {start, end, word: text.substring(start, end)};
  }

  private processHighlights() {
    let miql = this.editor.value;
    if (miql.endsWith('\n')) {
      miql += ' ';
    }
    this.coloredMIQL = ColorMIQLPipe.transform(miql);
    return miql;
  }

  onBuilderUpdate() {
    this.builderToEditor()
  }

  syncScroll(pre: HTMLPreElement) {
    setTimeout(() => {
      pre.scrollTop = this.editor.scrollTop;
      pre.scrollLeft = this.editor.scrollLeft;
    })
  }

  get editor(): HTMLTextAreaElement {
    return this._editor.nativeElement;
  }

}


function parseMIQL(miql: string): RuleSet {
  miql = `(${miql})`;
  let out: RuleSet;
  const stack: { start: number, ruleSet: RuleSet }[] = [];
  let end: number, stackLevel: number = 0, value: string;
  const levelMap: Map<number, { start: number, end: number }[]> = new Map<number, { start: number; end: number }[]>();

  miql.split('').forEach((char, index, array) => {
    switch (char) {
      case '(':
        stack.push({start: index, ruleSet: {condition: 'and', rules: []}});
        break;
      case ')':
        const {start, ruleSet} = stack.pop();
        out = ruleSet;
        let rule: RuleSet | Rule = ruleSet;
        end = index;
        value = miql.substring(start + 1, end);
        if (array[start - 1] === ':') { // Is a rule with a set operator
          rule = extractSetRule(miql, start, value);
        } else { // Is a rule set
          stackLevel = stack.length;
          const range = {start: start, end: end - 1};
          setupLevelMap(levelMap, stackLevel, range);
          const trimmedValue = removeSuperiorRules(value, start, end, stackLevel, levelMap);
          fillRuleSet(ruleSet, trimmedValue);
        }
        if (stack.length > 0) {
          stack[stack.length - 1].ruleSet.rules.push(rule)
        }
        break;
    }
  });
  return out;
}

function extractSetRule(miql: string, start: number, value: string) {
  let previousSpaceIndex = miql.lastIndexOf(' ', start - 2);
  if (miql.substring(previousSpaceIndex + 1, previousSpaceIndex + 2) === '(') {
    previousSpaceIndex++; // Avoid hitting the start parenthesis if the field is the first in a rule set
  }
  const potentialNot = miql.substring(previousSpaceIndex - 3, previousSpaceIndex);
  const operator = potentialNot === 'NOT' || potentialNot === 'not' ? 'not in' : 'in';
  const field = miql.substring(previousSpaceIndex + 1, start - 1);
  const entity = AdvancedQueryHelper.toField(field).entity;
  if (value === 'undefined') {
    return {field, operator, entity};
  } else {
    return {field, operator, entity, value};
  }
}

function setupLevelMap(levelMap: Map<number, { start: number; end: number }[]>, stackLevel: number, range: { start: number; end: number }) {
  if (levelMap.get(stackLevel) === undefined) {
    levelMap.set(stackLevel, [range])
  } else {
    levelMap.get(stackLevel).push(range)
  }
}

function removeSuperiorRules(value: string, start: number, end: number, stackLevel: number, levelMap: Map<number, { start: number; end: number }[]>) {
  let deleted = start;
  const superiorRanges = levelMap.get(stackLevel + 1);
  if (superiorRanges !== undefined) {
    for (const superiorRange of superiorRanges) {
      if (superiorRange.start > start && superiorRange.end < end) {
        value = value.substring(0, superiorRange.start - deleted) + value.substring(superiorRange.end - deleted, value.length);
        deleted += superiorRange.end - superiorRange.start;
      }
    }
  }
  return value;
}

function fillRuleSet(ruleSet: RuleSet, value: string) {
  ruleSet.condition = /\sOR\s/ig.test(value) ? 'or' : 'and';
  const superiorRuleSets = ruleSet.rules;
  let i = 0;
  ruleSet.rules = [];
  value.split(/\sAND\s|\sOR\s/ig)
    .map(ruleStr => ruleStr.trim())
    .filter(ruleStr => ruleStr.length > 0)
    .forEach(ruleStr => {
      if (ruleStr === '()') {
        ruleSet.rules.push(superiorRuleSets[i++])
      } else {
        ruleStr = ruleStr.trim();
        const different = ruleStr.startsWith('NOT ') || ruleStr.startsWith('not ');
        const ruleOperator = different ? '≠' : '=';
        const indexOfColon = ruleStr.indexOf(':') || ruleStr.length;
        const ruleFieldKeyword = ruleStr.substring(different ? 4 : 0, indexOfColon);
        const ruleField = AdvancedQueryHelper.toField(ruleFieldKeyword);
        if (ruleField !== undefined) {
          const ruleValue = ruleStr.substring(indexOfColon + 1, ruleStr.length);
          if (ruleValue.startsWith('(')) {
            ruleSet.rules.push(superiorRuleSets.pop());
          } else if (ruleValue === 'undefined') {
            ruleSet.rules.push({field: ruleFieldKeyword, operator: ruleOperator, entity: ruleField.entity})
          } else {
            ruleSet.rules.push({field: ruleFieldKeyword, operator: ruleOperator, entity: ruleField.entity, value: ruleValue})
          }
        }
      }
    });
}
