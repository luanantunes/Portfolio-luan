import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "LinkedIn",
    description: "Conecte-se comigo",
    href: "https://www.linkedin.com/in/luan-lima-7ba613108/",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5" aria-hidden="true">
        <path d="M4 4h16v16H4z" />
        <path d="M8 10v7M8 7v.01M12 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    description: "Veja meus projetos",
    href: "https://github.com/luanantunes",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5" aria-hidden="true">
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7A5.2 5.2 0 0 0 18.8 5a4.8 4.8 0 0 0-.1-3S17.5 1.7 15 3.5a13.5 13.5 0 0 0-7 0C5.5 1.7 4.3 2 4.3 2a4.8 4.8 0 0 0-.1 3 5.2 5.2 0 0 0-1.4 3.7c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 8 18.1V22" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      {/* Iluminação ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.09] blur-[110px]"
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#11151D]/35 p-6 text-center shadow-[0_25px_80px_rgba(0,0,0,0.16)] backdrop-blur-md sm:p-10 lg:p-14"
        >
          {/* Reflexos decorativos */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-primary/[0.12] blur-[80px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-cyan-400/[0.08] blur-[80px]"
          />

          <div className="relative">
            {/* Identificação */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
                // vamos conversar
              </span>
            </div>

            {/* Chamada principal */}
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bora construir algo{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                incrível?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Estou aberto a oportunidades profissionais, estágios e projetos
              em desenvolvimento de software, aplicações web e inteligência
              artificial.
            </p>

            {/* E-mail principal */}
            <div className="mt-9 flex flex-col items-center gap-3">
              <a
                href="mailto:luanlimaantunes@gmail.com"
                className="group inline-flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-primary px-5 py-4 font-semibold text-white shadow-[0_8px_30px_rgba(124,131,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_38px_rgba(124,131,255,0.3)] sm:w-auto sm:px-7"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5 shrink-0" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                <span className="break-all text-sm sm:text-base">
                  luanlz.tech@gmail.com
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">
                Respondo pelo e-mail
              </span>
            </div>

            {/* Redes */}
            <div className="mx-auto mt-9 grid max-w-lg gap-3 sm:grid-cols-2">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-white/[0.07]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors group-hover:border-primary/25 group-hover:text-primary">
                    {link.icon}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-white">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-xs text-slate-400">
                      {link.description}
                    </span>
                  </span>

                  <span className="text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary">
                    ↗
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Currículo */}
            <div className="mt-9 border-t border-white/10 pt-7">
              <a
                href="/curriculo_luan_lima.pdf"
                download
                className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.035] px-5 py-3.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.07] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden="true"
                >
                  <path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                </svg>
                <span>Baixar currículo <span className="text-slate-500">(PDF)</span></span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Rodapé */}
        <div className="mt-7 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
            Desenvolvido por Luan Lima
          </p>
          <p className="text-xs text-slate-500">
            Construindo, aprendendo e evoluindo.
          </p>
        </div>
      </div>
    </section>
  );
}