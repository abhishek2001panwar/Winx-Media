import Link from "next/link";
import React from "react";

const team = [
  {
    name: "Sangeetha Singh",
    role: "Co-Founder",
    description:
      "Visionary leader driving brand excellence and creative innovation.",
    image:
      "https://media.winxmarketingmedia.in/wp-content/uploads/2025/06/Untitled-design-29.png",
    gradient: "from-violet-400 to-purple-400",
  },
  {
    name: "M N K Khajukathara",
    role: "Co-Founder",
    description: "Strategic mind behind transformative marketing solutions.",
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/06/2-1.png",
    gradient: "from-pink-300 to-rose-300",
  },
  {
    name: "V Preetham Raju",
    role: "Strategic Partner",
    description:
      "Empowering brands with strategic insights and market expertise.",
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/10/1.png",
    gradient: "from-purple-400 to-pink-400",
  },
  {
    name: "Dharam T",
    role: "Strategic Partner",
    description: "Driving strategic growth and innovative partnerships.",
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/10/2.png",
    gradient: "from-cyan-400 to-blue-400",
  },
  {
    name: "Chirag",
    role: "Social Media Manager",
    description: "Crafting engaging social media strategies to elevate brand presence.",
    image: "./chirag.png",
    gradient: "from-emerald-400 to-teal-400",
  },
  {
    name: "Kushal",
    role: "Video Editor",
    description: "Bringing stories to life through compelling video content.",
    image: "./kushal.png",
    gradient: "from-orange-400 to-amber-400",
  },
  {
    name: "Abhin Jayan",
    role: "Photographer & Cinematographer",
    description: "Capturing moments that tell compelling brand stories.",
    image: "/abin.jpeg",
    gradient: "from-indigo-400 to-purple-400",
  },
  {
    name: "Abhishek Panwar",
    role: "Web Developer",
    description: "Crafting seamless and engaging digital experiences.",
    image: "/abhishek.png",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    name: "V Jesh",
    role: "Graphic Designer",
    description: "Transforming ideas into visually captivating designs.",
    image: "/vjesh.jpeg",
    gradient: "from-orange-400 to-amber-400",
  },
  {
    name: "Siddharth raj",
    role: "Video editor and cinematographer",
    description: "Crafting compelling visual narratives through video and cinematography.",
    image: "/siddharth.PNG",
    gradient: "from-indigo-400 to-purple-400",
  },
];

export default function TeamPage() {
  return (
    <div className="relative w-full  bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-10">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-medium font-sans bg-gradient-to-r from-[#181f7c]/10 to-[#a34fdc]/10 text-[#181f7c] rounded-full border border-[#181f7c]/20">
              Our Team
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight text-gray-900 mb-2">
            Meet the <span className="bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent">Creators</span>
          </h1>
          {/* <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
            The passionate minds shaping exceptional digital experiences
          </p> */}
        </div>

        {/* Founders Section */}
        <div className="mb-10 sm:mb-10">
          <div className="flex items-center justify-center mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300"></div>
            <h2 className="mx-4 text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-400 font-serif">
              Leadership
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5">
            {team.slice(0, 4).map((member, index) => (
              <div
                key={member.name}
                className="group relative"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient background blob */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden">
                  {/* Subtle corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${member.gradient} opacity-5 rounded-bl-full`}></div>
                  
                  {/* Image container with gradient ring */}
                  <div className="relative mb-6 flex justify-center">
                    
                    <div className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br ${member.gradient} p-[2px] transition-transform duration-500 group-hover:scale-105`}>
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-2">
                    <h3 className="text-lg sm:text-xl  text-gray-900 tracking-tight">
                      {member.name}
                    </h3>
                    <p className={`text-sm   bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                 
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <div className="flex items-center justify-center mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300"></div>
            <h2 className="mx-4 text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-400 ">
              The Team
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5">
            {team.slice(4).map((member, index) => (
              <div
                key={member.name}
                className="group relative"
                style={{
                  animationDelay: `${(index + 4) * 100}ms`,
                }}
              >
                {/* Gradient background blob */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden">
                  {/* Subtle corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${member.gradient} opacity-5 rounded-bl-full`}></div>
                  
                  {/* Image container with gradient ring */}
                  <div className="relative mb-6 flex justify-center">
                   
                    <div className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br ${member.gradient} p-[2px] transition-transform duration-500 group-hover:scale-105`}>
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-2">
                    <h3 className="text-lg sm:text-xl  text-gray-900 tracking-tight">
                      {member.name}
                    </h3>
                    <p className={`text-sm  bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                  
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>

      {/* Custom animations */}
      <style jsx>{`
        .delay-75 {
          animation-delay: 75ms;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </div>
  );
}