import Image from "next/image";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  return (
    <>
      <div className="fixed z-30 w-screen">
        <Header />
        <Navbar />
      </div>
      <main className="font-sans"></main>
    </>
  );
}
