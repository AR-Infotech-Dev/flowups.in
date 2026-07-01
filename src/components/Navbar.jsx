const Header = () => {
  return (
    <header className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center">

        <a href="/" className="logo d-flex align-items-center me-auto">
            <img src="/images/AR_logo.jpg" alt="" />
          <h1 className="text-9xl">AR infotech</h1>
        </a>

        <nav className="navmenu">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <a className="cta-btn" href="#about">Get Started</a>

      </div>
    </header>
  );
};

export default Header;