import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Smartphone } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-secondary-foreground">
              Available for freelance work
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up opacity-0 animation-delay-100">
            Hi, I'm a{" "}
            <span className="text-gradient">Full-Stack</span>
            <br />
            Developer
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up opacity-0 animation-delay-200">
            I craft beautiful, responsive web applications and mobile apps
            with modern technologies. Specializing in{" "}
            <span className="text-primary font-semibold">React</span> and{" "}
            <span className="text-primary font-semibold">Flutter</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up opacity-0 animation-delay-300">
            <Button variant="hero" size="lg" onClick={scrollToProjects}>
              <Code2 className="w-5 h-5" />
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact}>
              <Smartphone className="w-5 h-5" />
              Get In Touch
            </Button>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-up opacity-0 animation-delay-400">
            {["React", "Flutter", "Firebase", "MongoDB", "SQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up opacity-0 animation-delay-700">
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
