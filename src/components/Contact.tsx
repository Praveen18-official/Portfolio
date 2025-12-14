import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MessageCircle, Mail, ArrowRight } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/yourusername",
    color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
    username: "@yourusername",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    color: "hover:bg-[#0077B5]",
    username: "yourusername",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/1234567890",
    color: "hover:bg-[#25D366]",
    username: "+1234567890",
  },
];

const Contact = () => {
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
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="reveal font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="reveal text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Reach out through any of these platforms.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-3xl mx-auto">
          <div className="reveal bg-card border border-border rounded-3xl p-8 md:p-12 shadow-card">
            {/* Email CTA */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-2xl mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Send me an email
              </h3>
              <a
                href="mailto:hello@example.com"
                className="text-primary text-lg font-medium hover:underline"
              >
                hello@example.com
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-12">
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-sm">or connect on</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Social Links */}
            <div className="grid sm:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`reveal group flex flex-col items-center gap-3 p-6 bg-secondary/50 border border-border rounded-2xl hover:border-transparent hover:text-primary-foreground transition-all duration-300 ${social.color}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-8 h-8 text-primary group-hover:text-current transition-colors" />
                  <div className="text-center">
                    <span className="block font-semibold text-foreground group-hover:text-current transition-colors">
                      {social.name}
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-current/80 transition-colors">
                      {social.username}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="reveal text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:hello@example.com">
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
