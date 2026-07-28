import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import JourneyCard from "./JourneyCard";
import JourneyLine from "./JourneyLine";

import journey from "../../data/journeyData";

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[900px]
            h-[900px]
            rounded-full
            bg-primary/5
            blur-3xl
          "
        />
      </div>

      <Container>

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-28"
        >

          <SectionTitle>
            My Journey
          </SectionTitle>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-8
              text-lg
              leading-8
              text-muted
            "
          >
            Cada etapa representa um passo importante da minha evolução
            como desenvolvedor.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          <JourneyLine />

          <div className="space-y-28">

            {journey.map((item, index) => (

              <JourneyCard
                key={item.year}
                item={item}
                index={index}
              />

            ))}

            {/* Card Final */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .2 }}
              className="flex justify-center"
            >
              <div
                className="
                  max-w-xl
                  rounded-3xl
                  border
                  border-primary/20
                  bg-white/60
                  backdrop-blur-xl
                  p-10
                  text-center
                  shadow-soft
                "
              >

                <div className="text-5xl mb-5">
                  🚀
                </div>

                <h3 className="text-3xl font-bold">
                  Você está aqui.
                </h3>

                <p className="mt-5 leading-8 text-muted">
                  Cada projeto representa mais um passo da minha evolução.
                  A próxima conquista ainda está sendo construída.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </Container>

    </section>
  );
}