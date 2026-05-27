export default function OrnamentDivider({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="0" y1="10" x2="160" y2="10" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
      <line x1="240" y1="10" x2="400" y2="10" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
      <circle cx="200" cy="10" r="3" fill="#D4AF37" opacity="0.5" />
      <path
        d="M188 4 L196 10 L188 16 M212 4 L204 10 L212 16"
        stroke="#D4AF37"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}
