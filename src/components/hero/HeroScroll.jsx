import { motion } from "framer-motion";

export default function HeroScroll() {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 2.2,
        duration: 0.8,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted hover:text-primary transition-colors"
    >
      <span className="text-xs tracking-[0.3em] uppercase mb-2">
        Scroll
      </span>

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
      >
        ↓
      </motion.div>
    </motion.a>
  );
}