import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CloudCheck } from "lucide-react";
import { servicesData } from "../../data/serviceData";
import SoftwareDevelopment from "../pages/SoftwareDevelopement";
import Support from "../pages/Support";





const ServiceDetails = () => {

  const { id } = useParams();

  const service = servicesData.find((s) => s.id === id);

  const [showAllModules, setShowAllModules] = useState(false);

  if (!service) return <h2 className="text-center mt-5">Service Not Found</h2>;

  return (
    <main className="main">

      {/* 🔥 Page Title */}
      <div
        className="page-title dark-background"
        data-aos="fade"
        style={{
          backgroundImage: "url(/images/page-title-bg.webp)",
        }}
      >
        <div className="container position-relative">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li className="current">{service.title}</li>
            </ol>
          </nav>
        </div>
      </div>

{/* ------------------------------------------------------------------- */}

      {service.id === "tally" &&
        <section id="service-details" className="service-details section ">

          <div
            style={{
              background: "#f8fafc",
              paddingTop: "50px",
              paddingBottom: "50px"
            }}
          >
            {/* Tally Customization | Tally Customization | Tally Customization */}
            <div className="container">

              {service.id === "tally" && (
                <>
                  {/* Tally Softwares */}
                  <div className="mb-5">

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h2 className="fw-semibold">Tally Softwares</h2>

                    </div>

                    <div className="row g-4">

                      {service.categories?.[0]?.items?.map((item, i) => (
                        <div className="col-lg-4 col-md-6" key={i}>
                          <div
                            className="card border-0 shadow-sm h-100"
                            style={{
                              borderRadius: "15px",
                              transition: "all 0.3s ease",
                              cursor: "pointer"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-5px)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                            }}
                          >
                            <div className="card-body p-4 ">

                              <div className="mb-3">
                                <i
                                  className={`bi ${item.icon}`}
                                  style={{
                                    fontSize: "20px",
                                    color: "var(--accent-color)",
                                    position: "relative",
                                    backgroundColor: "var(--brand-cyan-soft)",

                                    padding: "5px",
                                    borderRadius: "15%",
                                  }}
                                ></i>
                              </div>

                              <h6 className="fw-bold">
                                {item.name}
                              </h6>

                              <p className="text-muted">
                                {item.description}
                              </p>

                              <Link
                                to={`/services/customization/${item.slug}`}
                                className="text-danger text-decoration-none fw-semibold"
                              >
                                Learn More →
                              </Link>

                            </div>
                          </div>
                        </div>
                      ))}

                    </div>

                  </div>

                  {/* Expert Services */}
                  {/* <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Tally Services</h2>

              </div> */}

                  <div className="row align-items-center mb-5">


                    <div className="col-lg-6">

                      {/* <h5 className="mb-4">
                    Expert Services & Infrastructure
                  </h5> */}
                      <h2 className="mb-4 fw-semibold">Tally Services</h2>

                      <p>
                        We don't just provide software; we build the
                        infrastructure and support systems that ensure
                        your business runs 24/7 without interruption.
                      </p>

                      <div className="mb-4">
                        <h5>Guaranteed Uptime</h5>

                        <p className="text-muted">
                          Our cloud solutions offer 99.9% availability.
                        </p>
                      </div>

                      <div>
                        <h5>On-Demand Support</h5>

                        <p className="text-muted">
                          Remote and onsite experts ready to resolve issues.
                        </p>
                      </div>

                    </div>

                    <div className="col-lg-6">

                      <div
                        className="p-4 text-white mb-3 module-card"
                        style={{
                          background: "var(--brand-primary-dark)",
                          borderRadius: "15px"
                        }}
                      >
                        <h4>Tally on Cloud</h4>

                        <p>
                          Access your data from anywhere securely.
                        </p>

                        <Link
                          to="/services/customization/tally_on_cloud"
                          className="btn btn-danger"
                        >
                          Get a Cloud Demo
                        </Link>

                      </div>

                      <div
                        className="p-4 border module-card"
                        style={{
                          borderRadius: "15px",

                          background: "#eef8fd",


                        }}
                      >
                        <h5>Priority Support</h5>

                        <p>
                          Dedicated support for all technical needs.
                        </p>

                        <Link
                          to="/services/customization/priority_support"
                          className="btn btn-outline-danger"

                        >
                          Contact Support
                        </Link>

                      </div>

                    </div>

                  </div>

                  {/* //////////////////////////////////// Customisation Suite //////////////////////////////////////////////////////// */}


                  <h2 className="text-center fw-semibold">Customisation Suite</h2>


                  <p className="text-muted text-center">
                    Extend Tally with specialised modules.
                  </p>

                  <div className="row g-4">

                    <div className="col-lg-6">

                      <div
                        className="card border-0 shadow-sm h-100"
                        style={{
                          borderRadius: "15px",
                          transition: "0.3s"
                        }}
                      >

                        <div className="card-body p-4 module-card"
                          style={{
                            background: "#eef8fd",
                            borderRadius: "15px"
                          }}>

                          <i
                            className="bi bi-clock-history "
                            style={{
                              fontSize: "32px",
                              color: "var(--accent-color)"
                            }}
                          ></i>

                          <h4 className="fw-bold mt-3">
                            Audit Trail
                          </h4>

                          <p className="text-muted">
                            Track every edit, delete and modification with complete audit logs.
                          </p>

                          <Link
                            to="/services/customization/audit_trail"
                            className="text-danger text-decoration-none fw-semibold"
                          >
                            Learn More →
                          </Link>

                        </div>
                      </div>

                    </div>
                    {/* school */}
                    <div className="col-lg-6">

                      <div
                        className="card border-0 shadow-sm mb-4"
                        style={{
                          borderRadius: "15px",

                        }}
                      >
                        <div className="card-body p-4 module-card">

                          <i
                            className="bi bi-mortarboard"
                            style={{
                              fontSize: "32px",
                              color: "var(--accent-color)"
                            }}
                          ></i>

                          <h4 className="fw-bold mt-3">
                            School & College ERP
                          </h4>

                          <p className="text-muted">
                            Academic, fee management and student records integrated with Tally.
                          </p>

                          <Link
                            to="/services/customization/school_college"
                            className="text-danger text-decoration-none fw-semibold"
                          >
                            Learn More →
                          </Link>

                        </div>
                      </div>



                      <div
                        className="p-4 text-white"
                        style={{
                          background: "var(--brand-primary-dark)",
                          borderRadius: "15px"
                        }}
                      >
                        <h4>API Integration</h4>

                        <p>
                          Connect websites, CRM and apps with Tally.
                          Track every edit, delete and modification.
                          Track every edit, delete and modification.
                          Track every edit, delete and modification.

                        </p>
                      </div>

                    </div>

                  </div>


                  <div className="row g-3 mt-5">
                    <h2 className="text-center fw-semibold">TALLY CUSTOMIZATION CATEGORIES</h2>
                    {service.categories?.[2]?.items?.map((group) => (
                      <div key={group.category} className="mb-5">
                        <h3 className="fw-bold mb-4">{group.category}</h3>

                        <div className="row g-4">
                          {group.services.map((item) => (
                            <div className="col-lg-3 col-md-6 " key={item.slug}>
                              <Link
                                to={`/services/customization/${item.slug}`}
                                className="text-decoration-none"
                              >
                                <div className="card border-1px shadow-sm  module-card " style={{
                                  borderRadius: "5px",
                                  cursor: "pointer",
                                  paddingBottom: "15px",
                                }}>
                                  <div style={{ alignItems: "center", padding: "7px" }}>
                                    <i className={`bi ${item.icon || "bi-grid"}`} style={{
                                      fontSize: "20px", color: "var(--accent-color)"
                                      , marginLeft: "15px", marginRight: "15px"
                                    }}></i>

                                    <h6
                                      style={{
                                        lineHeight: "1.5",
                                        paddingLeft: "15px",
                                        fontWeight: "600",
                                        minHeight: "45px",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",

                                      }}
                                    >{item.name}</h6>

                                    {/* <p className="text-muted">
                                    {item.description}
                                  </p> */}


                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}



                  </div>

                  <div className="text-right mt-4">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => setShowAllModules(!showAllModules)}
                    >
                      {showAllModules ? "Show Less" : "See All Modules"}
                    </button>
                  </div>
                </>
              )}


            </div>
          </div>
        </section >
      }
      {service.id === "crm" && (
        <>
          <SoftwareDevelopment />
        </>
      )}
      {service.id === "support_implementation" && (
        <>
          <Support/>
        </>
      )}



    </main >
  );
};

export default ServiceDetails;
