import { DatePicker } from "antd";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Component/Auth Provider/AuthProvider.jsx";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const AddFood = () => {
  const { userDetails } = useContext(authContext);
  const [date, setDate] = useState("");
  const onChange = (date, dateString) => {
    setDate(dateString);
  };
  console.log(userDetails);
  let donator = {};
  if (userDetails) {
    const { displayName, email, photoURL } = userDetails;
    const image = photoURL;
    const name = displayName;
    donator = { name, email, image };
  }
  console.log(donator);

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
      donator,
    };
    console.log(addFood);
    mutation.mutate(addFood);
  };
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(
        `${import.meta.env.VITE_LOCAL_HOST}/donation/add/food`,
        data,
      );
    },
  });
  console.log(mutation.error);
  console.log(mutation.isError);
  console.log(mutation.isSuccess);
  return (
    <div className={"bg-gray-100"}>
      <div className="w-full lg:w-8/12 px-4 py-32 rounded-3xl  mx-auto  relative">
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
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <p className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Food Quantity
                    </p>
                    <input
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Food Quantity"
                      name="foodquantity"
                      required
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
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <p className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Food Status
                    </p>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value="Available"
                      name="foodstatus"
                      readOnly
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
      </div>
    </div>
  );
};
