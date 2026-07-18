import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useLayoutEffect } from "react";

import MainLayout from "./layouts/MainLayout";
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import OurTeam from "./components/OurTeam";
import Product from "./components/Product";


import Service from './pages/Services'
import ServiceDetails from "./components/ServiceDetails";
import CustomizationPage from "./components/CustomizationPage";


function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes >
          {/* Routes */}
          <Route path="/" element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path="services" element={<Service />} />
            <Route path="about_us" element={<About />} />
            <Route path="our-team" element={<OurTeam />} />
            <Route path="contact-us" element={<ContactUs />} />
             <Route path="product" element={<Product />} />
            <Route path="services/customization" element={<Navigate to="/services/tally" replace />} />
            <Route path="services/customization/:id" element={<CustomizationPage />}/>
            <Route path="/services/:id" element={<ServiceDetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
