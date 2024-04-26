import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
  
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes.jsx'
import UseContext from './hook/useContext/UseContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<UseContext>
<RouterProvider router={router}></RouterProvider>
</UseContext>

  </React.StrictMode>,
)
