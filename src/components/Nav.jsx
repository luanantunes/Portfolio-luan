import { useState } from 'react';

const links = [
  { href: '#about', label: 'sobre' },
  { href: '#experience', label: 'experiência' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projetos' },
  { href: '#contact', label: 'contato' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-surface-light">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-sm text-amber">luan.dev</span>

        <div className="hidden sm:flex gap-6 font-mono text-sm">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="relative text-muted hover:text-ink transition-colors group">
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-amber transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="sm:hidden text-ink" aria-label="Abrir menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="sm:hidden flex flex-col px-6 pb-4 gap-3 font-mono text-sm bg-bg/95">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-muted hover:text-amber transition-colors py-1">
              {link.label}
            </a>
          ))}
          <div className="flex gap-5 pt-3 mt-2 border-t border-surface-light">
            <a href="https://github.com/luanantunes" target="_blank" rel="noreferrer" className="text-muted hover:text-amber transition-colors" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.5-3.88-1.5-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.56-.3-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.18-3.08-.12-.3-.51-1.5.11-3.12 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.62.24 2.82.12 3.12.74.8 1.18 1.82 1.18 3.08 0 4.43-2.7 5.4-5.27 5.68.42.36.78 1.08.78 2.18v3.24c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/luan-lima-7ba613108/" target="_blank" rel="noreferrer" className="text-muted hover:text-amber transition-colors" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>
            </a>
            <a href="mailto:luanlimaantunes@gmail.com" className="text-muted hover:text-amber transition-colors" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 8.4L4.2 6H19.8L12 12.4ZM3 7.5v10.5h18V7.5l-9 7.2-9-7.2Z"/></svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}