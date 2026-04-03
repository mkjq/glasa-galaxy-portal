import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import LanguageToggle from "@/components/LanguageToggle";

const privacyContent: Record<string, Record<string, string>> = {
  title: {
    en: "Privacy Policy", ar: "سياسة الخصوصية", fr: "Politique de Confidentialité",
    es: "Política de Privacidad", de: "Datenschutzerklärung", tr: "Gizlilik Politikası", zh: "隐私政策",
  },
  lastUpdated: {
    en: "Last updated: April 2026", ar: "آخر تحديث: أبريل 2026", fr: "Dernière mise à jour : avril 2026",
    es: "Última actualización: abril 2026", de: "Letzte Aktualisierung: April 2026", tr: "Son güncelleme: Nisan 2026", zh: "最后更新：2026年4月",
  },
  intro: {
    en: "At MKQ (mkq.one), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our tools.",
    ar: "في MKQ (mkq.one)، نحن ملتزمون بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحماية معلوماتك عند زيارة موقعنا واستخدام أدواتنا.",
    fr: "Chez MKQ (mkq.one), nous nous engageons à protéger votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.",
    es: "En MKQ (mkq.one), estamos comprometidos con la protección de su privacidad. Esta política explica cómo recopilamos, usamos y protegemos su información.",
    de: "Bei MKQ (mkq.one) verpflichten wir uns zum Schutz Ihrer Privatsphäre. Diese Datenschutzerklärung erläutert, wie wir Ihre Daten erheben, verwenden und schützen.",
    tr: "MKQ'da (mkq.one) gizliliğinizi korumaya kararlıyız. Bu politika, bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.",
    zh: "在MKQ (mkq.one)，我们致力于保护您的隐私。本隐私政策说明了我们如何收集、使用和保护您的信息。",
  },
  s1Title: {
    en: "Information We Collect", ar: "المعلومات التي نجمعها", fr: "Informations collectées",
    es: "Información que recopilamos", de: "Erhobene Daten", tr: "Topladığımız Bilgiler", zh: "我们收集的信息",
  },
  s1Content: {
    en: "We may collect non-personal information such as browser type, device type, and usage patterns to improve our services. We do not collect personal information unless you voluntarily provide it through contact forms or account registration.",
    ar: "قد نجمع معلومات غير شخصية مثل نوع المتصفح ونوع الجهاز وأنماط الاستخدام لتحسين خدماتنا. لا نجمع معلومات شخصية ما لم تقدمها طوعًا من خلال نماذج الاتصال أو تسجيل الحساب.",
    fr: "Nous pouvons collecter des informations non personnelles telles que le type de navigateur et les habitudes d'utilisation. Nous ne collectons pas d'informations personnelles sauf si vous les fournissez volontairement.",
    es: "Podemos recopilar información no personal como tipo de navegador y patrones de uso. No recopilamos información personal a menos que la proporcione voluntariamente.",
    de: "Wir erheben möglicherweise nicht-personenbezogene Daten wie Browsertyp und Nutzungsmuster. Personenbezogene Daten erheben wir nur, wenn Sie diese freiwillig angeben.",
    tr: "Tarayıcı türü ve kullanım kalıpları gibi kişisel olmayan bilgileri toplayabiliriz. İletişim formları aracılığıyla gönüllü olarak sağlamadığınız sürece kişisel bilgi toplamayız.",
    zh: "我们可能会收集浏览器类型、设备类型等非个人信息以改善服务。除非您通过联系表单自愿提供，否则我们不会收集个人信息。",
  },
  s2Title: {
    en: "How We Use Your Information", ar: "كيف نستخدم معلوماتك", fr: "Utilisation de vos informations",
    es: "Cómo usamos su información", de: "Verwendung Ihrer Daten", tr: "Bilgilerinizi Nasıl Kullanırız", zh: "我们如何使用您的信息",
  },
  s2Content: {
    en: "We use the information we collect to: improve our website and tools, analyze usage trends, provide customer support, and ensure the security of our platform.",
    ar: "نستخدم المعلومات التي نجمعها من أجل: تحسين موقعنا وأدواتنا، تحليل اتجاهات الاستخدام، تقديم الدعم الفني، وضمان أمان منصتنا.",
    fr: "Nous utilisons les informations pour : améliorer notre site et nos outils, analyser les tendances, fournir un support et assurer la sécurité.",
    es: "Usamos la información para: mejorar nuestro sitio y herramientas, analizar tendencias, brindar soporte y garantizar la seguridad.",
    de: "Wir verwenden die Daten zur Verbesserung unserer Website, Analyse von Trends, Kundensupport und Sicherheit.",
    tr: "Bilgileri şu amaçlarla kullanırız: web sitemizi ve araçlarımızı geliştirmek, trendleri analiz etmek, destek sağlamak ve güvenliği sağlamak.",
    zh: "我们使用收集的信息来：改善网站和工具、分析使用趋势、提供客户支持并确保平台安全。",
  },
  s3Title: {
    en: "Cookies", ar: "ملفات تعريف الارتباط", fr: "Cookies",
    es: "Cookies", de: "Cookies", tr: "Çerezler", zh: "Cookies",
  },
  s3Content: {
    en: "We may use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser preferences.",
    ar: "قد نستخدم ملفات تعريف الارتباط وتقنيات مشابهة لتحسين تجربتك. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال تفضيلات متصفحك.",
    fr: "Nous pouvons utiliser des cookies pour améliorer votre expérience. Vous pouvez contrôler les paramètres via votre navigateur.",
    es: "Podemos usar cookies para mejorar su experiencia. Puede controlar la configuración a través de su navegador.",
    de: "Wir verwenden möglicherweise Cookies. Sie können die Einstellungen über Ihren Browser steuern.",
    tr: "Deneyiminizi geliştirmek için çerezler kullanabiliriz. Tarayıcı ayarlarınızdan çerez tercihlerini kontrol edebilirsiniz.",
    zh: "我们可能使用Cookie来增强您的体验。您可以通过浏览器设置控制Cookie。",
  },
  s4Title: {
    en: "Contact Us", ar: "اتصل بنا", fr: "Nous contacter",
    es: "Contáctenos", de: "Kontakt", tr: "Bize Ulaşın", zh: "联系我们",
  },
  s4Content: {
    en: "If you have any questions about this Privacy Policy, please contact us through our Instagram @55htp or visit mkq.one.",
    ar: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر حساب الانستقرام @55htp أو زيارة mkq.one.",
    fr: "Pour toute question, contactez-nous via Instagram @55htp ou visitez mkq.one.",
    es: "Para cualquier pregunta, contáctenos a través de Instagram @55htp o visite mkq.one.",
    de: "Bei Fragen kontaktieren Sie uns über Instagram @55htp oder besuchen Sie mkq.one.",
    tr: "Sorularınız için Instagram @55htp üzerinden veya mkq.one adresinden bize ulaşın.",
    zh: "如有任何问题，请通过Instagram @55htp联系我们或访问mkq.one。",
  },
  back: {
    en: "Back to Home", ar: "العودة للرئيسية", fr: "Retour à l'accueil",
    es: "Volver al inicio", de: "Zurück zur Startseite", tr: "Ana Sayfaya Dön", zh: "返回首页",
  },
};

const PrivacyContent = () => {
  const { lang, dir } = useLang();
  const g = (key: string) => privacyContent[key]?.[lang] ?? privacyContent[key]?.["en"] ?? key;

  return (
    <div className="relative min-h-screen overflow-x-hidden" dir={dir}>
      <ParticleBackground />
      <LanguageToggle />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon-blue transition-colors mb-8">
          <ArrowLeft size={18} />
          <span>{g("back")}</span>
        </Link>

        <h1 className="text-3xl sm:text-4xl font-black gradient-text mb-2">{g("title")}</h1>
        <p className="text-muted-foreground text-sm mb-10">{g("lastUpdated")}</p>

        <div className="space-y-8 text-foreground/90">
          <p className="leading-relaxed">{g("intro")}</p>

          {["s1", "s2", "s3", "s4"].map((s) => (
            <div key={s}>
              <h2 className="text-xl font-bold text-neon-purple mb-3">{g(`${s}Title`)}</h2>
              <p className="leading-relaxed text-muted-foreground">{g(`${s}Content`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicy = () => (
  <LanguageProvider>
    <PrivacyContent />
  </LanguageProvider>
);

export default PrivacyPolicy;
