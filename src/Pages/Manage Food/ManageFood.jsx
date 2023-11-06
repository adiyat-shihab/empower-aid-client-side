import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Component/Auth Provider/AuthProvider.jsx";
import { Table } from "antd";
import Lottie from "lottie-react";
import squareLoading from "../../assets/azNASDnnUY.json";

export const ManageFood = () => {
  const { userDetails } = useContext(authContext);
  const [loading, setLoading] = useState(true);
  const { data, isError, error } = useQuery({
    queryKey: ["user data"],
    queryFn: () =>
      axios.get(
        `http://localhost:3000/donation/food/search?query=${userDetails.email}`,
      ),
  });
  console.log(userDetails?.email);
  console.log(data?.data);
  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

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
    // Add more columns as needed
  ];

  return (
    <div>
      <Helmet>
        <title>Empower Hive | Manage Food</title>
      </Helmet>
      <div className={"px-32 py-32 "}>
        <Table
          dataSource={data?.data}
          className={"cursor-pointer"}
          columns={columns}
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
