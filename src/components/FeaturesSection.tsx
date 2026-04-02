import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { Zap, Brain, LayoutGrid, Palette } from "lucide-react";
import MKQCube from "./MKQCube";

const features = [
  { key: "speed", icon: Zap, color: "text-neon-cyan" },
  { key: "ai", icon: Brain, color: "text-neon-purple" },
  { key: "central", icon: LayoutGrid, color: "text-neon-blue" },
  { key: "design", icon: Palette, color: "text-neon-pink" },
];

const FeaturesSection = () => {
  const { t } = useLang();

  return (
    <section className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4">{t("features.title")}</h2>
          <p className="text-muted-foreground text-lg mb-4">{t("features.subtitle")}</p>
          <MKQCube />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center group hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.15)] transition-all duration-300"
              >
                <div className="flex justify-center mb-5">
                  <Icon className={`${feat.color} group-hover:scale-110 transition-transform duration-300`} size={40} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t(`feat.${feat.key}`)}</h3>
                <p className="text-muted-foreground text-sm">{t(`feat.${feat.key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
