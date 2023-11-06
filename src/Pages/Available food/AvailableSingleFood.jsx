import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Modal } from "antd";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Component/Auth Provider/AuthProvider.jsx";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import squareLoading from "../../assets/azNASDnnUY.json";
import Swal from "sweetalert2";

export const AvailableSingleFood = () => {
  const { userDetails } = useContext(authContext);
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_HOST}/donation/food/${id}`)
      .then((res) => setData(res));
  }, []);
  console.log(userDetails);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const currentTime = new Date();
  const hours = currentTime.getHours() % 12 || 12;
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const ampm = currentTime.getHours() >= 12 ? "PM" : "AM";
  const showTime = `${hours}:${minutes} ${ampm}`;

  const requester_name = userDetails?.displayName;
  const requester_image = userDetails?.photoURL;
  const requester_email = userDetails?.email;
  const [exist, setExist] = useState({});

  axios
    .get(
      `${import.meta.env.VITE_LOCAL_HOST}/donation/manage/food?query=${
        data?.data?._id
      }`,
    )
    .then((res) => setExist(res.data))
    .catch((err) => console.log(err));

  console.log(exist?.requester_email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;
    const food_name = target.foodname.value;
    const food_image = target.foodimage.value;
    const food_id = target.foodid.value;
    const donator_email = target.donatoremail.value;
    const donator_name = target.donatorname.value;

    const request_date = target.requestdate.value;
    const pickup_location = target.pickuplocation.value;
    const expire_date = target.expiredate.value;
    const donation_money = target.donationmoney.value;
    const additional_notes = target.notes.value;
    const food_status = data?.data?.food_status;

    const request = {
      food_name,
      food_image,
      food_id,
      donator_email,
      donator_name,
      food_status,
      request_date,
      pickup_location,
      expire_date,
      donation_money,
      additional_notes,
      requester_email,
      requester_image,
      requester_name,
    };
    setLoading(true);

    if (exist?.requester_email === requester_email) {
      setLoading(false);
      Swal.fire({
        title: "You Request This Already",
        icon: "error",
      });
    } else {
      setLoading(false);
      mutation.mutate(request);
    }
    console.log(request);
    setOpen(false);
  };
  console.log(exist?.requester_email);
  const mutation = useMutation({
    mutationFn: (food) => {
      return axios
        .post(`${import.meta.env.VITE_LOCAL_HOST}/donation/food/request`, food)
        .then(() =>
          Swal.fire({
            title: "Request Successfully",
            icon: "success",
          }),
        );
    },
  });
  useEffect(() => {
    if (mutation.isSuccess) {
      setLoading(false);

      console.log("data added succesful");
    }
    if (mutation.isError) {
      setLoading(false);
      Swal.fire({
        title: "Something Went Wrong",
        icon: "error",
      });
      console.log("getting error", mutation.error.message);
    }
  }, [mutation]);

  return (
    <>
      {" "}
      <div className={"px-64 relative flex gap-6 py-32 items-center"}>
        <Helmet>
          <title>Empower Hive | Single Food</title>
        </Helmet>
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
              Request
            </button>
            <Modal
              title="Request"
              footer={null}
              open={open}
              onCancel={handleCancel}
            >
              <form onSubmit={handleSubmit} className={"space-y-2 z-10 "}>
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
                      name="foodid"
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
                      name="donatoremail"
                      value={data?.data?.donator?.email}
                      readOnly
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
                      name="donatorname"
                      value={data?.data?.donator?.name}
                      readOnly
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
                      name="useremail"
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
                      placeholder="Request Date"
                      name="requestdate"
                      value={showTime}
                      readOnly
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
                      value={data?.data?.pickup_location}
                      readOnly
                      name="pickuplocation"
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
                      name="expiredate"
                      value={data?.data?.expired_datetime}
                      readOnly
                    />{" "}
                  </div>
                  <div>
                    <p className={"font-semibold  text-gray-600 ml-1 mb-1"}>
                      Donation Money
                    </p>
                    <input
                      type="number"
                      className=" px-2 pr-3 w-[14rem]    text-gray-600 font-semibold tracking-wider py-2 rounded-lg border-2 border-gray-200 outline-none f"
                      placeholder="$Amount"
                      name="donationmoney"
                      required
                      defaultValue={"0"}
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
                      placeholder="Notes"
                      name="notes"
                    />{" "}
                  </div>
                </div>{" "}
                <div className={"justify-end flex gap-3 pt-4"}>
                  <motion.input
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className={
                      "bg-[#3BCF93] cursor-pointer hover:bg-green-500 text-white px-3 py-2 rounded-lg "
                    }
                  />
                </div>
              </form>
              <style>
                {`
                  .ant-modal-footer .ant-btn-text {
                    background-color: #3BCF93;
                  border-color: #3BCF93;
                  color: white;
                  display: none;
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
      {loading && (
        <div
          className={
            "absolute z-50 top-0 w-full opacity-50  h-full bg-[#EAEAED] justify-center flex items-center  bg-blend-multiply"
          }
        >
          <Lottie
            animationData={squareLoading}
            loop={true}
            className={"h-32 "}
          />
        </div>
      )}
    </>
  );
};
