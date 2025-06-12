import React from 'react';
import type { RouteObject } from 'react-router-dom';

const HeatmapPage = React.lazy(() =>
  import('../Evaluation/Heatmap/Pages/HeatmapPage')
);

const heatmapRoute: RouteObject = {
  path: '/heatmap',
  element: (
    <React.Suspense fallback={<div>Loading Heatmap...</div>}>
      <HeatmapPage data={[]} onNavigate={() => {}} />
    </React.Suspense>
  ),
};

export default heatmapRoute;
