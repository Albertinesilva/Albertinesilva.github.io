import { about } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export const About = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container">
        <SectionHeader index="01" title="Sobre" />

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="text-foreground font-medium pt-2">
              <span className="text-primary font-mono">&gt; </span>
              Objetivo: atuar como Desenvolvedor Backend Java construindo APIs REST com Spring Boot
              — foco em performance, escalabilidade e integração entre sistemas — enquanto evoluo
              para uma carreira full stack.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="bg-card-gradient border border-border rounded-xl p-5 hover-glow transition-smooth"
              >
                <div className="text-3xl font-bold text-gradient font-mono">{h.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
