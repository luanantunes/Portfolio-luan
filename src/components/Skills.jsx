import { motion } from "framer-motion";
import SkillsGrid from "./skills/SkillsGrid";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="uppercase tracking-[0.35em] text-amber text-sm font-mono mb-4">
          Tecnologias
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
          Ferramentas que utilizo
        </h2>

        <p className="text-muted max-w-3xl mx-auto leading-8">
          Busco constantemente evoluir minhas habilidades em desenvolvimento
          Full Stack, Inteligência Artificial, Ciência de Dados e Engenharia de
          Software, sempre utilizando tecnologias modernas e boas práticas.
        </p>
      </motion.div>

      <SkillsGrid />
    </section>
  );
}