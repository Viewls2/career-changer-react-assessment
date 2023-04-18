import Navbar from "./Nav"
import Selector from "./Select_role"
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

const Home = () => {

  return (
    <div>
        <Navbar />
        <h1>hello</h1>
        <Selector/>
    </div>
  )
}



export default Home
