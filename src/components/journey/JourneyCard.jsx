
import { motion } from "framer-motion";

import Badge from "../ui/Badge";
import GlassCard from "../ui/GlassCard";
import TimelineNode from "./TimeLineNode";

export default function JourneyCard({ item, index }) {
  const left = index % 2 === 0;

  return (
    <div className="relative">
      {/* Nó da timeline */}
      <TimelineNode />

      <motion.div
        initial={{
          opacity: 0,
          x: left ? -50 : 50,
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
          duration: 0.65,
          ease: "easeOut",
        }}

        className={`
           flex
            w-full
           min-w-0
            ${left
            ? "justify-start pr-[52%] max-md:justify-end max-md:pr-0 max-md:pl-10"
            : "justify-end pl-[52%] max-md:pl-10 max-md:pr-0"}
          `}

      >
        <GlassCard
          className="
            group
            relative
            w-full
            max-w-xl
            overflow-hidden
            transition-all
            duration-500
            hover:-translate-y-2
          "
        >
          {/* Brilho sutil ao passar o mouse */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-primary/[0.08]
              via-transparent
              to-cyan-400/[0.06]
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          <div className="relative">
            {/* Cabeçalho minimalista */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Journey / {String(index + 1).padStart(2, "0")}
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(124,131,255,0.6)]" />
            </div>

            {/* Conteúdo */}
            <div className="pt-5">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                {item.year}
              </p>

              <div className="mt-4 text-4xl transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </div>

              <h3 className="mt-5 text-2xl font-bold text-ink sm:text-3xl">
                {item.title}
              </h3>

              <p className="mt-2 font-semibold text-primary">
                {item.subtitle}
              </p>

              <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
