import type { RouteObject } from 'react-router'
import { lazy, Suspense } from 'react'
import App from './App'

const Home = lazy(() => import('#pages/Home'))
const About = lazy(() => import('#pages/About'))

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
