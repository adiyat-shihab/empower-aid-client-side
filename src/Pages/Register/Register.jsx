import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { authContext } from "../../Component/Auth Provider/AuthProvider.jsx";

import { DesignRegister } from "./DesignRegister.jsx";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import squareLoading from "../../../public/azNASDnnUY.json";

export const Register = () => {
  const navigation = useNavigate();
  const { CreateUser } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [passValidation, setPassValidation] = useState("");
  const [validation, setValidation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const target = e.target;
    const firstName = target.firstname.value;
    const lastName = target.lastname.value;
    const email = target.email.value;
    const password = target.password.value;
    console.log(firstName, lastName, email, password);
    setPassValidation("");
    setValidation("");
    if (password.length < 6) {
      setPassValidation("Password must be 6 character");
    } else if (password.length > 15) {
      setPassValidation("Password is not exceed over 15 character");
    } else if (!/[A-Z]/.test(password)) {
      setPassValidation("Password must need atleast one Capital Letter");
    } else if (!/\d/.test(password)) {
      setPassValidation("Password must need atleast one number");
    } else if (!/[@$!%*?&]/.test(password)) {
      setPassValidation("Password must need atleast one special character");
    } else {
      CreateUser(email, password)
        .then((res) => {
          setLoading(false);
          Swal.fire("Register Success", "", "success");
          navigation("/");
        })
        .catch((err) => {
          setLoading(false);
          setValidation("Email Already in Use");
        });
    }
  };

  return (
    <>
      <div className="min-w-screen md:py-[190px] bg-gray-100 flex items-center justify-center px-5 py-10">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl animate__animated animate__fadeIn animate__d shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <DesignRegister />
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                <p>Enter your information to Register</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      First name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                        name="firstname"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Last name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                        name="lastname"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                        name="password"
                        required
                      />
                    </div>
                    <strong className={"text-red-400"}>
                      {passValidation || validation}
                    </strong>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <input
                      type="submit"
                      className="block transition ease-in-out duration-200   mx-auto bg-[#3BCF93] hover:bg-[#388A69]
                        cursor-pointer w-full text-[16px] tracking-[2px] text-white rounded-lg px-3 py-3 font-semibold"
                      placeholder="Register"
                      value="Register"
                    />

                    <div className={"pt-4"}>
                      <strong>
                        Existing user?{" "}
                        <Link
                          to={"/login"}
                          className={
                            "text-[#3BCF93] hover:text-[#388A69] transition ease-in-out duration-75"
                          }
                        >
                          Login
                        </Link>
                      </strong>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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
    </>
  );
};
