import { motion } from "framer-motion";

export default function SkillProgress({ value, color }) {
  return (
    <div className="w-full h-2 rounded-full bg-surface-light overflow-hidden mt-4">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="h-full rounded-full"
        style={{
          width: `${value}%`,
          background: color,
          boxShadow: `0 0 14px ${color}`,
        }}
      />
    </div>
  );
}