import { useLang } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="relative border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black gradient-text">MKQ</span>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/privacy" className="text-muted-foreground hover:text-neon-blue transition-colors text-sm">{t("footer.privacy")}</Link>
          <Link to="/terms" className="text-muted-foreground hover:text-neon-purple transition-colors text-sm">{t("footer.terms")}</Link>
        </div>
      </div>
      <p className="text-center text-muted-foreground text-xs mt-8">© 2026 MKQ. {t("footer.rights")}</p>
    </footer>
  );
};

export default Footer;
