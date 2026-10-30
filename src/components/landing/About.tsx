import { about } from "@/data/portfolio";
import { aboutEn } from "@/data/portfolio-en";
import { SectionHeader } from "./SectionHeader";
import { useLanguage, type TranslationKey } from "@/hooks/use-language";

export const About = () => {
  const { t, language } = useLanguage();

  const paragraphs = language === "en" ? aboutEn.paragraphs : about.paragraphs;

  return (
    <section id="sobre" className="py-16 sm:py-24 relative">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {about.highlights.map((h) => (
              <div
                key={h.labelKey}
                className="bg-card-gradient border border-border rounded-xl p-5 hover-glow transition-smooth"
              >
                <div className="text-3xl font-bold text-gradient font-mono">
                  {language === "en" && "valueEn" in h ? h.valueEn : h.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t(h.labelKey as TranslationKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
