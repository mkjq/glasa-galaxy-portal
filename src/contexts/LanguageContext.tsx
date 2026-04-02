import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<string, Record<Lang, string>> = {
  "hero.title": { en: "Your Ultimate Web Tools Hub", ar: "مركزك الشامل لأدوات الويب" },
  "hero.subtitle": { en: "All your favorite tools in one powerful platform.", ar: "جميع أدواتك المفضلة في منصة واحدة قوية." },
  "hero.cta": { en: "Get Started", ar: "ابدأ الآن" },
  "tools.title": { en: "Our Tools", ar: "أدواتنا" },
  "tools.subtitle": { en: "Explore our collection of powerful web tools", ar: "استكشف مجموعتنا من أدوات الويب القوية" },
  "features.title": { en: "Why Choose Us", ar: "لماذا تختارنا" },
  "features.subtitle": { en: "Built for the future, designed for today", ar: "صُمم للمستقبل، مُصمم لليوم" },
  "feat.speed": { en: "Lightning Fast", ar: "سرعة البرق" },
  "feat.speed.desc": { en: "Optimized for blazing fast performance across all tools.", ar: "مُحسّن لأداء فائق السرعة عبر جميع الأدوات." },
  "feat.ai": { en: "AI Powered", ar: "مدعوم بالذكاء الاصطناعي" },
  "feat.ai.desc": { en: "Intelligent tools that learn and adapt to your workflow.", ar: "أدوات ذكية تتعلم وتتكيف مع سير عملك." },
  "feat.central": { en: "Centralized Access", ar: "وصول مركزي" },
  "feat.central.desc": { en: "All your tools in one place, accessible anytime.", ar: "جميع أدواتك في مكان واحد، متاحة في أي وقت." },
  "feat.design": { en: "Futuristic Design", ar: "تصميم مستقبلي" },
  "feat.design.desc": { en: "Beautiful interfaces that make work feel effortless.", ar: "واجهات جميلة تجعل العمل يبدو سهلاً." },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "footer.terms": { en: "Terms of Service", ar: "شروط الخدمة" },
  "tool.gg": { en: "Cloud Storage", ar: "التخزين السحابي" },
  "tool.gg.desc": { en: "Secure file storage & sharing", ar: "تخزين ومشاركة الملفات بأمان" },
  "tool.ryvoa": { en: "AI Cybersecurity", ar: "الأمن السيبراني بالذكاء الاصطناعي" },
  "tool.ryvoa.desc": { en: "AI-powered security chat", ar: "دردشة أمنية مدعومة بالذكاء الاصطناعي" },
  "tool.promts": { en: "Prompt Generator", ar: "مولد النصوص" },
  "tool.promts.desc": { en: "Creative AI prompt crafting", ar: "صياغة نصوص إبداعية بالذكاء الاصطناعي" },
  "tool.ff": { en: "Free Fire AI", ar: "فري فاير AI" },
  "tool.ff.desc": { en: "AI gaming settings optimizer", ar: "محسّن إعدادات الألعاب بالذكاء الاصطناعي" },
  "tool.dhekra": { en: "Dhekra", ar: "ذكرى" },
  "tool.dhekra.desc": { en: "Spiritual & religious companion", ar: "رفيقك الروحي والديني" },
  "tool.linkoo": { en: "Linkoo", ar: "لينكو" },
  "tool.linkoo.desc": { en: "Personal link aggregator", ar: "مجمّع الروابط الشخصية" },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));
  const t = (key: string) => translations[key]?.[lang] ?? key;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, dir }}>
      <div dir={dir} className={lang === "ar" ? "font-arabic" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
