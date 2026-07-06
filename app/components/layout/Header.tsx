import { Facebook, Instagram, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="flex px-4 sm:px-8 lg:px-12 py-1.5 justify-between bg-green-deep text-cream text-xs font-normal items-center font-sans gap-2">
      <div className="flex flex-row gap-3.5 items-center shrink-0">
        <Facebook className="fill-cream w-3.5 h-3.5 stroke-2" />
        <Instagram className="w-3.5 h-3.5 stroke-2" />
      </div>

      {/* <p className="hidden md:block text-center">
        Znajdź nas: Asnyka - Osiedle Ekologiczne
      </p> */}

      <div className="flex flex-row gap-1.5 sm:gap-3.5 items-center shrink-0">
        <Phone className="w-3.5 h-3.5 stroke-2" />
        <p className="hidden sm:block">
          Skontaktuj się z nami: <a href="tel:+48124333878">+48 12 433 38 78</a>
        </p>
        <p className="sm:hidden">
          <a href="tel:+48124333878">+48 12 433 38 78</a>
        </p>
      </div>
    </header>
  );
}
