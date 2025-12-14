import { useEffect, useRef } from "react";

const skills = {
  frontend: [
    { name: "React JS", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 85 },
  ],
  mobile: [
    { name: "Flutter", level: 85 },
    { name: "Dart", level: 80 },
  ],
  backend: [
    { name: "Firebase", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "SQL", level: 75 },
    { name: "Java", level: 70 },
  ],
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  return (
    <div className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%`, transitionDelay: `${delay + 200}ms` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            My Skills
          </span>
          <h2 className="reveal font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
          <p className="reveal text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern applications across web and mobile platforms.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Frontend */}
          <div className="reveal bg-card border border-border rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full" />
              Frontend
            </h3>
            <div className="space-y-6">
              {skills.frontend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="reveal bg-card border border-border rounded-2xl p-8" style={{ transitionDelay: "100ms" }}>
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-accent rounded-full" />
              Mobile
            </h3>
            <div className="space-y-6">
              {skills.mobile.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100 + 100}
                />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="reveal bg-card border border-border rounded-2xl p-8" style={{ transitionDelay: "200ms" }}>
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full" />
              Backend & Database
            </h3>
            <div className="space-y-6">
              {skills.backend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100 + 200}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
