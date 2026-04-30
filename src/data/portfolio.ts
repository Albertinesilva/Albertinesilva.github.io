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
  cvPath: "/curriculo.pdf",
};

export const about = {
  paragraphs: [
    "Formado em Análise e Desenvolvimento de Sistemas pelo IFBA, sou desenvolvedor com foco em Backend Java e na construção de APIs REST seguras, escaláveis e de alta performance.",
    "Tenho experiência prática em projetos reais com Spring Boot, JPA/Hibernate, PostgreSQL e integração entre sistemas, aplicando boas práticas como Clean Code, SOLID e arquitetura em camadas.",
    "Acredito que desenvolver software vai além de escrever código: envolve compreender o impacto das decisões técnicas, buscar melhoria contínua e atuar de forma proativa na resolução de problemas.",
  ],
  highlights: [
    { value: "3+", label: "anos de experiência prática" },
    { value: "2.070h", label: "Residência em Software (CEPEDI)" },
    { value: "ADS", label: "Formado pelo IFBA" },
  ],
};

export const experiences = [
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
  {
    period: "Jun/2023 — Dez/2024",
    role: "Residente de Software",
    company: "CEPEDI",
    bullets: [
      "Sistema Edrive-Navigator: planejamento inteligente para veículos elétricos",
      "Criação de APIs REST com Spring Boot, JPA, Spring Security e Flyway",
      "Integração com APIs externas (Google Maps e ViaCEP)",
      "Testes com JUnit, Mockito, Postman e Insomnia",
      "Geração de relatórios com JasperReports",
      "Líder técnico em projeto de e-commerce (arquitetura e acompanhamento de entregas)",
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
      "JasperReports",
      "Scrum",
    ],
  },
  {
    period: "Set/2022 — Set/2023",
    role: "Estagiário de Tecnologia da Informação",
    company: "Prefeitura Municipal de Santo Antônio de Jesus",
    bullets: [
      "Sistema CAD-MOTOTAXISTA (TCC) aplicado à gestão pública",
      "Cadastro, controle de regularidade, emissão de alvarás com QR Code e relatórios",
      "Backend com Spring Boot, JPA e Spring Security",
      "Integração com API ViaCEP e versionamento de banco com Flyway",
      "Testes automatizados com JUnit e Mockito",
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
      "Bootstrap",
      "PostgreSQL",
      "H2",
      "Flyway",
      "JUnit",
      "Mockito",
      "JasperReports",
      "Maven",
      "Heroku",
    ],
  },
];

export const projects = [
  {
    title: "Edrive-Navigator",
    description:
      "Sistema de planejamento inteligente para veículos elétricos. Backend completo em Spring Boot com integrações Google Maps e ViaCEP, autenticação com Spring Security e relatórios em JasperReports.",
    stack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Flyway", "JasperReports"],
    github:
      "https://github.com/Albertinesilva/software-residency-tic18/tree/main/modulo-05-desafio-projeto-real/E-drive",
    featured: true,
  },
  {
    title: "CAD-MOTOTAXISTA",
    description:
      "TCC. Sistema web de gestão de mototaxistas para a Prefeitura Municipal, com cadastro, controle de regularidade, emissão de alvarás via QR Code e geração de relatórios. Documentação técnica com link de acesso ao sistema em produção.",
    stack: ["Java", "Spring Boot", "Spring MVC", "Thymeleaf", "PostgreSQL", "Heroku"],
    github: "https://github.com/Albertinesilva/cad-mototaxista-technical-documentation",
    featured: true,
  },
  {
    title: "Portal Agro Familiar",
    description:
      "Plataforma desenvolvida na Incubadora INETI conectando produtores e consumidores. Frontend em React consumindo APIs REST e integração com backend Node.js. (Repositório privado)",
    stack: ["React", "JavaScript", "Node.js", "MongoDB", "APIs REST"],
    github: "https://github.com/Albertinesilva",
    featured: true,
    isPrivate: true,
  },
  {
    title: "Backend IoT — Agricultura Inteligente",
    description:
      "Projeto acadêmico (Tópicos Avançados em Web I). Backend Spring Boot para monitoramento de sensores agrícolas (temperatura, umidade, luminosidade) com simulação e integração real via MQTT e AMQP/RabbitMQ. Arquitetura Edge/Fog/Cloud, autenticação JWT e integração com OpenWeatherMap.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "MQTT", "RabbitMQ", "H2"],
    github: "https://github.com/Albertinesilva/iot-sensor-monitoring-spring-boot",
    featured: true,
  },
  {
    title: "Smart Parking IoT",
    description:
      "Projeto acadêmico (Programação Web Avançada). Sistema de estacionamento inteligente com reserva de vagas em tempo real. Backend Spring Boot com JWT, Flyway e PostgreSQL; frontend React + TypeScript. Documentação interativa via Swagger/OpenAPI.",
    stack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Flyway", "JWT"],
    github: "https://github.com/Albertinesilva/smart-parking-iot/tree/develop",
    featured: true,
  },
  {
    title: "DSMovie — Full Stack Spring Boot + React",
    description:
      "Aplicação full-stack responsiva para avaliação de filmes (Semana DevSuperior #sds6). Monorepo com backend Spring Boot (API REST, JPA, Spring Security) e frontend ReactJS + TypeScript com Apex Charts e Axios. Deploy do backend no Heroku e frontend no Netlify.",
    stack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Bootstrap", "Heroku", "Netlify"],
    github: "https://github.com/Albertinesilva/dsmovie",
    featured: true,
  },
  {
    title: "Clínica — Spring Security & Thymeleaf",
    description:
      "Sistema web de agendamento de consultas desenvolvido em curso (Marcio Ballem) com foco em Spring Security. Autenticação e autorização por perfis, confirmação de cadastro e recuperação de senha por e-mail, restrição de logins simultâneos e Remember Me. Deploy em produção no Heroku.",
    stack: ["Java", "Spring Boot", "Spring Security", "Spring MVC", "Thymeleaf", "JPA", "MySQL", "Heroku"],
    github: "https://github.com/Albertinesilva/appointment-scheduling-spring-security",
    featured: true,
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
      "JavaMailSender",
      "APIs REST",
      "C",
      "C++",
    ],
  },
  {
    category: "Banco de Dados",
    items: ["PostgreSQL", "MySQL", "H2", "Flyway"],
  },
  {
    category: "Testes & Qualidade",
    items: ["JUnit", "Mockito", "JaCoCo", "Postman", "Insomnia"],
  },
  {
    category: "Frontend (em evolução)",
    items: ["Angular", "TypeScript", "React", "JavaScript", "Thymeleaf", "HTML", "CSS", "Bootstrap"],
  },
  {
    category: "IDEs & Modelagem",
    items: ["IntelliJ IDEA", "Eclipse", "VS Code", "Astah UML"],
  },
  {
    category: "Explorando & Aprendendo",
    items: ["Python", "C#", "MongoDB", "Node.js"],
  },
  {
    category: "Ferramentas & Outros",
    items: ["JasperReports", "Node.js", "MongoDB", "Maven", "Heroku", "Git", "GitHub"],
  },
  {
    category: "Integrações Externas",
    items: ["Google Maps API", "ViaCEP"],
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
];

export const education = {
  degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  institution: "IFBA — Instituto Federal de Educação, Ciência e Tecnologia da Bahia",
  conclusion: "Concluído em Março/2026",
  status: "Formado",
  tcc: "TCC: Sistema CAD-MOTOTAXISTA — aplicação web para gestão de mototaxistas (repositório e documentação técnica disponíveis no GitHub).",
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
  { name: "Inglês", level: "Intermediário", percentage: 60 },
];
