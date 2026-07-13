import React from "react";

const SoftwareDevelopment = () => {
    const services = [
        {
            icon: "language",
            title: "Custom Web Application Development",
            description:
                "High-performance web platforms tailored to complex workflows, ensuring scalability and security from day one.",
            features: [
                "Scalable Architecture",
                "Progressive Web Apps (PWA)",
                "Real-time Performance Monitoring",
            ],
            type: "large",
        },
        {
            icon: "smartphone",
            title: "Mobile Application Development",
            description:
                "Native-feel performance across iOS and Android using the power of Flutter.",
            type: "dark",
        },
        {
            icon: "hub",
            title: "CRM Development",
            description:
                "Centralize customer intelligence and automate sales pipelines with customized relationship management tools.",
            type: "small",
        },
        {
            icon: "inventory_2",
            title: "ERP & Business Management",
            description:
                "Integrated systems that handle inventory, HR, finance, and operations in a single, unified ecosystem.",
            tags: ["Inventory", "HRM", "Finance"],
            type: "large",
        },
        {
            icon: "bar_chart",
            title: "Dashboard & MIS Systems",
            description:
                "Turn raw data into actionable insights with custom Management Information Systems and real-time visualization.",
            type: "half",
        },
        {
            icon: "api",
            title: "API Development & Integration",
            description:
                "Connect your software to the world. We build robust APIs and integrate third-party services seamlessly.",
            type: "half",
        },
    ];


    return (
        <>
            <section id="services-2" className="services-overview section light-background">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Core Service Offerings</h2>
                    {/* <p>Solutions built around your business</p> */}
                </div>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    {/* Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Web Development */}
                        <div className=" lg:col-span-8 rounded-md border border-slate-200 bg-[#F6F3F2]  hover:shadow-md transition p-3 " >
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 ">
                                    <span className="material-symbols-outlined text-blue-600 text-4xl mb-4"> language </span>
                                    <h3 className="text-xl font-semibold mb-3">
                                        Custom Web Application Development
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        High-performance web platforms tailored to complex
                                        workflows, ensuring scalability and security.
                                    </p>
                                    <ul className="space-y-2">
                                        {services[0].features.map((item) => (
                                            <li key={item} className="flex items-center gap-2 text-sm" >
                                                <span className="text-blue-600"> ✓ </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className=" flex-1 h-64 bg-slate-200 rounded-lg ">
                                    <img className="w-full h-full object-cover rounded-xl" src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww" alt="" srcset="" />
                                </div>
                            </div>
                        </div>

                        {/* Mobile */}
                        <ServiceCard data={services[1]} className="lg:col-span-4 bg-slate-900 text-white rounded-md p-6" />
                        {/* CRM */}
                        <ServiceCard data={services[2]} className="lg:col-span-4 rounded-md p-6" />
                        {/* ERP */}
                        <div className=" lg:col-span-8 rounded-md border border-slate-200 bg-gray-100 p-8 hover:shadow-md">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className=" flex-1 h-64 bg-slate-200 rounded-lg ">
                                    <img className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/vector-1738924827188-2d972df2e884?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDYzfHx8ZW58MHx8fHx8" alt="" srcset="" />
                                </div>
                                <div className="flex-1">
                                    <span className="material-symbols-outlined text-blue-600 text-4xl"> inventory_2 </span>
                                    <h3 className="text-xl font-semibold mt-3 mb-3">
                                        ERP & Business Management
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Integrated systems that handle inventory, HR,
                                        finance, and operations.
                                    </p>
                                    <div className="flex gap-2 flex-wrap">
                                        {services[3].tags.map(tag => (
                                            <span key={tag} className=" bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold " >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Dashboard */}
                        <ServiceCard data={services[4]} className="lg:col-span-6 rounded-md p-8" />
                        {/* API */}
                        <ServiceCard data={services[5]} className="lg:col-span-6 rounded-md p-8" />
                    </div>
                </div>
            </section>
        </>
    );
};

const ServiceCard = ({ data, className }) => {
    return (
        <div className={` rounded-xl border border-slate-200 hover:shadow-xl transition ${className} `} >
            <span className=" material-symbols-outlined text-blue-600 text-[20px] mb-2 ">
                {data.icon}
            </span>
            <h3 className=" text-[16px] font-semibold mb-2 ">
                {data.title}
            </h3>
            <p className=" text-gray-600 leading-7 ">
                {data.description}
            </p>
        </div>
    )
}
export default SoftwareDevelopment;