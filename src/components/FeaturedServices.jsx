import { Link } from "react-router-dom";
import { servicesData } from "../../data/serviceData";

function FeaturedServices() {
  return (
    <section id="services" className="featured-services section">
      <div className="container">
        <div className="container section-title pb-4 pl-0!" data-aos="fade-up">
          <h2>Featured services</h2>
        </div>

        <div className="featured-services-heading" data-aos="fade-up">
          <div>
            <h2>Practical expertise.<br />Built around your goals.</h2>
          </div>
          <div>
            <p>
              From digital experiences to business systems and Tally solutions,
              we deliver focused technology that supports real operations.
            </p>
            <Link to="/services">View all services <i className="bi bi-arrow-right" /></Link>
          </div>
        </div>

        <div className="featured-services-grid">
          {servicesData.map((service, index) => (
            <article
              className="featured-service-card"
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 90}
            >
              <Link className="featured-service-image no-underline!" to={`/services/${service.id}`} aria-label={`Explore ${service.title}`}>
                <img
                  src={`/images/${service.img}`}
                  alt=""
                  width="720"
                  height="460"
                  loading="lazy"
                  decoding="async"
                />
                <span>0{index + 1}</span>
              </Link>
              <div className="featured-service-content">
                <h3><Link className="no-underline!" to={`/services/${service.id}`}>{service.title}</Link></h3>
                <p>{service.description}</p>
                <ul>
                  {service.points.slice(0, 3).map((point) => (
                    <li key={point}><i className="bi bi-check2" />{point}</li>
                  ))}
                </ul>
                <Link className="featured-service-link no-underline!" to={`/services/${service.id}`}>
                  Explore service <i className="bi bi-arrow-up-right" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;







