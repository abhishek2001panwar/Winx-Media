"use client";

import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Headline animation
    gsap.fromTo(
      ".headline",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".headline",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    // Underline animation
    gsap.fromTo(
      ".headline-underline",
      { width: "0%" },
      {
        width: "100%",
        duration: 1,
        scrollTrigger: {
          trigger: ".headline",
          start: "top 60%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );

    // Story 1 - word by word reveal
    gsap.to(".story-1 .word-span", {
      opacity: 1,
      y: 0,
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".story-1",
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
      },
    });

    // Story 2 - word by word reveal
    gsap.to(".story-2 .word-span", {
      opacity: 1,
      y: 0,
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".story-2",
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
      },
    });

    // Story 3 - word by word reveal
    gsap.to(".story-3 .word-span", {
      opacity: 1,
      y: 0,
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".story-3",
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
      },
    });

    // Story 4 - word by word reveal
    gsap.to(".story-4 .word-span", {
      opacity: 1,
      y: 0,
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".story-4",
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
      },
    });

    // Story 5 - word by word reveal
    gsap.to(".story-5 .word-span", {
      opacity: 1,
      y: 0,
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".story-5",
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
      },
    });

    // CTA Button animations
    gsap.fromTo(
      ".cta-button-1",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".cta-button-1",
          start: "top 85%",
          end: "top 65%",
          scrub: 1,
        },
      }
    );

    // Cards animation
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".feature-cards",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );
  }, []);

  // Helper function to split text into word spans
  const renderWords = (text: string, className: string = "") => {
    const words = text.split(" ");
    return words.map((word, index) => (
      <React.Fragment key={index}>
        <span
          className={`word-span inline-block ${className}`}
          style={{
            opacity: 0,
            transform: "translateY(30px)",
          }}
        >
          {word}
        </span>
        {index < words.length - 1 && (
          <span
            className="word-span inline-block"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
            }}
          >
            &nbsp;
          </span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-b from-white via-gray-50 to-white px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div
        className="absolute w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full opacity-[0.08] pointer-events-none blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(74, 222, 128, 0.6) 0%, rgba(99, 102, 241, 0.4) 50%, rgba(162, 28, 175, 0.3) 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
        {/* HEADLINE */}
        <div className="text-center pt-4 sm:pt-6 md:pt-8 lg:pt-12 font-serif">
          <h2 className="headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black mb-4 sm:mb-6 px-2">
            Stop building websites.
            <br />
            <span className="relative inline-block mt-2 sm:mt-4">
              <span className="bg-gradient-to-r from-[#181f7c] via-[#6366f1] to-[#a34fdc] bg-clip-text text-transparent">
                Start telling stories.
              </span>
              <span
                className="headline-underline absolute left-0 -bottom-2 sm:-bottom-3 md:-bottom-4 h-1 sm:h-1.5 md:h-2 rounded-full bg-gradient-to-r from-[#181f7c] to-[#a34fdc]"
                style={{ width: "0%" }}
              />
            </span>
          </h2>
        </div>

        {/* STORY FLOW */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 max-w-5xl mx-auto pt-6 sm:pt-8 md:pt-10 lg:pt-12 font-serif px-2 sm:px-4">
          
          {/* Story 1 */}
          <div className="story-1 relative">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed text-gray-900">
              {renderWords("We're a")} <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>small</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>team</span> {renderWords("with big brains and even bigger dreams.")}
            </p>
          </div>

          {/* Story 2 */}
          <div className="story-2 relative">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed text-gray-900">
              {renderWords("What started as a few")} <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>late-night</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>ideas</span> {renderWords("became a collective of creators, designers, marketers, and strategists who genuinely care.")}
            </p>
          </div>

          {/* Story 3 */}
          <div className="story-3 relative">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-relaxed text-gray-900">
              {renderWords("We're")} <span className="word-span inline-block font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>not</span> <span className="word-span inline-block font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>here</span> <span className="word-span inline-block font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>to</span> <span className="word-span inline-block font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>just</span> <span className="word-span inline-block font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>run</span> <span className="word-span inline-block font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>ads.</span>
            </p>
          </div>

          {/* Story 4 */}
          <div className="story-4 relative">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-snug text-gray-900">
              {renderWords("We're here to build")}{" "}
              <span className="relative inline-block">
                <span className="word-span inline-block bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>
                  brands that mean something.
                </span>
              </span>
            </p>
          </div>

          {/* Story 5 */}
          <div className="story-5 relative pb-4 sm:pb-6 md:pb-8">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed text-gray-900 mb-4 sm:mb-5 md:mb-6">
              {renderWords("Brands that people")} <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>remember,</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>talk</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>about,</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>and</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>come</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>back</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>to.</span>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-snug bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mt-3 sm:mt-4 md:mt-6">
              Because that's what marketing should be.
            </p>
          </div>
        </div>

        {/* CTA Button 1 */}
        <div className="cta-button-1 text-center pb-6 sm:pb-8 md:pb-10 lg:pb-12">
          <Link href={'/about'}>
            <button className="group relative inline-flex items-center gap-2 sm:gap-3 md:gap-4 overflow-hidden rounded-full px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white shadow-2xl bg-gradient-to-r from-[#181f7c] to-[#a34fdc] hover:scale-105 transition-transform">
              <span className="relative z-10">Learn More About Our Story</span>
              <span className="relative z-10 text-lg sm:text-xl md:text-2xl">→</span>
            </button>
          </Link>
        </div>

        {/* Modern Feature Cards */}
        <div className="feature-cards grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-6 sm:pb-8 md:pb-10 lg:pb-12 font-serif px-2 sm:px-0">
          {/* Card 1 */}
          <div className="feature-card group relative">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#181f7c]/10 to-transparent rounded-bl-[1.5rem] sm:rounded-bl-[2rem] md:rounded-bl-[2.5rem]" />

              <div className="mb-3 sm:mb-4 md:mb-5 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#181f7c] to-[#a34fdc] flex items-center justify-center shadow-lg group-hover:rotate-[360deg] transition-transform duration-700">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">✨</span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                Your Brand's Best Friend
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                You know that friend who always knows exactly what to say to make everyone love them? That's us, but for your business. We take brands that are amazing (but somehow invisible online) and turn them into the main character of their industry's story.
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-[#181f7c]/0 to-[#a34fdc]/0 group-hover:from-[#181f7c]/5 group-hover:to-[#a34fdc]/5 transition-all duration-500 rounded-2xl sm:rounded-3xl" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="feature-card group relative">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#a34fdc]/10 to-transparent rounded-bl-[1.5rem] sm:rounded-bl-[2rem] md:rounded-bl-[2.5rem]" />

              <div className="mb-3 sm:mb-4 md:mb-5 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#a34fdc] flex items-center justify-center shadow-lg group-hover:-rotate-[360deg] transition-transform duration-700">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">🎯</span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                Digital Experiences That Stick
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                We don't just post content and pray, we create digital experiences that make people screenshot, share, and obsess over your brand like it's their new favorite Netflix series.
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/0 to-[#a34fdc]/0 group-hover:from-[#6366f1]/5 group-hover:to-[#a34fdc]/5 transition-all duration-500 rounded-2xl sm:rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}