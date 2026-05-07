import { Mail, MessageCircle, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { LocationMap } from "./LocationMap";
import { useLanguage } from "@/hooks/use-language";
import { profileEn } from "@/data/portfolio-en";
import { ContactForm } from "./ContactForm";
import { ContactFormWhatsapp } from "./ContactFormWhatsapp";

export const Contact = () => {
  const { t, language } = useLanguage();
  const location = language === "en" ? profileEn.location : profile.location;
  const items = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: profile.phone,
      href: `https://wa.me/${profile.whatsapp}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "albert-backend-java-spring-boot",
      href: profile.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Albertinesilva",
      href: profile.github,
    },
  ];

  return (
    <section id="contato" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-60 pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeader index="07" title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="w-full">
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl">
            {t("contact.intro1")}{" "}
            <span className="text-primary font-medium">{t("contact.intro2")}</span>
            {t("contact.intro3")}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
            {items.map((it) => (
              <a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={it.label}
                className="p-3 rounded-xl bg-card-gradient border border-border hover-glow transition-smooth shadow-card text-muted-foreground hover:text-primary"
              >
                <it.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Button asChild size="lg" className="gap-2 glow-primary w-full sm:w-auto">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                {t("contact.sendEmail")}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 hover-glow w-full sm:w-auto">
              <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                {t("contact.callWhatsapp")}
              </a>
            </Button>
            <span className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              {location}
            </span>
          </div>

          <div className="mt-4 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ContactForm />
            <ContactFormWhatsapp />
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="h-4 w-4 text-primary" />
              <h3 className="font-mono text-sm text-muted-foreground">
                {t("contact.locationLabel")}
              </h3>
            </div>
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
};
