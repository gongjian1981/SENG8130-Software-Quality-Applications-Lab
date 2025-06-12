import type { EvaluationRow } from '../Types/EvaluationTypes';
import { CsvHandler } from '../../../CsvHandler/csv-handler';

/**
 * Saves or updates a single evaluation entry.
 */
export function saveOrUpdateEvaluation(
  data: EvaluationRow[],
  evaluationsForDate: EvaluationRow[],
  form: Partial<EvaluationRow>,
  date: string,
  editingIndex: number | null,
  filePath: string | null
): EvaluationRow[] {
  const updatedForm: EvaluationRow = {
    Course: form.Course!,
    Professor: form.Professor || '',
    'Evaluation Type': form['Evaluation Type']!,
    'Evaluation Weight': form['Evaluation Weight']!,
    'Due Day': date,
  };

  const updatedData =
    editingIndex !== null
      ? data.map(ev => (ev === evaluationsForDate[editingIndex] ? updatedForm : ev))
      : [...data, updatedForm];

  if (filePath) CsvHandler.save(filePath, updatedData);
  return updatedData;
}
