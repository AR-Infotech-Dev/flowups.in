import React from 'react'
import { servicesData } from '../../data/serviceData'

function Footer() {
  return (
    <footer id="footer" className="footer dark-background">

      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center" aria-label="FlowupS Technologies Pvt. Ltd. home">
              <span className="company-wordmark is-footer">
                <strong>flowup<span>S</span></strong>
                <small>Technologies Pvt. Ltd.</small>
              </span>
            </a>
            <div className="footer-contact pt-3">
              <p>Padtani Complex, behind Joshi palace,</p>
              <p>opp. Panhale Pedha, Punjabi Colony,</p>
              <p>Sangamner, Maharashtra 422605</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+91 96654 78057 / +91 77569 23602</span></p>
              <p><strong>Email:</strong> <span>admin@flowups.in</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div> */}

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              {servicesData.map((service, index) => {
                return (
                  <li key={index}><i className="bi bi-chevron-right"></i> <a href={`/services/${service.id}`}>{service.title}</a></li>
                )
              })}
              {/* <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li> */}
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            {/* <form action="forms/newsletter.php" method="post" className="php-email-form">
              <div className="newsletter-form"><input type="email" name="email"><input type="submit" value="Subscribe"></div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
              </form> */}
          </div>

        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">FlowupS Technologies Pvt. Ltd.</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by</div>
      </div>

    </footer>
  )
}

export default Footer
