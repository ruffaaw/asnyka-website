export default function Footer() {
  return (
    <footer className="bg-[#1a2e1a] py-8 px-20 flex items-center justify-between border-t border-[rgba(200,221,200,0.1)]">
      <span className="text-[0.78rem] text-[rgba(200,221,200,0.5)]">
        © 2026 Polana Invest Sp. z o.o. · Wszelkie prawa zastrzeżone
      </span>
      <div className="flex gap-6 text-text-dark">
        <a
          href="#"
          className="text-[0.78rem] text-[rgba(200,221,200,0.5)] no-underline transition-colors duration-200 hover:text-green-light"
        >
          Polityka prywatności
        </a>
        <a
          href="#"
          className="text-[0.78rem] text-[rgba(200,221,200,0.5)] no-underline transition-colors duration-200 hover:text-green-light"
        >
          Regulamin
        </a>
        <a
          href="#"
          className="text-[0.78rem] text-[rgba(200,221,200,0.5)] no-underline transition-colors duration-200 hover:text-green-light"
        >
          RODO
        </a>
      </div>
    </footer>
  );
}
