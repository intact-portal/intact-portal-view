import {CvTerm} from "../../interactions/shared/model/interaction-details/cv-term.model";

export function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Extract typed values from rawData string
 * @param rawData: "value value ... (type short label(type MI Identifier)) "
 */
export function extractCVValue(rawData: string): { value: string, type: CvTerm } {
  let split = rawData.split('(')
  return {
    value: split.slice(0, -2).join('(').trim(),
    type: new CvTerm(split[split.length - 1].slice(0, -2), split[split.length - 2])
  };
}

/**
 * Extract ids
 * @param rawData: "id (database) "
 */
export function extractIds(rawData: string): { value: string, database: string } {
  if (rawData === null) return null
  let split = rawData.split('(')
  return {
    value: split.slice(0, -1).join('(').trim(),
    database: split[split.length - 1].slice(0, -1).trim()
  };
}
