import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MessageCircle, Mail, ArrowRight, Send, Sparkles } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/yourusername",
    gradient: "from-purple-500 via-pink-500 to-orange-500",
    hoverBg: "hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500",
    username: "@yourusername",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    gradient: "from-blue-600 to-blue-500",
    hoverBg: "hover:bg-[#0077B5]",
    username: "yourusername",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/1234567890",
    gradient: "from-green-500 to-green-400",
    hoverBg: "hover:bg-[#25D366]",
    username: "+1234567890",
  },
];

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Animated background decorations */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-primary/20 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

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
            <Send className="w-4 h-4" />
            Get In Touch
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Reach out through any of these platforms.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-card relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(13, 148, 136, 0.15)" }}
          >
            {/* Decorative corner gradient */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />

            {/* Email CTA */}
            <motion.div
              className="text-center mb-12 relative"
              variants={itemVariants}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-2xl mb-6 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-8 h-8 text-primary" />
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-accent" />
                </motion.div>
              </motion.div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Send me an email
              </h3>
              <motion.a
                href="mailto:hello@example.com"
                className="text-primary text-lg font-medium hover:underline inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                hello@example.com
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="flex items-center gap-4 mb-12"
              variants={itemVariants}
            >
              <motion.div
                className="flex-1 h-px bg-border"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
              <span className="text-muted-foreground text-sm">or connect on</span>
              <motion.div
                className="flex-1 h-px bg-border"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="grid sm:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center gap-3 p-6 bg-secondary/50 border border-border rounded-2xl hover:border-transparent hover:text-white transition-all duration-300 ${social.hoverBg}`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    <social.icon className="w-8 h-8 text-primary group-hover:text-current transition-colors" />
                  </motion.div>
                  <div className="text-center">
                    <span className="block font-semibold text-foreground group-hover:text-current transition-colors">
                      {social.name}
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-current/80 transition-colors">
                      {social.username}
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="text-center mt-12"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:hello@example.com" className="group">
                    Start a Conversation
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
