import type { RouteObject } from 'react-router'
import { Suspense } from 'react'
import App from './App'
import Home from '#pages/Home'
import About from '#pages/About'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        children: [
          {
            path: '/about',
            element: <About />,
          },
        ],
      },
    ],
  },
]

export default routes
