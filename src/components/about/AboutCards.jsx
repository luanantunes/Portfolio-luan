import { motion } from "framer-motion";

const cards = [
  {
    emoji: "🎓",
    title: "Formação",
    text: "Análise e Desenvolvimento de Sistemas (UCDB) e Sistemas de Informação (UFMS).",
  },
  {
    emoji: "💻",
    title: "Desenvolvimento",
    text: "React, JavaScript, Python, APIs, Node.js e interfaces modernas.",
  },
  {
    emoji: "🤖",
    title: "Inteligência Artificial",
    text: "Dashboards, automações, análise de dados e aplicações com IA Generativa.",
  },
  {
    emoji: "🚀",
    title: "Objetivo",
    text: "Construir produtos de alta qualidade e evoluir como Desenvolvedor Full Stack.",
  },
];

export default function AboutCards() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          className="rounded-2xl border border-surface-light bg-surface/60 backdrop-blur-xl p-6 transition-all"
        >
          <div className="text-3xl mb-4">
            {card.emoji}
          </div>

          <h3 className="text-lg font-semibold text-ink mb-2">
            {card.title}
          </h3>

          <p className="text-muted leading-relaxed text-sm">
            {card.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}