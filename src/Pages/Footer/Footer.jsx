import { FooterLogo } from "./FooterLogo.jsx";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#222222] pt-20 ">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5  flex flex-col  items-center">
            <img
              src="https://i.ibb.co/stj4qZN/White-Green-Simple-Illustrative-Food-Logo-3.png"
              alt=""
              className={"w-20 h-20"}
            />
            <h3 className="font-bold text-xl text-white">Empower AID</h3>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Resources
            </div>
            <a className="my-3 block text-white" href="/#">
              Documentation <span className="text-white text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/#">
              Tutorials <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/#">
              Support <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Support
            </div>
            <a className="my-3 block text-white" href="/#">
              Help Center <span className="text-white text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/#">
              Privacy Policy <span className="text-white text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/#">
              Conditions <span className="text-white text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Contact us
            </div>
            <a className="my-3 block text-white" href="/#">
              XXX XXXX, Floor 4 San Francisco, CA
              <span className="text-white text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/#">
              contact@company.com
              <span className="text-white text-xs p-1"></span>
            </a>
          </div>
        </div>
        <FooterLogo />
      </div>
    </>
  );
};
