
import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={false}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: "easeOut",
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
