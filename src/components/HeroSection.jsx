import { useEffect, useState } from "react";
import MosqueSilhouette from "./MosqueSilhouette";
import CrescentStar from "./CrescentStar";
import IslamicPattern from "./IslamicPattern";
import OrnamentDivider from "./OrnamentDivider";

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${3 + Math.random() * 94}%`,
  delay: `${Math.random() * 12}s`,
  duration: `${7 + Math.random() * 14}s`,
  size: i % 4 === 0 ? `${6 + Math.random() * 3}px` : `${1 + Math.random() * 4}px`,
}));

function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gold animate-float"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            boxShadow: parseFloat(p.size) > 5 ? "0 0 6px rgba(212,175,55,0.5)" : "none",
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative h-svh flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-gold" />

      {/* Islamic pattern overlay */}
      <IslamicPattern className="absolute inset-0 w-full h-full opacity-10" />

      {/* Crescent & star */}
      <div className="absolute top-8 right-6 md:top-16 md:right-16 animate-float-slow z-10">
        <CrescentStar className="w-16 h-16 md:w-24 md:h-24" />
      </div>

      {/* Mosque silhouette */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <MosqueSilhouette className="w-full h-40 md:h-72" />
      </div>

      {/* Gold particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <OrnamentDivider className="w-48 md:w-72 mx-auto mb-6 opacity-60" />

        <p className="font-arabic text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-gold mb-3 animate-shimmer leading-normal">
          عيد أضحى مبارك
        </p>

        <h1 className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white leading-snug mb-3 tracking-tight">
          Selamat Hari Raya
          <br />
          <span className="text-gold">Idul Adha 1447 H</span>
        </h1>

        <p className="text-white/70 text-xs sm:text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
          Kurban adalah bukti cinta, keikhlasan, dan ketaatan kepada Sang
          Pencipta. Mari berbagi berkah kepada sesama.
        </p>

        <a
          href="#makna"
          className="inline-flex items-center gap-2 bg-gold text-primary-dark font-semibold px-7 py-3 rounded-full hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 text-sm"
          aria-label="Lihat makna kurban"
        >
          Lihat Makna Kurban
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 13l5 5 5-5" />
          </svg>
        </a>

        <OrnamentDivider className="w-48 md:w-72 mx-auto mt-8 opacity-60" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 animate-bounce-subtle z-20">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
