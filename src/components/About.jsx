import { motion } from "framer-motion";
import AboutCards from "./about/AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Texto */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.35em] text-amber text-sm font-mono mb-4">
            Sobre mim
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-8">
            Transformando ideias em experiências digitais modernas.
          </h2>

          <p className="text-muted leading-8 mb-6">
            Atualmente curso <strong className="text-ink">Análise e Desenvolvimento de Sistemas</strong> na UCDB
            e <strong className="text-ink">Sistemas de Informação</strong> na UFMS,
            buscando aprofundar conhecimentos em desenvolvimento Full Stack,
            Engenharia de Software, Inteligência Artificial e Data Analytics.
          </p>

          <p className="text-muted leading-8 mb-10">
            Gosto de desenvolver aplicações que unem design,
            performance e tecnologia, criando interfaces intuitivas
            e soluções que realmente geram valor.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-amber text-bg font-semibold hover:scale-105 transition"
            >
              Ver Projetos
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-xl border border-surface-light hover:border-amber transition"
            >
              Contato
            </a>

          </div>

        </motion.div>

        {/* Cards */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <AboutCards />
        </motion.div>

      </div>
    </section>
  );
}