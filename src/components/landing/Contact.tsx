import { Mail, MessageCircle, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { LocationMap } from "./LocationMap";
import { useLanguage } from "@/hooks/use-language";
import { profileEn } from "@/data/portfolio-en";
import { ContactForm } from "./ContactForm";

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
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-60 pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeader index="07" title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="w-full">
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            {t("contact.intro1")}{" "}
            <span className="text-primary font-medium">{t("contact.intro2")}</span>
            {t("contact.intro3")}
          </p>

          <div className="flex flex-nowrap gap-4 mb-8 overflow-x-auto">
            {items.map((it) => (
              <a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex-1 min-w-[180px] flex items-center gap-3 bg-card-gradient border border-border rounded-xl p-4 hover-glow transition-smooth shadow-card"
              >
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 shrink-0">
                  <it.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-muted-foreground">{it.label}</p>
                  <p className="font-medium truncate">{it.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-nowrap items-center gap-4 overflow-x-auto mb-10">
            <Button asChild size="lg" className="gap-2 glow-primary shrink-0">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                {t("contact.sendEmail")}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 hover-glow shrink-0">
              <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                {t("contact.callWhatsapp")}
              </a>
            </Button>
            <span className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
              <MapPin className="h-4 w-4 text-accent" />
              {location}
            </span>
          </div>

          <div className="mt-4 mb-10">
            <ContactForm />
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
