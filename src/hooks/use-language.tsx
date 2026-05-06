import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "pt" | "en";

interface LanguageContextValue {
  language: Language;
  setLanguage: (l: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const STORAGE_KEY = "albert-portfolio-language";

const translations = {
  pt: {
    // Navbar
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.skills": "Skills",
    "nav.education": "Formação",
    "nav.certificates": "Certificados",
    "nav.contact": "Contato",
    "nav.downloadCv": "Baixar CV",
    "nav.menu": "Menu",
    // Theme toggle
    "theme.light": "Ativar tema claro",
    "theme.dark": "Ativar tema escuro",
    // Language toggle
    "lang.switchToEn": "Switch to English",
    "lang.switchToPt": "Mudar para Português",
    // Hero
    "hero.greeting": "> Olá, eu sou",
    "hero.viewProjects": "Ver Projetos",
    "hero.downloadCv": "Baixar CV (PDF)",
    "hero.status": '{ status: "open to work" }',
    // About
    "about.title": "Sobre",
    "about.subtitle": "// section",
    "about.objective":
      "Objetivo: atuar como Desenvolvedor Backend Java construindo APIs REST com Spring Boot — foco em performance, escalabilidade e integração entre sistemas — enquanto evoluo para uma carreira full stack.",
    "about.highlight.years": "anos de experiência prática",
    "about.highlight.residency": "Residência em Software (CEPEDI)",
    "about.highlight.degree": "Formado pelo IFBA",
    // Experience
    "experience.title": "Experiência",
    "experience.subtitle": "// trajetória profissional",
    // Projects
    "projects.title": "Projetos",
    "projects.subtitle": "// projetos em destaque",
    "projects.private": "Privado",
    "projects.privateLabel": "Repositório privado",
    "projects.notAvailable": "Código não disponível",
    "projects.access": "Acessar projeto",
    "projects.viewCode": "Ver código",
    "projects.githubOf": "GitHub de",
    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "// stack técnica",
    "skills.cat.Backend": "Backend",
    "skills.cat.Banco de Dados": "Banco de Dados",
    "skills.cat.Testes & Qualidade": "Testes & Qualidade",
    "skills.cat.Frontend (em evolução)": "Frontend (em evolução)",
    "skills.cat.IDEs & Modelagem": "IDEs & Modelagem",
    "skills.cat.Explorando & Aprendendo": "Explorando & Aprendendo",
    "skills.cat.Ferramentas & Outros": "Ferramentas & Outros",
    "skills.cat.Integrações Externas": "Integrações Externas",
    "skills.cat.Práticas & Soft Skills": "Práticas & Soft Skills",
    // Education
    "education.title": "Formação",
    "education.subtitle": "// formação acadêmica",
    "education.status": "Formado",
    // Certificates
    "certificates.title": "Certificados & Idiomas",
    "certificates.subtitle": "// cursos e idiomas",
    "certificates.languagesTitle": "Idiomas",
    "language.pt": "Português",
    "language.en": "Inglês",
    "language.level.intermediate": "Intermediário",
    // Contact
    "contact.title": "Contato",
    "contact.subtitle": "// vamos conversar?",
    "contact.intro1": "Estou aberto a oportunidades como",
    "contact.intro2": "Desenvolvedor Backend Java",
    "contact.intro3":
      ". Se você tem uma vaga ou projeto, vamos conversar — adoraria contribuir com seu time.",
    "contact.sendEmail": "Enviar email",
    "contact.callWhatsapp": "Chamar no WhatsApp",
    "contact.locationLabel": "// localização",
    "contact.form.title": "Envie uma mensagem por email",
    "contact.form.titleWhatsapp": "Envie uma mensagem pelo WhatsApp",
    "contact.form.name": "Nome",
    "contact.form.whatsapp": "WhatsApp",
    "contact.form.country": "País",
    "contact.form.countrySearch": "Buscar país ou código...",
    "contact.form.countryEmpty": "Nenhum país encontrado.",
    "contact.form.whatsappPlaceholder": "(11) 91234-5678",
    "contact.form.submitWhatsapp": "Enviar pelo WhatsApp",
    "contact.form.successWhatsapp": "Abrindo o WhatsApp...",
    "contact.form.errorWhatsapp": "Informe um número de WhatsApp válido.",
    "contact.form.namePlaceholder": "Seu nome completo",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "voce@exemplo.com",
    "contact.form.message": "Mensagem",
    "contact.form.messagePlaceholder": "Conte um pouco sobre a oportunidade ou projeto...",
    "contact.form.submit": "Enviar mensagem",
    "contact.form.success": "Mensagem pronta! Seu cliente de email foi aberto.",
    "contact.form.errorName": "Informe um nome (mín. 2 caracteres).",
    "contact.form.errorEmail": "Informe um email válido.",
    "contact.form.errorMessage": "A mensagem deve ter ao menos 10 caracteres.",
    // Footer
    "footer.backToTop": "Voltar ao topo",
  },
  en: {
    // Navbar
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.certificates": "Certificates",
    "nav.contact": "Contact",
    "nav.downloadCv": "Download CV",
    "nav.menu": "Menu",
    // Theme toggle
    "theme.light": "Switch to light theme",
    "theme.dark": "Switch to dark theme",
    // Language toggle
    "lang.switchToEn": "Switch to English",
    "lang.switchToPt": "Switch to Portuguese",
    // Hero
    "hero.greeting": "> Hi, I'm",
    "hero.viewProjects": "View Projects",
    "hero.downloadCv": "Download CV (PDF)",
    "hero.status": '{ status: "open to work" }',
    // About
    "about.title": "About me",
    "about.subtitle": "// section",
    "about.objective":
      "Goal: to work as a Java Backend Developer building REST APIs with Spring Boot — focused on performance, scalability and system integration — while evolving toward a full-stack career.",
    "about.highlight.years": "years of practical experience",
    "about.highlight.residency": "Software Residency (CEPEDI)",
    "about.highlight.degree": "Graduated at IFBA",
    // Experience
    "experience.title": "Experience",
    "experience.subtitle": "// professional journey",
    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "// featured projects",
    "projects.private": "Private",
    "projects.privateLabel": "Private repository",
    "projects.notAvailable": "Code not available",
    "projects.access": "Open project",
    "projects.viewCode": "View code",
    "projects.githubOf": "GitHub of",
    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "// technical stack",
    "skills.cat.Backend": "Backend",
    "skills.cat.Banco de Dados": "Databases",
    "skills.cat.Testes & Qualidade": "Testing & Quality",
    "skills.cat.Frontend (em evolução)": "Frontend (evolving)",
    "skills.cat.IDEs & Modelagem": "IDEs & Modeling",
    "skills.cat.Explorando & Aprendendo": "Exploring & Learning",
    "skills.cat.Ferramentas & Outros": "Tools & Others",
    "skills.cat.Integrações Externas": "External Integrations",
    "skills.cat.Práticas & Soft Skills": "Practices & Soft Skills",
    // Education
    "education.title": "Education",
    "education.subtitle": "// academic background",
    "education.status": "Graduated",
    // Certificates
    "certificates.title": "Certificates & Languages",
    "certificates.subtitle": "// courses and languages",
    "certificates.languagesTitle": "Languages",
    "language.pt": "Portuguese",
    "language.en": "English",
    "language.level.intermediate": "Intermediate",
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "// let's talk?",
    "contact.intro1": "I'm open to opportunities as a",
    "contact.intro2": "Java Backend Developer",
    "contact.intro3":
      ". If you have a position or project, let's chat — I'd love to contribute to your team.",
    "contact.sendEmail": "Send email",
    "contact.callWhatsapp": "Chat on WhatsApp",
    "contact.locationLabel": "// location",
    "contact.form.title": "Send a message by email",
    "contact.form.titleWhatsapp": "Send a message via WhatsApp",
    "contact.form.name": "Name",
    "contact.form.whatsapp": "WhatsApp",
    "contact.form.country": "Country",
    "contact.form.countrySearch": "Search country or code...",
    "contact.form.countryEmpty": "No country found.",
    "contact.form.whatsappPlaceholder": "(555) 123-4567",
    "contact.form.submitWhatsapp": "Send via WhatsApp",
    "contact.form.successWhatsapp": "Opening WhatsApp...",
    "contact.form.errorWhatsapp": "Please enter a valid WhatsApp number.",
    "contact.form.namePlaceholder": "Your full name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "you@example.com",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell me a bit about the opportunity or project...",
    "contact.form.submit": "Send message",
    "contact.form.success": "Message ready! Your email client has been opened.",
    "contact.form.errorName": "Please enter a name (min 2 characters).",
    "contact.form.errorEmail": "Please enter a valid email.",
    "contact.form.errorMessage": "Message must be at least 10 characters long.",
    // Footer
    "footer.backToTop": "Back to top",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["pt"];

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "pt";
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    return stored ?? "pt";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const setLanguage = (l: Language) => setLanguageState(l);
  const toggleLanguage = () =>
    setLanguageState((l) => (l === "pt" ? "en" : "pt"));

  const t = (key: TranslationKey) =>
    (translations[language] as Record<string, string>)[key] ?? key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
