import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturedServices from "./FeaturedServices";
import Leadership from "./Leadership";
const features = [
  {
    icon: "bi-window-stack",
    title: "Web & Product Engineering",
    text: "Modern websites and software products designed around real business goals.",
  },
  {
    icon: "bi-boxes",
    title: "Business Software",
    text: "Focused systems that simplify operations, ownership, and everyday team workflows.",
  },
  {
    icon: "bi-diagram-3",
    title: "System Integration",
    text: "Practical connections between your tools, data, teams, and business processes.",
  },
  {
    icon: "bi-sliders",
    title: "Customization",
    text: "Solutions shaped to match your existing workflow instead of forcing a generic process.",
  },
  {
    icon: "bi-cloud-check",
    title: "Cloud Solutions",
    text: "Reliable, accessible infrastructure planned for performance and sustainable growth.",
  },
  {
    icon: "bi-headset",
    title: "Implementation & Support",
    text: "Hands-on guidance through discovery, setup, onboarding, training, and improvement.",
  },
];

// **********************************************************************************************************************

const whyflowups = [
  {
    icon: "bi bi-file-earmark-code",
    title: "Tally Specialization",
    text: "Strong experience in Tally customization and business logic.",
  },
  {
    icon: "bi bi-diagram-3",
    title: "Workflow Intelligence",
    text: "Ability to understand complex workflows and convert them into software structure.",
  },
  {
    icon: "bi bi-window-stack",
    title: "Unified Ecosystem",
    text: "Tally and custom software development under one team.",
  },
  {
    icon: "bi bi-gear-wide-connected",
    title: "Practical Execution",
    text: "Practical approach to requirement gathering and implementation.",
  },
  {
    icon: "bi bi-translate",
    title: "Bilingual Support",
    text: "Support for both technical and business-side discussions.",
  },
  {
    icon: "bi bi-diagram-2",
    title: "Schema Architecting",
    text: "Capability to build full schemas for new software requirements.",
  },
  {
    icon: "bi bi-code-slash",
    title: "Full-Stack Power",
    text: "Experienced development team for web, mobile, TDL, and full stack projects.",
  },
  {
    icon: "bi bi-binoculars",
    title: "Long-term Vision",
    text: "Long-term support and enhancement mindset.",
  },
  {
    icon: "bi bi-people",
    title: "Corporate Synergy",
    text: "Corporate communication with practical execution.",
  },
];

// *************************************************************************************************************************

const workflow = [
  ["01", "Requirement Study", "We understand your business process, current software usage, pain points, reporting needs, users, controls, and expected output."],
  ["02", "Logic & Schema Planning", "We prepare the business logic, data structure, module flow, user roles, reports, and integration requirements before development starts."],
  ["03", "Solution Design", "We finalize the screens, fields, approval flow, entry process, reports, print formats, and automation rules."],
  ["04", "Development", "Our development team builds the TDL module, Tally customization, web application, mobile app, API, or integration as per the approved scope."],
  ["05", "Testing & Refinement", "We test the solution with practical business scenarios, sample data, edge cases, user roles, and report outputs."],
  ["06", "Implementation & Training", "We deploy the solution, configure it for your workflow, and train your team so they can use it confidently."],
  ["07", "Support & Improvement", "After implementation, we continue to support fixes, improvements, enhancements, and future changes as your business grows."],
];

// **********************************************************************************************************************

const support = [
  {
    icon: "bi bi-life-preserver",
    title: "Tally customization support",
    text: "Expert guidance on tailoring your Tally environment to specific operational needs.",
  },
  {
    icon: "bi bi-bug",
    title: "TDL issue resolution",
    text: "Debugging and optimizing Tally Definition Language scripts for seamless performance.",
  },
  {
    icon: "bi bi-tools",
    title: "Software bug fixing",
    text: "Rapid identification and patching of software anomalies to minimize downtime.",
  },
  {
    icon: "bi bi-stars",
    title: "Feature enhancements",
    text: "Iterative updates to scale your software capabilities alongside your growing business.",
  },
  {
    icon: "bi bi-person-video3",
    title: "User training",
    text: "Comprehensive workshops to ensure your team masters every aspect of the new system.",
  },
  {
    icon: "bi bi-pencil-square",
    title: "Data correction guidance",
    text: "Professional oversight for maintaining data integrity and fixing ledger discrepancies.",
  },
  {
    icon: "bi bi-diagram-3",
    title: "API and integration monitoring",
    text: "Real-time tracking of integration health to ensure continuous data flow between apps.",
  },
  {
    icon: "bi bi-file-earmark-bar-graph",
    title: "Report changes",
    text: "Modifying existing analytical reports to provide better business insights.",
  },
  {
    icon: "bi bi-printer",
    title: "Print format changes",
    text: "Updating document designs for invoices, vouchers, and statements to match branding.",
  },
  {
    icon: "bi bi-headset",
    title: "Remote and client-side coordination",
    text: "Flexible support options via remote desktop or on-site visits based on urgency.",
  },
];

// *************************************************************************************************************************

const useCases = [
  ["bi-building", "Growing Businesses", "Build a stronger digital foundation for the next stage of growth."],
  ["bi-briefcase", "Professional Teams", "Create clearer workflows, ownership, and customer experiences."],
  ["bi-shop", "SMEs", "Adopt useful technology without unnecessary enterprise complexity."],
  ["bi-gear-wide-connected", "Operations", "Connect business processes, tools, information, and accountability."],
];

const integrations = [
  ["bi-calculator", "Tally"],
  ["bi-diagram-3", "CRM"],
  ["bi-whatsapp", "WhatsApp"],
  ["bi-envelope", "Email"],
  ["bi-braces", "API"],
  ["bi-cloud", "Cloud"],
];

const faqs = [
  [
    "Can FlowupS customize Tally Prime as per our business process?",
    "Yes. FlowupS Technologies develops custom TDL modules and Tally Prime customizations for billing, inventory, reports, security, approvals, industry workflows, and integrations.",
  ],
  [
    "Can you integrate Tally with our existing software?",
    "Yes. We can integrate Tally with CRM, ERP, mobile apps, web portals, e-commerce platforms, POS systems, payroll software, inventory tools, and custom applications using suitable integration methods.",
  ],
  [
    "Do you build custom software from scratch?",
    "Yes. We develop custom web applications, mobile applications, dashboards, CRM systems, ERP modules, support systems, and workflow-based business software.",
  ],
  [
    "Can you prepare the complete software logic and schema?",
    "Yes. We can study your business requirement and prepare the complete logic, module structure, data flow, user roles, reports, and development roadmap.",
  ],
  [
    "Do you provide support after implementation?",
    "Yes. We provide support for training, bug fixing, enhancements, report changes, Tally customization changes, integration monitoring, and future improvements.",
  ],
  [
    "Can you build industry-specific Tally modules?",
    "Yes. We can build Tally modules for education, hospital, garment, petrol pump, APMC/ADAT, jewellery, dairy, retail, distribution, manufacturing, and other industries.",
  ],
  [
    "Is CallDesk suitable for customer support teams?",
    "Yes. CallDesk is useful for businesses that need to manage support tickets, customer complaints, service requests, assignments, follow-ups, and support team performance.",
  ],
  [
    "What is Sathi Connect?",
    "Sathi Connect is a connectivity bridge between the Seeds Portal and Tally Prime. It helps reduce manual entry and improves data movement between portal workflows and Tally.",
  ],
];

function ProductPreview() {
  return (
    <div className="product-preview" aria-label="Flowups CallDesk dashboard preview">
      <div className="preview-window-bar">
        <span />
        <span />
        <span />
        <small>Flowups CallDesk</small>
      </div>
      <div className="preview-layout">
        <aside className="preview-sidebar">
          <div className="preview-brand-mark">F</div>
          {["bi-grid", "bi-telephone", "bi-people", "bi-bar-chart"].map((icon, index) => (
            <i className={`bi ${icon} ${index === 1 ? "active" : ""}`} key={icon} />
          ))}
        </aside>
        <div className="preview-main">
          <div className="preview-heading">
            <div>
              <small>Today</small>
              <strong>Call overview</strong>
            </div>
            <span className="preview-avatar">AR</span>
          </div>
          <div className="preview-metrics">
            <div><span>New leads</span><strong>24</strong><small>+8 today</small></div>
            <div><span>Follow-ups</span><strong>18</strong><small>6 priority</small></div>
            <div><span>Connected</span><strong>72%</strong><small>Live status</small></div>
          </div>
          <div className="preview-grid">
            <div className="preview-chart-card">
              <div className="preview-card-title"><strong>Weekly activity</strong><span>7 days</span></div>
              <div className="preview-bars">
                {[38, 58, 45, 74, 64, 88, 72].map((height, index) => (
                  <i style={{ height: `${height}%` }} key={`${height}-${index}`} />
                ))}
              </div>
            </div>
            <div className="preview-list-card">
              <strong>Next follow-ups</strong>
              {["New enquiry", "Demo planned", "Proposal review"].map((item, index) => (
                <div key={item}>
                  <span className={`preview-status status-${index + 1}`} />
                  <p><b>{item}</b><small>{index + 1}:30 PM</small></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const productScreens = [
  {
    label: "Dashboard",
    title: "A clear operational overview",
    description: "See tickets, workload, users, companies, and progress from one focused dashboard.",
    image: "/images/flowups-dashboard.png",
  },
  {
    label: "Ticket Table",
    title: "Every ticket, easy to review",
    description: "Search, filter, assign, prioritize, and review customer tickets in a structured table.",
    image: "/images/flowups-ticket-table.png",
  },
  {
    label: "Kanban Board",
    title: "Work moves visibly",
    description: "Track open, in-progress, pending, and closed work through a clean Kanban workflow.",
    image: "/images/flowups-ticket-kanban.png",
  },
];

function ProductScreenshotShowcase() {
  const [activeScreen, setActiveScreen] = useState(0);
  const screen = productScreens[activeScreen];

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveScreen((current) => (current + 1) % productScreens.length);
    }, 3800);

    return () => window.clearInterval(rotation);
  }, []);

  return (
    <div className="product-screenshot-showcase">
      <div className="product-screen-stack" aria-label="Flowups CallDesk product screenshots">
        {productScreens.map((item, index) => (
          <div
            className={`product-screen-frame ${activeScreen === index ? "is-active" : "is-hidden"}`}
            aria-hidden={activeScreen !== index}
            key={item.label}
          >
            <img src={item.image} alt={activeScreen === index ? `Flowups CallDesk ${item.label} screen` : ""} />
          </div>
        ))}
        <div className="product-screen-progress" aria-hidden="true">
          {productScreens.map((item, index) => (
            <span className={activeScreen === index ? "active" : ""} key={item.label} />
          ))}
        </div>
      </div>

      <div className="product-screen-caption" key={screen.label}>
        <div>
          <span>Product view</span>
          <h3>{screen.title}</h3>
        </div>
        <p>{screen.description}</p>
      </div>
    </div>
  );
}

const sathiScreens = [
  {
    image: "/images/sathi-connect-dashboard.png",
    label: "Integration dashboard",
  },
  {
    image: "/images/sathi-connect-tally.png",
    label: "SATHI to Tally workspace",
  },
];

function SathiScreenshotShowcase() {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveScreen((current) => (current + 1) % sathiScreens.length);
    }, 4200);

    return () => window.clearInterval(rotation);
  }, []);

  return (
    <div className="sathi-screen-showcase" aria-label="Sathi Connect product screenshots">
      <div className="sathi-screen-stack">
        {sathiScreens.map((screen, index) => (
          <div
            className={`sathi-screen-frame ${activeScreen === index ? "is-active" : "is-hidden"}`}
            aria-hidden={activeScreen !== index}
            key={screen.image}
          >
            <img src={screen.image} alt={activeScreen === index ? `Sathi Connect ${screen.label}` : ""} />
          </div>
        ))}
        <div className="sathi-screen-label">
          <span>Live product view</span>
          <strong>{sathiScreens[activeScreen].label}</strong>
        </div>
        <div className="product-screen-progress" aria-hidden="true">
          {sathiScreens.map((screen, index) => (
            <span className={activeScreen === index ? "active" : ""} key={screen.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LandingSections() {
  return (
    <>
      <section className="home-trust-strip">
        <div className="container">
          <p>Practical technology for ambitious businesses</p>
          <div>
            {[
              ["bi-box", "Products"],
              ["bi-code-slash", "Engineering"],
              ["bi-diagram-3", "Integrations"],
              ["bi-headset", "Support"],
            ].map(([icon, label]) => (
              <span key={label}><i className={`bi ${icon}`} />{label}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="product-about section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="home-eyebrow">Tally, Integration & Software Solutions</span>
              <h2>FlowupS Technologies delivers Tally expertise, custom software, and seamless integration solutions with end-to-end project support.</h2>
              <p className="product-about-lead">
                FlowupS Technologies combines Tally expertise with custom software development to create practical business solutions,
                seamless integrations, & automation systems backed by end-to-end project support.
              </p>
              <div className="product-checks">
                <span><i className="bi bi-check2-circle" />Business-first product thinking</span>
                <span><i className="bi bi-check2-circle" />Flexible technology solutions</span>
                <span><i className="bi bi-check2-circle" />Long-term implementation support</span>
              </div>
              <div className="company-about-meta">
                <div><strong>02</strong><span>Purpose-built<br />products</span></div>
                <div><strong>360°</strong><span>Technology<br />delivery</span></div>
              </div>
              <Link className="home-primary-link" to="/about_us">
                Know our company <i className="bi bi-arrow-right" />
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="company-portfolio-panel">
                <div className="company-panel-head"><span>Company portfolio</span><strong>Products + Solutions</strong></div>
                <span className="company-product-pill pill-calldesk"><i className="bi bi-telephone" />CallDesk</span>
                <span className="company-product-pill pill-sathi"><i className="bi bi-arrow-left-right" />Sathi Connect</span>
                <div className="company-panel-core"><span>FlowupS</span><small>Technologies Pvt. Ltd.</small></div>
                <div className="company-panel-items">
                  <div><i className="bi bi-box" /><span>Products</span><strong>CallDesk<br />Sathi Connect</strong></div>
                  <div><i className="bi bi-code-square" /><span>Solutions</span><strong>Web, software<br />and cloud</strong></div>
                  <div><i className="bi bi-intersect" /><span>Expertise</span><strong>Integration<br />and support</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-products section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Products</h2>
          <p>Purpose-built products from FlowupS Technologies</p>
        </div>
        <div className="container">
          <article className="company-product company-product-calldesk" data-aos="fade-up">
            <div className="company-product-copy">
              <span className="home-eyebrow">Product 01</span>
              <h3>CallDesk</h3>
              <p>A focused workspace for calls, customer context, follow-ups, tickets, and team performance.</p>
              <Link to="/Product" className="home-primary-link">Explore CallDesk <i className="bi bi-arrow-right" /></Link>
            </div>
            <ProductScreenshotShowcase />
          </article>

          <article className="company-product company-product-sathi" data-aos="fade-up">
            <SathiScreenshotShowcase />
            <div className="company-product-copy">
              <span className="home-eyebrow">Product 02</span>
              <h3>Sathi Connect</h3>
              <p>A dedicated integration control room that connects SATHI and Tally for bills, orders, mappings, reports, and operational visibility.</p>
              <Link to="/contact-us" className="home-primary-link">Discover Sathi Connect <i className="bi bi-arrow-right" /></Link>
            </div>
          </article>
        </div>
      </section>

      <section id="features" className="home-features section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Capabilities</h2>
          <p>From product ideas to dependable business technology</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            {features.map((feature, index) => (
              <div className="col-lg-4 col-md-6" key={feature.title} data-aos="fade-up" data-aos-delay={index * 60}>
                <article className="home-feature-card h-100">
                  <div><i className={`bi ${feature.icon}`} /></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedServices />

{/* ******************************************************************************************************************/}
      <section id="whyflowups" className="home-whyus section light-blue-background">
        <div className="container">
          <div className="why-flowups-header" data-aos="fade-up">
            <span className="home-eyebrow">Our Distinction</span>
              <p>Why Businesses Choose FlowupS</p>
              <a>FlowupS Technologies combines Tally expertise, software development
              capability, practical business understanding, and strong client
              coordination. This helps us deliver solutions that are not only
              technically correct, but also useful in daily operations.</a>
          </div>

          <div className="row gy-4 mt-5">
            {whyflowups.map((whyflowups, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={whyflowups.title}
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <article className="home-feature-card h-100">
                  <div>
                    <i className={`bi ${whyflowups.icon}`} />
                  </div>

                  <h3>{whyflowups.title}</h3>

                  <p>{whyflowups.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ********************************************************************************************************** */}

      <section className="home-workflow section dark-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>How We Work</h2>
          <p>Our process is designed <br />to deliver practical solutions aligned with your business workflow,
            from understanding requirements to development.</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            {workflow.map(([number, title, text], index) => (
              <div className="col-lg-3 col-md-6" key={number} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="home-workflow-step h-100">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ******************************************************************************************************************/}
      <section id="support" className="home-support section light-blue-background">
        <div className="container">
          <div className="support-header" data-aos="fade-up">
            <span className="home-eyebrow">Reliability That Never Quits</span>
              <p>Support That Continues After Delivery</p>
              <a>FlowupS Technologies believes that software delivery is not the end of the relationship. 
                Businesses need support during adoption, training, issue resolution, version changes, and future improvements. 
                Our team helps clients with practical support so that their solution continues to work smoothly.</a>
          </div>

          <div className="row gy-4 mt-5 justify-center">
            {support.map((support, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={support.title}
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <article className="home-feature-card h-100">
                  <div>
                    <i className={`bi ${support.icon}`} />
                  </div>

                  <h3>{support.title}</h3>

                  <p>{support.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ********************************************************************************************************** */}

      <section className="home-use-cases section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Use Cases</h2>
          <p>Technology partnerships shaped around real operating needs</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            {useCases.map(([icon, title, text], index) => (
              <div className="col-lg-3 col-md-6" key={title} data-aos="zoom-in" data-aos-delay={index * 70}>
                <article className="home-use-card h-100">
                  <i className={`bi ${icon}`} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-integrations section light-background">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="home-eyebrow">Connected ecosystem</span>
              <h2>Bring your everyday business tools closer together.</h2>
              <p>
                Reduce repeated work and create smoother information flow with
                practical integrations planned around your current setup.
              </p>
              <Link to="/contact-us" className="home-primary-link">
                Discuss an integration <i className="bi bi-arrow-right" />
              </Link>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="integration-grid">
                {integrations.map(([icon, label]) => (
                  <div key={label}><i className={`bi ${icon}`} /><span>{label}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-benefits section">
        <div className="container">
          <div className="home-benefit-band" data-aos="fade-up">
            {[
              ["bi-lightbulb", "Product thinking", "Technology decisions stay connected to meaningful business outcomes."],
              ["bi-lightning-charge", "Focused delivery", "Clear priorities keep implementation practical and efficient."],
              ["bi-sliders", "Flexible solutions", "Products and systems adapt to different workflows and business models."],
              ["bi-life-preserver", "Ongoing support", "Get help through setup, training, adoption, and improvement."],
            ].map(([icon, title, text]) => (
              <div key={title}><i className={`bi ${icon}`} /><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-proof section dark-background">
        <div className="container" data-aos="fade-up">
          <div className="row align-items-end gy-5">
            <div className="col-lg-7">
              <span className="home-eyebrow">Built for practical progress</span>
              <h2>Useful products.<br />Thoughtful solutions. Dependable support.</h2>
            </div>
            <div className="col-lg-5">
              <p>
                FlowupS Technologies combines product development, business understanding,
                and implementation support to create technology that lasts.
              </p>
            </div>
          </div>
          <div className="home-proof-grid">
            <div><span>01</span><strong>Business comes first</strong><p>We begin with the operating need, not a predetermined technology.</p></div>
            <div><span>02</span><strong>Solutions stay focused</strong><p>Every product, feature, and integration has a clear practical purpose.</p></div>
            <div><span>03</span><strong>Support stays dependable</strong><p>We remain involved through implementation, adoption, and improvement.</p></div>
          </div>
        </div>
      </section>

      {/* ****************** */}
      <section className="home-products section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Team</h2>
          <p>Leadership & Team</p>
        </div>
        <div className="container">
           {/* data-aos="fade-up" */}
          <article className="flex flex-col lg:flex-row items-center gap-10"> 
            <div className="company-product1-copy w-[430px]">
              {/* <span className="home-eyebrow">Leadership & Team</span> */}
              <p>FlowupS Technologies Pvt. Ltd. is powered by directors, developers, sales professionals, support specialists, and technical advisors. Together, the team brings strong business understanding, Tally expertise, software development capability, sales experience, and dependable client support.</p>
              <Link to="/our-team" className="home-primary-link">Explore Team <i className="bi bi-arrow-right" /></Link>
            </div>
            <div><Leadership /></div>
          </article>
        </div>
      </section>

      <section className="home-faq section">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4" data-aos="fade-right">
              <span className="home-eyebrow">Frequently asked questions</span>
              <h2>Answers before you get started.</h2>
              <p>Need something more specific? Our team can walk through your workflow with you.</p>
              <Link to="/contact-us" className="home-primary-link">Ask your question <i className="bi bi-arrow-right" /></Link>
            </div>
            <div className="col-lg-8" data-aos="fade-left">
              <div className="faq-list">
                {faqs.map(([question, answer], index) => (
                  <details key={question} open={index === 0}>
                    <summary>{question}<i className="bi bi-plus-lg" /></summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-final-cta section dark-background">
        <div className="container text-center" data-aos="zoom-in">
          <span className="home-eyebrow">Ready to move your business forward?</span>
          <h2>Let&apos;s build the right technology around your goals.</h2>
          <p>Start with a practical conversation about your business, priorities, and opportunities.</p>
          <div>
            <Link className="home-cta-primary" to="/contact-us">Start a conversation <i className="bi bi-arrow-up-right" /></Link>
            <Link className="home-cta-secondary" to="/services">Explore services</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingSections;
