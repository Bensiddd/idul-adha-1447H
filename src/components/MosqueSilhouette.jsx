export default function MosqueSilhouette({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0px -4px 12px rgba(212,175,55,0.25))" }}
    >
      {/* Main mosque body — center dome + two minarets */}
      <path
        d="M720 80 L740 120 L780 120 L780 320 L660 320 L660 120 L700 120 L720 80Z"
        fill="#D4AF37"
        opacity="0.25"
      />
      <path
        d="M710 90 Q720 50 730 90 L735 120 L710 120Z"
        fill="#D4AF37"
        opacity="0.35"
      />
      {/* Left minaret */}
      <rect x="650" y="100" width="8" height="220" fill="#D4AF37" opacity="0.25" />
      <circle cx="654" cy="95" r="6" fill="#D4AF37" opacity="0.35" />
      {/* Right minaret */}
      <rect x="782" y="100" width="8" height="220" fill="#D4AF37" opacity="0.25" />
      <circle cx="786" cy="95" r="6" fill="#D4AF37" opacity="0.35" />
      {/* Side domes */}
      <path
        d="M580 150 Q610 110 640 150 L640 320 L580 320Z"
        fill="#D4AF37"
        opacity="0.15"
      />
      <path
        d="M800 150 Q830 110 860 150 L860 320 L800 320Z"
        fill="#D4AF37"
        opacity="0.15"
      />
      {/* Ground line */}
      <rect x="0" y="300" width="1440" height="20" fill="#D4AF37" opacity="0.12" />
    </svg>
  );
}
