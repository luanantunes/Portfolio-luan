import { motion } from "framer-motion";

export default function HeroSphere() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="relative flex items-center justify-center"
    >
      <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-3xl opacity-30 absolute" />

      <div className="glass w-72 h-72 rounded-full border border-white/40 flex items-center justify-center shadow-glow">
        <span className="font-display text-7xl gradient-text">
          {"</>"}
        </span>
      </div>
    </motion.div>
  );
}