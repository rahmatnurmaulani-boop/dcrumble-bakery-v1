import { useState } from "react";
import MenuCard from "./MenuCard";
import MenuModal from "./MenuModal";
import { menuData } from "../../../data/landingData";

export default function MenuSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = [
    "Semua",
    ...new Set(menuData.map((item) => item.category)),
  ];

  const filteredItems =
    activeCategory === "Semua"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 bg-rose-50/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-rose-900 mb-3">
            Menu Pilihan Favorit
          </h2>
          <p className="text-sm text-rose-700/80 leading-relaxed">
            Dibuat segar setiap hari dengan bahan-bahan berkualitas terbaik
            untuk menemani berbagai momen manis kamu.
          </p>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? "bg-rose-900 text-white shadow-md scale-105"
                  : "bg-white text-rose-900 border border-rose-200 hover:bg-rose-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onSelect={(selected) => setSelectedItem(selected)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 text-sm">
            Tidak ada produk ditemukan untuk kategori ini.
          </div>
        )}

        {/* MODAL POPUP */}
        <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </section>
  );
}
