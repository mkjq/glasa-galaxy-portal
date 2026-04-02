import { useLang } from "@/contexts/LanguageContext";
import { Github, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="relative border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black gradient-text">MKQ</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors text-sm">{t("footer.privacy")}</a>
          <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors text-sm">{t("footer.terms")}</a>
        </div>

        <div className="flex items-center gap-4">
          {[Github, Twitter, MessageCircle].map((Icon, i) => (
            <a key={i} href="#" className="text-muted-foreground hover:text-neon-pink hover:scale-110 transition-all duration-200">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-muted-foreground text-xs mt-8">© 2026 Lovable. {t("footer.rights")}</p>
    </footer>
  );
};

export default Footer;
