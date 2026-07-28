import { motion } from "framer-motion";

export default function JourneyLine() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2
        h-full
        flex
        justify-center
        pointer-events-none
      "
    >
      {/* Linha de fundo */}

      <div
        className="
          absolute
          h-full
          w-px
          bg-white/10
        "
      />

      {/* Linha animada */}

      <motion.div
        initial={{
          height: 0,
        }}
        whileInView={{
          height: "100%",
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="
          absolute
          top-0
          w-[3px]
          rounded-full
          bg-gradient-to-b
          from-primary
          via-cyan-400
          to-purple-500
          shadow-[0_0_25px_rgba(233,196,106,.5)]
        "
      />

      {/* Glow */}

      <motion.div
        animate={{
          opacity: [.25, .9, .25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          top-0
          h-full
          w-5
          blur-3xl
          bg-primary/30
        "
      />
    </div>
  );
}