import { Link } from "react-router-dom";
// import About from "../pages/About";

const About = () => {
  return (
    <>
      <main className="about">
        {/* 🔥 Page Title */}
        <div
          className="page-title dark-background"
          data-aos="fade"
          style={{
            backgroundImage: "url(/images/page-title-bg.webp)",
          }}
        >
          <div className="container position-relative">
            <h1>About Us</h1>
            <p></p>
            <nav className="breadcrumbs">
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">About</Link></li>
              </ol>
            </nav>
          </div>
        </div>
      </main>
    </>
    // <section id="about" className="about section">
    //   <div className="container">
    //     <div className="row gy-4">

    //       <div className="col-lg-6">
    //         <h3>Voluptatem dignissimos provident laboris</h3>
    //         <img
    //           src="/images/about.jpg"
    //           className="img-fluid rounded-4 mb-4"
    //         />
    //         <p>Lorem ipsum dolor sit amet...</p>
    //       </div>

    //       <div className="col-lg-6">
    //         <p className="fst-italic">
    //           Lorem ipsum dolor sit amet...
    //         </p>

    //         <ul>
    //           <li>✔ Ullamco laboris nisi ut aliquip</li>
    //           <li>✔ Duis aute irure dolor</li>
    //           <li>✔ Ullamco laboris nisi ut aliquip</li>
    //         </ul>
    //       </div>

    //     </div>
    //   </div>
    // </section>
  );
};

export default About;