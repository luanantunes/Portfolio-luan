import { useEffect, useState } from 'react';

export default function SocialSidebar() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-4 sm:left-6 bottom-0 z-40 hidden sm:flex flex-col items-center gap-4">
        <a href="https://github.com/luanantunes" target="_blank" rel="noreferrer" className="text-muted hover:text-amber transition-colors" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.5-3.88-1.5-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.56-.3-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.18-3.08-.12-.3-.51-1.5.11-3.12 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.62.24 2.82.12 3.12.74.8 1.18 1.82 1.18 3.08 0 4.43-2.7 5.4-5.27 5.68.42.36.78 1.08.78 2.18v3.24c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/luan-lima-7ba613108/" target="_blank" rel="noreferrer" className="text-muted hover:text-amber transition-colors" aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>
        </a>
        <a href="mailto:luanlimaantunes@gmail.com" className="text-muted hover:text-amber transition-colors" aria-label="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 8.4L4.2 6H19.8L12 12.4ZM3 7.5v10.5h18V7.5l-9 7.2-9-7.2Z"/></svg>
        </a>
        <div className="w-px h-20 bg-surface-light" />
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-surface border border-surface-light flex items-center justify-center text-amber hover:border-amber/50 hover:-translate-y-1 transition-all ${
          showTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>
    </>
  );
}