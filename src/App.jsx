import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import HomePage from "./pages/HomePage";
import ProdukPage from "./pages/ProdukPage";
import KorporatPage from "./pages/KorporatPage";
import OutletPage from "./pages/OutletPage";
import TentangPage from "./pages/TentangPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produk" element={<ProdukPage />} />
          <Route path="/korporat" element={<KorporatPage />} />
          <Route path="/outlet" element={<OutletPage />} />
          <Route path="/tentang" element={<TentangPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
