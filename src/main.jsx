import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Detail from './Components/Details/Detail';
import Add from './Components/Add/Add';
import Review from './Components/Review/Review';
import ErrorePage from './Components/ErrorePage/ErrorePage';
import Maker from './Components/Maker/Maker';
import Blogs from './Components/Blogs/Blogs';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement:<ErrorePage></ErrorePage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/:id',
        element: <Detail></Detail> ,
        loader:() => fetch('./public/Products.json')
      },
      {
        path:'/add' ,
        element: <Add></Add> ,
        loader: () => fetch('../public/Products.json') 
      } ,
      {
        path: '/reviews',
        element:<Review></Review>,
        loader: () => fetch('../public/Products.json') 
      },
      {
        path:'/build',
        element:<Maker></Maker>
      },
      {
        path:'/blog' ,
        element:<Blogs></Blogs>
      },
      {
        path:'/reg',
        element: <Register></Register>
      } ,
      {
        path: '/login' ,
        element:<Login></Login>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
