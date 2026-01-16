import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-bold tracking-wide text-lg"
        >
          Texas Cages
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-white/80 hover:text-white">
            Home
          </Link>
          <Link href="/contact" className="text-white/80 hover:text-white">
            Contact
          </Link>
          <Link href="/waiver" className="text-white/80 hover:text-white">
            Waiver
          </Link>
        </nav>
      </div>
    </header>
  );
}
