


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





















