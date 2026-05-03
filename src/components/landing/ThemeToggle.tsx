import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      className={cn(
        "relative inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full",
        "border border-border bg-secondary/60 backdrop-blur-md",
        "transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)]",
      )}
    >
      {/* Track icons */}
      <Sun
        className={cn(
          "absolute left-1.5 h-4 w-4 transition-smooth",
          isDark ? "text-muted-foreground/50" : "text-accent opacity-0",
        )}
      />
      <Moon
        className={cn(
          "absolute right-1.5 h-4 w-4 transition-smooth",
          isDark ? "text-primary opacity-0" : "text-muted-foreground/50",
        )}
      />

      {/* Sliding thumb */}
      <span
        className={cn(
          "pointer-events-none inline-flex h-6 w-6 items-center justify-center rounded-full",
          "bg-gradient-to-br from-primary to-accent shadow-[0_0_15px_hsl(var(--primary)/0.6)]",
          "transition-transform duration-300 ease-out",
          isDark ? "translate-x-1" : "translate-x-9",
        )}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-primary-foreground" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-primary-foreground" />
        )}
      </span>
    </button>
  );
};
