import { GraduationCap, ExternalLink } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "@/components/ui/badge";
export const Education = () => {
  return (
    <section id="formacao" className="py-24">
      <div className="container">
        <SectionHeader index="05" title="Formação" subtitle="// formação acadêmica" />

        <div className="bg-card-gradient border border-border rounded-xl p-8 hover-glow transition-smooth shadow-card max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 shrink-0">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                <h3 className="text-xl font-semibold">{education.degree}</h3>
                <Badge className="bg-accent/15 text-accent border border-accent/40 font-mono">
                  {education.status}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-1">{education.institution}</p>
              <p className="font-mono text-xs text-primary mb-4">{education.conclusion}</p>
              <p className="text-sm text-muted-foreground border-l-2 border-primary/40 pl-4">
                {education.tcc}
                {education.tccLink && (
                  <>
                    {" "}
                    <a
                      href={education.tccLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-accent transition-smooth font-mono text-xs underline-offset-4 hover:underline"
                    >
                      {education.tccLinkLabel}
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
