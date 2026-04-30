import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export const Experience = () => {
  return (
    <section id="experiencia" className="py-24 bg-secondary/20">
      <div className="container">
        <SectionHeader index="02" title="Experiência" subtitle="// trajetória profissional" />

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 sm:pl-16 animate-fade-up">
                <div className="absolute left-0 sm:left-2 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-card border border-primary/50 glow-primary">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>

                <div className="bg-card-gradient border border-border rounded-xl p-6 hover-glow transition-smooth shadow-card">
                  <p className="font-mono text-xs text-primary mb-2">{exp.period}</p>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-accent text-sm mb-4">{exp.company}</p>

                  <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-primary mt-0.5">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="font-mono text-xs border-primary/30 text-foreground/80"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
