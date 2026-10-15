
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "Loading profile...",
  "Loading React...",
  "Loading AI modules...",
  "Environment ready.",
  "Status: ONLINE",
];

export default function BootSequence() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    setVisibleLines([]);

    const timers = lines.map((line, index) =>
      setTimeout(() => {
        setVisibleLines((previous) => [...previous, line]);
      }, index * 300 + 150)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="rounded-2xl border border-white/[0.07] bg-black/35 p-3.5 font-mono text-[11px] leading-5 sm:p-4 sm:text-xs">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-primary">
          <span className="text-slate-500">root@portfolio:</span>
          <span className="text-cyan-300">~$</span> boot developer-os
        </p>

        <span className="shrink-0 text-[9px] uppercase tracking-wider text-slate-500">
          init
        </span>
      </div>

      <div className="space-y-0.5">
        {visibleLines.map((line) => {
          const isOnline = line.includes("ONLINE");
          const isReady = line.includes("ready");

          return (
            <motion.p
              key={line}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={
                isOnline
                  ? "text-green-300"
                  : isReady
                  ? "text-cyan-300"
                  : "text-slate-300"
              }
            >
              <span
                className={
                  isOnline
                    ? "mr-2 text-green-400"
                    : "mr-2 text-primary"
                }
              >
                {isOnline ? "●" : "✓"}
              </span>
              {line}
            </motion.p>
          );
        })}
      </div>

      <div className="mt-1 flex items-center gap-2 text-primary">
        <span className="text-slate-500">{">"}</span>
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          █
        </motion.span>
      </div>
    </div>
  );
}
