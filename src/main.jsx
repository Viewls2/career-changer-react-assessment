import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Selector from './Select_role';

const router = createBrowserRouter([
{path: '/',
element: <Home />},
{path: '/Select_role',
element: <Selector />},
// // {path: '/Signup',
// // element: <Signup />},
// // {path: '/Error',
// // element: <Error />}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


