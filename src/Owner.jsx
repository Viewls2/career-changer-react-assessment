import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Nav"








const Owner = () => {

    return (

    <div>
        <Navbar />
        <hr/>
        <div className='my_bio'>
          <h1>View - Group A - 20</h1>
          <img id="cat" src="src/asset/cat_img.jpg" alt="cat" width={'25%'} />
          <h3><strong>Short Biography</strong></h3>
          <h3>Hi!!, my name is view</h3>
      </div>
    </div>

    )
  }

  export default Owner
