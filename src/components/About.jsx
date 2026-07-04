import { useEffect, useRef, useState } from 'react';

export default function About() {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const speed = 0.08;
      setOffset(rect.top * speed);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="about" className="px-6 py-20 max-w-3xl mx-auto overflow-hidden">
      <div ref={ref} style={{ transform: `translateY(${offset}px)` }}>
        <h2 className="font-mono text-amber text-sm mb-2">// sobre</h2>
        <p className="text-lg leading-relaxed text-ink/90">
          Estudante de tecnologia atualmente cursando Análise e Desenvolvimento de Sistemas
          pela UCDB e Sistemas de Informação pela UFMS, com interesse em desenvolvimento de
          sistemas, suporte técnico, infraestrutura e soluções voltadas para tecnologia da
          informação.
        </p>
        <p className="text-lg leading-relaxed text-ink/90 mt-4">
          Possuo conhecimentos em Python, HTML, CSS, Java, JavaScript, lógica de programação
          e ambientes Windows e Linux, além de interesse constante em desenvolvimento web,
          sistemas, infraestrutura e resolução de problemas técnicos.
        </p>
        <p className="text-lg leading-relaxed text-ink/90 mt-4">
          Perfil proativo, facilidade de aprendizado e gosto por tecnologia — buscando
          oportunidades que me permitam desenvolver experiência prática em TI, contribuindo
          com dedicação, adaptação rápida e aprendizado contínuo.
        </p>
      </div>
    </section>
  );
}