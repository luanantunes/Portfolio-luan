import { motion } from "framer-motion";
import projects from "../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-32 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="max-w-3xl mb-20"
        >
          <span className="uppercase tracking-[0.35em] text-primary text-sm">
            Selected Work
          </span>

          <h2 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight">
            Projetos que transformam ideias em experiências digitais.
          </h2>

          <p className="mt-8 text-lg text-muted leading-relaxed">
            Estes projetos representam minha evolução como desenvolvedor,
            explorando desenvolvimento web moderno, dashboards interativos,
            visualização de dados, inteligência artificial e interfaces
            altamente responsivas.
          </p>
        </motion.div>

        {/* Featured */}

        {featured && (
          <div className="mb-24">
            <FeaturedProject project={featured} />
          </div>
        )}

        {/* Grid */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            staggerChildren: .15
          }}
          className="grid md:grid-cols-2 gap-8"
        >
          {others.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}