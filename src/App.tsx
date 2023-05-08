import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Brewery from './pages/Brewery'
import Navigation from './pages/Navigation'
import Search from './pages/Search'

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
      },
      {
        path: "/search/:item",
        element: <Search />
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