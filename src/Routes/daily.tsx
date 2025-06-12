import React from 'react';
import DailyViewPage from '../Evaluation/EvaluationDaily/Pages/DailyViewPage';
import { useLocation, useNavigate } from 'react-router-dom';
import type { EvaluationRow } from '../Evaluation/EvaluationDaily/Types/EvaluationTypes';

interface DailyRouteState {
  date: string;
  data: EvaluationRow[];
  filePath: string | null;
  onUpdate: (updatedData: EvaluationRow[]) => void;
}

const DailyWrapper: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as DailyRouteState;

  if (!state) {
    return (
      <div className="p-4 text-red-600">
        Missing route state. Please navigate through the proper entry point.
        <button
          className="mt-4 px-4 py-2 bg-gray-600 text-white rounded"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <DailyViewPage
      date={state.date}
      data={state.data}
      filePath={state.filePath}
      onUpdate={state.onUpdate}
      onBack={() => navigate(-1)}
    />
  );
};

export default {
  path: '/daily',
  element: <DailyWrapper />,
};
