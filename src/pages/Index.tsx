import { LanguageProvider } from "@/contexts/LanguageContext";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import MKQCube from "@/components/MKQCube";
import ToolsSection from "@/components/ToolsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
        <ParticleBackground />
        <LanguageToggle />
        <HeroSection />
        <MKQCube />
        <ToolsSection />
        <FeaturesSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
