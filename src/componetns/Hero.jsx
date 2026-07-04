import { useEffect, useState } from 'react';

const lines = [
  { prompt: '$ whoami', output: 'Luan Antunes de Lima' },
  { prompt: '$ cat cargo.txt', output: 'Estudante de ADS (UCDB) e Sistemas de Informacao (UFMS)' },
];

export default function Hero() {
  const [typed, setTyped] = useState(['', '']);
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState('prompt');
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setDone(true);
      return;
    }
    const current = phase === 'prompt' ? lines[lineIndex].prompt : lines[lineIndex].output;

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setTyped((prev) => {
          const copy = [...prev];
          copy[lineIndex] = current.slice(0, charIndex + 1);
          return copy;
        });
        setCharIndex((c) => c + 1);
      }, phase === 'prompt' ? 40 : 15);
      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      if (phase === 'prompt') {
        setPhase('output');
        setCharIndex(0);
        setTyped((prev) => {
          const copy = [...prev];
          copy[lineIndex] = current + '\n';
          return copy;
        });
      } else {
        setLineIndex((l) => l + 1);
        setPhase('prompt');
        setCharIndex(0);
      }
    }, 300);
    return () => clearTimeout(pause);
  }, [charIndex, phase, lineIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl">
        <div className="rounded-lg overflow-hidden border border-surface-light shadow-2xl">
          <div className="bg-surface-light px-4 py-2 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-coral/70" />
            <span className="w-3 h-3 rounded-full bg-amber/70" />
            <span className="w-3 h-3 rounded-full bg-muted/40" />
            <span className="ml-2 text-xs text-muted font-mono">luan@portfolio: ~</span>
          </div>
          <div className="bg-surface px-6 py-8 font-mono text-sm sm:text-base leading-relaxed min-h-[220px]">
            {typed.map((line, i) => {
              const [promptPart, outputPart] = line.split('\n');
              return (
                <div key={i} className="mt-1 first:mt-0">
                  <p className="text-muted">{promptPart}</p>
                  {outputPart !== undefined && (
                    <p className={i === 0 ? 'text-amber mt-1' : 'mt-1'}>{outputPart}</p>
                  )}
                </div>
              );
            })}
            {done && (
              <p className="mt-4 text-muted">
                $ echo status<span className="cursor-blink">_</span>
              </p>
            )}
          </div>
        </div>
        <div
          className={`mt-8 flex flex-wrap gap-3 transition-opacity duration-700 ${
            done ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a href="#projects" className="px-5 py-2.5 bg-amber text-bg font-mono text-sm font-medium rounded hover:bg-amber/90 hover:-translate-y-0.5 transition-all">ver projetos</a>
          <a href="#contact" className="px-5 py-2.5 border border-surface-light font-mono text-sm rounded hover:border-amber/50 hover:-translate-y-0.5 transition-all">contato</a>
        </div>
      </div>
    </section>
  );
}