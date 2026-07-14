// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="d-flex align-items-center"
//       style={{
//         backgroundImage: `url(/images/hero-bg.jpg)`
//       }}
//     >
//       <div className="container text-center">
//         <h1>Better digital experience with Dewi</h1>
//         <h2>We are team of talented designers</h2>
//         <a href="#about" className="btn-get-started">
//           Get Started
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
const Hero = () => {
  return (
    <section
      id="hero"
      className="hero section dark-background"
      style={{
        // backgroundImage: "https://plus.unsplash.com/premium_photo-1670213989456-17c05e5f16e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
        backgroundImage: "url(/images/hero-bg.jpg)",
        backgroundSize: "cover"
      }}
    >
      <div className="hero-depth-scene" aria-hidden="true">
        <span className="hero-depth-orbit orbit-one" />
        <span className="hero-depth-orbit orbit-two" />
        <span className="hero-depth-panel panel-one">
          <span className="depth-signal"><b /><b /><b /></span>
        </span>
        <span className="hero-depth-panel panel-two">
          <span className="depth-flow"><b /><b /><b /></span>
        </span>
        <span className="hero-depth-panel panel-three">
          <span className="depth-chart"><b /><b /><b /><b /></span>
        </span>
      </div>
      <div className="container text-center">
        <h2  className="text-[55px]!">Tally Customization & Software Development
          <br />
          <span>
            for Growing Businesses
          </span></h2>
        <p>
          FlowupS Technologies Pvt. Ltd. helps businesses build practical Tally solutions,
          custom software, integrations, dashboards, and support systems that match real
          business workflows.
        </p>
        {/* <p>
          <small>
            Authorized Tally Partners providing seamless integration, customization, and 24/7 technical support.
          </small>
        </p> */}

        <div className="mt-4">
          <a href="/contact-us" className="btn-get-started me-3">
            Discuss Your Requirement
          </a>

          <a href="#features" className="btn-watch-video">
            Explore Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
