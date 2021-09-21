export function groupBy<T, K>(array: T[], classifier: (element: T) => K): { group: K; elements: T[] }[] {
  return Array.from(array.reduce((groups: Map<string, { group: K, elements: T[] }>, value) => {
    const group = classifier(value);
    const key = JSON.stringify(group);
    if (groups.has(key)) {
      groups.get(key).elements.push(value);
    } else {
      groups.set(key, {group: group, elements: [value]})
    }
    return groups
  }, new Map<string, { group: K, elements: T[] }>()).values());
}
