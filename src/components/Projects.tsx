import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, ExternalLink, Leaf, Activity, MapPin, ShoppingCart, AlertTriangle, Bell, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const webProjects = [
  {
    title: "IoT Leaf Disease Monitoring",
    description:
      "Smart agricultural monitoring system using IoT sensors to detect and diagnose plant diseases in real-time, helping farmers protect their crops.",
    tech: ["React", "Firebase", "IoT", "ML"],
    icon: Leaf,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Fitness Tracker",
    description:
      "Comprehensive fitness application for tracking workouts, nutrition, and health metrics with personalized insights and progress visualization.",
    tech: ["React", "MongoDB", "Chart.js"],
    icon: Activity,
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Land Leasing & Crop Platform",
    description:
      "Agricultural marketplace connecting landowners with farmers, featuring crop suggestions based on soil analysis and a marketplace for selling produce.",
    tech: ["React", "SQL", "Firebase"],
    icon: MapPin,
    gradient: "from-green-500 to-lime-500",
    bgGradient: "from-green-500/20 to-lime-500/20",
  },
];

const mobileProjects = [
  {
    title: "Agri Ecommerce App",
    description:
      "Mobile marketplace for agricultural products, connecting farmers directly with consumers for fresh, quality produce delivery.",
    tech: ["Flutter", "Dart", "Firebase"],
    icon: ShoppingCart,
    gradient: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Plant Disease Detection",
    description:
      "AI-powered mobile app for instant plant disease identification using camera capture and machine learning algorithms.",
    tech: ["Flutter", "TensorFlow", "Firebase"],
    icon: AlertTriangle,
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-500/20 to-pink-500/20",
  },
  {
    title: "Emergency Response System",
    description:
      "Critical emergency alert and response application with real-time location tracking and instant notification to emergency services.",
    tech: ["Flutter", "Firebase", "Google Maps"],
    icon: Bell,
    gradient: "from-red-500 to-orange-500",
    bgGradient: "from-red-500/20 to-orange-500/20",
  },
];

type Project = typeof webProjects[0];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gradient-card border border-border rounded-2xl overflow-hidden hover:shadow-card hover:border-primary/30 transition-all duration-500"
    >
      {/* Project Icon Header */}
      <div className={`h-48 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center relative overflow-hidden`}>
        {/* Animated background circles */}
        <motion.div
          className="absolute w-32 h-32 bg-white/10 rounded-full -top-10 -left-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-24 h-24 bg-white/10 rounded-full -bottom-5 -right-5"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <project.icon className="w-20 h-20 text-primary opacity-80" />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <motion.h3
          className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors"
          layoutId={`title-${project.title}`}
        >
          {project.title}
        </motion.h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <motion.span
              key={tech}
              className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* View Project Button */}
        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
          <Button variant="ghost" size="sm" className="group/btn p-0">
            <span>View Details</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Hover border gradient */}
      <motion.div
        className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
        style={{ backgroundClip: "padding-box", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "2px" }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web");

  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Layers className="w-4 h-4" />
            My Projects
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            A collection of projects showcasing my expertise in web and mobile development.
          </p>

          {/* Tab Switcher */}
          <motion.div
            className="inline-flex items-center bg-secondary rounded-xl p-1.5 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="absolute h-[calc(100%-12px)] bg-primary rounded-lg shadow-soft"
              layoutId="tabIndicator"
              style={{
                width: activeTab === "web" ? "120px" : "140px",
                left: activeTab === "web" ? "6px" : "calc(50% + 2px)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setActiveTab("web")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 relative z-10 ${
                activeTab === "web"
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Globe className="w-4 h-4" />
              Web Apps
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 relative z-10 ${
                activeTab === "mobile"
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile Apps
            </button>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {(activeTab === "web" ? webProjects : mobileProjects).map(
              (project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
