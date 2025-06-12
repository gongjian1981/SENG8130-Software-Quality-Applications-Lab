import type { EvaluationRow } from '../Types/EvaluationTypes';

/**
 * Filters evaluation records by date (YYYY-MM-DD).
 */
export function getEvaluationsForDate(data: EvaluationRow[], date: string): EvaluationRow[] {
  return data.filter(ev => ev['Due Day']?.trim().slice(0, 10) === date);
}
