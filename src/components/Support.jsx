// // import React from 'react'

// // import { Link } from "react-router-dom";

// // // function Support() {
// // //     return (
// // //         <>
// // //             <main className="about">
// // //                 {/* 🔥 Page Title */}
// // //                 <div
// // //                     className="page-title dark-background"
// // //                     data-aos="fade"
// // //                     style={{
// // //                         backgroundImage: "url(/images/page-title-bg.webp)",
// // //                     }}
// // //                 >
// // //                     <div className="container position-relative">
// // //                         <h1>Contact Us</h1>
// // //                         <p></p>
// // //                         <nav className="breadcrumbs">
// // //                             <ol>
// // //                                 <li><Link to="/">Home</Link></li>
// // //                                 <li><Link to="/contact-us">Contact Us</Link></li>
// // //                             </ol>
// // //                         </nav>
// // //                     </div>
// // //                 </div>
// // //             </main>
// // //                     <section id="contact" className="contact section">

// // //             <div className="container section-title pb-4" data-aos="fade-up">
// // //                 <h2>Contact</h2>
// // //                 <p>We fulfill your requirements</p>
// // //             </div>

// // //             <div className="container" data-aos="fade-up" data-aos-delay="100">
// // //                 <div className="row gy-2">
// // //                     <div className="col-lg-6 ">
// // //                         <div className="row gy-4">

// // //                             <div className="col-lg-12">
// // //                                 <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
// // //                                     <i className="bi bi-geo-alt"></i>
// // //                                     <h3>Address</h3>
// // //                                     <p>Padtani Complex, behind Joshi palace,</p>
// // //                                     <p>opp. Panhale Pedha, Punjabi Colony,</p>
// // //                                     <p>Sangamner, Maharashtra 422605</p>
// // //                                 </div>
// // //                             </div>

// // //                             <div className="col-md-6">
// // //                                 <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
// // //                                     <i className="bi bi-telephone"></i>
// // //                                     <h3>Call Us</h3>
// // //                                     <p>+91 96654 78057 / +91 77569 23602</p>
// // //                                 </div>
// // //                             </div>

// // //                             <div className="col-md-6">
// // //                                 <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
// // //                                     <i className="bi bi-envelope"></i>
// // //                                     <h3>Email Us</h3>
// // //                                     <p>admin@flowups.in</p>
// // //                                 </div>
// // //                             </div>

// // //                         </div>
// // //                     </div>

// // //                     <div className="col-lg-6">
// // //                         <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="500">
// // //                             <div className="row gy-4">

// // //                                 <div className="col-md-6">
// // //                                     <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
// // //                                 </div>

// // //                                 <div className="col-md-6 ">
// // //                                     <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
// // //                                 </div>

// // //                                 <div className="col-md-12">
// // //                                     <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
// // //                                 </div>

// // //                                 <div className="col-md-12">
// // //                                     <textarea className="form-control" name="message" rows="4" placeholder="Message" required=""></textarea>
// // //                                 </div>

// // //                                 <div className="col-md-12 text-center">
// // //                                     <div className="loading">Loading</div>
// // //                                     <div className="error-message"></div>
// // //                                     <div className="sent-message">Your message has been sent. Thank you!</div>

// // //                                     <button type="submit">Send Message</button>
// // //                                 </div>

// // //                             </div>
// // //                         </form>
// // //                     </div>

// // //                 </div>

// // //             </div>

// // //         </section>
// // //         </>
// // //     )
// // // }


// // // export default Support




// const supportData = [
//   {
//     id: 1,
//     title: "Tally Customization Support",
//     description:
//       "Assistance with existing TDL customizations, feature updates, and issue resolution.",
//     icon: "bi-gear-wide-connected",
//   },
//   {
//     id: 2,
//     title: "Software Maintenance",
//     description:
//       "Bug fixing, performance improvements, and regular application maintenance.",
//     icon: "bi-tools",
//   },
//   {
//     id: 3,
//     title: "API & Integration Support",
//     description:
//       "Monitoring and troubleshooting integrations between Tally and third-party systems.",
//     icon: "bi-diagram-3",
//   },
//   {
//     id: 4,
//     title: "User Training",
//     description:
//       "Practical training sessions to help teams effectively use customized solutions.",
//     icon: "bi-mortarboard",
//   },
//   {
//     id: 5,
//     title: "Report & Print Format Updates",
//     description:
//       "Modify reports, invoices, vouchers, and print layouts as business needs change.",
//     icon: "bi-file-earmark-text",
//   },
//   {
//     id: 6,
//     title: "Remote Assistance",
//     description:
//       "Quick remote support for troubleshooting, guidance, and implementation assistance.",
//     icon: "bi-headset",
//   },
// ];

// function Support() {
//   return (
//     <section className="support section">
//       <div className="container">
//         <div className="row gy-4">
//           {supportData.map((item) => (
//             <div className="col-lg-4 col-md-6" key={item.id}>
//               <div className="support-card h-100">
//                 <i className={`bi ${item.icon}`}></i>
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Support;