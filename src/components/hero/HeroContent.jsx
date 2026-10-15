
import { motion } from "framer-motion";
import MagneticButton from "../MagneticButton";
import Badge from "../ui/Badge";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start gap-5 lg:gap-5">
      {/* Status */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="inline-flex max-w-full items-center gap-3 rounded-full border border-primary/25 bg-white/75 px-4 py-2 shadow-soft backdrop-blur-xl"
      >
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-40" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>

        <span className="font-mono text-[10px] tracking-[0.12em] text-muted sm:text-xs sm:tracking-[0.15em]">
          DISPONÍVEL PARA OPORTUNIDADES
        </span>
      </motion.div>

      {/* Nome */}
      <div className="space-y-1">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="font-display text-6xl font-extrabold leading-[0.88] tracking-[-0.065em] text-ink sm:text-7xl lg:text-6xl xl:text-8xl"
        >
          LUAN
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.23, duration: 0.6 }}
          className="font-display text-6xl font-extrabold leading-[0.9] tracking-[-0.065em] text-primary drop-shadow-[0_0_20px_rgba(233,196,106,0.2)] sm:text-7xl lg:text-6xl xl:text-8xl"
        >
          LIMA
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-4 h-1 w-16 origin-left rounded-full bg-gradient-to-r from-primary to-purple-400"
        />
      </div>

      {/* Apresentação */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-xl space-y-2"
      >
        <h2 className="text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl xl:text-[1.8rem]">
          Desenvolvedor focado em{" "}
          <span className="text-primary">Full Stack</span>, interfaces modernas
          e soluções com Inteligência Artificial.
        </h2>

        <p className="max-w-lg text-sm leading-6 text-muted sm:text-base sm:leading-7">
          Construindo aplicações, dashboards interativos e experiências
          digitais que unem tecnologia, funcionalidade e design.
        </p>
      </motion.div>

      {/* Tecnologias */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex max-w-xl flex-wrap gap-2"
      >
        <Badge>React</Badge>
        <Badge>Three.js</Badge>
        <Badge>Node.js</Badge>
        <Badge>Python</Badge>
        <Badge>IA</Badge>
        <Badge>UI/UX</Badge>
      </motion.div>

      {/* Formação */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="max-w-xl text-sm leading-6 text-muted sm:text-base"
      >
        Atualmente curso{" "}
        <span className="font-semibold text-ink">
          Sistemas de Informação na UFMS
        </span>{" "}
        e{" "}
        <span className="font-semibold text-ink">
          Análise e Desenvolvimento de Sistemas na UCDB
        </span>
        .
      </motion.p>

      {/* Ações */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-wrap items-center gap-3"
      >
        <MagneticButton
          href="#projects"
          className="rounded-2xl bg-primary px-6 py-3.5 font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
        >
          Ver Projetos <span className="ml-2">↗</span>
        </MagneticButton>

        <MagneticButton
          href="#contact"
          className="rounded-2xl border border-black/10 bg-white/75 px-6 py-3.5 font-semibold text-ink shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-white hover:shadow-soft"
        >
          Entrar em Contato
        </MagneticButton>
      </motion.div>

      {/* Indicador de rolagem */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 4, 0] }}
        transition={{
          opacity: { delay: 0.9, duration: 0.5 },
          y: { delay: 0.9, duration: 2, repeat: Infinity },
        }}
        className="flex items-center gap-3 pt-0.5"
      >
        <span className="h-px w-8 bg-black/20" />

        <span className="text-[10px] uppercase tracking-[0.25em] text-muted sm:text-xs sm:tracking-[0.3em]">
          Scroll para explorar
        </span>

        <span className="text-lg text-primary">↓</span>
      </motion.div>
    </div>
  );
}
