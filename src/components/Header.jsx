import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 40);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const menus = [
    {
      name: "Home", path: "/"
    },
    {
      name: "About Us", path: "/about_us"
    },
    {
      name: "Services", path: "/services"
    },
    {
      name: "Contact", path: "/contact-us"
    },
  ];

  return (
    <header className={`header d-flex align-items-center fixed-top ${isScrolled ? "scrolled" : ""}`}>
      <div className="container-fluid container-xl d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto" aria-label="FlowupS Technologies Pvt. Ltd. home">
          <span className="company-wordmark">
            <strong>flowup<span>S</span></strong>
            <small>Technologies Pvt. Ltd.</small>
          </span>
        </a>

        <nav className="navmenu">
          <ul>
            {menus.map((menu, index) => {
              return <li key={index}> <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={menu.path} > {menu.name}</NavLink></li>
            })}
          </ul>
        </nav>

        <a className="cta-btn" href="/contact-us">Talk to Us</a>

      </div>
    </header>
  );
};

export default Header;
