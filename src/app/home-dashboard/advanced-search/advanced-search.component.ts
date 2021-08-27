import {AfterViewInit, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {QueryBuilderClassNames, QueryBuilderComponent, QueryBuilderConfig, Rule, RuleSet} from 'angular2-query-builder';
import {MIQLPipe} from './MIQL.pipe';
import {ADVANCED_SEARCH_CONFIG, AdvancedQueryHelper} from './advanced-search.config';

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

  constructor() {
    this.queryCtrl = new FormControl(this.query);
    this.currentConfig = ADVANCED_SEARCH_CONFIG;
  }

  ngAfterViewInit(): void {
  }

  onInput(event: Event) {
    // TODO: Fix color cursor issue and uncomment this line
    // const editor = <HTMLElement>event.srcElement;
    // event.srcElement.innerHTML = ColorPipe.transform(editor.innerText);
    //
    // const sel = window.getSelection();
    // const range = document.createRange();
    //
    // range.setStart(editor, editor.childNodes.length);
    // range.collapse(true)
    // sel.removeAllRanges();
    // sel.addRange(range);
    // editor.focus();
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

  search(miql: string) {
    window.open('query/' + miql);
  }


  builderToInput(builder: QueryBuilderComponent, editor: HTMLDivElement) {
    // TODO: Fix color cursor issue and uncomment this line
    // editor.innerHTML = ColorPipe.transform(MIQLPipe.transform(builder.value));
    editor.innerHTML = MIQLPipe.transform(builder.value);
  }

  inputToBuilder(builder: QueryBuilderComponent, miql: string) {
    builder.value = parseMIQL(miql);
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
          const range = {start: start + 1, end: end};
          setupLevelMap(levelMap, stackLevel, range);
          value = removeSuperiorRules(value, start, end, stackLevel, levelMap);
          fillRuleSet(ruleSet, value);
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
  const previousSpaceIndex = miql.lastIndexOf(' ', start - 2);
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
  ruleSet.condition = /[ \u00a0]OR[ \u00a0]/ig.test(value) ? 'or' : 'and';
  const superiorRuleSets = ruleSet.rules;
  let i = 0;
  ruleSet.rules = [];
  value.split(/[ \u00a0]AND[ \u00a0]|[ \u00a0]OR[ \u00a0]/ig)
    .map(ruleStr => ruleStr.trim())
    .filter(ruleStr => ruleStr.length > 0)
    .forEach(ruleStr => {
      if (ruleStr === '()') {
        ruleSet.rules.push(superiorRuleSets[i++])
      } else {
        ruleStr = ruleStr.trim();
        const different = ruleStr.startsWith('NOT ') || ruleStr.startsWith('not ');
        const ruleOperator = different ? '≠' : '=';
        const indexOfColon = ruleStr.indexOf(':');
        const ruleFieldKeyword = ruleStr.substring(different ? 4 : 0, indexOfColon);
        const ruleField = AdvancedQueryHelper.toField(ruleFieldKeyword);
        const ruleValue = ruleStr.substring(indexOfColon + 1, ruleStr.length);
        if (ruleValue === 'undefined') {
          ruleSet.rules.push({field: ruleFieldKeyword, operator: ruleOperator, entity: ruleField.entity})
        } else {
          ruleSet.rules.push({field: ruleFieldKeyword, operator: ruleOperator, entity: ruleField.entity, value: ruleValue})
        }
      }
    });
}
