import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/sections/HomePage";

export default function Home() {
  return (
    <>
      <div className="fixed z-30 w-screen">
        <Header />
        <Navbar />
      </div>
      <main className="font-sans">
        <HomePage />
      </main>
    </>
  );
}
