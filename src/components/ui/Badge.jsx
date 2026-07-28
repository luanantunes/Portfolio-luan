export default function Badge({ children, color = "#E9C46A" }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border"
      style={{
        borderColor: `${color}55`,
        color,
        background: `${color}15`,
      }}
    >
      {children}
    </span>
  );
}