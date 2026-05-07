import { useState, useEffect, useMemo, FormEvent } from "react";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import { profile } from "@/data/portfolio";

interface Country {
  code: string; // ISO cca2
  name: string;
  flag: string; // emoji
  dial: string; // e.g. "+55"
}

export const ContactFormWhatsapp = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const [countries, setCountries] = useState<Country[]>([]);
  const [countryCode, setCountryCode] = useState<string>("BR");
  const [countryOpen, setCountryOpen] = useState(false);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; whatsapp?: string; message?: string }>({});

  useEffect(() => {
    let cancelled = false;
    fetch("https://restcountries.com/v3.1/all?fields=cca2,name,idd,flag,translations")
      .then((r) => r.json())
      .then((data: any[]) => {
        if (cancelled || !Array.isArray(data)) return;
        const list: Country[] = data
          .map((c) => {
            const root = c?.idd?.root ?? "";
            const suffixes: string[] = c?.idd?.suffixes ?? [];
            const suffix = suffixes.length === 1 ? suffixes[0] : "";
            const dial = root ? `${root}${suffix}` : "";
            const name =
              language === "pt"
                ? c?.translations?.por?.common ?? c?.name?.common
                : c?.name?.common;
            return {
              code: c?.cca2,
              name,
              flag: c?.flag ?? "",
              dial,
            } as Country;
          })
          .filter((c) => c.code && c.dial)
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(list);
      })
      .catch(() => {
        // Fallback minimal list
        setCountries([
          { code: "BR", name: "Brasil", flag: "🇧🇷", dial: "+55" },
          { code: "US", name: "United States", flag: "🇺🇸", dial: "+1" },
          { code: "PT", name: "Portugal", flag: "🇵🇹", dial: "+351" },
        ]);
      });
    return () => {
      cancelled = true;
    };
  }, [language]);

  const selectedCountry = useMemo(
    () => countries.find((c) => c.code === countryCode),
    [countries, countryCode]
  );

  const schema = z.object({
    name: z.string().trim().min(2, { message: t("contact.form.errorName") }).max(100),
    whatsapp: z
      .string()
      .trim()
      .min(6, { message: t("contact.form.errorWhatsapp") })
      .max(20)
      .regex(/^[\d\s()-]+$/, { message: t("contact.form.errorWhatsapp") }),
    message: z.string().trim().min(10, { message: t("contact.form.errorMessage") }).max(1000),
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, whatsapp, message });

    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof typeof errors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const dial = selectedCountry?.dial ?? "";
    const fullNumber = `${dial} ${result.data.whatsapp}`.trim();
    const text = encodeURIComponent(
      `Olá Albert! Meu nome é ${result.data.name} (WhatsApp: ${fullNumber}).\n\n${result.data.message}`
    );
    window.open(`https://wa.me/${profile.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");

    toast({ title: t("contact.form.successWhatsapp") });
    setName("");
    setWhatsapp("");
    setMessage("");
  };

  return (
    <div className="bg-card-gradient border border-border rounded-xl p-4 sm:p-6 shadow-card">
      <div className="flex items-center gap-2 mb-5">
        <span className="font-mono text-sm text-primary">{">"}</span>
        <h3 className="font-mono text-sm text-muted-foreground">
          {t("contact.form.titleWhatsapp")}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="space-y-2">
          <Label htmlFor="contact-wa-name">{t("contact.form.name")}</Label>
          <Input
            id="contact-wa-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("contact.form.namePlaceholder")}
            maxLength={100}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-wa-phone">{t("contact.form.whatsapp")}</Label>
          <div className="flex gap-2">
            <Popover open={countryOpen} onOpenChange={setCountryOpen}>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  role="combobox"
                  aria-expanded={countryOpen}
                  aria-label={t("contact.form.country")}
                  className="w-[110px] sm:w-[140px] shrink-0 justify-between font-normal px-2 sm:px-3"
                >
                  {selectedCountry ? (
                    <span className="flex items-center gap-1.5 truncate">
                      <span className="text-base leading-none">{selectedCountry.flag}</span>
                      <span className="font-mono text-xs">{selectedCountry.dial}</span>
                    </span>
                  ) : (
                    <span className="text-muted-foreground text-xs">...</span>
                  )}
                  <ChevronsUpDown className="ml-1 h-3 w-3 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[280px] p-0" align="start">
                <Command
                  filter={(value, search) => {
                    const c = countries.find((x) => x.code === value);
                    if (!c) return 0;
                    const q = search.toLowerCase();
                    const hay = `${c.name} ${c.dial} ${c.code}`.toLowerCase();
                    return hay.includes(q) ? 1 : 0;
                  }}
                >
                  <CommandInput placeholder={t("contact.form.countrySearch")} />
                  <CommandList>
                    <CommandEmpty>{t("contact.form.countryEmpty")}</CommandEmpty>
                    <CommandGroup>
                      {countries.map((c) => (
                        <CommandItem
                          key={c.code}
                          value={c.code}
                          onSelect={(val) => {
                            setCountryCode(val);
                            setCountryOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              countryCode === c.code ? "opacity-100" : "opacity-0"
                            )}
                          />
                          <span className="text-base leading-none mr-2">{c.flag}</span>
                          <span className="font-mono text-xs text-muted-foreground mr-2">
                            {c.dial}
                          </span>
                          <span className="text-sm truncate">{c.name}</span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Input
              id="contact-wa-phone"
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder={t("contact.form.whatsappPlaceholder")}
              maxLength={20}
              aria-invalid={!!errors.whatsapp}
              className="flex-1"
            />
          </div>
          {errors.whatsapp && <p className="text-xs text-destructive">{errors.whatsapp}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-wa-message">{t("contact.form.message")}</Label>
          <Textarea
            id="contact-wa-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("contact.form.messagePlaceholder")}
            rows={5}
            maxLength={1000}
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
        </div>

        <Button type="submit" size="lg" variant="outline" className="gap-2 hover-glow w-full sm:w-auto">
          <MessageCircle className="h-4 w-4" />
          {t("contact.form.submitWhatsapp")}
        </Button>
      </form>
    </div>
  );
};
