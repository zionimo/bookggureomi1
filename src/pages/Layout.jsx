import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div id="wrapper">
      <center>
        <Outlet />
      </center>

      <Navbar />
    </div>
  );
};

export default Layout;
