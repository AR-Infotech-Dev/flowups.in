const features = [
    {
        title: "Customer Satisfaction Tools",
        desc: "Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.",
        icon: "👥",
    },
    {
        title: "Management & Reporting",
        desc: "Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.",
        icon: "✏️",
    },
    {
        title: "Freight Payment Options",
        desc: "Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.",
        icon: "💳",
    },
    {
        title: "Compliance Solutions",
        desc: "Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.",
        icon: "🧩",
    },
    {
        title: "Timely Delivery",
        desc: "Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.",
        icon: "⏱️",
    },
    {
        title: "24 / 7 Service",
        desc: "Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.",
        icon: "📞",
    },
];

const WhyUs = () => {
    return (
        <div className="bg-gray-100 h-[90vh]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mt-6">
                    <h2 className="text-3xl font-bold relative inline-block">
                        Why Choose Us
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-3"></div>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <div className="text-3xl mb-4 text-blue-600">
                                {item.icon}
                            </div>

                            <h4 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h4>

                            <p className="text-gray-600 text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default WhyUs;