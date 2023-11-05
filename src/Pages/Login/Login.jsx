import { DesignLogin } from "./DesignLogin.jsx";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";
import { useContext, useState } from "react";
import { authContext } from "../../Component/Auth Provider/AuthProvider.jsx";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import squareLoading from "../../assets/azNASDnnUY.json";

export const Login = () => {
  const { SignIn, googleSign } = useContext(authContext);
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(loading);

  const handleSubmit = async (e) => {
    setError(false);
    setLoading(true);
    e.preventDefault();
    const target = e.target;
    await SignIn(target.email.value, target.password.value)
      .then(async () => {
        setLoading(false);
        await Swal.fire("Login Success", "", "success");
        navigation("/");
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };

  const handleGoogle = async () => {
    setLoading(true);
    await googleSign()
      .then(async () => {
        setLoading(false);
        await Swal.fire("Register Success", "", "success");
        navigation("/");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <>
      {" "}
      <div className="min-w-screen md:py-[190px]  bg-gray-100 flex items-center justify-center px-5 py-5 relative ">
        <div
          className="bg-gray-100 text-gray-500 animate__animated animate__fadeIn rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full animate__fadeIn">
            <DesignLogin />
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900 uppercase">
                  Login
                </h1>
                <p>Enter your information to Login</p>
              </div>
              <form onSubmit={handleSubmit}>
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
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 mb-4"
                        placeholder="************"
                        name="password"
                      />
                    </div>
                    {error && (
                      <strong className={"text-red-400 "}>
                        Email and Password Doesn't match
                      </strong>
                    )}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <input
                      className="block transition ease-in-out duration-200   mx-auto bg-[#3BCF93] hover:bg-[#388A69]
                        cursor-pointer w-full text-[16px] tracking-[2px] text-white rounded-lg px-3 py-3 font-semibold"
                      value={"Login"}
                      type="submit"
                    />
                    <div className={"mt-4"}>
                      <button
                        type="button"
                        onClick={handleGoogle}
                        className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                      >
                        <svg
                          className="mr-2 -ml-1 w-4 h-4"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="google"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 488 512"
                        >
                          <path
                            fill="currentColor"
                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                          ></path>
                        </svg>
                        Sign up with Google<div></div>
                      </button>
                    </div>

                    <div className={"pt-4"}>
                      <strong className={"mt-4"}>
                        Not an user?{" "}
                        <Link
                          className={
                            "text-[#3BCF93] hover:text-[#388A69] transition ease-in-out duration-75"
                          }
                          to={"/register"}
                        >
                          Register
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
