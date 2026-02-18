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
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".headline",
          start: "top 85%",
          end: "top 60%",
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
        duration: 0.8,
        scrollTrigger: {
          trigger: ".headline",
          start: "top 65%",
          end: "top 45%",
          scrub: 1,
        },
      }
    );

    // Story 1 - word by word reveal
    gsap.to(".story-1 .word-span", {
      opacity: 1,
      y: 0,
      stagger: 0.015,
      scrollTrigger: {
        trigger: ".story-1",
        start: "top 75%",
        end: "top 40%",
        scrub: 1.5,
      },
    });

    // Story 2 - word by word reveal
    gsap.to(".story-2 .word-span", {
      opacity: 1,
      y: 0,
      stagger: 0.015,
      scrollTrigger: {
        trigger: ".story-2",
        start: "top 75%",
        end: "top 40%",
        scrub: 1.5,
      },
    });

    // Story 3 - word by word reveal
    gsap.to(".story-3 .word-span", {
      opacity: 1,
      y: 0,
      stagger: 0.015,
      scrollTrigger: {
        trigger: ".story-3",
        start: "top 75%",
        end: "top 40%",
        scrub: 1.5,
      },
    });

    // Story 4 - word by word reveal
    gsap.to(".story-4 .word-span", {
      opacity: 1,
      y: 0,
      stagger: 0.015,
      scrollTrigger: {
        trigger: ".story-4",
        start: "top 75%",
        end: "top 40%",
        scrub: 1.5,
      },
    });

    // Story 5 - word by word reveal
    gsap.to(".story-5 .word-span", {
      opacity: 1,
      y: 0,
      stagger: 0.015,
      scrollTrigger: {
        trigger: ".story-5",
        start: "top 75%",
        end: "top 40%",
        scrub: 1.5,
      },
    });

    // CTA Button animations
    gsap.fromTo(
      ".cta-button-1",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".cta-button-1",
          start: "top 90%",
          end: "top 70%",
          scrub: 1,
        },
      }
    );

    // Cards animation
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".feature-cards",
          start: "top 85%",
          end: "top 55%",
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
      className="relative w-full overflow-hidden py-12 md:py-10 lg:py-10 bg-background"
    >
      {/* Animated background gradient */}
      <div
        className="absolute w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full opacity-[0.08] pointer-events-none blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(74, 222, 128, 0.6) 0%, rgba(99, 102, 241, 0.4) 50%, rgba(162, 28, 175, 0.3) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADLINE */}
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="headline font-serif text-4xl md:text-5xl lg:text-6xl font-light text-black mb-2 md:mb-3">
            Stop building websites.
            <br />
            <span className="relative inline-block mt-3">
              <span className="bg-gradient-to-r from-[#181f7c] via-[#6366f1] to-[#a34fdc] bg-clip-text text-transparent">
                Start telling stories.
              </span>
              <span
                className="headline-underline mt-2 absolute left-0 -bottom-2 h-1 sm:h-1 md:h-2 rounded-full bg-gradient-to-r from-[#181f7c] to-[#a34fdc]"
                style={{ width: "0%" }}
              />
            </span>
          </h2>
        </div>

        {/* STORY FLOW */}
        <div className="mx-auto max-w-5xl space-y-4 md:space-y-5 font-serif mt-8">
          {/* Story 1 */}
          <p className="story-1 text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed text-left">
            {renderWords("We're a")}{" "}
            <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>small</span>{" "}
            <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>team</span>{" "}
            {renderWords("with big brains and even bigger dreams.")}
          </p>

          {/* Story 2 */}
          <p className="story-2 text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed text-left">
            {renderWords("What started as a few")}{" "}
            <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>late-night</span>{" "}
            <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>ideas</span>{" "}
            {renderWords(
              "became a collective of creators, designers, marketers, and strategists who genuinely care."
            )}
          </p>

          {/* Story 3 */}
          <p className="story-3 text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed text-left">
            {renderWords("We're")}{" "}
            <span className="word-span inline-block font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>
              not here to just run ads.
            </span>
          </p>

          {/* Story 4 */}
          <p className="story-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-relaxed text-left">
            {renderWords("We're here to build")}{" "}
            <span className="word-span inline-block bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>
              brands that mean something.
            </span>
          </p>

          {/* Story 5 */}
          <p className="story-5 text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed text-left">
            {renderWords("Brands that people")}{" "}
            <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>remember,</span>{" "}
            <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>talk</span>{" "}
            <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>about,</span>{" "}
            <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>and</span>{" "}
            <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>come</span>{" "}
            <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>back</span>{" "}
            <span className="word-span inline-block font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent" style={{ opacity: 0, transform: "translateY(30px)" }}>to.</span>
            <br />
            {/* <span className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent italic mt-3 inline-block">
              Because that's what marketing should be.
            </span> */}
          </p>
        </div>

        {/* CTA Button 1 */}
        <div className="mt-8 md:mt-10 text-center">
          <Link
            href="/about"
            className="cta-button-1 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#181f7c] to-[#a34fdc] px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white shadow-2xl transition-all hover:scale-105"
          >
            Learn More About Our Story →
          </Link>
        </div>

        {/* Modern Feature Cards */}
        <div className="feature-cards mt-12 md:mt-16 grid gap-6 md:gap-8 md:grid-cols-2">
          {/* Card 1 */}
          <div className="feature-card group relative">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#181f7c]/10 to-transparent rounded-bl-[2rem]" />

              <div className="mb-4 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#181f7c] to-[#a34fdc] flex items-center justify-center shadow-lg group-hover:rotate-[360deg] transition-transform duration-700">
                <span className="text-2xl md:text-3xl">✨</span>
              </div>

              <h3 className="mb-3 text-xl md:text-2xl font-bold text-gray-900">
                Your Brand's Best Friend
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                You know that friend who always knows exactly what to say to make
                everyone love them? That's us, but for your business. We take
                brands that are amazing (but somehow invisible online) and turn
                them into the main character of their industry's story.
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-[#181f7c]/0 to-[#a34fdc]/0 group-hover:from-[#181f7c]/5 group-hover:to-[#a34fdc]/5 transition-all duration-500 rounded-2xl sm:rounded-3xl" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="feature-card group relative">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#a34fdc]/10 to-transparent rounded-bl-[2rem]" />

              <div className="mb-4 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#a34fdc] flex items-center justify-center shadow-lg group-hover:-rotate-[360deg] transition-transform duration-700">
                <span className="text-2xl md:text-3xl">🎯</span>
              </div>

              <h3 className="mb-3 text-xl md:text-2xl font-bold text-gray-900">
                Digital Experiences That Stick
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                We don't just post content and pray, we create digital
                experiences that make people screenshot, share, and obsess over
                your brand like it's their new favorite Netflix series.
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/0 to-[#a34fdc]/0 group-hover:from-[#6366f1]/5 group-hover:to-[#a34fdc]/5 transition-all duration-500 rounded-2xl sm:rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}