import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Layout = () => {
  const location = useLocation();
  const main = location.pathname === "/";
  const bookgraph = location.pathname === "/bookgraph";
  const bookreview = location.pathname === "/bookreview";
  const profile = location.pathname === "/profile";

  return (
    <div id="wrapper">
      {/* 뒤로가기 버튼 필요한 페이지에 헤더 노출 */}
      {/* {!(main || bookgraph || bookreview || profile) ? <Header /> : <></>} */}

      {/* 가운데정렬 태그 */}
      <center>
        <Outlet />
      </center>

      <Navbar />
    </div>
  );
};

export default Layout;
