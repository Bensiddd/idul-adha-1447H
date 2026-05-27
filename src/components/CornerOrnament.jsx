export default function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0 20 Q0 0 20 0" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />
      <path d="M8 16 Q8 8 16 8" stroke="#D4AF37" strokeWidth="0.5" opacity="0.15" />
      <circle cx="4" cy="4" r="1.5" fill="#D4AF37" opacity="0.25" />
    </svg>
  );
}
