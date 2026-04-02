import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { Cloud, Shield, Sparkles, Gamepad2, BookHeart, Link2 } from "lucide-react";

const tools = [
  { key: "gg", url: "https://gg.mkq.one", icon: Cloud, gradient: "from-neon-blue to-neon-cyan" },
  { key: "ryvoa", url: "https://ryvoa.mkq.one", icon: Shield, gradient: "from-neon-purple to-neon-blue" },
  { key: "promts", url: "https://promts.mkq.one", icon: Sparkles, gradient: "from-neon-pink to-neon-purple" },
  { key: "ff", url: "https://ff.mkq.one", icon: Gamepad2, gradient: "from-neon-cyan to-neon-blue" },
  { key: "dhekra", url: "https://dhekra.mkq.one", icon: BookHeart, gradient: "from-neon-purple to-neon-pink" },
  { key: "linkoo", url: "https://linkoo.click", icon: Link2, gradient: "from-neon-blue to-neon-purple" },
];

const ToolsSection = () => {
  const { t } = useLang();

  return (
    <section id="tools" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4">{t("tools.title")}</h2>
          <p className="text-muted-foreground text-lg">{t("tools.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.a
                key={tool.key}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card gradient-border p-8 group cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--neon-purple)/0.2)]"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{t(`tool.${tool.key}`)}</h3>
                <p className="text-muted-foreground text-sm">{t(`tool.${tool.key}.desc`)}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
