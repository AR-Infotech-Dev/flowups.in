import React, { useState } from "react";

/* 🔥 Feature Data */
const featuresData = [
  {
    id: 1,
    icon: "bi-binoculars",
    title: "Modi sit est dela pireda nest",
    img: "working-1.jpg",
    content: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
  },
  {
    id: 2,
    icon: "bi-box-seam",
    title: "Unde praesenti mara setra le",
    img: "working-2.jpg",
    content: "Neque exercitationem debitis soluta quos debitis quo mollitia officia est.",
  },
  {
    id: 3,
    icon: "bi-brightness-high",
    title: "Pariatur explica nitro dela",
    img: "working-3.jpg",
    content: "Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda.",
  },
  {
    id: 4,
    icon: "bi-command",
    title: "Nostrum qui dile node",
    img: "working-4.jpg",
    content: "Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum.",
  },
];

/* 🔥 Inner Component (NOT exported) */
const FeatureTabContent = ({ feature }) => {
  return (
    <div className="tab-pane active">
      <div className="row">

        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
          <h3>{feature.content}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="col-lg-6 order-1 order-lg-2 text-center">
          <img
            src={`/images/${feature.img}`}
            className="img-fluid"
            alt=""
          />
        </div>

      </div>
    </div>
  );
};

/* 🔥 Main Component */
function Features() {
  const [activeTab, setActiveTab] = useState(1);

  const activeFeature = featuresData.find(f => f.id === activeTab);

  return (
    <section id="features" className="features section">
      <div className="container">

        {/* Tabs */}
        <ul className="nav nav-tabs row d-flex">
          {featuresData.map((f) => (
            <li key={f.id} className="nav-item col-3">
              <button
                className={`nav-link ${activeTab === f.id ? "active" : ""}`}
                onClick={() => setActiveTab(f.id)}
              >
                <i className={`bi ${f.icon}`}></i>
                <h4 className="d-none d-lg-block">{f.title}</h4>
              </button>
            </li>
          ))}
        </ul>

        {/* Content */}
        <div className="tab-content mt-4">
          <FeatureTabContent feature={activeFeature} />
        </div>

      </div>
    </section>
  );
}

export default Features;