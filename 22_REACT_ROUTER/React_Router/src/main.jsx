import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contact from '../src/routes/Contact.jsx'

import {
  createBrowserRouter, RouterProvider, Route, Navigate
} from 'react-router-dom'
// página de erro
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import Product from './routes/Product.jsx'
import Info from './routes/Info.jsx'
import Search from './routes/Search.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // componente base
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        // rota dinamica
        path: "products/:id",
        element: <Product />
      },
      {
        // rota dinamica ou nested route
        path: "products/:id/info",
        element: <Info />
      },
      {
        // search
        path: "search",
        element: <Search />
      },
      {
        path: "teste",
        element: <Navigate to='/' />
      }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
