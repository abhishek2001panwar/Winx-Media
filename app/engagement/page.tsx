'use client';
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import { AnimatedCounter } from "./AnimatedCounter";
import "./engagement-animations.css";

// Instagram engagement data with real metrics
const posts = [
  {
    image: '/viral8.png',
    likes: 15000,
    reach: 878000,
    link: "https://www.instagram.com/reel/DTxdZKhDLt9/?igsh=ZDU3OHJtdXFtc2Ux",
  },
  {
    image: '/viral9.png',
    likes: 5379,
    reach: 106000,
    link: "https://www.instagram.com/reel/DTsT0AAASfe/?igsh=ZHNnMzRyMWFqMDdy",
  },

  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/1-1.png",
    likes: 10096,
    reach: 624752,
    link: "https://www.instagram.com/reel/DLfWiqIzMWX/?igsh=MXM2ejFoZjAza3dpag=="
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/2-1.png",
    likes: 15775,
    reach: 430000,
    link: "https://www.instagram.com/reel/DLkfwFHzosj/?igsh=MWkwMHVqcXM5aG91Yw=="
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/3-1.png",
    likes: 21374,
    reach: 2100000,
    link: "https://www.instagram.com/reel/DG8VGe_StG8/?igsh=MXdnOHV3MXR4MjlzYg=="
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/4-1.png",
    likes: 2740,
    reach: 233000,
    link: "https://www.instagram.com/reel/DHi7z_Qz-nx/?igsh=MWFzMzMyZ21ka2RidA=="
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/6-1.png",
    likes: 14354,
    reach: 2400000,
    link: "https://www.instagram.com/reel/DEsJj-9CWnv/?igsh=dnIzdjB0NGZuNnNv"
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/5-1.png",
    likes: 7314,
    reach: 399000,
    link: "https://www.instagram.com/p/DKSB3bnM8_z/?igsh=aWh6N3g4eDhsMjdq"
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/1-2.png",
    likes: 13306,
    reach: 1000000,
    link: "https://www.instagram.com/reel/DIZBCBfTAG8/?igsh=MXE4ZnJiNmc3ZnEzOQ=="
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/2-2.png",
    likes: 4161,
    reach: 836000,
    link: "https://www.instagram.com/reel/DHQ63N8oilW/?igsh=MXV4bjg0dnc4aXl1"
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/3-2.png",
    likes: 6131,
    reach: 526000,
    link: "https://www.instagram.com/reel/DGa-CjoSpg3/?igsh=bDR0Z2kxM2NyeDZm"
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/4-2.png",
    likes: 3877,
    reach: 404000,
    link: "https://www.instagram.com/reel/DCec3C7IPhR/?igsh=MXI4Y3RteWhsajA5cA=="
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/5-2.png",
    likes: 37660,
    reach: 38600,
    link: "https://www.instagram.com/reel/C_8ZNsqSFe8/?igsh=MWJpeHVlcHdqY2ZvaA=="
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/6-2.png",
    likes: 108500,
    reach: 2100000,
    link: "https://www.instagram.com/reel/DBeLmTMsDS1/?igsh=MWs3dWQ3bnY1ZGk3YQ=="
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/8.png",
    likes: 117202,
    reach: 3400000,
    link: "https://www.instagram.com/reel/DDKRe3wSqKh/?igsh=MWozOTg0ZmZ3OHhkMw=="
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/9.png",
    likes: 103829,
    reach: 13300000,
    link: "https://www.instagram.com/reel/DGI0v8cSy55/?igsh=MWd0bXoweHMxMnpobg=="
  }
];

// Brand analytics data
const brands = [
  {
    name: "It’s Forever",
    logo: "⚡",
    color: "from-[#181f7c] to-[#a34fdc]",
    images: [
      "/forevera.png",
      "/foreverb.png"
    ],
    stats: {
      totalReach: "422k",
      engagement: "8.2%",
      followers: "25K"
    }
  },
  {
    name: "Ambari Weddings",
    logo: "⚡",
    color: "from-[#181f7c] to-[#a34fdc]",
    images: [
      "/ambaria.png",
      "/ambarib.png"
    ],
    stats: {
      totalReach: "47k",
      engagement: "52.7%",
      followers: "98K"
    }
  },
  {
    name: "Ceramic Pro",
    logo: "✨",
    color: "from-[#181f7c] to-[#a34fdc]",
    images: [
      "/ceramica.png",
      "/ceramicb.png"
    ],
    stats: {
      totalReach: "3.2M",
      engagement: "9.1%",
      followers: "156K"
    }
  },
  {
    name: "WeMe Stories",
    logo: "✨",
    color: "from-[#181f7c] to-[#a34fdc]",
    images: [
      "/wemea.png",
      "/wemeb.png"
    ],
    stats: {
      totalReach: "1.8M",
      engagement: "12.4%",  
  }},
  {
    name: "Winx Media",
    logo: "✨",
    color: "from-[#181f7c] to-[#a34fdc]",
    images: [
      "/winxa.png",
      "/winxb.png"
    ],
    stats: {
      totalReach: "2.5M",
      engagement: "15.3%",
      followers: "210K"
    }
  },
  {
    name: "Kahaani by Charm ",
    logo: "✨",
    color: "from-[#181f7c] to-[#a34fdc]",
    images: [
      "/kahaania.png",
      "/kahaanib.png"
    ],  
  },
  {
    name: "It’s Forever Studio",
    logo: "✨",
    color: "from-[#181f7c] to-[#a34fdc]",
    images: [
      "/foreverstudioa.png",
      "/foreverstudiob.png"
    ],
    stats: {
      totalReach: "1.2M",
      engagement: "10.5%",
      followers: "150K"
    }
  },
  {
    name: "House of Bliss",
    logo: "✨",
    color: "from-[#181f7c] to-[#a34fdc]",
    images: [
      "/houseofblissa.png",
      "/houseofblissb.png"
    ],
    stats: {
      totalReach: "900K",
      engagement: "11.2%",
      followers: "120K"
    }
  }
];

function EngagementPage() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{brandIndex: number, imageIndex: number} | null>(null);

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

  const handleImageClick = (brandIndex: number, imageIndex: number) => {
    setSelectedImage({ brandIndex, imageIndex });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen font-serif">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-24 sm:py-32">
        {/* Brand Analytics Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent">
                Brand Analytics
              </span>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#181f7c] to-[#a34fdc] animate-pulse"></div>
            </div>
            <p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
              Comprehensive performance insights across our partner brands
            </p>
          </div>

          <div className="space-y-12">
            {brands.map((brand, brandIndex) => (
              <div 
                key={brandIndex}
                className="group relative"
              >
                {/* Compact Brand Header */}
                <div className="relative  rounded-2xl  p-4 sm:p-6 mb-2 transition-all duration-300 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${brand.color} opacity-5 rounded-full blur-2xl`}></div>
                  
                  <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {/* Smaller Logo */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-2xl shadow-md transform group-hover:rotate-12 transition-all duration-300`}>
                      {brand.logo}
                    </div>
                    
                    {/* Compact Brand Info */}
                    <div className="flex-1">
                      <h3 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${brand.color} bg-clip-text text-transparent mb-2`}>
                        {brand.name}
                      </h3>
                      {/* <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex flex-col">
                          <span className="text-lg font-bold text-gray-900">{brand.stats.totalReach}</span>
                          <span className="text-xs text-gray-600">Reach</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-lg font-bold text-gray-900">{brand.stats.engagement}</span>
                          <span className="text-xs text-gray-600">Engagement</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-lg font-bold text-gray-900">{brand.stats.followers}</span>
                          <span className="text-xs text-gray-600">Followers</span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Smaller Analytics Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {brand.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      onClick={() => handleImageClick(brandIndex, imgIndex)}
                      className="relative group/card cursor-pointer"
                    >
                      <div className="relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-transparent">
                        {/* Smaller decorative corner */}
                        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${brand.color} opacity-10 rounded-bl-[2rem] transition-all duration-300 group-hover/card:opacity-20`}></div>
                        
                        {/* Compact Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <div className={`bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${brand.color} bg-clip-text text-transparent border border-white shadow-md`}>
                            Report {imgIndex + 1}
                          </div>
                        </div>

                        {/* Smaller Zoom indicator */}
                        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                          <div className={`bg-gradient-to-r ${brand.color} text-white p-1.5 rounded-full shadow-md`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Smaller Image Container */}
                        <div className="relative w-full overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${brand.name} Analytics ${imgIndex + 1}`}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover/card:scale-105 rounded-xl"
                          />
                          
                          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        {/* Compact Bottom Label */}
                        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r ${brand.color} text-white px-4 py-2.5 transform translate-y-2 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300`}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-semibold">Analytics {imgIndex + 1}</span>
                            <span className="text-xs opacity-90">Click to expand</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Smaller separator */}
               
              </div>
            ))}
          </div>
        </section>

        {/* Instagram Insights Section */}
        <section className="pt-5">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent">
                Instagram Insights
              </span>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#181f7c] to-[#a34fdc] animate-pulse"></div>
            </div>
           
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 auto-rows-[220px]">
            {posts.map((post, idx) => {
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
                  
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gradient-to-r from-[#181f7c] to-[#a34fdc] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      View Post →
                    </div>
                  </div>
                  
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
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/40 z-[1200] flex items-center justify-center p-2 sm:p-6 backdrop-blur-sm"
          style={{ zIndex: 1200 }}
          onClick={closeModal}
        >
          <div className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl max-h-[95vh] flex flex-col items-center justify-center">
            <button 
              onClick={closeModal}
              className="fixed top-4 right-4 z-[1300] bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Close"
              style={{ zIndex: 1300 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={brands[selectedImage.brandIndex].images[selectedImage.imageIndex]} 
              alt="Analytics Full View"
              className="w-full h-auto max-h-[80vh] sm:max-h-[85vh] md:max-h-[90vh] lg:max-h-[90vh] xl:max-h-[90vh] rounded-4xl  object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EngagementPage;