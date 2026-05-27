import useReveal from "./useReveal";
import CornerOrnament from "./CornerOrnament";

const CARDS = [
  {
    title: "QS. Al-Kautsar : 1–2",
    arabic: "إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ ١ فَصَلِّ لِرَبِّكَ وَٱنْحَرْ ٢",
    translation:
      "Sungguh, Kami telah memberimu (Muhammad) nikmat yang banyak. Maka laksanakanlah shalat karena Tuhanmu, dan berkurbanlah.",
    tafsir:
      "Allah memerintahkan shalat Idul Adha dan menyembelih kurban sebagai wujud syukur atas limpahan nikmat-Nya.",
    label: "Al-Quran",
  },
  {
    title: "Hadits Keutamaan Kurban",
    arabic:
      "مَا عَمِلَ آدَمِيٌّ مِنْ عَمَلٍ يَوْمَ النَّحْرِ أَحَبَّ إِلَى اللَّهِ مِنْ إِهْرَاقِ الدَّمِ",
    translation:
      "Tidak ada amalan yang dilakukan manusia pada hari Nahr (Idul Adha) yang lebih dicintai Allah daripada menumpahkan darah (hewan kurban).",
    tafsir:
      "Hadits ini menunjukkan keutamaan berkurban di hari raya Idul Adha sebagai amalan paling mulia di sisi Allah.",
    label: "Hadits",
  },
];

export default function AyatHadits() {
  const [ref, inView] = useReveal();

  return (
    <section
      id="ayat-hadits"
      className="py-16 md:py-28 px-4 bg-primary-dark relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 5 L95 50 L50 95 L5 50Z" stroke="#D4AF37" strokeWidth="0.8" fill="none" />
          <path d="M50 20 L80 50 L50 80 L20 50Z" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold/50 font-medium text-xs tracking-[0.2em] uppercase mb-3">
            Ayat & Hadits
          </p>
          <h2 className="font-display text-xl md:text-3xl text-gold leading-tight">
            Dalil Keutamaan Kurban
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="relative bg-white/[0.02] border border-gold/15 rounded-2xl p-5 md:p-8 hover:border-gold/30 hover:-translate-y-1 transition-all duration-500 group"
            >
              <CornerOrnament className="absolute top-0 left-0 w-10 h-10" />
              <CornerOrnament className="absolute bottom-0 right-0 w-10 h-10 rotate-180" />

              <span className="inline-block text-gold/40 text-[0.65rem] tracking-[0.2em] uppercase mb-3 font-medium">
                {card.label}
              </span>

              <h3 className="font-display text-base md:text-lg text-gold mb-4">
                {card.title}
              </h3>

              <p className="font-arabic text-lg md:text-2xl text-white/80 leading-[2] mb-5 text-right">
                {card.arabic}
              </p>

              <p className="text-white/60 text-sm leading-relaxed mb-4">
                <span className="text-gold/50 font-semibold text-xs uppercase tracking-wide">
                  Artinya:{" "}
                </span>
                &ldquo;{card.translation}&rdquo;
              </p>

              <div className="border-t border-gold/[0.08] pt-4">
                <p className="text-gray-500 text-xs leading-relaxed">
                  {card.tafsir}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-[0.65rem] mt-8 tracking-wide">
          Diriwayatkan oleh{" "}
          <strong className="text-gold/60 font-medium">HR. Tirmidzi</strong>
        </p>
      </div>
    </section>
  );
}
