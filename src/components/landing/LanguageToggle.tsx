import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";

/**
 * Language toggle with USA / Brazil flags.
 * Sliding pill matching the ThemeToggle aesthetic.
 */
export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const isEn = language === "en";

  return (
    <button
      onClick={toggleLanguage}
      role="switch"
      aria-checked={isEn}
      aria-label={isEn ? "Mudar para Português" : "Switch to English"}
      title={isEn ? "Mudar para Português" : "Switch to English"}
      className={cn(
        "relative inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full",
        "border border-border bg-secondary/60 backdrop-blur-md",
        "transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)]",
      )}
    >
      {/* Track flags (dimmed background indicators) */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-1.5 text-base leading-none transition-smooth",
          isEn ? "opacity-40 grayscale" : "opacity-0",
        )}
      >
        🇧🇷
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "absolute right-1.5 text-base leading-none transition-smooth",
          isEn ? "opacity-0" : "opacity-40 grayscale",
        )}
      >
        🇺🇸
      </span>

      {/* Sliding thumb with active flag */}
      <span
        className={cn(
          "pointer-events-none inline-flex h-6 w-6 items-center justify-center rounded-full",
          "bg-gradient-to-br from-primary to-accent shadow-[0_0_15px_hsl(var(--primary)/0.6)]",
          "transition-transform duration-300 ease-out text-sm leading-none",
          isEn ? "translate-x-9" : "translate-x-1",
        )}
      >
        <span aria-hidden="true">{isEn ? "🇺🇸" : "🇧🇷"}</span>
      </span>

      <span className="sr-only">
        {isEn ? "English active" : "Português ativo"}
      </span>
    </button>
  );
};
