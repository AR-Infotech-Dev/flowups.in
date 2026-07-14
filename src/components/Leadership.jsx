
// const leaderScreens = [
//   {
//     label: "Dipti",
//     title: "A clear operational overview",
//     description: "See tickets, workload, users, companies, and progress from one focused dashboard.",
//     image: "/images/flowups-dashboard.png",
//   },
//   {
//     label: "Gaytri",
//     title: "Every ticket, easy to review",
//     description: "Search, filter, assign, prioritize, and review customer tickets in a structured table.",
//     image: "/images/flowups-ticket-table.png",
//   },
//   {
//     label: "Ishwari",
//     title: "Work moves visibly",
//     description: "Track open, in-progress, pending, and closed work through a clean Kanban workflow.",
//     image: "/images/flowups-ticket-kanban.png",
//   },
// ];

// function Leadership() {
//   const [activeScreen, setActiveScreen] = useState(0);
//   const screen = leaderScreens[activeScreen];

//   useEffect(() => {
//     const rotation = window.setInterval(() => {
//       setActiveScreen((current) => (current + 1) % leaderScreens.length);
//     }, 3800);

//     return () => window.clearInterval(rotation);
//   }, []);

//   return (
//     <div className="product-screenshot-showcase">
//       <div className="product-screen-stack" aria-label="Flowups CallDesk product screenshots">
//         {leaderScreens.map((item, index) => (
//           <div
//             className={`product-screen-frame ${activeScreen === index ? "is-active" : "is-hidden"}`}
//             aria-hidden={activeScreen !== index}
//             key={item.label}
//           >
//             <img src={item.image} alt={activeScreen === index ? `Flowups CallDesk ${item.label} screen` : ""} />
//           </div>
//         ))}
//         <div className="product-screen-progress" aria-hidden="true">
//           {leaderScreens.map((item, index) => (
//             <span className={activeScreen === index ? "active" : ""} key={item.label} />
//           ))}
//         </div>
//       </div>

//       <div className="product-screen-caption" key={screen.label}>
//         <div>
//           <span>Product view</span>
//           <h3>{screen.title}</h3>
//         </div>
//         <p>{screen.description}</p>
//       </div>
//     </div>
//   );
// }
// export default Leadership;


import { useState, useEffect } from "react";
import {
  AtSign,
  Share2,
} from "lucide-react";

const leadershipData = [
  {
    id: 1,
    image: "https://tse2.mm.bing.net/th/id/OIP.Zrz_pHBB3c33ExjlNZtaKgHaHa?r=0&pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3",
    name: "Ranjit Ambre",
    role: "DIRECTOR-Tally Customization & Integration",
    
    discription:"Ranjit brings over 12 years of industry experience in Tally customization, integration, and business process automation. He specializes in understanding complex business logic, preparing complete software schemas, and guiding development teams with practical technical inputs throughout the project lifecycle."

  },
  {
    id: 2,
    image: "https://tse3.mm.bing.net/th/id/OIP.yxmtYxXdM1CwNnL7lSCtrwHaFj?r=0&pid=ImgDet&w=184&h=138&c=7&dpr=1.3&o=7&rm=3",
    name: "Anjan Ambre",
    role: "DIRECTOR -Sales, Requirements & Finance ",
    
    discription:"Anjan leads sales, client communication, requirement gathering, finance, and client-side supportat FlowupS Technologies. With strong business understanding and customer handling skills, he ensures that every solution begins with clear requirements and continues with reliable client coordination."

  },
  {
    id: 3,
    image: "https://tse2.mm.bing.net/th/id/OIP.Zrz_pHBB3c33ExjlNZtaKgHaHa?r=0&pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3",
    name: "Aniket Sonawane ",
    role: "Full Stack Developer / Team Lead",

    discription:"Aniket is a skilled full stack developer who works with strong ownership and team leadership. He contributes to software architecture, development, implementation, and coordination across projects, helping the team deliver reliable business applications.",

  },

];

export default function Leadership() {
  const [cards, setCards] = useState(leadershipData);

  const nextCard = () => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const firstCard = updatedCards.shift();
      updatedCards.push(firstCard);
      return updatedCards;
    });

  };
 useEffect(() => {
  const interval = setInterval(() => {
    nextCard();
  },  3800); // 10 minutes

  return () => clearInterval(interval);
}, []);

  return (

    <div className="relative w-[660px] h-[320px] mx-auto">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`absolute w-full h-full rounded-3xl shadow-2xl transition-all duration-700
            ${index === 0
              ? "translate-x-0 translate-y-0 scale-100 z-30"
              : index === 1
                ? "translate-x-10 translate-y-4 scale-95 z-20"
                : "translate-x-16 translate-y-8 scale-90 z-10"
            }`}
        >
       <div className="w-full h-full bg-white border border-gray-800 flex items-center   gap-5">

  <img
    src={card.image}
    alt={card.title}
    className="relative right-[-23px] w-[200px] h-[250px] object-cover shrink-0"
  />

  <div className="flex flex-col ">

    <h2 className="text-[22px] mt-1.5 font-bold text-[#202020] leading-none">
      {card.name}
    </h2>
    
  

    <p className="mt-2 text-[11px] tracking-[3px] uppercase font-semibold text-[#2563EB]">
      {card.role}

    </p >
    

    <p className="mt-2 text-[15px] leading-7 text-[#555] max-w-[420px]">
     {card.discription}
    </p>

    

  </div>

</div>


        </div>
      ))}
    </div>
  );
}




















// import { Mail, Share2 } from "lucide-react";
// import { useState, useEffect } from "react";


// const leadershipData = [
//   {
//     id: 1,
//     image: "https://www.bing.com/th/id/OIP.F5tw9mSAY2Jc09_7n1EUFwHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
//     name: "Ranjit Ambre",
//     role: "DIRECTOR & CHIEF STRATEGIST",
//     description:
//       "Visionary leader with over 20 years in enterprise architecture, specializing in scaling technical operations and strategic partnerships.",
   
//   },

//   {
//     id: 2,
//     image: "https://www.bing.com/th/id/OIP.ZdskIQ2l2VEb5e4jGZhbjQHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
//     name: "Aniket Patil",
//     role: "CHIEF TECHNOLOGY OFFICER",
//     description:
//       "Experienced technology leader focused on software architecture, scalable systems, and innovation.",
//     email: "mailto:aniket@example.com",
//     linkedin: "https://linkedin.com/",
//   },

//   {
//     id: 3,
//     image: "https://www.bing.com/th/id/OIP.8XQ5JZ5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5J five",
//     name: "Rahul Sharma",
//     role: "PROJECT DIRECTOR",
//     description:
//       "Leads cross-functional teams with expertise in project execution, delivery management, and client success.",
//     email: "mailto:rahul@example.com",
//     linkedin: "https://linkedin.com/",
//   },
// ];


// export default function Leadership() {
//   const [cards, setCards] = useState(leadershipData);

//   const nextCard = () => {
//     setCards((prevCards) => {
//       const updatedCards = [...prevCards];
//       const firstCard = updatedCards.shift();
//       updatedCards.push(firstCard);
//       return updatedCards;
//     });

//   };
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextCard();
//     }, 10000); // Change card every 10 seconds

//     return () => clearInterval(interval); // Cleanup on unmount

//   }, []);
//   return (
//     <section className="max-w-6xl mx-auto border border-8 rounded-lg shadow-lg bg-white">
//       <div className="flex gap-4 border-2">
//       <div>
        
//         <img
//     src={leadershipData.image}
//      alt={leadershipData.title}
//      className="w-[200px] h-[250px] object-cover ml-3.5"
// />
//       </div>
//       <div>
//          <h2 className="text-3xl font-bold text-center mb-8">Our Leadership Team 2</h2>
//       </div>
//       </div>
//     </section>
//   );
// }