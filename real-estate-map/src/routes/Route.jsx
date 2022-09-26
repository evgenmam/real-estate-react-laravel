import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from '../ErrorPage'
import { RouteApp } from './RouteApp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteApp />,
    errorElement: <ErrorPage />,
  },
])
