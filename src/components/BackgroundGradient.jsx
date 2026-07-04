export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #E9C46A, transparent 70%)',
          top: '10%',
          left: '5%',
          animation: 'blob-move-1 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[550px] h-[550px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #B565D9, transparent 70%)',
          top: '50%',
          right: '5%',
          animation: 'blob-move-2 22s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #5FB8B0, transparent 70%)',
          bottom: '5%',
          left: '35%',
          animation: 'blob-move-3 20s ease-in-out infinite',
        }}
      />
    </div>
  );
}