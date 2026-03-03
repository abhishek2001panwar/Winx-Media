"use client";

import { LenisProvider } from "@/components/lenis-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { HeroSection } from "@/components/sections/hero-section";
import { Manifesto } from "@/components/sections/manifesto";
import { FeaturesSection } from "@/components/sections/features-section";
import { InsightsSection } from "@/components/sections/insights-section";
import ContactSection from "@/components/sections/contact";
import { FooterSection } from "@/components/sections/footer-section";
import About from "@/components/sections/about";
import Work from "@/components/sections/work";
import Navbar from "@/components/navbar";
import { useEffect, useRef } from "react";
import Strategy from "@/components/sections/strategy";
import { ManifestoSection } from "@/components/sections/manifesto-section";
import TeamPage from "@/components/sections/team";
import App from "./blog/page";
import Carousel from "./carousel/page";
import { Heronew } from "@/components/sections/heronew";
import Analytic from "@/components/sections/analytic";
import { Portfolio } from "@/components/sections/portfoliio";

export default function Home() {
  const lastSectionRef = useRef<string>("");
  const ticking = useRef(false);

  useEffect(() => {
    // Safety check for browser environment
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 300;

          if (window.scrollY < 100) {
            if (window.location.hash && lastSectionRef.current !== "") {
              window.history.replaceState({}, "", window.location.pathname);
              lastSectionRef.current = "";
            }
            ticking.current = false;
            return;
          }

          const sections = [
            "home",
            "manifesto",
            "features",
            "about",
            "work",
            "insights",
            "carousel",
            "contact",
          ];

          for (const id of sections) {
            const section = document.getElementById(id);
            if (!section) continue;

            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            if (scrollPosition >= top && scrollPosition < bottom) {
              // Only update history if the section actually changed
              if (lastSectionRef.current !== id) {
                lastSectionRef.current = id;
                window.history.replaceState(
                  null,
                  "",
                  window.location.pathname + window.location.search,
                );
              }
              break;
            }
          }

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LenisProvider>
      <div className="relative">
        <CustomCursor />
        <Navbar />

        <main className="custom-cursor bg-background ">
          <h1 className="sr-only">Winx Marketing Media</h1>
          <section id="home">
            <Heronew />
          </section>
          {/* <section id="strategy">
            <Strategy />
          </section> */}
          <section id="analysis">
            <Analytic />
          </section>

          <section id="features">
            <FeaturesSection />
          </section>
          {/* <section id="manifesto">
            <Manifesto />
          </section> */}

          {/* <section id="about">
            <About />
          </section> */}
          <Portfolio />
          <ManifestoSection />

          <section id="work">
            <Work />
          </section>

          <section id="carousel">
            <Carousel />
          </section>

          <section id="team">
            <TeamPage />
          </section>
          <section id="blog">
            <App />
          </section>

          <section id="insights">
            <InsightsSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>

          <section id="footer">
            <FooterSection />
          </section>
        </main>
      </div>
    </LenisProvider>
  );
}
