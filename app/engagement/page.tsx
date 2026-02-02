'use client';
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import { AnimatedCounter } from "./AnimatedCounter";
import "./engagement-animations.css";

// Instagram engagement data with real metrics
const posts = [
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/1-1.png",
    likes: 10096,
    reach: 624752,
    link: "https://www.instagram.com/reel/DLfWiqIzMWX/?igsh=MXM2ejFoZjAza3dpag=="
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/2-1.png",
    likes: 15775,
    reach: 430000,
    link: "https://www.instagram.com/reel/DLkfwFHzosj/?igsh=MWkwMHVqcXM5aG91Yw=="
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/3-1.png",
    likes: 21374,
    reach: 2100000,
    link: "https://www.instagram.com/reel/DG8VGe_StG8/?igsh=MXdnOHV3MXR4MjlzYg=="
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/4-1.png",
    likes: 2740,
    reach: 233000,
    link: "https://www.instagram.com/reel/DHi7z_Qz-nx/?igsh=MWFzMzMyZ21ka2RidA=="
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/6-1.png",
    likes: 14354,
    reach: 2400000,
    link: "https://www.instagram.com/reel/DEsJj-9CWnv/?igsh=dnIzdjB0NGZuNnNv"
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/5-1.png",
    likes: 7314,
    reach: 399000,
    link: "https://www.instagram.com/p/DKSB3bnM8_z/?igsh=aWh6N3g4eDhsMjdq"
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/1-2.png",
    likes: 13306,
    reach: 1000000,
    link: "https://www.instagram.com/reel/DIZBCBfTAG8/?igsh=MXE4ZnJiNmc3ZnEzOQ=="
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/2-2.png",
    likes: 4161,
    reach: 836000,
    link: "https://www.instagram.com/reel/DHQ63N8oilW/?igsh=MXV4bjg0dnc4aXl1"
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/3-2.png",
    likes: 6131,
    reach: 526000,
    link: "https://www.instagram.com/reel/DGa-CjoSpg3/?igsh=bDR0Z2kxM2NyeDZm"
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/4-2.png",
    likes: 3877,
    reach: 404000,
    link: "https://www.instagram.com/reel/DCec3C7IPhR/?igsh=MXI4Y3RteWhsajA5cA=="
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/5-2.png",
    likes: 37660,
    reach: 38600,
    link: "https://www.instagram.com/reel/C_8ZNsqSFe8/?igsh=MWJpeHVlcHdqY2ZvaA=="
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/6-2.png",
    likes: 108500,
    reach: 2100000,
    link: "https://www.instagram.com/reel/DBeLmTMsDS1/?igsh=MWs3dWQ3bnY1ZGk3YQ=="
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/8.png",
    likes: 117202,
    reach: 3400000,
    link: "https://www.instagram.com/reel/DDKRe3wSqKh/?igsh=MWozOTg0ZmZ3OHhkMw=="
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/09/9.png",
    likes: 103829,
    reach: 13300000,
    link: "https://www.instagram.com/reel/DGI0v8cSy55/?igsh=MWd0bXoweHMxMnpobg=="
  }
];

function EngagementPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  const handlePostClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="bg-white min-h-screen font-serif">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-32">
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-12 text-center tracking-tight drop-shadow-lg">
          Instagram Engagement Insights
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto font-light">
          Real performance metrics from our Instagram campaigns. Click any post to view on Instagram.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 auto-rows-[220px]">
          {posts.map((post, idx) => {
            // Every 3rd post is big
            const isBig = idx % 3 === 0;
            return (
              <div
                key={idx}
                className={`engagement-card group rounded-2xl overflow-hidden shadow-2xl bg-white/30 border border-white/30 backdrop-blur-md relative transition-all duration-500 hover:scale-105 cursor-pointer hover:shadow-3xl`}
                style={{
                  gridColumn: isBig ? "span 2" : undefined,
                  gridRow: isBig ? "span 2" : undefined,
                  height: isBig ? "460px" : "220px",
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handlePostClick(post.link)}
              >
                <img
                  src={post.image}
                  alt="Instagram Post"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  style={{ filter: "brightness(0.93)" }}
                />
                
                {/* Bottom black overlay for text visibility */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
                
                {/* Click indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gradient-to-r from-[#181f7c] to-[#a34fdc] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    View Post →
                  </div>
                </div>
                
                {/* Glassy Overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="bg-white/30 backdrop-blur-lg rounded-xl p-4 border border-white/40 shadow-lg flex items-center gap-4 mb-2">
                    <span className="text-[#e1306c] text-lg font-bold flex items-center gap-1">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path d="M12 21s-6-4.35-9-8.5C-1.5 7.5 4.5 3 12 9.5 19.5 3 25.5 7.5 21 12.5 18 16.65 12 21 12 21z" stroke="#e1306c" strokeWidth="2" fill="none"/>
                      </svg>
                      {hovered === idx ? <AnimatedCounter value={post.likes} /> : 0}
                    </span>
                    <span className="text-[#6c63ff] text-lg font-bold flex items-center gap-1">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3" stroke="#6c63ff" strokeWidth="2"/>
                        <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="#6c63ff" strokeWidth="2"/>
                      </svg>
                      {hovered === idx ? formatNumber(post.reach) : '0'}
                    </span>
                  </div>
                  <div className="text-xs text-white/90 bg-black/30 rounded-lg px-2 py-1 backdrop-blur-sm">
                    Click to view on Instagram
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default EngagementPage;