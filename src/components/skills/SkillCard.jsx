import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  return (
    <motion.article
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7"
    >
      {/* Glow */}

      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${skill.color}`}
      />

      {/* Header */}

      <div className="flex items-center gap-4 mb-8">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color}
          flex items-center justify-center text-2xl shadow-lg`}
        >
          {skill.icon}
        </div>

        <div>
          <h3 className="text-2xl font-bold">
            {skill.title}
          </h3>

          <p className="text-sm text-muted">
            {skill.technologies.length} tecnologias
          </p>
        </div>
      </div>

      {/* Tecnologias */}

      <div className="space-y-7">
        {skill.technologies.map((tech) => (
          <div
            key={`${skill.title}-${tech.name}`}
          >
            <div className="flex justify-between mb-2">
              <div>
                <h4 className="font-semibold">
                  {tech.name}
                </h4>

                <p className="text-sm text-muted">
                  {tech.description}
                </p>
              </div>

              <span className="font-bold text-primary">
                {tech.level}%
              </span>
            </div>

            {/* Barra */}

            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${tech.level}%`,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}