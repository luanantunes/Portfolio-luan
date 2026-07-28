import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import StatCard from "./StatCard";

import stats from "../../data/stats";

export default function SystemStatus() {
  return (
    <section
      id="system-status"
      className="relative py-32 overflow-hidden"
    >
      {/* Glow Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            w-[800px]
            h-[800px]
            rounded-full
            bg-primary/5
            blur-3xl
          "
        />
      </div>

      <Container>

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >

          <SectionTitle>
            System Status
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
            Uma visão geral da minha jornada como desenvolvedor,
            tecnologias dominadas, projetos entregues e evolução constante
            na área de desenvolvimento de software.
          </p>

        </motion.div>

        {/* Cards */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
            />
          ))}
        </div>

      </Container>

    </section>
  );
}