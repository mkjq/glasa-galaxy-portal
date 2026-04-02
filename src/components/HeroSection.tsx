import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";
import MKQCube from "./MKQCube";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-blue/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/10 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight gradient-text mb-6"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.a
          href="#tools"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-primary-foreground neon-glow-purple transition-all duration-300 hover:shadow-[0_0_40px_hsl(260_90%_65%/0.5)]"
        >
          {t("hero.cta")}
        </motion.a>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
