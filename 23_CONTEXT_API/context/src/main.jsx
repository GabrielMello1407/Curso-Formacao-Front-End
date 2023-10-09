import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contact from './routes/Contact.jsx'
import Home from './routes/Home.jsx'

import {
  createBrowserRouter, RouterProvider, Route, Navigate
} from 'react-router-dom'

// 2 - criando provider
import { CounterContextProvider } from './context/CounterContext.jsx'

// 5 - contexto mais complexo
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TitleColorContextProvider>
      <CounterContextProvider>
        <RouterProvider router={router} />
      </CounterContextProvider>
    </TitleColorContextProvider>
  </React.StrictMode>
)
