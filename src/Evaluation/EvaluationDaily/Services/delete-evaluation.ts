import type { EvaluationRow } from '../Types/EvaluationTypes';
import { CsvHandler } from '../../../CsvHandler/csv-handler';

/**
 * Deletes an evaluation entry at the given index.
 */
export function deleteEvaluation(
  data: EvaluationRow[],
  evaluationsForDate: EvaluationRow[],
  index: number,
  filePath: string | null
): EvaluationRow[] {
  const itemToDelete = evaluationsForDate[index];
  const updated = data.filter(ev => ev !== itemToDelete);
  if (filePath) CsvHandler.save(filePath, updated);
  return updated;
}
