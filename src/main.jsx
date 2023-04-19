import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./asset/style.css"
import Home from './Home';
import Selector from './Select_role';
import Owner from './Owner';
import Home_admin from './Home_admin';
import Navbar from './Nav';

const router = createBrowserRouter([
{path: '/',
element: <Home />},
{path: '/Select_role',
element: <Selector />},
{path: '/Nav',
element: <Navbar />},
{path: '/Owner',
element: <Owner />},
{path: '/Home_admin',
element: <Home_admin />}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


