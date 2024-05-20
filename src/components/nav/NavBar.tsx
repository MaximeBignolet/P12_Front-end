import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="title">
      <h1>HRnet</h1>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to={"/"}>Create Employee</NavLink>
          </li>
          <li>
            <NavLink to={"/current-employees"}>Current Employees</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
