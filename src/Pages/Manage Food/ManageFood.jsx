import { Helmet } from "react-helmet";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Component/Auth Provider/AuthProvider.jsx";
import { Table } from "antd";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const ManageFood = () => {
  const { userDetails } = useContext(authContext);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/donation/food/search?query=${userDetails.email}`,
      )
      .then((res) => {
        setDatas(res.data);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${import.meta.env.VITE_LOCAL_HOST}/donation/food/clear/${id}`,
            id,
          )
          .then((res) => {
            axios
              .delete(
                `${
                  import.meta.env.VITE_LOCAL_HOST
                }/donation/manage/food/clear/${id}`,
              )
              .then((r) => {
                console.log(r);
              })
              .catch((err) => console.log(err));
            console.log(res);

            const remaining = datas.filter((data) => data._id !== id);
            setDatas(remaining);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => console.log(err));
      }
    });
  };
  console.log(datas);

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
          <Link to={`/donation/update/${id}`}>
            <button
              className={
                '  bg-blue-500 text-white cursor-pointer active:bg-green-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"'
              }
            >
              Update
            </button>
          </Link>
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
    </div>
  );
};
