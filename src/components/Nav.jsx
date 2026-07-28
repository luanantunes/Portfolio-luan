import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const links = [
  { id: "about", label: "Sobre" },
  { id: "experience", label: "Experiência" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) {
        setActive(current.id);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: .6 }}
        className={clsx(
          "fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-500",
          scrolled ? "top-4" : "top-8"
        )}
      >
        <div
          className={clsx(
            "flex items-center gap-2 rounded-full border border-white/40 bg-white/70 backdrop-blur-2xl shadow-xl",
            scrolled ? "px-4 py-3" : "px-6 py-4"
          )}
        >
          <a
            href="#"
            className="mr-4 font-display text-lg font-bold tracking-tight"
          >
            LUAN<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={clsx(
                  "relative rounded-full px-4 py-2 text-sm transition-all",
                  active === link.id
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-md"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="ml-2 md:hidden"
          >
            ☰
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed top-24 left-1/2 z-40 w-72 -translate-x-1/2 rounded-3xl border border-white/40 bg-white/80 p-6 backdrop-blur-2xl shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="text-lg text-muted transition hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}