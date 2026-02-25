import React from 'react';
import Navbar from "@/components/navbar";
import Link from "next/link";
import "./gallery-animations.css";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen relative overflow-hidden bg-white">
        {/* Animated background gradient mesh - subtle light version */}
        <div className="fixed inset-0 opacity-40 pointer-events-none">
          <div className="gradient-orb-light orb-1"></div>
          <div className="gradient-orb-light orb-2"></div>
          <div className="gradient-orb-light orb-3"></div>
        </div>

        {/* Subtle grain texture overlay */}
        <div className="grain-overlay fixed inset-0 pointer-events-none opacity-[0.02]"></div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 pt-32">
          {/* Hero Section */}
          <div className="max-w-[1600px] mx-auto mb-10">
          
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-black mb-2 text-center tracking-tight leading-[0] title-reveal">
              Creative
              <br />
              <span
                className=" font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#181f7c] to-[#a34fdc]"
              >
                Gallery
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto font-light leading-relaxed subtitle-reveal">
              Immerse yourself in our collection of video projects, social media campaigns, 
              and engagement analytics.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
              
              {/* Video Section - Large Featured */}
              <Link 
                href="/video" 
                className="lg:col-span-7 gallery-card-light group relative block overflow-hidden rounded-3xl border border-zinc-300"
              >
                <div 
                
                className="absolute inset-0 bg-gradient-to-br from-[#6c63ff]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Video Preview Grid */}
                <div   style={{
                    borderImage: "linear-gradient(to right, #181f7c, #a34fdc) 1"
                }} className="video-grid-preview absolute top-8 right-8 opacity-100  transition-all duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=300&q=80" 
                    alt="Video 1" 
                    className="video-preview-thumb-light"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80" 
                    alt="Video 2" 
                    className="video-preview-thumb-light"
                  />
                </div>

                <div className="relative p-12 md:p-16 h-[600px] flex flex-col justify-between  ">
                  {/* Icon/Number */}
                  <div className="text-[120px] md:text-[200px] font-light text-black leading-none">
                    01
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full border border-gray-200 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-[#6c63ff] animate-pulse"></div>
                        <span className="text-sm text-gray-700 tracking-wide uppercase font-medium">Video Production</span>
                      </div>
                    </div>

                    <h2 className="text-5xl md:text-5xl lg:text-6xl font-light text-black mb-6 tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-500">
                      Video<br />
                      <span className=" text-[#6c63ff]">Content</span>
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-2 max-w-md leading-relaxed">
                      Cinematic storytelling and creative campaigns that captivate audiences and drive results.
                    </p>

                    <div className="inline-flex items-center gap-3 text-black group-hover:gap-5 transition-all duration-300">
                      {/* <span className="text-lg font-medium">Explore Collection</span>
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg> */}
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#6c63ff]/5 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
                </div>
              </Link>

              {/* Social Media Section - Vertical */}
              <Link 
                href="/social" 
                className="lg:col-span-5 gallery-card-light group relative block overflow-hidden rounded-3xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffb366]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-12 md:p-16 h-[600px] flex flex-col justify-between">
                  {/* Floating Social Icons */}
                  <div className="social-icons-float absolute top-8 right-8">
                    <div className="social-icon-item">
                      <img 
                        src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=100&q=80" 
                        alt="Social 1" 
                        className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                      />
                    </div>
                    <div className="social-icon-item">
                      <img 
                        src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=100&q=80" 
                        alt="Social 2" 
                        className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                      />
                    </div>
                    <div className="social-icon-item">
                      <img 
                        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=100&q=80" 
                        alt="Social 3" 
                        className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="text-[120px] md:text-[200px] font-light text-black leading-none">
                    02
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full border border-gray-200 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-[#ffb366] animate-pulse"></div>
                        <span className="text-sm text-gray-700 tracking-wide uppercase font-medium">Social Strategy</span>
                      </div>
                    </div>

                    <h2 className="text-5xl md:text-5xl lg:text-6xl font-light text-black mb-6 tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-500">
                      Social<br />
                      <span className=" text-[#ffb366]">Media</span>
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-2 leading-relaxed">
                      Engaging content that builds communities and amplifies brand presence.
                    </p>

                    {/* <div className="inline-flex items-center gap-3 text-black group-hover:gap-5 transition-all duration-300">
                      <span className="text-lg font-medium">View Campaigns</span>
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div> */}
                  </div>

                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#ffb366]/5 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
                </div>
              </Link>

              {/* Engagement Section - Wide */}
              <Link 
                href="/engagement" 
                className="lg:col-span-12 gallery-card-light group relative block overflow-hidden rounded-3xl border border-black/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#66b3ff]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-12 md:p-16 h-[400px]  flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full border border-gray-200 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-[#66b3ff] animate-pulse"></div>
                        <span className="text-sm text-gray-700 tracking-wide uppercase font-medium">Analytics & Insights</span>
                      </div>
                    </div>

                    <h2 className="text-5xl md:text-5xl lg:text-6xl font-light text-black mb-6 tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-500">
                      Engagement<br />
                      <span className=" text-[#66b3ff]">Status</span>
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                      Real-time analytics and performance tracking to measure impact and optimize strategies.
                    </p>

                    <div className="inline-flex items-center gap-3 text-black group-hover:gap-5 transition-all duration-300">
                      <span className="text-lg font-medium">View Dashboard</span>
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Right - Animated Stats */}
                  <div className="engagement-data-viz-light">
                    <div className="stat-bar-light stat-bar-1"></div>
                    <div className="stat-bar-light stat-bar-2"></div>
                    <div className="stat-bar-light stat-bar-3"></div>
                    <div className="stat-bar-light stat-bar-4"></div>
                  </div>

                  {/* Number */}
                  <div className="absolute top-8 right-8 text-[120px] md:text-[200px] font-light text-black/[0.03] leading-none">
                    03
                  </div>

                  <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-[#66b3ff]/5 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
                </div>
              </Link>

            </div>
          </div>

          {/* Bottom CTA */}
          {/* <div className="mx-auto mt-6 text-center cta-reveal">
            <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-8">
              Want to see more?
            </p>
            <h3 className="text-4xl md:text-5xl font-light text-black mb-12">
              Let's create something <span className="italic text-[#6c63ff]">extraordinary</span> together
            </h3>
          <Link href="/#contact">
            <button className="px-12 py-5 bg-gradient-to-r from-[#181f7c] to-[#a34fdc] text-white rounded-full text-lg font-medium hover:from-[#a34fdc] hover:to-[#181f7c] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
              Get in Touch
            </button>
          </Link>
          </div> */}
        </div>
      </main>
    </>
  );
}