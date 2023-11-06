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
        `${import.meta.env.VITE_LOCAL_HOST}/donation/manage/food?query=${
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
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={details?.requester_image}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {details?.requester_name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <motion.button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg bg-[#3BCF93] ">
              Delivered
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};
