export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">

      <div
        className="blur-orb w-[700px] h-[700px]"
        style={{
          top: "-220px",
          left: "-220px",
          background:
            "radial-gradient(circle, rgba(99,102,241,.35), transparent 70%)",
          animation: "blob1 20s ease-in-out infinite",
        }}
      />

      <div
        className="blur-orb w-[650px] h-[650px]"
        style={{
          right: "-180px",
          top: "20%",
          background:
            "radial-gradient(circle, rgba(168,85,247,.28), transparent 70%)",
          animation: "blob2 24s ease-in-out infinite",
        }}
      />

      <div
        className="blur-orb w-[550px] h-[550px]"
        style={{
          bottom: "-180px",
          left: "35%",
          background:
            "radial-gradient(circle, rgba(59,130,246,.20), transparent 70%)",
          animation: "blob3 18s ease-in-out infinite",
        }}
      />

      <div className="noise" />

    </div>
  );
}