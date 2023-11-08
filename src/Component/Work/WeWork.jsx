export const WeWork = () => {
  return (
    <>
      <div
        className={
          "flex flex-col-reverse xl:flex-row gap-8 justify-center pb-32 items-center"
        }
      >
        <div>
          <img
            src="https://i.postimg.cc/T15QkRcZ/Untitled-design-4.png"
            alt=""
            className={"md:w-[856px] w-[36rem] h-[23rem] md:h-[607px]"}
          />
        </div>
        <div>
          <h1 className={"font-bold text-black text-4xl mb-14"}>How We Work</h1>
          <div className={"flex gap-4 items-center  "}>
            <img
              src="https://i.ibb.co/84CZRmP/home-1.png"
              alt=""
              className={"w-14 h-14"}
            />
            <h1 className={"text-xl font-bold"}>Community Centers</h1>
          </div>
          <p className={"mt-6 text-base  xl:w-[560px]"}>
            Charity law within the UK varies among England and Wales, Scotland
            and Northern Ireland, but the fundamental principles are the same.
          </p>
          <div className={"flex  mt-12 font-medium gap-4 items-center  "}>
            <img
              src="https://i.ibb.co/PhrVzDX/layers-1.png"
              alt=""
              className={"w-14 h-14"}
            />
            <h1 className={"text-xl font-bold"}>Data-driven approach</h1>
          </div>
          <p className={"mt-6 text-base font-medium xl:w-[560px]"}>
            Charity law within the UK varies among England and Wales, Scotland
            and Northern Ireland, but the fundamental principles are the same.
          </p>
          <div className={"flex mt-12  gap-4 items-center   "}>
            <img
              src="https://i.ibb.co/gr9c2yn/winking.png"
              alt=""
              className={"w-14 h-14"}
            />
            <h1 className={"text-xl font-bold"}>Focused support</h1>
          </div>
          <p className={"mt-6  mb-12 font-medium text-base xl:w-[560px]"}>
            Charity law within the UK varies among England and Wales, Scotland
            and Northern Ireland, but the fundamental principles are the same.
          </p>
        </div>
      </div>
    </>
  );
};
