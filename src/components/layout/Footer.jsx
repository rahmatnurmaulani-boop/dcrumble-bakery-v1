import halalLogo from "../../assets/Logo-Halal.png";
import { InstagramIcon, TiktokIcon, FacebookIcon } from "../icons/SocialIcons";

export default function Footer() {
  const menuLinks = [
    "Cemilan Manis",
    "Cookies",
    "Donat Favorit",
    "Exclusive by D'Crumble",
    "Favorit Keluarga",
    "Jajanan Nusantara",
    "Product Viral",
    "Roti Hemat",
    "Roti Pilihan Istimewa",
    "Special Pilihan Acara",
    "Tart Karakter",
    "Untuk yang Special",
    "Whipping Tart Premium",
    "Whipping Tart Special",
  ];

  const layananLinks = [
    "Pesanan Korporat",
    "Snack box & Meeting",
    "Promo",
    "Karir",
    "Katalog",
    "Kontak",
  ];

  return (
    <footer className="bg-rose-900 text-white w-full">
      {/* KONTEN UTAMA FOOTER */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-12 px-6 py-16">
        {/* KOLOM 1: BRAND, DESKRIPSI & LOGO HALAL */}
        <div className="md:w-80 shrink-0 flex flex-col justify-between">
          <div>
            <div className="font-extrabold text-2xl text-white mb-1">
              D'Crumble
            </div>
            <p className="text-xs font-semibold tracking-widest text-rose-300 mb-4 uppercase">
              Bakery
            </p>
            <p className="text-sm leading-relaxed text-white/90">
              Sejak 2020, D'Crumble hadir untuk menemani keseharian keluarga
              Indonesia. Dengan 25 outlet dan layanan untuk pesanan personal,
              corporate, hingga jumlah besar, kami ingin selalu jadi tetangga
              baik yang siap membantu di setiap momen.
            </p>
          </div>

          {/* LOGO HALAL */}
          <div className="mt-6">
            <img
              src={halalLogo}
              alt="Halal Indonesia"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* KOLOM 2: MENU */}
        <div className="shrink-0">
          <h4 className="text-base font-bold text-white mb-4">Menu</h4>
          <ul className="space-y-2 text-sm text-white/90">
            {menuLinks.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-rose-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* KOLOM 3: LAYANAN */}
        <div className="shrink-0">
          <h4 className="text-base font-bold text-white mb-4">Layanan</h4>
          <ul className="space-y-2 text-sm text-white/90">
            {layananLinks.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-rose-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* KOLOM 4: HUBUNGI KAMI */}
        <div className="shrink-0">
          <h4 className="text-base font-bold text-white mb-4">Hubungi Kami</h4>
          <div className="space-y-2 text-sm text-white/90 leading-relaxed">
            <p>Jl. **** No. **</p>
            <p>Kota ****</p>
            <p className="mb-4">Indonesia</p>

            <p>
              <span className="font-bold">WA D'Crumble Care: </span>
              <a
                href="https://wa.me/6281234567890"
                className="underline hover:text-rose-300"
              >
                0812 **** ****
              </a>
            </p>
            <p>
              <span className="font-bold">Phone: </span>
              <a
                href="tel:081234567890"
                className="underline hover:text-rose-300"
              >
                +62 812 **** ****
              </a>
            </p>
            <p>
              <span className="font-bold">Email: </span>
              <a
                href="mailto:hello@dcrumble.id"
                className="underline hover:text-rose-300"
              >
                hello@dcrumble.id
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-rose-950 border-t border-rose-800/60">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-200">
          <p>© 2026 D'Crumble Bakery. All Rights Reserved.</p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-rose-900/80 hover:bg-rose-800 flex items-center justify-center transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-rose-200" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="w-8 h-8 rounded-full bg-rose-900/80 hover:bg-rose-800 flex items-center justify-center transition-colors"
            >
              <TiktokIcon className="w-4 h-4 text-rose-200" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-rose-900/80 hover:bg-rose-800 flex items-center justify-center transition-colors"
            >
              <FacebookIcon className="w-4 h-4 text-rose-200" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
