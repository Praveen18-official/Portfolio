import { motion } from "framer-motion";
import { Code, Smartphone, Database, Braces } from "lucide-react";

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
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{name}</span>
        <motion.span
          className="text-sm text-primary font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, delay: delay + 1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const FloatingIcon = ({ icon: Icon, delay, className }: { icon: typeof Code; delay: number; className: string }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, type: "spring", stiffness: 200 }}
    animate={{
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
    }}
    // @ts-ignore
    transition2={{
      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    }}
  >
    <div className="w-12 h-12 bg-secondary/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-soft">
      <Icon className="w-6 h-6 text-primary" />
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    { key: "frontend", title: "Frontend", icon: Code, color: "bg-primary" },
    { key: "mobile", title: "Mobile", icon: Smartphone, color: "bg-accent" },
    { key: "backend", title: "Backend & Database", icon: Database, color: "bg-primary" },
  ] as const;

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Floating decorative icons */}
      <motion.div
        className="absolute top-20 left-[10%] w-16 h-16 bg-primary/10 rounded-2xl"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-[15%] w-20 h-20 bg-accent/10 rounded-full"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-[5%] w-12 h-12 bg-secondary rounded-lg"
        animate={{
          x: [0, 15, 0],
          rotate: [0, -20, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            <Braces className="w-4 h-4" />
            My Skills
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern applications across web and mobile platforms.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px -20px rgba(13, 148, 136, 0.2)"
              }}
            >
              {/* Floating background element */}
              <motion.div
                className={`absolute -right-10 -top-10 w-32 h-32 ${category.color}/10 rounded-full blur-2xl`}
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: categoryIndex * 0.5 }}
              />

              <motion.h3
                className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.15 + 0.2 }}
              >
                <motion.span
                  className={`w-3 h-3 ${category.color} rounded-full`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <category.icon className="w-5 h-5 text-primary" />
                {category.title}
              </motion.h3>
              
              <div className="space-y-6 relative">
                {skills[category.key].map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.15 + index * 0.1 + 0.3}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
