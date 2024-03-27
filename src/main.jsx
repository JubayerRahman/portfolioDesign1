import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Resume from './Components/Resume/Resume.jsx'
import Work from './Components/Work/Work.jsx'
import Contact from './Components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<About/>
      },
      {
        path:"/resume",
        element:<Resume/>
      },
      {
        path:"/work",
        element:<Work/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
