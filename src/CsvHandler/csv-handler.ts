import Papa from 'papaparse';

declare global {
  interface Window {
    electronAPI: {
      saveToCsvFile: (filePath: string, csvContent: string) => void;
    };
  }
}

/**
 * A utility for handling CSV parsing and saving.
 */
export const CsvHandler = {
  /**
   * Converts an array of objects to CSV format and saves it to a file.
   * @param filePath - The destination file path.
   * @param data - The array of objects to be saved.
   */
  save<T extends object>(filePath: string, data: T[]): void {
    const csv = Papa.unparse(data);
    window.electronAPI.saveToCsvFile(filePath, csv);
  },

  /**
   * Parses CSV text into an array of objects.
   * @param csvText - The CSV text content.
   * @returns Parsed data as an array of objects of type T.
   */
  parse<T = unknown>(csvText: string): T[] {
    const result = Papa.parse<T>(csvText, {
      header: true,
      skipEmptyLines: true,
    });
    return result.data;
  },
};
