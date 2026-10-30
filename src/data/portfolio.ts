export const profile = {
  name: "Albert Silva de Jesus",
  role: "Desenvolvedor Backend Java | Spring Boot",
  tagline:
    "APIs REST seguras, escaláveis e de alta performance — Spring Boot, JPA/Hibernate e PostgreSQL.",
  location: "Santo Antônio de Jesus - BA",
  email: "albertinesilva.17@gmail.com",
  phone: "+55 (71) 99946-5742",
  whatsapp: "5571999465742",
  linkedin: "https://www.linkedin.com/in/albert-backend-java-spring-boot/",
  github: "https://github.com/Albertinesilva",
  cvPath: "/Albert-Silva-Curriculo.pdf",
};

export const about = {
  paragraphs: [
    "Sou desenvolvedor Backend Java, formado em Análise e Desenvolvimento de Sistemas pelo IFBA, com foco em APIs REST com Spring Boot, Spring Security (OAuth2/JWT), JPA/Hibernate e PostgreSQL.",
    "Desenvolvo projetos reais há cerca de 4 anos, entre estágio, residência e projetos próprios: o CAD-MOTOTAXISTA, sistema que criei no estágio na SMTT de Santo Antônio de Jesus, testado e validado pela secretaria e apresentado como meu TCC, com implantação prevista após a aprovação de uma lei municipal em tramitação; a Residência de Software TIC18 (CEPEDI), com 2.070 horas e atuação como líder técnico em um projeto de e-commerce; o ASJCatalog, API em Java/Spring Boot com autenticação OAuth2/JWT, ciclo de vida completo da conta e mais de 450 testes automatizados, que evoluo em capítulos documentados; e os projetos práticos do IFBA.",
    "Acredito que desenvolver software vai além de escrever código: envolve compreender o impacto das decisões técnicas, buscar melhoria contínua e atuar de forma proativa na resolução de problemas.",
  ],
  // labelKey aponta para as traduções em src/hooks/use-language.tsx; valueEn só quando o número muda no inglês
  highlights: [
    { value: "~4", labelKey: "about.highlight.years" },
    { value: "2.070h", valueEn: "2,070h", labelKey: "about.highlight.residency" },
    { value: "450+", labelKey: "about.highlight.tests" },
    { value: "ADS", labelKey: "about.highlight.degree" },
  ],
};

export const experiences = [
  {
    period: "Jun/2023 — Dez/2024",
    role: "Residente de Software",
    company: "CEPEDI — Residência de Software TIC18",
    bullets: [
      "Sistema Edrive-Navigator: planejamento inteligente para veículos elétricos",
      "Criação de APIs REST com Spring Boot, JPA, Spring Security e Flyway",
      "Integração com APIs externas (Google Maps e ViaCEP)",
      "Testes automatizados com JUnit, Mockito, Postman e Insomnia",
      "Geração de relatórios com JasperReports",
      "Atuação como líder técnico em projeto de e-commerce, definindo arquitetura e acompanhando entregas",
      "Frontend com Angular (componentes, serviços e consumo de APIs)",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "Spring Security",
      "JavaMailSender",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "Flyway",
      "JUnit",
      "Mockito",
      "Postman",
      "Insomnia",
      "JasperReports",
      "APIs REST",
      "Git",
      "GitHub",
      "Scrum",
    ],
  },
  {
    period: "Set/2022 — Set/2023",
    role: "Estagiário de Tecnologia da Informação",
    company: "SMTT - Secretaria Municipal de Trânsito e Transporte de Santo Antônio de Jesus",
    bullets: [
      "Sistema CAD-MOTOTAXISTA (TCC) para a gestão pública, testado e validado pela SMTT durante o estágio, com implantação prevista após a aprovação de lei municipal em tramitação",
      "Aplicação web monolítica server-side, no padrão MVC em camadas, com Spring Boot e renderização de páginas via Thymeleaf",
      "Cadastro, controle de regularidade, emissão de alvarás com QR Code (ZXing) e relatórios",
      "Backend com Spring Boot, JPA e Spring Security",
      "Integração com API ViaCEP e versionamento de banco com Flyway",
      "Testes automatizados com JUnit e Mockito, cobertura com JaCoCo e testes de performance com Apache JMeter",
      "Deploy em ambiente cloud (Heroku)",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "Spring Security",
      "Thymeleaf",
      "Lombok",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "DataTables",
      "Bootstrap",
      "PostgreSQL",
      "H2",
      "Flyway",
      "JUnit",
      "Mockito",
      "JaCoCo",
      "Apache JMeter",
      "JasperReports",
      "ZXing",
      "APIs REST",
      "Maven",
      "Heroku",
    ],
  },
  {
    period: "Jan/2025 — atual",
    role: "Desenvolvedor de Software",
    company: "Projeto Agro Familiar — Incubadora INETI",
    bullets: [
      "Desenvolvimento de portal web para conexão entre produtores e consumidores",
      "Construção de interfaces com React e consumo de APIs REST",
      "Integração com backend e organização de componentes",
    ],
    stack: ["React", "JavaScript", "APIs REST", "Node.js", "MongoDB", "Git", "GitHub"],
  },
];

// O id liga cada projeto à sua tradução em src/data/portfolio-en.ts
export const projects = [
  {
    id: "asjcatalog-backend",
    title: "ASJCatalog — Backend",
    description:
      "API REST de catálogo de produtos com funcionalidades comuns em sistemas corporativos: ciclo de vida completo da conta (cadastro, ativação por e-mail, recuperação e redefinição de senha), autenticação OAuth2/JWT com controle de acesso por papéis, regras de negócio no domínio e listagens otimizadas sem N+1. Mais de 450 testes automatizados, com build e testes no GitHub Actions a cada push.",
    next: "limite mínimo de cobertura com JaCoCo (em andamento), Docker e hospedagem da API.",
    stack: [
      "Java 17",
      "Spring Boot 3.5",
      "Spring Security",
      "OAuth2",
      "JWT",
      "Spring Data JPA",
      "PostgreSQL",
      "Flyway",
      "JUnit 5",
      "Mockito",
      "JaCoCo",
      "Swagger",
    ],
    github: "https://github.com/Albertinesilva/backend-engineering-journey-java-springboot",
    featured: true,
  },
  {
    id: "asjcatalog-frontend",
    title: "ASJCatalog — Frontend",
    description:
      "SPA que consome a API do ASJCatalog: catálogo público com busca e filtros, painel administrativo de produtos, categorias e usuários, login com renovação automática da sessão, fluxos de conta e telas de acordo com o perfil do usuário, em três idiomas.",
    next: "integração com a API depois da hospedagem do backend.",
    stack: ["React", "TypeScript", "Vite", "React Router", "Axios", "Tailwind CSS", "i18next"],
    github: "https://github.com/Albertinesilva/asjcatalog-frontend",
    featured: true,
  },
  {
    id: "cad-mototaxista",
    title: "CAD-MOTOTAXISTA",
    description:
      "Projeto do estágio na SMTT e meu TCC. Sistema web de gestão de mototaxistas: cadastro, controle de regularidade, emissão de alvarás com QR Code (ZXing) e relatórios (JasperReports). Testado e validado pela SMTT durante o estágio, com implantação prevista após a aprovação de lei municipal em tramitação. Monolito MVC em camadas com Spring Boot e Thymeleaf, testes com JUnit e Mockito, cobertura com JaCoCo e testes de performance com JMeter.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Thymeleaf",
      "PostgreSQL",
      "Flyway",
      "JasperReports",
      "Heroku",
    ],
    github: "https://github.com/Albertinesilva/cad-mototaxista-technical-documentation",
    demo: "https://cad-mototaxistas.herokuapp.com/",
    featured: true,
  },
  {
    id: "edrive-navigator",
    title: "Edrive-Navigator",
    description:
      "Sistema de planejamento inteligente para veículos elétricos. Backend completo em Spring Boot com integrações Google Maps e ViaCEP, autenticação com Spring Security e relatórios em JasperReports.",
    stack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Flyway", "JasperReports"],
    github:
      "https://github.com/Albertinesilva/software-residency-tic18/tree/main/modulo-05-desafio-projeto-real/E-drive",
    featured: true,
  },
  {
    id: "iot-backend",
    title: "Backend IoT — Agricultura Inteligente",
    description:
      "Projeto acadêmico (Tópicos Avançados em Web I). Backend Spring Boot para monitoramento de sensores agrícolas (temperatura, umidade, luminosidade) com simulação e integração real via MQTT e AMQP/RabbitMQ. Arquitetura Edge/Fog/Cloud, autenticação JWT e integração com OpenWeatherMap.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "MQTT", "RabbitMQ", "H2"],
    github: "https://github.com/Albertinesilva/iot-sensor-monitoring-spring-boot",
    featured: true,
  },
  {
    id: "smart-parking",
    title: "Smart Parking IoT",
    description:
      "Projeto acadêmico (Programação Web Avançada). Sistema de estacionamento inteligente com reserva de vagas em tempo real. Backend Spring Boot com JWT, Flyway e PostgreSQL; frontend React + TypeScript. Documentação interativa via Swagger/OpenAPI.",
    stack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Flyway", "JWT"],
    github: "https://github.com/Albertinesilva/smart-parking-iot/tree/develop",
    featured: true,
  },
  {
    id: "clinica",
    title: "Clínica — Spring Security & Thymeleaf",
    description:
      "Sistema web de agendamento de consultas desenvolvido em curso (Marcio Ballem) com foco em Spring Security. Autenticação e autorização por perfis, confirmação de cadastro e recuperação de senha por e-mail, restrição de logins simultâneos e Remember Me. Deploy em produção no Heroku.",
    stack: ["Java", "Spring Boot", "Spring Security", "Spring MVC", "Thymeleaf", "JPA", "MySQL", "Heroku"],
    github: "https://github.com/Albertinesilva/appointment-scheduling-spring-security",
    demo: "https://clinica-spring-security-b074f1332545.herokuapp.com/",
    featured: true,
  },
  {
    id: "dsmovie",
    title: "DSMovie — Full Stack Spring Boot + React",
    description:
      "Aplicação full-stack responsiva para avaliação de filmes (Semana DevSuperior #sds6). Monorepo com backend Spring Boot (API REST, JPA, Spring Security) e frontend ReactJS + TypeScript com Apex Charts e Axios. Deploy do backend no Heroku e frontend no Netlify.",
    stack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Bootstrap", "Heroku", "Netlify"],
    github: "https://github.com/Albertinesilva/dsmovie",
    demo: "https://dsmovie-portfolio.netlify.app/",
    featured: true,
  },
  {
    id: "agro-familiar",
    title: "Portal Agro Familiar",
    description:
      "Plataforma desenvolvida na Incubadora INETI conectando produtores e consumidores. Frontend em React consumindo APIs REST e integração com backend Node.js. (Repositório privado)",
    stack: ["React", "JavaScript", "Node.js", "MongoDB", "APIs REST"],
    github: "https://github.com/Albertinesilva",
    featured: true,
    isPrivate: true,
  },
];

export const skills = [
  {
    category: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "Spring Security",
      "APIs REST",
      "Lombok",
      "Bean Validation",
      "Thymeleaf",
      "JavaMailSender",
    ],
  },
  {
    category: "Segurança & Documentação de API",
    items: ["OAuth2", "JWT", "Spring Authorization Server", "SpringDoc OpenAPI / Swagger"],
  },
  {
    category: "Banco de Dados",
    items: ["PostgreSQL", "MySQL", "H2", "Flyway"],
  },
  {
    category: "Testes & Qualidade",
    items: ["JUnit", "Mockito", "JaCoCo", "Apache JMeter", "Postman", "Insomnia"],
  },
  {
    category: "Ferramentas",
    items: ["Maven", "Git", "GitHub", "JasperReports / Jaspersoft Studio", "Heroku"],
  },
  {
    category: "IDEs & Modelagem",
    items: ["IntelliJ IDEA", "Eclipse", "VS Code", "Astah UML"],
  },
  {
    category: "Frontend (complementar)",
    items: ["Angular", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    category: "Práticas & Soft Skills",
    items: [
      "Clean Code",
      "SOLID",
      "Boas práticas",
      "Scrum",
      "Metodologias ágeis",
      "Liderança técnica",
      "Trabalho em equipe",
    ],
  },
  {
    category: "Outras linguagens e tecnologias",
    items: ["C", "C++", "Python", "C#", "Node.js", "MongoDB"],
  },
];

export const education = {
  degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  institution: "IFBA — Instituto Federal de Educação, Ciência e Tecnologia da Bahia",
  conclusion: "Concluído em Março/2026",
  status: "Formado",
  tcc: "TCC: Sistema CAD-MOTOTAXISTA — aplicação web desenvolvida para a gestão de mototaxistas, com repositório e documentação técnica completa no GitHub e versão hospedada e disponível online.",
  tccLink: "https://github.com/Albertinesilva/cad-mototaxista-technical-documentation",
  tccLinkLabel: "Ver documentação no GitHub",
};

export const certificates = [
  { name: "Residência de Software", hours: "2.070h", year: "2025", issuer: "MCTI, CEPEDI e UESC" },
  { name: "Java Completo: POO + Projetos", hours: "54,5h", year: "2025", issuer: "Online" },
  { name: "Git e GitHub do Básico ao Avançado", hours: "8,5h", year: "2025", issuer: "Online" },
  { name: "Spring Boot & MVC com Spring Security", hours: "13h", year: "2024", issuer: "Online" },
  { name: "Angular - CRUD Completo com Firebase", hours: "7h", year: "2024", issuer: "Online" },
  { name: "Spring Boot & MVC com Thymeleaf", hours: "9h", year: "2023", issuer: "Online" },
  { name: "Estrutura de Dados (Linguagem C)", hours: "7,5h", year: "2022", issuer: "Online" },
];

export const languages = [
  { name: "Português", level: "", percentage: 100 },
  { name: "Inglês", level: "Básico (leitura técnica)", percentage: 30 },
];
