"use client";
import React from "react";
import { projects } from "../../../lib/projects";

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
      <div className="max-w-[1600px] mx-auto px-6 pt-6 pb-16 md:px-12 lg:px-16">
        <div className="w-full overflow-hidden rounded-xl bg-neutral-900 shadow-2xl">
          <img
            src={projects[0].coverImage}
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
            <h1 className="text-4xl md:text-6xl  tracking-tight mb-10 font-light">
              {projects[0].title}
            </h1>

            {/* Metadata */}
            <div className="space-y-8 text-sm md:text-base">
              <div>
                <h3 className="text-neutral-500 font-light mb-1">Industry</h3>
                <p className="text-neutral-300">{projects[0].industry}</p>
              </div>
              <div>
                <h3 className="text-neutral-500 font-light mb-1">
                  What We Did
                </h3>
                <p className="text-neutral-300 leading-relaxed max-w-md">
                  <div className="flex flex-wrap gap-2 max-w-md">
                    {projects[0]?.services.map((service) => (
                      <span
                        key={service}
                        className="border border-neutral-300 rounded-full px-3 py-1 text-sm font-light"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}

          {/* Download Button */}
          <div>
            <button
              onClick={() => {
                window.location.href = "tel:+919876543210";
              }}
              className="bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium py-4 px-8 rounded-full transition-colors duration-200 shadow-md"
            >
              Connect with us
            </button>
          </div>
        </div>

        {/* Right Column: Narrative Content */}
        <div className="lg:col-span-7 space-y-16 pt-2">
          {/* Section 1 */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-light tracking-tight">
              {projects[0].sections[0]?.heading}
            </h2>
            <p className="text-neutral-400 text-base md:text-xl leading-relaxed font-light">
              {projects[0].sections[0]?.paragraphs[0]}
            </p>
            <p className="text-neutral-400 text-base md:text-xl leading-relaxed font-light">
              {projects[0].sections[0]?.paragraphs[1]}
            </p>
            <p className="text-neutral-400 text-base md:text-xl leading-relaxed font-light">
              {projects[0].sections[0]?.paragraphs[2]}
            </p>
            <p className="text-neutral-400 text-base md:text-xl leading-relaxed font-light">
              {projects[0].sections[0]?.paragraphs[3]}
            </p>
          </div>
        </div>
      </div>

      {/* --- Full-Width Image Showcases (Stacked One by One) --- */}
      <section className="py-16 md:py-24 space-y-8 md:space-y-12">
        {projects[0].showcase.map((item, index) => {
          // Landscape Image
          if (item.type === "landscape") {
            return (
              <div
                key={index}
                className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <div className="overflow-hidden rounded-xl lg:rounded-xl bg-black">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-auto max-h-[55vh] md:h-[90vh] md:max-h-none object-contain md:object-cover transition-transform duration-700 md:hover:scale-105"
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
                    className="overflow-hidden rounded-xl lg:rounded-xl bg-black"
                  >
                    <img
                      src={image.image}
                      alt=""
                      className={`
                  w-full
                  h-auto
                  md:h-[650px]
                  object-contain
                  md:object-cover
                  transition-transform
                  duration-700
                  md:hover:scale-105
                  ${
                    image.aspect === "portrait"
                      ? "md:aspect-[3/4]"
                      : "md:aspect-[4/3]"
                  }
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
