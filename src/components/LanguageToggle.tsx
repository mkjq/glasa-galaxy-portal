import { useLang, langLabels, type Lang } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const langs = Object.keys(langLabels) as Lang[];

const LanguageToggle = () => {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="fixed top-6 right-6 z-50">
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="glass-card px-4 py-2 flex items-center gap-2 cursor-pointer text-foreground hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.3)] transition-all duration-300"
      >
        <Globe size={16} />
        <span className="text-sm font-semibold">{langLabels[lang]}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 glass-card overflow-hidden min-w-[160px]"
          >
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setOpen(false); }}
                className={`w-full text-start px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-white/10 ${
                  l === lang ? "text-foreground font-semibold bg-white/5" : "text-muted-foreground"
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;
