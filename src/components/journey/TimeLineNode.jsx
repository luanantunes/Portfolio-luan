import { motion } from "framer-motion";

export default function TimelineNode() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="absolute left-1/2 -translate-x-1/2 z-20"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-40 scale-[2]" />

      {/* Anel */}
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.5, 0.15, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-full border border-primary"
      />

      {/* Núcleo */}
      <div className="relative w-5 h-5 rounded-full bg-primary border-4 border-bg shadow-[0_0_20px_rgba(233,196,106,.8)]" />
    </motion.div>
  );
}