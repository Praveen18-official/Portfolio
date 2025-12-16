import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Grid3X3 } from "lucide-react";

const navLinks = [
  { name: "Home", section: "hero" },
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

interface NavbarProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Navbar = ({ currentSection, setCurrentSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToSection = (section: string) => {
    setIsOpen(false);
    setCurrentSection(section);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            onClick={() => navigateToSection("hero")}
            className="font-display text-xl md:text-2xl font-bold text-gradient"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => navigateToSection(link.section)}
                className={`transition-colors duration-300 font-medium ${
                  currentSection === link.section
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="hero"
              size="sm"
              onClick={() => navigateToSection("contact")}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => navigateToSection(link.section)}
                  className={`text-left font-medium py-2 transition-colors duration-300 ${
                    currentSection === link.section
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="hero"
                onClick={() => navigateToSection("contact")}
                className="mt-2"
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
