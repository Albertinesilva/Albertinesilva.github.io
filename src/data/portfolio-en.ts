// English version of portfolio data. Keys/structure mirror src/data/portfolio.ts

export const profileEn = {
  role: "Java Backend Developer | Spring Boot",
  tagline:
    "Secure, scalable and high-performance REST APIs — Spring Boot, JPA/Hibernate and PostgreSQL.",
  location: "Santo Antônio de Jesus - BA, Brazil",
};

export const experiencesEn = [
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
  {
    period: "Jun/2023 — Dec/2024",
    role: "Software Resident",
    company: "CEPEDI",
    bullets: [
      "Edrive-Navigator system: smart trip planning for electric vehicles",
      "Building REST APIs with Spring Boot, JPA, Spring Security and Flyway",
      "Integration with external APIs (Google Maps and ViaCEP)",
      "Testing with JUnit, Mockito, Postman and Insomnia",
      "Reporting with JasperReports",
      "Tech lead on an e-commerce project (architecture and delivery follow-up)",
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
      "JasperReports",
      "Scrum",
    ],
  },
  {
    period: "Sep/2022 — Sep/2023",
    role: "IT Intern",
    company: "City Hall of Santo Antônio de Jesus",
    bullets: [
      "CAD-MOTOTAXISTA system (final project) applied to public administration",
      "Registration, compliance control, QR Code permits and reports",
      "Backend with Spring Boot, JPA and Spring Security",
      "Integration with the ViaCEP API and database versioning with Flyway",
      "Automated testing with JUnit and Mockito",
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

export const projectsEn = [
  {
    title: "Edrive-Navigator",
    description:
      "Smart trip planning system for electric vehicles. Full Spring Boot backend with Google Maps and ViaCEP integrations, authentication via Spring Security and JasperReports.",
  },
  {
    title: "CAD-MOTOTAXISTA",
    description:
      "Final undergraduate project. Web system for managing motorcycle taxi drivers for the City Hall, with registration, compliance control, QR Code permits and reports. Technical documentation with link to the production system.",
  },
  {
    title: "Agro Familiar Portal",
    description:
      "Platform built at the INETI Incubator connecting producers and consumers. React frontend consuming REST APIs and integration with a Node.js backend. (Private repository)",
  },
  {
    title: "IoT Backend — Smart Agriculture",
    description:
      "Academic project (Advanced Web Topics I). Spring Boot backend for monitoring agricultural sensors (temperature, humidity, light) with simulation and real integration via MQTT and AMQP/RabbitMQ. Edge/Fog/Cloud architecture, JWT authentication and OpenWeatherMap integration.",
  },
  {
    title: "Smart Parking IoT",
    description:
      "Academic project (Advanced Web Programming). Smart parking system with real-time spot reservation. Spring Boot backend with JWT, Flyway and PostgreSQL; React + TypeScript frontend. Interactive documentation via Swagger/OpenAPI.",
  },
  {
    title: "DSMovie — Full Stack Spring Boot + React",
    description:
      "Responsive full-stack movie rating app (DevSuperior Week #sds6). Monorepo with Spring Boot backend (REST API, JPA, Spring Security) and ReactJS + TypeScript frontend with Apex Charts and Axios. Backend deployed on Heroku and frontend on Netlify.",
  },
  {
    title: "Clinic — Spring Security & Thymeleaf",
    description:
      "Web appointment scheduling system built during a course (Marcio Ballem) focused on Spring Security. Role-based authentication and authorization, email confirmation and password recovery, prevention of concurrent logins and Remember Me. Deployed on Heroku.",
  },
];

export const certificatesEn = [
  { name: "Software Residency", hours: "2,070h", year: "2025", issuer: "MCTI, CEPEDI and UESC" },
  { name: "Complete Java: OOP + Projects", hours: "54.5h", year: "2025", issuer: "Online" },
  { name: "Git and GitHub from Basic to Advanced", hours: "8.5h", year: "2025", issuer: "Online" },
  { name: "Spring Boot & MVC with Spring Security", hours: "13h", year: "2024", issuer: "Online" },
  { name: "Angular - Full CRUD with Firebase", hours: "7h", year: "2024", issuer: "Online" },
  { name: "Spring Boot & MVC with Thymeleaf", hours: "9h", year: "2023", issuer: "Online" },
  { name: "Data Structures (C Language)", hours: "7.5h", year: "2022", issuer: "Online" },
];
