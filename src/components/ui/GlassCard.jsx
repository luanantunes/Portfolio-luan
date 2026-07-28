import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 20,
      }}
      className={`
        rounded-3xl
        border
        border-surface-light
        bg-surface/60
        backdrop-blur-xl
        p-8
        shadow-lg
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}