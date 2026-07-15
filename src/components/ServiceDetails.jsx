import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CloudCheck } from "lucide-react";
import { servicesData } from "../../data/serviceData";
import SoftwareDevelopment from "../pages/SoftwareDevelopement";

const categoryIcons = {
  "Industry-Specific Business Modules": "bi-buildings",
  "Billing, Invoice & POS Customization": "bi-receipt-cutoff",
  "Inventory, Stock & Manufacturing": "bi-box-seam",
  "Reports, MIS & Business Analysis": "bi-bar-chart-line",
  "Security, Controls & Approval Workflow": "bi-shield-check",
  "GST, Tax & Compliance": "bi-file-earmark-check",
  "Import, Export, Email & Document Automation": "bi-arrow-left-right",
  "Payment, Receipt & Outstanding Management": "bi-wallet2",
  "Workflow, Task & Utility Modules": "bi-diagram-3",
};





const ServiceDetails = () => {

  const { id } = useParams();

  const service = servicesData.find((s) => s.id === id);
  const [activeCat, setActiveCat] = useState('');
  const [showAllModules, setShowAllModules] = useState(false);

  if (!service) return <h2 className="text-center mt-5">Service Not Found</h2>;
  useEffect(() => {
    if (service?.categories?.[2]?.items?.length) {
      setActiveCat(service.categories[2].items[0].category);
    }
  }, [service]);

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
                        </p>
                      </div>

                    </div>

                  </div>

                  <div className="mt-5 p-3  sm:p-5" >
                    <div className="mb-5 text-center">
                      <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "var(--accent-color)", backgroundColor: "color-mix(in srgb, var(--accent-color), transparent 90%)" }}>
                        <i className="bi bi-grid-1x2-fill" /> Custom Tally Solutions
                      </span>
                      <h2 className="mb-1 mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">Tally customization categories</h2>
                      <p className="mb-0 text-sm text-slate-500">Choose a category to explore the modules built for your business.</p>
                    </div>

                    <div className="mx-auto max-w-6xl space-y-3">
                      {service.categories?.[2]?.items?.map((group) => {
                        const isOpen = activeCat === group.category;
                        const categoryIcon = categoryIcons[group.category] || "bi-grid-1x2-fill";

                        return (
                          <div
                            key={group.category}
                            className="overflow-hidden rounded-sm border bg-white shadow-[0_6px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(7,61,112,0.12)]"
                            style={{
                              borderColor: isOpen ? "var(--accent-color)" : "#e2e8f0",
                              overflowAnchor: "none",
                            }}
                          >
                            <button
                              type="button"
                              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors hover:bg-slate-50 sm:px-5"
                              onClick={() => setActiveCat(isOpen ? "" : group.category)}
                              aria-expanded={isOpen}
                              style={{ backgroundColor: isOpen ? "color-mix(in srgb, var(--accent-color), transparent 93%)" : "" }}
                            >
                              <span className="flex min-w-0 items-center gap-3 text-sm font-semibold text-slate-800 sm:text-base">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white shadow-sm" style={{ background: "linear-gradient(135deg, var(--brand-primary-dark), var(--accent-color))" }}>
                                  <i className={`bi ${categoryIcon}`} />
                                </span>
                                <span className="truncate">{group.category}</span>
                              </span>
                              <span className="flex shrink-0 items-center gap-2">
                                <span className="hidden rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500 sm:inline">{group.services.length} modules</span>
                                <i className={`bi bi-chevron-down text-base transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} style={{ color: "var(--accent-color)" }} />
                              </span>
                            </button>

                            <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                              <div className="overflow-hidden">
                                <div className="grid grid-cols-1 gap-2.5 border-t border-slate-100 bg-slate-50/80 p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-3">
                                  {group.services.map((item) => (
                                    <Link
                                      key={item.slug}
                                      to={`/services/customization/${item.slug}`}
                                      className="group flex min-h-[65px] items-center gap-3 rounded-sm border border-slate-200 bg-white px-3.5 py-2 text-decoration-none shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_10px_20px_rgba(7,61,112,0.12)]"
                                    >
                                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md" style={{ color: "var(--accent-color)", backgroundColor: "color-mix(in srgb, var(--accent-color), transparent 91%)" }}>
                                        <i className={`bi ${item.icon || "bi-grid"} text-base`} />
                                      </span>
                                      <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
                                        <span className="line-clamp-2 text-sm font-semibold leading-5 text-slate-700 transition-colors duration-200 group-hover:text-sky-700">{item.name}</span>
                                        <i className="bi bi-arrow-up-right shrink-0 text-sm text-slate-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
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



    </main >
  );
};

export default ServiceDetails;
