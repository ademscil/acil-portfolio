import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/profile";
import Scene3D from "./Scene3D";
import TypingEffect from "./TypingEffect";

function ProfilePhoto() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative">
      {/* Glow ring */}
      <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary via-accent to-accent-warm opacity-20 blur-xl" />
      <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
        {!imgError ? (
          <img
            src="/profile.jpg"
            alt={`Foto profil ${personalInfo.name}`}
            className="w-full h-full object-cover object-top"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-5xl font-bold text-white">
            {personalInfo.name.split(" ").map((p) => p[0]).join("")}
          </div>
        )}
      </div>
      {/* Location badge */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-surface-card/90 border border-border/50 backdrop-blur-sm text-xs text-text-secondary whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        📍 {personalInfo.location}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-transparent to-surface pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-text-secondary">Available for opportunities</span>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-text-primary via-primary-light to-accent bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-text-secondary font-light mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TypingEffect
              texts={[
                "Backend / Fullstack Developer",
                "Automation Engineer",
                "Enterprise Web Builder",
                "REST API Specialist",
              ]}
              speed={70}
              deleteSpeed={35}
              pauseTime={2500}
            />
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-text-muted max-w-2xl mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-3.5 rounded-full border border-border text-text-primary font-semibold hover:bg-primary/5 hover:border-primary/40 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>

        {/* Profile Photo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ProfilePhoto />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-text-muted/40 flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1 h-2 rounded-full bg-primary-light" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}