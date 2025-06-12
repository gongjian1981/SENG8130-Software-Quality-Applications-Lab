import about from './about'
import heatmap from './heatmap';
import daily from './daily';
import upload from './upload';


export const appRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  about,
  heatmap,
  daily,
  upload,
];

import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Home Page</h1>
      <button
        onClick={() => navigate('/about')}
        className="bg-green-600 text-black px-4 py-2 rounded ml-2"
      >
        Go to About
      </button>
      <button
        onClick={() => navigate('/heatmap')}
        className="bg-green-600 text-black px-4 py-2 rounded ml-2"
      >
        Go to heatmap
      </button>
    </div>
  );
}