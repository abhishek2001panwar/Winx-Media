"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden pt-32 sm:pt-40 md:pt-52 px-4 sm:px-6">
        {/* Sticky Notes Header */}
        <div className="mb-8 sm:mb-12">
          <div className="relative">
            {/* Main sticky note */}
            <div className="bg-yellow-200 rounded-sm px-4 sm:px-6 py-3 sm:py-4 shadow-lg transform rotate-2 relative">
              {/* Sticky note tape effect */}
              <div className="absolute -top-2 left-4 w-6 sm:w-8 h-4 bg-yellow-300 opacity-60 rounded-sm transform -rotate-12"></div>
              <div className="absolute -top-2 right-4 w-5 sm:w-6 h-4 bg-yellow-300 opacity-60 rounded-sm transform rotate-12"></div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent">
                  Our Team
                </span>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#181f7c] to-[#a34fdc] animate-pulse"></div>
              </div>
              <span className="text-xs sm:text-sm text-gray-700 font-medium">Meet the Creators</span>
              
              {/* Sticky note corner fold */}
              <div className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 bg-yellow-300 transform rotate-45 translate-x-2 -translate-y-2 rounded-br-sm shadow-sm"></div>
            </div>
            
            {/* Secondary smaller sticky note behind */}
            <div className="absolute -top-1 -left-2 bg-pink-200 rounded-sm px-3 sm:px-4 py-1.5 sm:py-2 shadow-md transform -rotate-6 -z-10">
              <span className="text-xs text-gray-600">✨</span>
            </div>
            
            {/* Third sticky note */}
            <div className="absolute -top-1 -right-2 bg-green-200 rounded-sm px-3 sm:px-4 py-1.5 sm:py-2 shadow-md transform rotate-6 -z-10">
              <span className="text-xs text-gray-600">🎨</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Creative sticky note style team showcase */}
          <div className="relative w-full mt-8 sm:mt-12 md:mt-16 flex flex-col items-center">
            <div className="w-full flex flex-col gap-8 sm:gap-12 md:gap-16">
              {team.map((member, idx) => (
                <div
                  key={member.name}
                  className={`
                    relative flex items-center w-full max-w-4xl mx-auto px-4 sm:px-6
                    ${idx % 2 === 0 ? "justify-start" : "md:justify-end justify-start"}
                    group
                  `}
                  style={{
                    minHeight: "auto",
                    transform: mounted && isDesktop ? `translateX(${idx % 2 === 0 ? "-60px" : "60px"})` : "none",
                  }}
                >
                  {/* Sticky note background - hidden on mobile */}
                  <div
                    className={`
                      absolute top-0 hidden md:block
                      ${idx % 2 === 0 ? "left-0 -rotate-3" : "right-0 rotate-3"}
                      bg-gradient-to-br ${member.gradient}
                      rounded-2xl shadow-2xl
                      w-[420px] h-[220px]
                      z-0
                      group-hover:scale-105 transition-transform
                    `}
                  ></div>
                  
                  {/* Sticky tape effect - hidden on mobile */}
                  <div
                    className={`
                      absolute -top-4 hidden md:block
                      ${idx % 2 === 0 ? "left-12" : "right-12"}
                      w-20 h-6 bg-yellow-200 opacity-70 rounded-sm
                      ${idx % 2 === 0 ? "-rotate-6" : "rotate-6"}
                      z-10
                    `}
                  ></div>
                  
                  {/* Team member card */}
                  <div
                    className={`
                      relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-14 
                      bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl 
                      p-4 sm:p-6 md:px-14 md:py-10 z-20
                      border border-gray-100 w-full
                      ${idx % 2 === 0 ? "sm:flex-row" : "md:flex-row-reverse sm:flex-row"}
                    `}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 rounded-full object-cover border-4 border-white shadow-xl flex-shrink-0"
                    />
                    <div className="text-center sm:text-left flex-1">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                        {member.name}
                      </div>
                      <div className="text-base sm:text-lg md:text-xl text-gray-700 mb-2 sm:mb-4 font-semibold">
                        {member.role}
                      </div>
                      <div className="text-sm sm:text-base md:text-lg text-gray-600">
                        {member.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col items-center w-full px-4">
          <div className="relative mb-6 sm:mb-8">
            {/* Decorative elements */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-8 sm:w-12 h-8 sm:h-12 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-pink-300 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-3 sm:-bottom-4 left-6 sm:left-8 w-8 sm:w-10 h-8 sm:h-10 bg-purple-300 rounded-full opacity-25 animate-bounce delay-150"></div>
            
            {/* Handwritten style text */}
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-lg transform -rotate-1 relative border-2 border-yellow-300">
              <div className="absolute top-0 left-3 sm:left-4 w-12 sm:w-16 h-5 sm:h-6 bg-yellow-300 opacity-50 rounded transform -rotate-12 -translate-y-2 sm:-translate-y-3"></div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 font-serif text-center sm:text-left">
                ✨ Join Our Creative Family! ✨
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 italic text-center sm:text-left">
                We're always looking for passionate talent
              </p>
            </div>
          </div>
          
          <Link href="/carrers" className="w-full sm:w-auto">
            <button className="mb-10 group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-white text-gray-800 font-bold text-base sm:text-lg rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-3 border-gray-200 overflow-hidden">
              {/* Colorful background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#181f7c] to-[#a34fdc] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 group-hover:text-white transition-colors duration-300">
                <span>Join Our Team</span>
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              
              {/* Tape effect */}
              <div className="absolute -top-2 left-6 sm:left-8 w-12 sm:w-16 h-4 sm:h-5 bg-yellow-200 opacity-60 rounded transform -rotate-6"></div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
