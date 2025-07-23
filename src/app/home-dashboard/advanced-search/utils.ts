export function extractRange(value: string): string[] {
  return value?.split(/\[|]| TO /ig).filter(s => s);
}
