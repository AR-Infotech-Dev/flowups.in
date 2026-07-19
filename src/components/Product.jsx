import React from 'react'
import { Landmark, ShieldCheck, CheckCircle2, Gauge, BadgeCheck, ChartColumn } from "lucide-react";
import { Link } from "react-router-dom";


const impactCards = [
    {
        icon: Gauge,
        title: "Efficiency First",
        description:
            "Automate repetitive tasks to allow your team to focus on high-value strategic decision making.",
    },
    {
        icon: BadgeCheck,
        title: "Data Accuracy",
        description:
            "Human error is eliminated through direct API-level integration between critical business platforms.",
    },
    {
        icon: ChartColumn,
        title: "Insight-Driven",
        description:
            "Built-in reporting modules transform raw data into actionable business intelligence in real-time.",
    },
];

const supportData = [
    {
        title: "Efficiency First",
        icon: "bi bi-speedometer2",
        description:
            "Automate repetitive tasks to allow your team to focus on high-value strategic decision making.",
    },
    {
        title: "Data Accuracy",
        icon: "bi bi-patch-check",
        description:
            "Human error is eliminated through direct API-level integration between critical business platforms.",
    },
    {
        title: "Insight-Driven",
        icon: "bi bi-bar-chart-line",
        description:
            "Built-in reporting modules transform raw data into actionable business intelligence in real-time.",
    }
];

function Product() {
    return (
        <>
            <main className="about">
                {/* 🔥 Page Title */}
                <div
                    className="page-title dark-background"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    style={{
                        backgroundImage: "url(/images/page-title-bg.webp)",
                    }}
                >
                    <div className="container position-relative">
                        <h1>Product</h1>
                        <p></p>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/product">Product</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </main>


            <section className="bg-white pt-24 pb-10">
                <div className="max-w-[1380px] mx-auto px-3 ">

                    {/* Small Badge */}
                    <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#0059BB]">
                        ENTERPRISE SOLUTIONS
                    </p>

                    {/* Heading */}
                    <h1 className="mt-4 max-w-[800px] text-[60px] leading-[1.05] font-bold text-black">
                        Empowering Business with
                        <br />
                        Precision Engineering
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-[760px] text-[20px] leading-6 text-[#5f6a82]">
                        FlowupS Technologies bridges the gap between complex data ecosystems
                        and operational excellence. Discover our suite of specialized
                        enterprise products.
                    </p>

                </div>
            </section>

            <section className="bg-white pt-24 pb-10">
                <div className="max-w-[1380px] mx-auto px-3">
                    <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 items-center">



                        <div className=" rounded-md shadow-sm">
                            <img
                                src="/images/flowups-ticket-table.png"
                                alt="FlowupS Ticket Table"
                                className="w-full h-auto rounded-md"
                            />
                        </div>

                        <div className=" px-6 rounded-xl ">
                            {/* Left Content */}

                            <div >

                                {/* Badge */}
                                <span className="inline-flex items-center rounded-full bg-[#DDF4FB] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#0EA5C6]">
                                    SUPPORT OPS
                                </span>

                                {/* Heading */}
                                <h1 className="mt-4 text-4xl font-bold leading-tight text-black">
                                    CallDesk
                                </h1>

                                {/* Subtitle */}
                                <p className="mt-4 text-[20px] font-medium text-[#0059BB]">
                                    "Support Ticket Management System"
                                </p>

                                {/* Description */}
                                <p className="mt-6 max-w-xl text-[17px] leading-6 text-[#5B6472]">
                                    CallDesk is a robust, enterprise-grade ticket management solution designed to cenralize customer communications and streamline support workflows. It transforms chaotic support requests into an organized, trackable, and efficient resolution  machine.
                                </p>

                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div className="bg-blue-50 rounded-md p-3 ">

                                    <Landmark size={20} className="text-[#0A63D8] mb-3" />

                                    <h3 className="text-[15px] font-semibold text-[#0F2942]">
                                        Who it's for
                                    </h3>

                                    <p className="mt-2 text-[14px] leading-5 text-[#667085]">
                                        Customer support teams, IT helpdesks, and service-based enterprises.
                                    </p>

                                </div>

                                <div className="bg-blue-50  rounded-md p-3 ">
                                    <ShieldCheck size={20} className="text-[#0A63D8] mb-3" />

                                    <h3 className="text-[15px] font-semibold text-[#0F2942]">
                                        Business ROI
                                    </h3>

                                    <p className="mt-2 text-[14px] leading-5 text-[#667085]">
                                        Reduce resolution time by 40% and improve CSAT scores significantly.
                                    </p>

                                </div>


                            </div>
                            {/* Key Features */}
                            <div className="mt-10">

                                <h4 className="!text-[20px] font-bold uppercase tracking-[2px] mt-3  text-[#98A2B3]">
                                    KEY FEATURES
                                </h4>

                                <div className="mt-3 space-y-4">

                                    <div className="flex items-start gap-3">
                                        <CheckCircle2
                                            size={16}
                                            className="text-[#0A63D8] mt-1 flex-shrink-0"
                                        />
                                        <p className="text-[15px] text-[#344054]">
                                            Omnichannel ticket ingestion (Email,Web,Phone)
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <CheckCircle2
                                            size={16}
                                            className="text-[#0A63D8] mt-1 flex-shrink-0"
                                        />
                                        <p className="text-[15px] text-[#344054]">
                                            Automated SLA tracking and escalation triggers
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <CheckCircle2
                                            size={16}
                                            className="text-[#0A63D8] mt-1 flex-shrink-0"
                                        />
                                        <p className="text-[15px] text-[#344054]">
                                            Advanced analytics and agent performance heatmaps
                                        </p>
                                    </div>

                                </div>

                            </div>


                        </div>




                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-[1380px] mx-auto px-0 ">
                    <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-12 items-center">

                        <div className=" p-6 rounded-xl ">
                            {/* Left Content */}


                            <div >

                                {/* Badge */}
                                <span className="inline-flex items-center rounded-full bg-[#DDF4FB] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#0EA5C6]">
                                    FINTECH BRIDGE
                                </span>

                                {/* Heading */}
                                <h1 className="mt-4 text-4xl font-bold leading-tight text-black">
                                    Sathi Connect
                                </h1>

                                {/* Subtitle */}
                                <p className="mt-4 text-[20px] font-medium text-[#0059BB]">
                                    "Seeds Portal to Tally Prime Connectivity Bridge"
                                </p>

                                {/* Description */}
                                <p className="mt-6 max-w-xl text-[17px] leading-6 text-[#5B6472]">
                                    Sathi Connect serves as a critical infrastructure layer,
                                    bridging the gap between the Seeds Portal and Tally Prime.
                                    It automates complex data synchronization, ensuring
                                    financial records are always accurate without manual
                                    intervention.
                                </p>

                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div className="bg-blue-50 rounded-md p-3 ">

                                    <Landmark size={20} className="text-[#0A63D8] mb-3" />

                                    <h3 className="text-[15px] font-semibold text-[#0F2942]">
                                        Who it's for
                                    </h3>

                                    <p className="mt-2 text-[14px] leading-5 text-[#667085]">
                                        Agri-tech cooperatives, Seed distributors, and Accounting firms.
                                    </p>

                                </div>

                                <div className="bg-blue-50  rounded-md p-3 ">
                                    <ShieldCheck size={20} className="text-[#0A63D8] mb-3" />

                                    <h3 className="text-[15px] font-semibold text-[#0F2942]">
                                        Business ROI
                                    </h3>

                                    <p className="mt-2 text-[14px] leading-5 text-[#667085]">
                                        Eliminate data entry errors and save 100+ man-hours monthly.
                                    </p>

                                </div>


                            </div>
                            {/* Key Features */}
                            <div className="mt-10">

                                <h4 className="mt-3 !text-[20px] font-semibold uppercase tracking-[1px] text-[#98A2B3]">
                                    KEY FEATURES
                                </h4>

                                <div className="mt-3 space-y-3">

                                    <div className="flex items-start gap-3">
                                        <CheckCircle2
                                            size={16}
                                            className="text-[#0A63D8] mt-1 flex-shrink-0"
                                        />
                                        <p className="text-[15px] text-[#344054]">
                                            Real-time sync between Seeds Portal and Tally Prime
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <CheckCircle2
                                            size={16}
                                            className="text-[#0A63D8] mt-1 flex-shrink-0"
                                        />
                                        <p className="text-[15px] text-[#344054]">
                                            Automated ledger creation and voucher mapping
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <CheckCircle2
                                            size={16}
                                            className="text-[#0A63D8] mt-1 flex-shrink-0"
                                        />
                                        <p className="text-[15px] text-[#344054]">
                                            Seamless reconciliation and audit-ready reporting
                                        </p>
                                    </div>

                                </div>

                            </div>


                        </div>

                        <div className=" p-6 rounded-xl">
                            {/* Right Content */}
                            <img
                                src="/images/sathiproduct.jpg"
                                className="w-full h-auto rounded-md"
                            />

                        </div>

                    </div>
                </div>
            </section>


            <section id="support-services" className="support-areas section">
                <div className="container">

                    <div
                        className="support-areas-header text-center"
                        data-aos="fade-up"
                    >
                        <h2>Built for Measurable Impact</h2>

                        <p>
                            Our products are engineered to provide immediate value through process automation and data integrity.
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



        </>
    )
}


export default Product

