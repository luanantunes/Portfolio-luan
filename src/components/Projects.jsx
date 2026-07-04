const projects = [
  {
    title: 'AI Market Intelligence Dashboard',
    description:
      'Dashboard de BI para análise do ecossistema de IA Generativa: comparativo de performance entre LLMs (GPT-4o, Claude, Gemini), tendências de investimento por setor e calculadora de ROI para adoção de IA.',
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
    demo: 'https://ai-market-intelligence-dashboard-qdayimfdayrdyagtiowpeb.streamlit.app/',
    code: 'https://github.com/luanantunes/AI-Market-Intelligence-Dashboard',
    image: '/images/Dashboard-ai-market.png',
  },
  {
    title: 'Academic Performance Analytics',
    description:
      'Dashboard de Ciência de Dados para monitorar desempenho acadêmico: métricas em tempo real, evolução de notas por semestre e análise de correlação entre horas de estudo e resultado.',
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
    demo: 'https://lcukfurq9hvkungsg8mcpy.streamlit.app/',
    code: 'https://github.com/luanantunes/Dashboard-Acad-mico-',
    image: '/images/Dashboard-academic.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-3xl mx-auto">
      <h2 className="font-mono text-amber text-sm mb-6">// projetos</h2>
      <div className="grid gap-5">
        {projects.map((p) => (
          <div key={p.title} className="bg-surface border border-surface-light rounded-lg overflow-hidden hover:border-amber/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber/5 transition-all duration-300">
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover object-top border-b border-surface-light" />
            <div className="p-6">
              <h3 className="font-mono text-lg font-medium text-ink">{p.title}</h3>
              <p className="text-ink/70 mt-2 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs font-mono text-muted border border-surface-light rounded px-2 py-1">{s}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-4 font-mono text-sm">
                <a href={p.demo} target="_blank" rel="noreferrer" className="text-amber hover:underline">ver demo →</a>
                <a href={p.code} target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition">código fonte</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}