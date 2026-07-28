import { motion } from "framer-motion";

export default function FeaturedProject({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl"
    >
      <div className="grid lg:grid-cols-2">

        {/* Imagem */}

        <div className="relative overflow-hidden min-h-[420px]">

          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />

          <div className="absolute top-6 left-6">

            <span className="px-4 py-2 rounded-full bg-primary/90 text-white text-sm font-medium shadow-lg">
              ⭐ Featured Project
            </span>

          </div>

        </div>

        {/* Conteúdo */}

        <div className="p-10 lg:p-14 flex flex-col justify-center">

          <p className="uppercase tracking-[0.25em] text-primary text-sm mb-4">
            {project.subtitle}
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {project.title}
          </h2>

          <p className="text-muted text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">

            {project.stack.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
              >
                {item}
              </span>
            ))}

          </div>

          <div className="flex flex-wrap gap-4">

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 rounded-2xl bg-primary text-white font-semibold transition hover:scale-105"
            >
              🚀 Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              💻 GitHub
            </a>

          </div>

        </div>

      </div>
    </motion.article>
  );
}