import { motion } from "framer-motion";
import useInView from "../hooks/useInView";

const responsibilities = [
  "Suporte técnico a usuários internos, solucionando demandas de hardware, software e conectividade.",
  "Atendimento e registro de chamados, garantindo organização do fluxo de solicitações.",
  "Instalação, configuração e manutenção de equipamentos e sistemas operacionais.",
  "Suporte na configuração e monitoramento de redes locais.",
];

export default function Experience() {
  const [ref, isVisible] = useInView();

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-24 sm:py-28"
    >
      {/* Luz ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[100px]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            // trajetória profissional
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Experiência<span className="text-primary">.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Experiência prática com infraestrutura, suporte técnico e
            manutenção de ambientes de TI.
          </p>
        </motion.div>

        {/* Card de experiência */}
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <article className="group relative">
            {/* Borda luminosa sutil */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 via-white/[0.04] to-cyan-400/20 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#11151D]/35 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-md sm:p-8 lg:p-10">
              {/* Reflexo decorativo */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-primary/[0.08] blur-[70px]"
              />

              <div className="relative">
                {/* Identificação */}
                <div className="flex flex-col gap-5 border-b border-white/[0.09] pb-7 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-6 w-6 text-primary"
                        aria-hidden="true"
                      >
                        <rect x="3" y="7" width="18" height="13" rx="2" />
                        <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
                        Experiência profissional
                      </p>

                      <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                        Estagiário de Infraestrutura de TI
                      </h3>

                      <p className="mt-2 text-sm font-medium text-slate-300 sm:text-base">
                        Quality Sistemas
                      </p>
                    </div>
                  </div>

                  <div className="flex w-fit shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="font-mono text-[10px] text-slate-300 sm:text-xs">
                      ABR 2024 — OUT 2024
                    </span>
                  </div>
                </div>

                {/* Responsabilidades */}
                <div className="pt-7">
                  <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                    Principais atividades
                  </p>

                  <ul className="space-y-4">
                    {responsibilities.map((item, index) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/[0.08] font-mono text-[10px] text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm leading-7 text-slate-300 sm:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rodapé */}
                <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-white/[0.09] pt-5">
                  {["Infraestrutura", "Suporte técnico", "Redes", "Hardware"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] text-slate-400 transition-colors duration-300 hover:border-primary/30 hover:text-primary sm:text-xs"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}