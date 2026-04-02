import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "ar" | "fr" | "es" | "de" | "tr" | "zh";

export const langLabels: Record<Lang, string> = {
  en: "English",
  ar: "العربية",
  fr: "Français",
  es: "Español",
  de: "Deutsch",
  tr: "Türkçe",
  zh: "中文",
};

const rtlLangs: Lang[] = ["ar"];

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<string, Record<Lang, string>> = {
  "hero.title": {
    en: "Your Ultimate Web Tools Hub",
    ar: "مركزك الشامل لأدوات الويب",
    fr: "Votre Hub Ultime d'Outils Web",
    es: "Tu Centro Definitivo de Herramientas Web",
    de: "Ihr ultimativer Web-Tools-Hub",
    tr: "En İyi Web Araçları Merkeziniz",
    zh: "您的终极网络工具中心",
  },
  "hero.subtitle": {
    en: "All your favorite tools in one powerful platform.",
    ar: "جميع أدواتك المفضلة في منصة واحدة قوية.",
    fr: "Tous vos outils préférés sur une seule plateforme puissante.",
    es: "Todas tus herramientas favoritas en una plataforma poderosa.",
    de: "Alle Ihre Lieblingswerkzeuge auf einer leistungsstarken Plattform.",
    tr: "Tüm favori araçlarınız tek bir güçlü platformda.",
    zh: "所有您喜爱的工具，尽在一个强大的平台。",
  },
  "hero.cta": {
    en: "Get Started", ar: "ابدأ الآن", fr: "Commencer", es: "Comenzar", de: "Loslegen", tr: "Başla", zh: "开始使用",
  },
  "tools.title": {
    en: "Our Tools", ar: "أدواتنا", fr: "Nos Outils", es: "Nuestras Herramientas", de: "Unsere Tools", tr: "Araçlarımız", zh: "我们的工具",
  },
  "tools.subtitle": {
    en: "Explore our collection of powerful web tools",
    ar: "استكشف مجموعتنا من أدوات الويب القوية",
    fr: "Explorez notre collection d'outils web puissants",
    es: "Explora nuestra colección de herramientas web potentes",
    de: "Entdecken Sie unsere Sammlung leistungsstarker Web-Tools",
    tr: "Güçlü web araçları koleksiyonumuzu keşfedin",
    zh: "探索我们强大的网络工具集合",
  },
  "features.title": {
    en: "Why Choose Us", ar: "لماذا تختارنا", fr: "Pourquoi Nous Choisir", es: "¿Por Qué Elegirnos?", de: "Warum Uns Wählen", tr: "Neden Bizi Seçmelisiniz", zh: "为什么选择我们",
  },
  "features.subtitle": {
    en: "Built for the future, designed for today",
    ar: "صُمم للمستقبل، مُصمم لليوم",
    fr: "Construit pour le futur, conçu pour aujourd'hui",
    es: "Construido para el futuro, diseñado para hoy",
    de: "Für die Zukunft gebaut, für heute gestaltet",
    tr: "Gelecek için inşa edildi, bugün için tasarlandı",
    zh: "为未来而建，为今天而设计",
  },
  "feat.speed": {
    en: "Lightning Fast", ar: "سرعة البرق", fr: "Ultra Rapide", es: "Ultrarrápido", de: "Blitzschnell", tr: "Işık Hızında", zh: "闪电般快速",
  },
  "feat.speed.desc": {
    en: "Optimized for blazing fast performance across all tools.",
    ar: "مُحسّن لأداء فائق السرعة عبر جميع الأدوات.",
    fr: "Optimisé pour des performances ultra-rapides sur tous les outils.",
    es: "Optimizado para un rendimiento ultrarrápido en todas las herramientas.",
    de: "Optimiert für blitzschnelle Leistung bei allen Tools.",
    tr: "Tüm araçlarda yüksek performans için optimize edildi.",
    zh: "针对所有工具进行了极速性能优化。",
  },
  "feat.ai": {
    en: "AI Powered", ar: "مدعوم بالذكاء الاصطناعي", fr: "Propulsé par l'IA", es: "Impulsado por IA", de: "KI-gestützt", tr: "Yapay Zeka Destekli", zh: "AI 驱动",
  },
  "feat.ai.desc": {
    en: "Intelligent tools that learn and adapt to your workflow.",
    ar: "أدوات ذكية تتعلم وتتكيف مع سير عملك.",
    fr: "Des outils intelligents qui s'adaptent à votre flux de travail.",
    es: "Herramientas inteligentes que aprenden y se adaptan a tu flujo de trabajo.",
    de: "Intelligente Tools, die Ihren Workflow lernen und sich anpassen.",
    tr: "İş akışınıza uyum sağlayan akıllı araçlar.",
    zh: "智能工具，学习并适应您的工作流程。",
  },
  "feat.central": {
    en: "Centralized Access", ar: "وصول مركزي", fr: "Accès Centralisé", es: "Acceso Centralizado", de: "Zentraler Zugriff", tr: "Merkezi Erişim", zh: "集中访问",
  },
  "feat.central.desc": {
    en: "All your tools in one place, accessible anytime.",
    ar: "جميع أدواتك في مكان واحد، متاحة في أي وقت.",
    fr: "Tous vos outils en un seul endroit, accessibles à tout moment.",
    es: "Todas tus herramientas en un solo lugar, accesibles en cualquier momento.",
    de: "Alle Ihre Tools an einem Ort, jederzeit zugänglich.",
    tr: "Tüm araçlarınız tek bir yerde, her zaman erişilebilir.",
    zh: "所有工具集中一处，随时可用。",
  },
  "feat.design": {
    en: "Futuristic Design", ar: "تصميم مستقبلي", fr: "Design Futuriste", es: "Diseño Futurista", de: "Futuristisches Design", tr: "Fütüristik Tasarım", zh: "未来主义设计",
  },
  "feat.design.desc": {
    en: "Beautiful interfaces that make work feel effortless.",
    ar: "واجهات جميلة تجعل العمل يبدو سهلاً.",
    fr: "De belles interfaces qui rendent le travail sans effort.",
    es: "Interfaces hermosas que hacen que el trabajo se sienta sin esfuerzo.",
    de: "Schöne Oberflächen, die Arbeit mühelos machen.",
    tr: "İşi zahmetsiz hissettiren güzel arayüzler.",
    zh: "精美的界面，让工作变得轻松。",
  },
  "footer.rights": {
    en: "All rights reserved.", ar: "جميع الحقوق محفوظة.", fr: "Tous droits réservés.", es: "Todos los derechos reservados.", de: "Alle Rechte vorbehalten.", tr: "Tüm hakları saklıdır.", zh: "版权所有。",
  },
  "footer.privacy": {
    en: "Privacy Policy", ar: "سياسة الخصوصية", fr: "Politique de Confidentialité", es: "Política de Privacidad", de: "Datenschutz", tr: "Gizlilik Politikası", zh: "隐私政策",
  },
  "footer.terms": {
    en: "Terms of Service", ar: "شروط الخدمة", fr: "Conditions d'Utilisation", es: "Términos de Servicio", de: "Nutzungsbedingungen", tr: "Hizmet Şartları", zh: "服务条款",
  },
  "tool.gg": { en: "Cloud Storage", ar: "التخزين السحابي", fr: "Stockage Cloud", es: "Almacenamiento en la Nube", de: "Cloud-Speicher", tr: "Bulut Depolama", zh: "云存储" },
  "tool.gg.desc": { en: "Secure file storage & sharing", ar: "تخزين ومشاركة الملفات بأمان", fr: "Stockage et partage de fichiers sécurisés", es: "Almacenamiento y compartición de archivos seguros", de: "Sichere Dateispeicherung & -freigabe", tr: "Güvenli dosya depolama ve paylaşım", zh: "安全的文件存储和共享" },
  "tool.ryvoa": { en: "AI Cybersecurity", ar: "الأمن السيبراني بالذكاء الاصطناعي", fr: "Cybersécurité IA", es: "Ciberseguridad IA", de: "KI-Cybersicherheit", tr: "Yapay Zeka Siber Güvenlik", zh: "AI 网络安全" },
  "tool.ryvoa.desc": { en: "AI-powered security chat", ar: "دردشة أمنية مدعومة بالذكاء الاصطناعي", fr: "Chat de sécurité propulsé par l'IA", es: "Chat de seguridad con IA", de: "KI-gestützter Sicherheitschat", tr: "Yapay zeka destekli güvenlik sohbeti", zh: "AI 驱动的安全聊天" },
  "tool.promts": { en: "Prompt Generator", ar: "مولد النصوص", fr: "Générateur de Prompts", es: "Generador de Prompts", de: "Prompt-Generator", tr: "Prompt Oluşturucu", zh: "提示生成器" },
  "tool.promts.desc": { en: "Creative AI prompt crafting", ar: "صياغة نصوص إبداعية بالذكاء الاصطناعي", fr: "Création de prompts IA créatifs", es: "Creación creativa de prompts con IA", de: "Kreative KI-Prompt-Erstellung", tr: "Yaratıcı yapay zeka prompt oluşturma", zh: "创意AI提示制作" },
  "tool.ff": { en: "Free Fire AI", ar: "فري فاير AI", fr: "Free Fire IA", es: "Free Fire IA", de: "Free Fire KI", tr: "Free Fire AI", zh: "Free Fire AI" },
  "tool.ff.desc": { en: "AI gaming settings optimizer", ar: "محسّن إعدادات الألعاب بالذكاء الاصطناعي", fr: "Optimiseur de paramètres de jeu IA", es: "Optimizador de configuraciones de juegos con IA", de: "KI-Spieleinstellungs-Optimierer", tr: "Yapay zeka oyun ayarları optimize edici", zh: "AI 游戏设置优化器" },
  "tool.dhekra": { en: "Dhekra", ar: "ذكرى", fr: "Dhekra", es: "Dhekra", de: "Dhekra", tr: "Dhekra", zh: "Dhekra" },
  "tool.dhekra.desc": { en: "Spiritual & religious companion", ar: "رفيقك الروحي والديني", fr: "Compagnon spirituel et religieux", es: "Compañero espiritual y religioso", de: "Spiritueller & religiöser Begleiter", tr: "Ruhani ve dini yol arkadaşı", zh: "精神与宗教伴侣" },
  "tool.linkoo": { en: "Linkoo", ar: "لينكو", fr: "Linkoo", es: "Linkoo", de: "Linkoo", tr: "Linkoo", zh: "Linkoo" },
  "tool.linkoo.desc": { en: "Personal link aggregator", ar: "مجمّع الروابط الشخصية", fr: "Agrégateur de liens personnel", es: "Agregador de enlaces personal", de: "Persönlicher Link-Aggregator", tr: "Kişisel bağlantı toplayıcı", zh: "个人链接聚合器" },
};

function detectLang(): Lang {
  const browserLang = navigator.language?.split("-")[0] || "en";
  const supported: Lang[] = ["en", "ar", "fr", "es", "de", "tr", "zh"];
  return supported.includes(browserLang as Lang) ? (browserLang as Lang) : "en";
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(detectLang);
  const t = (key: string) => translations[key]?.[lang] ?? key;
  const dir = rtlLangs.includes(lang) ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
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
