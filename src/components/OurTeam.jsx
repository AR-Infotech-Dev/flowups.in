


import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, ShieldCheck } from "lucide-react";


function OurTeam() {
    return (
        <>

            {/* ===========================
          Page Banner
      ============================ */}
            <main className="about">
                {/* 🔥 Page Title */}
                <div
                    className="page-title dark-background"
                    data-aos="fade"
                    style={{
                        backgroundImage: "url(/images/page-title-bg.webp)",
                    }}
                >
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

            {/* ===========================
          Hero Section
      ============================ */}

            <section className="py-20   ">
                <div className="max-w-7xl mx-auto px-5 md:px-8  ">

                    <div className="grid lg:grid-cols-2 gap-14  items-center">

                        {/* Left Side */}

                        <div>

                            <div className="flex items-center gap-4 mb-6 ">

                                <span className="uppercase tracking-[4px] text-sm mb-3 font-semibold text-blue-600">
                                    Our Team
                                </span>

                                <div className="w-14 h-[2px] bg-blue-600"></div>

                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Leadership & Team
                            </h2>

                            <p className="mt-6 text-gray-600 leading-6 text-lg">
                                FlowupS Technologies Pvt. Ltd. is powered by directors,
                                developers, sales professionals, support specialists,
                                and technical advisors.

                                Together, our team brings strong business understanding,
                                Tally expertise, software development capability,
                                sales experience, and dependable client support.
                            </p>



                        </div>

                        {/* Right Side */}

                        <div className="relative">

                            {/* Card */}

                            <div className="relative z-30 w-full max-w-[720px] rounded-md border border-gray-200 bg-white px-8 py-9 shadow-md">

                                <div className="flex flex-col md:flex-row items-start gap-3 px-3 py-3 ">

                                    {/* Image Container */}
                                    <div className=" bg-white ">

                                        <div className="w-[185px] h-[200px]  rounded-lg">
                                            <img
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB6O7y_6WlEdisEmeoxZhTCknaVSUcS9GjScSmXhTH0mT-ELgtaJs8vqx-ae0LJTQNpfpvUm3TzrkvZfFivMUG--u7C765pD3e-FAR63Qnsv7WqvRY26QM3i-iIC8p3cjN_2SRfhQs_Sp9fNUYdhFp_PNg3fnA_V6adt7F2PlqYogTnm_9ePLoUT2ES7TpkPk_vg_AG69ijCxHX0WmmuCM5lS7VptPmYMTlhOyR_8CL4dKH0R52MgDLJ-vZz7nbaAHN23NmPyEmkSY"
                                                alt="Ranjit Ambare"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 py-10 px-10">

                                        <h3 className="text-2xl font-bold text-gray-900">
                                            Ranjit Ambare
                                        </h3>

                                        <p className="mt-2 uppercase tracking-[3px] text-xs font-semibold text-blue-700">
                                            Director - Tally Customization & Integration
                                        </p>

                                        <p className="mt-2 text-gray-600 leading-5">
                                            Ranjit brings over 12 years of industry experience in Tally
                                            customization, integration, and business process automation.
                                            He specializes in understanding complex business logic,
                                            preparing complete software schemas, and guiding development
                                            teams with practical technical inputs throughout the project lifecycle.
                                        </p>

                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </section>
            {/* ===========================
    Executive Leadership
=========================== */}

            <section className="bg-gray-50 py-20 ">
                <div className="max-w-7xl mx-auto px-5 md:px-8">

                    <div className="mb-14">
                        <h2 className="text-xs font-bold text-gray-900">
                            Executive Leadership
                        </h2>

                        <p className="mt-3 max-w-2xl text-gray-600 leading-7">
                            The strategic minds guiding FlowupS Technologies towards
                            technological excellence and long-term client success.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* Card 1 */}

                        <div className="bg-white rounded-md border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300">

                            <div className="flex flex-col sm:flex-row gap-6 px-3 py-3">

                                <div className="w-[185px] h-[200px]    flex-shrink-0">

                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB6O7y_6WlEdisEmeoxZhTCknaVSUcS9GjScSmXhTH0mT-ELgtaJs8vqx-ae0LJTQNpfpvUm3TzrkvZfFivMUG--u7C765pD3e-FAR63Qnsv7WqvRY26QM3i-iIC8p3cjN_2SRfhQs_Sp9fNUYdhFp_PNg3fnA_V6adt7F2PlqYogTnm_9ePLoUT2ES7TpkPk_vg_AG69ijCxHX0WmmuCM5lS7VptPmYMTlhOyR_8CL4dKH0R52MgDLJ-vZz7nbaAHN23NmPyEmkSY"
                                        alt="Anjan Ambre"
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                <div>

                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Anjan Ambre
                                    </h3>

                                    <p className="mt-2 uppercase tracking-[3px] text-xs font-semibold text-blue-700">
                                        Director – Sales, Requirements & Finance
                                    </p>

                                    <p className="mt-2 text-gray-600 leading-5">
                                        Anjan leads sales, client communication, requirement
                                        gathering, finance, and client-side support at
                                        FlowupS Technologies.

                                        With strong business understanding and customer handling
                                        skills, he ensures every solution starts with clear
                                        requirements and continues with reliable client
                                        coordination.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Card 2 */}

                        <div className="bg-white rounded-md border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300">

                            <div className="flex flex-col sm:flex-row gap-6 px-3 py-3">

                                <div className="w-[185px] h-[200px]  rounded-xl  flex-shrink-0">

                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpbmxiWILQ1wTCf2GcfAFlF2UBDcVBqkVMEFkkCjdn3nUkeSVRUmErhkO2j6l0Dk_d2MPmYbsn7dZ-W_J1kjVuxg4QxDFay2seeEnNUrEj9kDd1eZH2cNQV6kTuex-r8q9cHE1izBTOI4-UmuV5CggEwJpHaVcF8hlN9YHXAQzJMVaSvbkZHajVUg3i_l47G0GuRhB7NQoEELaKQum2U8a8pAElHKIk6MBb3gya3t8NfF9sxiaRP87wPyffbWQ4O4UmkR2nO6SdSbp"
                                        alt="Aniket Sonawane"
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                <div>

                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Aniket Sonawane
                                    </h3>

                                    <p className="mt-2 uppercase tracking-[3px] text-xs font-semibold text-blue-700">
                                        Full Stack Developer / Team Lead
                                    </p>

                                    <p className="mt-2 text-gray-600 leading-5">
                                        Aniket is a skilled Full Stack Developer and Team Lead
                                        with strong ownership and leadership qualities.

                                        He contributes to software architecture, development,
                                        implementation, and project coordination, ensuring the
                                        delivery of scalable and reliable business applications.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* ===========================
    Our Experts
=========================== */}

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-5 md:px-8 bg-[#F6F3F2] p-4">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Our Experts
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
                            Specialized professionals driving innovation and delivering
                            technology solutions across multiple domains.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Flutter Developer */}

                        <div className="group flex items-center gap-2 rounded-2xl border border-gray-200 bg-white  p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="h-35 w-35 flex-shrink-0  p-4">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxsVy4wQfUUuQZ0_D5ZUJoUmmqT1B8leRLCqwXnaccmVzo72BdcFiij0PPH4sHIU9dAnhBBa7Kot4ZOX5FfX5t_3ThQZIHlj7NZXfJLrSrfv0uyEIR6c8Cd0KYHWG9H0newQVCDIYXsCmh4Mn106R2k3JIyzpxVwECuSIFdOcVpqqocShc4Anof8q87cJR7MUQkm2Zo9Cflk07Iu4Zwj6PUOSjJ9z62clYOTaVsxZtjSIin131KtoiaGbyXpbQpslFZ7F9jXsaIaa8"
                                    alt="Sapana Padmane"
                                    className="h-full w-full object-cover "
                                />

                            </div>

                            <div>

                                <h3 className="text-xl font-bold text-gray-900">
                                    Sapana Padmane
                                </h3>

                                <p className="mt-2 text-xs font-semibold uppercase tracking-[3px] text-blue-600">
                                    Flutter Developer
                                </p>

                                <p className="mt-3 text-gray-600 leading-5">
                                    Mobile application specialist focused on building
                                    responsive, scalable, and cross-platform Flutter
                                    applications with modern UI and smooth user experience.
                                </p>

                            </div>

                        </div>

                        {/* TDL Developer */}

                        <div className="group flex items-center gap-1 rounded-2xl border border-gray-200 bg-white  p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="h-35 w-35 flex-shrink-0  p-4">

                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5jIi7KYim9cCpsx66jVD929u0qyJPCkhj7KmUIX6zlNUpHFb5BE74a8QvMOIWlQBBDNmoztQtzGfMpwBszUdAYx1vdZkieGiXYWHut-YiA4WKucPsDrVALa8pvDaxednrCfpkf8AAdJVPja1H-xF231q73cQyt8M7430jzYr8N4GB69PAVR1X_-Wk_R-EXoKjKf5dWg0QwGjpue99G3MCBf7Z0HyGbEoZZROS9c-Yf54sp8KiX0ZdIMoR0oB2DhRsIf-o4qglynoU"
                                    alt="Dipti Kanawade"
                                    className="h-full w-full object-cover"
                                />

                            </div>

                            <div>

                                <h3 className="text-xl font-bold pt-2 text-gray-900">
                                    Dipti Kanawade
                                </h3>

                                <p className="mt-2 text-xs font-semibold uppercase tracking-[3px] text-blue-600">
                                    TDL Developer
                                </p>

                                <p className="mt-1 text-gray-600 leading-5">
                                    Specialized in Tally Definition Language (TDL),
                                    customization, business automation, and enterprise
                                    software enhancements for client-specific requirements.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* ===========================
    Development & Sales Team
=========================== */}



            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-5 md:px-8 bg-[#F6F3F2]p-4">

                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* ================= Development Team ================= */}

                        <div>

                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-sm font-bold text-gray-900">
                                    Development Team
                                </h2>

                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>

                            <p className="text-gray-600 leading-7 mb-8">
                                Our development team builds scalable business applications,
                                dashboards, workflow modules, APIs and enterprise software
                                solutions with modern technologies.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                                {/* Abhishek */}

                                <div className="flex items-center gap-4  border border-gray-200 bg-white p-2 shadow-sm hover:shadow-lg transition-all duration-300">

                                    <div className="w-12 h-12 rounded-full overflow-hidden">

                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwOQIEqorROMXHgt0YJZ0AKfrUrDdwVtaU0Q3Dx-AY3WmMjJFqSYQIo40QjFjnDjz2eXAKK4AHlHG4GMBhphIV5cakugM4W7vOy8q1DKqQjvL0rGyMfafr9BjeuN2AyubcsKtq2DnYwngwR6dQ5f9LrhxISpPFhnIkqJ3gnRS9Y3SbfWTShe4sYV3hznMBeyjrWFJGM9h6ZB9qU20T9OS7epVY-9rtB5Uv_izOkfj9iOdHPA2PZfllD81M3APLAiQZw00PSqF7XD5Q"
                                            alt="Abhishek Kanawade"
                                            className="w-full h-full object-cover"
                                        />

                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            Abhishek Kanawade
                                        </h4>
                                    </div>

                                </div>

                                {/* Sakhi */}

                                <div className="flex items-center gap-4  border border-gray-200 bg-white p-2 shadow-sm hover:shadow-lg transition-all duration-300">

                                    <div className="w-12 h-12 rounded-full overflow-hidden">

                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpgzYi84u6Kc9f5ND4_7lbp72_Uz_c2fiSPMjSo61iIlIzF2ceJ8jluEhxwvCEntWOzOPOYOekC1xZqvNff2x_2Cf-ZOKGKectdunUcGn-gIPE8eU-5u5RPSdwLZxDxzZdwpxWjM48RWs4CMveVGh2oC9mrvJCRXII5D14xyzOYU6Zo5_RxQVEtHiwlw3KEL-jbjRJhzEga6pWVbY9ohEKNAtvASAnFAs_WngkYiWJYz49t2KFGBajTVQ3MXFAJx8eHOkdGWzDwb5M"
                                            alt="Sakshi Kasar"
                                            className="w-full h-full object-cover"
                                        />

                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            Sakshi Kasar
                                        </h4>
                                    </div>

                                </div>

                                {/* Gayatri */}


                                <div className="flex items-center gap-4  border border-gray-200 bg-white p-2 shadow-sm hover:shadow-lg transition-all duration-300">

                                    <div className="w-12 h-12 rounded-full overflow-hidden">

                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpgzYi84u6Kc9f5ND4_7lbp72_Uz_c2fiSPMjSo61iIlIzF2ceJ8jluEhxwvCEntWOzOPOYOekC1xZqvNff2x_2Cf-ZOKGKectdunUcGn-gIPE8eU-5u5RPSdwLZxDxzZdwpxWjM48RWs4CMveVGh2oC9mrvJCRXII5D14xyzOYU6Zo5_RxQVEtHiwlw3KEL-jbjRJhzEga6pWVbY9ohEKNAtvASAnFAs_WngkYiWJYz49t2KFGBajTVQ3MXFAJx8eHOkdGWzDwb5M"
                                            alt="Sakshi Kasar"
                                            className="w-full h-full object-cover"
                                        />

                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            Gayatri Kute
                                        </h4>
                                    </div>

                                </div>

                                {/* Ishwari */}

                                <div className="flex items-center gap-4  border border-gray-200 bg-white p-2  shadow-sm hover:shadow-lg transition-all duration-300">

                                    <div className="w-12 h-12 rounded-full overflow-hidden">

                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpgzYi84u6Kc9f5ND4_7lbp72_Uz_c2fiSPMjSo61iIlIzF2ceJ8jluEhxwvCEntWOzOPOYOekC1xZqvNff2x_2Cf-ZOKGKectdunUcGn-gIPE8eU-5u5RPSdwLZxDxzZdwpxWjM48RWs4CMveVGh2oC9mrvJCRXII5D14xyzOYU6Zo5_RxQVEtHiwlw3KEL-jbjRJhzEga6pWVbY9ohEKNAtvASAnFAs_WngkYiWJYz49t2KFGBajTVQ3MXFAJx8eHOkdGWzDwb5M"
                                            alt="Sakshi Kasar"
                                            className="w-full h-full object-cover"
                                        />

                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            Ishwari Mhaske
                                        </h4>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* ================= Sales Team ================= */}

                        <div>

                            <div className="flex items-center gap-4 mb-8">

                                <h2 className="text-3xl font-bold text-gray-900">
                                    Sales Team
                                </h2>

                                <div className="flex-1 h-px bg-gray-300"></div>

                            </div>

                            <p className="text-gray-600 leading-7 mb-8">
                                Our sales professionals manage customer communication,
                                requirement discussions, onboarding, and client
                                relationship management.
                            </p>

                            <div className=" border border-gray-200 bg-white p-2 shadow-sm hover:shadow-xl transition-all duration-300">

                                <div className="flex items-center gap-5">

                                    <div className="w-16 h-16 rounded-full overflow-hidden">

                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfhg6VAhZDu0GwtjviiSw19fy7O5v-a6chJepjaaDcdaAsrZZVXpt96i0b75uixOr8l-im2i0K0lVKyDqaEdzDDgfR2SrTKqzD0i5izlJTFsUalFga-TbXwzRXnGDNOvJNFV1QN8LISTNVmwqAJ3aQF6QKEmM7UcfciNwgoopFq8U1LqlvEi0vYjzRe11CrjIYnHbFzh-tEZTvJjig0SSiqKwgb-5rAm8PltqxgyFmALI6XC7J9LhdfYD-OJPFb3WFzeHKWOax5-PG"
                                            alt="Mangesh Wakchaure"
                                            className="w-full h-full object-cover"
                                        />

                                    </div>

                                    <div>

                                        <h3 className="text-xl font-bold text-gray-900">
                                            Mangesh Wakchaure
                                        </h3>

                                        <p className="text-sm text-blue-600 uppercase tracking-widest mt-1">
                                            Client Coordination & Support
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* ===========================
    Technical Advisors
=========================== */}

            <section className="py-20">
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

                        {/* Advisor 1 */}

                        <div className="bg-white border border-gray-200 rounded-md p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300">

                            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mt-4 mb-3">

                                <ShieldCheck className="w-6 h-6 text-blue-600" pt-5 />

                            </div>

                            <h3 className="text-md font-semibold text-gray-900">
                                Rohit Dave
                            </h3>

                        </div>

                        {/* Advisor 2 */}

                        <div className="bg-white border border-gray-200 rounded-md p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mt-4 mb-3">

                                <ShieldCheck className="w-6 h-6 text-blue-600" pt-5 />

                            </div>

                            <h3 className="text-md font-semibold text-gray-900">
                                Ashish Shinde
                            </h3>

                        </div>

                        {/* Advisor 3 */}
                        <div className="bg-white border border-gray-200 rounded-md p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300">
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