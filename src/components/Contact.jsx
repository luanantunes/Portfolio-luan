export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-3xl mx-auto text-center">
      <h2 className="font-mono text-amber text-sm mb-4">// contato</h2>
      <p className="text-xl text-ink/90 mb-8">Bora conversar sobre uma oportunidade?</p>
      <div className="flex flex-wrap justify-center gap-4 font-mono text-sm mb-6">
        <a href="mailto:luanlimaantunes@gmail.com" className="px-5 py-2.5 bg-amber text-bg rounded hover:bg-amber/90 transition">luanlimaantunes@gmail.com</a>
        <a href="https://www.linkedin.com/in/luan-lima-7ba613108/" target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-surface-light rounded hover:border-amber/50 transition">LinkedIn</a>
        <a href="https://github.com/luanantunes" target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-surface-light rounded hover:border-amber/50 transition">GitHub</a>
      </div>
      <a href="/curriculo_luan_lima.pdf" download className="inline-flex items-center gap-2 text-muted hover:text-amber font-mono text-sm transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
        baixar currículo (PDF)
      </a>
    </section>
  );
}