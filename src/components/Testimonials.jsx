import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const testimonials = [
  {
    img: "testimonials-1.jpg",
    name: "Saul Goodman",
    role: "CEO & Founder",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora.",
  },
  {
    img: "testimonials-2.jpg",
    name: "Sara Wilsson",
    role: "Designer",
    text: "Export tempor illum tamen malis malis eram quae irure esse labore.",
  },
  {
    img: "testimonials-3.jpg",
    name: "Jena Karlis",
    role: "Store Owner",
    text: "Enim nisi quem export duis labore cillum quae magna enim sint.",
  },
  {
    img: "testimonials-4.jpg",
    name: "Matt Brandon",
    role: "Freelancer",
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa.",
  },
  {
    img: "testimonials-5.jpg",
    name: "John Larson",
    role: "Entrepreneur",
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="testimonials section dark-background"
    >
      {/* Background */}
      <img
        src="/images/testimonials-bg.jpg"
        className="testimonials-bg"
        alt=""
      />

      <div className="container" data-aos="fade-up">

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-item text-center">

                <img
                  src={`/images/testimonials/${t.img}`}
                  className="testimonial-img"
                  alt=""
                />

                <h3>{t.name}</h3>
                <h4>{t.role}</h4>

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>

                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{t.text}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;