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
  {
    id: 4,
    image: "https://tse2.mm.bing.net/th/id/OIP.Zrz_pHBB3c33ExjlNZtaKgHaHa?r=0&pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3",
    name: "Sapana Padmane ",
    role: "Flutter Developer",
    discription:"Sapana works on mobile application development using Flutter, creating responsive and user-friendly mobile experiences. She contributes to cross-platform applications that support business operations on mobile devices.",
  },
  {
    id: 4,
    image: "https://tse2.mm.bing.net/th/id/OIP.Zrz_pHBB3c33ExjlNZtaKgHaHa?r=0&pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3",
    name: "Dipti Kanawade",
    role: "TDL Developer",
    discription:"Dipti specializes in Tally Definition Language development and Tally customization. She works on custom Tally modules, reports, vouchers, controls, and business-specific enhancements.",
  },
];

export default function Leadership() {
 const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % leadershipData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto h-[475px] w-[calc(100vw-2rem)] max-w-[720px] sm:h-[445px] lg:h-[320px]">
      {leadershipData.map((card, index) => (
        <div
          key={card.id}
          className={`absolute inset-0 shadow-xs transition-opacity duration-700 
            ${
              index === activeIndex
                ? "z-20 opacity-100"
                : "z-10 opacity-0"
            }
            `}
        >
        <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_4px_10px_rgba(15,23,42,0.10)] lg:grid lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-9" >
            <div className="flex items-center justify-center p-3 lg:p-0" >
            <img
              src={card.image}
              alt={card.name}
              className="h-44 w-full shrink-0 object-cover object-[center_20%] sm:h-48 lg:h-[244px] lg:w-[180px] lg:object-center"
            /> 
            </div>
            <div className="flex min-w-0 flex-col p-5 sm:px-6 sm:py-5 lg:self-stretch lg:pt-[49px] lg:pr-7 lg:pb-5 lg:pl-0">
              <h2 className="mb-0 mt-0 text-xl font-medium leading-tight text-slate-600 lg:text-[30px] lg:leading-none">
                {card.name}
              </h2>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[2px] text-[#2563EB] sm:text-[11px] sm:tracking-[3px] lg:mt-3">
                {card.role}
              </p >
              <p className="mt-5 max-w-[400px] text-sm leading-5 text-slate-600 lg:text-[15px] lg:leading-6">
              {card.discription}
              </p>    
            </div>
        </div>
      </div>
      ))}
    </div>
  );
}





















