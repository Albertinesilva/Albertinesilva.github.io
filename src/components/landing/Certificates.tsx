import { Award } from "lucide-react";
import { certificates, languages } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export const Certificates = () => {
  return (
    <section id="certificados" className="py-24 bg-secondary/20">
      <div className="container">
        <SectionHeader
          index="06"
          title="Certificados & Idiomas"
          subtitle="// cursos e idiomas"
        />

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((c) => (
              <div
                key={c.name}
                className="bg-card-gradient border border-border rounded-xl p-5 hover-glow transition-smooth shadow-card"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 border border-accent/30 shrink-0">
                    <Award className="h-4 w-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm leading-snug">{c.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="font-mono text-xs text-primary">{c.hours}</span>
                      <span className="font-mono text-xs text-muted-foreground">· {c.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-2">
              <span className="text-primary font-mono">{"{ "}</span>
              Idiomas
              <span className="text-primary font-mono">{" }"}</span>
            </h3>
            {languages.map((l) => (
              <div
                key={l.name}
                className="bg-card-gradient border border-border rounded-xl p-5 shadow-card"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{l.name}</span>
                  <span className="font-mono text-xs text-primary">{l.level}</span>
                </div>
                <div className="h-2 rounded-full bg-background overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    style={{ width: `${l.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
