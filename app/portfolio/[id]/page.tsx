"use client";
import React from "react";
import { projects } from "../../../lib/projects";
import { useState } from "react";
import { useParams } from "next/navigation";




 function  Page() {
    const [expanded, setExpanded] = useState(false);
  // Array of placeholder image paths—replace these with your actual local or hosted image URLs
 
   const params = useParams();

const id = params.id as string;

const project = projects.find((p) => p.slug === id);

  if (!project) {
    return <div>Project not found</div>;
  }



  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-neutral-800">
      {/* Top Navigation Bar with Back Button */}
      <div className="max-w-[1600px] mx-auto px-6 pt-8 md:px-12 lg:px-16 flex justify-between items-center">
        <button
          onClick={() => window.history.back()}
          className="group flex items-center gap-2 text-neutral-400 hover:text-black transition-colors duration-200 text-sm font-medium"
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back
        </button>
      </div>

      {/* Main Massive Hero Image (Full Width of Content Grid) */}
<div className="max-w-[1600px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 pt-6 md:pt-10">   
         <div className="w-full overflow-hidden rounded-xl bg-neutral-900 shadow-2xl">
          <img
            src={project.coverImage}
            alt="Blank Street Coffee Sign"
            className="w-full h-auto aspect-[16/8] object-cover object-center"
          />
        </div>
      </div>

      {/* Main Content Grid - Enhanced to an Ultra-wide Scale */}
<div className="max-w-[1600px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 pt-4 md:pt-8 pb-10 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column: Brand Info & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 md:space-y-16">
            <div>
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 md:mb-10 font-light text-black">
                {project.title}
              </h1>

              {/* Metadata */}
              <div className="space-y-6 md:space-y-8 text-sm md:text-base">
                <div>
                  <h3 className="text-neutral-600 font-light mb-2 text-xs md:text-sm uppercase tracking-wide">Industry</h3>
                  <p className="text-neutral-800 font-medium">{project.industry}</p>
                </div>
                <div>
                  <h3 className="text-neutral-600 font-light mb-2 text-xs md:text-sm uppercase tracking-wide">
                    What We Did
                  </h3>
                  <div className="flex flex-wrap gap-2 max-w-md">
                    {project?.services.map((service) => (
                      <span
                        key={service}
                        className="border border-neutral-600 rounded-full px-3 py-1 text-xs sm:text-sm  text-neutral-800 hover:bg-neutral-900 hover:text-white transition-colors"
                      >
                        <h2 className="text-xs sm:text-sm  ">
                          {service}
                        </h2>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div>
              <button
                onClick={() => {
                  window.location.href = "tel:+919876543210";
                }}
                className="w-auto sm:w-auto bg-neutral-900 hover:bg-black text-white text-sm font-medium py-3 md:py-4 px-6 md:px-8 rounded-full transition-colors duration-200 shadow-md"
              >
                Connect with us
              </button>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12 pt-0 lg:pt-2">
            {/* Section 1 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-black">
                {project.sections[0]?.heading}
              </h2>

              {/* Small Screen: Show First Paragraph + Collapsible Rest */}
              <div className="lg:hidden">
                {/* Always show first paragraph */}
                {project.sections[0]?.paragraphs[0] && (
                  <p className="text-neutral-800 text-sm sm:text-base leading-relaxed font-light mb-4">
                    {project.sections[0].paragraphs[0]}
                  </p>
                )}

                {/* Collapsible button for remaining paragraphs */}
                {project.sections[0]?.paragraphs.length > 1 && (
                  <>
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="flex items-center gap-2 text-black font-medium py-2 hover:text-neutral-700 transition-colors"
                    >
                      <span>{expanded ? "Show Less" : "Know More"}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </button>

                    {expanded && (
                      <div className="space-y-4 mt-4 animate-in fade-in">
                        {project.sections[0]?.paragraphs.slice(1).map((para, idx) => (
                          <p
                            key={idx}
                            className="text-neutral-800 text-sm sm:text-base leading-relaxed font-light"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Large Screen: Always Visible */}
              <div className="hidden lg:block space-y-4">
                {project.sections[0]?.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-neutral-800 text-base md:text-lg lg:text-xl leading-relaxed font-light"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Full-Width Image Showcases (Stacked One by One) --- */}
      <section className="py-16 md:py-24 space-y-8 md:space-y-12">
        {project.showcase.map((item, index) => {
          // Landscape Image
          if (item.type === "landscape") {
            return (
              <div
                key={index}
                className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <div className="overflow-hidden rounded-xl lg:rounded-xl">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-auto max-h-[55vh]  md:h-auto md:max-h-none   object-contain md:object-cover"
                  />
                </div>
              </div>
            );
          }

          // Grid Images
          return (
            <div key={index} className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {item.images?.map((image, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl lg:rounded-xl"
                  >
                    <img
                      src={image.image}
                      alt=""
                      className={`
                  w-full
                  h-auto
                  md:h-auto
                  object-contain
                  md:object-cover
                 
                
                 

                `}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Page;

//  ${
//                     image.aspect === "portrait"
//                       ? "md:aspect-[3/4]"
//                       : "md:aspect-[4/3]"
//                   }