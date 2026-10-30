import { Github, ExternalLink, Star, Lock, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";
import { projectsEn } from "@/data/portfolio-en";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "@/hooks/use-language";

export const Projects = () => {
  const { t, language } = useLanguage();
  const list = projects.map((p) =>
    language === "en" && projectsEn[p.id] ? { ...p, ...projectsEn[p.id] } : p,
  );
  return (
    <section id="projetos" className="py-16 sm:py-24 bg-secondary/20">
      <div className="container">
        <SectionHeader index="02" title={t("projects.title")} subtitle={t("projects.subtitle")} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col bg-card-gradient border border-border rounded-xl p-6 hover-glow transition-smooth shadow-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                {p.isPrivate ? (
                  <span
                    aria-label={t("projects.privateLabel")}
                    className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground border border-border rounded-md px-2 py-1"
                  >
                    <Lock className="h-3.5 w-3.5" /> {t("projects.private")}
                  </span>
                ) : (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("projects.githubOf")} ${p.title}`}
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
                {p.next && (
                  <span className="block mt-3">
                    <span className="font-mono text-primary">{t("projects.next")}</span> {p.next}
                  </span>
                )}
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
                  {t("projects.notAvailable")}
                </span>
              ) : (
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-glow font-mono"
                  >
                    {t("projects.viewCode")} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-primary-glow font-mono"
                    >
                      <Globe className="h-3.5 w-3.5" /> {t("projects.viewDemo")} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
