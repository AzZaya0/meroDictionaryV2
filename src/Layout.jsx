import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/NavBar/NavBar";

function Layout() {
  
  return (
    <>
      <NavBar />
      <Outlet/>
      <Footer />
    </>
  );
}

export default Layout;
