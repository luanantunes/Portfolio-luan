import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import DatabaseCard from "./DatabaseCard";

import projectsDatabase from "../../data/projectsDatabase";

export default function ProjectDatabase() {
  return (
    <section
      id="project-database"
      className="relative py-32 overflow-hidden"
    >
      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          h-[700px]
          w-[700px]
          rounded-full
          bg-primary/5
          blur-3xl
          pointer-events-none
        "
      />

      <Container>
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Terminal */}

          <div
            className="
              inline-flex
              flex-col
              items-start
              rounded-2xl
              border
              border-white/10
              bg-black/30
              backdrop-blur-xl
              px-6
              py-5
              shadow-soft
              font-mono
              text-left
              mb-8
            "
          >
            <span className="text-primary">
              $ project-database
            </span>

            <span className="text-muted mt-2">
              Initializing projects...
            </span>

            <div
              className="
                mt-4
                h-1.5
                w-64
                rounded-full
                overflow-hidden
                bg-white/10
              "
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.8 }}
                className="
                  h-full
                  bg-gradient-to-r
                  from-primary
                  via-cyan-400
                  to-purple-500
                "
              />
            </div>

            <span
              className="
                mt-3
                text-xs
                uppercase
                tracking-[0.25em]
                text-green-400
              "
            >
              {projectsDatabase.length} PROJECTS FOUND
            </span>
          </div>

          <SectionTitle>
            Project Database
          </SectionTitle>

          <p
            className="
              mt-8
              max-w-3xl
              mx-auto
              text-lg
              leading-8
              text-muted
            "
          >
            Uma coleção dos meus principais projetos,
            estudos e aplicações Full Stack desenvolvidas
            utilizando tecnologias modernas.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-2
          "
        >
          {projectsDatabase.map((project, index) => (
            <DatabaseCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}