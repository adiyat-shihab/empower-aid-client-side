import { Link, NavLink } from "react-router-dom";
import { NavLinkBar } from "./NavLinkBar.jsx";
import { useContext, useState } from "react";
import { authContext } from "../../Component/Auth Provider/AuthProvider.jsx";
import { motion } from "framer-motion";

export const Navbar = () => {
  const { userDetails, SignOut } = useContext(authContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky inset-0 block  h-max w-full z-[100] max-w-full rounded-none border border-white/80 bg-white  py-2  text-white shadow-md backdrop-blur-2xl backdrop-saturate-200  lg:py-4">
        <div className="flex items-center px-6 md:px-14 lg:px-14 text-gray-900">
          <Link to={"/"}>
            <img
              src="https://i.ibb.co/stj4qZN/White-Green-Simple-Illustrative-Food-Logo-3.png"
              className={" md:w-[65px] w-[50px] rounded-lg  lg:h-auto"}
              alt={"logo "}
            />
          </Link>
          <p className="uppercase cursor-default font-bold ml-2 tracking-[3px] text-xs md:text-base hidden md:flex">
            Empower Aid
          </p>
          <ul className="ml-auto mr-8 hidden items-center gap-[3.06rem] xl:flex">
            <motion.li
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
            >
              <NavLinkBar data={"Home"} url={"/"} />
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
            >
              <NavLinkBar url={"/available/food"} data={"Available Foods"} />
            </motion.li>{" "}
            <motion.li
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
            >
              <NavLinkBar url={"/add/food"} data={"Add Food"} />
            </motion.li>
            <motion.li whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
              <NavLinkBar url={"/manage/food"} data={"Manage Food"} />
            </motion.li>
            <motion.li whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
              <NavLinkBar url={"/donation/myRequest"} data={"My Request"} />
            </motion.li>
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
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={SignOut}
                className="block bg-[#3BCF93] px-6 rounded-sm text-white  py-2 text-[1.125rem] p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
              >
                <span className={" text-[1rem] font-bold  "}>Logout</span>
              </motion.button>
            ) : (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  className="block bg-[#3BCF93] px-4 rounded-sm text-white  py-2 text-[1.125rem] p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
                  to={"/register"}
                >
                  <span className={"text-[1.125rem] font-bold"}>Get Start</span>
                </NavLink>
              </motion.div>
            )}
          </ul>
          <button
            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none xl:hidden"
            data-collapse-target="sticky-navar"
            onClick={() => setOpen(true)}
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
        {open && (
          <motion.div
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.45 }}
            exit={{ x: -600 }}
            className={
              "bg-white sticky w-screen h-screen  z-50 -mt-14  py-10 px-5 "
            }
          >
            {" "}
            <div className={"flex justify-end"}>
              <img
                src="https://i.ibb.co/0JtMkmb/close.png"
                alt=""
                className={"w-[24px] h-[24px]"}
                onClick={() => setOpen(false)}
              />
            </div>
            <ul className={"space-y-10"}>
              <li
                className={"border-b-2 pb-4 border-b-gray-300"}
                onClick={() => setOpen(false)}
              >
                <NavLinkBar data={"Home"} url={"/"} />
              </li>
              <li
                className={"border-b-2 pb-4 border-b-gray-300"}
                onClick={() => setOpen(false)}
              >
                <NavLinkBar url={"/available/food"} data={"Available Foods"} />
              </li>
              <li
                className={"border-b-2 pb-4 border-b-gray-300"}
                onClick={() => setOpen(false)}
              >
                <NavLinkBar url={"/add/food"} data={"Add Food"} />
              </li>
              <li
                className={"border-b-2 pb-4 border-b-gray-300"}
                onClick={() => setOpen(false)}
              >
                {" "}
                <NavLinkBar url={"/manage/food"} data={"Manage Food"} />
              </li>
              <li
                className={"border-b-2 pb-4 border-b-gray-300"}
                onClick={() => setOpen(false)}
              >
                {" "}
                <NavLinkBar url={"/donation/myRequest"} data={"My Request"} />
              </li>
              {userDetails ? (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setOpen(false);
                    SignOut;
                  }}
                  className="block bg-[#3BCF93] px-6 rounded-sm text-white  py-2 text-[1.125rem] p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
                >
                  <span className={" text-[1rem] font-bold  "}>Logout</span>
                </motion.button>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    className="block bg-[#3BCF93] px-4 rounded-sm text-white  py-2 text-[1.125rem] p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
                    to={"/register"}
                    onClick={() => setOpen(false)}
                  >
                    <span className={"text-[1.125rem] font-bold"}>
                      Get Start
                    </span>
                  </NavLink>
                </motion.div>
              )}
            </ul>
          </motion.div>
        )}
      </nav>
    </>
  );
};
