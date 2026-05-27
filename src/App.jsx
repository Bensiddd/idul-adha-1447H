import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MaknaKurban from "./components/MaknaKurban";
import AyatHadits from "./components/AyatHadits";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-light font-body text-text-primary overflow-x-hidden">
      <Header />
      <HeroSection />
      <MaknaKurban />
      <AyatHadits />
      <Footer />
    </div>
  );
}
