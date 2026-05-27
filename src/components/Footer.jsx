import { Camera, Globe, MessageCircle } from "lucide-react";

const SOCIALS = [
  { icon: <Camera className="w-4 h-4" />, label: "Instagram", href: "#" },
  { icon: <Globe className="w-4 h-4" />, label: "Facebook", href: "#" },
  { icon: <MessageCircle className="w-4 h-4" />, label: "WhatsApp", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-gold/[0.08] py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Logo */}
        <p className="font-display text-gold/80 text-sm md:flex-1 text-center md:text-left">
          Idul Adha 1447 H
        </p>

        {/* Icons — dead center */}
        <div className="flex gap-5 justify-center md:flex-1">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-gray-500 hover:text-gold transition-colors duration-300"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright + doa */}
        <div className="text-center md:text-right md:flex-1 space-y-1">
          <p className="text-gray-500 text-[0.65rem]">
            &copy; {new Date().getFullYear()} — Berkah untuk semua.
          </p>
          <p className="text-gray-500 text-[0.65rem] leading-relaxed">
            Taqabbalallahu minna wa minkum.
          </p>
        </div>
      </div>
    </footer>
  );
}
