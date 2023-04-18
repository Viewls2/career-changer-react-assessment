import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "/Users/view/Documents/git-hub/reac_assesment/career-changer-react-assessment/src/asset/style.css"
import Home from './Home';
import Selector from './Select_role';
import Owner from './Owner';

const router = createBrowserRouter([
{path: '/',
element: <Home />},
{path: '/Select_role',
element: <Selector />},
{path: '/Owner',
element: <Owner />},
// // {path: '/Error',
// // element: <Error />}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


