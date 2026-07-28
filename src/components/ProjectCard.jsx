import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Imagem */}
      <div className="relative overflow-hidden h-56">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs text-white border border-white/10">
          {project.status}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="p-7">

        <p className="text-primary text-sm font-medium mb-2">
          {project.subtitle}
        </p>

        <h3 className="text-2xl font-bold mb-4">
          {project.title}
        </h3>

        <p className="text-muted leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Stack */}

        <div className="flex flex-wrap gap-2 mb-8">

          {project.stack.map((tech) => (

            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Botões */}

        <div className="flex gap-3">

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-xl bg-primary text-white py-3 text-center font-medium transition hover:opacity-90"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-xl border border-white/15 py-3 text-center transition hover:bg-white/10"
          >
            GitHub
          </a>

        </div>

      </div>
    </motion.article>
  );
}