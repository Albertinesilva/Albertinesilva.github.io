import { about } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "@/hooks/use-language";

export const About = () => {
  const { t, language } = useLanguage();

  const paragraphsEn = [
    "Graduated in Systems Analysis and Development from IFBA, I'm a developer focused on Java Backend and on building secure, scalable and high-performance REST APIs.",
    "I have practical experience on real projects with Spring Boot, JPA/Hibernate, PostgreSQL and system integration, applying best practices like Clean Code, SOLID and layered architecture.",
    "I believe building software goes beyond writing code: it involves understanding the impact of technical decisions, pursuing continuous improvement and acting proactively to solve problems.",
  ];

  const paragraphs = language === "en" ? paragraphsEn : about.paragraphs;

  const highlightLabels: Record<string, string> = {
    "anos de experiência prática": t("about.highlight.years"),
    "Residência em Software (CEPEDI)": t("about.highlight.residency"),
    "Formado pelo IFBA": t("about.highlight.degree"),
  };

  return (
    <section id="sobre" className="py-24 relative">
      <div className="container">
        <SectionHeader index="01" title={t("about.title")} subtitle={t("about.subtitle")} />

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="text-foreground font-medium pt-2">
              <span className="text-primary font-mono">&gt; </span>
              {t("about.objective")}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="bg-card-gradient border border-border rounded-xl p-5 hover-glow transition-smooth"
              >
                <div className="text-3xl font-bold text-gradient font-mono">{h.value}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {highlightLabels[h.label] ?? h.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
