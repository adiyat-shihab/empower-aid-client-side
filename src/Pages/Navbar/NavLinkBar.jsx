import { NavLink } from "react-router-dom";

export const NavLinkBar = ({ data, url }) => {
  return (
    <NavLink
      to={url}
      style={({ isActive }) => {
        return {
          color: isActive ? "#3BCF93" : "#afafaf",
          borderBottom: isActive && " 2px solid #3BCF93",
        };
      }}
      className={
        " text-[1.125rem] font-bold transition ease-in-out duration-300"
      }
    >
      {data}
    </NavLink>
  );
};
