import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Experience } from "@/components/landing/Experience";
import { Projects } from "@/components/landing/Projects";
import { Skills } from "@/components/landing/Skills";
import { Education } from "@/components/landing/Education";
import { Certificates } from "@/components/landing/Certificates";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import backendBg from "@/assets/backend-bg.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen text-foreground">
      {/* Fundo temático backend (Java, Spring, DB, Security) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center bg-fixed opacity-25"
        style={{ backgroundImage: `url(${backendBg})` }}
      />
      {/* Overlay para garantir contraste e legibilidade */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-background/55"
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
