import { motion } from "framer-motion";

const rarityGlow = {
  LEGENDARY: "shadow-yellow-500/30 border-yellow-500/20",
  EPIC: "shadow-purple-500/30 border-purple-500/20",
  MYTHIC: "shadow-pink-500/30 border-pink-500/20",
  SECRET: "shadow-red-500/30 border-red-500/20",
};

const rarityColor = {
  LEGENDARY: "text-yellow-400",
  EPIC: "text-purple-400",
  MYTHIC: "text-pink-400",
  SECRET: "text-red-400",
};

export default function DatabaseCard({
  project,
  index,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className={`
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      backdrop-blur-xl
      p-8
      shadow-2xl
      ${rarityGlow[project.rarity]}
`}
    >
      {/* Glow */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
        bg-gradient-to-br
        from-primary/10
        via-transparent
        to-cyan-500/10
        "
      />

      <div className="relative z-10">

        {/* Header */}

        <p
          className="
          text-xs
          font-mono
          tracking-[0.3em]
          text-primary
          uppercase
          "
        >
          PROJECT_{project.id}.exe
        </p>

        <h3
          className="
          mt-3
          text-3xl
          font-black
          "
        >
          {project.title}
        </h3>


        {/* Status e Rarity */}

        <div className="mt-6 flex gap-3 flex-wrap">

          <span
            className="
            rounded-full
            border
            border-green-500/20
            bg-green-500/10
            px-4
            py-1
            text-sm
            font-bold
            text-green-400
            "
          >
            {project.status}
          </span>

          <span
            className="
            rounded-full
            border
            border-purple-500/20
            bg-purple-500/10
            px-4
            py-1
            text-sm
            font-bold
            text-purple-400
            "
          >
            {project.rarity}
          </span>

        </div>

        {/* Classification */}

        <div className="mt-5">

          <span
            className="
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            px-4
            py-1
            text-xs
            font-bold
            text-cyan-300
            "
          >

            {project.classification}

          </span>

        </div>



        {/* BADGES */}

        <div className="mt-6">

          <span className="font-mono text-sm text-muted">
            BADGES
          </span>

          <div className="flex flex-wrap gap-2 mt-3">

            {project.badges.map((badge) => (

              <span
                key={badge}
                className="
                rounded-full
                bg-primary/10
                border
                border-primary/20
                px-3
                py-1
                text-xs
                font-bold
                "
              >

                {badge}

              </span>

            ))}

          </div>

        </div>

        {/* Category */}

        <div className="mt-6">

          <span className="font-mono text-sm text-muted">
            CATEGORY
          </span>

          <p className="mt-2">
            {project.category}
          </p>

        </div>


        {/* Complexity */}

        <div className="mt-6">

          <span className="font-mono text-sm text-muted">
            COMPLEXITY
          </span>

          <p className="mt-2 text-yellow-400 font-bold">
            {project.complexity}/10
          </p>

        </div>


        {/* Progress */}

        <div className="mt-6">

          <span className="font-mono text-sm text-muted">
            DEVELOPMENT
          </span>

          <div
            className="
            mt-2
            h-2
            rounded-full
            overflow-hidden
            bg-white/10
            "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: `${project.progress}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.5,
              }}
              className="
              h-full
              bg-gradient-to-r
              from-primary
              via-cyan-400
              to-purple-500
              "
            />
          </div>

          <p className="mt-2 text-sm text-muted">
            {project.progress}% COMPLETE
          </p>

        </div>


        {/* Technologies */}

        <div className="mt-6">

          <span className="font-mono text-sm text-muted">
            TECHNOLOGIES
          </span>

          <div className="flex flex-wrap gap-2 mt-3">

            {project.technologies.map((tech) => (

              <span
                key={tech}
                className="
                rounded-full
                border
                border-primary/20
                px-3
                py-1
                text-sm
                "
              >
                {tech}
              </span>

            ))}

          </div>

        </div>


        {/* Features */}

        <div className="mt-6">

          <span className="font-mono text-sm text-muted">
            FEATURES
          </span>

          <div className="mt-3 space-y-2">

            {project.features.map((feature) => (

              <p key={feature}>
                ✓ {feature}
              </p>

            ))}

          </div>

        </div>

        {/* Achievements */}

        <div className="mt-6">

          <span className="font-mono text-sm text-muted">
            ACHIEVEMENTS
          </span>

          <div className="mt-3 flex flex-wrap gap-2">

            {project.achievements.map((achievement) => (

              <span
                key={achievement}
                className="
            rounded-full
            bg-yellow-500/10
            border
            border-yellow-500/20
            px-3
            py-1
            text-xs
            font-bold
            text-yellow-300
                            "
              >

                🏆 {achievement}
              </span>

            ))}

          </div>

        </div>
        {/* Release */}

        <div className="mt-6">

          <span className="font-mono text-sm text-muted">
            ESTIMATED RELEASE
          </span>

          <p className="mt-2">
            {project.estimatedRelease}
          </p>

        </div>



        {/* System Info */}

        <div
          className="
          mt-8
          rounded-2xl
          border
          border-white/10
          bg-black/40
          p-5
          font-mono
          text-sm
          space-y-2
          "
        >
          <p className="text-green-400">
            {">"} PROJECT STATUS: {project.status}
          </p>

          <p className="text-cyan-400">
            {">"} RARITY: {project.rarity}
          </p>

          <p className="text-yellow-400">
            {">"} COMPLEXITY: {project.complexity}/10
          </p>

          <p className="text-purple-400">
            {">"} DEVELOPMENT: {project.progress}%
          </p>
        </div>

        {/* Description */}

        <p
          className="
          mt-8
          leading-7
          text-muted
          "
        >
          {project.description}
        </p>

        {/* PROJECT STATS */}

        <div className="mt-8">

          <span className="font-mono text-sm text-muted">
            PROJECT STATS
          </span>

          <div
            className="
            mt-4
            rounded-2xl
            border
            border-white/10
            bg-black/30
            p-5
            space-y-3
           "
          >

            <p>

              Lines of Code:
              {" "}
              <span className="text-primary">
                {project.linesOfCode}
              </span>

            </p>

            <p>

              Hours Worked:
              {" "}
              <span className="text-primary">
                {project.hoursWorked}
              </span>

            </p>

            <p>

              Version:
              {" "}
              <span className="text-primary">
                {project.version}
              </span>

            </p>

            <p>

              Commits:
              {" "}
              <span className="text-primary">
                {project.commits}
              </span>

            </p>

            <p>

              Components:
              {" "}
              <span className="text-primary">
                {project.components}
              </span>

            </p>

            <p>

              Last Update:
              {" "}
              <span className="text-primary">
                {project.lastUpdate}
              </span>

            </p>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4 flex-wrap">

          <button
            disabled={project.github === "#"}
            className="
            rounded-xl
            border
            border-primary/20
            px-5
            py-3
            transition
            hover:bg-primary/10
           isabled:opacity-40
           "
          >

            {project.github === "#"
              ? "Private Repository"
              : "GitHub"}

          </button>



          <button
            disabled={project.live === "#"}
            className="
            rounded-xl
            border
            border-primary/20
            px-5
            py-3
            transition
            hover:bg-primary/10
            disabled:opacity-40
            "
          >

            {project.live === "#"
              ? "Unavailable"
              : "Live Demo"}

          </button>

        </div>
              </div>

    </motion.article>
  );
}