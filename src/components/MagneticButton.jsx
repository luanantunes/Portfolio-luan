import { useRef } from 'react';

export default function MagneticButton({ href, className, children }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };

  return (
    <a ref={ref} href={href} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={className} style={{ transition: 'transform 0.15s ease-out' }}>
      {children}
    </a>
  );
}