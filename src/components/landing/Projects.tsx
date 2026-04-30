import { Github, ExternalLink, Star, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export const Projects = () => {
  return (
    <section id="projetos" className="py-24">
      <div className="container">
        <SectionHeader index="03" title="Projetos" subtitle="// projetos em destaque" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col bg-card-gradient border border-border rounded-xl p-6 hover-glow transition-smooth shadow-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                {p.isPrivate ? (
                  <span
                    aria-label="Repositório privado"
                    className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground border border-border rounded-md px-2 py-1"
                  >
                    <Lock className="h-3.5 w-3.5" /> Privado
                  </span>
                ) : (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub de ${p.title}`}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.stack.map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="font-mono text-xs border-accent/30 text-foreground/80"
                  >
                    {s}
                  </Badge>
                ))}
              </div>

              {p.isPrivate ? (
                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
                  Código não disponível
                </span>
              ) : (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-glow font-mono"
                >
                  Ver código <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
