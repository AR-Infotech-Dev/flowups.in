import { Link } from "react-router-dom";
import { servicesData } from "../../data/serviceData";

const processSteps = [
  {
    number: "01",
    icon: "bi-chat-square-text",
    title: "Understand",
    description: "We understand your business, current workflow, challenges, and goals.",
  },
  {
    number: "02",
    icon: "bi-diagram-3",
    title: "Plan",
    description: "We define the right solution, timeline, scope, and implementation roadmap.",
  },
  {
    number: "03",
    icon: "bi-code-square",
    title: "Build",
    description: "Our team develops, configures, tests, and fine-tunes your solution.",
  },
  {
    number: "04",
    icon: "bi-headset",
    title: "Support",
    description: "We help with deployment, training, maintenance, and ongoing support.",
  },
];

function ServicesShowcase() {
  return (
    <>
      <section id="services-2" className="services-overview section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>What We Do</h2>
          <p>Solutions built around your business</p>
        </div>

        <div className="container">
          <div className="services-intro" data-aos="fade-up" data-aos-delay="100">
            <p>
              From modern websites to business automation and Tally solutions,
              we help you simplify operations, serve customers better, and grow
              with confidence.
            </p>
          </div>

          <div className="row gy-4 justify-center!">
            {servicesData.map((service, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <article className="service-solution-card h-100">
                  <div className="service-card-topline" />
                  <div className="service-card-icon">
                    <i className={`bi ${service.icon}`} aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul className="service-benefits">
                    {service.points.map((point) => (
                      <li key={point}>
                        <i className="bi bi-check-circle-fill" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link className="service-card-link" to={`/services/${service.id}`}>
                    Explore service <i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process section">
        <div className="container section-title" data-aos="fade-up">
          <h2>How We Work</h2>
          <p>A clear path from idea to impact</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {processSteps.map((step, index) => (
              <div
                className="col-lg-3 col-sm-6"
                key={step.number}
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="process-card h-100">
                  <span className="process-number">{step.number}</span>
                  <div className="process-icon">
                    <i className={`bi ${step.icon}`} aria-hidden="true" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta section dark-background">
        <div className="container" data-aos="zoom-in">
          <div className="services-cta-inner">
            <div>
              <span className="services-cta-label">Let&apos;s build what your business needs</span>
              <h2>Not sure which solution is right for you?</h2>
              <p>Talk to our team and get a practical recommendation for your goals.</p>
            </div>
            <Link className="services-cta-button" to="/contact-us">
              Talk to an expert <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesShowcase;
