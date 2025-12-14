import { motion } from "framer-motion";
import { User, Target, Zap, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: User,
      title: "Who I Am",
      description:
        "A passionate full-stack developer with expertise in building modern web and mobile applications. I love turning complex problems into elegant solutions.",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      icon: Target,
      title: "My Focus",
      description:
        "I specialize in creating user-centric applications, from agricultural technology to health & fitness platforms, delivering impactful digital experiences.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Zap,
      title: "My Approach",
      description:
        "Clean code, intuitive design, and seamless functionality. I believe in building products that not only work great but also look amazing.",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
            <Rocket className="w-4 h-4" />
            About Me
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Crafting Digital <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            With a strong foundation in both web and mobile development, I bring ideas to life through code.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-gradient-card border border-border rounded-2xl p-8 hover:shadow-card hover:border-primary/20 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              
              {/* Floating icon background */}
              <motion.div
                className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/50 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              />

              <motion.div
                className="relative w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className="w-7 h-7 text-primary" />
              </motion.div>
              
              <h3 className="relative font-display text-xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Animated border */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
