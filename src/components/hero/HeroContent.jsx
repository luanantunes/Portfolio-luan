import { motion } from "framer-motion";
import MagneticButton from "../MagneticButton";
import Badge from "../ui/Badge";

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-8">

      {/* Status */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-white/70 px-5 py-2 backdrop-blur-xl shadow-soft"
      >
        <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />

        <span className="font-mono text-xs tracking-widest uppercase text-muted">
          Disponível para oportunidades
        </span>
      </motion.div>

      {/* Nome */}
      <div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .15 }}
          className="
          font-display
          text-5xl
          sm:text-6xl
          lg:text-7xl
          font-extrabold
          leading-none
          tracking-tight
          "
        >
          LUAN
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .25 }}
          className="
          font-display
          text-5xl
          sm:text-6xl
          lg:text-7xl
          font-extrabold
          leading-none
          tracking-tight
          text-primary
          drop-shadow-[0_0_20px_rgba(233,196,106,.25)]
          "
        >
          LIMA
        </motion.h1>

      </div>

      {/* Cargo */}

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .35 }}
        className="
        max-w-2xl
        text-2xl
        lg:text-3xl
        font-semibold
        leading-snug
        text-ink
        "
      >
        Desenvolvedor Full Stack apaixonado por criar interfaces modernas,
        aplicações escaláveis e experiências digitais com Inteligência Artificial.
      </motion.h2>

      {/* Badges */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .45 }}
        className="flex flex-wrap gap-3"
      >
        <Badge>React</Badge>

        <Badge>Three.js</Badge>

        <Badge>Node.js</Badge>

        <Badge>Python</Badge>

        <Badge>AI</Badge>

        <Badge>UI/UX</Badge>
      </motion.div>

      {/* Texto */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .55 }}
        className="
        max-w-2xl
        leading-8
        text-muted
        text-lg
        "
      >
        Atualmente curso
        <span className="font-semibold text-primary">
          {" "}Sistemas de Informação{" "}
        </span>
        na UFMS e
        <span className="font-semibold text-primary">
          {" "}Análise e Desenvolvimento de Sistemas{" "}
        </span>
        na UCDB.

        Meu foco é desenvolver aplicações Full Stack,
        dashboards interativos,
        soluções com IA
        e interfaces de alta qualidade utilizando React,
        Node.js e Three.js.
      </motion.p>

      {/* Botões */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .7 }}
        className="flex flex-wrap gap-5"
      >

        <MagneticButton
          href="#projects"
          className="
          rounded-2xl
          bg-primary
          px-8
          py-4
          text-white
          font-semibold
          shadow-glow
          transition-all
          duration-300
          hover:scale-105
          "
        >
          Ver Projetos
        </MagneticButton>

        <MagneticButton
          href="#contact"
          className="
          rounded-2xl
          border
          border-border
          bg-white/60
          backdrop-blur-xl
          px-8
          py-4
          font-semibold
          transition-all
          duration-300
          hover:bg-white
          hover:shadow-soft
          "
        >
          Entrar em Contato
        </MagneticButton>

      </motion.div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          delay: 1.3,
          duration: 2,
          repeat: Infinity,
        }}
        className="flex items-center gap-3 pt-6"
      >
        <div className="h-px w-12 bg-border" />

        <span className="text-xs uppercase tracking-[0.35em] text-muted">
          Scroll para explorar
        </span>

        <span className="text-primary text-lg">
          ↓
        </span>
      </motion.div>

    </div>
  );
}