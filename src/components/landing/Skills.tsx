import {
  Code2,
  Database,
  TestTube2,
  Layout,
  Wrench,
  Globe,
  Users,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

const iconFor = (cat: string) => {
  if (cat.includes("Backend")) return Code2;
  if (cat.includes("Banco")) return Database;
  if (cat.includes("Testes")) return TestTube2;
  if (cat.includes("Frontend")) return Layout;
  if (cat.includes("IDEs")) return MonitorSmartphone;
  if (cat.includes("Explorando")) return Sparkles;
  if (cat.includes("Ferramentas")) return Wrench;
  if (cat.includes("Integrações")) return Globe;
  return Users;
};

// Mapeamento de skill -> classe devicon (https://devicon.dev)
const deviconMap: Record<string, string> = {
  // Backend / Linguagens
  Java: "devicon-java-plain colored",
  "Spring Boot": "devicon-spring-plain colored",
  "Spring MVC": "devicon-spring-plain colored",
  "Spring Data JPA": "devicon-spring-plain colored",
  "Spring Security": "devicon-spring-plain colored",
  Hibernate: "devicon-hibernate-plain colored",
  JavaMailSender: "devicon-spring-plain colored",
  "APIs REST": "devicon-swagger-plain colored",
  C: "devicon-c-plain colored",
  "C++": "devicon-cplusplus-plain colored",
  "C#": "devicon-csharp-plain colored",
  Python: "devicon-python-plain colored",

  // Banco de Dados
  PostgreSQL: "devicon-postgresql-plain colored",
  MySQL: "devicon-mysql-plain colored",
  H2: "devicon-mysql-plain colored",
  Flyway: "devicon-flyway-plain colored",

  // Testes & Qualidade
  JUnit: "devicon-junit-plain colored",
  Mockito: "devicon-java-plain colored",
  JaCoCo: "devicon-java-plain colored",
  Postman: "devicon-postman-plain colored",
  Insomnia: "devicon-insomnia-plain colored",

  // Frontend
  Angular: "devicon-angularjs-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  React: "devicon-react-original colored",
  JavaScript: "devicon-javascript-plain colored",
  Thymeleaf: "devicon-spring-plain colored",
  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  Bootstrap: "devicon-bootstrap-plain colored",

  // IDEs & Modelagem
  "IntelliJ IDEA": "devicon-intellij-plain colored",
  Eclipse: "devicon-eclipse-plain colored",
  "VS Code": "devicon-vscode-plain colored",
  "Astah UML": "devicon-java-plain colored",

  // Ferramentas & Outros
  JasperReports: "devicon-java-plain colored",
  "Node.js": "devicon-nodejs-plain colored",
  MongoDB: "devicon-mongodb-plain colored",
  Maven: "devicon-apache-plain colored",
  Heroku: "devicon-heroku-plain colored",
  Git: "devicon-git-plain colored",
  GitHub: "devicon-github-original",

  // Integrações Externas
  "Google Maps API": "devicon-googlecloud-plain colored",
  ViaCEP: "devicon-javascript-plain colored",
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container">
        <SectionHeader index="04" title="Skills" subtitle="// stack técnica" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => {
            const Icon = iconFor(group.category);
            return (
              <div
                key={group.category}
                className="bg-card-gradient border border-border rounded-xl p-6 hover-glow transition-smooth shadow-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((s) => {
                    const devicon = deviconMap[s];
                    return (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="font-mono text-xs bg-background/60 border border-border hover:border-primary/50 transition-smooth inline-flex items-center gap-1.5"
                      >
                        {devicon && (
                          <i
                            className={`${devicon} text-base leading-none`}
                            aria-hidden="true"
                          />
                        )}
                        <span>{s}</span>
                      </Badge>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
