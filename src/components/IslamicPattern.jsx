export default function IslamicPattern({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="#D4AF37" strokeWidth="0.5" opacity="0.1">
        {/* Outer diamond */}
        <path d="M50 5 L95 50 L50 95 L5 50 Z" />
        {/* Inner diamond */}
        <path d="M50 20 L80 50 L50 80 L20 50 Z" />
        {/* Cross lines */}
        <line x1="5" y1="50" x2="95" y2="50" />
        <line x1="50" y1="5" x2="50" y2="95" />
        {/* Diagonals */}
        <line x1="20" y1="20" x2="80" y2="80" />
        <line x1="80" y1="20" x2="20" y2="80" />
        {/* Corner diamonds */}
        <path d="M5 5 L20 20 L5 20Z" />
        <path d="M95 5 L95 20 L80 20Z" />
        <path d="M5 95 L5 80 L20 80Z" />
        <path d="M95 95 L80 80 L95 80Z" />
      </g>
    </svg>
  );
}
