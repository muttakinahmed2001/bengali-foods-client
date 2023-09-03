import { NavLink } from "react-router-dom";
import "./ActiveLink.css";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "active text-decoration-none me-2 text-black"
          : "text-decoration-none me-2 text-black"
      }>
      {children}
    </NavLink>
  );
};

export default ActiveLink;
