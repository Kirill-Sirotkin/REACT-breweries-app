import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Brewery from './pages/Brewery'
import Navigation from './pages/Navigation'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:id",
        element: <Brewery />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App