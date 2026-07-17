import React from 'react'
import ServicesShowcase from '../components/ServicesShowcase'
import { Link } from 'react-router-dom'
import FeaturedServices from '../components/FeaturedServices'


function Services() {
  return (
    <>
      <main>
        <div
          className="page-title dark-background"
          data-aos="fade"
          style={{
            backgroundImage: "url(/images/page-title-bg.webp)",
          }}
        >
          <div className="container position-relative">
            <h1>Services</h1>
            <p>Practical digital solutions designed to simplify work and accelerate growth.</p>
            <nav className="breadcrumbs">
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
              </ol>
            </nav>
          </div>
        </div>
        <ServicesShowcase />
      </main>
    </>
  )
}

export default Services
