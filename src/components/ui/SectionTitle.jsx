import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5 }}
      className="mb-16"
    >
      <p className="font-mono text-primary mb-2">
        {subtitle}
      </p>

      <h2 className="font-display text-5xl font-bold">
        {title}
      </h2>
    </motion.div>
  );
}