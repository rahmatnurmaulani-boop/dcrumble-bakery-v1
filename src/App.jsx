import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import MenuSection from "./components/sections/menu/MenuSection";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />
      <main className="grow">
        <HeroSection />
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}
