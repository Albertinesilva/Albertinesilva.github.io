import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#skills", label: "Skills" },
  { href: "#formacao", label: "Formação" },
  { href: "#certificados", label: "Certificados" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
              Baixar CV
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
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
                Baixar CV
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
