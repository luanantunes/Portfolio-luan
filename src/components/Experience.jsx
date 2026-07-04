import useInView from '../hooks/useInView';

export default function Experience() {
  const [ref, isVisible] = useInView();

  return (
    <section id="experience" className="px-6 py-20 max-w-3xl mx-auto">
      <h2 className="font-mono text-amber text-sm mb-6">// experiência</h2>
      <div ref={ref} className={`bg-surface border border-surface-light rounded-lg p-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-mono text-ink text-lg">Estagiário de Infraestrutura de TI</h3>
          <span className="text-xs font-mono text-muted">Abril 2024 – Outubro 2024</span>
        </div>
        <p className="text-amber text-sm mt-1 font-mono">Quality Sistemas</p>
        <ul className="mt-4 space-y-2 text-ink/70 text-sm leading-relaxed list-disc list-inside">
          <li>Suporte técnico a usuários internos, solucionando demandas de hardware, software e conectividade</li>
          <li>Atendimento e registro de chamados, garantindo organização do fluxo de solicitações</li>
          <li>Instalação, configuração e manutenção de equipamentos e sistemas operacionais</li>
          <li>Suporte na configuração e monitoramento de redes locais</li>
        </ul>
      </div>
    </section>
  );
}