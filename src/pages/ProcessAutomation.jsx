import React from 'react'
const focusAreas = [
    {
        icon: "account_tree",
        title: "Workflow Automation",
        description:
            "Streamline multi-step approval processes and internal tasks with automated triggers and conditional logic gates.",
    },
    {
        icon: "analytics",
        title: "Report Automation",
        description:
            "Gather data from disparate sources into centralized, real-time dashboards that eliminate manual reporting delays.",
    },
    {
        icon: "settings_suggest",
        title: "Process Automation",
        description:
            "Connect third-party platforms to synchronize customer records, inventory, and financial data without human intervention.",
    },
];

const benefits = [
    {
        title: "Reduced Human Error",
        description:
            "Eliminate manual entry mistakes that cost businesses thousands in lost productivity and corrective labor.",
    },
    {
        title: "Operational Velocity",
        description:
            "Execute processes 24/7 without fatigue, ensuring follow-ups and data syncs happen in real-time.",
    },
    {
        title: "Cost Efficiency",
        description:
            "Reallocate your human talent from menial administrative tasks to high-value strategic growth initiatives.",
    },
];
const automationFlow = [
    {
        title: "Requirement Study",
        description:
            "In-depth audit of current manual bottlenecks and data flows.",
    },
    {
        title: "Strategic Mapping",
        description:
            "Designing the architecture for automated triggers and logic.",
    },
    {
        title: "Development",
        description:
            "Building custom scripts and platform integrations.",
    },
    {
        title: "Implementation",
        description:
            "Testing, deployment, and performance monitoring.",
    },
];

const ProcessAutomation = () => {
    return (
        <>
            {/* Core Focus Areas */}
            <section id="services-2" className="services-overview section light-background ">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Core Service Offerings</h2>
                    {/* <p>Solutions built around your business</p> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto px-6"data-aos="fade-up" data-aos-delay="100">
                    {focusAreas.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition" >
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-900 mb-6">
                                <span className="material-symbols-outlined">
                                    {item.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-7">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Value Proposition */}
            <section className="border " style={{ backgroundColor: "#001A33" }}>
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row gap-16 items-center "data-aos="fade-up">
                    <div className="md:w-1/2">
                        
                            <div className="bg-blue-500/10 rounded-3xl overflow-hidden ">
                                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72" alt="team" className="w-full h-full object-cover p-4"
                                />
                            </div>
                        
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-8 text-white">
                            Simplifying Operations with Intelligence
                        </h2>
                        <ul className="space-y-6 text-white ">
                            {benefits.map((item, index) => (
                                <li key={index} className="flex gap-4" >
                                    <span className="material-symbols-outlined text-blue-400">
                                        check_circle
                                    </span>
                                    <div>
                                        <h4 className="font-semibold mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-white/80">
                                            {item.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            {/* Automation Flow */}
            <section className="py-24 max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up" >
                    <h2 className="text-3xl font-bold text-[#001A33] mb-4">
                        Our Automation Flow
                    </h2>
                    <p className="text-gray-600">
                        A structured methodology to ensure seamless implementation and high ROI.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 p-6 gap-8" data-aos="fade-up" >
                    {automationFlow.map((item, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-xl border text-center" >
                            <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-[#001e40] text-white flex items-center justify-center font-bold">
                                {index + 1}
                            </div>
                            <h4 className="font-semibold mb-2">
                                {item.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            {/* CTA */}
            <section className="py-24 px-6 max-w-[1280px] mx-auto mb-16">
                <div className="bg-gray-100 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden border" data-aos="fade-up">
                    {/* <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32">
                    </div> */}
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-[#001A33] mb-6">
                            Ready to optimize your business processes?
                        </h2>
                        <p className="text-gray-600 text-lg mb-10">
                            Join forward-thinking companies that leverage FlowupS Technologies
                            to scale efficiently without increasing overhead.
                        </p>
                        <button className=" bg-blue-900 text-white px-10 py-4 rounded-lg font-semibold shadow-xl hover:scale-105 transition " >
                            Start Project Discovery
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProcessAutomation