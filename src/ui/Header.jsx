import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-3 shadow-md flex items-center justify-between   ">
      <img
        className=" w-[50px] h-[50px] ml-4 "
        src="/src/assets/logo.png"
        alt="logo"
      />
      <nav className="space-x-5 pr-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black"
          }>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black"
          }>
          About
        </NavLink>
        <NavLink
          to="/Services"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black"
          }>
          Services
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black"
          }>
          Skills
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black"
          }>
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black"
          }>
          Contact
        </NavLink>
      </nav>
    </div>
  );
};
export default Header;
