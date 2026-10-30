// English version of portfolio data. Keys/structure mirror src/data/portfolio.ts
// Projects are matched by id; experiences follow the same order as the Portuguese list.

export const profileEn = {
  role: "Java Backend Developer | Spring Boot",
  tagline:
    "Secure, scalable and high-performance REST APIs — Spring Boot, JPA/Hibernate and PostgreSQL.",
  location: "Santo Antônio de Jesus - BA, Brazil",
};

export const aboutEn = {
  paragraphs: [
    "I'm a Java Backend Developer with a degree in Systems Analysis and Development from IFBA, focused on REST APIs with Spring Boot, Spring Security (OAuth2/JWT), JPA/Hibernate and PostgreSQL.",
    "I've been building real projects for about 4 years, across an internship, a software residency and my own projects: CAD-MOTOTAXISTA, a system I built during my internship at SMTT (Santo Antônio de Jesus Municipal Department of Traffic and Transportation), tested and validated by the department and presented as my final undergraduate project, with deployment planned once a municipal law currently under review is approved; the TIC18 Software Residency (CEPEDI), with 2,070 hours and a tech lead role on an e-commerce project; ASJCatalog, a Java/Spring Boot API with OAuth2/JWT authentication, a complete account lifecycle and more than 450 automated tests, which I evolve in documented chapters; and the hands-on projects from IFBA.",
    "I believe building software goes beyond writing code: it involves understanding the impact of technical decisions, pursuing continuous improvement and acting proactively to solve problems.",
  ],
};

export const experiencesEn = [
  {
    period: "Jun/2023 — Dec/2024",
    role: "Software Resident",
    company: "CEPEDI — TIC18 Software Residency",
    bullets: [
      "Edrive-Navigator system: smart trip planning for electric vehicles",
      "Building REST APIs with Spring Boot, JPA, Spring Security and Flyway",
      "Integration with external APIs (Google Maps and ViaCEP)",
      "Automated testing with JUnit, Mockito, Postman and Insomnia",
      "Reporting with JasperReports",
      "Tech lead on an e-commerce project, defining the architecture and following up on deliveries",
      "Frontend with Angular (components, services and API consumption)",
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
      "REST APIs",
      "Git",
      "GitHub",
      "Scrum",
    ],
  },
  {
    period: "Sep/2022 — Sep/2023",
    role: "IT Intern",
    company: "SMTT - Municipal Department of Traffic and Transportation of Santo Antônio de Jesus",
    bullets: [
      "CAD-MOTOTAXISTA system (final project) for public administration, tested and validated by SMTT during the internship, with deployment planned once a municipal law currently under review is approved",
      "Server-side monolithic web application following a layered MVC pattern, with Spring Boot and page rendering via Thymeleaf",
      "Registration, compliance control, QR Code permits (ZXing) and reports",
      "Backend with Spring Boot, JPA and Spring Security",
      "Integration with the ViaCEP API and database versioning with Flyway",
      "Automated testing with JUnit and Mockito, coverage with JaCoCo and performance testing with Apache JMeter",
      "Cloud deployment (Heroku)",
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
      "REST APIs",
      "Maven",
      "Heroku",
    ],
  },
  {
    period: "Jan/2025 — present",
    role: "Software Developer",
    company: "Agro Familiar Project — INETI Incubator",
    bullets: [
      "Development of a web portal connecting producers and consumers",
      "Building interfaces with React and consuming REST APIs",
      "Backend integration and component organization",
    ],
    stack: ["React", "JavaScript", "REST APIs", "Node.js", "MongoDB", "Git", "GitHub"],
  },
];

export const projectsEn: Record<string, { title: string; description: string; next?: string }> = {
  "asjcatalog-backend": {
    title: "ASJCatalog — Backend",
    description:
      "Product catalog REST API with features common in enterprise systems: complete account lifecycle (sign-up, email activation, password recovery and reset), OAuth2/JWT authentication with role-based access control, business rules in the domain and optimized listings without N+1. More than 450 automated tests, with build and tests running on GitHub Actions on every push.",
    next: "minimum coverage threshold with JaCoCo (in progress), Docker and API hosting.",
  },
  "asjcatalog-frontend": {
    title: "ASJCatalog — Frontend",
    description:
      "SPA that consumes the ASJCatalog API: public catalog with search and filters, admin panel for products, categories and users, login with automatic session renewal, account flows and screens tailored to the user's role, in three languages.",
    next: "integration with the API once the backend is hosted.",
  },
  "cad-mototaxista": {
    title: "CAD-MOTOTAXISTA",
    description:
      "Internship project at SMTT and my final undergraduate project. Web system for managing motorcycle taxi drivers: registration, compliance control, QR Code permits (ZXing) and reports (JasperReports). Tested and validated by SMTT during the internship, with deployment planned once a municipal law currently under review is approved. Layered MVC monolith with Spring Boot and Thymeleaf, tests with JUnit and Mockito, coverage with JaCoCo and performance testing with JMeter.",
  },
  "edrive-navigator": {
    title: "Edrive-Navigator",
    description:
      "Smart trip planning system for electric vehicles. Full Spring Boot backend with Google Maps and ViaCEP integrations, authentication via Spring Security and JasperReports.",
  },
  "iot-backend": {
    title: "IoT Backend — Smart Agriculture",
    description:
      "Academic project (Advanced Web Topics I). Spring Boot backend for monitoring agricultural sensors (temperature, humidity, light) with simulation and real integration via MQTT and AMQP/RabbitMQ. Edge/Fog/Cloud architecture, JWT authentication and OpenWeatherMap integration.",
  },
  "smart-parking": {
    title: "Smart Parking IoT",
    description:
      "Academic project (Advanced Web Programming). Smart parking system with real-time spot reservation. Spring Boot backend with JWT, Flyway and PostgreSQL; React + TypeScript frontend. Interactive documentation via Swagger/OpenAPI.",
  },
  clinica: {
    title: "Clinic — Spring Security & Thymeleaf",
    description:
      "Web appointment scheduling system built during a course (Marcio Ballem) focused on Spring Security. Role-based authentication and authorization, email confirmation and password recovery, prevention of concurrent logins and Remember Me. Deployed on Heroku.",
  },
  dsmovie: {
    title: "DSMovie — Full Stack Spring Boot + React",
    description:
      "Responsive full-stack movie rating app (DevSuperior Week #sds6). Monorepo with Spring Boot backend (REST API, JPA, Spring Security) and ReactJS + TypeScript frontend with Apex Charts and Axios. Backend deployed on Heroku and frontend on Netlify.",
  },
  "agro-familiar": {
    title: "Agro Familiar Portal",
    description:
      "Platform built at the INETI Incubator connecting producers and consumers. React frontend consuming REST APIs and integration with a Node.js backend. (Private repository)",
  },
};

export const certificatesEn = [
  { name: "Software Residency", hours: "2,070h", year: "2025", issuer: "MCTI, CEPEDI and UESC" },
  { name: "Complete Java: OOP + Projects", hours: "54.5h", year: "2025", issuer: "Online" },
  { name: "Git and GitHub from Basic to Advanced", hours: "8.5h", year: "2025", issuer: "Online" },
  { name: "Spring Boot & MVC with Spring Security", hours: "13h", year: "2024", issuer: "Online" },
  { name: "Angular - Full CRUD with Firebase", hours: "7h", year: "2024", issuer: "Online" },
  { name: "Spring Boot & MVC with Thymeleaf", hours: "9h", year: "2023", issuer: "Online" },
  { name: "Data Structures (C Language)", hours: "7.5h", year: "2022", issuer: "Online" },
];
