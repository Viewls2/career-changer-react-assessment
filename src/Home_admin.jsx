// import Navbar from "./Nav"
// import Selector from "./Select_role"
// import { useState } from "react"


// const Home_admin = (props) => {

//  const [name,setName] = useState('') 
//  const [lastName,setLastName] = useState('') 
//  const [position,setPosition] = useState('') 


//   const saveInfo = () => {
//     if (name !== "" && lastName !== "" && position !== "") {
//       const newInfo = {
//           name: name,
//           lastName: lastName,
//           position: position
//       }
//       props.setEmployee([...props.showEmployee,newInfo]);
//   }


//     return (
//       <div>
//           <div>
//               <div>
//                 <h2><strong>Create User Here</strong></h2><br/>
//                 <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)}/>
//                 <input type="text" placeholder="Last Name" onChange={(event) => setLastName(event.target.value)}/>
//                 <input type="text" placeholder="Position" onChange={(event) => setPosition(event.target.value)}/>
//                 <button className="saveBtn">Save</button>
//               </div>
//               <table>
//                   <thead>
//                     <tr>
//                       <th>Name</th>
//                       <th>Last Name</th>
//                       <th>Position</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   {props.showEmployee.map((items) => {
//                     return (
//                       <tr>
//                       <td>{items.id}</td>
//                       <td>{items.name}</td>
//                       <td>{items.position}</td>
//                       <td><button>Delete</button></td>
//                     </tr>
//                     )
//                   })}
//               </table>
//             </div>
//       </div>
//     )
//   }
// }
  

//   export default Home_admin

import React, { useState } from "react";
import Navbar from "./Nav";
import Selector from "./Select_role";

const Home_admin = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const saveInfo = () => {
    if (name !== "" && lastName !== "" && position !== "") {
      const newInfo = {
        name: name,
        lastName: lastName,
        position: position,
      };
      props.setEmployee([...props.showEmployee, newInfo]);
    }
  };

  const deleteInfo = (index) => {
    const updatedEmployeeList = [...props.showEmployee];
    updatedEmployeeList.splice(index, 1);
    props.setEmployee(updatedEmployeeList);
  };

  return (
    <div>
      <div>
        <div>
          <h2>
            <strong>Create User Here</strong>
          </h2>
          <br />
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Position"
            onChange={(event) => setPosition(event.target.value)}
          />
          <button className="SaveBtn" onClick={saveInfo}>
            Save
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.showEmployee.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{items.name}</td>
                  <td>{items.lastName}</td>
                  <td>{items.position}</td>
                  <td>
                    <button onClick={() => deleteInfo(index)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home_admin;
