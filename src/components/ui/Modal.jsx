import { useEffect } from "react";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "max-w-md", 
}) {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; 
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset"; 
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* BACKDROP / OVERLAY */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* MODAL CONTAINER */}
      <div
        className={`relative w-full ${maxWidth} bg-white rounded-2xl shadow-2xl p-6 z-10 transform transition-all animate-scale-up`}
      >
        {/* HEADER MODAL */}
        <div className="flex items-center justify-between mb-4">
          {title ? (
            <h3 className="text-xl font-bold text-rose-900">{title}</h3>
          ) : (
            <div />
          )}

          {/* Tombol Close (X) */}
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-rose-900 hover:bg-rose-50 p-1.5 rounded-full transition-colors font-bold text-lg leading-none"
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>

        {/* KONTEN UTAMA MODAL */}
        <div>{children}</div>
      </div>
    </div>
  );
}
