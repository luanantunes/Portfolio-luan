import { motion } from "framer-motion";

export default function TimelineNode() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="absolute left-1/2 z-20 -translate-x-1/2"
    >
      {/* Brilho sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-150 rounded-full bg-primary/30 blur-lg"
      />

      {/* Anel pulsante */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.45, 0.12, 0.45],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full border border-primary/80"
      />

      {/* Núcleo */}
      <div className="relative h-4 w-4 rounded-full border-[3px] border-bg bg-primary shadow-[0_0_12px_rgba(233,196,106,0.5)]" />
    </motion.div>
  );
}