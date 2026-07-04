import useInView from '../hooks/useInView';

const skills = [
  'Python', 'JavaScript', 'Java', 'HTML', 'CSS',
  'React', 'Lógica de Programação', 'Windows', 'Linux', 'Git',
];

export default function Skills() {
  const [ref, isVisible] = useInView();

  return (
    <section id="skills" className="px-6 py-20 max-w-3xl mx-auto">
      <h2 className="font-mono text-amber text-sm mb-6">// skills</h2>
      <div ref={ref} className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span
            key={skill}
            style={{ transitionDelay: `${i * 60}ms` }}
            className={`px-4 py-2 bg-surface border border-surface-light rounded font-mono text-sm text-ink/90 hover:border-amber/50 hover:scale-105 hover:text-amber transition-all duration-500 cursor-default ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}