import { motion } from "framer-motion";
import { projects } from "../data/profile";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-surface-alt/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,114,182,0.04),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-[0.3em] mb-3 block">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              Work
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-accent-warm/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

              <div className="relative p-8 rounded-3xl bg-surface-card border border-border/50 group-hover:border-primary/30 transition-all h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary-light border border-primary/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-light transition-colors mb-3">
                  {project.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/30">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-surface/80 border border-border/50 text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}