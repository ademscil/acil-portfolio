import { motion } from "framer-motion";
import { highlights, personalInfo } from "../data/profile";
import MiniScene from "./MiniScene";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.05),transparent_50%)]" />
      {/* 3D Background Element - hidden on mobile */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-40 hidden lg:block">
        <MiniScene type="dna" height="100%" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-[0.3em] mb-3 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building{" "}
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl">
            I'm a fullstack developer passionate about creating robust internal tools, 
            enterprise applications, and automation systems that drive operational efficiency.
            Based in {personalInfo.location}.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-surface-card/50 border border-border backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary-light font-bold text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-text-secondary leading-relaxed">{item}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "10+", label: "Projects Delivered" },
            { value: "3+", label: "Companies" },
            { value: "∞", label: "Lines of Code" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-surface-card/30 border border-border/50"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}