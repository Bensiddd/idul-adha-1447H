export default function CrescentStar({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Crescent moon */}
      <circle cx="40" cy="38" r="22" fill="#D4AF37" opacity="0.25" />
      <circle cx="48" cy="32" r="18" fill="#073B24" />
      {/* Star */}
      <path
        d="M58 20 L59.5 24.5 L64 25 L60.5 27.5 L61.5 32 L58 29.5 L54.5 32 L55.5 27.5 L52 25 L56.5 24.5 Z"
        fill="#D4AF37"
        opacity="0.35"
      />
    </svg>
  );
}
