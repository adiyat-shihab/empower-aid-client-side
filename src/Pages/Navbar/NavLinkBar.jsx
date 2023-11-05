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
        " text-[1.125rem] hover:text-[#3BCF93] font-bold transition ease-in-out duration-300"
      }
    >
      <span
        className={
          "hover:text-[#3BCF93] hover:border-b hover:border-b-[#3BCF93]"
        }
      >
        {data}
      </span>
    </NavLink>
  );
};
