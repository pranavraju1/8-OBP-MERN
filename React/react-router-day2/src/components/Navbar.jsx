import { Link, NavLink } from "react-router"

const Navbar = () => {
  return (
    <div>
        <nav style={{
            display: "flex",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        }}>

            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/users'>Users</NavLink>

        </nav>
      
    </div>
  )
}

export default Navbar
