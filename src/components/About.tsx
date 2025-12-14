import { useEffect, useRef } from "react";
import { User, Target, Zap } from "lucide-react";

const About = () => {
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

  const highlights = [
    {
      icon: User,
      title: "Who I Am",
      description:
        "A passionate full-stack developer with expertise in building modern web and mobile applications. I love turning complex problems into elegant solutions.",
    },
    {
      icon: Target,
      title: "My Focus",
      description:
        "I specialize in creating user-centric applications, from agricultural technology to health & fitness platforms, delivering impactful digital experiences.",
    },
    {
      icon: Zap,
      title: "My Approach",
      description:
        "Clean code, intuitive design, and seamless functionality. I believe in building products that not only work great but also look amazing.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            About Me
          </span>
          <h2 className="reveal font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Crafting Digital <span className="text-gradient">Experiences</span>
          </h2>
          <p className="reveal text-muted-foreground max-w-2xl mx-auto text-lg">
            With a strong foundation in both web and mobile development, I bring ideas to life through code.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`reveal bg-gradient-card border border-border rounded-2xl p-8 hover:shadow-card hover:border-primary/20 transition-all duration-500`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
