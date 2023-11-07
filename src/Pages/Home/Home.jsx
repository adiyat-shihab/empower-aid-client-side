import { Banner } from "../../Component/Banner/Banner.jsx";
import { Feature } from "../../Component/Feature/Feature.jsx";
import { Helmet } from "react-helmet";
import { OurCoreValue } from "../../Component/Banner/OurCoreValue.jsx";

export const Home = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Empower Hive | Home</title>
      </Helmet>
      <Banner />
      <Feature />
      <OurCoreValue />
    </>
  );
};
