"use client";

import { LanguageProvider } from "@/components/language-provider";
import { GlassBackgroundShell } from "@/components/glass-background";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { ParallaxScrollFeatureSection } from "@/components/ui/parallax-scroll-feature-section";
import { Contact } from "@/components/contact";

const Home = () => {
  return (
    <LanguageProvider>
      <GlassBackgroundShell>
        <main className="relative z-10 min-h-screen w-full overflow-x-hidden">
          <SiteNav />
          <Hero />
          <ParallaxScrollFeatureSection />
          <Contact />
        </main>
      </GlassBackgroundShell>
    </LanguageProvider>
  );
};

export default Home;
