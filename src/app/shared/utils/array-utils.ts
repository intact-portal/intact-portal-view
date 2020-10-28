export function groupBy<T, K>(array: T[], groupBy: (T) => K): Map<string, { group: K, elements: T[] }> {
  return array.reduce((groups: Map<string, { group: K, elements: T[] }>, value) => {
    let group = groupBy(value);
    let key = JSON.stringify(group);
    if (groups.has(key)) {
      groups.get(key).elements.push(value);
    } else {
      groups.set(key, {group: group, elements: [value]})
    }
    return groups
  }, new Map<string, { group: K, elements: T[] }>());
}
