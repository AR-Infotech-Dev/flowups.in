// import { Link } from "react-router-dom";
// // import About from "../pages/About";

// const DetailCard = ()=>
// {
//   return(<></>);
// }


// const About = () => {
//   return (
//     <>
//       <main className="about">

//         <div
//           className="page-title dark-background"
//           data-aos="fade"
//           style={{
//             backgroundImage: "url(/images/page-title-bg.webp)",
//           }}
//         >
//           <div className="container position-relative">
//             <h1>About Us</h1>
//             <p></p>
//             <nav className="breadcrumbs">
//               <ol>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about_us">About</Link></li>
//               </ol>
//             </nav>
//           </div>
//         </div>
//         <div className="container">
//           <div className="row px-4 pt-5 pb-4 ">
//             <div className="col-md-12">
//               <div className=" about-logo">
//                 <span className="company-wordmark is-about">
//                   <strong>flowup<span>S</span></strong>
//                   <small>Technologies Pvt. Ltd.</small>
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="row px-4 p-5 pt-3">
//             <div className="col-md-8 my-2">
//               <div className="content">
//                 <h2 className="title">
//                   FlowupS Technologies Pvt. Ltd.
//                 </h2>
//                 <p className="font-semibold text-justify" >
//                   FlowupS Technologies Pvt. Ltd. is a technology company creating practical software products and tailored digital solutions. Our product portfolio includes CallDesk and Sathi Connect, supported by web development, software development, integration, customization, and cloud services.
//                 </p> 
//                 <p className="font-semibold text-justify">
//                   For over 30 years, we have been the key to our clients’ business success. Our commitment to delivering exceptional sales, service, and solutions has made us a renowned service provider known for our speed, reliability, and innovation. Our support channels are open 24/7, ensuring we are always available to serve your needs.
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-4 my-2">
//               <div>
//                 <h2>Our <span className="bg-blue-400 py-1 px-2">Vision</span></h2>
//                 <p className="font-semibold text-justify">To be the go-to partner for businesses seeking cutting-edge technologies, seamless integrations, and exceptional support, enabling them to thrive in the ever-changing business landscape</p>
//               </div>
//               <div>
//                 <h2>Our <span className="bg-blue-400 py-1 px-2">Mission</span></h2>
//                 <p className="font-semibold text-justify ">To be at the forefront of empowering businesses worldwide with innovative, adaptable, and sustainable solutions that drive growth, efficiency, and success.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//     // <section id="about" className="about section">
//     //   <div className="container">
//     //     <div className="row gy-4">

//     //       <div className="col-lg-6">
//     //         <h3>Voluptatem dignissimos provident laboris</h3>
//     //         <img
//     //           src="/images/about.jpg"
//     //           className="img-fluid rounded-4 mb-4"
//     //         />
//     //         <p>Lorem ipsum dolor sit amet...</p>
//     //       </div>

//     //       <div className="col-lg-6">
//     //         <p className="fst-italic">
//     //           Lorem ipsum dolor sit amet...
//     //         </p>

//     //         <ul>
//     //           <li>✔ Ullamco laboris nisi ut aliquip</li>
//     //           <li>✔ Duis aute irure dolor</li>
//     //           <li>✔ Ullamco laboris nisi ut aliquip</li>
//     //         </ul>
//     //       </div>

//     //     </div>
//     //   </div>
//     // </section>
//   );
// };

// export default About;



import { Link } from "react-router-dom";
// import About from "../pages/About";

const About = () => {
  return (
    <>
    <section className="about-hero section">
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* Left Content */}
          <div
            className="col-lg-7"
            data-aos="fade-right"
          >
            <span className="about-hero-tag">
              About Us
            </span>

            <h1 className="about-hero-title">
              About FlowupS Technologies Pvt. Ltd.
            </h1>

            <p className="about-hero-text">
              FlowupS Technologies Pvt. Ltd. is a business technology company focused on Tally customization,
              integration, and custom software development.
              We help businesses build systems that match their actual workflow,
              improve operational control, and reduce manual effort.
            </p>

            <div className="about-hero-buttons">
              <a href="#story" className="btn btn-primary">
                Our Story
              </a>

              <a href="#expertise" className="btn btn-outline-primary">
                View Expertise
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="col-lg-5"
            data-aos="fade-left"
          >
            <div className="about-hero-image">
              <img
                src="/images/aboutuss.jpg"
                alt="FlowupS Technologies"
                className="img-fluid rounded-4"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Expertise in Customization */ }
  <section className="about-intro section">
    <div className="container">
      <div className="row justify-content-center">

        <div className="col-lg-20">
          <div
            className="about-intro-card"
            data-aos="fade-up"
          >
            <h2>Expertise in Customization</h2>

            <p>
              At FlowupS Technologies, our core expertise lies in Tally
              customization and bespoke software development. We understand that
              every business has unique operational requirements, and standard
              software does not always fit every workflow. Our solutions are
              designed to align technology with your business processes, making
              day-to-day operations simpler, more efficient, and easier to manage.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
  </>
  );
}

export default About;