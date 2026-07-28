import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const commands = [
  {
    command: "$ whoami",
    output: "Luan Lima",
  },
  {
    command: "$ stack",
    output: "React • TypeScript • Node.js • Three.js",
  },
  {
    command: "$ education",
    output: "UFMS • Sistemas de Informação\nUCDB • ADS",
  },
  {
    command: "$ status",
    output: "Disponível para oportunidades",
  },
];

export default function HeroTerminal() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible((v) => {
        if (v >= commands.length) return v;
        return v + 1;
      });
    }, 700);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .8 }}
      className="
      w-full
      max-w-xl
      overflow-hidden
      rounded-3xl
      border
      border-white/40
      bg-white/70
      backdrop-blur-2xl
      shadow-floating
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-4">

        <div className="flex gap-2">

          <span className="h-3 w-3 rounded-full bg-red-400" />

          <span className="h-3 w-3 rounded-full bg-yellow-400" />

          <span className="h-3 w-3 rounded-full bg-green-400" />

        </div>

        <span className="font-mono text-xs text-muted">
          terminal
        </span>

      </div>

      {/* Conteúdo */}

      <div className="space-y-6 p-6 font-mono text-sm">

        {commands.slice(0, visible).map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .35 }}
          >

            <p className="text-primary">
              {item.command}
            </p>

            <p className="mt-2 whitespace-pre-line text-ink">
              {item.output}
            </p>

          </motion.div>

        ))}

        {visible < commands.length && (

          <div className="flex items-center gap-2">

            <span className="text-primary">
              $
            </span>

            <span className="h-5 w-[2px] animate-pulse bg-primary rounded-full" />

          </div>

        )}

      </div>
    </motion.div>
  );
}