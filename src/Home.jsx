import React, { useState,useEffect } from "react";

import Selector from "./Select_role";
import Home_user from "./Home_user";
import Home_admin from "./Home_admin";
import Navbar from "./Nav";
const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

// const Home = () => {

//   return (
//     <div>
//         <Navbar />
//         <hr/>
//         <h1>Generation Thailand<br/> React - Assessment</h1>
//         <Selector/>
//         <button>User home - Sector</button>
//         <button>Admin home - Sector</button>
//         {/* <button onClick={ClickUser}>User home - Sector</button>
//         <button  onClick={ClickAdmin}>Admin home - Sector</button> */}
//     </div>
//   )
// }

const ClickUser =() => {
  return (
    <Home_user />
  )
}

const ClickAdmin =() => {
  return (
    <Home_admin/>
  )

}

const Home = () => {
  const [showUser, setShowUser] = useState();
  const [showAdmin, setShowAdmin] = useState();
  const [showEmployee,setEmployee] = useState([...mockEmployees]);

  // set home page
  const handleClickUser = () => {
    setShowUser(true);
    setShowAdmin(false);
  };

  const handleClickAdmin = () => {
    setShowAdmin(true);
    setShowUser(false);
  };

  
  return (
    <div>
      <Navbar />
      <hr />
      <h1 >
        Generation Thailand
      </h1>
      {showAdmin === true ? <h1>React Admin Sector</h1>:showAdmin === false ? <h1>React User Sector</h1>:<h1>React Assessment</h1>}
      <button onClick={handleClickUser}>User home - Sector</button>
      <button onClick={handleClickAdmin}>Admin home - Sector</button>
      {showUser && <Home_user showEmployee={showEmployee}/>} 
      {showAdmin && <Home_admin showEmployee={showEmployee} setEmployee={setEmployee}/>}
    </div>
  );
};


export default Home
