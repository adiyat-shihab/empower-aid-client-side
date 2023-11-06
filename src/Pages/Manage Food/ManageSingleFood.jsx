import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Empty } from "antd";
import { motion } from "framer-motion";

export const ManageSingleFood = () => {
  const param = useParams();
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_LOCAL_HOST}/donation/manage/food/search?query=${
          param.id
        }`,
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [param.id]);
  console.log(Data);
  return (
    <>
      <div
        className={"py-36 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-32"}
      >
        {Data.length !== 0 ? (
          Data.map((data) => <ManageData details={data} />)
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
};
const ManageData = ({ details }) => {
  return (
    <>
      {" "}
      <div className="w-full py-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={details?.requester_image}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {details?.requester_name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {details?.requester_email}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Requested Date {details?.request_date}
          </span>
          <div className="flex mt-4 mx-auto items-center  md:mt-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg bg-[#3BCF93] "
            >
              Delivered
            </motion.button>
          </div>
        </div>
        <div className={"flex justify-center"}></div>
      </div>
    </>
  );
};
