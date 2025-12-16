import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Hero setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {renderSection()}
      {currentSection !== "hero" && <Footer />}
    </main>
  );
};

export default Index;
