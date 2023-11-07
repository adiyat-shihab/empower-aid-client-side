import Lottie from "lottie-react";
import squareLoading from "../../assets/azNASDnnUY.json";
import { NoData } from "../../Pages/Available food/NoData.jsx";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../Auth Provider/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export const Feature = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_HOST}/donation/highest`)
      .then((res) => {
        setLoading(false);
        setDatas(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={"px-32 py-32"}>
        <div
          className={"bg-[#3BCF93] px-14 mb-20 items-center py-6 rounded-lg   "}
        >
          <div>
            <p className={"text-white ml-4 font-bold text-center text-3xl"}>
              Feature Food
            </p>
          </div>
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
        <div className={"flex justify-center"}>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigation("/available/food")}
            className="block bg-[#3BCF93] px-6 rounded-sm text-white  py-2 text-[1.125rem] p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
          >
            <span className={" text-[1rem] font-bold  "}>View All</span>
          </motion.button>
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
