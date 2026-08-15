import Button from "../../ui/Button";

export default function MenuCard({ item, onSelect }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-rose-100 hover:-translate-y-1">
      <div>
        {/* GAMBAR PRODUK */}
        <div className="relative overflow-hidden rounded-xl mb-3">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* BADGE */}
          {item.badge && (
            <span className="absolute top-3 left-3 bg-rose-600 text-white text-[10px] px-2.5 py-1 rounded-full font-medium shadow-sm">
              {item.badge}
            </span>
          )}
        </div>

        {/* JUDUL & DESKRIPSI PRODUK */}
        <h3 className="font-bold text-rose-900 text-base mb-1 line-clamp-1">
          {item.title}
        </h3>
        <p className="text-xs text-rose-700/80 mb-4 line-clamp-2">
          {item.desc}
        </p>
      </div>

      {/* TOMBOL AKSI */}
      <Button
        onClick={() => onSelect(item)}
        variant="primary"
        size="md"
        fullWidth
        className="mt-auto"
      >
        Lihat Produk!
      </Button>
    </div>
  );
}
