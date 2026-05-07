import { useState, FormEvent } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import { profile } from "@/data/portfolio";

export const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const schema = z.object({
    name: z
      .string()
      .trim()
      .min(2, { message: t("contact.form.errorName") })
      .max(100),
    email: z
      .string()
      .trim()
      .email({ message: t("contact.form.errorEmail") })
      .max(255),
    message: z
      .string()
      .trim()
      .min(10, { message: t("contact.form.errorMessage") })
      .max(1000),
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, email, message });

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
    const subject = encodeURIComponent(`[Portfólio] Contato de ${result.data.name}`);
    const body = encodeURIComponent(
      `${result.data.message}\n\n— ${result.data.name} (${result.data.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    toast({ title: t("contact.form.success") });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-card-gradient border border-border rounded-xl p-4 sm:p-6 shadow-card">
      <div className="flex items-center gap-2 mb-5">
        <span className="font-mono text-sm text-primary">{">"}</span>
        <h3 className="font-mono text-sm text-muted-foreground">
          {t("contact.form.title")}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="space-y-2">
          <Label htmlFor="contact-name">{t("contact.form.name")}</Label>
          <Input
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("contact.form.namePlaceholder")}
            maxLength={100}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email">{t("contact.form.email")}</Label>
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("contact.form.emailPlaceholder")}
            maxLength={255}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-message">{t("contact.form.message")}</Label>
          <Textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("contact.form.messagePlaceholder")}
            rows={5}
            maxLength={1000}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="text-xs text-destructive">{errors.message}</p>
          )}
        </div>

        <Button type="submit" size="lg" className="gap-2 glow-primary w-full sm:w-auto">
          <Send className="h-4 w-4" />
          {t("contact.form.submit")}
        </Button>
      </form>
    </div>
  );
};
