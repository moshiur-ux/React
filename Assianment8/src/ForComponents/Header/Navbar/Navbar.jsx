import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between  shadow-md p-5">
        <Logo></Logo>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/doneation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
              Donation
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
              Statistics
            </NavLink>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
