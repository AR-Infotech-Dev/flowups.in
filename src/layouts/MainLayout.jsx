import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
    </>
  );
};

export default MainLayout;