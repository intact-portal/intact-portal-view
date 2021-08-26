import {Pipe, PipeTransform} from '@angular/core';
import {Rule, RuleSet} from 'angular2-query-builder';

@Pipe({
  name: 'MIQL',
  pure: false
})
export class MIQLPipe implements PipeTransform {

  transform(ruleSet: RuleSet): string {
    return MIQLPipe.transform(ruleSet);
  }

  public static transform(ruleSet: RuleSet) {
    return ruleSet.rules.map(rule => {
      if (this.isRuleSet(rule)) {
        return `(${this.transform(rule)})`;
      } else {
        switch (rule.operator) {
          default:
          case '=':
            return `${rule.field}:${rule.value}`;
          case '≠':
            return `NOT ${rule.field}:${rule.value}`;
          case 'in':
            return `${rule.field}:(${rule.value})`;
          case 'not in':
            return `NOT ${rule.field}:(${rule.value})`;
        }
      }
    }).join(` ${ruleSet.condition.toUpperCase()} `);
  }

  static isRuleSet(rule: RuleSet | Rule): rule is RuleSet {
    return (<RuleSet>rule).rules !== undefined;
  }
}
