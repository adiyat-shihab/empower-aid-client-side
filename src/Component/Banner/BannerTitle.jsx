export const BannerTitle = () => {
  return (
    <>
      {" "}
      <img
        src="https://i.ibb.co/8z65Sz1/room-service-1.png"
        className={"w-[66px] h-[66px]"}
        alt=""
      />
      <h1 className={"font-bold text-[94px] text-white "}>
        Food Is <span className={"text-[#3BCF93] "}>Life</span>
      </h1>
      <p className={"text-[25px] text-[#e9e9e9] font-semibold"}>
        We built strength, stability and self reliance through food.
      </p>
      <button
        className={"px-8 py-4 text-base bg-[#3BCF93] mt-9 text-white font-bold"}
      >
        Donate Now
      </button>
    </>
  );
};
