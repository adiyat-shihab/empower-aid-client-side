import { DatePicker } from "antd";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Component/Auth Provider/AuthProvider.jsx";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import squareLoading from "../../assets/azNASDnnUY.json";
import { useParams } from "react-router-dom";

export const UpdateFood = () => {
  const { userDetails } = useContext(authContext);

  const [defaultValue, setDefaultValue] = useState();
  const [date, setDate] = useState(defaultValue?.expired_datetime);

  const [loading, setLoading] = useState(false);
  const params = useParams();
  console.log(params);
  const onChange = (date, dateString) => {
    setDate(dateString);
  };
  let donator = {};
  if (userDetails) {
    const { displayName, email, photoURL } = userDetails;
    const image = photoURL;
    const name = displayName;
    donator = { name, email, image };
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_HOST}/donation/food/${params.id}`)
      .then((res) => setDefaultValue(res.data));
  }, []);
  console.log(defaultValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const food_image = target.foodimage.value;
    const food_name = target.foodname.value;
    const food_quantity = target.foodquantity.value;
    const pickup_location = target.pickuplocation.value;
    const expired_datetime = date;
    const additional_notes = target.notes.value;
    const addFood = {
      additional_notes,
      expired_datetime,
      pickup_location,
      food_quantity,
      food_name,
      food_image,
    };
    setLoading(true);
    mutation.mutate(addFood);
  };
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.put(
        `${import.meta.env.VITE_LOCAL_HOST}/donation/food/update/${params.id}`,
        data,
      );
    },
  });
  useEffect(() => {
    if (mutation.isError) {
      setLoading(false);
      Swal.fire("Oops...", "Something went wrong!", "error");
    }
    if (mutation.isSuccess) {
      setLoading(false);
      Swal.fire("Food Update  Successfully", "", "success");
    }
  }, [mutation]);
  return (
    <div className={"bg-gray-100"}>
      <Helmet>
        <title>Empower Hive | Update Food</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="w-full lg:w-8/12 px-4 py-32 rounded-3xl  mx-auto  relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r h-[700px] top-24 to-[#3BCF93] from-green-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative  bg-white rounded-3xl  flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-blueGray-100 border-0">
          <form onSubmit={handleSubmit}>
            <div className="rounded-3xl bg-white mb-0 px-6 py-8">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Add Food
                </h6>
                <input
                  className="bg-[#3BCF93] text-white cursor-pointer active:bg-green-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                />
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Food Details
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <p className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Food Name
                    </p>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                      name="foodname"
                      required
                      defaultValue={defaultValue?.food_name}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <p className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Food Image
                    </p>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Food Image"
                      name="foodimage"
                      required
                      defaultValue={defaultValue?.food_image}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <p className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Food Quantity
                    </p>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Food Quantity"
                      name="foodquantity"
                      required
                      defaultValue={defaultValue?.food_quantity}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <p className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Pickup Location
                    </p>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Pickup Location"
                      name="pickuplocation"
                      required
                      defaultValue={defaultValue?.pickup_location}
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Other Details
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <p className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Additional Notes
                    </p>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=" Additional Notes"
                      name="notes"
                      required
                      defaultValue={defaultValue?.additional_notes}
                    />
                  </div>
                </div>

                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <p className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Expired Date
                    </p>
                    <DatePicker
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={onChange}
                      placeholder={date}
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
          </form>
        </div>
        <footer className="relative  pt-8 pb-6 mt-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
            </div>
          </div>
        </footer>
      </motion.div>
      {loading && (
        <div
          className={
            "absolute top-0 opacity-50 w-full h-full bg-[#EAEAED] justify-center flex items-center  bg-blend-multiply"
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
