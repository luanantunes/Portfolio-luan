
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
        flex
        min-h-screen
        items-center
        overflow-hidden
        py-24
        lg:py-20
      "
    >
      <div className="container relative z-10 mx-auto w-full px-6 xl:px-10">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-start
            lg:gap-10
            xl:gap-16
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 min-w-0"
          >
            <HeroContent />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              relative
              z-10
              flex
              min-w-0
              justify-center
              lg:justify-end
              lg:pt-2
            "
          >
            <div className="w-full max-w-[490px]">
              <HeroDashboard />
            </div>
          </motion.div>
        </div>
      </div>

      <HeroScroll />
    </section>
  );
}
