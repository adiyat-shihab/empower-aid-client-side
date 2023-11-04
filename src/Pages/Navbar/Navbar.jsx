import { Link, NavLink } from "react-router-dom";
import { NavLinkBar } from "./NavLinkBar.jsx";
import { useContext } from "react";
import { authContext } from "../../Component/Auth Provider/AuthProvider.jsx";

export const Navbar = () => {
  const { userDetails, SignOut } = useContext(authContext);

  console.log(userDetails);
  return (
    <>
      <nav className="sticky inset-0 z-10 block  h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2  text-white shadow-md backdrop-blur-2xl backdrop-saturate-200  lg:py-4">
        <div className="flex items-center px-6 md:px-14 lg:px-14 text-gray-900">
          <Link to={"/"}>
            <img
              src="https://i.ibb.co/c6j3YWs/White-Green-Simple-Illustrative-Food-Logo-1.png"
              className={" md:w-[65px] w-[50px] rounded-lg  lg:h-auto"}
              alt={"logo "}
            />
          </Link>
          <p className="uppercase cursor-default font-bold ml-2 tracking-[3px] text-xs md:text-base hidden md:flex">
            Empower Aid
          </p>
          <ul className="ml-auto mr-8 hidden items-center gap-[3.06rem] lg:flex">
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <NavLinkBar data={"Home"} url={"/"} />
            </li>
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <NavLinkBar url={"/available/food"} data={"Available Foods"} />
            </li>{" "}
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <NavLinkBar url={"/add/food"} data={"Add Food"} />
            </li>
            <li>
              <NavLinkBar url={"/manage/food"} data={"Manage Food"} />
            </li>
            {userDetails && (
              <li
                className={
                  "flex justify-center px-6 py-2 rounded-[25px] gap-4 items-center bg-[#3BCF93]"
                }
              >
                <p className={"font-bold text-white "}>
                  {userDetails?.displayName}
                </p>
                <img
                  src={userDetails?.photoURL}
                  className={"w-8 h-8 rounded-full"}
                  alt=""
                />
              </li>
            )}
            {userDetails ? (
              <button
                onClick={SignOut}
                className="block bg-[#3BCF93] px-6 rounded-sm text-white  py-2 text-[1.125rem] p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
              >
                <span className={" text-[1rem] font-bold  "}>Logout</span>
              </button>
            ) : (
              <NavLink
                className="block bg-[#3BCF93] px-4 rounded-sm text-white  py-2 text-[1.125rem] p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
                to={"/register"}
              >
                <span className={"text-[1.125rem] font-bold"}>Get Start</span>
              </NavLink>
            )}
          </ul>
          <button
            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            data-collapse-target="sticky-navar"
          >
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
