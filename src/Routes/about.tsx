// src/routes/about.tsx
import React from 'react'
import type { RouteObject } from 'react-router-dom'

const AboutPage = React.lazy(() => import('../AboutPage'))

const aboutRoute: RouteObject = {
  path: '/about',
  element: (
    <React.Suspense fallback={<div className="p-4">Loading About Page...</div>}>
      <AboutPage />
    </React.Suspense>
  ),
}

export default aboutRoute
