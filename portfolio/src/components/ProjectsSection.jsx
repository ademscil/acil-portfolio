import { motion } from "framer-motion";
import { projects } from "../data/profile";
import MiniScene from "./MiniScene";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-surface-alt/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,114,182,0.04),transparent_50%)]" />
      <div className="absolute top-20 left-0 w-72 h-72 opacity-20">
        <MiniScene type="sphere" height="100%" />
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

                {/* GitHub Link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-primary-light hover:text-accent transition-colors mb-4"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                )}

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