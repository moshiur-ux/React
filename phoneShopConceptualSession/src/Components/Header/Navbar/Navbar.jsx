import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex justify-between items-center shadow-md py-6 px-5">
        <Logo></Logo>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
            Favorite
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
            LOgIn
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
