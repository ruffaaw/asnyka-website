import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import AboutInvestmentPage from "./components/sections/AboutInvestmentPage";
import GalleryPage from "./components/sections/GalleryPage";
import HomePage from "./components/sections/HomePage";
import HousesPage from "./components/sections/HousesPage";
import LocalizationPage from "./components/sections/LocalizationPage";

export default function Home() {
  return (
    <>
      <div className="fixed z-30 w-screen">
        <Header />
        <Navbar />
      </div>
      <main className="font-sans">
        <HomePage />
        <AboutInvestmentPage />
        <GalleryPage />
        <LocalizationPage />
        <HousesPage />
      </main>
    </>
  );
}
