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

    // Image 1 animation
    gsap.fromTo(
      ".image-1",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".image-1",
          start: "top 75%",
          end: "top 45%",
          scrub: 1,
        },
      }
    );

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

    // Image 2 animation
    gsap.fromTo(
      ".image-2",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".image-2",
          start: "top 75%",
          end: "top 45%",
          scrub: 1,
        },
      }
    );

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

    // Image 3 animation
    gsap.fromTo(
      ".image-3",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".image-3",
          start: "top 75%",
          end: "top 45%",
          scrub: 1,
        },
      }
    );

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

    // Final CTA
    gsap.fromTo(
      ".cta-button-2",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".cta-button-2",
          start: "top 85%",
          end: "top 65%",
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
      className="relative min-h-[400vh] bg-gradient-to-b from-white via-gray-50 to-white px-6 py-32 overflow-hidden"
    >
      {/* Animated background gradient - static version */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.08] pointer-events-none blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(74, 222, 128, 0.6) 0%, rgba(99, 102, 241, 0.4) 50%, rgba(162, 28, 175, 0.3) 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto space-y-32">
        {/* HEADLINE */}
        <div className="text-center pt-20 font-serif">
          <h2 className="headline text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-black mb-6">
            Stop building websites.
            <br />
            <span className="relative inline-block mt-4">
              <span className="bg-gradient-to-r from-[#181f7c] via-[#6366f1] to-[#a34fdc] bg-clip-text text-transparent">
                Start telling stories.
              </span>
              <span
                className="headline-underline absolute left-0 -bottom-3 md:-bottom-4 h-1.5 md:h-2 rounded-full bg-gradient-to-r from-[#181f7c] to-[#a34fdc]"
                style={{ width: "0%" }}
              />
            </span>
          </h2>
        </div>

        {/* STORY FLOW WITH IMAGES */}
        <div className="space-y-24 md:space-y-16 max-w-5xl mx-auto pt-32 font-serif">
          
          {/* Story 1 */}
          <div className="story-1 relative">
            <p className="text-2xl md:text-3xl lg:text-5xl font-light leading-relaxed text-gray-900">
              {renderWords("We're a")} <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>small</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>team</span> {renderWords("with big brains and even bigger dreams.")}
            </p>
          </div>

          <div className="story-2 relative">
            <p className="text-2xl md:text-3xl lg:text-5xl font-light leading-relaxed text-gray-900">
              {renderWords("What started as a few")} <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>late-night</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>ideas</span> {renderWords("became a collective of creators, designers, marketers, and strategists who genuinely care.")}
            </p>
          </div>

         

          {/* Story 3 */}
          <div className="story-3 relative">
            <p className="text-2xl md:text-3xl lg:text-5xl font-medium leading-relaxed text-gray-900">
              {renderWords("We're")} <span className="word-span inline-block font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>not</span> <span className="word-span inline-block font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>here</span> <span className="word-span inline-block font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>to</span> <span className="word-span inline-block font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>just</span> <span className="word-span inline-block font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>run</span> <span className="word-span inline-block font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>ads.</span>
            </p>
          </div>

          <div className="story-4 relative">
            <p className="text-3xl md:text-4xl lg:text-6xl font-bold leading-snug text-gray-900">
              {renderWords("We're here to build")}{" "}
              <span className="relative inline-block">
                <span className="word-span inline-block bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>
                  brands that mean something.
                </span>
              </span>
            </p>
          </div>

          {/* Story 5 */}
          <div className="story-5 relative pb-20">
            <p className="text-2xl md:text-3xl lg:text-5xl font-light leading-relaxed text-gray-900 mb-6">
              {renderWords("Brands that people")} <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>remember,</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>talk</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>about,</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>and</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>come</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>back</span> <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>to.</span>
            </p>
            <p className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-snug bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mt-8">
              Because that's what marketing should be.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div 
          
        className="cta-button-1 text-center pb-20">
          <Link href={'/about'}>
          <button className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full px-10 py-5 font-bold text-lg md:text-xl text-white shadow-2xl bg-gradient-to-r from-[#181f7c] to-[#a34fdc] hover:scale-105 transition-transform">
            <span className="relative z-10">Learn More About Our Story</span>
            <span className="relative z-10 text-2xl">→</span>
          </button>
          </Link>
        </div>

        {/* Modern Feature Cards */}
        <div className="feature-cards grid grid-cols-1 md:grid-cols-2 gap-8 pb-32 font-serif">
          {/* Card 1 */}
          <div className="feature-card group relative ">
            <div className="relative overflow-hidden rounded-3xl bg-white p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#181f7c]/10 to-transparent rounded-bl-[3rem]" />

              <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#181f7c] to-[#a34fdc] flex items-center justify-center shadow-lg group-hover:rotate-[360deg] transition-transform duration-700">
                <span className="text-3xl">✨</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Brand's Best Friend
              </h3>
              <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
                You know that friend who always knows exactly what to say to make everyone love them? That's us, but for your business. We take brands that are amazing (but somehow invisible online) and turn them into the main character of their industry's story.
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-[#181f7c]/0 to-[#a34fdc]/0 group-hover:from-[#181f7c]/5 group-hover:to-[#a34fdc]/5 transition-all duration-500 rounded-3xl" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="feature-card group relative">
            <div className="relative overflow-hidden rounded-3xl bg-white p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#a34fdc]/10 to-transparent rounded-bl-[3rem]" />

              <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#a34fdc] flex items-center justify-center shadow-lg group-hover:-rotate-[360deg] transition-transform duration-700">
                <span className="text-3xl">🎯</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Digital Experiences That Stick
              </h3>
              <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
                We don't just post content and pray, we create digital experiences that make people screenshot, share, and obsess over your brand like it's their new favorite Netflix series.
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/0 to-[#a34fdc]/0 group-hover:from-[#6366f1]/5 group-hover:to-[#a34fdc]/5 transition-all duration-500 rounded-3xl" />
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div 
          
        className="cta-button-2 text-center pb-20">
          <Link href={'/about'}>
          <button className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border-2 border-gray-900 px-10 py-5 font-bold text-lg md:text-2xl transition-all duration-300 hover:scale-105 hover:border-[#a34fdc] bg-white">
            <span className="relative z-10 text-gray-900 group-hover:text-white transition-colors duration-300">
              Discover Our Journey
            </span>
            <span className="relative z-10 text-2xl text-gray-900 group-hover:text-white transition-colors duration-300">
              →
            </span>

            <span className="absolute inset-0 bg-gradient-to-r from-[#181f7c] to-[#a34fdc] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}