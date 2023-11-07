import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const BannerTitle = () => {
  return (
    <>
      {" "}
      <motion.img
        src="https://i.ibb.co/8z65Sz1/room-service-1.png"
        className={"xl:w-[66px] xl:h-[66px]"}
        alt=""
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className={"font-bold text-5xl xl:text-[94px] text-white "}
      >
        Food Is <span className={"text-[#3BCF93] "}>Life</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className={"text-[25px] text-[#e9e9e9] font-semibold"}
      >
        We built strength, stability and self reliance through food.
      </motion.p>
      <Link to={"/available/food"}>
        {" "}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.3 }}
          className={
            "px-8 py-4 text-base bg-[#3BCF93] mt-9 text-white font-bold"
          }
        >
          Donate Now
        </motion.button>
      </Link>
    </>
  );
};
