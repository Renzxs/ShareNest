import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <div>
        <Navbar />
      </div>

      <Outlet />

      <div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
