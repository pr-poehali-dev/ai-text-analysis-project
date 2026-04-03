interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-bold">ATOMY</div>
        <nav className="flex items-center gap-6">
          <a
            href="#about"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm hidden sm:block"
          >
            О бренде
          </a>
          <a
            href="https://wa.me/79146336788"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-2 text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors duration-300"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}