import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/hooks/use-language";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: "#sobre", label: t("nav.about") },
    { href: "#projetos", label: t("nav.projects") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#formacao", label: t("nav.education") },
    { href: "#certificados", label: t("nav.certificates") },
    { href: "#contato", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-lg font-semibold">
          <span className="text-primary">&lt;</span>
          Albert
          <span className="text-accent">/&gt;</span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="gap-2">
            <a href={profile.cvPath} download>
              <Download className="h-4 w-4" />
              {t("nav.downloadCv")}
            </a>
          </Button>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <button
            className="p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={t("nav.menu")}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="container flex flex-col py-4 gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary py-2"
              >
                {l.label}
              </a>
            ))}
            <Button asChild size="sm" className="gap-2 mt-2">
              <a href={profile.cvPath} download>
                <Download className="h-4 w-4" />
                {t("nav.downloadCv")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
