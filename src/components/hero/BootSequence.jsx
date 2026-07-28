import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "Loading profile...",
  "Loading React...",
  "Loading Node.js...",
  "Loading AI modules...",
  "Loading Projects...",
  "Loading GitHub...",
  "Developer Environment Loaded.",
  "Status: ONLINE",
];

export default function BootSequence() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    lines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, index * 500);
    });
  }, []);

  return (
    <div
      className="
        rounded-2xl
        bg-black/40
        p-5
        font-mono
        text-sm
        min-h-[250px]
      "
    >
      <p className="text-primary mb-3">$ boot developer-os</p>

      {visibleLines.map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .25 }}
          className={
            line.includes("ONLINE")
              ? "text-green-400"
              : line.includes("Loaded")
              ? "text-cyan-400"
              : "text-green-300"
          }
        >
          ✓ {line}
        </motion.p>
      ))}

      <motion.span
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="text-primary"
      >
        █
      </motion.span>
    </div>
  );
}