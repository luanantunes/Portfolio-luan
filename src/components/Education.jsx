import { motion } from "framer-motion";
import useInView from "../hooks/useInView";

const education = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    org: "UCDB",
    status: "Concluído",
    code: "EDU / 01",
    icon: "academic",
  },
  {
    title: "Sistemas de Informação",
    org: "UFMS",
    status: "Em andamento",
    code: "EDU / 02",
    icon: "systems",
  },
];

const certificates = [
  {
    title: "Claude 101",
    org: "Anthropic",
    date: "2026",
    category: "Inteligência Artificial",
  },
  {
    title: "Introduction to Generative AI",
    org: "Google Cloud",
    date: "2026",
    category: "Inteligência Artificial",
  },
  {
    title: "Estrutura de Dados em Python",
    org: "Senac Hub Academy",
    date: "2022",
    category: "Programação",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-primary sm:text-xs">
        {eyebrow}
      </p>
      <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        {title}<span className="text-primary">.</span>
      </h3>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function EducationCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="group relative h-full"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/25 via-white/[0.04] to-cyan-400/20 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#11151D]/35 p-5 shadow-[0_15px_45px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#11151D]/45 sm:p-6">
        <div className="mb-6 flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted">
            {item.code}
          </span>
          <span className="rounded-lg border border-primary/25 bg-primary/10 px-2.5 py-1.5 font-mono text-[10px] text-primary sm:text-xs">
            {item.status}
          </span>
        </div>

        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
          {item.icon === "academic" ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="m2 10 10-6 10 6-10 6-10-6Z" />
              <path d="M6 12.5V17c3.5 3 8.5 3 12 0v-4.5M22 10v6" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
          )}
        </div>

        <h4 className="text-lg font-bold leading-snug text-white sm:text-xl">
          {item.title}
        </h4>

        <p className="mt-2 text-sm text-slate-400">{item.org}</p>

        <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-xs text-slate-400">
            Formação acadêmica
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function CertificateCard({ cert, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-white/15 bg-[#11151D]/30 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-[#11151D]/45">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 3 14.8 8.7 21 9.6l-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
            </svg>
          </span>
          <span className="font-mono text-xs text-slate-400">
            {cert.date}
          </span>
        </div>

        <h4 className="text-base font-semibold leading-snug text-white transition-colors group-hover:text-primary sm:text-lg">
          {cert.title}
        </h4>

        <p className="mt-2 text-sm text-slate-400">{cert.org}</p>

        <div className="mt-5 border-t border-white/[0.08] pt-4">
          <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] text-slate-400 sm:text-xs">
            {cert.category}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Education() {
  const [ref, isVisible] = useInView();

  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[100px]"
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-5xl transition-all duration-700 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        <div className="mb-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            // formação
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Conhecimento em evolução<span className="text-primary">.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Formação acadêmica e aprendizado contínuo para desenvolver
            soluções cada vez melhores.
          </p>
        </div>

        <section aria-label="Formação acadêmica">
          <SectionHeading
            eyebrow="01 / Academic background"
            title="Formação acadêmica"
            description="Minha trajetória universitária e os conhecimentos que desenvolvo ao longo dos cursos."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {education.map((item, index) => (
              <EducationCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </section>

        <section aria-label="Certificações" className="mt-16 sm:mt-20">
          <SectionHeading
            eyebrow="02 / Certifications"
            title="Certificações"
            description="Cursos e certificações complementares em programação e inteligência artificial."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={cert.title}
                cert={cert}
                index={index}
              />
            ))}
          </div>
        </section>

        <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted sm:text-xs">
            Sempre aprendendo · Sempre evoluindo
          </p>
        </div>
      </div>
    </section>
  );
}