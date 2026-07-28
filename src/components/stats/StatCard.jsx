import { motion } from "framer-motion";

import GlassCard from "../ui/GlassCard";
import Counter from "./Counter";

export default function StatCard({ stat, index }) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      className="relative"
    >
      <GlassCard
        className="
          relative
          h-full
          overflow-hidden
          group
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
            bg-gradient-to-br
            from-primary/10
            via-transparent
            to-cyan-400/10
            pointer-events-none
          "
        />

        {/* Ícone */}

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="
            mb-8
            inline-flex
            rounded-2xl
            bg-primary/10
            p-4
          "
        >
          {Icon && (
            <Icon
              size={34}
              className="text-primary"
            />
          )}
        </motion.div>

        {/* Número */}

        <h2
          className="
            text-5xl
            font-black
            bg-gradient-to-r
            from-primary
            via-cyan-400
            to-purple-400
            bg-clip-text
            text-transparent
          "
        >
          <Counter
            end={stat.value}
            suffix={stat.suffix || ""}
          />
        </h2>

        {/* Título */}

        <h3
          className="
            mt-4
            text-2xl
            font-bold
            text-ink
          "
        >
          {stat.title}
        </h3>

        {/* Descrição */}

        <p
          className="
            mt-4
            leading-7
            text-muted
            whitespace-pre-line
          "
        >
          {stat.description}
        </p>

        {/* Linha */}

        <div
          className="
            mt-8
            h-px
            w-full
            bg-gradient-to-r
            from-primary/30
            to-transparent
          "
        />

        {/* Status */}

        <div className="mt-5 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

          <span
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.25em]
              text-muted
            "
          >
            ONLINE
          </span>
        </div>
      </GlassCard>
    </motion.div>
  );
}