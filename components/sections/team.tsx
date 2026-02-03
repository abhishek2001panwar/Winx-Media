import Link from "next/link";
import React from "react";

const team = [
  {
    name: "Sangeetha Singh",
    role: "Co-Founder",
    description:
      "Visionary leader driving brand excellence and creative innovation.",
    image:
      "https://winxmarketingmedia.in/wp-content/uploads/2025/06/Untitled-design-29.png",
    gradient: "from-violet-400 to-purple-400",
  },
  {
    name: "M N K Khajukathara",
    role: "Co-Founder",
    description: "Strategic mind behind transformative marketing solutions.",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/06/2-1.png",
    gradient: "from-pink-300 to-rose-300",
  },
  {
    name: "V Preetham Raju",
    role: "Strategic Partner",
    description:
      "Empowering brands with strategic insights and market expertise.",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/10/1.png",
    gradient: "from-purple-400 to-pink-400",
  },
  {
    name: "Dharam T",
    role: "Strategic Partner",
    description: "Driving strategic growth and innovative partnerships.",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/10/2.png",
    gradient: "from-cyan-400 to-blue-400",
  },
 

];

export default function TeamPage() {
  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Sticky Notes Header */}
      <div className="">
        <div className="relative">
          {/* Main sticky note */}
          <div className="bg-yellow-200 rounded-sm px-6 mt-5 py-4 shadow-lg transform rotate-2 relative">
            {/* Sticky note tape effect */}
            <div className="absolute -top-2 left-4 w-8 h-4 bg-yellow-300 opacity-60 rounded-sm transform -rotate-12"></div>
            <div className="absolute -top-2 right-4 w-6 h-4 bg-yellow-300 opacity-60 rounded-sm transform rotate-12"></div>
            
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold bg-linear-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent">
                Founders
              </span>
              <div className="w-2 h-2 rounded-full bg-linear-to-r from-[#181f7c] to-[#a34fdc] animate-pulse"></div>
            </div>
            <span className="text-sm text-gray-700 font-medium">Meet the Visionaries</span>
            {/* Sticky note corner fold */}
            <div className="absolute top-0 right-0 w-4 h-4 bg-yellow-300 transform rotate-45 translate-x-2 -translate-y-2 rounded-br-sm shadow-sm"></div>
          </div>
          
          {/* Secondary smaller sticky note behind */}
          <div className="absolute -top-1 -left-2 bg-pink-200 rounded-sm px-4 py-2 shadow-md transform -rotate-6 -z-10">
            <span className="text-xs text-gray-600">✨</span>
          </div>
          
          {/* Third sticky note */}
          <div className="absolute -top-1 -right-2 bg-green-200 rounded-sm px-4 py-2 shadow-md transform rotate-6 -z-10">
            <span className="text-xs text-gray-600">🎨</span>
          </div>
        </div>
      </div>
      {/* Wavy SVG background */}
      {/* <svg
        className="absolute top-0 left-0 w-full h-80 pointer-events-none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 0 }}
      >
        <path
          fill="#e0e7ff"
          fillOpacity="0.5"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,170.7C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg> */}

      <div className="relative z-10 flex flex-col items-center">
        <p className="text-gray-500 text-lg mb-10 mt-16">
          Meet the People Behind the Brand
        </p>
        {/* <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 font-serif">
          Our Super Squad of Creatives
        </h2> */}

        {/* Team Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, idx) => (
            <div
              key={member.name}
              className={`bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col items-center px-10 py-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                idx === 2 ? "scale-110 z-20" : "z-10"
              }`}
              style={{
                minWidth: 260,
                maxWidth: 300,
                transform:
                  idx === 1
                    ? "rotate(-6deg)"
                    : idx === 2
                      ? "rotate(3deg)"
                      : idx === 3
                        ? "rotate(6deg)"
                        : "rotate(-3deg)",
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-white shadow"
              />
              <div className="text-xl font-bold text-gray-900">
                {member.name}
              </div>
              <div className="text-base text-gray-500">{member.role}</div>
            </div>
          ))}
        </div>
        <Link href="/team">
          <button className="mt-12 px-8 py-6 rounded-full bg-gradient-to-r from-[#181f7c] to-[#a34fdc] text-white font-semibold flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            Meet the Team
            <svg 
              width="20" 
              height="20" 
              fill="none" 
              viewBox="0 0 24 24"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
