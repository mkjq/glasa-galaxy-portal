import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { lang, toggleLang } = useLang();

  return (
    <motion.button
      onClick={toggleLang}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-6 right-6 z-50 glass-card px-4 py-2 flex items-center gap-2 cursor-pointer text-foreground hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.3)] transition-all duration-300"
    >
      <Globe size={16} />
      <span className="text-sm font-semibold">{lang === "en" ? "العربية" : "English"}</span>
    </motion.button>
  );
};

export default LanguageToggle;
