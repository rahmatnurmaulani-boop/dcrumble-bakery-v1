import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

export default function MenuModal({ item, onClose }) {
  if (!item) return null;

  return (
    <Modal isOpen={!!item} onClose={onClose} maxWidth="max-w-md">
      {/* GAMBAR PRODUK */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        {/* BADGE (Jika Ada) */}
        {item.badge && (
          <span className="absolute top-3 left-3 bg-rose-600 text-white text-[10px] px-2.5 py-1 rounded-full font-medium shadow-md">
            {item.badge}
          </span>
        )}
      </div>

      {/* JUDUL & DESKRIPSI */}
      <h3 className="text-xl font-bold text-rose-900 mb-1">{item.title}</h3>
      <p className="text-sm font-medium text-rose-600 mb-3">{item.desc}</p>

      <p className="text-xs text-gray-500 mb-6 leading-relaxed">
        Roti segar diproduksi setiap hari tanpa bahan pengawet. Cocok dinikmati
        bersama keluarga atau sebagai hantaran acara spesial.
      </p>

      {/* TOMBOL AKSI */}
      <div className="flex gap-3">
        <Button onClick={onClose} variant="outline" fullWidth>
          Batal
        </Button>

        <a
          href={`https://wa.me/6281234567890?text=Halo,%20saya%20mau%20pesan%20${encodeURIComponent(
            item.title,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant="success" fullWidth>
            Pesan via WA
          </Button>
        </a>
      </div>
    </Modal>
  );
}
