import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import MainLayout from "./layouts/MainLayout";
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Service from './pages/Services'
import ServiceDetails from "./components/ServiceDetails";
import CustomizationPage from "./components/CustomizationPage";

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
        <Routes >
          {/* Routes */}
          <Route path="/" element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path="about_us" element={<About />} />
            <Route path="services" element={<Service />} />
            <Route path="contact-us" element={<ContactUs />} />
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
