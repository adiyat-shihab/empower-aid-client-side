import { Helmet } from "react-helmet";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Component/Auth Provider/AuthProvider.jsx";
import { Table } from "antd";
import Lottie from "lottie-react";
import squareLoading from "../../assets/azNASDnnUY.json";
import { Link } from "react-router-dom";

export const ManageFood = () => {
  const { userDetails } = useContext(authContext);
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  axios
    .get(
      `http://localhost:3000/donation/food/search?query=${userDetails.email}`,
    )
    .then((res) => {
      setLoading(false);
      setDatas(res.data);
    });

  const handleDelete = (id) => {
    console.log("this is id", id);
    setLoading(true);

    axios
      .delete(
        `${import.meta.env.VITE_LOCAL_HOST}/donation/food/clear/${id}`,
        id,
      )
      .then((res) => {
        setLoading(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    {
      title: "Food Name",
      dataIndex: "food_name",
      key: "food_name",
    },
    {
      title: "Food Quantity",
      dataIndex: "food_quantity",
      key: "food_quantity",
    },
    {
      title: "Pickup Location",
      dataIndex: "pickup_location",
      key: "pickup_location",
    },
    {
      title: "Expired Date",
      dataIndex: "expired_datetime",
      key: "expired_datetime",
    },
    {
      title: "Manage Food",
      dataIndex: "_id",
      render: (id) => (
        <div className={"gap-1 flex"}>
          <Link to={`/donation/food/manage/${id}`}>
            <button
              className={
                ' bg-[#3BCF93] text-white cursor-pointer active:bg-green-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"'
              }
            >
              Manage
            </button>
          </Link>
          <button
            onClick={() => handleDelete(id)}
            className={
              ' bg-red-500 text-white cursor-pointer active:bg-red-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"'
            }
          >
            Delete
          </button>
        </div>
      ),
      key: "manageFood",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Empower Hive | Manage Food</title>
      </Helmet>
      <div className={"lg:px-32 py-48  "}>
        <Table
          dataSource={datas}
          className={"cursor-pointer font-medium "}
          columns={columns}
          scroll={{ x: true }}
          responsive={["sm"]}
        />
      </div>
      {loading && (
        <div
          className={
            "absolute top-0  w-full h-[78%] bg-[#EAEAED] justify-center flex items-center  bg-blend-multiply"
          }
        >
          <Lottie
            animationData={squareLoading}
            loop={true}
            className={"h-32 "}
          />
        </div>
      )}
    </div>
  );
};
