import { motion } from "framer-motion";
import BootSequence from "./BootSequence";

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
        scale: .95,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: .9,
        delay: .35,
      }}
      className="relative"
    >
      {/* Glow */}

      <div
        className="
          absolute
          -inset-8
          rounded-full
          bg-primary/20
          blur-[100px]
        "
      />

      {/* Card */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-2xl
        "
      >

        {/* Reflexo */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white/10
            via-transparent
            to-transparent
          "
        />

        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            px-6
            py-4
          "
        >

          <div className="flex gap-2">

            <span className="h-3 w-3 rounded-full bg-red-400" />

            <span className="h-3 w-3 rounded-full bg-yellow-400" />

            <span className="h-3 w-3 rounded-full bg-green-400" />

          </div>

          <span
            className="
              font-mono
              text-xs
              tracking-[.25em]
              uppercase
              text-muted
            "
          >
            developer-os
          </span>

        </div>

        {/* Conteúdo */}

        <div className="space-y-8 p-8">

          {/* Terminal */}

          <BootSequence />

            <p className="text-primary">$ boot developer</p>

            <p className="text-green-400">
              ✓ Loading profile...
            </p>

            <p className="text-green-400">
              ✓ Loading React...
            </p>

            <p className="text-green-400">
              ✓ Loading AI modules...
            </p>

            <p className="text-green-400">
              ✓ Status: ONLINE
            </p>

          </div>

          {/* Dados */}

          <div className="space-y-5">

            <Info
              label="Developer"
              value="Luan Lima"
            />

            <Info
              label="Location"
              value="Brazil 🇧🇷"
            />

            <Info
              label="Focus"
              value="AI • Full Stack"
            />

            <Info
              label="Stack"
              value="React • Node • Python"
            />

            <Info
              label="Mission"
              value="Building modern experiences"
            />

          </div>

          {/* Linha */}

          <div className="h-px bg-white/10" />

          {/* Métricas */}

          <div className="grid grid-cols-2 gap-6">

            <MiniStat
              number="08+"
              title="Projects"
            />

            <MiniStat
              number="18+"
              title="Technologies"
            />

            <MiniStat
              number="02"
              title="Degrees"
            />

            <MiniStat
              number="24/7"
              title="Learning"
            />

          </div>

      </motion.div>

    </motion.div>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex justify-between gap-8">

      <span className="font-mono text-xs uppercase tracking-[.2em] text-muted">
        {label}
      </span>

      <span className="font-semibold text-right">
        {value}
      </span>

    </div>
  );
}

function MiniStat({ number, title }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-4
      "
    >
      <h3
        className="
          bg-gradient-to-r
          from-primary
          via-cyan-400
          to-purple-400
          bg-clip-text
          text-3xl
          font-black
          text-transparent
        "
      >
        {number}
      </h3>

      <p
        className="
          mt-2
          text-sm
          text-muted
        "
      >
        {title}
      </p>
    </div>
  );
}