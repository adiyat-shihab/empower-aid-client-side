import { Carousel } from "antd";
import "/src/Component/Banner/Banner.css";
import { BannerTitle } from "./BannerTitle.jsx";

export const Banner = () => {
  return (
    <>
      <Carousel autoplay>
        <div
          className={
            "carousel-item3 bg-[#5e5e5e] bg-blend-overlay pl-[334px] pt-[189px]"
          }
        >
          <BannerTitle />
        </div>
        <div
          className={
            "carousel-item2 bg-[#5e5e5e] bg-blend-overlay pl-[334px] pt-[189px]"
          }
        >
          <BannerTitle />
        </div>
        <div
          className={
            "carousel-item bg-[#5e5e5e] bg-blend-overlay  pl-[334px] pt-[189px]"
          }
        >
          {" "}
          <BannerTitle />
        </div>
      </Carousel>
      <div className={"flex "}>
        <div
          className={
            "px-[4.0625rem] py-[4.6875rem] bg-[#3BCF93] w-[39.625rem]  items-center"
          }
        >
          <p className={"text-white text-3xl font-bold"}>
            Supporting Those in Need: Donate Food Now{" "}
            <img
              className={"mt-3"}
              src="https://i.ibb.co/bLgR6Pf/arrow-right.png"
              alt=""
            />
          </p>
        </div>
        <div
          className={"px-[4.0625rem] py-[4.6875rem] bg-[#2e2e2e] w-[39.625rem]"}
        >
          <p className={"text-white font-bold text-3xl"}>
            Making a Difference with Food Donations
            <img
              className={"mt-3"}
              src="https://i.ibb.co/bLgR6Pf/arrow-right.png"
              alt=""
            />
          </p>
        </div>
        <div
          className={"px-[4.0625rem] py-[4.6875rem] bg-[#3BCF93] w-[39.625rem]"}
        >
          <p className={"text-white font-bold text-3xl"}>
            Food for All: Join Our Donation Drive
            <img
              className={"mt-3"}
              src="https://i.ibb.co/bLgR6Pf/arrow-right.png"
              alt=""
            />
          </p>
        </div>
      </div>
    </>
  );
};
