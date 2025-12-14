import { useEffect, useRef, useState } from "react";
import { Globe, Smartphone, ExternalLink, Leaf, Activity, MapPin, ShoppingCart, AlertTriangle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const webProjects = [
  {
    title: "IoT Leaf Disease Monitoring",
    description:
      "Smart agricultural monitoring system using IoT sensors to detect and diagnose plant diseases in real-time, helping farmers protect their crops.",
    tech: ["React", "Firebase", "IoT", "ML"],
    icon: Leaf,
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Fitness Tracker",
    description:
      "Comprehensive fitness application for tracking workouts, nutrition, and health metrics with personalized insights and progress visualization.",
    tech: ["React", "MongoDB", "Chart.js"],
    icon: Activity,
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Land Leasing & Crop Platform",
    description:
      "Agricultural marketplace connecting landowners with farmers, featuring crop suggestions based on soil analysis and a marketplace for selling produce.",
    tech: ["React", "SQL", "Firebase"],
    icon: MapPin,
    gradient: "from-green-500/20 to-lime-500/20",
  },
];

const mobileProjects = [
  {
    title: "Agri Ecommerce App",
    description:
      "Mobile marketplace for agricultural products, connecting farmers directly with consumers for fresh, quality produce delivery.",
    tech: ["Flutter", "Dart", "Firebase"],
    icon: ShoppingCart,
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Plant Disease Detection",
    description:
      "AI-powered mobile app for instant plant disease identification using camera capture and machine learning algorithms.",
    tech: ["Flutter", "TensorFlow", "Firebase"],
    icon: AlertTriangle,
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  {
    title: "Emergency Response System",
    description:
      "Critical emergency alert and response application with real-time location tracking and instant notification to emergency services.",
    tech: ["Flutter", "Firebase", "Google Maps"],
    icon: Bell,
    gradient: "from-red-500/20 to-orange-500/20",
  },
];

type ProjectCardProps = {
  project: typeof webProjects[0];
  delay: number;
};

const ProjectCard = ({ project, delay }: ProjectCardProps) => {
  return (
    <div
      className="reveal group bg-gradient-card border border-border rounded-2xl overflow-hidden hover:shadow-card hover:border-primary/30 transition-all duration-500"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Project Icon Header */}
      <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        <project.icon className="w-20 h-20 text-primary opacity-80 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <Button variant="ghost" size="sm" className="group/btn">
          <span>View Details</span>
          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web");

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
  }, [activeTab]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="reveal inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            My Projects
          </span>
          <h2 className="reveal font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="reveal text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            A collection of projects showcasing my expertise in web and mobile development.
          </p>

          {/* Tab Switcher */}
          <div className="reveal inline-flex items-center bg-secondary rounded-xl p-1.5">
            <button
              onClick={() => setActiveTab("web")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "web"
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Globe className="w-4 h-4" />
              Web Apps
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "mobile"
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile Apps
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" key={activeTab}>
          {(activeTab === "web" ? webProjects : mobileProjects).map(
            (project, index) => (
              <ProjectCard key={project.title} project={project} delay={index * 100} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
