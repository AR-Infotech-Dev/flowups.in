import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, ShieldCheck } from "lucide-react";

function TeamCard({ name = "", image = "", description = "", designation = "" }) {
    return (
        <>
            <div className="relative z-30 w-full max-w-[50%] rounded-sm border border-gray-200 bg-white px-1.5 py-1 shadow-md hover:shadow-xl transition-all" data-aos="fade-up">
                <div className="flex flex-col md:flex-row items-start gap-3 px-2 py-2 ">
                    {/* Image Container */}
                    <div className=" bg-white ">
                        <div className="lg:w-46.25 lg:h-55 md:h-80 rounded-lg">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 px-2">
                        <h3 className="text-xl! font-bold text-gray-900"> {name} </h3>
                        <p className="mt-0 uppercase tracking-[2px] text-[10px] font-semibold text-blue-700"> {designation}</p>
                        <p className="mt-0 text-gray-600 text-sm leading-5 text-justify">{description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
function TeamCardSM({ name = "", image = "", description = "", designation = "" }) {
    return (
        <>
            <div className="relative z-30 w-full max-w-full  rounded-sm border border-gray-200 bg-white  shadow-md hover:shadow-2xl transition-all" data-aos="fade-up">
                <div className="flex flex-col md:flex-row items-start gap-3 px-3 py-3 ">
                    {/* Image Container */}
                    <div className=" bg-white ">
                        <div className="h-20 w-20 flex-shrink-0p-4">
                            <img src={image} alt="Sapana Padmane" className="h-full w-full object-cover " />
                        </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 px-1">
                        <h3 className="text-[16px]! text-sm font-bold text-gray-900 mb-1!"> {name} </h3>
                        <p className="uppercase tracking-[1px] text-[10px] font-semibold text-blue-700 mb-1! "> {designation}</p>
                        <p className="text-gray-600 leading-3.5 text-[11px]! text-justify m-0!">{description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
const DevelopmentTeamCard = ({ name = "", image = "", description = "", designation = "" }) => {
    return (
        <div className="flex items-center rounded-sm gap-3 border border-gray-200 bg-white p-2 shadow-sm hover:shadow-lg transition-all duration-300" data-aos="fade-up">
            <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover" />
            </div>
            <div>
                <h4 className="font-semibold text-[20px]! text-gray-800 mb-0"> {name}</h4>
                <p className="font-thin text-[10px]! text-gray-800! mb-0"> Software Developer</p>
            </div>
        </div>
    );
}
const SalesTeamCard = ({ name = "", image = "", description = "", designation = "" }) => {
    return (
        <div className="border border-gray-200 bg-white p-3 md:p-4 shadow-sm hover:shadow-xl transition-all duration-300" data-aos="fade-up">
            <div className="flex items-center gap-3 md:gap-5">
                <div className="w-17 h-17 rounded-full overflow-hidden ">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <h3 className="text-[20px]! md:text-xl font-bold text-gray-900"> {name} </h3>
                    <p className="text-xs md:text-sm text-blue-600 uppercase tracking-wide md:tracking-[2px] mb-1"> {designation} </p>
                    <p className="text-gray-600 leading-3.5 text-sm! text-justify">{description}</p>
                </div>
            </div>
        </div>
    );
}

function OurTeam() {
    return (
        <>
            <main className="about">
                {/* 🔥 Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: "url(/images/page-title-bg.webp)", }} >
                    <div className="container position-relative">
                        <h1>Our Team</h1>
                        <p></p>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/our-team">Our Team</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </main>

            <section className="py-20" data-aos="fade-up">
                <div className="max-w-7xl mx-auto px-5 md:px-8  ">
                    <div className="grid lg:grid-cols-1 gap-10  items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6 ">
                                <span className="uppercase tracking-[4px] text-sm mb-3 font-semibold text-blue-400">
                                    Executive Leadership
                                </span>
                                <div className="w-14 h-0.5 bg-blue-200"></div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"> Leadership & Team </h2>
                            <p className="mt-6 text-gray-600 leading-6 text-lg text-justify">
                                FlowupS Technologies Pvt. Ltd. is powered by directors,
                                developers, sales professionals, support specialists,
                                and technical advisors.

                                Together, our team brings strong business understanding,
                                Tally expertise, software development capability,
                                sales experience, and dependable client support.
                            </p>
                        </div>
                        {/* Right Side */}
                        <div className="relative flex gap-5">
                            {/* Card */}
                            <TeamCard
                                name="Ranjit Ambare"
                                designation=" Director - Tally Customization & Integration "
                                description={<>
                                    <p>
                                        Ranjit brings over 12 years of industry experience in Tally
                                        customization, integration, and business process automation.
                                        <br />He specializes in understanding complex business logic,
                                        preparing complete software schemas, and guiding development
                                        teams with practical technical inputs throughout the project lifecycle.
                                    </p>
                                </>}
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCB6O7y_6WlEdisEmeoxZhTCknaVSUcS9GjScSmXhTH0mT-ELgtaJs8vqx-ae0LJTQNpfpvUm3TzrkvZfFivMUG--u7C765pD3e-FAR63Qnsv7WqvRY26QM3i-iIC8p3cjN_2SRfhQs_Sp9fNUYdhFp_PNg3fnA_V6adt7F2PlqYogTnm_9ePLoUT2ES7TpkPk_vg_AG69ijCxHX0WmmuCM5lS7VptPmYMTlhOyR_8CL4dKH0R52MgDLJ-vZz7nbaAHN23NmPyEmkSY"
                            />
                            <TeamCard
                                name="Anjan Ambre"
                                description={<>
                                    <p className="">Anjan leads sales, client communication, requirement
                                        gathering, finance, and client-side support at
                                        FlowupS Technologies.</p>
                                    <p className="">
                                        With strong business understanding and customer handling
                                        skills, he ensures every solution starts with clear
                                        requirements and continues with reliable client
                                        coordination.</p>
                                </>}
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCB6O7y_6WlEdisEmeoxZhTCknaVSUcS9GjScSmXhTH0mT-ELgtaJs8vqx-ae0LJTQNpfpvUm3TzrkvZfFivMUG--u7C765pD3e-FAR63Qnsv7WqvRY26QM3i-iIC8p3cjN_2SRfhQs_Sp9fNUYdhFp_PNg3fnA_V6adt7F2PlqYogTnm_9ePLoUT2ES7TpkPk_vg_AG69ijCxHX0WmmuCM5lS7VptPmYMTlhOyR_8CL4dKH0R52MgDLJ-vZz7nbaAHN23NmPyEmkSY"
                                designation="Director – Sales, Requirements & Finance"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F6F3F2]!" data-aos="fade-up">
                <div className="max-w-7xl mx-auto px-5 md:px-8 bg-[#F6F3F2] p-4">
                    <div className="text-center mb-17!">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Our Experts
                        </h2>
                        <p className="mt-2.5 max-w-2xl mx-auto text-gray-600 leading-7">
                            Specialized professionals driving innovation and delivering technology solutions across multiple domains.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 max-w-full gap-3 mx-auto">
                        <TeamCardSM
                            name="Aniket Sonawane"
                            designation="Full Stack Developer / Team Lead"
                            description={"Expert in software architecture and cross-project implementation."}
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCpbmxiWILQ1wTCf2GcfAFlF2UBDcVBqkVMEFkkCjdn3nUkeSVRUmErhkO2j6l0Dk_d2MPmYbsn7dZ-W_J1kjVuxg4QxDFay2seeEnNUrEj9kDd1eZH2cNQV6kTuex-r8q9cHE1izBTOI4-UmuV5CggEwJpHaVcF8hlN9YHXAQzJMVaSvbkZHajVUg3i_l47G0GuRhB7NQoEELaKQum2U8a8pAElHKIk6MBb3gya3t8NfF9sxiaRP87wPyffbWQ4O4UmkR2nO6SdSbp"
                        />
                        <TeamCardSM
                            name="Sapana Padmane"
                            designation="Flutter Developer"
                            description={
                                "Specializing in high-performance cross-platform mobile applications."
                            }
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCxsVy4wQfUUuQZ0_D5ZUJoUmmqT1B8leRLCqwXnaccmVzo72BdcFiij0PPH4sHIU9dAnhBBa7Kot4ZOX5FfX5t_3ThQZIHlj7NZXfJLrSrfv0uyEIR6c8Cd0KYHWG9H0newQVCDIYXsCmh4Mn106R2k3JIyzpxVwECuSIFdOcVpqqocShc4Anof8q87cJR7MUQkm2Zo9Cflk07Iu4Zwj6PUOSjJ9z62clYOTaVsxZtjSIin131KtoiaGbyXpbQpslFZ7F9jXsaIaa8"
                        />
                        <TeamCardSM
                            name="Dipti Kanawade"
                            designation="TDL Developer"
                            description={
                                "Expert in Tally Definition Language for custom business modules."
                            }
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuD5jIi7KYim9cCpsx66jVD929u0qyJPCkhj7KmUIX6zlNUpHFb5BE74a8QvMOIWlQBBDNmoztQtzGfMpwBszUdAYx1vdZkieGiXYWHut-YiA4WKucPsDrVALa8pvDaxednrCfpkf8AAdJVPja1H-xF231q73cQyt8M7430jzYr8N4GB69PAVR1X_-Wk_R-EXoKjKf5dWg0QwGjpue99G3MCBf7Z0HyGbEoZZROS9c-Yf54sp8KiX0ZdIMoR0oB2DhRsIf-o4qglynoU"
                        />
                    </div>
                </div>
            </section>

            <section className=" py-20 bg-[#fefbfb]!" data-aos="fade-up">
                <div className="max-w-7xl mx-auto px-5 md:px-8 bg-[#F6F3F2]p-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <div className="flex items-center gap-4 mb-16!">
                                <h2 className="text-sm font-bold text-gray-900">
                                    Development Team
                                </h2>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>
                            {/* <p className="text-gray-600 leading-7 mb-8">
                                Our development team builds scalable business applications,
                                dashboards, workflow modules, APIs and enterprise software
                                solutions with modern technologies.
                            </p> */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <DevelopmentTeamCard name="Abhishek Kanawade" image="https://lh3.googleusercontent.com/aida-public/AB6AXuCwOQIEqorROMXHgt0YJZ0AKfrUrDdwVtaU0Q3Dx-AY3WmMjJFqSYQIo40QjFjnDjz2eXAKK4AHlHG4GMBhphIV5cakugM4W7vOy8q1DKqQjvL0rGyMfafr9BjeuN2AyubcsKtq2DnYwngwR6dQ5f9LrhxISpPFhnIkqJ3gnRS9Y3SbfWTShe4sYV3hznMBeyjrWFJGM9h6ZB9qU20T9OS7epVY-9rtB5Uv_izOkfj9iOdHPA2PZfllD81M3APLAiQZw00PSqF7XD5Q" description="" />
                                <DevelopmentTeamCard name="Sakshi Kasar" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBpgzYi84u6Kc9f5ND4_7lbp72_Uz_c2fiSPMjSo61iIlIzF2ceJ8jluEhxwvCEntWOzOPOYOekC1xZqvNff2x_2Cf-ZOKGKectdunUcGn-gIPE8eU-5u5RPSdwLZxDxzZdwpxWjM48RWs4CMveVGh2oC9mrvJCRXII5D14xyzOYU6Zo5_RxQVEtHiwlw3KEL-jbjRJhzEga6pWVbY9ohEKNAtvASAnFAs_WngkYiWJYz49t2KFGBajTVQ3MXFAJx8eHOkdGWzDwb5M" description="" />
                                <DevelopmentTeamCard name="Gayatri Kute" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBpgzYi84u6Kc9f5ND4_7lbp72_Uz_c2fiSPMjSo61iIlIzF2ceJ8jluEhxwvCEntWOzOPOYOekC1xZqvNff2x_2Cf-ZOKGKectdunUcGn-gIPE8eU-5u5RPSdwLZxDxzZdwpxWjM48RWs4CMveVGh2oC9mrvJCRXII5D14xyzOYU6Zo5_RxQVEtHiwlw3KEL-jbjRJhzEga6pWVbY9ohEKNAtvASAnFAs_WngkYiWJYz49t2KFGBajTVQ3MXFAJx8eHOkdGWzDwb5M" description="" />
                                <DevelopmentTeamCard name="Ishwari Mhaske" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBpgzYi84u6Kc9f5ND4_7lbp72_Uz_c2fiSPMjSo61iIlIzF2ceJ8jluEhxwvCEntWOzOPOYOekC1xZqvNff2x_2Cf-ZOKGKectdunUcGn-gIPE8eU-5u5RPSdwLZxDxzZdwpxWjM48RWs4CMveVGh2oC9mrvJCRXII5D14xyzOYU6Zo5_RxQVEtHiwlw3KEL-jbjRJhzEga6pWVbY9ohEKNAtvASAnFAs_WngkYiWJYz49t2KFGBajTVQ3MXFAJx8eHOkdGWzDwb5M" description="" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-16!">
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Sales Team
                                </h2>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>
                            {/* <p className="text-gray-600 leading-7 mb-8">
                                Our sales professionals manage customer communication,
                                requirement discussions, onboarding, and client
                                relationship management.
                            </p> */}

                            <SalesTeamCard name="Mangesh Wakchaure" image="https://lh3.googleusercontent.com/aida-public/AB6AXuDfhg6VAhZDu0GwtjviiSw19fy7O5v-a6chJepjaaDcdaAsrZZVXpt96i0b75uixOr8l-im2i0K0lVKyDqaEdzDDgfR2SrTKqzD0i5izlJTFsUalFga-TbXwzRXnGDNOvJNFV1QN8LISTNVmwqAJ3aQF6QKEmM7UcfciNwgoopFq8U1LqlvEi0vYjzRe11CrjIYnHbFzh-tEZTvJjig0SSiqKwgb-5rAm8PltqxgyFmALI6XC7J9LhdfYD-OJPFb3WFzeHKWOax5-PG" designation="Client Coordination & Support" description="Supporting sales communication and onboarding to ensure smooth client engagement." />

                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20" data-aos="fade-up">
                <div className="max-w-7xl mx-auto px-5 md:px-8">

                    <div className="mb-14 text-center">

                        <h2 className="text-4xl font-bold text-gray-900">
                            Technical Advisors
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-7">
                            Our technical advisors help us with software architecture,
                            implementation strategy, technology decisions, and
                            development guidance.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="h-fit bg-white border border-gray-200 rounded-md p-1 text-center shadow-sm hover:shadow-xl transition-all duration-300" data-os="fade-up">
                            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mt-4 mb-3">
                                <ShieldCheck className="w-6 h-6 text-blue-600" pt-5 />
                            </div>
                            <h3 className="text-md font-semibold text-gray-900">
                                Ashish Shinde
                            </h3>
                        </div>
                        <div className="h-fit bg-white border border-gray-200 rounded-md p-1 text-center shadow-sm hover:shadow-xl transition-all duration-300" data-os="fade-up">
                            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mt-4 mb-3">
                                <ShieldCheck className="w-6 h-6 text-blue-600" pt-5 />
                            </div>
                            <h3 className="text-md font-semibold text-gray-900">
                                Rohit Dave
                            </h3>
                        </div>
                        <div className="h-fit bg-white border border-gray-200 rounded-md p-1 text-center shadow-sm hover:shadow-xl transition-all duration-300" data-os="fade-up">
                            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mt-4 mb-3">
                                <ShieldCheck className="w-6 h-6 text-blue-600" pt-5 />
                            </div>
                            <h3 className="text-md font-semibold text-gray-900">
                                Suraj Jadhav
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===========================
    CTA Section
=========================== */}

            {/* <section className="relative overflow-hidden bg-slate-900 py-24"> */}

            {/* Background Blur */}

            {/* <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"></div>

  <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

  <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">

    <h2 className="text-4xl md:text-5xl font-bold text-white">
      Build the Future With Us
    </h2>

    <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
      We are always looking for passionate developers,
      designers, innovators, and problem-solvers who
      want to build modern business solutions and make
      a real impact through technology.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

      <button className="rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-blue-700">
        View Openings
      </button>

      <button className="rounded-xl border border-gray-500 px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900">
        Send Your CV
      </button>

    </div>

  </div>

</section> */}


        </>
    );
}

export default OurTeam;



