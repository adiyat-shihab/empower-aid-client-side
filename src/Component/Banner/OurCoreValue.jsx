export const OurCoreValue = () => {
  return (
    <>
      <div
        className={
          " flex flex-col-reverse xl:flex-row justify-between items-center mb-36"
        }
      >
        <div
          className={"xl:px-20 px-6 xl:py-24 bg-[#3BCF93]  space-y-6 h-[331px]"}
        >
          <h1 className={"text-white text-4xl font-bold mt-16"}>
            Our Core Value. Our Foundation.
          </h1>
          <p className={"text-white text-xl xl:w-[778px] "}>
            Charity law within the UK varies among England and Wales, Scotland
            and Northern Ireland, but the fundamental principles are the same.
            Most organizations that are charities.
          </p>
        </div>
        <div
          className={
            " xl:flex hidden flex-col-reverse xl:flex-row justify-center items-center"
          }
        >
          <img
            src="https://www.globalgiving.org/pfil/32614/pict_large.jpg"
            alt=""
            className={"h-[20.65rem] w-[26.5rem]"}
          />
          <img
            className={"w-[38.5rem] h-[20.65rem]"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNwbVK8ntG684gZkDyHl4qJVfgsuB527X2E4ixp5I6ERgsiQy0CwfOLOWyU8SC9y5P1Fs&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
