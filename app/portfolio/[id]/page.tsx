'use client'
import React from 'react'

function Page() {
  // Array of placeholder image paths—replace these with your actual local or hosted image URLs
  const projectGallery = [
    "/path-to-your-images/gallery-1.jpg",
    "/path-to-your-images/gallery-2.jpg",
    "/path-to-your-images/gallery-3.jpg",
    "/path-to-your-images/gallery-4.jpg",
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-neutral-800">
      
      {/* Top Navigation Bar with Back Button */}
      <div className="max-w-[1600px] mx-auto px-6 pt-8 md:px-12 lg:px-16 flex justify-between items-center">
        <button 
          onClick={() => window.history.back()} 
          className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-medium"
        >
          {/* Back Arrow Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back
        </button>
      </div>

      {/* Main Massive Hero Image (Full Width of Content Grid) */}
      <div className="max-w-[1600px] mx-auto px-6 pt-6 pb-16 md:px-12 lg:px-16">
        <div className="w-full overflow-hidden rounded-xl bg-neutral-900 shadow-2xl">
          <img 
            src="/brand/cover.jpg" 
            alt="Blank Street Coffee Sign" 
            className="w-full h-auto aspect-[16/7] object-cover object-center"
          />
        </div>
      </div>

      {/* Main Content Grid - Enhanced to an Ultra-wide Scale */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 px-6 pb-24 md:px-12 lg:px-16">
        
        {/* Left Column: Brand Info & Stats */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-16">
          <div>
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
              Blank Street
            </h1>

            {/* Metadata */}
            <div className="space-y-8 text-sm md:text-base">
              <div>
                <h3 className="text-neutral-500 font-medium mb-1">Industry</h3>
                <p className="text-neutral-300">Food and drink</p>
              </div>
              <div>
                <h3 className="text-neutral-500 font-medium mb-1">What We Did</h3>
                <p className="text-neutral-300 leading-relaxed max-w-md">
                  Brand Strategy, Verbal Identity, Visual Identity, Culture Strategy & EVP
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-12 my-6">
            <div>
              <span className="block text-6xl md:text-8xl font-light tracking-tight mb-2">80%</span>
              <p className="text-sm md:text-base text-neutral-400 max-w-sm leading-relaxed">
                YoY growth in user-generated content post-launch
              </p>
            </div>
            <div>
              <span className="block text-6xl md:text-8xl font-light tracking-tight mb-2">60%</span>
              <p className="text-sm md:text-base text-neutral-400 max-w-sm leading-relaxed">
                First-month sales at new Glasgow store came from Gen Z customers
              </p>
            </div>
            <div>
              <span className="block text-6xl md:text-8xl font-light tracking-tight mb-2">66%</span>
              <p className="text-sm md:text-base text-neutral-400 max-w-sm leading-relaxed">
                Of the engaged audience on TikTok is aged 18-24
              </p>
            </div>
          </div>

          {/* Download Button */}
          <div>
            <button className="bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium py-4 px-8 rounded-full transition-colors duration-200 shadow-md">
              Download Project Images
            </button>
          </div>
        </div>

        {/* Right Column: Narrative Content */}
        <div className="lg:col-span-7 space-y-16 pt-2">
          {/* Section 1 */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-medium tracking-tight">
              Adding a spark to the coffee run
            </h2>
            <p className="text-neutral-400 text-base md:text-xl leading-relaxed font-light">
              When Blank Street opened its first coffee cart in Williamsburg in 2020, the world was shutting down. Born as a lean operational model – small footprints, efficient machines, quick service – Blank Street carved out space for connection when coffee drinkers needed it most.
            </p>
            <p className="text-neutral-400 text-base md:text-xl leading-relaxed font-light">
              Fast-forward a few years: dozens of locations across multiple cities, a devoted following, and a business that had started to take on a life of its own. But as Blank Street began to shed its scrappy beginnings and expand, its identity struggled to keep pace. The brand tropes that worked for a challenger started to feel too small for what Blank Street was becoming – and where it wanted to go next.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-medium tracking-tight">
              Regularly remarkable
            </h2>
            <p className="text-neutral-400 text-base md:text-xl leading-relaxed font-light">
              The inflection point was clear: evolve from startup challenger to generational cultural icon. Shift the daily coffee run from transactional blur into an experience people want to be a part of. Take the opportunity to make the ordinary feel remarkable.
            </p>
            <p className="text-neutral-400 text-base md:text-xl leading-relaxed font-light">
              It was a case of amplifying what was already there; a brand that understood the power of small, elevated moments. The insight was simple but potent: life happens in the everyday moments. The coffee you grab before a meeting. The afternoon pick-me-up that resets your mood. Those tiny, ordinary rituals that matter.
            </p>
          </div>
        </div>

      </div>

      {/* --- Full-Width Image Showcases (Stacked One by One) --- */}
      <section className="space-y-8 md:space-y-16 pb-16">
        <div className="w-full min-h-[60vh] md:min-h-screen bg-neutral-950 flex items-center justify-center overflow-hidden">
          <img 
            src="/brand/02.jpg" 
            alt="Blank Street Brand Showcase Large View 1" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full min-h-[60vh] md:min-h-screen bg-neutral-950 flex items-center justify-center overflow-hidden">
          <img 
            src="/brand/03.jpg" 
            alt="Blank Street Brand Showcase Large View 2" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* --- Interactive / Dynamic Grid Section --- */}
      <section className="max-w-[1600px] mx-auto px-6 pb-32 md:px-12 lg:px-16">
        <h3 className="text-neutral-500 font-medium text-sm tracking-wider uppercase mb-8">
          Project Gallery
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectGallery.map((src, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-xl bg-neutral-950 aspect-square md:aspect-[4/3] relative"
            >
              <img 
                src={src} 
                alt={`Project gallery frame ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Page