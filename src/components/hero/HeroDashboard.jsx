
import { motion } from "framer-motion";
import BootSequence from "./BootSequence";

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="relative w-full"
    >
      {/* Iluminação ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-primary/15 opacity-60 blur-[55px]"
      />

      {/* Painel principal */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#11151D]/95 text-white shadow-[0_25px_70px_rgba(15,20,35,0.28)] backdrop-blur-2xl"
      >
        {/* Reflexos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-primary/[0.07]"
        />

        <div className="relative">
          {/* Cabeçalho minimalista, sem bolinhas coloridas */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 sm:px-6">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(124,131,255,0.65)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300 sm:text-xs">
                developer-os
              </span>
            </div>

            <span className="font-mono text-[10px] text-slate-500">
              v1.0
            </span>
          </div>

          <div className="space-y-5 p-4 sm:space-y-5 sm:p-5">
            {/* Terminal */}
            <section>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  System Terminal
                </span>

                <span className="flex items-center gap-1.5 rounded-md border border-green-400/20 bg-green-400/[0.07] px-2 py-1 font-mono text-[9px] text-green-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  ONLINE
                </span>
              </div>

              <BootSequence />
            </section>

            {/* Perfil e informações compactas */}
            <section className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 font-mono text-sm font-bold text-primary">
                  LL
                </div>

                <div>
                  <h3 className="font-semibold tracking-wide text-white">
                    Luan Lima
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Developer · Brazil
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/[0.08] pt-4">
                <Info label="Education" value="UFMS · UCDB" />
                <Info label="Focus" value="Full Stack · IA" />
                <Info label="Stack" value="React · Python" />
                <Info label="Mission" value="Digital experiences" />
              </div>
            </section>

            {/* Métricas compactas */}
            <section>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Developer Overview
                </span>

                <span className="font-mono text-[9px] text-slate-500">
                  PROFILE / 01
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <MiniStat number="01" title="Projects" />
                <MiniStat number="3D" title="Creative" />
                <MiniStat number="AI" title="Explore" />
                <MiniStat number="∞" title="Learning" />
              </div>
            </section>

            {/* Status */}
            <div className="flex items-center justify-between border-t border-white/10 pt-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-500">
                System status
              </span>

              <span className="flex items-center gap-2 text-[11px] font-medium text-green-300">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Operational
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Info({ label, value }) {
  return (
    <div className="min-w-0 space-y-1">
      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>

      <p className="text-xs font-medium leading-5 text-slate-100 sm:text-sm">
        {value}
      </p>
    </div>
  );
}

function MiniStat({ number, title }) {
  return (
    <div className="min-w-0 rounded-xl border border-white/[0.08] bg-white/[0.035] px-2 py-3 text-center transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.07]">
      <h3 className="bg-gradient-to-r from-primary via-cyan-300 to-purple-400 bg-clip-text text-xl font-black tracking-tight text-transparent sm:text-2xl">
        {number}
      </h3>

      <p className="mt-1 truncate text-[9px] font-medium text-slate-400 sm:text-[10px]">
        {title}
      </p>
    </div>
  );
}
