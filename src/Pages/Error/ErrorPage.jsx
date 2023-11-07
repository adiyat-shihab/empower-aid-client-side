import { Result } from "antd";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export const ErrorPage = () => {
  const navigation = useNavigate();
  return (
    <>
      {" "}
      <Helmet>
        <title>Empower Hive | Error</title>
      </Helmet>
      <div className={"flex justify-center items-center h-screen"}>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <div className={"flex justify-center"}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigation("/")}
                className="block bg-[#3BCF93] px-6 rounded-sm text-white  py-2 text-[1.125rem] p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
              >
                <span className={" text-[1rem] font-bold  "}>Back To Home</span>
              </motion.button>
            </div>
          }
        />
      </div>
    </>
  );
};
