import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import LanguageToggle from "@/components/LanguageToggle";

const termsContent: Record<string, Record<string, string>> = {
  title: {
    en: "Terms of Service", ar: "شروط الخدمة", fr: "Conditions d'Utilisation",
    es: "Términos de Servicio", de: "Nutzungsbedingungen", tr: "Hizmet Şartları", zh: "服务条款",
  },
  lastUpdated: {
    en: "Last updated: April 2026", ar: "آخر تحديث: أبريل 2026", fr: "Dernière mise à jour : avril 2026",
    es: "Última actualización: abril 2026", de: "Letzte Aktualisierung: April 2026", tr: "Son güncelleme: Nisan 2026", zh: "最后更新：2026年4月",
  },
  intro: {
    en: "Welcome to MKQ (mkq.one). By accessing and using our website and tools, you agree to be bound by these Terms of Service. Please read them carefully.",
    ar: "مرحبًا بك في MKQ (mkq.one). باستخدامك لموقعنا وأدواتنا، فإنك توافق على الالتزام بشروط الخدمة هذه. يرجى قراءتها بعناية.",
    fr: "Bienvenue sur MKQ (mkq.one). En utilisant notre site et nos outils, vous acceptez ces conditions. Veuillez les lire attentivement.",
    es: "Bienvenido a MKQ (mkq.one). Al usar nuestro sitio y herramientas, acepta estos términos. Léalos cuidadosamente.",
    de: "Willkommen bei MKQ (mkq.one). Durch die Nutzung stimmen Sie diesen Bedingungen zu. Bitte lesen Sie sie sorgfältig.",
    tr: "MKQ'ya (mkq.one) hoş geldiniz. Web sitemizi ve araçlarımızı kullanarak bu şartları kabul etmiş olursunuz.",
    zh: "欢迎访问MKQ (mkq.one)。使用我们的网站和工具即表示您同意这些服务条款。",
  },
  s1Title: {
    en: "Use of Services", ar: "استخدام الخدمات", fr: "Utilisation des services",
    es: "Uso de los servicios", de: "Nutzung der Dienste", tr: "Hizmetlerin Kullanımı", zh: "服务使用",
  },
  s1Content: {
    en: "You may use our tools and services for lawful purposes only. You agree not to misuse, reverse-engineer, or attempt to disrupt any part of our platform. We reserve the right to suspend access for violations.",
    ar: "يجوز لك استخدام أدواتنا وخدماتنا لأغراض مشروعة فقط. توافق على عدم إساءة الاستخدام أو الهندسة العكسية أو محاولة تعطيل أي جزء من منصتنا. نحتفظ بالحق في تعليق الوصول في حالة المخالفات.",
    fr: "Vous ne pouvez utiliser nos services qu'à des fins légales. Vous vous engagez à ne pas abuser ou tenter de perturber notre plateforme.",
    es: "Solo puede usar nuestros servicios con fines legales. Acepta no abusar ni intentar interrumpir nuestra plataforma.",
    de: "Sie dürfen unsere Dienste nur für rechtmäßige Zwecke nutzen. Bei Verstößen behalten wir uns das Recht vor, den Zugang zu sperren.",
    tr: "Hizmetlerimizi yalnızca yasal amaçlarla kullanabilirsiniz. İhlaller durumunda erişimi askıya alma hakkımız saklıdır.",
    zh: "您只能将我们的服务用于合法目的。我们保留因违规行为暂停访问的权利。",
  },
  s2Title: {
    en: "Intellectual Property", ar: "الملكية الفكرية", fr: "Propriété intellectuelle",
    es: "Propiedad intelectual", de: "Geistiges Eigentum", tr: "Fikri Mülkiyet", zh: "知识产权",
  },
  s2Content: {
    en: "All content, tools, and branding on MKQ are the intellectual property of MKQ. You may not copy, reproduce, or distribute any part of our platform without prior written consent.",
    ar: "جميع المحتويات والأدوات والعلامات التجارية في MKQ هي ملكية فكرية لـ MKQ. لا يجوز لك نسخ أو إعادة إنتاج أو توزيع أي جزء من منصتنا دون موافقة خطية مسبقة.",
    fr: "Tout le contenu et les outils de MKQ sont notre propriété intellectuelle. Toute reproduction est interdite sans consentement écrit.",
    es: "Todo el contenido y herramientas de MKQ son propiedad intelectual de MKQ. No puede reproducir sin consentimiento previo.",
    de: "Alle Inhalte und Tools auf MKQ sind unser geistiges Eigentum. Eine Vervielfältigung ohne Zustimmung ist untersagt.",
    tr: "MKQ'daki tüm içerik ve araçlar fikri mülkiyetimizdir. Önceden yazılı izin almadan kopyalanamaz.",
    zh: "MKQ上的所有内容和工具均为MKQ的知识产权。未经书面同意不得复制或分发。",
  },
  s3Title: {
    en: "Limitation of Liability", ar: "تحديد المسؤولية", fr: "Limitation de responsabilité",
    es: "Limitación de responsabilidad", de: "Haftungsbeschränkung", tr: "Sorumluluk Sınırlaması", zh: "责任限制",
  },
  s3Content: {
    en: "MKQ provides its tools and services \"as is\" without warranties of any kind. We shall not be liable for any damages arising from the use or inability to use our services.",
    ar: "يقدم MKQ أدواته وخدماته \"كما هي\" دون أي ضمانات من أي نوع. لا نتحمل مسؤولية أي أضرار ناتجة عن استخدام خدماتنا أو عدم القدرة على استخدامها.",
    fr: "MKQ fournit ses services \"en l'état\" sans aucune garantie. Nous ne serons pas responsables des dommages liés à l'utilisation de nos services.",
    es: "MKQ proporciona sus servicios \"tal cual\" sin garantías. No seremos responsables de daños derivados del uso de nuestros servicios.",
    de: "MKQ stellt seine Dienste ohne Gewährleistung bereit. Wir haften nicht für Schäden aus der Nutzung unserer Dienste.",
    tr: "MKQ hizmetlerini \"olduğu gibi\" herhangi bir garanti olmadan sunar. Hizmetlerimizin kullanımından kaynaklanan zararlardan sorumlu değiliz.",
    zh: "MKQ按「现状」提供服务，不作任何保证。我们不对使用服务产生的任何损害承担责任。",
  },
  s4Title: {
    en: "Changes to Terms", ar: "التغييرات في الشروط", fr: "Modifications des conditions",
    es: "Cambios en los términos", de: "Änderungen der Bedingungen", tr: "Şartlardaki Değişiklikler", zh: "条款变更",
  },
  s4Content: {
    en: "We reserve the right to modify these terms at any time. Changes will be posted on this page. Continued use of our services after changes constitutes acceptance of the updated terms.",
    ar: "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التغييرات على هذه الصفحة. يُعتبر استمرار استخدام خدماتنا بعد التغييرات قبولاً للشروط المحدثة.",
    fr: "Nous nous réservons le droit de modifier ces conditions à tout moment. L'utilisation continue après modification vaut acceptation.",
    es: "Nos reservamos el derecho de modificar estos términos. El uso continuo después de cambios constituye aceptación.",
    de: "Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Die weitere Nutzung gilt als Zustimmung.",
    tr: "Bu şartları istediğimiz zaman değiştirme hakkımız saklıdır. Değişikliklerden sonra hizmetleri kullanmaya devam etmeniz kabul anlamına gelir.",
    zh: "我们保留随时修改这些条款的权利。在变更后继续使用我们的服务即表示接受更新的条款。",
  },
  s5Title: {
    en: "Contact", ar: "التواصل", fr: "Contact",
    es: "Contacto", de: "Kontakt", tr: "İletişim", zh: "联系方式",
  },
  s5Content: {
    en: "For any questions regarding these Terms of Service, contact us through Instagram @55htp or visit mkq.one.",
    ar: "لأي أسئلة بخصوص شروط الخدمة هذه، تواصل معنا عبر الانستقرام @55htp أو زيارة mkq.one.",
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

const TermsContent = () => {
  const { lang, dir } = useLang();
  const g = (key: string) => termsContent[key]?.[lang] ?? termsContent[key]?.["en"] ?? key;

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

          {["s1", "s2", "s3", "s4", "s5"].map((s) => (
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

const TermsOfService = () => (
  <LanguageProvider>
    <TermsContent />
  </LanguageProvider>
);

export default TermsOfService;
