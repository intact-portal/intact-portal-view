import {CvTerm} from '../../interactions/shared/model/interaction-details/cv-term.model';
import {Annotation} from '../../interactions/shared/model/interaction-details/annotation.model';
import {Alias} from '../../interactions/shared/model/interaction-details/alias.model';

export function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Extract alias from rawData string
 * @param rawData: "value value ... (type short label(type MI Identifier)) "
 */
export function extractAlias(rawData: string): Alias {
  const split = rawData.split('(')
  return new Alias(
    split.slice(0, -2).join('(').trim(),
    new CvTerm(split[split.length - 1].slice(0, -2), split[split.length - 2])
  )
}

/**
 * Extract ids
 * @param rawData: "id (database) "
 */
export function extractId(rawData: string): { identifier: string, database: string } {
  if (rawData === null) return null
  const split = rawData.split('(')
  return {
    identifier: split.slice(0, -1).join('(').trim(),
    database: split[split.length - 1].slice(0, -1).trim(),
  };
}

/**
 * Extract annotation
 * @param rawData: "type (value) "
 */
export function extractAnnotation(rawData: string): Annotation {
  if (rawData === null) return null
  const split = rawData.split('(')
  return new Annotation(
    new CvTerm(split[0].trim(), undefined),
    split.slice(1).join('(').slice(0, -1).trim()
  )
}

