import { motion } from "framer-motion";

import HeroContent from "./hero/HeroContent";
import HeroDashboard from "./hero/HeroDashboard";
import HeroScroll from "./hero/HeroScroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
      "
    >
      <div className="container mx-auto px-6">

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
          "
        >

          {/* Lado esquerdo */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
            }}
          >
            <HeroContent />
          </motion.div>

          {/* Lado direito */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: .9,
              delay: .25,
            }}
            className="relative flex justify-center"
          >
            <HeroDashboard />
          </motion.div>

        </div>

      </div>

      <HeroScroll />

    </section>
  );
}