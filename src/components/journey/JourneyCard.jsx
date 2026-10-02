import { motion } from "framer-motion";

import Badge from "../ui/Badge";
import GlassCard from "../ui/GlassCard";
import TimelineNode from "./TimeLineNode";

export default function JourneyCard({ item, index }) {
  const left = index % 2 === 0;

  return (
    <div className="relative">

      {/* Nó da Timeline */}
      <TimelineNode />

      <motion.div
        initial={{
          opacity: 0,
          x: left ? -80 : 80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: 0.7,
        }}
        className={`
          flex
          w-full
          ${left ? "justify-start pr-[52%]" : "justify-end pl-[52%]"}
        `}
      >

        <GlassCard
          className="
            relative
            overflow-hidden
            group
            w-full
            max-w-xl
            transition-all
            duration-500
            hover:-translate-y-2
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

          {/* Barra estilo macOS */}

          <div className="flex items-center gap-2 pb-5 border-b border-white/10">

            <span className="w-3 h-3 rounded-full bg-red-400" />

            <span className="w-3 h-3 rounded-full bg-yellow-400" />

            <span className="w-3 h-3 rounded-full bg-green-400" />

          </div>

          {/* Conteúdo */}

          <div className="pt-6">

            <p
              className="
                font-mono
                uppercase
                tracking-[0.25em]
                text-xs
                text-primary
              "
            >
              {item.year}
            </p>

            <div className="text-5xl mt-5">
              {item.icon}
            </div>

            <h3
              className="
                text-3xl
                font-bold
                mt-6
                text-ink
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2
                font-semibold
                text-primary
              "
            >
              {item.subtitle}
            </p>

            <p
              className="
                mt-6
                leading-8
                text-muted
              "
            >
              {item.description}
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-3
                mt-8
              "
            >
              {item.technologies.map((tech) => (
                <Badge key={tech}>
                  {tech}
                </Badge>
              ))}
            </div>

          </div>

        </GlassCard>

      </motion.div>

    </div>
  );
}