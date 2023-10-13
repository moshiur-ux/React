import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Phones from './components/Phones';
import Header1 from './components/Header1';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/phones",
        element:<Phones> </Phones>,
        loader:()=>fetch('http://localhost:5000/phones')
      },

      {
        path:'/phone/:id',
        element:<Header1></Header1>,
        loader:({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
      },
     

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />

  </React.StrictMode>,
)
