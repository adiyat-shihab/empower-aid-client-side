import "./App.css";
import { Navbar } from "./Pages/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { Footer } from "./Pages/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
