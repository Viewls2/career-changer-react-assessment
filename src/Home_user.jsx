import Navbar from "./Nav"
import Selector from "./Select_role"

const Home_user = (props) => {

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {props.showEmployee.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{items.name}</td>
                  <td>{items.lastName}</td>
                  <td>{items.position}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
  

  export default Home_user