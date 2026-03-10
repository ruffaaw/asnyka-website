import { Facebook, Instagram, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="flex px-12 py-1.5 justify-between bg-green-deep text-cream text-xs font-normal items-center font-sans">
      <div className="flex flex-row gap-3.5 items-center">
        <Facebook className="fill-cream w-3.5 h-3.5 stroke-2" />
        <Instagram className="w-3.5 h-3.5 stroke-2" />
      </div>

      <p>Znajdź nas: Asnyka - Osiedle Ekologiczne</p>

      <div className="flex flex-row gap-3.5 items-center">
        <Phone className="w-3.5 h-3.5 stroke-2" />
        <p>Skontaktuj się z nami: +48 111 111 111</p>
      </div>
    </header>
  );
}
