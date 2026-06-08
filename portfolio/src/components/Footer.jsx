import { motion } from "framer-motion";
import { personalInfo } from "../data/profile";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-text-muted"
        >
          &copy; {new Date().getFullYear()} {personalInfo.name}. Crafted with React, Three.js & Framer Motion.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-primary-light transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-primary-light transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-text-muted hover:text-primary-light transition-colors"
          >
            Email
          </a>
        </motion.div>
      </div>

      {/* Back to top */}
      <motion.a
        href="#top"
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-surface-card border border-border/50 flex items-center justify-center text-text-muted hover:text-primary-light hover:border-primary/40 transition-all z-40 shadow-lg"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.a>
    </footer>
  );
}