import { Link, useParams } from "react-router-dom";
import { customization_data } from "../../data/serviceData";
import { useEffect } from "react";
const CustomizationPage = () => {
  const { id } = useParams();
  const service = customization_data.find((item) => item.id === id);

  const useFallbackImage = (event, fallback = "/images/services.jpg") => {
    if (event.currentTarget.src.endsWith(fallback)) return;
    event.currentTarget.src = fallback;
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  if (!service) {
    return (
      <main className="customization-page customization-empty-state">
        <div className="container text-center">
          <span>Customization service</span>
          <h1>Service not found</h1>
          <p>The requested customization is unavailable or the link is incomplete.</p>
          <Link to="/services/tally">Browse Tally services</Link>
        </div>
      </main>
    );
  }

  const features = Array.isArray(service.features) ? service.features : [];

  return (
    <main className="customization-page">
      <section className="customization-hero">
        <img
          className="customization-hero-image"
          src={service.banner || "/images/page-title-bg.webp"}
          alt=""
          width="1600"
          height="760"
          fetchPriority="high"
          onError={(event) => useFallbackImage(event, "/images/page-title-bg.webp")}
        />
        <div className="customization-hero-overlay" />

        <div className="container customization-hero-content">
          <nav aria-label="Breadcrumb" className="customization-breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services/tally">Tally</Link>
            <span>/</span>
            <span>{service.title}</span>
          </nav>
          <span className="customization-eyebrow">Tailored business solution</span>
          <h1>{service.title}</h1>
          {service.subtitle && <p>{service.subtitle}</p>}
          <a href="#capabilities" className="customization-hero-button">
            Explore capabilities <i className="bi bi-arrow-down" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="capabilities" className="customization-features section">
        <div className="container">
          <div className="customization-section-heading" data-aos="fade-up">
            <div>
              <span>Advanced control suite</span>
              <h2>Built around the way your business works.</h2>
            </div>
            <div className="customization-heading-summary">
              <strong>{String(features.length).padStart(2, "0")} capabilities</strong>
              <p>
                Focused workflows and controls designed to reduce manual work
                and improve operational visibility.
              </p>
            </div>
          </div>

          {features.length > 0 ? (
            <div className="customization-feature-list">
              {features.map((feature, index) => (
                <article
                  className={`customization-feature ${index % 2 !== 0 ? "is-reversed" : ""}`}
                  key={`${service.id}-${feature.title}`}
                  data-aos="zoom-in-up"
                  data-aos-delay={(index % 2) * 90}
                >
                  <div className="customization-feature-image">
                    <img
                      src={feature.image || "/images/services.jpg"}
                      alt={feature.title}
                      width="900"
                      height="560"
                      loading="lazy"
                      decoding="async"
                      onError={useFallbackImage}
                    />
                  </div>

                  <div className="customization-feature-content">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{feature.title}</h3>
                    {feature.description && <p>{feature.description}</p>}
                    {feature.description1 && <p>{feature.description1}</p>}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="customization-no-features">
              Detailed capabilities will be added shortly.
            </div>
          )}
        </div>
      </section>

      <section className="customization-cta">
        <div className="container">
          <div>
            <span>Need this solution for your business?</span>
            <h2>Let&apos;s shape it around your workflow.</h2>
          </div>
          <Link to="/contact-us">Talk to our team <i className="bi bi-arrow-up-right" /></Link>
        </div>
      </section>
    </main>
  );
};

export default CustomizationPage;
