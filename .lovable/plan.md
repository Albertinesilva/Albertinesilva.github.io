# Landing Page — Portfólio de Albert Silva de Jesus
### Desenvolvedor Backend Java | Spring Boot

Single page com navegação suave entre seções, visual **dark tech moderno** (fundo escuro, detalhes em ciano/verde neon), totalmente em português e responsiva. Conteúdo populado com seus dados reais.

## Estilo visual

- **Paleta:** fundo grafite/preto (`#0B1120`), superfícies azul-escuras, primária ciano (`#22D3EE`) e acento verde neon (`#4ADE80`), texto claro
- **Tipografia:** sans-serif moderna nos títulos + fonte mono para acentos de código (`<dev/>`, `{ }`, `>`)
- **Detalhes:** glow sutil em botões, badges de tecnologia em "pílulas", cards com borda neon ao hover, animações fade/slide ao rolar
- **Foto:** seu retrato em destaque no Hero com moldura circular e brilho neon (placeholder até você enviar)

## Estrutura da página

### 1. Navbar fixa
Logo `<Albert/>` + âncoras: Sobre · Experiência · Projetos · Skills · Formação · Certificados · Contato. Botão CTA "Baixar CV". Menu hambúrguer no mobile.

### 2. Hero
- Saudação animada estilo terminal: `> Olá, eu sou`
- **Albert Silva de Jesus**
- Cargo: **Desenvolvedor Backend Java | Spring Boot**
- Subtítulo: APIs REST seguras, escaláveis e de alta performance — Spring Boot, JPA/Hibernate, PostgreSQL
- Localização: Santo Antônio de Jesus - BA
- Sua foto à direita
- Botões: "Ver Projetos" e "Baixar CV (PDF)"
- Ícones sociais: GitHub, LinkedIn, Email, WhatsApp

### 3. Sobre mim
Texto em primeira pessoa baseado no seu objetivo profissional + filosofia de desenvolvimento (impacto das decisões técnicas, melhoria contínua, proatividade). Layout em duas colunas com destaques numéricos:
- 3+ anos de experiência prática
- 2.070h de Residência em Software (CEPEDI)
- Formado em ADS pelo IFBA

### 4. Experiência (timeline vertical)

**Desenvolvedor de Software — Projeto Agro Familiar / Incubadora INETI**
*Jan/2025 — atual*
Portal web conectando produtores e consumidores. Interfaces React, consumo de APIs REST, integração com backend.
Stack: React, JavaScript, Node.js, MongoDB, APIs REST, Git, GitHub

**Residente de Software — CEPEDI**
*Jun/2023 — Dez/2024*
Desenvolvimento do **Edrive-Navigator** (planejamento inteligente para veículos elétricos): APIs REST com Spring Boot, JPA, Spring Security, Flyway; integrações Google Maps e ViaCEP; testes com JUnit/Mockito; relatórios JasperReports. Atuou como **líder técnico** em projeto de e-commerce.
Stack: Java, Spring Boot, Spring Data JPA, Hibernate, Spring Security, JavaMailSender, Angular, TypeScript, PostgreSQL, MySQL, Flyway, JUnit, Mockito, Postman, Insomnia, JasperReports, Scrum

**Estagiário de TI — Prefeitura Municipal de Santo Antônio de Jesus**
*Set/2022 — Set/2023*
Desenvolvimento do **CAD-MOTOTAXISTA** (TCC) para gestão pública: cadastro, controle de regularidade, alvarás com QR Code, relatórios. Backend Spring Boot, integração ViaCEP, deploy Heroku.
Stack: Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, Spring Security, Thymeleaf, Bootstrap, PostgreSQL, H2, Flyway, JUnit, Mockito, JasperReports, Maven, Heroku

### 5. Projetos em destaque (cards em grid)

**Edrive-Navigator** — Sistema de planejamento inteligente para veículos elétricos (Residência CEPEDI). Backend completo com Spring Boot + integrações Google Maps/ViaCEP + relatórios.

**CAD-MOTOTAXISTA** — TCC. Sistema web de gestão de mototaxistas para a Prefeitura Municipal, com emissão de alvarás via QR Code e relatórios.

**Portal Agro Familiar** — Plataforma conectando produtores e consumidores (INETI). Frontend React consumindo APIs REST.

Cada card: título, descrição, badges de tech, links GitHub/Demo. Estrutura pronta para você adicionar mais.

### 6. Skills técnicas (agrupadas por categoria com ícones)

- **Backend:** Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, Spring Security, JavaMailSender, APIs REST
- **Banco de dados:** PostgreSQL, MySQL, H2, Flyway
- **Testes & Qualidade:** JUnit, Mockito, Postman, Insomnia
- **Frontend:** Angular, TypeScript, React, JavaScript, Thymeleaf, HTML, CSS, Bootstrap
- **Outros:** JasperReports, Node.js, MongoDB, Maven, Heroku, Git, GitHub
- **Integrações externas:** Google Maps, ViaCEP
- **Práticas & Soft skills:** Clean Code, SOLID, Boas práticas, Scrum, Metodologias ágeis, Liderança técnica, Trabalho em equipe

### 7. Formação acadêmica
**Tecnólogo em Análise e Desenvolvimento de Sistemas** — IFBA (Instituto Federal de Educação, Ciência e Tecnologia da Bahia) · Concluído em Março/2026
TCC: Sistema CAD-MOTOTAXISTA (com link para o repositório).

### 8. Certificados e Cursos (grid)
- Residência de Software — 2.070h (MCTI, CEPEDI e UESC) · 2025
- Java Completo: POO + Projetos — 54,5h · 2025
- Git e GitHub do Básico ao Avançado — 8,5h · 2025
- Spring Boot & MVC com Spring Security — 13h · 2024
- Angular - CRUD Completo com Firebase — 7h · 2024
- Spring Boot & MVC com Thymeleaf — 9h · 2023
- Estrutura de Dados (Linguagem C) — 7,5h · 2022

### 9. Idiomas
Card com indicador de nível:
- **Português** — Nativo
- **Inglês** — Intermediário

### 10. Contato
Bloco final "Vamos conversar?" com botões grandes:
- **Email:** albertinesilva.17@gmail.com
- **WhatsApp:** +55 (71) 99946-5742
- **LinkedIn:** linkedin.com/in/albert-backend-java-spring-boot/
- **GitHub:** github.com/Albertinesilva
- **Localização:** Santo Antônio de Jesus - BA

### 11. Footer
© Albert Silva de Jesus + ícones sociais + link "Voltar ao topo".

## Funcionalidades

- Scroll suave entre seções via âncoras
- Animações de entrada (fade-up) ao rolar
- Botão **Baixar CV** apontando para `/public/curriculo.pdf` (você substitui pelo arquivo real)
- SEO básico: título, descrição e Open Graph configurados em `index.html`
- Totalmente responsivo (mobile, tablet, desktop)
- Foto e CV como placeholders editáveis

## Detalhes técnicos

- React + Vite + TypeScript (já configurado)
- Tailwind com paleta dark tech via tokens semânticos no `src/index.css`
- shadcn/ui já disponível (Button, Card, Badge, Sheet para menu mobile)
- Ícones via `lucide-react` (já instalado)
- Animações com `tailwindcss-animate` + classes utilitárias
- Página servida em `/`, substituindo o placeholder em `src/pages/Index.tsx`
- Componentes em `src/components/landing/`: `Navbar`, `Hero`, `About`, `Experience`, `Projects`, `Skills`, `Education`, `Certificates`, `Languages`, `Contact`, `Footer`
- Dados em arquivos de configuração (`src/data/`) para fácil edição futura: `experiences.ts`, `projects.ts`, `skills.ts`, `certificates.ts`
- Atualização do `index.html` com título "Albert Silva de Jesus | Desenvolvedor Backend Java" e meta descrição

## Próximos passos após implementação

1. Substituir foto placeholder pela sua
2. Colocar seu CV em `public/curriculo.pdf`
3. Adicionar links reais dos repositórios em cada projeto
4. Adicionar screenshots dos projetos nos cards
