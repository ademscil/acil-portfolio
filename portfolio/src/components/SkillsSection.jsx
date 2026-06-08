import { motion } from "framer-motion";
import { skills } from "../data/profile";
import MiniScene from "./MiniScene";

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-text-primary group-hover:text-primary-light transition-colors">
          {name}
        </span>
        <span className="text-xs text-text-muted">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-surface-card overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-primary-light to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-6 bg-surface-alt/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.04),transparent_50%)]" />
      {/* 3D Background Element - hidden on mobile */}
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-30 hidden lg:block">
        <MiniScene type="helix" height="100%" />
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
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tech{" "}
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-text-primary mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Technical Skills
            </motion.h3>
            <div className="space-y-5">
              {skills.technical.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-text-primary mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-lg bg-accent-warm/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Soft Skills
            </motion.h3>
            <div className="grid grid-cols-1 gap-4">
              {skills.soft.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-card/40 border border-border/50 hover:border-accent-warm/30 transition-all group"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-warm to-primary flex-shrink-0" />
                  <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Tools & Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                Tools & Platforms
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Git", "Dynatrace", "Ivanti", "Docker", "VS Code", "Postman", "Linux", "Windows Server"].map(
                  (tool, i) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.05 }}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-surface-card border border-border/50 text-text-secondary hover:border-primary/30 hover:text-primary-light transition-all cursor-default"
                    >
                      {tool}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}