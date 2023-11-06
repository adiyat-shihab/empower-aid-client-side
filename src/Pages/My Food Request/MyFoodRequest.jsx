import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { authContext } from "../../Component/Auth Provider/AuthProvider.jsx";
import { Empty, Table } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

export const MyFoodRequest = () => {
  const { userDetails } = useContext(authContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/donation/request/search?query=${userDetails.email}`,
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [exist, setExist] = useState({});
  const handleDelete = (id) => {
    console.log("this is id", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .get(`${import.meta.env.VITE_LOCAL_HOST}/food/reques/${id}`)
          .then((res) => setExist(res.data));

        if (exist.food_status === "Available") {
          axios
            .delete(
              `${import.meta.env.VITE_LOCAL_HOST}/food/reques/delete/${id}`,
            )
            .then((r) => {
              console.log(r);
              const remaining = data.filter((data) => data._id !== id);
              setData(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            })
            .catch((err) => console.log(err));
        } else {
          Swal.fire({
            title: "You Can't Cancel",
            icon: "error",
          });
        }
      }
    });
  };
  console.log(exist.food_status === "Delivered");

  const columns = [
    {
      title: "Donar Name",
      dataIndex: "donator_name",
      key: "food_name",
    },
    {
      title: "Pickup Location",
      dataIndex: "pickup_location",
      key: "food_quantity",
    },
    {
      title: "Expire Date",
      dataIndex: "expire_date",
      key: "pickup_location",
    },
    {
      title: "Request Date",
      dataIndex: "request_date",
      key: "expired_datetime",
    },
    {
      title: "Your Donation Amount",
      dataIndex: "donation_money",
      key: "expired_datetime",
    },
    {
      title: "Status",
      dataIndex: "food_status",
      key: "expired_datetime",
    },
    {
      title: "Edit",
      dataIndex: "_id",
      render: (id) => (
        <div className={"gap-1 flex"}>
          <button
            onClick={() => handleDelete(id)}
            className={
              ' bg-red-500 text-white cursor-pointer active:bg-red-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"'
            }
          >
            Cancel
          </button>
        </div>
      ),
      key: "manageFood",
    },
  ];
  return (
    <>
      <div>
        <Helmet>
          <title>Empower Hive | My Food Request</title>
        </Helmet>
        <div className={"lg:px-32 py-48  "}>
          <Table
            dataSource={data}
            className={"cursor-pointer font-medium "}
            columns={columns}
            scroll={{ x: true }}
            responsive={["sm"]}
          />
        </div>
      </div>
    </>
  );
};
