import Navbar from "@/components/navbar";
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
  {
     name: "Chirag",
    role: "Social Media Manager",
    description: "Crafting engaging social media strategies to elevate brand presence.",
    image: "./chirag.png",
    gradient: "from-cyan-400 to-blue-400",
  },
   {
     name: "Kushal",
    role: "Video Editor",
    description: "Bringing stories to life through compelling video content.",
    image: "./kushal.png",
    gradient: "from-cyan-400 to-blue-400",
  },
   {
    name: "Abhin Jayan",
    role: "Photographer & Cinematographer",
    description: "Capturing moments that tell compelling brand stories.",
    image: "/abin.jpeg",
    gradient: "from-cyan-400 to-blue-400",
  },
   {
    name: "Abhishek Panwar",
    role: "Web Developer",
    description: "Crafting seamless and engaging digital experiences.",
    image: "/abhishek.png",
    gradient: "from-cyan-400 to-blue-400",
  },
];

export default function page() {
  return (
    <>
    <Navbar />
    <div className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden pt-52">
      {/* Sticky Notes Header */}
      <div className="">
        <div className="relative">
          {/* Main sticky note */}
          <div className="bg-yellow-200 rounded-sm px-6 py-4 shadow-lg transform rotate-2 relative">
            {/* Sticky note tape effect */}
            <div className="absolute -top-2 left-4 w-8 h-4 bg-yellow-300 opacity-60 rounded-sm transform -rotate-12"></div>
            <div className="absolute -top-2 right-4 w-6 h-4 bg-yellow-300 opacity-60 rounded-sm transform rotate-12"></div>
            
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent">
                Our Team
              </span>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#181f7c] to-[#a34fdc] animate-pulse"></div>
            </div>
            <span className="text-sm text-gray-700 font-medium">Meet the Creators</span>
            
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
    

      <div className="relative z-10 flex flex-col items-center">
    
     
      
      {/* Creative sticky note style team showcase */}
      <div className="relative w-full mt-16 flex flex-col items-center">
        <div className="w-full flex flex-col gap-16">
          {team.map((member, idx) => (
        <div
          key={member.name}
          className={`
            relative flex items-center max-w-4xl mx-auto
            ${idx % 2 === 0 ? "justify-start" : "justify-end"}
            group
          `}
          style={{
            minHeight: 260,
            marginLeft: idx % 2 === 0 ? 0 : "auto",
            marginRight: idx % 2 === 0 ? "auto" : 0,
            transform: `translateX(${idx % 2 === 0 ? "-60px" : "60px"})`,
          }}
        >
          {/* Sticky note background */}
          <div
            className={`
          absolute top-0
          ${idx % 2 === 0 ? "left-0 -rotate-3" : "right-0 rotate-3"}
          bg-linear-to-br ${member.gradient}
          rounded-2xl shadow-2xl
          w-[420px] h-[220px]
          z-0
          group-hover:scale-105 transition-transform
            `}
          ></div>
          {/* Sticky tape effect */}
          <div
            className={`
          absolute -top-4
          ${idx % 2 === 0 ? "left-12" : "right-12"}
          w-20 h-6 bg-yellow-200 opacity-70 rounded-sm
          ${idx % 2 === 0 ? "-rotate-6" : "rotate-6"}
          z-10
            `}
          ></div>
          {/* Team member card */}
          <div
            className={`
          relative flex items-center gap-14  bg-white rounded-3xl shadow-2xl px-14 py-10 z-20
          border border-gray-100
          ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}
            `}
            style={{ minWidth: 520, maxWidth: 700 }}
          >
            <img
          src={member.image}
          alt={member.name}
          className="w-50 h-50 rounded-full object-cover border-4 border-white shadow-xl"
            />
            <div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{member.name}</div>
          <div className="text-xl text-gray-700 mb-4 font-semibold">{member.role}</div>
          <div className="text-lg text-gray-600">{member.description}</div>
            </div>
          </div>
        </div>
          ))}
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
