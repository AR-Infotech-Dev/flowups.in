// import React from 'react'
// import Support from '../components/Support'

// function Support() {
//   return (
//     <Support />
//   )
// }

// export default Support

import React from 'react'
import { Link } from "react-router-dom";

// const supportData = [
//     {
//         id: 1,
//         title: "Tally Customization Support",
//         description:
//             "Assistance with existing TDL customizations, feature updates, and issue resolution.",
//         icon: "bi-gear-wide-connected",
//     },
//     {
//         id: 2,
//         title: "Software Maintenance",
//         description:
//             "Bug fixing, performance improvements, and regular application maintenance.",
//         icon: "bi-tools",
//     },
//     {
//         id: 3,
//         title: "API & Integration Support",
//         description:
//             "Monitoring and troubleshooting integrations between Tally and third-party systems.",
//         icon: "bi-diagram-3",
//     },
//     {
//         id: 4,
//         title: "User Training",
//         description:
//             "Practical training sessions to help teams effectively use customized solutions.",
//         icon: "bi-mortarboard",
//     },
//     {
//         id: 5,
//         title: "Report & Print Format Updates",
//         description:
//             "Modify reports, invoices, vouchers, and print layouts as business needs change.",
//         icon: "bi-file-earmark-text",
//     },
//     {
//         id: 6,
//         title: "Remote Assistance",
//         description:
//             "Quick remote support for troubleshooting, guidance, and implementation assistance.",
//         icon: "bi-headset",
//     },
// ];

const supportData = [
    {
        title: "Tally Customization Support",
        icon: "bi-sliders2",
        description:
            "Maintenance and updates for custom modules and bespoke workflows within your Tally environment.",
    },
    {
        title: "TDL Issue Resolution",
        icon: "bi-terminal",
        description:
            "Rapid debugging and fixes for Tally Definition Language code to ensure zero downtime.",
    },
    {
        title: "Software Bug Fixing",
        icon: "bi-bug",
        description:
            "Identifying and rectifying code-level issues across custom-built software applications.",
    },
    {
        title: "Feature Enhancements",
        icon: "bi-plus-circle",
        description:
            "Continuous delivery of new functionalities and iterative improvements to your existing systems.",
    },
    {
        title: "User Training",
        icon: "bi-mortarboard",
        description:
            "Comprehensive hand-holding and instructional sessions for staff on new and existing features.",
    },
    {
        title: "Data Correction Guidance",
        icon: "bi-database-check",
        description:
            "Strategic advice on maintaining data integrity and fixing ledger inconsistencies within Tally.",
    },
    {
        title: "API and Integration Monitoring",
        icon: "bi-diagram-3",
        description:
            "Active health checks for third-party integrations and API bridges to prevent data sync failures.",
    },
    {
        title: "Report Changes",
        icon: "bi-bar-chart",
        description:
            "Modifying existing analytical reports to reflect new business KPIs or regulatory requirements.",
    },
    {
        title: "Print Format Changes",
        icon: "bi-printer",
        description:
            "Customizing invoices, vouchers, and other printable documents for brand consistency.",
    },
    {
        title: "Remote / Client-side Coordination",
        icon: "bi-headset",
        description:
            "End-to-end technical support provided via remote access or on-site coordination as needed.",
    },
];

const supportWhyData = [
    {
        title: "Tally Expertise",
        description:
            "Deep-domain knowledge in TDL and Tally.ERP9 / TallyPrime architectures.",
    },
    {
        title: "Practical Business Understanding",
        description:
            "We align technical support with your actual financial and accounting workflows.",
    },
    {
        title: "Corporate Communication",
        description:
            "Transparent documentation and structured reporting of all support activities.",
    },
];

const Support = () => {
    return (
        <>
            <section className="support-hero section">
                <div className="container">
                    <div className="row">

                        <div
                            className="col-lg-8"
                            data-aos="fade-up"
                        >
                            <span className="support-hero-tag">
                                Enterprise Support
                            </span>

                            <h1 className="support-hero-title">
                                Support That Continues After Delivery
                            </h1>

                            <p className="support-hero-text">
                                At FlowupS Technologies, we believe that the launch of a software
                                solution is not the end of the project, but the beginning of a
                                long-term partnership. Our comprehensive Support and Maintenance
                                framework is designed to ensure that your customized Tally
                                solutions and custom software remain reliable, efficient, and
                                up-to-date with your evolving business needs.
                            </p>

                            <div className="support-hero-buttons">

                                <a href="#support-services" className="btn btn-primary">
                                    Open Support Ticket
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </a>

                                <a href="#service-levels" className="btn btn-outline-primary">
                                    View Service Levels
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Support Areas Section */}
            <section id="support-services" className="support-areas section">
                <div className="container">

                    <div
                        className="support-areas-header text-center"
                        data-aos="fade-up"
                    >
                        <h2>Core Support Verticals</h2>

                        <p>
                            Expert resolution and proactive maintenance across the entire Tally
                            ecosystem and custom software stack.
                        </p>
                    </div>

                    {/* -------------support cards------------------------ */}
                    <div className="container">
                        <div className="row gy-4">
                            {supportData.map((item, index) => (
                                <div
                                    className="col-lg-4 col-md-6"
                                    key={item.title}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 60}
                                >
                                    <article className="home-feature-card h-100">
                                        <div>
                                            <i className={`bi ${item.icon}`} />
                                        </div>

                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Choose FlowupS Section */}
            <section className="support-why section">
                <div className="container">
                    <div className="row align-items-center gy-5">

                        {/* Left Content */}
                        <div
                            className="col-lg-7"
                            data-aos="fade-right"
                        >
                            <h2 className="support-why-title">
                                Professional Maintenance with Corporate Precision
                            </h2>

                            <p className="support-why-text">
                                Our support ecosystem is built on the foundation of technical
                                excellence and a deep understanding of business operational
                                realities.
                            </p>
                            {/* ----------------------------------------------------- */}
                            <div className="support-why-list">

                                <div className="support-why-list">
                                    {supportWhyData.map((item) => (
                                        <div className="support-why-item" key={item.title}>
                                            <div className="support-why-icon">
                                                <i className="bi bi-check-lg"></i>
                                            </div>

                                            <div>
                                                <h4>{item.title}</h4>

                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>

                        {/* Right Image */}
                        <div
                            className="col-lg-5"
                            data-aos="fade-left"
                        >
                            <div className="support-why-image">

                                <img
                                    src="/images/support-1.jpg"
                                    alt="Support Team"
                                    className="img-fluid rounded-4"
                                />

                                <div className="support-availability">
                                    <h3>99.9%</h3>
                                    <span>Support Availability</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Support
