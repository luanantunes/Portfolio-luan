import useInView from '../hooks/useInView';

const education = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    org: 'UCDB',
    status: 'Em andamento',
  },
  {
    title: 'Sistemas de Informação',
    org: 'UFMS',
    status: 'Em andamento',
  },
];

const certificates = [
  { title: 'Claude 101', org: 'Anthropic', date: '2026' },
  { title: 'Introduction to Generative AI', org: 'Google Cloud', date: '2026' },
  { title: 'Estrutura de Dados em Python', org: 'Senac Hub Academy', date: '2022' },
];

export default function Education() {
  const [ref, isVisible] = useInView();

  return (
    <section id="education" className="px-6 py-20 max-w-3xl mx-auto">
      <h2 className="font-mono text-amber text-sm mb-6">// formação</h2>
      <div ref={ref} className="grid gap-4 mb-10">
        {education.map((item, i) => (
          <div
            key={item.title}
            style={{ transitionDelay: `${i * 100}ms` }}
            className={`bg-surface border border-surface-light rounded-lg p-5 flex items-center justify-between transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div>
              <h3 className="font-mono text-ink">{item.title}</h3>
              <p className="text-muted text-sm mt-1">{item.org}</p>
            </div>
            <span className="text-xs font-mono text-amber border border-amber/30 rounded px-2 py-1">
              {item.status}
            </span>
          </div>
        ))}
      </div>

      <h3 className="font-mono text-muted text-xs mb-4">certificações</h3>
      <div className="flex flex-wrap gap-3">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="bg-surface border border-surface-light rounded px-4 py-3 hover:border-amber/40 transition-colors"
          >
            <p className="font-mono text-sm text-ink">{cert.title}</p>
            <p className="text-xs text-muted mt-0.5">{cert.org}{cert.date && ` · ${cert.date}`}</p>
          </div>
        ))}
      </div>
    </section>
  );
}