import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Component/Route/Route.jsx'
import { MyProvider } from './Ulitity/utylt.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <MyProvider>
      <RouterProvider router={route}></RouterProvider>
    </MyProvider>

  </StrictMode>,
)