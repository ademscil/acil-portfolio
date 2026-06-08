import { motion } from "framer-motion";
import { experience } from "../data/profile";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_right,rgba(99,102,241,0.04),transparent_50%)]" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-[0.3em] mb-3 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

          {experience.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                <motion.div
                  className="w-4 h-4 rounded-full bg-primary border-4 border-surface"
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/30 animate-ping" />
              </div>

              {/* Content */}
              <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                <motion.div
                  className="p-6 rounded-2xl bg-surface-card/50 border border-border/50 hover:border-primary/30 transition-all group"
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-light transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-sm text-text-muted font-medium">{item.company}</span>
                  </div>
                  <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    {item.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + j * 0.05 + 0.3 }}
                        className="text-sm text-text-secondary leading-relaxed flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0 mt-1.5" />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}