import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  variant = "primary",
  target,
  rel,
}) {
  const styles = {
    primary:
      "bg-amber text-bg hover:shadow-[0_0_30px_rgba(233,196,106,.45)]",

    secondary:
      "border border-surface-light text-ink hover:border-amber hover:text-amber",

    ghost:
      "text-muted hover:text-amber",
  };

  const className = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    px-6
    py-3
    font-medium
    transition-all
    duration-300
    ${styles[variant]}
  `;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        target={target}
        rel={rel}
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}