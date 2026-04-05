import { useState } from "react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = ["About", "Projects", "Skills", "Contact"]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-950/90 backdrop-blur-sm border-b border-stone-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="font-mono text-white font-bold text-lg tracking-tight">
          dev<span className="text-amber-400">.</span>portfolio
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs tracking-widest uppercase text-stone-400 hover:text-amber-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest uppercase bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold px-4 py-2 transition-colors duration-200"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-stone-950 border-t border-stone-800 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-widest uppercase text-stone-400 hover:text-amber-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-mono text-xs tracking-widest uppercase bg-amber-400 text-stone-950 font-bold px-4 py-2 text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
