import React, { useState } from 'react';
import type { EvaluationRow } from '../Types/EvaluationTypes';
import { openAndParseCsv } from '../Services/open-and-parse-csv';

interface UploadPageProps {
  onSuccess: (data: EvaluationRow[], filePath: string) => void;
}

const UploadPage: React.FC<UploadPageProps> = ({ onSuccess }) => {
  const [fileName, setFileName] = useState<string>('');

  const handleUpload = async () => {
    const result = await openAndParseCsv();
    if (!result) return;

    setFileName(result.filePath.split(/[\\/]/).pop() || '');
    onSuccess(result.data, result.filePath);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload CSV File</h2>

      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">
        Upload CSV
      </button>

      {fileName && <p className="text-green-700 mb-4">Uploaded: {fileName}</p>}
    </div>
  );
};

export default UploadPage;
