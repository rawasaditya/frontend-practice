export function truncate(text: string, max: number): string {
  if (max <= 0) return "";                 // nothing fits
  if (text.length <= max) return text;     // already fits
  return `${text.slice(0, max - 1)}…`;     // cut and leave room for …
}