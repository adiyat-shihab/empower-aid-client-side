import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { NoData } from "./NoData.jsx";

import squareLoading from "../../assets/azNASDnnUY.json";
import Lottie from "lottie-react";
import { authContext } from "../../Component/Auth Provider/AuthProvider.jsx";

export const AvailableFood = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const search = target.search.value;
  };
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_HOST}/donation/food`)
      .then((res) => {
        setLoading(false);
        setDatas(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    await axios
      .get(`http://localhost:3000/donation/food/search?query=${search}`)
      .then((data) => {
        setLoading(false);
        setDatas(data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Helmet>
        <title>Empower Hive | Available Food</title>
      </Helmet>
      <div className={"px-32 py-32"}>
        <div
          className={
            "bg-[#3BCF93] px-14 mb-20 items-center py-6 rounded-lg flex justify-between "
          }
        >
          <div>
            <p className={"text-white ml-4 font-bold text-2xl"}>Search Food</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="pt-2 relative   text-gray-600 "
          >
            <input
              className=" outline-none w-[400px] placeholder:font-bold  placeholder:tracking-[2px] tracking-[2px]  font-semibold  py-3 bg-white px-5 pr-16 rounded-lg text-sm"
              type="text"
              name="search"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="absolute right-4 top-0 mt-5 mr-4 font-bold"
            >
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </form>
        </div>
        <div
          className={
            "grid relative grid-cols-3 gap-y-14 justify-items-center items-center"
          }
        >
          {datas.length !== 0 ? (
            datas.map((data) => (
              <AvailableFoodDetails details={data} key={data?._id} />
            ))
          ) : loading ? (
            <div
              className={
                "absolute z-50 top-0   h-full bg-[#EAEAED] justify-center flex items-center  bg-blend-multiply"
              }
            >
              <Lottie
                animationData={squareLoading}
                loop={true}
                className={"h-32 "}
              />
            </div>
          ) : (
            <NoData />
          )}
        </div>
      </div>
    </>
  );
};

const AvailableFoodDetails = ({ details }) => {
  const { userDetails } = useContext(authContext);
  const navigation = useNavigate();
  const handleSingle = () => {
    if (userDetails) {
      if (details?.donator?.email === userDetails?.email) {
        navigation("/manage/food");
      } else {
        navigation(`/donation/food/${details?._id}`);
      }
    } else {
      navigation("/login");
    }
  };
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.26 }}
        className={" "}
      >
        <div className="focus:outline-none border border-green-100 shadow rounded-t-lg mx-2 w-96  xl:mb-0 mb-8">
          <div>
            <img
              alt="person capturing an image"
              src={details?.food_image}
              tabIndex="0"
              className="focus:outline-none rounded-t-lg w-full h-52"
            />
          </div>
          <div className=" rounded-b-lg  ">
            <div className="flex items-center justify-between px-4 pt-4">
              <div className={"flex gap-2 items-center"}>
                <img
                  src="https://i.ibb.co/1v8P6r0/boxes-1.png"
                  alt=""
                  className={"w-6 h-6"}
                />
                <p className={"text-gray-600 font-medium"}>
                  x{details?.food_quantity}
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="bg-[#3BCF93] py-1 px-6 rounded-full"
              >
                <button
                  tabIndex="0"
                  className="focus:outline-none font-medium  cursor-pointer text-xs text-white"
                  onClick={handleSingle}
                >
                  View Details
                </button>
              </motion.div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h2
                  tabIndex="0"
                  className="focus:outline-none text-lg font-semibold"
                >
                  {details?.food_name}
                </h2>
                <p
                  tabIndex="0"
                  className="focus:outline-none font-medium text-xs text-gray-600 pl-5"
                >
                  Expired In {details?.expired_datetime}
                </p>
              </div>
              <p
                tabIndex="0"
                className="focus:outline-none font-medium text-xs text-gray-600 mt-2"
              >
                {details?.additional_notes}
              </p>
              <div className="flex mt-4 items-center font-medium gap-4">
                <div>
                  <img
                    src={details?.donator?.image}
                    alt=""
                    className={"w-10 h-10 rounded-full"}
                  />
                </div>
                <div>
                  <p
                    tabIndex="0"
                    className="focus:outline-none font-medium text-xs text-gray-600 px-2 bg-gray-200 py-1"
                  >
                    {details?.donator?.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 py-4 ">
                <img src="https://i.ibb.co/GtNfGDY/pin.png" alt="" />{" "}
                <h2
                  tabIndex="0"
                  className="focus:outline-none text-[#3BCF93] text-xs font-semibold"
                >
                  {details?.pickup_location}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
