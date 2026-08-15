import Button from "../ui/Button";
import CounterNumber from "../ui/CounterNumber";
import { statsData } from "../../data/landingData";
import bannerBg from "../../assets/background-banner.webp";
import halalLogo from "../../assets/Logo-Halal.png";

export default function HeroSection() {
  return (
    <section className="relative bg-linear-to-b from-rose-100/70 via-rose-50/40 to-white text-rose-950 overflow-hidden pt-12 md:pt-24 border-b border-rose-100">
      {/* BACKGROUND IMAGE OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerBg}
          alt="D'Crumble Bakery Banner"
          className="w-full h-full object-cover object-center opacity-15 mix-blend-multiply"
        />
        {/* DECORATIVE BLUR CIRCLES */}
        <div className="absolute top-[-10%] right-[-5%] w-72 md:w-96 h-72 md:h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-72 md:w-96 h-72 md:h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* KONTEN UTAMA HERO */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-16">
        {/* BADGE TAGLINE */}
        <span className="inline-block bg-rose-100 text-rose-900 border border-rose-200/80 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide shadow-sm">
          Kehangatan Roti Segar Setiap Hari
        </span>

        {/* HEADLINE */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 md:mb-6 max-w-2xl text-rose-950">
          Kelembutan Autentik Dalam{" "}
          <span className="text-rose-700">Setiap Gigitan</span>
        </h1>

        {/* DESKRIPSI */}
        <p className="text-sm sm:text-base md:text-lg text-rose-900/80 leading-relaxed max-w-xl mb-8 font-medium">
          Dibuat dari resep pilihan dan bahan 100% halal. D'Crumble hadir
          membawa berbagai pilihan roti, kue, dan cemilan istimewa untuk
          melengkapi momen kebersamaan keluarga.
        </p>

        {/* TOMBOL AKSI */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
          <a href="#menu" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              className="bg-rose-900 text-white hover:bg-rose-800 shadow-md hover:shadow-lg transition-all"
            >
              Jelajahi Menu
            </Button>
          </a>
          <a href="#kontak" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              fullWidth
              className="border-rose-300 text-rose-900 hover:bg-rose-100/60"
            >
              Hubungi Kami
            </Button>
          </a>
        </div>
      </div>

      {/* STRIP STATISTIK COUNTER */}
      <div className="relative z-10 bg-rose-900 text-white border-t border-white/20 py-6 w-full shadow-inner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* GRID ADAPTIF: 2 Kolom di Mobile, 5 Kolom di Laptop/Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-2 md:gap-0 md:divide-x divide-white/20 items-center">
            {/* 4 ITEM COUNTER STATISTIK */}
            {statsData &&
              statsData.map((stat, index) => (
                <div
                  key={stat.id || index}
                  className="flex flex-col items-center text-center px-2 sm:px-4"
                >
                  {/* ANGKA COUNTER */}
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-0.5 sm:mb-1 tracking-tight">
                    <CounterNumber targetText={stat.title} />
                  </span>

                  {/* DESKRIPSI TEKS */}
                  <span className="text-[10px] sm:text-xs text-rose-100/90 leading-tight font-medium max-w-37.5 sm:max-w-45">
                    {stat.desc}
                  </span>
                </div>
              ))}

            {/* LOGO HALAL INDONESIA */}
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center pt-2 md:pt-0 px-2 border-t border-white/10 md:border-t-0">
              <img
                src={halalLogo}
                alt="Halal Indonesia"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain brightness-0 invert opacity-90"
              />
              <span className="text-[8px] sm:text-[9px] tracking-widest text-rose-200/80 font-bold mt-1 uppercase text-center">
                Halal Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
