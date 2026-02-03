"use client";

import { LenisProvider } from "@/components/lenis-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { HeroSection } from "@/components/sections/hero-section";
import { Manifesto } from "@/components/sections/manifesto";
import { FeaturesSection } from "@/components/sections/features-section";
import { CarouselSection } from "@/components/sections/carousel-section";
import { InsightsSection } from "@/components/sections/insights-section";
import ContactSection from "@/components/sections/contact";
import { FooterSection } from "@/components/sections/footer-section";
import About from "@/components/sections/about";
import Work from "@/components/sections/work";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import Strategy from "@/components/sections/strategy";
import { ManifestoSection } from "@/components/sections/manifesto-section";
import TeamPage from "@/components/sections/team";
import App from "./blog/page";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      if (window.scrollY < 100) {
        if (window.location.hash) {
          window.history.replaceState({}, "", window.location.pathname);
        }
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
          if (window.location.hash !== `#${id}`) {
            window.history.replaceState({}, "", `#${id}`);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LenisProvider>
      <div className="relative">
        <CustomCursor />
        <Navbar />

        <main className="custom-cursor bg-background">
          <section id="home">
            <HeroSection />
          </section>
          <section id="strategy">
            <Strategy />
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
          <ManifestoSection />

          <section id="work">
            <Work />
          </section>

          <section id="carousel">
            <CarouselSection />
          </section>

          <section id="team">
            <TeamPage />
          </section>
          <section id="blog">
            <App/>
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
