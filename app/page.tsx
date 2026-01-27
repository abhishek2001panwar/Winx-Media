import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CarouselSection } from "@/components/sections/carousel-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FooterSection } from "@/components/sections/footer-section"
import { NavigationMenu } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import ShowcaseSection from "@/components/sections/showcase-section"

export default function Home() {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <CustomCursor />
       
       
        <Hero />
       <ManifestoSection />
       <About />
       <HeroSection /> 
        <FeaturesSection /> 
         <ShowcaseSection />
        <CarouselSection />
        <InsightsSection />
        <PricingSection />
        <FooterSection /> 
      </main>
    </LenisProvider>
  )
}
