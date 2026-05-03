import { Download, Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import profileImg from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 bg-hero overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="container grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center relative z-10">
        <div className="animate-fade-up">
          <p className="font-mono text-primary mb-4 flex items-center gap-2">
            <span>&gt; Olá, eu sou</span>
            <span className="animate-blink text-accent">_</span>
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {profile.name}
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient mb-5">
            {profile.role}
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-6">
            {profile.tagline}
          </p>

          <p className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <MapPin className="h-4 w-4 text-primary" />
            {profile.location}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Button asChild size="lg" className="gap-2 glow-primary">
              <a href="#projetos">Ver Projetos</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 hover-glow">
              <a href={profile.cvPath} download>
                <Download className="h-4 w-4" />
                Baixar CV (PDF)
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <SocialIcon href={profile.github} label="GitHub">
              <Github className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={profile.linkedin} label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={`mailto:${profile.email}`} label="Email">
              <Mail className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon
              href={`https://wa.me/${profile.whatsapp}`}
              label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </SocialIcon>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-2xl opacity-40 animate-float" />
            <div className="relative rounded-full p-1 bg-gradient-to-br from-primary to-accent">
              <img
                src={profileImg}
                alt="Foto de Albert Silva de Jesus"
                width={768}
                height={768}
                className="relative rounded-full w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover bg-background"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 font-mono text-xs px-3 py-1.5 rounded-full bg-card border border-primary/40 text-primary shadow-card">
              {'{ status: "open to work" }'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover-glow transition-smooth"
  >
    {children}
  </a>
);
