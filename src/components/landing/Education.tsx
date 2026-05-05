import { GraduationCap, ExternalLink } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/use-language";

export const Education = () => {
  const { t, language } = useLanguage();

  const content =
    language === "en"
      ? {
          degree: "Technologist in Systems Analysis and Development",
          institution: "IFBA — Federal Institute of Education, Science and Technology of Bahia",
          conclusion: "Completed in March/2026",
          tcc: "Final project: CAD-MOTOTAXISTA — a web application built for managing motorcycle taxi drivers, with repository, full technical documentation and production environment available on GitHub.",
          tccLinkLabel: "View documentation on GitHub",
        }
      : {
          degree: education.degree,
          institution: education.institution,
          conclusion: education.conclusion,
          tcc: education.tcc,
          tccLinkLabel: education.tccLinkLabel,
        };

  return (
    <section id="formacao" className="py-24">
      <div className="container">
        <SectionHeader index="05" title={t("education.title")} subtitle={t("education.subtitle")} />

        <div className="bg-card-gradient border border-border rounded-xl p-8 hover-glow transition-smooth shadow-card max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 shrink-0">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                <h3 className="text-xl font-semibold">{content.degree}</h3>
                <Badge className="bg-accent/15 text-accent border border-accent/40 font-mono">
                  {t("education.status")}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-1">{content.institution}</p>
              <p className="font-mono text-xs text-primary mb-4">{content.conclusion}</p>
              <p className="text-sm text-muted-foreground border-l-2 border-primary/40 pl-4">
                {content.tcc}
                {education.tccLink && (
                  <>
                    {" "}
                    <a
                      href={education.tccLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-accent transition-smooth font-mono text-xs underline-offset-4 hover:underline"
                    >
                      {content.tccLinkLabel}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
