import { Mail, MessageCircle, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { LocationMap } from "./LocationMap";

export const Contact = () => {
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
        <SectionHeader
          index="07"
          title="Contato"
          subtitle="// vamos conversar?"
        />

        {/* Texto principal */}
        <div className="max-w-4xl mb-10">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estou aberto a oportunidades como{" "}
            <span className="text-primary font-medium">
              Desenvolvedor Backend Java
            </span>
            . Se você tem uma vaga ou projeto, vamos conversar — adoraria
            contribuir com seu time.
          </p>
        </div>

        {/* Grid de contatos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card-gradient border border-border rounded-xl p-5 hover-glow transition-smooth shadow-card min-h-[110px]"
            >
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 shrink-0">
                <it.icon className="h-5 w-5 text-primary" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-mono text-muted-foreground">
                  {it.label}
                </p>
                <p className="font-medium truncate">{it.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Ações principais */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <Button asChild size="lg" className="gap-2 glow-primary">
            <a href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              Enviar email
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 hover-glow"
          >
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              Chamar no WhatsApp
            </a>
          </Button>

          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            {profile.location}
          </span>
        </div>

        {/* Localização */}
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-4 w-4 text-primary" />
            <h3 className="font-mono text-sm text-muted-foreground">
            // localização
            </h3>
          </div>

          {/* Wrapper alinhado com o conteúdo superior */}
          <div className="w-full">
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
};