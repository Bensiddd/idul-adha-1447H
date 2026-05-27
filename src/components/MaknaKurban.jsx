import useReveal from "./useReveal";
import OrnamentDivider from "./OrnamentDivider";

export default function MaknaKurban() {
  const [ref, inView] = useReveal();

  return (
    <section
      id="makna"
      className="py-16 md:py-28 px-4 bg-bg-light relative overflow-hidden"
    >
      {/* Side ornaments — desktop only */}
      <div
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
      >
        <svg width="120" height="240" viewBox="0 0 120 240" fill="none">
          <path d="M10 10 Q60 50 10 120 Q60 190 10 230" stroke="#0D5C3A" strokeWidth="2" />
          <path d="M30 10 Q80 50 30 120 Q80 190 30 230" stroke="#0D5C3A" strokeWidth="1.5" />
        </svg>
      </div>
      <div
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
      >
        <svg width="120" height="240" viewBox="0 0 120 240" fill="none">
          <path d="M110 10 Q60 50 110 120 Q60 190 110 230" stroke="#0D5C3A" strokeWidth="2" />
          <path d="M90 10 Q40 50 90 120 Q40 190 90 230" stroke="#0D5C3A" strokeWidth="1.5" />
        </svg>
      </div>

      <div
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-primary/60 font-medium text-xs tracking-[0.2em] uppercase mb-4">
          Makna Kurban
        </p>

        <h2 className="font-display text-xl md:text-3xl text-primary mb-6 leading-tight">
          Keikhlasan yang Mengukir Takdir
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-xl mx-auto text-pretty">
          Idul Adha mengajarkan kita tentang ketundukan sejati. Ketika Nabi
          Ibrahim AS rela mengorbankan putra tercintanya Ismail AS demi menaati
          perintah Allah, di sanalah puncak keikhlasan manusia diuji. Namun
          Allah Yang Maha Pengasih menggantikannya dengan seekor domba —
          mengajarkan bahwa ketaatan sejati tidak pernah sia-sia.
        </p>

        <OrnamentDivider className="w-40 mx-auto mb-6 opacity-40" />

        <blockquote className="text-base md:text-lg text-primary/80 italic mb-3 leading-relaxed max-w-lg mx-auto font-medium">
          &ldquo;Sesungguhnya shalatku, ibadahku, hidupku, dan matiku hanyalah
          untuk Allah, Tuhan semesta alam.&rdquo;
        </blockquote>
        <cite className="text-gray-400 text-xs md:text-sm not-italic">
          — QS. Al-An&rsquo;am: 162, diucapkan Nabi Ibrahim AS
        </cite>
      </div>
    </section>
  );
}
