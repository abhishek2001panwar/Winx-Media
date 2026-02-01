'use client';
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import { AnimatedCounter } from "./AnimatedCounter";
import "./engagement-animations.css";

// Generate 14 posts with random big indices
const posts = [
  {
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    likes: 1200,
    comments: 98,
    reach: "10.2k",
  },
  {
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80",
    likes: 980,
    comments: 45,
    reach: "8.7k",
  },
  // ...add more posts as needed
];

while (posts.length < 14) {
  posts.push({
    image: `https://source.unsplash.com/random/400x400?sig=${posts.length}`,
    likes: Math.floor(Math.random() * 2000 + 200),
    comments: Math.floor(Math.random() * 100 + 10),
    reach: `${(Math.random() * 10 + 5).toFixed(1)}k`,
  });
}

// Pick 3 random indices to be "big"
const bigIndices = Array.from({ length: 3 }, () =>
  Math.floor(Math.random() * posts.length)
);

function EngagementPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen font-serif">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-12 text-center tracking-tight drop-shadow-lg">
          Instagram Engagement Insights
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto font-light">
          A snapshot of our latest Instagram posts and their engagement.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 auto-rows-[220px]">
          {posts.map((post, idx) => {
            // Every 3rd post is big
            const isBig = idx % 3 === 0;
            return (
              <div
                key={idx}
                className={`engagement-card group rounded-2xl overflow-hidden shadow-2xl bg-white/30 border border-white/30 backdrop-blur-md relative transition-transform duration-500 hover:scale-105 cursor-pointer`}
                style={{
                  gridColumn: isBig ? "span 2" : undefined,
                  gridRow: isBig ? "span 2" : undefined,
                  height: isBig ? "460px" : "220px",
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={post.image}
                  alt="Instagram Post"
                  className="object-cover w-full h-full"
                  style={{ filter: "brightness(0.93)" }}
                />
                {/* Glassy Overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="bg-white/30 backdrop-blur-lg rounded-xl p-4 border border-white/40 shadow-lg flex items-center gap-4 mb-2">
                    <span className="text-[#e1306c] text-lg font-bold flex items-center gap-1">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path d="M12 21s-6-4.35-9-8.5C-1.5 7.5 4.5 3 12 9.5 19.5 3 25.5 7.5 21 12.5 18 16.65 12 21 12 21z" stroke="#e1306c" strokeWidth="2" fill="none"/>
                      </svg>
                      {hovered === idx ? <AnimatedCounter value={post.likes} /> : 0}
                    </span>
                    <span className="text-[#1877f3] text-lg font-bold flex items-center gap-1">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#1877f3" strokeWidth="2" fill="none"/>
                      </svg>
                      {hovered === idx ? <AnimatedCounter value={post.comments} /> : 0}
                    </span>
                    <span className="text-[#6c63ff] text-lg font-bold flex items-center gap-1">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="#6c63ff" strokeWidth="2"/>
                        <path d="M8 12h8M12 8v8" stroke="#6c63ff" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      {hovered === idx ? <AnimatedCounter value={post.reach} /> : 0}
                    </span>
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