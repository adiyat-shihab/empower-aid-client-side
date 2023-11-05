import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button, Modal } from "antd";
import { useContext, useState } from "react";
import { authContext } from "../../Component/Auth Provider/AuthProvider.jsx";

export const AvailableSingleFood = () => {
  const { userDetails } = useContext(authContext);
  const params = useParams();
  const { id } = params;
  const { data } = useQuery({
    queryKey: ["single"],
    queryFn: () =>
      axios.get(`${import.meta.env.VITE_LOCAL_HOST}/donation/food/${id}`),
  });
  console.log(data);
  console.log(userDetails);

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      {" "}
      <div className={"px-64 flex gap-6 py-32"}>
        <div>
          <img
            src={data?.data?.food_image}
            alt=""
            className={"w-[24.625rem] h-[20.625rem]"}
          />
        </div>
        <div>
          <p className={"font-bold text-5xl my-6"}>{data?.data?.food_name}</p>
          <div className={"flex gap-2 items-center"}>
            <img
              src="https://i.ibb.co/1v8P6r0/boxes-1.png"
              alt=""
              className={"w-6 h-6"}
            />
            <p
              className={
                "text-gray-600 pr-1 font-medium border-r border-r-gray-300"
              }
            >
              x{data?.data?.food_quantity}
            </p>
            <p
              tabIndex="0"
              className="focus:outline-none font-medium text-xs text-gray-600"
            >
              Expired In {data?.data?.expired_datetime}
            </p>
          </div>
          <div>
            <button
              className={" mt-3 bg-[#3BCF93] rounded-lg text-white px-4 py-2 "}
              onClick={showModal}
            >
              Open Modal
            </button>
            <Modal
              title="Request"
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
              okType={"text"}
              okText={"Request"}
            >
              <div className={"space-y-2"}>
                <div className={"flex justify-between"}>
                  <div>
                    <p className={"font-semibold  text-gray-600 ml-1 mb-1"}>
                      Food Name
                    </p>
                    <input
                      type="text"
                      className=" px-2 text-gray-600 font-semibold tracking-wider pr-3 w-[14rem] py-2 rounded-lg border-2 border-gray-200 outline-none f"
                      placeholder="Food Name"
                      name="foodname"
                      value={data?.data?.food_name}
                      readOnly
                    />{" "}
                  </div>
                  <div>
                    <p className={"font-semibold text-gray-600 ml-1 mb-1"}>
                      Food Image
                    </p>
                    <input
                      type="text"
                      className=" px-2 pr-3 py-2 w-[14rem]  text-gray-600 font-semibold tracking-wider  rounded-lg border-2 border-gray-200 outline-none f"
                      placeholder=""
                      name="foodimage"
                      readOnly
                      value={data?.data?.food_image}
                    />{" "}
                  </div>
                </div>{" "}
                <div className={"flex justify-between"}>
                  <div>
                    <p className={"font-semibold  text-gray-600 ml-1 mb-1"}>
                      Food Id
                    </p>
                    <input
                      type="text"
                      className=" px-2 pr-3 w-[14rem]  text-gray-600 font-semibold tracking-wider py-2 rounded-lg border-2 border-gray-200 outline-none f"
                      placeholder="Food Name"
                      name="foodname"
                      readOnly
                      value={data?.data?._id}
                    />{" "}
                  </div>
                  <div>
                    <p className={"font-semibold text-gray-600 ml-1 mb-1"}>
                      Food Donator email
                    </p>
                    <input
                      type="text"
                      className=" px-2 pr-3 py-2 w-[14rem]  text-gray-600 font-semibold tracking-wider rounded-lg border-2 border-gray-200 outline-none f"
                      placeholder="Food Name"
                      name="email"
                    />{" "}
                  </div>
                </div>{" "}
                <div className={"flex justify-between"}>
                  <div>
                    <p className={"font-semibold  text-gray-600 ml-1 mb-1"}>
                      Food Donator Name
                    </p>
                    <input
                      type="text"
                      className=" px-2 pr-3 w-[14rem] py-2  text-gray-600 font-semibold tracking-wider rounded-lg border-2 border-gray-200 outline-none f"
                      placeholder="Food Name"
                      name="foodname"
                    />{" "}
                  </div>
                  <div>
                    <p className={"font-semibold text-gray-600 ml-1 mb-1"}>
                      User email
                    </p>
                    <input
                      type="text"
                      className=" px-2 pr-3 py-2 w-[14rem]  text-gray-600 font-semibold tracking-wider rounded-lg border-2 border-gray-200 outline-none f"
                      placeholder="Food Name"
                      name="email"
                      value={userDetails?.email}
                      readOnly
                    />{" "}
                  </div>
                </div>{" "}
                <div className={"flex justify-between"}>
                  <div>
                    <p className={"font-semibold  text-gray-600 ml-1 mb-1"}>
                      Request Date
                    </p>
                    <input
                      type="text"
                      className=" px-2 pr-3 w-[14rem]   text-gray-600 font-semibold tracking-wider py-2 rounded-lg border-2 border-gray-200 outline-none f"
                      placeholder="Food Name"
                      name="foodname"
                    />{" "}
                  </div>
                  <div>
                    <p className={"font-semibold text-gray-600 ml-1 mb-1"}>
                      Pickup Location
                    </p>
                    <input
                      type="text"
                      className=" px-2 pr-3 py-2 w-[14rem]  text-gray-600 font-semibold tracking-wider rounded-lg border-2 border-gray-200 outline-none f"
                      placeholder="Food Name"
                      name="email"
                    />{" "}
                  </div>
                </div>{" "}
                <div className={"flex justify-between"}>
                  <div>
                    <p className={"font-semibold  text-gray-600 ml-1 mb-1"}>
                      Expire Date
                    </p>
                    <input
                      type="text"
                      className=" px-2 pr-3 w-[14rem]   text-gray-600 font-semibold tracking-wider py-2 rounded-lg border-2 border-gray-200 outline-none f"
                      placeholder="Food Name"
                      name="foodname"
                    />{" "}
                  </div>
                  <div>
                    <p className={"font-semibold  text-gray-600 ml-1 mb-1"}>
                      Donation Money
                    </p>
                    <input
                      type="text"
                      className=" px-2 pr-3 w-[14rem]    text-gray-600 font-semibold tracking-wider py-2 rounded-lg border-2 border-gray-200 outline-none f"
                      placeholder="Food Name"
                      name="foodname"
                    />{" "}
                  </div>
                </div>{" "}
                <div className={"flex justify-between"}>
                  <div>
                    <p className={"font-semibold text-gray-600 ml-1 mb-1"}>
                      Additional Notes
                    </p>
                    <input
                      type="text"
                      className=" px-2 pr-3 py-7 w-[30rem]   text-gray-600 font-semibold tracking-wider rounded-lg border-2 border-gray-200 outline-none f"
                      placeholder="Food Name"
                      name="email"
                    />{" "}
                  </div>
                </div>{" "}
              </div>
              <style>
                {`
                  .ant-modal-footer .ant-btn-text {
                    background-color: #3BCF93;
                  border-color: #3BCF93;
                  color: white;
                    }
                    .ant-btn-text:hover {
                    background-color: #3BCF93; 
                    border-color: #3BCF93; 
                     
                    }
                 
                  `}
              </style>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
